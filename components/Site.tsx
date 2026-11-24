"use client";

import { motion, MotionConfig } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { FEATURE_ICON } from "@/lib/demo/icons";
import { DemoPlayer } from "@/lib/demo/player";
import { FEATURES } from "@/lib/features";
import { SURVEY_URL, TAGLINE } from "@/lib/site";
import { PhoneNav, TapHint, TapSides } from "./Stories";
import { StageBackground } from "./StageBackground";

export const PHONE = "(max-width: 819px)";
const COUNT = FEATURES.length;

const Svg = ({ html, className }: { html: string; className?: string }) => <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;

const Logo = () => <img className="logo" src="/logo.webp" width={369} height={144} alt="" />;

export function Site({ version, macOS }: { version: string; macOS: string }) {
  const root = useRef<HTMLDivElement>(null);
  const view = useRef<HTMLDivElement>(null);
  const player = useRef<DemoPlayer | null>(null);
  const [{ index, run }, setNow] = useState({ index: 0, run: 0 });
  const [paused, setPaused] = useState(false);
  const [looking, setLooking] = useState(false);

  /** `run` changes even when the Feature doesn't, so clicking the current one restarts it. */
  const select = useCallback((to: number) => {
    const index = (to + COUNT) % COUNT;
    setNow((now) => ({ index, run: now.run + 1 }));
    history.replaceState(null, "", `#${FEATURES[index].id}`);
  }, []);
  const step = useCallback((by: number) => setNow((now) => ({ index: (now.index + by + COUNT) % COUNT, run: now.run + 1 })), []);
  const hold = useCallback((reason: string, on: boolean) => player.current?.hold(reason, on), []);

  useEffect(() => {
    const phone = matchMedia(PHONE);
    const p = new DemoPlayer(view.current!, {
      isPhone: () => phone.matches,
      reducedMotion: matchMedia("(prefers-reduced-motion: reduce)").matches,
      onProgress: (v) => root.current?.style.setProperty("--p", v.toFixed(4)),
      onEnd: () => setNow((now) => ({ index: (now.index + 1) % COUNT, run: now.run + 1 })),
    });
    player.current = p;
    const linked = FEATURES.findIndex((f) => `#${f.id}` === location.hash);
    if (linked > 0) setNow({ index: linked, run: 1 });

    const size = new ResizeObserver(() => p.refit());
    size.observe(view.current!);
    const visibility = () => p.hold("hidden", document.hidden);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      size.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      p.destroy();
      player.current = null;
    };
  }, []);

  useEffect(() => player.current?.play(index), [index, run]);
  useEffect(() => player.current?.hold("user", paused), [paused]);
  useEffect(() => player.current?.hold("hover", looking), [looking]);

  // Development only: while Agentation is open it covers the page, so freeze on the frame being commented on.
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    const over = (e: PointerEvent) => hold("note", e.target instanceof Element && !!e.target.closest("[data-agentation-portal]"));
    document.addEventListener("pointerover", over);
    return () => document.removeEventListener("pointerover", over);
  }, [hold]);

  const overWindow = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && !matchMedia(PHONE).matches) setLooking(!!(e.target as Element).closest(".win"));
  };
  const listKeys = (e: React.KeyboardEvent<HTMLUListElement>) => {
    const by = { ArrowDown: 1, ArrowUp: -1 }[e.key];
    if (!by) return;
    e.preventDefault();
    const to = (index + by + COUNT) % COUNT;
    select(to);
    e.currentTarget.querySelectorAll<HTMLButtonElement>("button")[to].focus();
  };

  const feature = FEATURES[index];
  return (
    <MotionConfig reducedMotion="user">
      <div className="site" ref={root}>
        <header className="left">
          <h1>
            <Logo />
            KeyClip
          </h1>
          <p className="tagline">{TAGLINE}</p>
          <ul className="list" aria-label="What KeyClip does" onKeyDown={listKeys}>
            {FEATURES.map((f, i) => (
              <li key={f.id}>
                <button className={i === index ? "item on" : "item"} aria-current={i === index || undefined} onClick={() => select(i)}>
                  {i === index && (
                    <motion.span layoutId="highlight" className="highlight" style={{ borderRadius: 16 }} transition={{ type: "spring", stiffness: 420, damping: 36 }}>
                      <i />
                    </motion.span>
                  )}
                  <Svg className="ico" html={FEATURE_ICON[f.id]} />
                  <span className="txt">
                    <b>{f.title}</b>
                    <span>{f.description}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <a className="ask" href={SURVEY_URL} target="_blank" rel="noopener">
            What else should I add?
          </a>
        </header>

        <div className="phone top">
          <div className="segs" aria-hidden="true">
            {FEATURES.map((f, i) => (
              <i key={f.id} className={i < index ? "done" : i === index ? "on" : ""} />
            ))}
          </div>
          <div className="name">
            <Logo />
            KeyClip
          </div>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
        </div>

        <main className="stage">
          <StageBackground index={index} />
          <div className="view" ref={view} aria-hidden="true" onPointerOver={overWindow} onPointerLeave={() => setLooking(false)} />
          <TapSides onStep={step} onHold={hold} />
          <button className="pause" onClick={() => setPaused(!paused)} aria-label={paused ? "Play demos" : "Pause demos"}>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <path d={paused ? "M2 1l9 5-9 5z" : "M2 1h3v10H2zM7 1h3v10H7z"} />
            </svg>
            <span>{paused ? "Play" : looking ? "Paused while you look" : "Pause"}</span>
          </button>
          <div className="bar">
            <p>
              KeyClip is 100% free
              <small>
                Version {version} for macOS {macOS} or later
              </small>
            </p>
            <a className="download" href="/download">
              Download
            </a>
          </div>
        </main>

        <div className="phone foot">
          <PhoneNav index={index} onStep={step} />
          <p className="free">KeyClip is 100% free. Download on a Mac.</p>
        </div>
        <TapHint onStep={step} onHold={hold} />
      </div>
    </MotionConfig>
  );
}

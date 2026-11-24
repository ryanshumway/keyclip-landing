"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FEATURES } from "@/lib/features";

type Props = { onStep: (by: number) => void; onHold: (reason: string, on: boolean) => void };

/** The Demo's area on phones: tap a side, swipe, or press and hold to pause. */
export function TapSides({ onStep, onHold }: Props) {
  const gesture = useRef<{ x: number; y: number; held: boolean; timer: number } | null>(null);
  const [flash, setFlash] = useState({ side: 0, n: 0 });

  const down = (e: React.PointerEvent) => {
    if (!e.isPrimary) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    const g = { x: e.clientX, y: e.clientY, held: false, timer: 0 };
    g.timer = window.setTimeout(() => {
      g.held = true;
      onHold("press", true);
    }, 260);
    gesture.current = g;
  };
  const end = (e: React.PointerEvent) => {
    const g = gesture.current;
    if (!g) return;
    gesture.current = null;
    clearTimeout(g.timer);
    onHold("press", false);
    if (e.type === "pointercancel") return;
    const dx = e.clientX - g.x;
    const dy = e.clientY - g.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) return onStep(dx < 0 ? 1 : -1);
    if (g.held || Math.abs(dy) > 20) return;
    const side = e.clientX < innerWidth / 2 ? -1 : 1;
    setFlash((f) => ({ side, n: f.n + 1 }));
    onStep(side);
  };

  return (
    <div className="phone taps" aria-hidden="true" onPointerDown={down} onPointerUp={end} onPointerCancel={end} onContextMenu={(e) => e.preventDefault()}>
      {flash.n > 0 && <i key={flash.n} className={flash.side < 0 ? "left" : "right"} />}
    </div>
  );
}

const Chevron = ({ back }: { back?: boolean }) => (
  <svg width="12" height="20" viewBox="0 0 12 20" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={back ? "M10 2L2 10l8 8" : "M2 2l8 8-8 8"} />
  </svg>
);

/** Back and Next, each naming the Feature it goes to. */
export function PhoneNav({ index, onStep }: { index: number; onStep: (by: number) => void }) {
  const prev = FEATURES[(index + FEATURES.length - 1) % FEATURES.length];
  const next = FEATURES[(index + 1) % FEATURES.length];
  return (
    <nav className="steps" aria-label="Features">
      <button onClick={() => onStep(-1)} aria-label={`Back: ${prev.title}`}>
        <Chevron back />
        <span>
          <small>Back</small>
          {prev.short}
        </span>
      </button>
      <button className="next" onClick={() => onStep(1)} aria-label={`Next: ${next.title}`}>
        <span>
          <small>Next</small>
          {next.short}
        </span>
        <Chevron />
      </button>
    </nav>
  );
}

/** Shown on every visit: which side of the screen does what. */
export function TapHint({ onStep, onHold }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const phone = matchMedia("(max-width: 819px)");
    if (!phone.matches) return;
    setOpen(true);
    const leave = () => !phone.matches && setOpen(false);
    phone.addEventListener("change", leave);
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = still ? 0 : window.setTimeout(() => setOpen(false), 4200);
    return () => {
      clearTimeout(timer);
      phone.removeEventListener("change", leave);
    };
  }, []);
  useEffect(() => onHold("hint", open), [open, onHold]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="hint"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => {
            setOpen(false);
            onStep(e.clientX < innerWidth / 2 ? -1 : 1);
          }}
        >
          <div className="prev">
            <i />
            <b>Tap this side</b>
            to go back
          </div>
          <div>
            <i />
            <b>Tap this side</b>
            for the next one
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

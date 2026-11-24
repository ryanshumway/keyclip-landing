import { SCREENS, art } from "./screens";
import { DEMOS } from "./demos";
import { person } from "./person";

/** Demos run at three-quarter speed; cue times in demos.ts are before this is applied. */
export const PACE = 0.75;
/** How much of the space it could fill the app window takes on desktop. */
const ROOM = 0.8;
export const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
export const span = (t: number, a: number, b: number) => clamp01((t - a) / (b - a));

type Point = [number, number];
type Cursor = HTMLElement & { _p?: Point };

const CURSOR = `<div class="cur"><div><span class="rip"></span><svg width="22" height="28" viewBox="0 0 22 28"><path d="M2 2v20l5-4.600 3.400 7.800 3.900-1.700-3.400-7.600 6.900-.5z" fill="#000" stroke="#fff" stroke-width="1.800" stroke-linejoin="round"/></svg></div></div>`;

type Options = { isPhone: () => boolean; reducedMotion: boolean; onProgress: (p: number) => void; onEnd: () => void };

/**
 * Plays one Demo at a time inside `view`. A Demo is a list of timed cues run
 * off one clock, so pausing, seeking and restarting need no special cases.
 */
export class DemoPlayer {
  private win!: HTMLElement;
  private cur!: Cursor;
  private screens!: HTMLElement;
  private screen!: HTMLElement;
  private index = -1;
  private t = 0;
  private fired = 0;
  private last = 0;
  private raf = 0;
  private ended = false;
  private holds = new Set<string>();
  private timers = new Set<number>();
  /** Phone camera: where the cursor is, and what a cue asked it to hold on. */
  private focus: Point | null = null;
  private shot: HTMLElement | null = null;

  constructor(private view: HTMLElement, private o: Options) {
    this.raf = requestAnimationFrame(this.frame);
  }

  destroy() {
    cancelAnimationFrame(this.raf);
    this.timers.forEach((id) => clearTimeout(id));
    this.view.replaceChildren();
  }

  hold(reason: string, on: boolean) {
    if (on) this.holds.add(reason);
    else this.holds.delete(reason);
    this.view.classList.toggle("held", this.holds.size > 0);
  }

  play(index: number) {
    const prev = this.index >= 0 ? this.win : null;
    this.index = index;
    this.t = prev ? -0.25 : 0;
    this.fired = 0;
    this.ended = false;
    this.o.onProgress(0);
    this.build();
    if (this.o.reducedMotion) {
      this.view.querySelectorAll(".win").forEach((w) => w !== this.win && w.remove());
      this.still();
      return;
    }
    const win = this.win;
    if (!prev) {
      requestAnimationFrame(() => win.classList.remove("instant"));
      return;
    }
    win.classList.add("in-swap");
    void win.offsetWidth;
    win.classList.remove("instant");
    prev.classList.add("out-swap");
    requestAnimationFrame(() => requestAnimationFrame(() => win.classList.remove("in-swap")));
    this.later(() => prev.remove(), 240);
  }

  refit() {
    if (this.index >= 0) this.fit();
  }

  /* ---- cue API ---- */

  q(sel: string): HTMLElement | null {
    return this.screen.querySelector<HTMLElement>(sel) ?? this.win.querySelector<HTMLElement>(sel);
  }
  text(sel: string, value: string) {
    const e = this.q(sel);
    if (e && e.textContent !== value) e.textContent = value;
  }
  html(sel: string, value: string) {
    const e = this.q(sel);
    if (e && e.dataset.h !== value) e.innerHTML = e.dataset.h = value;
  }
  css(sel: string, prop: string, value: string) {
    this.q(sel)?.style.setProperty(prop, value);
  }
  each(sel: string, f: (e: HTMLElement, i: number) => void) {
    this.screen.querySelectorAll<HTMLElement>(sel).forEach(f);
  }
  cls(sel: string, name: string, on = true) {
    this.q(sel)?.classList.toggle(name, on);
  }
  seg(id: string, i: number) {
    const e = this.q(`[data-seg=${id}]`);
    e?.style.setProperty("--i", String(i));
    [...(e?.children ?? [])].forEach((x, j) => x.classList.toggle("on", j === i));
  }
  /** Picks a background image: paints it and rings its swatch. */
  bg(target: string, name: string) {
    this.css(target, "background-image", `url(${art(name)})`);
    this.each("[data-bg]", (e) => e.classList.toggle("on", e.dataset.bg === name));
  }
  go(name: string) {
    const from = this.win.dataset.s ? this.dims() : null;
    const k0 = this.scale();
    const p = this.cur._p;
    this.screens.querySelectorAll<HTMLElement>(".scr").forEach((e) => e.classList.toggle("on", e.dataset.s === name));
    this.screen = this.screens.querySelector<HTMLElement>(`[data-s=${name}]`)!;
    this.win.dataset.s = name;
    this.focus = this.shot = null;
    this.win.querySelectorAll(".call").forEach((e) => e.remove());
    this.fit();
    if (from && p) this.carry(from, k0, p);
  }
  resize(w: number, h: number) {
    const from = this.dims();
    const k0 = this.scale();
    const p = this.cur._p;
    Object.assign(this.screen.dataset, { w: String(w), h: String(h) });
    this.screen.style.width = `${w}px`;
    this.screen.style.height = `${h}px`;
    this.fit();
    if (p) this.carry(from, k0, p);
  }
  move(sel: string, fx = 0.5, fy = 0.5, ms = 520) {
    const p = this.at(sel, fx, fy);
    if (!p) return;
    ms /= PACE;
    this.cur.style.setProperty("--d", `${ms}ms`);
    this.place(p);
    this.focus = p;
    this.fit();
    const el = this.q(sel);
    this.win.querySelectorAll(".hov").forEach((e) => e.classList.remove("hov"));
    if (this.applyingStill) el?.classList.add("hov");
    else this.later(() => el?.classList.add("hov"), ms * 0.85);
  }
  click(sel: string) {
    if (this.applyingStill) return;
    const el = this.q(sel);
    this.cur.classList.remove("dn");
    void this.cur.offsetWidth;
    this.cur.classList.add("dn");
    el?.classList.add("press");
    this.later(() => {
      this.cur.classList.remove("dn");
      el?.classList.remove("press");
    }, 180);
  }
  /** Phone only: hold the camera on this element instead of following the cursor. */
  look(sel: string | null) {
    if (!this.o.isPhone()) return;
    this.shot = sel ? this.q(sel) : null;
    this.fit();
  }
  callout(sel: string, label: string, side: "left" | "right" | "below") {
    const p = this.at(sel, side === "left" ? 0 : side === "below" ? 0.5 : 1, side === "below" ? 1 : 0.5);
    if (!p) return;
    const e = document.createElement("div");
    e.className = "call";
    e.textContent = label;
    this.win.append(e);
    e.style.fontSize = `${14 * Math.max(1, 0.62 / this.scale())}px`;
    const x = side === "left" ? p[0] - e.offsetWidth - 18 : side === "below" ? p[0] - e.offsetWidth / 2 : p[0] + 18;
    e.style.left = `${Math.max(8, Math.min(this.dims().w - e.offsetWidth - 8, x))}px`;
    e.style.top = `${Math.max(20, side === "below" ? p[1] + 28 : p[1] - e.offsetHeight / 2)}px`;
  }

  /* ---- internals ---- */

  private applyingStill = false;

  private later(f: () => void, ms: number) {
    const id = window.setTimeout(() => {
      this.timers.delete(id);
      f();
    }, ms);
    this.timers.add(id);
  }

  private build() {
    const win = (this.win = document.createElement("div"));
    win.className = "win instant";
    win.innerHTML = `<div class="body"><div class="screens"></div></div><div class="floatcam">${person}</div>${CURSOR}`;
    this.view.append(win);
    this.cur = win.querySelector<Cursor>(".cur")!;
    this.screens = win.querySelector<HTMLElement>(".screens")!;
    this.screens.innerHTML = DEMOS[this.index].screens
      .map((n) => `<div class="scr" data-s="${n}" data-w="${SCREENS[n].w}" data-h="${SCREENS[n].h}" style="width:${SCREENS[n].w}px;height:${SCREENS[n].h}px">${SCREENS[n].html}</div>`)
      .join("");
    this.go("home");
    this.place([430, 552]);
  }

  /** Reduced motion: every cue applied at once, nothing moving. */
  private still() {
    this.applyingStill = true;
    const demo = DEMOS[this.index];
    demo.cues.forEach(([, f]) => f(this));
    demo.tick?.(demo.dur - 0.6, this);
    this.o.onProgress(1);
    this.cur.style.display = "none";
    this.applyingStill = false;
  }

  private dims() {
    return { w: Number(this.screen.dataset.w), h: Number(this.screen.dataset.h) };
  }
  private scale() {
    return Number(this.win.style.getPropertyValue("--s")) || 1;
  }
  private place(p: Point) {
    this.cur.style.transform = `translateX(${p[0]}px)`;
    (this.cur.firstElementChild as HTMLElement).style.transform = `translateY(${p[1]}px)`;
    this.cur._p = p;
  }
  /** Keeps the cursor where it was on screen when the window changes size. */
  private carry(from: { w: number; h: number }, k0: number, p: Point) {
    const to = this.dims();
    const k = k0 / this.scale();
    const keep = (v: number, a: number, b: number) => Math.max(24, Math.min(b - 28, (v - a / 2) * k + b / 2));
    this.cur.style.setProperty("--d", "500ms");
    this.place([keep(p[0], from.w, to.w), keep(p[1], from.h, to.h)]);
  }
  private box(el: HTMLElement) {
    const r = el.getBoundingClientRect();
    const s = this.screen.getBoundingClientRect();
    const k = s.width / this.screen.offsetWidth || 1;
    return { x: (r.left - s.left) / k, y: (r.top - s.top) / k, w: r.width / k, h: r.height / k };
  }
  private at(sel: string, fx: number, fy: number): Point | null {
    const el = this.q(sel);
    if (!el) {
      if (process.env.NODE_ENV !== "production") console.warn("Demo cue found nothing:", sel);
      return null;
    }
    const b = this.box(el);
    return [b.x + b.w * fx, b.y + b.h * fy];
  }
  private fit() {
    const S = SCREENS[this.win.dataset.s!];
    const { w, h } = this.dims();
    const tall = h + (S.below ?? 0);
    const vw = this.view.clientWidth;
    const vh = this.view.clientHeight;
    const full = Math.min((vw * 0.92) / w, (vh * (this.o.isPhone() ? 0.88 : 0.95)) / tall, S.max ?? 1.4);
    // On desktop the window leaves room around itself, unless the Stage is so small that its text would stop being readable.
    let s = this.o.isPhone() ? full : Math.min(full, Math.max(full * ROOM, 0.6));
    let tx = 0;
    let ty = (-(S.below ?? 0) / 2) * s;
    if (this.o.isPhone() && !S.below) {
      s = Math.max(full, Math.min(0.62, (vh * 1.25) / h));
      let f: Point = this.focus ?? [w / 2, h / 2];
      if (this.shot) {
        const b = this.box(this.shot);
        s = Math.max(full, Math.min(0.82, (vw * 0.94) / b.w, (vh * 0.92) / b.h));
        f = [b.x + b.w / 2, b.y + b.h / 2];
      }
      const mx = Math.max(0, (w * s - vw * 0.92) / 2);
      const my = Math.max(0, (h * s - vh * 0.92) / 2);
      tx = Math.max(-mx, Math.min(mx, -(f[0] - w / 2) * s));
      ty = Math.max(-my, Math.min(my, -(f[1] - h / 2) * s));
    }
    Object.assign(this.win.style, { width: `${w}px`, height: `${h}px` });
    this.win.style.setProperty("--s", String(s));
    this.win.style.setProperty("--tx", `${tx}px`);
    this.win.style.setProperty("--ty", `${ty}px`);
  }

  private frame = (now: number) => {
    const dt = Math.min(0.05, (now - this.last) / 1000 || 0);
    this.last = now;
    if (this.index >= 0 && !this.ended && !this.o.reducedMotion && this.holds.size === 0) {
      const demo = DEMOS[this.index];
      this.t += dt * PACE;
      while (this.fired < demo.cues.length && demo.cues[this.fired][0] <= this.t) demo.cues[this.fired++][1](this);
      demo.tick?.(this.t, this);
      this.o.onProgress(clamp01(this.t / demo.dur));
      if (this.t >= demo.dur) {
        this.ended = true;
        this.o.onEnd();
      }
    }
    this.raf = requestAnimationFrame(this.frame);
  };
}

import type { DemoPlayer } from "./player";
import { line } from "./icons";
import { STITCH, sizeLabel } from "./screens";

type Cue = [at: number, run: (c: DemoPlayer) => void];
export type Demo = { id: string; dur: number; screens: string[]; cues: Cue[]; tick?: (t: number, c: DemoPlayer) => void };

const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
const span = (t: number, a: number, b: number) => clamp01((t - a) / (b - a));
const clock = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s) % 60).padStart(2, "0")}`;

/** Home: move to a row, click it, arrive at 1.35. */
const fromHome = (row: string, next: string): Cue[] => [
  [0.35, (c) => c.move(`[data-row=${row}]`, 0.5, 0.5, 750)],
  [1.15, (c) => c.click(`[data-row=${row}]`)],
  [1.35, (c) => c.go(next)],
];
/** Home, pick the recording in the open panel, arrive in review at 3.4. */
const openVideo: Cue[] = [
  ...fromHome("open", "open"),
  [1.9, (c) => c.move('[data-f="0"]', 0.5, 0.4)],
  [2.45, (c) => { c.click('[data-f="0"]'); c.cls('[data-f="0"]', "on"); c.cls(".op", "ready"); }],
  [2.65, (c) => c.move(".b-open")],
  [3.2, (c) => c.click(".b-open")],
  [3.4, (c) => c.go("review")],
];
const scrubber = (c: DemoPlayer, v: number, total = 18) => {
  const pct = clamp01(v / total) * 100;
  c.css(".track i", "width", `${pct}%`);
  c.css(".track u", "left", `${pct}%`);
  c.text(".now", clock(Math.max(0, v)));
};
const CAPTIONS = [["Okay,", "quick", "tour", "of", "the"], ["new", "dashboard."], ["Signups", "are", "up", "for", "the"], ["sixth", "week", "running."]];

export const DEMOS: Demo[] = [
  {
    id: "record", dur: 10.8, screens: ["home", "record", "recording", "review"],
    cues: [
      ...fromHome("video", "record"),
      [2.0, (c) => c.move(".recbtn", 0.5, 0.5, 800)],
      [2.9, (c) => c.click(".recbtn")],
      [3.1, (c) => c.go("recording")],
      [4.9, (c) => c.callout(".timer", "Still going. Still free.", "left")],
      [6.6, (c) => c.move(".finish", 0.5, 0.5, 800)],
      [7.5, (c) => c.click(".finish")],
      [7.75, (c) => { c.go("review"); c.text(".dur", "134:07"); }],
      [8.4, (c) => c.look(".rv")],
      [8.6, (c) => c.move(".b-save", 0.5, 0.5, 900)],
    ],
    tick(t, c) {
      const s = Math.floor(8047 * Math.pow(span(t, 3.3, 7.5), 3));
      const mm = String(Math.floor(s / 60) % 60).padStart(2, "0"), ss = String(s % 60).padStart(2, "0"), h = Math.floor(s / 3600);
      if (t > 3 && t < 7.7) c.text(".timer", h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`);
      if (t > 7.8) scrubber(c, t - 7.8, 8047);
    },
  },
  {
    id: "transcribe", dur: 11.4, screens: ["home", "open", "review"],
    cues: [
      ...openVideo,
      [4.1, (c) => c.move(".b-tr", 0.5, 0.5, 800)],
      [4.95, (c) => { c.click(".b-tr"); c.cls(".rv", "drawer-on"); c.html(".b-tr .i", '<span class="spin"></span>'); c.text(".b-tr .t", "Transcribing…"); }],
      [5.4, (c) => c.look(".drawer")],
      [5.9, (c) => { c.cls(".drawer", "ready"); c.html(".b-tr .i", line("bubble", 18, 1.4)); c.text(".b-tr .t", "Transcribe"); }],
      [6.5, (c) => c.move(".drawer li:nth-child(2)", 0.55, 0.5, 700)],
      [7.3, (c) => { c.click(".drawer li:nth-child(2)"); }],
      [7.9, (c) => { c.look(".rv"); c.callout(".drawer ol", "No upload needed", "below"); }],
    ],
    tick(t, c) {
      const seeked = t > 7.35;
      const v = seeked ? 3 + (t - 7.35) : Math.max(0, t - 5.9);
      if (t > 3.5) scrubber(c, t < 5.9 ? Math.max(0, t - 3.6) : v);
      if (t < 5.9) return;
      const base = seeked ? 2 : 0, e = seeked ? t - 7.35 : t - 5.9, k = Math.min(1, Math.floor(e / 1.1)), words = CAPTIONS[base + k];
      const w = Math.min(words.length - 1, Math.floor(((e - k * 1.1) / (k ? 1.9 : 1.1)) * words.length));
      c.html(".cap", words.map((x, i) => `<span class="${i === w ? "on" : ""}">${x}</span>`).join(""));
      c.each(".drawer li", (el, i) => el.classList.toggle("on", i === Math.min(3, Math.floor(v / 3))));
    },
  },
  {
    id: "gif", dur: 11.2, screens: ["home", "open", "review"],
    cues: [
      ...openVideo,
      [4.0, (c) => c.move(".b-gif", 0.5, 0.5, 700)],
      [4.75, (c) => { c.click(".b-gif"); c.cls(".sheet", "show"); }],
      [4.95, (c) => c.look(".sheet")],
      [5.2, (c) => c.move('[data-seg=fps] [data-o="2"]')],
      [5.8, (c) => { c.click('[data-seg=fps] [data-o="2"]'); c.seg("fps", 2); c.text(".est b", "~4.8 MB"); }],
      [6.2, (c) => c.move(".b-conv")],
      [6.8, (c) => { c.click(".b-conv"); c.cls(".sheet", "run"); }],
      [8.4, (c) => { c.cls(".sheet", "done"); c.text(".sh-done small", "4.6 MB"); }],
      [8.7, (c) => c.move(".sheet .b-savegif", 0.5, 0.5, 600)],
      [9.4, (c) => { c.click(".sheet .b-savegif"); c.cls(".sheet", "show", false); }],
      [9.6, (c) => { c.look(".rv"); c.text(".toast b", "GIF Saved"); c.text(".toast small", "launch-demo.gif"); c.cls(".toast-slot", "show"); }],
    ],
    tick(t, c) {
      if (t > 3.5) scrubber(c, Math.max(0, Math.min(t, 4.75) - 3.6));
      const p = span(t, 6.9, 8.3);
      c.css(".sh-run .pbar i", "width", `${p * 100}%`);
      c.text(".sh-run p", `Converting… ${Math.round(p * 100)}%`);
    },
  },
  {
    id: "thumbnails", dur: 12.2, screens: ["home", "thumb"],
    cues: [
      ...fromHome("thumb", "thumb"),
      [1.9, (c) => c.move('[data-seg=bg] [data-o="2"]', 0.5, 0.5, 750)],
      [2.7, (c) => { c.click('[data-seg=bg] [data-o="2"]'); c.seg("bg", 2); c.cls(".th", "removed"); }],
      [3.15, (c) => c.move(".th [data-bg=retro-northernlights]", 0.5, 0.5, 600)],
      [3.8, (c) => { c.click(".th [data-bg=retro-northernlights]"); c.bg(".bgi", "retro-northernlights"); }],
      [4.2, (c) => c.move(".snap", 0.5, 0.5, 600)],
      [4.85, (c) => { c.click(".snap"); c.cls(".th", "counting"); c.text(".snap b", "Cancel"); }],
      [5.1, (c) => c.look(".shot")],
      [7.2, (c) => { c.cls(".th", "counting", false); c.cls(".th", "snapped"); }],
      [7.6, (c) => { c.look(null); c.move(".size", 0.45, 0.5, 600); }],
      [8.25, (c) => { c.click(".size"); c.cls(".th", "menu-on"); }],
      [8.6, (c) => c.move("[data-size=Instagram-Story]", 0.4, 0.5, 500)],
      [9.2, (c) => {
        c.click("[data-size=Instagram-Story]");
        c.each(".opt", (e) => e.classList.toggle("on", e.dataset.size === "Instagram-Story"));
        c.html(".size", sizeLabel("instagram-logo", "Instagram Story / Reel cover · 1,080×1,920"));
        c.css(".shot", "--ar", ".5625");
        c.cls(".th", "menu-on", false);
      }],
      [9.6, (c) => c.move(".b-dl", 0.5, 0.5, 650)],
      [10.35, (c) => { c.click(".b-dl"); c.cls(".toast-slot", "show"); }],
      [10.6, (c) => c.look(".th")],
    ],
    tick(t, c) {
      const n = t > 4.95 && t < 7.2 ? 3 - Math.floor((t - 4.95) / 0.75) : 0;
      c.text(".num", n > 0 ? String(n) : "");
    },
  },
  {
    id: "images-to-gif", dur: 13, screens: ["home", "stitch"],
    cues: [
      ...fromHome("stitch", "stitch"),
      [1.65, (c) => c.cls(".picksheet", "show")],
      [1.8, (c) => c.look(".picksheet")],
      [1.95, (c) => c.move('.picksheet [data-f="0"]', 0.5, 0.4, 450)],
      ...[0, 1, 2, 3].flatMap((i): Cue[] => [
        [2.45 + i * 0.4, (c) => { c.click(`.picksheet [data-f="${i}"]`); c.cls(`.picksheet [data-f="${i}"]`, "on"); c.cls(".picksheet .op", "ready"); }],
        ...(i < 3 ? [[2.55 + i * 0.4, (c: DemoPlayer) => c.move(`.picksheet [data-f="${i + 1}"]`, 0.5, 0.4, 210)] as Cue] : []),
      ]),
      [3.8, (c) => c.move(".picksheet .b-open", 0.5, 0.5, 420)],
      [4.3, (c) => { c.click(".picksheet .b-open"); c.cls(".picksheet", "show", false); c.cls(".st", "filled"); c.text(".count", "4 images · 0 videos"); }],
      [4.6, (c) => c.look(".gprev")],
      [5.9, (c) => { c.move(".gprev", 0.45, 0.75, 350); }],
      [6.3, (c) => { c.look(null); c.css(".stscroll", "--y", "-400px"); }],
      [7.1, (c) => c.move(".apply .pick", 0.5, 0.5, 400)],
      [7.6, (c) => { c.click(".apply .pick"); c.cls(".menu", "show"); }],
      [7.8, (c) => c.move(".menu [data-m=black]", 0.4, 0.5, 250)],
      [8.2, (c) => { c.click(".menu [data-m=black]"); c.cls(".menu", "show", false); c.text(".apply .pick b", "Fade to Black"); }],
      [8.4, (c) => c.move(".b-apply", 0.5, 0.5, 450)],
      [8.95, (c) => { c.click(".b-apply"); c.each(".tr .pick b", (e) => (e.textContent = "Fade to Black")); }],
      [9.3, (c) => { c.css(".stscroll", "--y", "0px"); c.move(".b-exp", 0.5, 0.5, 600); }],
      [10.0, (c) => { c.click(".b-exp"); c.cls(".st", "run"); c.look(".st"); }],
      [11.2, (c) => { c.cls(".st", "run", false); c.cls(".st", "done"); }],
      [11.3, (c) => c.move(".f-done .b-savegif", 0.5, 0.5, 300)],
      [11.7, (c) => { c.click(".f-done .b-savegif"); c.cls(".toast-slot", "show"); }],
    ],
    tick(t, c) {
      const p = span(t, 10.05, 11.1);
      c.css(".gfoot .pbar i", "width", `${p * 100}%`);
      c.text(".f-run p", p < 1 ? `Rendering GIF… ${Math.round(p * 100)}%` : "Finalizing…");
      if (t < 4.3) return;
      // Each still holds 0.8s, then 0.4s into the next; the last one just holds.
      const loop = (t - 4.3) % 4.4, n = STITCH.length, i = Math.min(n - 1, Math.floor(loop / 1.2)), x = i === n - 1 ? 0 : span(loop - i * 1.2, 0.8, 1.2), black = t > 9;
      c.each(".gprev i:not(.black)", (el, j) => {
        const on = j === i ? (black ? (x < 0.5 ? 1 : 0) : 1) : j === i + 1 ? (black ? (x >= 0.5 ? 1 : 0) : x) : 0;
        el.style.opacity = String(on);
      });
      c.css(".gprev .black", "opacity", String(black ? 1 - Math.abs(x - 0.5) * 2 : 0));
      c.text(".transport code", `${loop.toFixed(1)}s / 4.4s`);
    },
  },
  {
    id: "mockup", dur: 12.2, screens: ["home", "open", "review"],
    cues: [
      ...openVideo,
      [4.0, (c) => c.move('[data-seg=mode] [data-o="1"]', 0.5, 0.5, 700)],
      [4.75, (c) => { c.click('[data-seg=mode] [data-o="1"]'); c.seg("mode", 1); c.cls(".rv", "framed"); c.bg(".canvas", "retro-cherry"); c.resize(1280, 960); }],
      [4.9, (c) => c.look(".rv")],
      [5.8, (c) => c.move(".frametools [data-bg=softwaves-peach]", 0.5, 0.5, 600)],
      [6.5, (c) => { c.click(".frametools [data-bg=softwaves-peach]"); c.bg(".canvas", "softwaves-peach"); }],
      [6.95, (c) => c.move(".frametools [data-bg=retro-northernlights]")],
      [7.5, (c) => { c.click(".frametools [data-bg=retro-northernlights]"); c.bg(".canvas", "retro-northernlights"); }],
      [7.9, (c) => c.move('[data-dc="#c4c8ce"]', 0.5, 0.5, 600)],
      [8.6, (c) => { c.click('[data-dc="#c4c8ce"]'); c.each("[data-dc]", (e) => e.classList.toggle("on", e.dataset.dc === "#c4c8ce")); c.css(".device", "--dc1", "#cdd1d6"); c.css(".device", "--dc2", "#b4b8be"); }],
      [9.0, (c) => c.move(".b-save", 0.5, 0.5, 650)],
      [9.75, (c) => { c.click(".b-save"); c.text(".b-save .t", "Saving…"); c.cls(".rv", "saving-on"); }],
      [10.75, (c) => { c.cls(".rv", "saving-on", false); c.text(".b-save .t", "Save Video…"); c.text(".toast small", "launch-demo-framed.mov"); c.cls(".toast-slot", "show"); }],
    ],
    tick(t, c) {
      if (t > 3.5) scrubber(c, Math.max(0, t - 3.6));
      const p = span(t, 9.8, 10.7);
      c.css(".saving i", "width", `${p * 100}%`);
      if (t > 9.8 && t < 10.75) c.text(".b-save .t", `Saving… ${Math.round(p * 100)}%`);
    },
  },
];

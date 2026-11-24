/**
 * The KeyClip app's screens, rebuilt as HTML from its SwiftUI views (v1.1.0).
 * Sizes are the app's own points, so 1px here is 1pt there. Styles: app/demo.css.
 */
import { line, ph, solid } from "./icons";
import { person, room } from "./person";

export const art = (n: string) => `/art/${n}.webp`;
export const thumb = (n: string) => `/art/thumb/${n}.webp`;
const IMAGES = ["retro-cherry", "retro-kungfuchina", "retro-northernlights", "retro-southwest", "softwaves-blackwhite", "softwaves-bluepurple", "softwaves-greenenergy", "softwaves-peach"];
const COLORS = ["#000", "#3d3d3d", "#949494", "#0f5c1e", "#5c1a1a", "#17375e", "#401f5c", "#5e3a1a"];
export const STITCH = ["retro-cherry", "softwaves-peach", "retro-northernlights", "retro-southwest"];

const lights = `<div class="lights"><i class="close"></i><i></i><i></i></div>`;
const back = (label = "Home") => `<span class="back">${ph("arrow-left", 12)}${label}</span>`;
const seg = (id: string, opts: string[], sel = 0, kind = "") =>
  `<div class="seg ${kind}" data-seg="${id}" style="--n:${opts.length};--i:${sel}">${opts.map((o, i) => `<span class="${i === sel ? "on" : ""}" data-o="${i}">${o}</span>`).join("")}</div>`;
const toast = (title: string, file: string) =>
  `<div class="toast">${solid.checkcircle(20, "#000", "var(--kc-yellow)")}<div><b>${title}</b>${file ? `<small>${file}</small>` : ""}</div><span>Show in Finder</span></div>`;

/** The recording itself: a screen with a browser on it, plus the camera bubble. */
const BARS = [38, 52, 46, 63, 58, 74, 70, 96];
export const desktop = `<div class="desk" style="background-image:url(${art("softwaves-bluepurple")})"><div class="br"><div class="br-top"><i></i><i></i><i></i><span>app.sunnyside.co</span></div><div class="br-body"><aside><b>Sunnyside</b><u class="on">Overview</u><u>Campaigns</u><u>People</u><u>Settings</u></aside><section><small>Signups</small><h4>12,480<em>+18% this week</em></h4><div class="bars">${BARS.map((h, i) => `<s style="--h:${h}%" class="${i === BARS.length - 1 ? "hi" : ""}"></s>`).join("")}</div></section></div></div></div>`;
export const bubble = `<div class="face">${person}</div>`;
const recording = `${desktop}${bubble}`;

const ROWS: [string, string, string, string, string, string?][] = [
  ["video", "video-camera", "#FFD000", "Record Video", "Screen &amp;/or camera. Unlimited Length"],
  ["camera", "camera", "#54D68A", "Record Yourself", "Control your camera and record yourself, no screen."],
  ["gif", "gif", "#FF9724", "Record a GIF", "Short, looping clip for chat &amp; docs", "20S MAX"],
  ["thumb", "image-square", "#FFD000", "Create a Thumbnail", "Thumbnail creation tool for all social apps"],
  ["open", "folder-open", "#FFFFFF", "Open a Video", "Open a pre-recorded video for transcription or GIF creation"],
  ["stitch", "images-square", "#FF9724", "Create a GIF from Images or Videos", "Stitch clips and stills into one loop"],
];

const panel = (o: { message: string; folder: string; files: { name: string; img: string; meta: string }[]; kind: string }) =>
  `<div class="op ${o.kind}"><aside><small>Favorites</small>${[["desktop", "Desktop"], ["folder", "Documents"], ["downline", "Downloads"], ["film", "Movies"], ["photo", "Pictures"]].map(([i, l]) => `<u class="${l === o.folder ? "on" : ""}">${line(i, 15, 1.4)}${l}</u>`).join("")}</aside><div class="op-main"><div class="op-msg">${o.message}</div><div class="op-bar"><span class="nav">${line("left", 14)}${line("right", 14)}</span><span class="pop">${line("folder", 14, 1.4)}${o.folder}${line("updown", 12)}</span><span class="find">${line("search", 13)}Search</span></div><div class="op-grid">${o.files.map((f, i) => `<div class="file" data-f="${i}"><span class="ft" style="background-image:url(${f.img})">${f.meta ? `<em>${f.meta}</em>` : ""}</span><b>${f.name}</b></div>`).join("")}</div><div class="op-foot"><span class="mac">Cancel</span><span class="mac go b-open">Open</span></div></div></div>`;

const imageWells = IMAGES.map((n) => `<i data-bg="${n}" style="background-image:url(${thumb(n)})"></i>`).join("");
const slider = (pct: number, cls = "") => `<span class="sl ${cls}"><i style="width:${pct}%"></i><u style="left:${pct}%"></u></span>`;
const stepper = (v: number, on = true) => `<span class="step ${on ? "" : "off"}"><i>${line("minus", 12, 2.4)}</i><b>${v}</b><em>ms</em><i>${line("plus", 12, 2.4)}</i></span>`;
const picker = (v: string, cls = "") => `<span class="pick ${cls}"><b>${v}</b>${line("updown", 13, 1.8)}</span>`;

const LINES = ["quick tour of the new dashboard.", "Signups are up for the sixth week running.", "Let me show you where that comes from.", "Every bar here is one campaign."];

const review = `${lights}<div class="rv"><div class="rv-main">
<div class="rv-mode">${seg("mode", ["Recording", "Frame"], 0, "frame")}</div>
<div class="rv-mid"><div class="player"><div class="vid"><div class="canvas"><div class="device"><div class="dscreen">${recording}</div><span class="notch"></span></div></div><div class="cap"></div></div></div><div class="shift"><small>Shift<br>up</small><span><u></u></span><small>–</small></div></div>
<div class="scrub"><span class="pp">${solid.pause()}</span><code class="now">0:00</code>${slider(0, "track")}<code class="dur">0:18</code></div>
<div class="frametools"><div class="cards">
<div class="fc"><h6>${line("canvas", 14, 1.4)}Canvas</h6><div class="fr"><label>Size</label>${seg("canvas", ["Fit", "1:1", "4:5", "16:9<sup>★</sup>", "9:16"], 3, "frame fill")}</div><div class="fr"><label>Show top</label>${seg("top", ["Half", "⅔", "¾"], 2, "frame fill")}</div><div class="fr pad"><label>Padding</label>${slider(59)}<span>Normal · 96px</span></div><div class="stops"><span>Tight</span><span class="on">Normal</span><span>Roomy</span></div></div>
<div class="fc"><h6>${line("devices", 15, 1.4)}Device</h6><div class="fr"><label>Type</label>${seg("dev", ["Auto · Laptop", "Laptop", "Phone"], 0, "frame fill")}</div><div class="fr sm"><label>Border</label>${slider(38)}<span>24px</span></div><div class="fr"><label>Color</label><div class="wells sq">${["#232425", "#c4c8ce", "#d8b98a", "#e8a8c0", "#62489b", "#24588f", "#128277", "#c01f3a"].map((c, i) => `<i data-dc="${c}" class="${i ? "" : "on"}" style="background:${c}"></i>`).join("")}<i class="well" style="--w:#232425"></i></div></div></div>
<div class="fc"><h6>${line("photo", 14, 1.4)}Background</h6><div class="fr"><label>Images</label><div class="wells imgs">${imageWells}</div></div><div class="fr"><label>Colors</label><div class="wells imgs tight">${COLORS.map((c) => `<i style="background:${c}"></i>`).join("")}<i class="well" style="--w:var(--kc-yellow)"></i></div></div><div class="fr"><label>Custom</label><span class="kb sec up">${line("share", 14)}Upload Custom BG</span></div></div>
</div><p>Output 1920×1080 &nbsp;·&nbsp; Showing 99% of device so top padding matches sides &nbsp;·&nbsp; No captions or mic audio</p></div>
<div class="actions"><span class="kb ghost">${line("trash", 17, 1.5)}Trash</span><span class="kb ghost">${line("redo", 15)}Delete &amp; Rerecord</span><u></u><span class="kb sec b-tr"><span class="i">${line("bubble", 18, 1.4)}</span><span class="t">Transcribe</span></span><span class="kb sec b-gif">${line("photos", 19, 1.4)}Convert to GIF</span><span class="kb pri b-save">${solid.downcircle(16)}<span class="t">Save Video…</span></span></div>
<div class="saving"><i></i></div>
</div><aside class="drawer"><header><h5>Transcript</h5><span class="y">${line("sliders", 15, 1.6)}</span><span>${line("close", 13)}</span></header><div class="wait"><span class="spin"></span>Transcribing on-device…</div><ol>${LINES.map((s, i) => `<li><div><code>0:0${i * 3}</code><small>98%</small></div><p>${i ? "" : "<mark>Okay</mark>, "}${s}</p></li>`).join("")}</ol></aside></div>
<div class="sheet"><header><div><b>Export as GIF</b><small>launch-demo</small></div><span class="x">${line("close", 11, 2.2)}</span></header>
<div class="sh-set"><div class="sr"><label>Frame rate</label>${seg("fps", ["10 fps", "15 fps", "24 fps"], 1, "sys")}</div><div class="sr"><label>Scale</label>${seg("scale", ["¼ size", "½ size", "Full size"], 1, "sys")}</div><div class="dim">960 × 540</div><div class="sr loop"><label>Loop</label><i class="toggle"></i></div><div class="sr est"><label>Estimated size</label><b>~3.1 MB</b></div><div class="sf"><span class="kb ghost">Cancel</span><u></u><span class="kb pri b-conv">Convert to GIF</span></div></div>
<div class="sh-run"><div class="pbar"><i></i></div><p>Converting… 0%</p></div>
<div class="sh-done">${solid.checkcircle(36, "var(--kc-yellow)", "#1f2120")}<b>GIF ready</b><small>2.9 MB</small><div class="sf"><span class="kb ghost">Done</span><u></u><span class="kb sec b-copy">${line("docs", 15, 1.5)}Copy</span><span class="kb pri b-savegif">${solid.downcircle(16)}Save GIF…</span></div></div></div>
<div class="toast-slot">${toast("Video Saved", "launch-demo.mov")}</div>`;

const SIZES: [string, string, [string, number, number][]][] = [
  ["youtube-logo", "YouTube", [["Thumbnail", 1280, 720]]],
  ["instagram-logo", "Instagram", [["Post (portrait)", 1080, 1350], ["Square", 1080, 1080], ["Story / Reel cover", 1080, 1920]]],
  ["x-logo", "X", [["Post", 1600, 900]]],
  ["facebook-logo", "Facebook", [["Post (portrait)", 1080, 1350], ["Square", 1080, 1080]]],
  ["linkedin-logo", "LinkedIn", [["Post", 1200, 627], ["Square", 1080, 1080]]],
];
export const sizeLabel = (icon: string, text: string) => `${ph(icon, 16)}<span>${text}</span>${line("down", 11, 2.4)}`;

const thumbScreen = `${lights}<div class="th">${back()}<div class="size">${sizeLabel("youtube-logo", "YouTube Thumbnail · 1,280×720")}</div>
<div class="sizemenu">${SIZES.map(([icon, name, sizes]) => `<h6>${ph(icon, 13)}${name.toUpperCase()}</h6>${sizes.map(([l, w, h]) => `<div class="opt ${name === "YouTube" ? "on" : ""}" data-size="${name}-${l.split(" ")[0]}"><span>${l}</span><em>${w}×${h}</em>${line("check", 11, 2.6)}</div>`).join("")}`).join("")}</div>
<div class="stagebox"><div class="shot">${room}<div class="bgi"></div>${person}<div class="num"></div><div class="flash"></div></div></div>
<div class="tc"><div><h6>${ph("selection-background", 14)}Background</h6>${seg("bg", ["Keep", "Blur", "Remove"], 0, "yel")}</div><div class="timerwrap"><h6>${ph("timer", 14)}Timer</h6>${seg("tm", ["3s", "5s", "10s"], 0, "yel")}</div></div>
<div class="opts"><div class="cols"><span>Transparent</span>${COLORS.map((c) => `<i style="background:${c}"></i>`).join("")}</div><div class="wells wide">${imageWells}</div></div>
<div class="thfoot"><span class="kb ghost b-re">Delete &amp; retake</span><u></u><span class="snap"><i></i><b>Snap</b></span><span class="kb pri b-dl">${line("downline", 15, 1.9)}Download</span></div></div>
<div class="toast-slot">${toast("Thumbnail saved", "")}</div>`;

const transitionRow = `<div class="tr">${picker("Dissolve")}<div class="ms"><label>Hold</label>${stepper(800)}<label>Transition</label>${stepper(400)}</div></div>`;
const itemRow = (n: string) => `<div class="it">${line("grip", 13, 1.4)}<span class="itt" style="background-image:url(${thumb(n)})"></span><div><b>${n}.png</b><small>Image · 1440×810</small></div><u></u><span class="dots">•••</span>${line("close", 11, 1.6)}</div>`;
const stitchScreen = `${lights}<div class="st"><div class="sthead">${back("Back")}<h3>GIF Creator</h3><small class="count">0 images · 0 videos</small></div>
<div class="stview"><div class="stscroll"><div class="gprev">${STITCH.map((n, i) => `<i style="background-image:url(${art(n)})" class="${i ? "" : "on"}"></i>`).join("")}<i class="black"></i><div class="gempty">${line("photos", 36, 1.3)}Preview appears once you add images or videos</div></div>
<div class="transport"><span>${solid.rewind(13)}</span><span>${solid.pause(12)}</span><u></u><code>0.0s / 4.4s</code></div>
<div class="cv"><h6>CANVAS — fills the gaps around items that don’t share an aspect ratio</h6><div class="fr"><label>Background</label><div class="cols">${["#000", "#fff", "#1f1f1f", "#ffcc00", "#ff8a1f"].map((c, i) => `<i class="${i === 2 ? "on" : ""}" style="background:${c}"></i>`).join("")}</div></div><div class="fr"><label>Border</label>${slider(4)}</div><span class="zero">0px</span><span class="tick"><span>0px</span><span>4px</span><span>8px</span><span>16px</span></span></div>
<div class="apply"><div class="fr"><label>APPLY TO ALL</label>${picker("Dissolve", "all")}<u></u><span class="kb pri b-apply">Apply</span></div><div class="ms"><label>Hold</label>${stepper(800)}<label>Transition</label>${stepper(400)}</div></div>
${STITCH.map((n, i) => itemRow(n) + (i < 3 ? transitionRow : "")).join("")}</div></div>
<div class="menu"><div>Cut</div><div class="on">${line("check", 11, 2.4)}Dissolve</div><div data-m="black">Fade to Black</div><div>Fade to White</div></div>
<div class="gfoot"><div class="f-edit">${seg("gfps", ["10 fps", "15 fps", "24 fps"], 2, "sys")}${seg("gsc", ["¼", "½", "Full"], 2, "sys")}<small>1,440 × 810</small><u></u><b class="mb">≈ 1.7 MB</b><span class="kb pri b-exp">${line("share", 14, 1.7)}Export GIF</span></div><div class="f-run"><div class="pbar"><i></i></div><p>Rendering GIF… 0%</p></div><div class="f-done"><span class="kb ghost">Done</span><small>1.6 MB</small><u></u><span class="kb sec">${line("docs", 15, 1.5)}Copy</span><span class="kb pri b-savegif">${solid.downcircle(16)}Save GIF…</span></div></div>
<div class="picksheet">${panel({ message: "Choose images or videos to turn into a GIF", folder: "Pictures", kind: "sheetp", files: [...STITCH, "softwaves-greenenergy", "retro-kungfuchina"].map((n) => ({ name: `${n}.png`, img: thumb(n), meta: "" })) })}</div>
<div class="toast-slot up">${toast("GIF Saved", "trip-loop.gif")}</div></div>`;

export type Screen = { w: number; h: number; html: string; /** Largest scale on the Stage. */ max?: number; /** Extra room below the window, for the floating camera. */ below?: number };

export const SCREENS: Record<string, Screen> = {
  home: {
    w: 520, h: 590,
    html: `${lights}<div class="home"><h1>KeyClip</h1><p>What do you want to do?</p>${ROWS.map(([id, icon, color, title, sub, chip]) => `<div class="row" data-row="${id}"><span class="ic" style="color:${color};background:${color}29">${ph(icon, 20)}</span><div><b>${title}${chip ? `<em>${chip}</em>` : ""}</b><small>${sub}</small></div>${line("right", 13, 1.9)}</div>`).join("")}</div>`,
  },
  record: {
    w: 520, h: 626,
    html: `${lights}<div class="rec">${back()}<header><h2>Record Video</h2><span class="kb ghost">${ph("chat-circle", 14)}Feedback</span><span class="kb ghost">${ph("gear", 14)}Settings</span></header><p>Display, Camera &amp; Microphone</p><div class="pane"><div>${recording}</div></div>${[["camera", "FaceTime HD Camera"], ["microphone", "MacBook Pro Microphone"], ["monitor", "Display 1"]].map(([i, l]) => `<div class="src">${ph(i, 18)}<span>${l}</span>${line("down", 12, 1.9)}</div>`).join("")}<div class="recbtn"></div></div>`,
  },
  recording: {
    w: 520, h: 245, max: 1.15, below: 190,
    html: `${lights}<div class="live"><code class="timer">00:00</code><span class="mic">${solid.mic(11)}<i><u></u></i></span><div class="act l">${line("uturn", 30, 1.7)}<small>Restart</small></div><div class="pausebtn">${solid.pause(22)}</div><div class="act r">${line("trash", 30, 1.5)}<small>Trash</small></div><div class="finish">${line("check", 14, 2.2)}Finish Recording</div></div>`,
  },
  open: {
    w: 760, h: 440,
    html: panel({ message: "Choose a video to open in KeyClip", folder: "Movies", kind: "", files: [{ name: "launch-demo.mov", img: thumb("softwaves-bluepurple"), meta: "0:18" }, { name: "team-update.mp4", img: thumb("retro-southwest"), meta: "4:32" }, { name: "onboarding.mov", img: thumb("softwaves-peach"), meta: "12:06" }, { name: "standup.mov", img: thumb("retro-kungfuchina"), meta: "1:40" }] }),
  },
  review: { w: 1010, h: 620, html: review },
  thumb: { w: 720, h: 680, html: thumbScreen },
  stitch: { w: 760, h: 680, html: stitchScreen },
};

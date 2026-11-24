/** The colors behind the app. `base` fills the Stage and the blobs are made of `colors`. */
export type Look = { base: string; colors: [string, string, string, string, string, string] };

export const LOOKS = {
  spring: { base: "#bfe3ea", colors: ["#0aa6b8", "#7aa7ff", "#f7d3e6", "#0b4f7d", "#45e3d0", "#a594ff"] },
  bloom: { base: "#fbf3f5", colors: ["#f0607c", "#f6a6cf", "#ffb08a", "#c9b3ff", "#ff7a59", "#fbd3e4"] },
  aurora: { base: "#04211f", colors: ["#19d68c", "#5f86ff", "#ff9a76", "#077a66", "#a8ffd0", "#3b4fd6"] },
  yellow: { base: "#ffc400", colors: ["#ffd000", "#ff7a1a", "#fff0a0", "#ff9d00", "#ffe14d", "#ff5470"] },
  canyon: { base: "#ffd9c2", colors: ["#ff6a26", "#8aa2ff", "#ffb02e", "#d8431c", "#ffc2a3", "#ff7fae"] },
} satisfies Record<string, Look>;

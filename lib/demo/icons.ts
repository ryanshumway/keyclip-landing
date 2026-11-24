import { PHOSPHOR } from "./phosphor";

export const ph = (name: string, size = 18) =>
  `<svg class="ph" width="${size}" height="${size}" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="${PHOSPHOR[name]}"/></svg>`;

/** Line icons drawn to sit where the app uses system symbols. 20-unit grid. */
const LINE: Record<string, string> = {
  trash: '<path d="M3.5 5.500h13M7.500 5.500V4a1.300 1.300 0 0 1 1.300-1.300h2.400A1.300 1.300 0 0 1 12.500 4v1.500M5 5.500l.7 10.300a1.700 1.700 0 0 0 1.700 1.500h5.200a1.700 1.700 0 0 0 1.700-1.500L15 5.500M8.200 8.500l.2 6M11.800 8.500l-.2 6"/>',
  redo: '<path d="M4.600 6.800A6.600 6.600 0 1 1 3.400 10.700M4.300 2.900l.2 4 4-.2"/>',
  uturn: '<path d="M4 7.500h8.200a4.200 4.200 0 0 1 0 8.400H9.500M7.500 4L4 7.500 7.500 11"/>',
  bubble: '<path d="M5 3.500h10A2.500 2.500 0 0 1 17.500 6v6a2.500 2.500 0 0 1-2.500 2.500H9.500L6 17.500v-3H5A2.500 2.500 0 0 1 2.500 12V6A2.500 2.500 0 0 1 5 3.500ZM6 8h2.500M10.500 8H14M6 11h4.500M12.500 11H14"/>',
  photos: '<path d="M6.500 6.800h10A1.500 1.500 0 0 1 18 8.300v6.900a1.500 1.500 0 0 1-1.500 1.500h-10A1.500 1.500 0 0 1 5 15.200V8.300a1.500 1.500 0 0 1 1.500-1.500ZM5.200 14.300l3.400-3.200 2.800 2.800 2-1.700 4.300 3.600M3.500 13.200l-1.300-6a1.500 1.500 0 0 1 1.200-1.800l9-1.700a1.500 1.500 0 0 1 1.700 1.100"/><circle cx="14" cy="9.800" r=".9" fill="currentColor"/>',
  photo: '<rect x="2" y="4" width="16" height="12" rx="2"/><path d="M2.300 14l4-3.800 3.300 3 2.200-1.800 5.800 4.200"/><circle cx="13.500" cy="7.600" r="1" fill="currentColor"/>',
  close: '<path d="M4.500 4.500l11 11M15.500 4.500l-11 11"/>',
  sliders: '<path d="M2.500 5.500h8.500M15 5.500h2.500M2.500 10h3M9.500 10h8M2.500 14.500h8.500M15 14.500h2.500"/><circle cx="13" cy="5.500" r="1.800"/><circle cx="7.500" cy="10" r="1.800"/><circle cx="13" cy="14.500" r="1.800"/>',
  check: '<path d="M3.500 11l4.300 5L16.500 4"/>',
  share: '<path d="M10 12V2.500M6.800 5.300L10 2.200l3.200 3.100M6.500 8H5.200A1.700 1.700 0 0 0 3.500 9.700v6.100a1.700 1.700 0 0 0 1.700 1.700h9.600a1.700 1.700 0 0 0 1.700-1.700V9.700A1.700 1.700 0 0 0 14.800 8h-1.300"/>',
  docs: '<path d="M8.300 2.500h4.200l3.500 3.600v6.200a1.500 1.500 0 0 1-1.500 1.500H8.300a1.500 1.500 0 0 1-1.500-1.500V4a1.500 1.500 0 0 1 1.500-1.500ZM12.300 2.700v3.600h3.500M6.500 6.300h-.8A1.500 1.500 0 0 0 4.200 7.800V16a1.500 1.500 0 0 0 1.500 1.500h6A1.500 1.500 0 0 0 13.200 16v-2"/>',
  downline: '<path d="M10 3v10.500M5.800 9.500L10 13.700l4.200-4.200M3.800 17h12.400"/>',
  grip: '<path d="M2.500 6h15M2.500 10h15M2.500 14h15"/>',
  plus: '<path d="M10 3.500v13M3.500 10h13"/>',
  minus: '<path d="M3.500 10h13"/>',
  updown: '<path d="M6.500 8L10 4.500 13.500 8M6.500 12l3.500 3.500 3.500-3.500"/>',
  down: '<path d="M4.500 7.500L10 13l5.500-5.500"/>',
  right: '<path d="M7 3.500l6 6.500-6 6.500"/>',
  left: '<path d="M13 3.500L7 10l6 6.500"/>',
  canvas: '<rect x="2.500" y="3.500" width="15" height="13" rx="2"/><path d="M2.500 8h15M11 8v8.500"/>',
  devices: '<path d="M4 13.500V6a1.200 1.200 0 0 1 1.200-1.200h9.600M1.500 15.500h10"/><rect x="13.500" y="7.500" width="5" height="9" rx="1.200"/>',
  search: '<circle cx="8.800" cy="8.800" r="5.300"/><path d="M12.800 12.800l4 4"/>',
  folder: '<path d="M2.500 6A1.500 1.500 0 0 1 4 4.500h3.500l1.800 1.800H16A1.500 1.500 0 0 1 17.500 7.800V14a1.500 1.500 0 0 1-1.500 1.500H4A1.500 1.500 0 0 1 2.500 14Z"/>',
  film: '<rect x="2.500" y="4" width="15" height="12" rx="2"/><path d="M6 4v12M14 4v12M2.500 8H6M2.500 12H6M14 8h3.500M14 12h3.500"/>',
  desktop: '<rect x="2.500" y="3.500" width="15" height="10" rx="1.500"/><path d="M7 17h6M10 13.500V17"/>',
};
export const line = (name: string, size = 16, weight = 1.7) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="${weight}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${LINE[name]}</svg>`;

export const solid = {
  play: (s = 11) => `<svg width="${s}" height="${s}" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M2.200 1.100v9.800a.6.6 0 0 0 .9.500l8-4.900a.6.6 0 0 0 0-1l-8-4.900a.6.6 0 0 0-.9.500Z"/></svg>`,
  pause: (s = 11) => `<svg width="${s}" height="${s}" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><rect x="1.800" y="1" width="3" height="10" rx=".8"/><rect x="7.200" y="1" width="3" height="10" rx=".8"/></svg>`,
  rewind: (s = 11) => `<svg width="${s}" height="${s}" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><rect x="1" y="1.500" width="1.800" height="9" rx=".6"/><path d="M11 2v8a.5.5 0 0 1-.8.4L4 6.400a.5.5 0 0 1 0-.8l6.200-4a.5.5 0 0 1 .8.400Z"/></svg>`,
  mic: (s = 11) => `<svg width="${s}" height="${s}" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true"><rect x="3.700" y=".5" width="4.600" height="7.600" rx="2.300"/><path d="M1.800 6.300v.5a4.200 4.200 0 0 0 8.400 0v-.5M6 11v2M4 13.200h4" fill="none" stroke="currentColor" stroke-width="1.100" stroke-linecap="round"/></svg>`,
  downcircle: (s = 15) => `<svg width="${s}" height="${s}" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="currentColor"/><path d="M10 5.500v8M6.800 10.500l3.200 3.200 3.200-3.200" fill="none" stroke="var(--kc-yellow)" stroke-width="1.900" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  checkcircle: (s: number, fg: string, mark: string) => `<svg width="${s}" height="${s}" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="${fg}"/><path d="M5.900 10.600l2.900 3.200 5.300-7" fill="none" stroke="${mark}" stroke-width="1.900" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

/** Feature icons for the site's list: Phosphor where the app has one. */
export const FEATURE_ICON: Record<string, string> = {
  record: ph("video-camera", 22),
  transcribe: '<svg width="22" height="22" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="24" y="48" width="208" height="160" rx="14"/><path d="M116 108a26 26 0 1 0 0 40M188 108a26 26 0 1 0 0 40"/></svg>',
  gif: ph("gif", 22),
  thumbnails: ph("image-square", 22),
  "images-to-gif": ph("images-square", 22),
  mockup: '<svg width="22" height="22" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192Z"/></svg>',
};

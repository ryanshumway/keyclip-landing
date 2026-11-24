/**
 * Who appears in the Demos. A drawn stand-in for now.
 *
 * To use real photos, put them in public/demo and set the two paths:
 *   CUTOUT: head and shoulders with a transparent background (PNG or WebP, about 1200px tall)
 *   CAMERA: the same pose with the room behind (about 1600x900)
 */
const CUTOUT: string | null = null;
const CAMERA: string | null = null;

const drawn = `<svg class="person" viewBox="0 0 200 200" preserveAspectRatio="xMidYMax meet"><path d="M22 200c2-46 34-66 78-66s76 20 78 66z" fill="#FFD000"/><rect x="84" y="104" width="32" height="42" rx="14" fill="#B97F5C"/><ellipse cx="100" cy="78" rx="37" ry="43" fill="#CF966F"/><path d="M60 80c-6-44 18-60 42-60s46 14 39 60c-4-20-10-28-20-32-18 8-38 6-48 2-8 6-11 16-13 30z" fill="#2A201B"/><circle cx="87" cy="80" r="3.4" fill="#2A201B"/><circle cx="114" cy="80" r="3.4" fill="#2A201B"/><path d="M88 99c7 7 18 7 25 0" fill="none" stroke="#7d4630" stroke-width="3.4" stroke-linecap="round"/></svg>`;

/** The person alone, no background. */
export const person = CUTOUT ? `<img class="person" src="${CUTOUT}" alt="">` : drawn;
/** The room behind the person, as the camera sees it. */
export const room = CAMERA ? `<div class="room" style="background-image:url(${CAMERA})"></div>` : `<div class="room drawn"></div>`;

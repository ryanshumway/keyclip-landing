import type { LOOKS } from "./looks";

export type Feature = {
  id: string;
  title: string;
  description: string;
  /** Name used on the phone's Back and Next buttons. */
  short: string;
  /** The gradient's colors behind this Feature. */
  look: keyof typeof LOOKS;
};

/** Order here is the order of the list, and matches DEMOS in lib/demo/demos.ts by id. */
export const FEATURES: Feature[] = [
  { id: "record", title: "Record without a time limit", description: "Capture your screen in up to 4K, with or without your camera.", short: "Record", look: "spring" },
  { id: "transcribe", title: "Transcribe any video", description: "Turn speech into a transcript and captions right on your Mac.", short: "Transcribe", look: "bloom" },
  { id: "gif", title: "Convert video to GIF", description: "Save clips of up to 20 seconds as loops for chats and docs.", short: "GIF", look: "aurora" },
  { id: "thumbnails", title: "Thumbnails for days", description: "Snap a photo, swap the background and size it for social.", short: "Thumbnail", look: "yellow" },
  { id: "images-to-gif", title: "Convert static images into a GIF", description: "Arrange your photos and clips, then stitch them into one loop.", short: "Stitch", look: "canyon" },
  { id: "mockup", title: "Put your video in a mockup", description: "Show your recording on a laptop or phone, as a video or GIF.", short: "Mockup", look: "bloom" },
];

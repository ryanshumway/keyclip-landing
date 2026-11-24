"use client";

import dynamic from "next/dynamic";

/** Agentation's point-and-comment toolbar. Development only; never in the production bundle. */
const Agentation =
  process.env.NODE_ENV === "development"
    ? dynamic(() => import("agentation").then((m) => m.Agentation), { ssr: false })
    : null;

export function Feedback() {
  return Agentation && <Agentation />;
}

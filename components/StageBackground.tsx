"use client";

import { useEffect, useRef } from "react";
import { FEATURES } from "@/lib/features";
import { GradientPainter } from "@/lib/gradient";
import { LOOKS, type Look } from "@/lib/looks";

/** What shows before the gradient starts, and where WebGL isn't available. */
const still = ({ base, colors: c }: Look) =>
  `radial-gradient(60% 70% at 8% 12%,${c[1]},#0000),radial-gradient(60% 70% at 92% 8%,${c[2]},#0000),radial-gradient(70% 80% at 88% 96%,${c[0]},#0000),radial-gradient(60% 70% at 18% 98%,${c[4]},#0000),${base}`;

/** The moving gradient behind the app, in the current Feature's colors. Pause stops it too. */
export function StageBackground({ index, paused }: { index: number; paused: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const painter = useRef<GradientPainter | null>(null);
  const look = LOOKS[FEATURES[index].look];

  useEffect(() => {
    const p = GradientPainter.start(canvas.current!);
    painter.current = p;
    return () => {
      p?.destroy();
      painter.current = null;
    };
  }, []);
  useEffect(() => painter.current?.setLook(look), [look]);
  useEffect(() => painter.current?.setPaused(paused), [paused]);

  return (
    <div className="backgrounds" aria-hidden="true" style={{ background: still(look) }}>
      <canvas ref={canvas} />
    </div>
  );
}

import { FEATURES } from "@/lib/features";

/**
 * What sits behind the app. Desktop: the yellow gradient, in globals.css.
 * Phones: KeyClip's own retro backgrounds, one per Feature.
 */
export function StageBackground({ index }: { index: number }) {
  return (
    <div className="backgrounds" aria-hidden="true">
      {FEATURES.map((f, i) => {
        // Only the current and next images are requested.
        const wanted = i === index || i === (index + 1) % FEATURES.length;
        return <i key={f.id} className={i === index ? "on" : ""} style={wanted ? ({ "--art": `url(/art/${f.art}.webp)` } as React.CSSProperties) : undefined} />;
      })}
    </div>
  );
}

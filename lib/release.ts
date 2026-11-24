/**
 * The newest KeyClip release, read from the app's own update feed so a new
 * version never needs a website edit.
 */
const FEED = "https://updates.keyclip.video/updates/appcast.xml";
const DOWNLOADS = "https://updates.keyclip.video/downloads";

export type Release = { version: string; minimumMacOS: string };

/** Used only when the feed can't be read. */
const FALLBACK: Release = { version: "1.1.0", minimumMacOS: "14.0" };

export const dmgUrl = (version: string) => `${DOWNLOADS}/KeyClip-v${version}.dmg`;

const byNewest = (a: Release, b: Release) =>
  b.version.localeCompare(a.version, "en", { numeric: true });

/** Releases in the feed, newest first. Never empty. */
export async function getReleases(): Promise<Release[]> {
  try {
    const res = await fetch(FEED, { next: { revalidate: 300 }, signal: AbortSignal.timeout(4000) });
    if (!res.ok) return [FALLBACK];
    const releases = [...(await res.text()).matchAll(/<item>([\s\S]*?)<\/item>/g)].flatMap(([, item]) => {
      const version = item.match(/<sparkle:shortVersionString>\s*(\d+(?:\.\d+)*)\s*</)?.[1];
      const minimumMacOS = item.match(/<sparkle:minimumSystemVersion>\s*([\d.]+)\s*</)?.[1] ?? FALLBACK.minimumMacOS;
      return version ? [{ version, minimumMacOS }] : [];
    });
    return releases.length ? releases.sort(byNewest) : [FALLBACK];
  } catch {
    return [FALLBACK];
  }
}

/** Newest release whose DMG is actually uploaded, in case the feed goes out first. */
export async function getDownloadUrl(): Promise<string> {
  const releases = await getReleases();
  for (const { version } of releases.slice(0, 3)) {
    try {
      const res = await fetch(dmgUrl(version), { method: "HEAD", cache: "no-store", signal: AbortSignal.timeout(4000) });
      if (res.ok) return dmgUrl(version);
    } catch {
      // Try the next one down.
    }
  }
  return dmgUrl(releases[0].version);
}

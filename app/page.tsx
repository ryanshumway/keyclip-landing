import { Site } from "@/components/Site";
import { getReleases } from "@/lib/release";

export const revalidate = 300;

export default async function Page() {
  const [release] = await getReleases();
  return <Site version={release.version} macOS={release.minimumMacOS.split(".")[0]} />;
}

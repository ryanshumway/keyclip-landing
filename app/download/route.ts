import { getDownloadUrl } from "@/lib/release";

export const dynamic = "force-dynamic";

export async function GET() {
  return new Response(null, {
    status: 302,
    headers: { Location: await getDownloadUrl(), "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
  });
}

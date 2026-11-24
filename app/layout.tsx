import type { Metadata, Viewport } from "next";
import { Funnel_Display, Libre_Baskerville } from "next/font/google";
import { Feedback } from "@/components/Feedback";
import { SITE_URL, TAGLINE } from "@/lib/site";
import "./globals.css";
import "./demo.css";

const display = Funnel_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const serif = Libre_Baskerville({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

const title = "KeyClip: the free screen recorder for Mac";
const description = `${TAGLINE} Record your screen without a time limit, transcribe any video, and make GIFs, thumbnails and mockups. KeyClip is 100% free.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: "KeyClip", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: [{ media: "(max-width: 819px)", color: "#121212" }, { media: "(min-width: 820px)", color: "#111111" }] };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable}`}>
      <body>
        {children}
        <Feedback />
      </body>
    </html>
  );
}

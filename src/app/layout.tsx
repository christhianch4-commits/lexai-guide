import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import ConsentGatedAdsenseScript from "@/components/ads/ConsentGatedAdsenseScript";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema } from "@/lib/schema";
import "./globals.css";

const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lexaiguide.com"),
  title: {
    default: "LexAI Guide — Know Your Rights. Skip the Bill.",
    template: "%s | LexAI Guide",
  },
  description:
    "Plain-English legal guides, AI legal tool reviews, and free templates for people who can't afford a lawyer — or don't need one.",
  openGraph: {
    type: "website",
    siteName: "LexAI Guide",
    title: "LexAI Guide — Know Your Rights. Skip the Bill.",
    description:
      "Plain-English legal guides, AI legal tool reviews, and free templates for people who can't afford a lawyer — or don't need one.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LexAI Guide — Know Your Rights. Skip the Bill.",
    description:
      "Plain-English legal guides, AI legal tool reviews, and free templates for people who can't afford a lawyer — or don't need one.",
  },
  other: adsenseClient ? { "google-adsense-account": adsenseClient } : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper text-ink antialiased">
        <JsonLd data={organizationSchema()} />
        <ConsentGatedAdsenseScript />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}

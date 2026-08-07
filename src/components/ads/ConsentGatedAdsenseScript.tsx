"use client";

import Script from "next/script";
import { useConsent } from "@/lib/consent";

const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

/**
 * Loads the AdSense loader script only after the visitor has explicitly
 * accepted cookies via CookieConsent — required for compliance with
 * Google's EU User Consent Policy, and the safer default everywhere
 * else too (no ad request, no ad cookie, until the user says yes).
 */
export default function ConsentGatedAdsenseScript() {
  const status = useConsent();

  if (!adsenseClient || status !== "accepted") return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

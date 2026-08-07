"use client";

import { useEffect, useRef } from "react";
import { useConsent } from "@/lib/consent";

const SIZES = {
  hero: { w: 728, h: 90 },
  "mid-1": { w: 336, h: 280 },
  "mid-2": { w: 336, h: 280 },
  "above-footer": { w: 728, h: 90 },
  sidebar: { w: 300, h: 250 },
} as const;

type AdPosition = keyof typeof SIZES;

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

/**
 * AdSense unit wrapper. Renders nothing at all — no box, no "Advertisement"
 * label, no placeholder text, in dev or in production — until there's a
 * real ad to show (NEXT_PUBLIC_ADSENSE_CLIENT is set AND the visitor has
 * accepted cookies). Shipping placeholder "ad slot" chrome anywhere a real
 * visitor or reviewer can see it reads as an unfinished template and
 * serves no functional purpose, so it's off entirely rather than
 * environment-gated.
 *
 * Once you have an approved AdSense account:
 * 1. Set NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
 * 2. Replace the `data-ad-slot` values below with real slot IDs from
 *    your AdSense dashboard (one per placement).
 * The loader script (in RootLayout) and the adsbygoogle.push() call
 * below are both already wired — the ad simply starts rendering in this
 * exact spot, no other code changes needed.
 */
export default function AdUnit({
  position,
  sticky = false,
}: {
  position: AdPosition;
  sticky?: boolean;
}) {
  const size = SIZES[position];
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);
  const consent = useConsent();
  const canServe = Boolean(adsenseClient) && consent === "accepted";

  useEffect(() => {
    if (!canServe || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense script not loaded yet (e.g. blocked by an ad blocker) —
      // fail silently rather than throwing in the console.
    }
  }, [canServe]);

  if (!canServe) return null;

  return (
    <div
      className={`ad-container ad-${position} my-8 flex flex-col items-center gap-1.5 ${
        sticky ? "lg:sticky lg:top-24" : ""
      }`}
      aria-label="Advertisement"
    >
      <span className="text-caption-mono uppercase tracking-wider text-ink-soft/50">
        Advertisement
      </span>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block", width: size.w, maxWidth: "100%" }}
        data-ad-client={adsenseClient}
        data-ad-slot={`lexai-${position}`}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

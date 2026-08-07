"use client";

import Link from "next/link";
import { setConsent, useConsent } from "@/lib/consent";

export default function CookieConsent() {
  const status = useConsent();

  if (status === "accepted" || status === "rejected") {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-mist bg-paper-raised shadow-[0_-12px_32px_-16px_rgba(15,25,35,0.25)]"
    >
      <div className="container-page flex flex-col items-start gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-[14px] leading-relaxed text-ink-soft">
          <span className="mr-1.5" aria-hidden="true">
            🍪
          </span>
          We use cookies for basic site analytics and, only with your
          consent, to show relevant ads. See our{" "}
          <Link href="/privacy-policy/" className="link-underline text-ink">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setConsent("rejected")}
            className="rounded-md border border-mist px-4 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-authority hover:text-authority"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="rounded-md bg-authority px-4 py-2.5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-authority-dark"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

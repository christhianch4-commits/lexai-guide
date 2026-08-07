"use client";

import { clearConsent } from "@/lib/consent";

export default function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => clearConsent()}
      className="text-sm text-paper/75 transition-colors duration-200 hover:text-paper"
    >
      Cookie Settings
    </button>
  );
}

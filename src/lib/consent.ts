"use client";

import { useSyncExternalStore } from "react";

export type ConsentStatus = "accepted" | "rejected" | null;

const STORAGE_KEY = "lexai-cookie-consent";
const CONSENT_CHANGE_EVENT = "lexai-consent-change";

function readStoredConsent(): ConsentStatus {
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "accepted" || v === "rejected" ? v : null;
}

export function getConsent(): ConsentStatus {
  if (typeof window === "undefined") return null;
  return readStoredConsent();
}

export function setConsent(value: "accepted" | "rejected") {
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

export function clearConsent() {
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getServerSnapshot(): ConsentStatus {
  return null;
}

/**
 * Tracks cookie-consent status client-side via useSyncExternalStore —
 * updates live when the user responds to the banner or reopens it via
 * "Cookie Settings" in the footer, syncs across tabs, and stays
 * hydration-safe (server always sees "no decision yet", the client
 * re-syncs to the real localStorage value right after mount).
 */
export function useConsent(): ConsentStatus {
  return useSyncExternalStore(subscribe, readStoredConsent, getServerSnapshot);
}

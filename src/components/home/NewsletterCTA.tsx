"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterCTA() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // No email service is wired up yet — swap this for a POST to your
    // ESP (Mailchimp, ConvertKit, etc.) API route before going live.
    if (email.trim()) setStatus("submitted");
  }

  return (
    <section className="container-page py-16 md:py-24">
      <div className="signature-line rounded-lg bg-ink px-6 py-12 md:px-16 md:py-16">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
            Don&rsquo;t make a legal mistake.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-paper/65">
            Join 25,000+ Americans who get our weekly legal updates —
            new state law changes, tool reviews, and free templates.
            No spam, unsubscribe anytime.
          </p>

          {status === "submitted" ? (
            <p className="mt-6 rounded-md border border-paper/20 bg-paper/10 px-4 py-3 text-sm text-paper">
              ✓ You&rsquo;re on the list. Check your inbox to confirm.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-md border border-paper/20 bg-paper/5 px-4 py-3 text-[15px] text-paper placeholder:text-paper/40 focus-visible:outline-signal sm:max-w-xs"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-signal px-6 py-3 text-[15px] font-medium text-paper transition-colors duration-200 hover:brightness-110"
              >
                Get Free Updates
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

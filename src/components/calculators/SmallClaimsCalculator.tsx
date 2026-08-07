"use client";

import { useState } from "react";
import Link from "next/link";
import { STATES, formatUsd } from "@/lib/states";

export default function SmallClaimsCalculator() {
  const [stateSlug, setStateSlug] = useState("");
  const state = STATES.find((s) => s.slug === stateSlug);

  return (
    <div className="rounded-lg border border-mist bg-paper-raised p-6 md:p-8">
      <label htmlFor="sc-state" className="text-sm font-medium text-ink">
        Select your state
      </label>
      <select
        id="sc-state"
        value={stateSlug}
        onChange={(e) => setStateSlug(e.target.value)}
        className="mt-2 w-full rounded-md border border-mist bg-paper px-4 py-3.5 text-base text-ink focus-visible:outline-authority"
      >
        <option value="">Choose a state…</option>
        {STATES.map((s) => (
          <option key={s.slug} value={s.slug}>
            {s.name}
          </option>
        ))}
      </select>

      <div className="mt-6" aria-live="polite">
        {state ? (
          <div className="rounded-md border-l-4 border-authority bg-authority-soft p-5">
            <p className="text-caption-mono uppercase tracking-wider text-authority-dark">
              {state.name} Small Claims Limit
            </p>
            <p className="mt-1 font-display text-4xl font-bold text-ink">
              {formatUsd(state.smallClaimsLimit)}
            </p>
            <dl className="mt-4 space-y-2 border-t border-authority/20 pt-4 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-ink-soft">Where to file</dt>
                <dd className="text-right font-medium text-ink">{state.smallClaimsCourtName}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-soft">Contract statute of limitations</dt>
                <dd className="text-right font-medium text-ink">
                  {state.statuteOfLimitationsContractYears} years
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-[13px] leading-relaxed text-ink-soft">
              If your claim is under {formatUsd(state.smallClaimsLimit)}, you can
              typically file in {state.name}&rsquo;s small claims court without a
              lawyer. Filing fees are usually $30&ndash;$100 depending on the
              claim amount.
            </p>
            <Link
              href={`/${state.slug}-legal-guide/`}
              className="link-underline mt-4 inline-flex items-center gap-1 text-sm font-medium text-authority"
            >
              View full {state.name} guide →
            </Link>
          </div>
        ) : (
          <div className="rounded-md border border-dashed border-mist p-8 text-center text-sm text-ink-soft">
            Select a state above to see its small claims limit and court.
          </div>
        )}
      </div>
    </div>
  );
}

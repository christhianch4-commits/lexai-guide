"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { STATES } from "@/lib/states";
import { STATE_GRID, GRID_COLS, GRID_ROWS } from "@/lib/stateGrid";
import { formatUsd } from "@/lib/states";
import type { StateData } from "@/lib/types";

export default function USStateMap() {
  const [active, setActive] = useState<StateData | null>(null);
  const router = useRouter();

  const activeState = active ?? STATES.find((s) => s.priority) ?? STATES[0];

  return (
    <div>
      {/* Mobile / small-screen fallback: dropdown + priority pills */}
      <div className="md:hidden">
        <label htmlFor="state-jump" className="text-caption-mono uppercase tracking-wider text-ink-soft">
          Find your state
        </label>
        <select
          id="state-jump"
          className="mt-2 w-full rounded-md border border-mist bg-paper-raised px-4 py-3 text-[15px] text-ink"
          defaultValue=""
          onChange={(e) => {
            if (e.target.value) router.push(`/${e.target.value}-legal-guide/`);
          }}
        >
          <option value="" disabled>
            Select a state…
          </option>
          {STATES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>

        <div className="mt-4 flex flex-wrap gap-2">
          {STATES.filter((s) => s.priority).map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}-legal-guide/`}
              className="rounded-full border border-mist bg-paper-raised px-3.5 py-1.5 text-sm text-ink transition-colors duration-200 hover:border-authority hover:text-authority"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop: interactive tile grid + live info panel */}
      <div className="hidden gap-8 md:grid md:grid-cols-[1fr_280px]">
        <div
          className="grid gap-[3px]"
          style={{
            gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${GRID_ROWS}, 34px)`,
          }}
          role="group"
          aria-label="Map of US states — click a state to view its legal guide"
        >
          {STATES.map((state) => {
            const pos = STATE_GRID[state.abbr];
            if (!pos) return null;
            const isActive = activeState.slug === state.slug;
            return (
              <Link
                key={state.slug}
                href={`/${state.slug}-legal-guide/`}
                onMouseEnter={() => setActive(state)}
                onFocus={() => setActive(state)}
                style={{ gridColumn: pos.col, gridRow: pos.row }}
                className={`flex items-center justify-center rounded-[3px] text-[10px] font-medium font-mono transition-colors duration-150 ${
                  isActive
                    ? "bg-signal text-paper"
                    : state.priority
                      ? "bg-authority text-paper hover:bg-authority-dark"
                      : "bg-mist text-ink-soft hover:bg-authority/30 hover:text-ink"
                }`}
                aria-label={`${state.name}: small claims limit ${formatUsd(state.smallClaimsLimit)}`}
              >
                {state.abbr}
              </Link>
            );
          })}
        </div>

        {/* Live info panel */}
        <div className="rounded-[var(--radius-card)] border border-mist bg-paper-raised p-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-ink font-mono text-xs font-medium text-paper">
              {activeState.abbr}
            </div>
            <h3 className="font-display text-lg font-semibold text-ink">
              {activeState.name}
            </h3>
          </div>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-ink-soft">Small Claims Limit</dt>
              <dd className="font-medium text-ink">{formatUsd(activeState.smallClaimsLimit)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-ink-soft">Deposit Deadline</dt>
              <dd className="font-medium text-ink">{activeState.securityDepositDeadlineDays}d</dd>
            </div>
          </dl>
          <Link
            href={`/${activeState.slug}-legal-guide/`}
            className="link-underline mt-4 inline-flex items-center gap-1 text-sm font-medium text-authority"
          >
            View full guide →
          </Link>
          <p className="mt-4 border-t border-mist pt-3 text-caption-mono text-ink-soft/60">
            {activeState.priority ? "● Full guide available" : "● State data available"}
          </p>
        </div>
      </div>

      <div className="mt-4 hidden items-center gap-4 text-caption-mono text-ink-soft/60 md:flex">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-[2px] bg-authority" /> Full guide
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-[2px] bg-mist" /> State data
        </span>
      </div>
    </div>
  );
}

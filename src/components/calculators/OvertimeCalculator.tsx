"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { STATES } from "@/lib/states";

const DAILY_OT_STATES = new Set(["california", "alaska", "nevada", "colorado"]);

export default function OvertimeCalculator() {
  const [wage, setWage] = useState("");
  const [hours, setHours] = useState("");
  const [stateSlug, setStateSlug] = useState("");

  const result = useMemo(() => {
    const wageNum = parseFloat(wage);
    const hoursNum = parseFloat(hours);
    if (!wageNum || !hoursNum || wageNum <= 0 || hoursNum <= 0) return null;

    const regularHours = Math.min(hoursNum, 40);
    const overtimeHours = Math.max(hoursNum - 40, 0);
    const overtimeRate = wageNum * 1.5;
    const regularPay = regularHours * wageNum;
    const overtimePay = overtimeHours * overtimeRate;

    return {
      overtimeHours,
      overtimeRate,
      regularPay,
      overtimePay,
      totalPay: regularPay + overtimePay,
    };
  }, [wage, hours]);

  const state = STATES.find((s) => s.slug === stateSlug);
  const hasDailyOtNote = state && DAILY_OT_STATES.has(state.slug);

  return (
    <div className="rounded-lg border border-mist bg-paper-raised p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ot-wage" className="text-sm font-medium text-ink">
            Hourly wage
          </label>
          <div className="mt-2 flex items-center rounded-md border border-mist bg-paper focus-within:outline focus-within:outline-2 focus-within:outline-authority">
            <span className="pl-4 text-ink-soft">$</span>
            <input
              id="ot-wage"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={wage}
              onChange={(e) => setWage(e.target.value)}
              placeholder="17.00"
              className="w-full bg-transparent px-2 py-3.5 text-base text-ink outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="ot-hours" className="text-sm font-medium text-ink">
            Hours worked this week
          </label>
          <input
            id="ot-hours"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.5"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            placeholder="48"
            className="mt-2 w-full rounded-md border border-mist bg-paper px-4 py-3.5 text-base text-ink outline-none focus-visible:outline-2 focus-visible:outline-authority"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="ot-state" className="text-sm font-medium text-ink">
          State <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <select
          id="ot-state"
          value={stateSlug}
          onChange={(e) => setStateSlug(e.target.value)}
          className="mt-2 w-full rounded-md border border-mist bg-paper px-4 py-3.5 text-base text-ink outline-none focus-visible:outline-2 focus-visible:outline-authority"
        >
          <option value="">Select for state-specific notes</option>
          {STATES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6" aria-live="polite">
        {result ? (
          <div
            className={`rounded-md border-l-4 p-5 ${
              result.overtimeHours > 0
                ? "border-signal bg-signal/10"
                : "border-authority bg-authority-soft"
            }`}
          >
            <p className="text-caption-mono uppercase tracking-wider text-ink-soft">
              {result.overtimeHours > 0 ? "Overtime owed" : "No overtime owed"}
            </p>
            <p className="mt-1 font-display text-4xl font-bold text-ink">
              ${result.overtimePay.toFixed(2)}
            </p>
            <dl className="mt-4 space-y-2 border-t border-ink/10 pt-4 text-sm">
              <div className="flex justify-between">
                <dt className="text-ink-soft">Overtime hours (over 40/week)</dt>
                <dd className="font-medium text-ink">{result.overtimeHours.toFixed(1)} hrs</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-soft">Overtime rate (1.5×)</dt>
                <dd className="font-medium text-ink">${result.overtimeRate.toFixed(2)}/hr</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-soft">Total pay owed this week</dt>
                <dd className="font-medium text-ink">${result.totalPay.toFixed(2)}</dd>
              </div>
            </dl>
            <p className="mt-4 text-[13px] leading-relaxed text-ink-soft">
              Under the federal Fair Labor Standards Act (FLSA), non-exempt
              employees must be paid 1.5× their regular rate for every hour
              worked beyond 40 in a single workweek.
              {hasDailyOtNote &&
                ` ${state!.name} also has daily overtime rules that can require extra pay for long single-day shifts, on top of this weekly calculation.`}
            </p>
            {result.overtimeHours > 0 && (
              <Link
                href="/know-your-rights/employee-rights-at-work/"
                className="link-underline mt-4 inline-flex items-center gap-1 text-sm font-medium text-authority"
              >
                Not getting paid this? Know your rights →
              </Link>
            )}
          </div>
        ) : (
          <div className="rounded-md border border-dashed border-mist p-8 text-center text-sm text-ink-soft">
            Enter your hourly wage and hours worked to calculate.
          </div>
        )}
      </div>
    </div>
  );
}

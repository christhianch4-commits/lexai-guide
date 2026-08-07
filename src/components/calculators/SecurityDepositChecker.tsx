"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { STATES, formatUsd } from "@/lib/states";

type Verdict = { tone: "ok" | "warn" | "problem"; title: string; body: string };

export default function SecurityDepositChecker() {
  const [depositAmount, setDepositAmount] = useState("");
  const [deductionAmount, setDeductionAmount] = useState("");
  const [daysSinceMoveOut, setDaysSinceMoveOut] = useState("");
  const [receivedList, setReceivedList] = useState<"yes" | "no" | "">("");
  const [stateSlug, setStateSlug] = useState("");

  const state = STATES.find((s) => s.slug === stateSlug);

  const verdict = useMemo<Verdict | null>(() => {
    const deposit = parseFloat(depositAmount);
    const deduction = parseFloat(deductionAmount);
    const days = parseInt(daysSinceMoveOut, 10);

    if (!state || !deposit || isNaN(days) || !receivedList) return null;

    const deadline = state.securityDepositDeadlineDays;
    const pastDeadline = days > deadline;

    if (receivedList === "no" && pastDeadline) {
      return {
        tone: "problem",
        title: "This looks like a violation",
        body: `${state.name} gives landlords ${deadline} days to send an itemized deduction list or return the deposit. It's been ${days} days with neither. In most states, missing this deadline means your landlord forfeits the right to deduct anything — you may be owed the full ${formatUsd(deposit)} back, sometimes doubled or tripled as a penalty.`,
      };
    }

    if (receivedList === "no" && !pastDeadline) {
      return {
        tone: "ok",
        title: "Still within the deadline",
        body: `${state.name} gives landlords ${deadline} days from move-out. You're at day ${days} — your landlord still has ${deadline - days} day${deadline - days === 1 ? "" : "s"} to send an itemized list or return your deposit.`,
      };
    }

    if (!isNaN(deduction) && deduction >= deposit) {
      return {
        tone: "problem",
        title: "Deduction claims the entire deposit — verify it closely",
        body: `A deduction of ${formatUsd(deduction)} against a ${formatUsd(deposit)} deposit leaves you nothing back. Landlords can only deduct for actual damage beyond normal wear and tear — request an itemized breakdown with receipts or estimates for each item claimed, if you haven't already.`,
      };
    }

    return {
      tone: "warn",
      title: "Review each line item",
      body: `Your landlord sent an itemized list within the ${deadline}-day window, which meets the basic requirement. That doesn't mean every deduction is valid — normal wear and tear (faded paint, worn carpet, minor scuffs) can never legally be deducted. Compare each charge against move-in photos if you have them.`,
    };
  }, [depositAmount, deductionAmount, daysSinceMoveOut, receivedList, state]);

  const toneStyles: Record<Verdict["tone"], string> = {
    ok: "border-authority bg-authority-soft",
    warn: "border-signal/60 bg-signal/10",
    problem: "border-signal bg-signal/10",
  };

  return (
    <div className="rounded-lg border border-mist bg-paper-raised p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sd-deposit" className="text-sm font-medium text-ink">
            Deposit amount
          </label>
          <div className="mt-2 flex items-center rounded-md border border-mist bg-paper focus-within:outline focus-within:outline-2 focus-within:outline-authority">
            <span className="pl-4 text-ink-soft">$</span>
            <input
              id="sd-deposit"
              type="number"
              min="0"
              step="0.01"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="1,500.00"
              className="w-full bg-transparent px-2 py-3.5 text-base text-ink outline-none"
            />
          </div>
        </div>
        <div>
          <label htmlFor="sd-deduction" className="text-sm font-medium text-ink">
            Amount deducted <span className="font-normal text-ink-soft">(if known)</span>
          </label>
          <div className="mt-2 flex items-center rounded-md border border-mist bg-paper focus-within:outline focus-within:outline-2 focus-within:outline-authority">
            <span className="pl-4 text-ink-soft">$</span>
            <input
              id="sd-deduction"
              type="number"
              min="0"
              step="0.01"
              value={deductionAmount}
              onChange={(e) => setDeductionAmount(e.target.value)}
              placeholder="600.00"
              className="w-full bg-transparent px-2 py-3.5 text-base text-ink outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sd-days" className="text-sm font-medium text-ink">
            Days since move-out
          </label>
          <input
            id="sd-days"
            type="number"
            min="0"
            value={daysSinceMoveOut}
            onChange={(e) => setDaysSinceMoveOut(e.target.value)}
            placeholder="35"
            className="mt-2 w-full rounded-md border border-mist bg-paper px-4 py-3.5 text-base text-ink outline-none focus-visible:outline-2 focus-visible:outline-authority"
          />
        </div>
        <div>
          <label htmlFor="sd-list" className="text-sm font-medium text-ink">
            Got an itemized list?
          </label>
          <select
            id="sd-list"
            value={receivedList}
            onChange={(e) => setReceivedList(e.target.value as "yes" | "no" | "")}
            className="mt-2 w-full rounded-md border border-mist bg-paper px-4 py-3.5 text-base text-ink outline-none focus-visible:outline-2 focus-visible:outline-authority"
          >
            <option value="">Select…</option>
            <option value="yes">Yes</option>
            <option value="no">No / Not yet</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="sd-state" className="text-sm font-medium text-ink">
          State
        </label>
        <select
          id="sd-state"
          value={stateSlug}
          onChange={(e) => setStateSlug(e.target.value)}
          className="mt-2 w-full rounded-md border border-mist bg-paper px-4 py-3.5 text-base text-ink outline-none focus-visible:outline-2 focus-visible:outline-authority"
        >
          <option value="">Choose a state…</option>
          {STATES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6" aria-live="polite">
        {verdict ? (
          <div className={`rounded-md border-l-4 p-5 ${toneStyles[verdict.tone]}`}>
            <p className="text-caption-mono uppercase tracking-wider text-ink-soft">
              {verdict.title}
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink">{verdict.body}</p>
            {verdict.tone === "problem" && (
              <Link
                href="/legal-templates/demand-letter-template/"
                className="link-underline mt-4 inline-flex items-center gap-1 text-sm font-medium text-authority"
              >
                Send a demand letter →
              </Link>
            )}
          </div>
        ) : (
          <div className="rounded-md border border-dashed border-mist p-8 text-center text-sm text-ink-soft">
            Fill in the fields above to check your situation.
          </div>
        )}
      </div>
    </div>
  );
}

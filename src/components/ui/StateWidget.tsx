import Link from "next/link";
import type { StateData } from "@/lib/types";
import { formatUsd } from "@/lib/states";

export default function StateWidget({ state }: { state: StateData }) {
  return (
    <div className="card-hover rounded-[var(--radius-card)] border border-mist bg-paper-raised p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-ink font-mono text-sm font-medium text-paper">
          {state.abbr}
        </div>
        <h3 className="font-display text-lg font-semibold text-ink">{state.name}</h3>
      </div>

      <dl className="mt-4 space-y-2.5 text-sm">
        <div className="flex items-center justify-between border-b border-mist pb-2">
          <dt className="text-ink-soft">Small Claims Limit</dt>
          <dd className="font-medium text-ink">{formatUsd(state.smallClaimsLimit)}</dd>
        </div>
        <div className="flex items-center justify-between border-b border-mist pb-2">
          <dt className="text-ink-soft">Deposit Return Deadline</dt>
          <dd className="font-medium text-ink">{state.securityDepositDeadlineDays} days</dd>
        </div>
        <div className="flex items-center justify-between border-b border-mist pb-2">
          <dt className="text-ink-soft">Contract Statute of Limitations</dt>
          <dd className="font-medium text-ink">{state.statuteOfLimitationsContractYears} yrs</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-ink-soft">At-Will Employment</dt>
          <dd className="font-medium text-ink">
            {state.atWillException ? "At-will, with limits" : "At-will"}
          </dd>
        </div>
      </dl>

      <Link
        href={`/${state.slug}-legal-guide/`}
        className="link-underline mt-5 inline-flex items-center gap-1 text-sm font-medium text-authority"
      >
        View full {state.name} guide →
      </Link>
    </div>
  );
}

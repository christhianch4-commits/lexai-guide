import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import LegalDisclaimer from "@/components/ui/LegalDisclaimer";
import QuickAnswerBox from "@/components/ui/QuickAnswerBox";
import AdUnit from "@/components/ui/AdUnit";
import JsonLd from "@/components/seo/JsonLd";
import { STATES, getStateBySlug, formatUsd, NATIONAL_MEDIANS } from "@/lib/states";
import { articleSchema } from "@/lib/schema";
import type { ArticleMeta } from "@/lib/types";

// This route is reached at /[state]-legal-guide/ via a rewrite in
// next.config.ts (App Router folder names can't mix a dynamic segment
// with a literal suffix like "-legal-guide", so the public URL is
// rewritten internally to /state-guide/[state]).
export async function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

type Props = { params: Promise<{ state: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return {};

  const title = `${state.name} Legal Guide: Small Claims, Tenant Rights & Deadlines 2026`;
  const description = `${state.name} small claims limit, security deposit deadline, statute of limitations, and tenant rights — everything you need in one place.`;

  return {
    title: { absolute: `${title} | LexAI Guide` },
    description,
    alternates: { canonical: `/${state.slug}-legal-guide/` },
    // The 10 priority states get materially deeper, more unique content
    // (see the narrative section below) and are fully indexed. The other
    // 40 share a thinner template, so we keep them out of Google's index
    // — still fully functional for visitors and internal linking, just
    // not competing as thin/near-duplicate pages in search. Swap this to
    // `index: true` for a given state once it has a fully unique writeup.
    robots: state.priority
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

/** Real, published resources relevant to every state — replaces a grid
 *  of "coming soon" sub-articles with links that actually go somewhere. */
const RESOURCES = [
  { icon: "⚖️", label: "Small Claims Limit Calculator", href: "/calculators/small-claims-limit/" },
  { icon: "🏠", label: "Tenant Rights by State", href: "/know-your-rights/tenant-rights-by-state/" },
  { icon: "💰", label: "Security Deposit Deduction Checker", href: "/calculators/security-deposit-checker/" },
  { icon: "💼", label: "Overtime Pay Calculator", href: "/calculators/overtime-pay/" },
  { icon: "📄", label: "Free Demand Letter Template", href: "/legal-templates/demand-letter-template/" },
  { icon: "📚", label: "Landlord Keeping Your Deposit?", href: "/self-help-guides/landlord-keeping-security-deposit/" },
];

function compare(value: number, median: number, unit: string, higherIsMore = true) {
  if (value === median) return `right at the 50-state median of ${median} ${unit}`;
  const isHigher = value > median;
  const word = isHigher === higherIsMore ? "above" : "below";
  return `${word} the 50-state median of ${median} ${unit}`;
}

export default async function Page({ params }: Props) {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) notFound();

  const pseudoArticle: ArticleMeta = {
    slug: `${state.slug}-legal-guide`,
    pillar: "state-guides",
    href: `/${state.slug}-legal-guide/`,
    title: `${state.name} Legal Guide`,
    seoTitle: `${state.name} Legal Guide | LexAI Guide`,
    metaDescription: "",
    dek: "",
    intent: "informational",
    keywordDifficulty: 0,
    estRpm: 0,
    status: "published",
    readingTime: 6,
    datePublished: "2026-01-01",
    dateModified: "2026-08-01",
    appliesTo: state.name,
    wordCountTarget: "",
  };

  const otherPriority = STATES.filter((s) => s.priority && s.slug !== state.slug).slice(0, 4);
  const neighbors = STATES.filter((s) => s.slug !== state.slug)
    .sort((a, b) => Math.abs(a.smallClaimsLimit - state.smallClaimsLimit) - Math.abs(b.smallClaimsLimit - state.smallClaimsLimit))
    .slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(pseudoArticle)} />
      <div className="container-page pb-20 pt-10 md:pt-14">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "By State", href: "/states/" },
            { label: state.name },
          ]}
        />

        <div className="mt-4 flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-ink font-mono text-lg font-medium text-paper md:h-16 md:w-16 md:text-xl">
            {state.abbr}
          </span>
          <div>
            <h1 className="text-display-h1 text-ink">{state.name} Legal Guide</h1>
            <p className="mt-1 text-ink-soft">
              {state.priority ? "Full guide" : "State data"} · Updated for 2026
            </p>
          </div>
        </div>

        <div className="mt-6 max-w-2xl">
          <LegalDisclaimer text={`Figures below are compiled from published court and statutory summaries and are meant as a starting point, not legal advice. ${state.name} law changes by legislative session — confirm anything time-sensitive with your local court or a licensed attorney.`} />
        </div>

        <div className="mt-8 max-w-2xl">
          <QuickAnswerBox
            points={[
              `Small claims limit: ${formatUsd(state.smallClaimsLimit)}, filed in ${state.smallClaimsCourtName}.`,
              `Landlords have ${state.securityDepositDeadlineDays} days to return a security deposit after move-out.`,
              `Written contracts can be sued on for up to ${state.statuteOfLimitationsContractYears} years after breach.`,
            ]}
          />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-mist bg-paper-raised p-6">
            <p className="text-caption-mono uppercase tracking-wider text-ink-soft/60">
              Small Claims
            </p>
            <p className="mt-1 font-display text-3xl font-bold text-ink">
              {formatUsd(state.smallClaimsLimit)}
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Filed in {state.smallClaimsCourtName}. No lawyer required below this
              amount.
            </p>
            <Link
              href="/calculators/small-claims-limit/"
              className="link-underline mt-3 inline-block text-sm font-medium text-authority"
            >
              Open the calculator →
            </Link>
          </div>

          <div className="rounded-lg border border-mist bg-paper-raised p-6">
            <p className="text-caption-mono uppercase tracking-wider text-ink-soft/60">
              Security Deposits
            </p>
            <p className="mt-1 font-display text-3xl font-bold text-ink">
              {state.securityDepositDeadlineDays} days
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Deadline for landlords to return a deposit or send an itemized
              deduction list after move-out.
            </p>
            <Link
              href="/self-help-guides/landlord-keeping-security-deposit/"
              className="link-underline mt-3 inline-block text-sm font-medium text-authority"
            >
              What to do if it&rsquo;s late →
            </Link>
          </div>

          <div className="rounded-lg border border-mist bg-paper-raised p-6">
            <p className="text-caption-mono uppercase tracking-wider text-ink-soft/60">
              Eviction Notice
            </p>
            <p className="mt-1 font-display text-3xl font-bold text-ink">
              {state.tenantNoticeToQuitDays} days
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Minimum written notice a landlord typically must give before
              starting eviction proceedings.
            </p>
          </div>

          <div className="rounded-lg border border-mist bg-paper-raised p-6">
            <p className="text-caption-mono uppercase tracking-wider text-ink-soft/60">
              Statute of Limitations
            </p>
            <p className="mt-1 font-display text-3xl font-bold text-ink">
              {state.statuteOfLimitationsContractYears} years
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Time limit to sue over a breached written contract in {state.name}.
            </p>
          </div>

          <div className="rounded-lg border border-mist bg-paper-raised p-6">
            <p className="text-caption-mono uppercase tracking-wider text-ink-soft/60">
              Employment
            </p>
            <p className="mt-1 font-display text-3xl font-bold text-ink">
              {state.atWillException ? "At-will, with limits" : "At-will"}
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              {state.atWillException
                ? `${state.name} is the only state that requires good cause for termination after a probationary period.`
                : "Employers can generally terminate without cause, subject to federal anti-discrimination and retaliation protections."}
            </p>
            <Link
              href="/calculators/overtime-pay/"
              className="link-underline mt-3 inline-block text-sm font-medium text-authority"
            >
              Check overtime pay owed →
            </Link>
          </div>
        </div>

        <div className="mt-10 max-w-2xl">
          <AdUnit position="mid-1" />
        </div>

        <div className="article-prose mt-4 max-w-2xl">
          <h2>What Makes {state.name} Different</h2>
          <p>{state.summary}</p>
          <p>
            {state.name}&rsquo;s {formatUsd(state.smallClaimsLimit)} small
            claims limit sits{" "}
            {compare(state.smallClaimsLimit, NATIONAL_MEDIANS.smallClaimsLimit, "")} —{" "}
            {state.smallClaimsLimit > NATIONAL_MEDIANS.smallClaimsLimit
              ? "meaning more disputes qualify for a fast, self-represented filing before you'd need to escalate to a formal civil suit."
              : "so a larger dispute may need to go through regular civil court instead of small claims, where legal representation becomes more common."}
          </p>
          <p>
            On security deposits, {state.name} gives landlords{" "}
            {state.securityDepositDeadlineDays} days to act — {" "}
            {compare(state.securityDepositDeadlineDays, NATIONAL_MEDIANS.securityDepositDeadlineDays, "days", false)}
            . {state.securityDepositDeadlineDays < NATIONAL_MEDIANS.securityDepositDeadlineDays
              ? "That's a tighter window than most states, which works in tenants' favor: less time passes before you can act on a missed deadline."
              : "That's a longer window than most states give landlords, so don't assume a violation just because a few weeks have passed — check the exact number above first."}{" "}
            Once that window closes without an itemized deduction list, you
            have real leverage to demand the full amount back — see our{" "}
            <Link href="/calculators/security-deposit-checker/">
              Security Deposit Checker
            </Link>{" "}
            to see exactly where you stand.
          </p>
          <p>
            For eviction, {state.name} generally requires{" "}
            {state.tenantNoticeToQuitDays} days&rsquo; written notice before
            a landlord can start formal proceedings — regardless of that
            number, only a court can order an actual eviction; a landlord
            changing your locks or removing belongings without a court
            order is illegal self-help eviction in every state, {state.name}{" "}
            included.
          </p>
        </div>

        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-ink">
            Free Tools &amp; Guides for {state.name}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-soft">
            Every link below is a working tool or guide — not a placeholder.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="card-hover flex h-full items-center gap-3 rounded-[var(--radius-card)] border border-mist bg-paper-raised p-4"
              >
                <span className="text-xl" aria-hidden="true">
                  {resource.icon}
                </span>
                <p className="text-sm font-medium text-ink">{resource.label}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-10 max-w-2xl">
          <AdUnit position="above-footer" />
        </div>

        <section className="mt-10 border-t border-mist pt-8">
          <h2 className="font-display text-lg font-semibold text-ink">
            States With Similar Small Claims Limits
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {neighbors.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}-legal-guide/`}
                className="rounded-full border border-mist px-3.5 py-1.5 text-sm text-ink transition-colors duration-200 hover:border-authority hover:text-authority"
              >
                {s.name} ({formatUsd(s.smallClaimsLimit)})
              </Link>
            ))}
          </div>

          <h2 className="mt-8 font-display text-lg font-semibold text-ink">
            Other State Guides
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherPriority.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}-legal-guide/`}
                className="rounded-full border border-mist px-3.5 py-1.5 text-sm text-ink transition-colors duration-200 hover:border-authority hover:text-authority"
              >
                {s.name}
              </Link>
            ))}
            <Link
              href="/states/"
              className="rounded-full border border-mist px-3.5 py-1.5 text-sm text-authority transition-colors duration-200 hover:border-authority"
            >
              View all 50 states →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

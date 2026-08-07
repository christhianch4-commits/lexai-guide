import type { Metadata } from "next";
import Link from "next/link";
import ArticleHeader from "@/components/article/ArticleHeader";
import TableOfContents from "@/components/article/TableOfContents";
import RelatedArticles from "@/components/article/RelatedArticles";
import VerdictBox from "@/components/article/VerdictBox";
import QuickAnswerBox from "@/components/ui/QuickAnswerBox";
import AdUnit from "@/components/ui/AdUnit";
import FAQAccordion from "@/components/ui/FAQAccordion";
import JsonLd from "@/components/seo/JsonLd";
import { getArticle, ARTICLES } from "@/lib/articles";
import { STATES, formatUsd } from "@/lib/states";
import { articleSchema } from "@/lib/schema";

const article = getArticle("know-your-rights", "tenant-rights-by-state")!;

export const metadata: Metadata = {
  title: { absolute: article.seoTitle },
  description: article.metaDescription,
  alternates: { canonical: article.href },
  openGraph: {
    type: "article",
    title: article.seoTitle,
    description: article.metaDescription,
    publishedTime: article.datePublished,
    modifiedTime: article.dateModified,
  },
};

const headings = [
  { id: "federal-baseline", text: "Rights Every Tenant Has" },
  { id: "security-deposits", text: "Security Deposits" },
  { id: "repairs", text: "Repairs & Habitability" },
  { id: "eviction-notices", text: "Eviction Notices" },
  { id: "retaliation", text: "Retaliation Is Illegal" },
  { id: "state-table", text: "State-by-State Quick Reference" },
  { id: "when-to-escalate", text: "When to Escalate" },
  { id: "faq", text: "Frequently Asked Questions" },
  { id: "bottom-line", text: "The Bottom Line" },
];

const faqs = [
  {
    question: "Can my landlord evict me without any notice?",
    answer:
      "No. Every state requires some form of written notice before an eviction filing, ranging from about 3 days (for serious lease violations in some states) to 30 or 60 days for no-cause terminations in others. Even then, only a court can order an actual eviction — a landlord changing your locks or removing your belongings without a court order is illegal almost everywhere.",
  },
  {
    question: "Is my landlord required to make repairs?",
    answer:
      "Yes. Nearly every state's implied warranty of habitability requires landlords to maintain safe, livable conditions — working plumbing, heat, and structural safety at minimum. What counts as an emergency versus a routine repair, and how long a landlord has to respond, varies by state and sometimes by city.",
  },
  {
    question: "Can my landlord raise my rent whenever they want?",
    answer:
      "Outside of rent-controlled units (common in parts of California, New York, and a handful of other cities), most states allow rent increases at lease renewal with proper notice — typically 30 to 60 days. A landlord generally cannot raise rent in the middle of a fixed-term lease unless the lease itself allows it.",
  },
  {
    question: "What counts as illegal retaliation?",
    answer:
      "If a landlord raises your rent, reduces services, or starts eviction proceedings shortly after you report a habitability issue, file a complaint, or join a tenants' union, that timing itself can be evidence of illegal retaliation — most states presume retaliation if it happens within 90 to 180 days of a protected action.",
  },
  {
    question: "Do I have rights if I don't have a written lease?",
    answer:
      "Yes. A verbal or month-to-month tenancy still gives you the same core protections — habitability, notice before eviction, and protection from retaliation — even without a signed document. What changes is the notice period, which is often shorter for month-to-month arrangements.",
  },
];

export default function Page() {
  const related = ARTICLES.filter(
    (a) => a.href !== article.href && a.status === "published"
  ).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(article)} />
      <div className="container-page">
        <ArticleHeader
          article={article}
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Know Your Rights", href: "/know-your-rights/" },
            { label: article.title },
          ]}
        />

        <div className="grid gap-12 pb-20 lg:grid-cols-[220px_1fr]">
          <TableOfContents headings={headings} />

          <div className="min-w-0 max-w-3xl">
            <QuickAnswerBox
              points={[
                "Every state guarantees habitable housing, written notice before eviction, and protection from retaliation — regardless of what your lease says.",
                "Security deposit deadlines range from 14 days to 60 days depending on the state; missing that deadline can cost your landlord double or triple the deposit in some states.",
                "You don't need a written lease to have tenant rights — verbal and month-to-month tenancies are still protected.",
              ]}
            />

            <AdUnit position="hero" />

            <div className="article-prose">
              <p>
                Renters tend to assume their lease is the only document that
                matters. In practice, state and federal law sit on top of
                that lease and override it whenever the lease tries to waive
                a legal protection — most leases can&rsquo;t sign away your
                right to habitable housing or advance notice before eviction,
                even if the fine print says otherwise.
              </p>
              <p>
                The tricky part is that the specifics — how many days&rsquo;
                notice, how long a landlord has to return your deposit, what
                counts as an emergency repair — vary significantly by state.
                This guide covers the protections that apply everywhere, then
                gives you the exact numbers for your state.
              </p>

              <h2 id="federal-baseline">Rights Every Tenant Has, Regardless of State</h2>
              <ul>
                <li>
                  <strong>Fair housing.</strong> The federal Fair Housing Act
                  prohibits discrimination based on race, color, religion,
                  sex, national origin, disability, or familial status in
                  every state, no exceptions.
                </li>
                <li>
                  <strong>Habitability.</strong> Every state recognizes an
                  &ldquo;implied warranty of habitability&rdquo; — your unit
                  must be safe and livable, whether or not your lease
                  mentions it.
                </li>
                <li>
                  <strong>Written notice before eviction.</strong> No state
                  allows a landlord to remove a tenant without proper legal
                  notice and, ultimately, a court order.
                </li>
                <li>
                  <strong>Protection from retaliation.</strong> Every state
                  prohibits landlords from punishing tenants for exercising a
                  legal right, like reporting a code violation.
                </li>
              </ul>

              <h2 id="security-deposits">Security Deposits: What&rsquo;s Standard, What Varies</h2>
              <p>
                Most states require landlords to return a security deposit,
                minus itemized deductions for damage beyond normal wear and
                tear, within a set window after move-out. That window ranges
                from as little as 14 days (Nebraska, New York, South Dakota)
                to as long as 60 days (Alabama, Arkansas, Mississippi).
                Roughly a dozen states also require deposits to be held in a
                separate, sometimes interest-bearing, account.
              </p>
              <p>
                Miss the deadline as a landlord, and many states impose
                penalties — commonly double or triple the withheld amount —
                specifically to discourage landlords from sitting on a
                deposit past the legal window.
              </p>

              <AdUnit position="mid-1" />

              <h2 id="repairs">Repairs and Habitability: What Landlords Must Fix</h2>
              <p>
                &ldquo;Habitable&rdquo; generally means working plumbing,
                heat during cold months, structural safety, and freedom from
                serious pest infestations or mold. States differ on response
                timelines — some set a specific number of days for
                &ldquo;emergency&rdquo; repairs (no heat, no water) versus
                routine ones, while others use a &ldquo;reasonable
                time&rdquo; standard decided case by case.
              </p>
              <p>
                If a landlord won&rsquo;t make a required repair, most states
                allow tenants to use one of a few remedies: withholding rent
                into an escrow account, &ldquo;repair and deduct&rdquo; (pay
                for the fix and subtract it from rent), or filing a complaint
                with a local housing authority. Each has strict procedural
                rules — skipping a required notice step can forfeit the
                remedy, so check your specific state&rsquo;s process before
                withholding a single dollar.
              </p>

              <h2 id="eviction-notices">Eviction Notices: How Much Warning You&rsquo;re Owed</h2>
              <p>
                Notice periods depend on the reason for eviction. Nonpayment
                of rent typically gets the shortest notice — as little as 3
                days in states like Texas, Arizona, and Georgia. No-cause
                terminations of month-to-month tenancies usually require
                longer notice, often 30 to 60 days, and some cities add
                &ldquo;just cause&rdquo; eviction protections on top of state
                law that restrict no-cause terminations altogether.
              </p>
              <p>
                Regardless of the notice period, only a court can order an
                actual eviction. A landlord who changes the locks, shuts off
                utilities, or removes belongings without a court order is
                engaging in an illegal &ldquo;self-help&rdquo; eviction in
                nearly every state — and tenants can often sue for damages
                when that happens.
              </p>

              <h2 id="retaliation">Retaliation Is Illegal</h2>
              <p>
                If you report a habitability issue, join a tenants&rsquo;
                association, or exercise any legal right as a tenant, your
                landlord cannot legally respond by raising your rent, cutting
                services, or starting eviction proceedings because of it.
                Most states apply a &ldquo;presumption of retaliation&rdquo;
                if adverse action happens within a set window — commonly 90
                to 180 days — of your protected activity, which shifts the
                burden onto the landlord to prove a legitimate, unrelated
                reason.
              </p>

              <AdUnit position="mid-2" />

              <h2 id="state-table">State-by-State Quick Reference</h2>
              <p>
                These are the numbers that matter most in a tenant dispute:
                your state&rsquo;s deposit return deadline, small claims
                ceiling (useful if you need to sue over a withheld deposit),
                and standard notice-to-quit period.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto rounded-md border border-mist">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-mist bg-mist/50">
                    <th className="px-4 py-3 font-semibold text-ink">State</th>
                    <th className="px-4 py-3 font-semibold text-ink">Deposit Deadline</th>
                    <th className="px-4 py-3 font-semibold text-ink">Notice to Quit</th>
                    <th className="px-4 py-3 font-semibold text-ink">Small Claims Limit</th>
                  </tr>
                </thead>
                <tbody>
                  {STATES.map((state, i) => (
                    <tr key={state.slug} className={i % 2 === 1 ? "bg-paper" : "bg-paper-raised"}>
                      <td className="px-4 py-3 font-medium text-ink">
                        <Link href={`/${state.slug}-legal-guide/`} className="link-underline">
                          {state.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-ink-soft">{state.securityDepositDeadlineDays} days</td>
                      <td className="px-4 py-3 text-ink-soft">{state.tenantNoticeToQuitDays} days</td>
                      <td className="px-4 py-3 text-ink-soft">{formatUsd(state.smallClaimsLimit)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="article-prose">
              <h2 id="when-to-escalate">When to Escalate</h2>
              <p>
                Start with a written request to your landlord — most
                disputes get resolved at this stage. If that fails:
              </p>
              <ul>
                <li>
                  <strong>Habitability issues:</strong> file a complaint with
                  your local housing or code enforcement authority. This
                  creates an official record and often prompts faster action
                  than a tenant complaint alone.
                </li>
                <li>
                  <strong>Withheld deposits:</strong> send a{" "}
                  <Link href="/self-help-guides/how-to-write-demand-letter/">
                    formal demand letter
                  </Link>{" "}
                  citing your state&rsquo;s deadline, then file in small
                  claims court if it&rsquo;s ignored.
                </li>
                <li>
                  <strong>Eviction proceedings:</strong> respond to any court
                  filing by the deadline on the notice — missing it can mean
                  losing by default even if you have a strong case. Many
                  areas have free tenant legal aid clinics for exactly this
                  situation.
                </li>
              </ul>

              <h2 id="faq">Frequently Asked Questions</h2>
            </div>

            <FAQAccordion items={faqs} />

            <div className="mt-10">
              <VerdictBox>
                <p>
                  Your lease is not the final word on your rights as a
                  tenant — state law sits above it, and most of the
                  protections that matter (habitability, notice, protection
                  from retaliation) can&rsquo;t be signed away. If your
                  landlord is past the deposit deadline,{" "}
                  <Link href="/self-help-guides/how-to-write-demand-letter/">
                    send a demand letter
                  </Link>{" "}
                  before assuming you need a lawyer — most deposit disputes
                  resolve at that stage or in small claims court.
                </p>
              </VerdictBox>
            </div>

            <AdUnit position="above-footer" />
          </div>
        </div>

        <RelatedArticles articles={related} />
      </div>
    </>
  );
}

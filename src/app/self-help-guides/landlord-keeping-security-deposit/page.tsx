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
import { articleSchema } from "@/lib/schema";
import { PRIORITY_STATES } from "@/lib/states";

const article = getArticle("self-help-guides", "landlord-keeping-security-deposit")!;

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
  { id: "know-your-deadline", text: "Know Your Deadline" },
  { id: "legal-deductions", text: "What Counts as a Legal Deduction" },
  { id: "step-1", text: "Step 1: Send a Written Demand" },
  { id: "step-2", text: "Step 2: Check for Statutory Penalties" },
  { id: "step-3", text: "Step 3: File in Small Claims Court" },
  { id: "excuses", text: "Common Landlord Excuses" },
  { id: "when-lawyer", text: "When to Get a Lawyer Involved" },
  { id: "faq", text: "Frequently Asked Questions" },
  { id: "bottom-line", text: "The Bottom Line" },
];

const faqs = [
  {
    question: "Can my landlord deduct for normal wear and tear?",
    answer:
      "No. Every state distinguishes between damage (a large stain from a spilled drink, a hole in the wall) and normal wear and tear (faded paint, worn carpet paths, minor scuffs from ordinary living). Only damage — not wear and tear — can legally be deducted from a security deposit.",
  },
  {
    question: "What if my landlord never sent an itemized list of deductions?",
    answer:
      "In most states, a landlord who misses the deadline or fails to provide an itemized list forfeits the right to keep any of the deposit — meaning they owe you the full amount back, no matter what damage exists. Some states go further and impose penalty damages on top of that.",
  },
  {
    question: "Can my landlord charge me for professional cleaning?",
    answer:
      "Only if the unit was left dirtier than normal move-in condition and your lease specifically allows it. Routine cleaning between tenants is generally considered a cost of doing business, not something tenants pay for — check your state and lease language, since this varies.",
  },
  {
    question: "How much can I sue for if my landlord acted in bad faith?",
    answer:
      "Many states allow tenants to recover double or triple the wrongfully withheld deposit, plus court costs and sometimes attorney's fees, when a landlord withholds a deposit in bad faith or misses the statutory deadline. Check your specific state's penalty structure before filing.",
  },
  {
    question: "Do I need photos to win my case?",
    answer:
      "They help enormously but aren't strictly required. Move-in and move-out photos, your lease, any written communication with your landlord, and the itemized deduction list (or lack of one) are all strong evidence. If you didn't take photos, your testimony and any receipts for cleaning or repairs you made can still support your case.",
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
            { label: "Self-Help Guides", href: "/self-help-guides/" },
            { label: article.title },
          ]}
        />

        <div className="grid gap-12 pb-20 lg:grid-cols-[220px_1fr]">
          <TableOfContents headings={headings} />

          <div className="min-w-0 max-w-3xl">
            <QuickAnswerBox
              points={[
                "Your landlord has a strict, state-set deadline (usually 14–60 days) to return your deposit or send an itemized list of deductions.",
                "Only actual damage counts — normal wear and tear can never legally be deducted.",
                "If the deadline passes with no itemized list, most states say you're owed the full deposit back, sometimes doubled or tripled.",
              ]}
            />

            <AdUnit position="hero" />

            <div className="article-prose">
              <p>
                Every year, landlords withhold billions of dollars in
                security deposits that tenants are legally owed back —
                often because tenants assume there&rsquo;s nothing they can
                do. There usually is. Every state sets a hard deadline for
                returning a deposit, and missing that deadline is one of the
                most tenant-favorable technicalities in landlord-tenant law.
              </p>
              <p>
                This isn&rsquo;t a gray area you need a lawyer to interpret.
                It&rsquo;s a sequence: check the deadline, demand the money
                in writing, and escalate to small claims court if that fails.
                Here&rsquo;s exactly how to run it.
              </p>

              <h2 id="know-your-deadline">Know Your Deadline</h2>
              <p>
                The single most important number in this entire process is
                your state&rsquo;s deposit return deadline — the number of
                days your landlord has, after you move out, to either
                return the full deposit or send a written, itemized list of
                deductions. It ranges from as little as 14 days in states
                like New York and Nebraska to 60 days in states like Alabama
                and Mississippi.
              </p>
              <p>
                Find your exact number on our{" "}
                <Link href="/states/">state guides page</Link> — search for
                your state and look for &ldquo;Security Deposit
                Deadline.&rdquo; Write the date down. Everything below
                depends on it.
              </p>

              <h2 id="legal-deductions">What Counts as a Legal Deduction</h2>
              <p>
                Landlords can deduct for actual damage beyond normal use:
                large stains, holes in walls, broken fixtures, missing
                items. They generally cannot deduct for:
              </p>
              <ul>
                <li>Faded paint or minor scuffs from ordinary living.</li>
                <li>Worn carpet in high-traffic areas.</li>
                <li>Small nail holes from hanging pictures.</li>
                <li>Routine cleaning between tenants (in most states).</li>
                <li>Pre-existing damage that was already there at move-in.</li>
              </ul>
              <p>
                This distinction — damage vs. normal wear and tear — is the
                legal foundation almost every deposit dispute comes down to.
                Move-in and move-out photos are the single best evidence for
                proving which side of that line your situation falls on.
              </p>

              <h2 id="step-1">Step 1: Send a Written Demand</h2>
              <p>
                As soon as your state&rsquo;s deadline passes without a full
                refund or an itemized list, send a formal written demand.
                State the amount owed, cite the missed deadline, and set a
                firm response window — 10 to 14 days is standard.
              </p>
              <p>
                Use our{" "}
                <Link href="/legal-templates/demand-letter-template/">
                  free demand letter generator
                </Link>{" "}
                to produce this in a few minutes — it&rsquo;s built for
                exactly this situation. Send it certified mail with a return
                receipt so you have proof of delivery.
              </p>

              <AdUnit position="mid-1" />

              <h2 id="step-2">Step 2: Check for Statutory Penalties</h2>
              <p>
                Most states don&rsquo;t just require the deposit back — they
                penalize landlords who miss the deadline or act in bad
                faith. Common penalty structures include:
              </p>
              <ul>
                <li>
                  <strong>Automatic forfeiture.</strong> Miss the deadline,
                  lose the right to deduct anything — the full deposit is
                  owed regardless of actual damage.
                </li>
                <li>
                  <strong>Double or triple damages.</strong> Many states
                  award tenants two or three times the wrongfully withheld
                  amount when a landlord acts in bad faith.
                </li>
                <li>
                  <strong>Attorney&rsquo;s fees.</strong> Some states require
                  a losing landlord to cover the tenant&rsquo;s legal costs,
                  which makes it easier to get help even for a modest
                  deposit amount.
                </li>
              </ul>
              <p>
                Mention the applicable penalty explicitly in your demand
                letter — it signals you know the law, and it&rsquo;s often
                what gets a landlord to pay without a court filing.
              </p>

              <h2 id="step-3">Step 3: File in Small Claims Court</h2>
              <p>
                If the demand letter is ignored, small claims court is
                built for exactly this. Security deposit disputes are one
                of the most common small claims case types, and judges see
                them constantly. You don&rsquo;t need a lawyer — check your
                state&rsquo;s small claims dollar limit on our{" "}
                <Link href="/calculators/small-claims-limit/">
                  Small Claims Calculator
                </Link>{" "}
                and file with your local court. Bring your lease, move-in
                and move-out photos, all written communication, and your
                demand letter with proof of delivery.
              </p>

              <AdUnit position="mid-2" />

              <h2 id="excuses">Common Landlord Excuses (And Why They Don&rsquo;t Hold Up)</h2>
              <h3>&ldquo;I&rsquo;m still calculating the damages&rdquo;</h3>
              <p>
                The deadline isn&rsquo;t a suggestion. If it passes without
                an itemized list, this excuse doesn&rsquo;t change the legal
                outcome in most states.
              </p>
              <h3>&ldquo;You didn&rsquo;t leave a forwarding address&rdquo;</h3>
              <p>
                Some states do require tenants to provide one, but many
                don&rsquo;t — and even where required, a landlord who never
                asked for it can&rsquo;t always use its absence as an
                excuse. Check your state&rsquo;s specific requirement.
              </p>
              <h3>&ldquo;Normal wear and tear was excessive&rdquo;</h3>
              <p>
                This is a judgment call, and it&rsquo;s exactly what small
                claims court exists to resolve. Photos win these arguments.
              </p>

              <h2 id="when-lawyer">When to Get a Lawyer Involved</h2>
              <p>
                For a standard deposit dispute, you generally don&rsquo;t
                need one — small claims court is designed for self-
                representation. Consider an attorney if the amount exceeds
                your state&rsquo;s small claims limit, if your landlord has
                already retained counsel, or if the dispute is tangled up
                with a larger issue like an illegal eviction or
                discrimination claim.
              </p>

              <h2 id="faq">Frequently Asked Questions</h2>
            </div>

            <FAQAccordion items={faqs} />

            <div className="mt-10">
              <VerdictBox>
                <p>
                  Check your state&rsquo;s deadline first — that single
                  number usually decides the whole case. If it&rsquo;s
                  passed, <Link href="/legal-templates/demand-letter-template/">
                    send a written demand
                  </Link>{" "}
                  citing the missed deadline and any statutory penalty, then
                  escalate to{" "}
                  <Link href="/calculators/small-claims-limit/">
                    small claims court
                  </Link>{" "}
                  if you&rsquo;re ignored. Most tenants who follow this
                  sequence get more back than they expected.
                </p>
              </VerdictBox>
            </div>

            <AdUnit position="above-footer" />

            <div className="mt-10 border-t border-mist pt-8">
              <p className="text-caption-mono mb-3 uppercase tracking-wider text-ink-soft/60">
                Check your state&rsquo;s deposit deadline
              </p>
              <div className="flex flex-wrap gap-2">
                {PRIORITY_STATES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}-legal-guide/`}
                    className="rounded-full border border-mist px-3.5 py-1.5 text-sm text-ink transition-colors duration-200 hover:border-authority hover:text-authority"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <RelatedArticles articles={related} />
      </div>
    </>
  );
}

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
import { articleSchema, howToSchema } from "@/lib/schema";

const article = getArticle("self-help-guides", "how-to-write-demand-letter")!;

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
  { id: "what-is-it", text: "What Is a Demand Letter?" },
  { id: "before-you-write", text: "Before You Write: What You'll Need" },
  { id: "step-by-step", text: "How to Write One, Step by Step" },
  { id: "what-to-include", text: "What to Include vs. Leave Out" },
  { id: "how-to-send", text: "How to Send It (This Matters)" },
  { id: "mistakes", text: "Mistakes That Get Letters Ignored" },
  { id: "when-not-enough", text: "When It Isn't Enough" },
  { id: "faq", text: "Frequently Asked Questions" },
  { id: "bottom-line", text: "The Bottom Line" },
];

const steps = [
  "Address it correctly and date it — use the other party's full legal name or registered business name.",
  "State the facts in chronological order, without editorializing.",
  "Cite the specific amount owed or action demanded, in dollars or precise terms.",
  "Set a firm, realistic deadline — 10 to 14 days is standard.",
  "State your next step plainly if the deadline passes (small claims court, dispute with a regulator, etc.).",
  "Sign it, keep a copy, and send it in a way you can prove was received.",
];

const faqs = [
  {
    question: "Does a demand letter have any real legal power?",
    answer:
      "On its own, no — it's not a court order and can't be enforced. What it does is create a paper trail showing you gave the other party fair notice and a chance to resolve things, which strengthens your position if you end up in small claims court.",
  },
  {
    question: "Do I need a lawyer to write a demand letter?",
    answer:
      "No. Demand letters are one of the most common documents people write themselves — the format is simple and courts don't expect legal language. A lawyer-signed letter can add pressure for larger disputes, but for most consumer and landlord-tenant amounts, a well-written letter from you works fine.",
  },
  {
    question: "How much money should I ask for?",
    answer:
      "Ask for the exact, documented amount you're owed — the unpaid invoice total, the withheld deposit, the cost to repair damage. Round numbers or inflated demands undermine your credibility and give the other side a reason to negotiate down instead of just paying.",
  },
  {
    question: "What if they ignore the letter completely?",
    answer:
      "Silence after a properly delivered demand letter usually means your next step is small claims court, assuming the amount falls under your state's limit. Keep proof of delivery — it becomes part of your evidence.",
  },
  {
    question: "Can I send a demand letter by email instead of mail?",
    answer:
      "You can, but certified mail with a return receipt is stronger evidence of delivery if this ends up in court. Many people send both: email for speed, certified mail for the paper trail.",
  },
];

export default function Page() {
  const related = ARTICLES.filter(
    (a) => a.href !== article.href && a.status === "published"
  ).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(article)} />
      <JsonLd data={howToSchema("How to Write a Demand Letter", steps)} />
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
                "A demand letter is a formal, written request for payment or action, sent before you escalate to small claims court.",
                "State the facts, the exact amount owed, and a firm deadline — no threats, no legal jargon required.",
                "Send it certified mail with a return receipt so you have proof of delivery if you need it later.",
              ]}
            />

            <AdUnit position="hero" />

            <div className="article-prose">
              <p>
                A demand letter is the cheapest, fastest legal tool most
                people never use. It costs the price of a stamp, takes twenty
                minutes to write, and resolves a surprising share of disputes
                — unpaid invoices, security deposits, damaged property — before
                either side has to set foot in a courtroom.
              </p>
              <p>
                It works because it changes the other party&rsquo;s
                calculation. A text message is easy to ignore. A dated,
                specific letter that references a deadline and names small
                claims court as the next step signals that you&rsquo;re
                serious and organized — which is often enough to get paid
                without filing anything.
              </p>
              <p>
                Below is exactly how to write one, plus a free customizable
                template if you&rsquo;d rather fill in the blanks than start
                from a blank page.
              </p>

              <h2 id="what-is-it">What Is a Demand Letter?</h2>
              <p>
                A demand letter is a written notice, sent to a person or
                business, stating what they owe you or what action you want
                them to take, along with a deadline. It&rsquo;s not a
                lawsuit and it&rsquo;s not legally binding on its own — think
                of it as the official &ldquo;last chance to fix this before I
                escalate&rdquo; step.
              </p>
              <p>
                Courts like seeing one. If a dispute reaches small claims,
                showing the judge that you gave the other party fair written
                notice — and they ignored it — makes your case look more
                credible and organized than showing up with nothing but a
                verbal disagreement.
              </p>

              <h2 id="before-you-write">Before You Write: What You&rsquo;ll Need</h2>
              <ul>
                <li>The other party&rsquo;s correct full legal name or registered business name and mailing address.</li>
                <li>Any contract, invoice, lease, or written agreement related to the dispute.</li>
                <li>A specific dollar amount or action you&rsquo;re requesting — not a range.</li>
                <li>Dates: when the debt was incurred, when you first raised the issue, and your deadline for a response.</li>
                <li>Copies of any prior communication (texts, emails) showing you already tried to resolve it informally.</li>
              </ul>

              <h2 id="step-by-step">How to Write One, Step by Step</h2>
              <ol>
                {steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>

              <div className="my-8 rounded-md border border-authority/30 bg-authority-soft p-6">
                <p className="font-display text-lg font-semibold text-authority-dark">
                  Skip the blank page
                </p>
                <p className="mt-2 text-[15px] text-ink-soft">
                  Our free demand letter generator fills in this exact
                  structure for you — enter your details, preview the
                  letter, and download it ready to send.
                </p>
                <Link
                  href="/legal-templates/demand-letter-template/"
                  className="mt-4 inline-flex items-center rounded-md bg-authority px-5 py-2.5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-authority-dark"
                >
                  Generate My Demand Letter →
                </Link>
              </div>

              <AdUnit position="mid-1" />

              <h2 id="what-to-include">What to Include vs. Leave Out</h2>
              <h3>Include</h3>
              <ul>
                <li>A clear, chronological statement of facts.</li>
                <li>The exact amount owed, or the specific action requested.</li>
                <li>A real deadline — 10 to 14 days is standard and reasonable.</li>
                <li>What happens next if the deadline passes (small claims filing, complaint to a regulator, etc.).</li>
              </ul>
              <h3>Leave out</h3>
              <ul>
                <li>Threats of violence, harassment, or anything that could be read as intimidation — this can backfire legally.</li>
                <li>Emotional language or personal attacks. Judges and the other party both respond better to a businesslike tone.</li>
                <li>Legal terms you don&rsquo;t fully understand. Plain English that states the facts is more persuasive than borrowed legalese.</li>
              </ul>

              <h2 id="how-to-send">How to Send It (This Matters)</h2>
              <p>
                Certified mail with a return receipt is the standard for a
                reason: it creates a dated, signed record that the other
                party received the letter, which matters if you end up
                needing to prove notice in court. Email is faster and fine as
                a supplement, but by itself it&rsquo;s easier for the other
                side to claim they never saw it.
              </p>
              <p>
                Keep a copy of the letter, the certified mail receipt, and
                the delivery confirmation together — that packet is your
                evidence if this moves to small claims court.
              </p>

              <AdUnit position="mid-2" />

              <h2 id="mistakes">Mistakes That Get Letters Ignored</h2>
              <h3>Vague amounts</h3>
              <p>
                &ldquo;You owe me around $800&rdquo; invites negotiation and
                doubt. &ldquo;You owe $823.50 per Invoice #1042, dated March
                3&rdquo; doesn&rsquo;t.
              </p>
              <h3>No real deadline</h3>
              <p>
                &ldquo;Please respond soon&rdquo; has no teeth. A specific
                date does — and it&rsquo;s what starts the clock toward your
                next step.
              </p>
              <h3>Sending it to the wrong address or entity</h3>
              <p>
                If you&rsquo;re dealing with a business, send it to their
                registered agent or official business address, not a
                storefront — check your state&rsquo;s Secretary of State
                website if you&rsquo;re not sure who that is.
              </p>

              <h2 id="when-not-enough">When a Demand Letter Isn&rsquo;t Enough</h2>
              <p>
                A demand letter is a first step, not a guarantee. If the
                deadline passes with no response, your realistic options are
                small claims court (fast, inexpensive, no lawyer required
                below your state&rsquo;s dollar limit) or, for larger or more
                complex disputes, consulting an attorney about a formal
                lawsuit. Either way, the letter you already sent becomes part
                of your evidence — it wasn&rsquo;t wasted effort.
              </p>

              <h2 id="faq">Frequently Asked Questions</h2>
            </div>

            <FAQAccordion items={faqs} />

            <div className="mt-10">
              <VerdictBox>
                <p>
                  Write the letter, be specific about the amount and the
                  deadline, and send it certified mail. It costs almost
                  nothing and resolves more disputes than people expect. If
                  you want the structure done for you,{" "}
                  <Link href="/legal-templates/demand-letter-template/">
                    use our free demand letter generator
                  </Link>{" "}
                  — and if the deadline passes without a response, your next
                  stop is figuring out{" "}
                  <Link href="/calculators/small-claims-limit/">
                    your state&rsquo;s small claims court limit
                  </Link>
                  .
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

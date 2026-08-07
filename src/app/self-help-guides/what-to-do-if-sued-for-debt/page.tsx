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

const article = getArticle("self-help-guides", "what-to-do-if-sued-for-debt")!;

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
  { id: "dont-ignore", text: "Don't Panic, Don't Ignore It" },
  { id: "read-summons", text: "Step 1: Read the Summons Carefully" },
  { id: "verify-debt", text: "Step 2: Verify the Debt Is Real" },
  { id: "file-answer", text: "Step 3: File a Written Answer" },
  { id: "defenses", text: "Step 4: Defenses That Actually Work" },
  { id: "if-you-ignore", text: "Step 5: What Happens If You Ignore It" },
  { id: "settle", text: "Step 6: Consider Negotiating" },
  { id: "when-lawyer", text: "When to Get a Lawyer" },
  { id: "faq", text: "Frequently Asked Questions" },
  { id: "bottom-line", text: "The Bottom Line" },
];

const steps = [
  "Note the response deadline on the summons — usually 14 to 35 days depending on your state.",
  "Verify the debt is actually yours and within the statute of limitations before responding.",
  "File a written Answer with the court by the deadline, even if you're not sure you have a defense.",
  "Raise every applicable defense in your Answer — you generally can't add new ones later.",
  "If you can't pay in full, propose a payment plan or settlement in writing.",
];

const faqs = [
  {
    question: "What happens if I don't respond to the lawsuit at all?",
    answer:
      "The court will almost certainly enter a default judgment against you — meaning you automatically lose, even if you had a valid defense. Once that happens, the creditor can pursue wage garnishment, bank account levies, or property liens depending on your state, and reopening a default judgment afterward is much harder than answering on time.",
  },
  {
    question: "Can I be sued for a debt that's really old?",
    answer:
      "Every state has a statute of limitations on debt — typically 3 to 10 years depending on the state and type of debt. If that period has passed, you may have a complete defense, but you have to raise it; the court won't automatically dismiss an old debt on its own.",
  },
  {
    question: "Do I need a lawyer to respond to a debt lawsuit?",
    answer:
      "Not necessarily. Filing an Answer is a standard court form in most jurisdictions, and self-help legal aid clinics often help for free. A lawyer becomes more valuable if the amount is large, if you're unsure about a defense, or if wage garnishment is already threatened.",
  },
  {
    question: "Can they garnish my wages before winning the case?",
    answer:
      "No. A creditor needs a final judgment before pursuing garnishment in nearly every state, and even then, federal and state law caps how much of your paycheck can be taken and protects certain types of income (like Social Security) entirely.",
  },
  {
    question: "What if I don't recognize the debt or the company suing me?",
    answer:
      "This is common — debt often gets sold to collection agencies you never dealt with directly. Demand proof that the debt is yours and that the plaintiff actually owns it (a full chain of assignment). Many debt-buyer lawsuits get dismissed for lack of proper documentation when a defendant pushes back.",
  },
];

export default function Page() {
  const related = ARTICLES.filter(
    (a) => a.href !== article.href && a.status === "published"
  ).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(article)} />
      <JsonLd data={howToSchema("What to Do If You're Sued for Debt", steps)} />
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
                "You typically have 14–35 days to file a written Answer — miss it, and the creditor usually wins automatically by default judgment.",
                "Verify the debt is actually yours, owned by the plaintiff, and within your state's statute of limitations before doing anything else.",
                "Responding doesn't mean you have to pay in full immediately — a payment plan or settlement is often negotiable even after you've filed.",
              ]}
            />

            <AdUnit position="hero" />

            <div className="article-prose">
              <p>
                Getting served with a debt collection lawsuit is stressful,
                and the instinct to throw the papers in a drawer and hope it
                goes away is understandable. It&rsquo;s also the single
                worst thing you can do. Debt lawsuits move fast, and courts
                default almost entirely in the creditor&rsquo;s favor when
                the defendant never shows up.
              </p>
              <p>
                The good news: responding correctly is a mechanical process,
                not a legal mystery, and doing it right — even without a
                lawyer — dramatically changes your odds.
              </p>

              <h2 id="dont-ignore">Don&rsquo;t Panic, Don&rsquo;t Ignore It</h2>
              <p>
                A lawsuit isn&rsquo;t a criminal matter — you won&rsquo;t be
                arrested for owing money. But it is a legal deadline, and
                courts don&rsquo;t extend sympathy to defendants who never
                respond. The entire rest of this guide assumes one thing:
                you&rsquo;re going to respond, on time, in writing.
              </p>

              <h2 id="read-summons">Step 1: Read the Summons Carefully</h2>
              <p>
                The summons tells you exactly how many days you have to
                respond (commonly 14 to 35 days depending on the state and
                court), which court the case is filed in, and the case
                number. Circle the response deadline — it&rsquo;s the single
                most important date in this process.
              </p>

              <h2 id="verify-debt">Step 2: Verify the Debt Is Real</h2>
              <p>Before responding, confirm three things:</p>
              <ul>
                <li>
                  <strong>Is it actually your debt?</strong> Debt is
                  frequently sold multiple times between collectors, and
                  mix-ups happen. Request documentation proving the debt and
                  the amount.
                </li>
                <li>
                  <strong>Does the plaintiff own it?</strong> A debt buyer
                  suing you needs a documented chain showing they legally
                  acquired the debt — not just an assertion that they did.
                </li>
                <li>
                  <strong>Is it within the statute of limitations?</strong>{" "}
                  Every state sets a time limit — typically 3 to 10 years —
                  after which a debt becomes legally uncollectible through
                  the courts. Use our{" "}
                  <Link href="/states/">state guides</Link> to check your
                  state&rsquo;s contract statute of limitations.
                </li>
              </ul>

              <AdUnit position="mid-1" />

              <h2 id="file-answer">Step 3: File a Written Answer</h2>
              <p>
                This is the step that matters most. An Answer is a short,
                standard court form where you respond to each allegation in
                the complaint — admit, deny, or state you lack enough
                information to respond. Most courts have a fill-in-the-blank
                version available through the court clerk&rsquo;s office or
                website. File it — and serve a copy on the plaintiff&rsquo;s
                attorney — before the deadline on your summons.
              </p>
              <p>
                Filing an Answer, even a bare-bones one, prevents an
                automatic default judgment and forces the creditor to
                actually prove their case.
              </p>

              <h2 id="defenses">Step 4: Defenses That Actually Work</h2>
              <ul>
                <li>
                  <strong>Statute of limitations expired.</strong> One of
                  the strongest defenses if it applies — but you must raise
                  it; it&rsquo;s not automatic.
                </li>
                <li>
                  <strong>Lack of standing.</strong> The plaintiff can&rsquo;t
                  prove they own the debt.
                </li>
                <li>
                  <strong>Improper service.</strong> You were never properly
                  notified of the lawsuit under your state&rsquo;s rules.
                </li>
                <li>
                  <strong>Identity or amount dispute.</strong> The debt
                  isn&rsquo;t yours, or the amount claimed is wrong.
                </li>
                <li>
                  <strong>Already paid or settled.</strong> Keep any proof
                  of prior payment or settlement.
                </li>
              </ul>

              <AdUnit position="mid-2" />

              <h2 id="if-you-ignore">Step 5: What Happens If You Ignore It</h2>
              <p>
                If you miss the deadline, the court enters a default
                judgment — you lose automatically, regardless of whether you
                had a good defense. Once a creditor has a judgment, they can
                typically pursue wage garnishment (subject to federal and
                state limits), bank account levies, or property liens.
                Undoing a default judgment afterward requires a separate,
                harder motion — it&rsquo;s far easier to answer on time than
                to fix this later.
              </p>

              <h2 id="settle">Step 6: Consider Negotiating a Settlement</h2>
              <p>
                Responding to the lawsuit doesn&rsquo;t mean you have to
                fight it to the end. Many creditors will accept a payment
                plan or a lump-sum settlement for less than the full amount
                — especially once they see you&rsquo;re engaged and
                represented (even by yourself) rather than defaulting. Get
                any settlement in writing before making a payment, and
                confirm it will be filed with the court as resolving the
                case.
              </p>

              <h2 id="when-lawyer">When to Get a Lawyer</h2>
              <p>
                Consider a consumer-debt or legal aid attorney if the amount
                is large, if you believe you&rsquo;re a victim of identity
                theft, if wage garnishment has already started, or if
                you&rsquo;re unsure how to complete the Answer correctly. Many areas have
                free legal aid clinics specifically for debt-collection
                defense — check your state courts&rsquo; self-help resources
                or local bar association referral service.
              </p>

              <h2 id="faq">Frequently Asked Questions</h2>
            </div>

            <FAQAccordion items={faqs} />

            <div className="mt-10">
              <VerdictBox>
                <p>
                  File your Answer before the deadline — that single action
                  prevents the worst outcome (default judgment) and buys you
                  room to negotiate. Verify the debt is really yours and
                  still within the statute of limitations before agreeing to
                  anything.{" "}
                  <Link href="/legal-templates/demand-letter-template/">
                    Our demand letter tool
                  </Link>{" "}
                  can also help if you&rsquo;re disputing the debt in
                  writing with the collector directly.
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

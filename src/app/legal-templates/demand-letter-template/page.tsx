import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ArticleMetaBar from "@/components/ui/ArticleMetaBar";
import LegalDisclaimer from "@/components/ui/LegalDisclaimer";
import DemandLetterGenerator from "@/components/templates/DemandLetterGenerator";
import AdUnit from "@/components/ui/AdUnit";
import FAQAccordion from "@/components/ui/FAQAccordion";
import RelatedArticles from "@/components/article/RelatedArticles";
import JsonLd from "@/components/seo/JsonLd";
import { getArticle, ARTICLES } from "@/lib/articles";
import { articleSchema } from "@/lib/schema";

const article = getArticle("legal-templates", "demand-letter-template")!;

export const metadata: Metadata = {
  title: { absolute: article.seoTitle },
  description: article.metaDescription,
  alternates: { canonical: article.href },
};

const faqs = [
  {
    question: "Is this template legally binding?",
    answer:
      "A demand letter isn't a contract or court order — it's a formal notice. It becomes powerful as evidence if the dispute later goes to small claims court, showing you gave the other party fair notice and a specific deadline.",
  },
  {
    question: "Can I use this for any dollar amount?",
    answer:
      "Yes. There's no minimum or maximum for a demand letter itself. Just make sure the amount you list matches what you'd actually be able to pursue in small claims court if it comes to that — check your state's limit on our small claims calculator.",
  },
  {
    question: "Should I have a lawyer review it before sending?",
    answer:
      "For most consumer, freelance, and landlord-tenant amounts, no — the format here is standard and courts don't expect polished legal language. For larger amounts or business disputes with a company that has in-house counsel, a quick attorney review can add weight.",
  },
];

export default function Page() {
  const related = ARTICLES.filter(
    (a) => a.href !== article.href && a.status === "published"
  ).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(article)} />
      <div className="container-page pb-20 pt-10 md:pt-14">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Legal Templates", href: "/legal-templates/" },
            { label: article.title },
          ]}
        />
        <h1 className="text-display-h1 mt-4 max-w-2xl text-ink">{article.title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{article.dek}</p>
        <div className="mt-6">
          <ArticleMetaBar
            datePublished={article.datePublished}
            dateModified={article.dateModified}
            readingTime={article.readingTime}
            appliesTo={article.appliesTo}
          />
        </div>
        <div className="mt-6 max-w-2xl">
          <LegalDisclaimer text="This template covers straightforward payment demands. It's not a substitute for legal advice — for high-dollar or contested disputes, have the final letter reviewed by a licensed attorney." />
        </div>

        <div className="mt-10">
          <DemandLetterGenerator />
        </div>

        <div className="mt-10 max-w-2xl rounded-md border border-mist bg-mist/40 p-6">
          <p className="font-display text-base font-semibold text-ink">
            Dealing with something more complex than a simple invoice?
          </p>
          <p className="mt-1.5 text-sm text-ink-soft">
            Contract disputes, breach of a multi-party agreement, or anything
            with real legal ambiguity benefit from an AI contract review tool
            — or a licensed attorney — before you send anything in writing.
          </p>
          <Link
            href="/ai-legal-tools/"
            className="mt-4 inline-flex items-center rounded-md border border-mist bg-paper-raised px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:border-authority hover:text-authority"
          >
            Compare AI legal tools →
          </Link>
        </div>

        <div className="mt-10 max-w-2xl">
          <AdUnit position="mid-1" />
        </div>

        <div className="article-prose mt-4 max-w-2xl">
          <h2>When to Use This Template</h2>
          <p>
            This template fits most everyday payment disputes: an unpaid
            freelance invoice, a security deposit your landlord hasn&rsquo;t
            returned, a friend or contractor who owes you a specific,
            documented amount. It assumes there&rsquo;s a clear dollar figure
            and a paper trail — an invoice, a lease, a text conversation
            confirming the agreement.
          </p>
          <p>
            It&rsquo;s not the right tool for disputes where liability itself
            is unclear (was there even an agreement?) or where the amount is
            large enough that a contested response is likely — those
            situations benefit from an attorney&rsquo;s input before you put
            anything in writing.
          </p>

          <h2>What Makes This Letter Effective</h2>
          <ul>
            <li>A specific dollar amount, not a range.</li>
            <li>A real deadline — the generator defaults to 14 days, which is standard.</li>
            <li>A plain statement of what happens if the deadline passes.</li>
            <li>A professional, non-emotional tone throughout.</li>
          </ul>

          <h2>How to Send It</h2>
          <p>
            Print and send it certified mail with a return receipt for the
            strongest proof of delivery. Email works as a faster supplement,
            but keep the certified mail as your primary record — it&rsquo;s
            harder for the other party to dispute in court.
          </p>
          <p>
            Want the full walkthrough, including what to do if it&rsquo;s
            ignored?{" "}
            <Link href="/self-help-guides/how-to-write-demand-letter/">
              Read the complete demand letter guide
            </Link>
            .
          </p>

          <h2>Frequently Asked Questions</h2>
        </div>

        <FAQAccordion items={faqs} />

        <div className="mt-10 max-w-2xl">
          <AdUnit position="above-footer" />
        </div>

        <RelatedArticles articles={related} />
      </div>
    </>
  );
}

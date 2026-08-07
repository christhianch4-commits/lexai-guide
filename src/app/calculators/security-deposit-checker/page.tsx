import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ArticleMetaBar from "@/components/ui/ArticleMetaBar";
import LegalDisclaimer from "@/components/ui/LegalDisclaimer";
import SecurityDepositChecker from "@/components/calculators/SecurityDepositChecker";
import AdUnit from "@/components/ui/AdUnit";
import FAQAccordion from "@/components/ui/FAQAccordion";
import RelatedArticles from "@/components/article/RelatedArticles";
import JsonLd from "@/components/seo/JsonLd";
import { getArticle, ARTICLES } from "@/lib/articles";
import { webApplicationSchema } from "@/lib/schema";

const article = getArticle("calculators", "security-deposit-checker")!;

export const metadata: Metadata = {
  title: { absolute: article.seoTitle },
  description: article.metaDescription,
  alternates: { canonical: article.href },
};

const faqs = [
  {
    question: "What if my landlord says I owe more than my deposit covers?",
    answer:
      "Landlords can sometimes bill beyond the deposit for extensive damage, but the same rules apply: only actual damage counts, itemized documentation is required, and normal wear and tear can never be charged. A large overage claim deserves extra scrutiny — ask for receipts or repair estimates.",
  },
  {
    question: "My landlord sent the list on time, but I still disagree with it. Now what?",
    answer:
      "Meeting the deadline only satisfies the procedural requirement — it doesn't make every listed charge valid. Compare each line item against your move-in condition (photos help enormously) and dispute anything that looks like normal wear and tear in a written demand.",
  },
];

export default function Page() {
  const related = ARTICLES.filter(
    (a) => a.status === "published" && a.pillar !== "calculators"
  ).slice(0, 3);

  return (
    <>
      <JsonLd
        data={webApplicationSchema(
          "Security Deposit Deduction Checker",
          article.metaDescription,
          article.href
        )}
      />
      <div className="container-page pb-20 pt-10 md:pt-14">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Calculators", href: "/calculators/" },
            { label: article.title },
          ]}
        />
        <h1 className="text-display-h1 mt-4 max-w-2xl text-ink">{article.title}</h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">{article.dek}</p>
        <div className="mt-6">
          <ArticleMetaBar
            datePublished={article.datePublished}
            dateModified={article.dateModified}
            readingTime={article.readingTime}
            appliesTo={article.appliesTo}
          />
        </div>
        <div className="mt-6 max-w-2xl">
          <LegalDisclaimer text="This tool gives a general read based on common state rules, not a legal determination. Confirm specifics against your state's exact statute before acting." />
        </div>

        <div className="mt-10 max-w-xl">
          <SecurityDepositChecker />
        </div>

        <div className="mt-10 max-w-xl">
          <AdUnit position="mid-1" />
        </div>

        <div className="article-prose mt-4 max-w-xl">
          <h2>How This Check Works</h2>
          <p>
            Every state sets a deadline for landlords to either return a
            security deposit in full or send an itemized list of
            deductions. Miss that deadline, and most states say the
            landlord forfeits the right to deduct anything at all — you may
            be owed the full deposit back, sometimes with a penalty on top.
            This tool checks your numbers against your state&rsquo;s
            deadline and flags the most common violation pattern.
          </p>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="max-w-xl">
          <FAQAccordion items={faqs} />
        </div>

        <div className="mt-10 max-w-xl">
          <AdUnit position="above-footer" />
        </div>

        <RelatedArticles articles={related} />
      </div>
    </>
  );
}

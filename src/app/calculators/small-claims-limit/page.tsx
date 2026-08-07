import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ArticleMetaBar from "@/components/ui/ArticleMetaBar";
import LegalDisclaimer from "@/components/ui/LegalDisclaimer";
import SmallClaimsCalculator from "@/components/calculators/SmallClaimsCalculator";
import AdUnit from "@/components/ui/AdUnit";
import FAQAccordion from "@/components/ui/FAQAccordion";
import RelatedArticles from "@/components/article/RelatedArticles";
import JsonLd from "@/components/seo/JsonLd";
import { getArticle, ARTICLES } from "@/lib/articles";
import { webApplicationSchema } from "@/lib/schema";

const article = getArticle("calculators", "small-claims-limit")!;

export const metadata: Metadata = {
  title: { absolute: article.seoTitle },
  description: article.metaDescription,
  alternates: { canonical: article.href },
};

const faqs = [
  {
    question: "What happens if my claim is over the small claims limit?",
    answer:
      "You can still sue, but you'll need to file in a higher civil court, which usually involves more paperwork, longer timelines, and often a lawyer. Some people choose to waive the excess amount just to stay eligible for small claims — check with your specific court about whether that's allowed.",
  },
  {
    question: "Do I need a lawyer for small claims court?",
    answer:
      "No — small claims court is specifically designed for people to represent themselves. Many states don't even allow lawyers in small claims proceedings, or allow them but don't require them.",
  },
  {
    question: "How much does it cost to file in small claims court?",
    answer:
      "Filing fees typically range from $30 to $100 depending on your state and the amount you're claiming. Some courts waive fees for filers who qualify based on income.",
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
          "Small Claims Limit by State Calculator",
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
          <LegalDisclaimer text="Small claims limits and rules change by legislative session. Confirm the current figure with your local court clerk before filing." />
        </div>

        <div className="mt-10 max-w-xl">
          <SmallClaimsCalculator />
        </div>

        <div className="mt-10 max-w-xl">
          <AdUnit position="mid-1" />
        </div>

        <div className="article-prose mt-4 max-w-xl">
          <h2>How Small Claims Limits Work</h2>
          <p>
            Every state sets a dollar ceiling on what small claims court can
            hear — file above it, and you&rsquo;re routed into regular civil
            court instead, with more formal procedure and usually a longer
            timeline. Limits range from as low as $2,500 (Kentucky, Rhode
            Island) to as high as $25,000 (Delaware, Tennessee), so the same
            dispute might be a quick small claims filing in one state and a
            full civil case in another.
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

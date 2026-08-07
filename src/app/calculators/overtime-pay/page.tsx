import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ArticleMetaBar from "@/components/ui/ArticleMetaBar";
import LegalDisclaimer from "@/components/ui/LegalDisclaimer";
import OvertimeCalculator from "@/components/calculators/OvertimeCalculator";
import AdUnit from "@/components/ui/AdUnit";
import FAQAccordion from "@/components/ui/FAQAccordion";
import RelatedArticles from "@/components/article/RelatedArticles";
import JsonLd from "@/components/seo/JsonLd";
import { getArticle, ARTICLES } from "@/lib/articles";
import { webApplicationSchema } from "@/lib/schema";

const article = getArticle("calculators", "overtime-pay")!;

export const metadata: Metadata = {
  title: { absolute: article.seoTitle },
  description: article.metaDescription,
  alternates: { canonical: article.href },
};

const faqs = [
  {
    question: "Who is exempt from overtime pay?",
    answer:
      "Salaried employees in bona fide executive, administrative, or professional roles who earn above a federal salary threshold (updated periodically by the Department of Labor) are typically exempt. Most hourly workers, regardless of title, are non-exempt and entitled to overtime.",
  },
  {
    question: "Does my employer have to pay overtime for working on weekends or holidays?",
    answer:
      "Not automatically. The FLSA only requires overtime for hours worked beyond 40 in a single workweek, regardless of which days those hours fall on. Weekend or holiday premium pay is only required if your employer's policy or a union contract promises it.",
  },
  {
    question: "What if my paycheck doesn't match this calculation?",
    answer:
      "Start by requesting a written breakdown of your hours and pay from your employer. If the shortfall isn't explained or corrected, you can file a wage claim with your state labor department or the federal Department of Labor's Wage and Hour Division, generally at no cost to you.",
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
          "Overtime Pay Calculator",
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
          <LegalDisclaimer text="This calculator applies the federal FLSA weekly-overtime standard. Some states add daily overtime rules or different exemption tests — confirm with your state labor department for anything beyond a rough estimate." />
        </div>

        <div className="mt-10 max-w-xl">
          <OvertimeCalculator />
        </div>

        <div className="mt-10 max-w-xl">
          <AdUnit position="mid-1" />
        </div>

        <div className="article-prose mt-4 max-w-xl">
          <h2>How Overtime Pay Is Calculated</h2>
          <p>
            The federal Fair Labor Standards Act entitles non-exempt
            employees to 1.5 times their regular hourly rate for every hour
            worked beyond 40 in a single workweek. It&rsquo;s calculated
            weekly, not daily or biweekly — working 30 hours one week and 50
            the next doesn&rsquo;t average out; only the 50-hour week
            triggers overtime.
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

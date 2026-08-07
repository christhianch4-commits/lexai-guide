import type { Metadata } from "next";
import PillarHero from "@/components/pillar/PillarHero";
import ArticleCard from "@/components/ui/ArticleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import AdUnit from "@/components/ui/AdUnit";
import { getPillarArticlesForDisplay } from "@/lib/articles";

export const metadata: Metadata = {
  title: { absolute: "Know Your Rights: Consumer, Tenant & Employee Protections | LexAI Guide" },
  description:
    "The legal protections you have as a consumer, tenant, and employee in the US — explained in plain English, with the exact laws behind them.",
  alternates: { canonical: "/know-your-rights/" },
};

export default function Page() {
  const { articles, hiddenCount } = getPillarArticlesForDisplay("know-your-rights");

  return (
    <>
      <PillarHero
        icon="⚡"
        eyebrow="Know Your Rights"
        title="The Protections You Already Have"
        description="Most people underestimate how much legal protection they already have as a consumer, tenant, or employee. Here's what the law actually guarantees."
      />

      <div className="container-page pt-14">
        <AdUnit position="hero" />
      </div>

      <section className="container-page pb-14 md:pb-20">
        <SectionHeading eyebrow="Protections" title="All rights guides" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.href} article={article} showPillar={false} />
          ))}
        </div>
        {hiddenCount > 0 && (
          <p className="mt-6 text-sm text-ink-soft">
            +{hiddenCount} more guide{hiddenCount === 1 ? "" : "s"} in progress —{" "}
            <a href="mailto:hello@lexaiguide.com" className="link-underline text-authority">
              tell us what to prioritize
            </a>
            .
          </p>
        )}
      </section>

      <div className="container-page flex justify-center py-4">
        <AdUnit position="above-footer" />
      </div>
    </>
  );
}

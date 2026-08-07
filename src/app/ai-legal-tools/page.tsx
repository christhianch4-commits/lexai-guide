import type { Metadata } from "next";
import PillarHero from "@/components/pillar/PillarHero";
import ArticleCard from "@/components/ui/ArticleCard";
import ToolRatingCard from "@/components/ui/ToolRatingCard";
import SectionHeading from "@/components/ui/SectionHeading";
import AdUnit from "@/components/ui/AdUnit";
import { getPillarArticlesForDisplay } from "@/lib/articles";
import { TOOLS } from "@/lib/tools";

export const metadata: Metadata = {
  title: { absolute: "AI Legal Tools: Honest Reviews & Comparisons | LexAI Guide" },
  description:
    "Tested reviews of the leading AI legal tools — contract review, LLC formation, and consumer-rights automation. Real pricing, real pros and cons.",
  alternates: { canonical: "/ai-legal-tools/" },
};

export default function Page() {
  const { articles, hiddenCount } = getPillarArticlesForDisplay("ai-legal-tools");

  return (
    <>
      <PillarHero
        icon="🤖"
        eyebrow="AI Legal Tools"
        title="The Best AI Legal Tools, Honestly Reviewed"
        description="We test AI legal tools the way you'd actually use them — real checkouts, real documents, real pricing. No sponsored placements."
      />

      <section className="container-page py-14 md:py-20">
        <SectionHeading eyebrow="Rated by LexAI Guide" title="Every tool, at a glance" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => (
            <ToolRatingCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <div className="container-page">
        <AdUnit position="hero" />
      </div>

      <section className="container-page py-14 md:py-20">
        <SectionHeading eyebrow="Full comparison" title="Side-by-side" />
        <div className="mt-8 overflow-x-auto rounded-md border border-mist">
          <table className="w-full min-w-[700px] border-collapse text-left text-sm">
            <thead>
              <tr className="sticky top-16 border-b border-mist bg-mist/70 backdrop-blur">
                <th className="px-4 py-3 font-semibold text-ink">Tool</th>
                <th className="px-4 py-3 font-semibold text-ink">Category</th>
                <th className="px-4 py-3 font-semibold text-ink">Rating</th>
                <th className="px-4 py-3 font-semibold text-ink">Starting Price</th>
                <th className="px-4 py-3 font-semibold text-ink">Best For</th>
              </tr>
            </thead>
            <tbody>
              {TOOLS.map((tool, i) => (
                <tr key={tool.slug} className={i % 2 === 1 ? "bg-paper" : "bg-paper-raised"}>
                  <td className="px-4 py-3 font-medium text-ink">{tool.name}</td>
                  <td className="px-4 py-3 text-ink-soft">{tool.category}</td>
                  <td className="px-4 py-3 text-ink-soft">{tool.rating.toFixed(1)}/5</td>
                  <td className="px-4 py-3 text-ink-soft">{tool.priceLabel}</td>
                  <td className="px-4 py-3 text-ink-soft">{tool.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-mist/40 py-14 md:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Deep dives" title="AI Legal Tools guides" />
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
        </div>
      </section>

      <div className="container-page flex justify-center py-4">
        <AdUnit position="above-footer" />
      </div>
    </>
  );
}

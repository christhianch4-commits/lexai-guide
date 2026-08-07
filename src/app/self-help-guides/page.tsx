import type { Metadata } from "next";
import PillarHero from "@/components/pillar/PillarHero";
import ArticleCard from "@/components/ui/ArticleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import AdUnit from "@/components/ui/AdUnit";
import { getPillarArticlesForDisplay } from "@/lib/articles";

export const metadata: Metadata = {
  title: { absolute: "Self-Help Legal Guides: Step-by-Step Playbooks | LexAI Guide" },
  description:
    "Step-by-step guides for handling legal problems yourself — demand letters, small claims court, security deposits, wrongful termination, and more.",
  alternates: { canonical: "/self-help-guides/" },
};

export default function Page() {
  const { articles, hiddenCount } = getPillarArticlesForDisplay("self-help-guides");

  return (
    <>
      <PillarHero
        icon="📚"
        eyebrow="Self-Help Guides"
        title="Handle It Yourself, Step by Step"
        description="Plain-English playbooks for the legal problems people run into most — written so you know exactly what to do next, not just what the law says."
      />

      <div className="container-page pt-14">
        <AdUnit position="hero" />
      </div>

      <section className="container-page pb-14 md:pb-20">
        <SectionHeading eyebrow="Step-by-step" title="All self-help guides" />
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

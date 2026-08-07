import Hero from "@/components/home/Hero";
import NavPills from "@/components/home/NavPills";
import ProblemGrid from "@/components/home/ProblemGrid";
import FeaturedGuides from "@/components/home/FeaturedGuides";
import AIToolsShowcase from "@/components/home/AIToolsShowcase";
import StateMapSection from "@/components/home/StateMapSection";
import CalculatorsSection from "@/components/home/CalculatorsSection";
import TemplatesSection from "@/components/home/TemplatesSection";
import LatestGuides from "@/components/home/LatestGuides";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import AdUnit from "@/components/ui/AdUnit";
import { ARTICLES, getLatestArticles } from "@/lib/articles";

export default function Home() {
  const featured = ARTICLES.filter((a) => a.status === "published" && a.wordCountTarget !== "Tool").slice(0, 3);
  const latest = getLatestArticles(6);
  const trending = ARTICLES.filter((a) => a.status === "published").slice(0, 5);

  return (
    <>
      <Hero />
      <NavPills />
      <ProblemGrid />

      <div className="container-page">
        <AdUnit position="hero" />
      </div>

      <FeaturedGuides articles={featured} />
      <AIToolsShowcase />

      <div className="container-page flex justify-center">
        <AdUnit position="mid-1" />
      </div>

      <StateMapSection />
      <CalculatorsSection />

      <div className="container-page flex justify-center">
        <AdUnit position="mid-2" />
      </div>

      <TemplatesSection />
      <LatestGuides latest={latest} trending={trending} />
      <NewsletterCTA />
    </>
  );
}

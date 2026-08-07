import ArticleCard from "@/components/ui/ArticleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ArticleMeta } from "@/lib/types";

export default function FeaturedGuides({ articles }: { articles: ArticleMeta[] }) {
  return (
    <section className="container-page py-16 md:py-24">
      <SectionHeading eyebrow="Editor's picks" title="Featured guides" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.href} article={article} />
        ))}
      </div>
    </section>
  );
}

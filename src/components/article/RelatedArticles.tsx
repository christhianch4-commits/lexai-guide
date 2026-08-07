import ArticleCard from "@/components/ui/ArticleCard";
import type { ArticleMeta } from "@/lib/types";

export default function RelatedArticles({ articles }: { articles: ArticleMeta[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="mt-14 border-t border-mist pt-10">
      <h2 className="font-display text-xl font-semibold text-ink">Related Guides</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.href} article={article} />
        ))}
      </div>
    </section>
  );
}

import ArticleCard from "@/components/ui/ArticleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import AdUnit from "@/components/ui/AdUnit";
import type { ArticleMeta } from "@/lib/types";

export default function LatestGuides({
  latest,
  trending,
}: {
  latest: ArticleMeta[];
  trending: ArticleMeta[];
}) {
  return (
    <section className="container-page py-16 md:py-24">
      <SectionHeading eyebrow="Fresh off the desk" title="Latest legal guides" />
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_300px]">
        <div className="grid gap-5 sm:grid-cols-2">
          {latest.map((article) => (
            <ArticleCard key={article.href} article={article} />
          ))}
        </div>

        <aside>
          <div className="rounded-[var(--radius-card)] border border-mist bg-paper-raised p-5">
            <h3 className="text-caption-mono uppercase tracking-wider text-ink-soft/60">
              Trending this week
            </h3>
            <ul className="mt-4 space-y-4">
              {trending.map((article, i) => (
                <li key={article.href} className="flex gap-3">
                  <span className="font-display text-lg font-semibold text-authority/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {article.status === "published" ? (
                    <a href={article.href} className="link-underline text-sm font-medium leading-snug text-ink">
                      {article.title}
                    </a>
                  ) : (
                    <span className="text-sm font-medium leading-snug text-ink-soft">
                      {article.title}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <AdUnit position="sidebar" sticky />
        </aside>
      </div>
    </section>
  );
}

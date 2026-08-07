import Link from "next/link";
import type { ArticleMeta } from "@/lib/types";
import { getPillar } from "@/lib/pillars";

export default function ArticleCard({
  article,
  showPillar = true,
}: {
  article: ArticleMeta;
  showPillar?: boolean;
}) {
  const pillar = getPillar(article.pillar);
  const isComingSoon = article.status === "coming-soon";

  const cardBody = (
    <div
      className={`card-hover flex h-full flex-col rounded-[var(--radius-card)] border border-mist p-6 ${
        isComingSoon ? "bg-mist/30" : "bg-paper-raised"
      }`}
    >
      <div className="flex items-center justify-between">
        {showPillar && (
          <span className="inline-flex items-center gap-1.5 text-caption-mono uppercase tracking-wide text-authority">
            <span aria-hidden="true">{pillar.icon}</span>
            {pillar.shortLabel}
          </span>
        )}
        {isComingSoon && (
          <span className="rounded-full bg-mist px-2.5 py-0.5 text-caption-mono uppercase tracking-wide text-ink-soft">
            Coming Soon
          </span>
        )}
      </div>

      <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
        {article.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{article.dek}</p>

      <div className="mt-4 flex items-center justify-between text-caption-mono text-ink-soft/70">
        <span>{isComingSoon ? "In production" : `⏱ ${article.readingTime} min read`}</span>
        {!isComingSoon && <span className="text-authority">Read guide →</span>}
      </div>
    </div>
  );

  if (isComingSoon) {
    return <div aria-disabled="true">{cardBody}</div>;
  }

  return (
    <Link href={article.href} className="block h-full">
      {cardBody}
    </Link>
  );
}

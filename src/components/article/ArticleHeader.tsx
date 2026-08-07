import Breadcrumb, { type Crumb } from "@/components/ui/Breadcrumb";
import ArticleMetaBar from "@/components/ui/ArticleMetaBar";
import LegalDisclaimer from "@/components/ui/LegalDisclaimer";
import type { ArticleMeta } from "@/lib/types";

export default function ArticleHeader({
  article,
  breadcrumb,
}: {
  article: ArticleMeta;
  breadcrumb: Crumb[];
}) {
  return (
    <header className="pb-8 pt-10 md:pt-14">
      <Breadcrumb items={breadcrumb} />
      <h1 className="text-display-h1 mt-4 max-w-3xl text-ink">{article.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{article.dek}</p>
      <div className="mt-6">
        <ArticleMetaBar
          datePublished={article.datePublished}
          dateModified={article.dateModified}
          readingTime={article.readingTime}
          appliesTo={article.appliesTo}
        />
      </div>
      <div className="mt-6 max-w-3xl">
        <LegalDisclaimer />
      </div>
    </header>
  );
}

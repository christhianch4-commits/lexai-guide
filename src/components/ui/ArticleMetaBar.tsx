export default function ArticleMetaBar({
  datePublished,
  dateModified,
  readingTime,
  appliesTo,
}: {
  datePublished: string;
  dateModified: string;
  readingTime: number;
  appliesTo: string;
}) {
  const formatted = new Date(dateModified).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[13.5px] leading-relaxed text-ink-soft">
      <span>
        📅 Updated{" "}
        <time dateTime={dateModified}>{formatted}</time>
      </span>
      <span aria-hidden="true" className="text-mist">
        |
      </span>
      <span>⏱ {readingTime} min read</span>
      <span aria-hidden="true" className="text-mist">
        |
      </span>
      <span>✅ Reviewed by LexAI Legal Team</span>
      <span aria-hidden="true" className="hidden text-mist sm:inline">
        |
      </span>
      <span className="hidden sm:inline">🗺️ Applies to: {appliesTo}</span>
      <meta itemProp="datePublished" content={datePublished} />
    </div>
  );
}

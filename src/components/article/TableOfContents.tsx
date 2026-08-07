export interface TocHeading {
  id: string;
  text: string;
}

export default function TableOfContents({ headings }: { headings: TocHeading[] }) {
  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile: collapsible jump-to-section */}
      <details className="mb-8 rounded-md border border-mist bg-paper-raised p-4 lg:hidden">
        <summary className="cursor-pointer font-body text-sm font-semibold text-ink">
          Jump to Section
        </summary>
        <nav className="mt-3 space-y-2.5 border-t border-mist pt-3">
          {headings.map((h) => (
            <a
              key={h.id}
              href={`#${h.id}`}
              className="block text-sm text-ink-soft transition-colors duration-200 hover:text-authority"
            >
              {h.text}
            </a>
          ))}
        </nav>
      </details>

      {/* Desktop: sticky sidebar */}
      <nav className="sticky top-28 hidden max-h-[calc(100vh-8rem)] overflow-y-auto lg:block">
        <p className="text-caption-mono uppercase tracking-wider text-ink-soft/60">
          On this page
        </p>
        <ul className="mt-3 space-y-2.5 border-l border-mist pl-4">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className="block text-[13.5px] leading-snug text-ink-soft transition-colors duration-200 hover:text-authority"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

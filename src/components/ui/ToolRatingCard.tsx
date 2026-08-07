import type { ToolReview } from "@/lib/types";

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  return (
    <span className="inline-flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      <span className="text-signal" aria-hidden="true">
        {"★".repeat(full)}
        {hasHalf ? "⯨" : ""}
        {"☆".repeat(5 - full - (hasHalf ? 1 : 0))}
      </span>
      <span className="text-caption-mono text-ink-soft">{rating.toFixed(1)}/5</span>
    </span>
  );
}

export default function ToolRatingCard({ tool }: { tool: ToolReview }) {
  return (
    <div className="card-hover flex h-full flex-col rounded-[var(--radius-card)] border border-mist bg-paper-raised p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-authority font-display text-lg font-bold text-paper">
          {tool.logoLetter}
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">{tool.name}</h3>
          <p className="text-caption-mono text-ink-soft">{tool.category}</p>
        </div>
      </div>

      <div className="mt-4">
        <Stars rating={tool.rating} />
      </div>

      <p className="mt-3 text-sm text-ink-soft">
        <span className="font-medium text-ink">Price:</span> {tool.priceLabel}
      </p>
      <p className="mt-1 text-sm text-ink-soft">
        <span className="font-medium text-ink">Best for:</span> {tool.bestFor}
      </p>

      <div className="mt-4 space-y-1.5">
        {tool.pros.slice(0, 3).map((pro, i) => (
          <p key={i} className="flex gap-2 text-[13px] leading-snug text-ink-soft">
            <span className="text-authority">✓</span> {pro}
          </p>
        ))}
        {tool.cons.slice(0, 2).map((con, i) => (
          <p key={i} className="flex gap-2 text-[13px] leading-snug text-ink-soft">
            <span className="text-signal">✗</span> {con}
          </p>
        ))}
      </div>

      <a
        href={tool.href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="mt-5 inline-flex items-center justify-center rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-authority"
      >
        Visit {tool.name} →
      </a>
    </div>
  );
}

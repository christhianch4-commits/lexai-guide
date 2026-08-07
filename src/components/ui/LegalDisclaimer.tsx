export default function LegalDisclaimer({
  text,
  compact = false,
}: {
  text?: string;
  compact?: boolean;
}) {
  const body =
    text ??
    "This article is for informational purposes only and does not constitute legal advice. Laws vary by state and may have changed since publication. For advice specific to your situation, consult a licensed attorney in your state.";

  return (
    <div
      className={`flex items-start gap-3 rounded-md border-l-[3px] border-authority bg-mist ${
        compact ? "p-3" : "p-4"
      }`}
      role="note"
      aria-label="Legal disclaimer"
    >
      <span className="mt-0.5 shrink-0 text-lg leading-none" aria-hidden="true">
        ⚖️
      </span>
      <p className="font-mono text-[14px] leading-relaxed tracking-[0.01em] text-ink-soft">
        <strong className="font-mono font-semibold text-ink">Legal Disclaimer:</strong>{" "}
        {body}
      </p>
    </div>
  );
}

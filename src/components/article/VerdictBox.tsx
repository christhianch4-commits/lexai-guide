export default function VerdictBox({
  title = "The Bottom Line",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-md border border-mist bg-mist/50 p-6 md:p-8">
      <div className="signature-line">
        <h2 className="font-display text-xl font-semibold text-ink">{title}</h2>
      </div>
      <div className="mt-3 text-[15px] leading-relaxed text-ink-soft [&_a]:text-authority [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-ink [&_strong]:font-semibold">
        {children}
      </div>
    </div>
  );
}

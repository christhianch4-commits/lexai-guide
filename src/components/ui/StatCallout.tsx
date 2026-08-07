export default function StatCallout({
  icon,
  value,
  label,
}: {
  icon: string;
  value: string;
  label: string;
}) {
  return (
    <div className="signature-line">
      <p className="font-display text-2xl font-semibold text-ink md:text-3xl">
        <span className="mr-1.5" aria-hidden="true">
          {icon}
        </span>
        {value}
      </p>
      <p className="mt-0.5 text-sm text-ink-soft">{label}</p>
    </div>
  );
}

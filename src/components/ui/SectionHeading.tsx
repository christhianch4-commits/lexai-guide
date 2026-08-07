export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <p className="text-caption-mono mb-3 uppercase tracking-wider text-signal">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-display-h2 ${isDark ? "text-paper" : "text-ink"}`}>{title}</h2>
      {description && (
        <p
          className={`mt-3 max-w-2xl text-[17px] leading-relaxed ${
            isDark ? "text-paper/65" : "text-ink-soft"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

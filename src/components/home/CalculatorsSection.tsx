import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { getArticlesByPillar } from "@/lib/articles";

const PREVIEWS: Record<string, { result: string; caption: string; tone: "ok" | "warn" }> = {
  "small-claims-limit": { result: "$12,500", caption: "California individual limit", tone: "ok" },
  "overtime-pay": { result: "$340.00", caption: "Owed for 8 hrs overtime at $17/hr", tone: "ok" },
  "security-deposit-checker": { result: "Review needed", caption: "Deduction exceeds normal wear", tone: "warn" },
  "statute-of-limitations": { result: "3 yrs, 2 mo left", caption: "Written contract, filed 2026", tone: "ok" },
};

export default function CalculatorsSection() {
  const calculators = getArticlesByPillar("calculators");

  return (
    <section className="container-page py-16 md:py-24">
      <SectionHeading
        eyebrow="Instant answers"
        title="Free legal calculators"
        description="No signup. Enter a few numbers, get a plain-English answer."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {calculators.map((calc) => {
          const preview = PREVIEWS[calc.slug];
          const isComingSoon = calc.status === "coming-soon";
          const card = (
            <div
              className={`card-hover flex h-full flex-col rounded-[var(--radius-card)] border border-mist p-6 ${
                isComingSoon ? "bg-mist/30" : "bg-paper-raised"
              }`}
            >
              <h3 className="font-display text-base font-semibold leading-snug text-ink">
                {calc.title.replace(" Calculator", "").replace(" Checker", "")}
              </h3>
              {preview && (
                <div className="mt-4 rounded-md border border-mist bg-paper p-3">
                  <p
                    className={`font-mono text-lg font-medium ${
                      preview.tone === "ok" ? "text-authority" : "text-signal"
                    }`}
                  >
                    {preview.result}
                  </p>
                  <p className="mt-0.5 text-caption-mono text-ink-soft/70">{preview.caption}</p>
                </div>
              )}
              <span className="mt-4 text-sm font-medium text-authority">
                {isComingSoon ? "Coming soon" : "Try it →"}
              </span>
            </div>
          );
          return isComingSoon ? (
            <div key={calc.slug} aria-disabled="true">
              {card}
            </div>
          ) : (
            <Link key={calc.slug} href={calc.href} className="block h-full">
              {card}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

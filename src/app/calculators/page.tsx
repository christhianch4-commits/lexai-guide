import type { Metadata } from "next";
import Link from "next/link";
import PillarHero from "@/components/pillar/PillarHero";
import SectionHeading from "@/components/ui/SectionHeading";
import AdUnit from "@/components/ui/AdUnit";
import { getArticlesByPillar } from "@/lib/articles";

export const metadata: Metadata = {
  title: { absolute: "Free Legal Calculators: Limits, Deadlines & Money Owed | LexAI Guide" },
  description:
    "Free legal calculators — small claims limits, overtime pay, security deposit deductions, and statute of limitations deadlines by state.",
  alternates: { canonical: "/calculators/" },
};

export default function Page() {
  const calculators = getArticlesByPillar("calculators");

  return (
    <>
      <PillarHero
        icon="🧮"
        eyebrow="Calculators"
        title="Instant Answers, No Signup"
        description="Enter a few numbers, get a plain-English answer — and know immediately whether you're looking at a quick fix or a real dispute."
      />

      <div className="container-page pt-14">
        <AdUnit position="hero" />
      </div>

      <section className="container-page pb-14 md:pb-20">
        <SectionHeading eyebrow={`${calculators.length} tools`} title="All calculators" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {calculators.map((calc) => {
            const isComingSoon = calc.status === "coming-soon";
            const card = (
              <div
                className={`card-hover flex h-full flex-col rounded-[var(--radius-card)] border border-mist p-7 ${
                  isComingSoon ? "bg-mist/30" : "bg-paper-raised"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-authority-soft text-2xl">
                    🧮
                  </span>
                  {isComingSoon && (
                    <span className="rounded-full bg-mist px-2.5 py-0.5 text-caption-mono uppercase tracking-wide text-ink-soft">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink">
                  {calc.title}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{calc.dek}</p>
                <span className="mt-4 text-sm font-medium text-authority">
                  {isComingSoon ? "In production" : "Try it now →"}
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

      <div className="container-page flex justify-center py-4">
        <AdUnit position="above-footer" />
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PillarHero from "@/components/pillar/PillarHero";
import SectionHeading from "@/components/ui/SectionHeading";
import AdUnit from "@/components/ui/AdUnit";
import LegalDisclaimer from "@/components/ui/LegalDisclaimer";
import { getPillarArticlesForDisplay } from "@/lib/articles";

export const metadata: Metadata = {
  title: { absolute: "Free Legal Templates: Demand Letters, NDAs & More | LexAI Guide" },
  description:
    "Free, customizable legal document templates — demand letters, NDAs, contractor agreements, and more. Preview, fill in, and download.",
  alternates: { canonical: "/legal-templates/" },
};

export default function Page() {
  const { articles: templates, hiddenCount } = getPillarArticlesForDisplay("legal-templates");

  return (
    <>
      <PillarHero
        icon="📄"
        eyebrow="Legal Templates"
        title="Free Templates, Ready to Customize"
        description="Fill in the blanks, preview the document, and download it ready to send. For anything more complex than these cover, pair it with an AI contract tool or a licensed attorney."
      />

      <div className="container-page pt-14">
        <AdUnit position="hero" />
      </div>

      <section className="container-page pb-14 md:pb-20">
        <SectionHeading eyebrow="Free & customizable" title="All templates" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((tpl) => {
            const isComingSoon = tpl.status === "coming-soon";
            const card = (
              <div
                className={`card-hover flex h-full flex-col rounded-[var(--radius-card)] border border-mist p-6 ${
                  isComingSoon ? "bg-mist/30" : "bg-paper-raised"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-mist text-xl">
                    📄
                  </span>
                  {isComingSoon && (
                    <span className="rounded-full bg-mist px-2.5 py-0.5 text-caption-mono uppercase tracking-wide text-ink-soft">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  {tpl.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{tpl.dek}</p>
                <span className="mt-4 text-sm font-medium text-authority">
                  {isComingSoon ? "In production" : "Preview & download →"}
                </span>
              </div>
            );
            return isComingSoon ? (
              <div key={tpl.slug} aria-disabled="true">
                {card}
              </div>
            ) : (
              <Link key={tpl.slug} href={tpl.href} className="block h-full">
                {card}
              </Link>
            );
          })}
        </div>
        {hiddenCount > 0 && (
          <p className="mt-6 text-sm text-ink-soft">
            +{hiddenCount} more template{hiddenCount === 1 ? "" : "s"} in progress —{" "}
            <a href="mailto:hello@lexaiguide.com" className="link-underline text-authority">
              tell us what to prioritize
            </a>
            .
          </p>
        )}

        <div className="mt-10 max-w-2xl">
          <LegalDisclaimer text="These templates cover common, straightforward situations. For anything with significant money, ongoing obligations, or a counterparty who already has a lawyer, have the final version reviewed by a licensed attorney before you sign or send it." />
        </div>
      </section>

      <div className="container-page flex justify-center py-4">
        <AdUnit position="above-footer" />
      </div>
    </>
  );
}

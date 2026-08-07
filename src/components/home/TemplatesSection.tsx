import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { getPillarArticlesForDisplay } from "@/lib/articles";

export default function TemplatesSection() {
  const { articles: templates } = getPillarArticlesForDisplay("legal-templates", 1);

  return (
    <section className="bg-mist/40 py-16 md:py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Free & downloadable" title="Legal templates" />
          <Link href="/legal-templates/" className="link-underline shrink-0 text-sm font-medium text-authority">
            See all templates →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((tpl) => {
            const isComingSoon = tpl.status === "coming-soon";
            const card = (
              <div
                className={`card-hover flex h-full flex-col rounded-[var(--radius-card)] border border-mist p-6 ${
                  isComingSoon ? "bg-mist/50" : "bg-paper-raised"
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-mist text-lg">
                  📄
                </span>
                <h3 className="mt-4 font-display text-base font-semibold leading-snug text-ink">
                  {tpl.title.replace("Free ", "").replace(" (Free, 2026)", "").split(":")[0].split(" Template")[0]}
                </h3>
                <span className="mt-auto pt-4 text-sm font-medium text-authority">
                  {isComingSoon ? "Coming soon" : "Download free →"}
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
          <Link
            href="/legal-templates/"
            className="card-hover flex h-full flex-col items-start justify-center rounded-[var(--radius-card)] border border-dashed border-mist p-6 text-authority"
          >
            <span className="font-display text-base font-semibold">Browse all templates</span>
            <span className="mt-1 text-sm text-ink-soft">Including tools &amp; calculators →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PillarHero from "@/components/pillar/PillarHero";
import SectionHeading from "@/components/ui/SectionHeading";
import StateWidget from "@/components/ui/StateWidget";
import USStateMap from "@/components/map/USStateMap";
import AdUnit from "@/components/ui/AdUnit";
import { STATES, PRIORITY_STATES } from "@/lib/states";

export const metadata: Metadata = {
  title: { absolute: "Legal Guides by State: All 50 States | LexAI Guide" },
  description:
    "Small claims limits, security deposit deadlines, and statutes of limitations for all 50 states. Click your state for the full guide.",
  alternates: { canonical: "/states/" },
};

export default function Page() {
  const otherStates = STATES.filter((s) => !s.priority).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <>
      <PillarHero
        icon="🗺️"
        eyebrow="By State"
        title="Legal Guides for All 50 States"
        description="Small claims limits, security deposit deadlines, and filing windows change at every state line. Find yours below."
      />

      <section className="container-page py-14 md:py-20">
        <USStateMap />
      </section>

      <div className="container-page">
        <AdUnit position="hero" />
      </div>

      <section className="container-page py-14 md:py-20">
        <SectionHeading eyebrow="Most requested" title="Priority state guides" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRIORITY_STATES.map((state) => (
            <StateWidget key={state.slug} state={state} />
          ))}
        </div>
      </section>

      <section className="bg-mist/40 py-14 md:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="All states" title="Every state guide" />
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
            {otherStates.map((state) => (
              <Link
                key={state.slug}
                href={`/${state.slug}-legal-guide/`}
                className="link-underline text-[15px] text-ink"
              >
                {state.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container-page flex justify-center py-4">
        <AdUnit position="above-footer" />
      </div>
    </>
  );
}

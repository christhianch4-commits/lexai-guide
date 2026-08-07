import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import USStateMap from "@/components/map/USStateMap";
import { PRIORITY_STATES } from "@/lib/states";

export default function StateMapSection() {
  return (
    <section className="container-page py-16 md:py-24">
      <SectionHeading
        eyebrow="Rules change at the border"
        title="Find laws for your state"
        description="Small claims limits, security deposit deadlines, and filing windows all vary. Click a state — or use the list on mobile — to get the exact numbers."
      />
      <div className="mt-10">
        <USStateMap />
      </div>
      {/* Hidden on mobile: USStateMap's own fallback already surfaces these
          same priority states as pills, right above this section. */}
      <div className="mt-10 hidden border-t border-mist pt-8 md:block">
        <p className="text-caption-mono mb-3 uppercase tracking-wider text-ink-soft/60">
          Most searched states
        </p>
        <div className="flex flex-wrap gap-2">
          {PRIORITY_STATES.map((state) => (
            <Link
              key={state.slug}
              href={`/${state.slug}-legal-guide/`}
              className="link-underline text-sm font-medium text-ink"
            >
              {state.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

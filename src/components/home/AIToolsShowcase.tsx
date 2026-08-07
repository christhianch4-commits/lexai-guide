import Link from "next/link";
import ToolRatingCard from "@/components/ui/ToolRatingCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { TOOLS } from "@/lib/tools";

export default function AIToolsShowcase() {
  const featured = TOOLS.slice(0, 3);

  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Tested, not sponsored"
            title="AI legal tools, honestly reviewed"
          />
          <Link
            href="/ai-legal-tools/"
            className="link-underline shrink-0 text-sm font-medium text-paper"
          >
            See all AI tools →
          </Link>
        </div>

        <div className="scroll-x-mask -mx-[var(--container-pad)] mt-10 flex gap-5 overflow-x-auto px-[var(--container-pad)] lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
          {featured.map((tool) => (
            <div key={tool.slug} className="w-[280px] shrink-0 lg:w-auto">
              <ToolRatingCard tool={tool} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

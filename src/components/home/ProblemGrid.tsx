import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const PROBLEMS = [
  {
    id: "problem-landlord",
    icon: "🏠",
    title: "Landlord Issues",
    description: "Security deposits, repairs, illegal eviction notices.",
    href: "/self-help-guides/landlord-keeping-security-deposit/",
  },
  {
    id: "problem-workplace",
    icon: "💼",
    title: "Workplace Problems",
    description: "Unpaid overtime, wrongful termination, discrimination.",
    href: "/know-your-rights/employee-rights-at-work/",
  },
  {
    id: "problem-debt",
    icon: "💳",
    title: "Debt & Collections",
    description: "Sued for debt, harassed by collectors, credit disputes.",
    href: "/self-help-guides/what-to-do-if-sued-for-debt/",
  },
  {
    id: "problem-document",
    icon: "📄",
    title: "Need a Document",
    description: "Demand letters, NDAs, contractor agreements — free.",
    href: "/legal-templates/",
  },
  {
    id: "problem-ai-tools",
    icon: "🤖",
    title: "Compare AI Tools",
    description: "LegalZoom, Rocket Lawyer, DoNotPay — tested honestly.",
    href: "/ai-legal-tools/",
  },
  {
    id: "problem-states",
    icon: "🗺️",
    title: "Find State Laws",
    description: "Small claims limits, deadlines, and protections by state.",
    href: "/states/",
  },
];

export default function ProblemGrid() {
  return (
    <section className="container-page py-16 md:py-24">
      <SectionHeading
        eyebrow="Start here"
        title="What legal problem are you facing?"
        description="Pick your situation and we'll take you straight to the guide that answers it."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((problem) => (
          <Link
            key={problem.id}
            id={problem.id}
            href={problem.href}
            className="card-hover group relative scroll-mt-28 overflow-hidden rounded-[var(--radius-card)] border border-mist bg-paper-raised p-7"
          >
            <span
              className="absolute inset-y-0 left-0 w-[3px] scale-y-0 bg-authority transition-transform duration-300 group-hover:scale-y-100"
              aria-hidden="true"
            />
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-authority-soft text-2xl transition-colors duration-200 group-hover:bg-authority group-hover:text-paper">
                {problem.icon}
              </span>
              <h3 className="font-display text-xl font-semibold leading-snug text-ink">
                {problem.title}
              </h3>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              {problem.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-authority">
              Explore
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

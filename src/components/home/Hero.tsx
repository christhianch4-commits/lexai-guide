import Link from "next/link";

const SOLVER_OPTIONS = [
  { icon: "🏠", label: "Landlord Issues", anchor: "#problem-landlord" },
  { icon: "💼", label: "Workplace Problems", anchor: "#problem-workplace" },
  { icon: "💳", label: "Debt & Collections", anchor: "#problem-debt" },
  { icon: "📄", label: "Need a Document", anchor: "#problem-document" },
];

const STATS = [
  { icon: "📋", value: "140+", label: "Guides" },
  { icon: "🗺️", value: "50", label: "States" },
  { icon: "🤖", value: "6", label: "AI Tools Reviewed" },
  { icon: "⭐", value: "Free", label: "Templates" },
];

export default function Hero() {
  return (
    <section className="container-page pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-8">
        {/* Left: copy */}
        <div className="animate-fade-slide-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-authority/25 bg-authority-soft px-3.5 py-1.5 text-caption-mono text-authority-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Updated for 2026 Laws
          </span>

          <h1 className="text-hero mt-6 text-ink">
            Legal problems
            <br />
            are expensive.
            <br />
            Confusion is
            <br />
            optional.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft md:text-xl">
            Plain-English guides, AI tool reviews, and free legal templates
            for people who can&rsquo;t afford a lawyer — or don&rsquo;t need
            one.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/self-help-guides/"
              className="inline-flex items-center justify-center rounded-md bg-authority px-6 py-3.5 font-body text-[15px] font-medium text-paper transition-colors duration-200 hover:bg-authority-dark"
            >
              Find Your Legal Guide →
            </Link>
            <Link
              href="/ai-legal-tools/"
              className="inline-flex items-center justify-center rounded-md border border-mist px-6 py-3.5 font-body text-[15px] font-medium text-ink transition-colors duration-200 hover:border-authority hover:text-authority"
            >
              Browse AI Tools
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-xl font-semibold text-ink">
                  <span aria-hidden="true" className="mr-1">
                    {stat.icon}
                  </span>
                  {stat.value}
                </dd>
                <dd className="text-sm text-ink-soft">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: interactive problem-solver widget */}
        <div
          className="animate-fade-slide-up relative"
          style={{ animationDelay: "120ms" }}
        >
          <div
            className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-authority/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-signal/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative rounded-lg border border-mist bg-paper-raised p-2 shadow-[0_24px_60px_-24px_rgba(15,25,35,0.25)]">
            <div className="border-b border-mist px-5 py-4">
              <p className="font-display text-lg font-semibold text-ink">
                What&rsquo;s your situation?
              </p>
              <p className="mt-0.5 text-sm text-ink-soft">
                Pick one — we&rsquo;ll point you to the right guide.
              </p>
            </div>
            <div className="p-2">
              {SOLVER_OPTIONS.map((option) => (
                <a
                  key={option.label}
                  href={option.anchor}
                  className="group flex items-center justify-between rounded-md px-3.5 py-3.5 transition-colors duration-200 hover:bg-authority-soft"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-mist text-base transition-colors duration-200 group-hover:bg-paper-raised">
                      {option.icon}
                    </span>
                    <span className="font-body text-[15px] font-medium text-ink">
                      {option.label}
                    </span>
                  </span>
                  <span className="text-ink-soft transition-transform duration-200 group-hover:translate-x-1 group-hover:text-authority">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

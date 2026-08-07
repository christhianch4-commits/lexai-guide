import Breadcrumb from "@/components/ui/Breadcrumb";

export default function PillarHero({
  icon,
  eyebrow,
  title,
  description,
}: {
  icon: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="border-b border-mist bg-paper-raised">
      <div className="container-page py-12 md:py-16">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: eyebrow }]} />
        <div className="mt-4 flex items-start gap-4">
          <span
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-authority-soft text-2xl md:h-16 md:w-16 md:text-3xl"
            aria-hidden="true"
          >
            {icon}
          </span>
          <div>
            <h1 className="text-display-h1 text-ink">{title}</h1>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {description}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

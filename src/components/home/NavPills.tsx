import Link from "next/link";
import { PILLARS } from "@/lib/pillars";

export default function NavPills() {
  return (
    <div className="border-y border-mist bg-paper-raised">
      <div className="container-page">
        <div className="scroll-x-mask flex gap-2 overflow-x-auto py-4">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.slug}
              href={pillar.href}
              className="flex shrink-0 items-center gap-2 rounded-full border border-mist px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:border-authority hover:bg-authority-soft hover:text-authority-dark"
            >
              <span aria-hidden="true">{pillar.icon}</span>
              {pillar.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

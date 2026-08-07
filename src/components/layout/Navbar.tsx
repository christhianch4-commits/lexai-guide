"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PILLARS } from "@/lib/pillars";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile overlay on route change. Adjusting state during render
  // (rather than in an effect) avoids an extra post-navigation render pass.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = PILLARS.slice(0, 5);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-authority/25 bg-paper/92 backdrop-blur-md"
          : "border-transparent bg-paper"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-baseline gap-1 shrink-0">
          <span className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
            LexAI
          </span>
          <span className="font-body text-lg font-light text-ink-soft md:text-xl">
            Guide
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((pillar) => (
            <Link
              key={pillar.slug}
              href={pillar.href}
              className="link-underline font-body text-[15px] font-medium text-ink"
            >
              {pillar.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/self-help-guides/"
            className="hidden md:inline-flex items-center rounded-md bg-authority px-5 py-2.5 font-body text-sm font-medium text-paper transition-colors duration-200 hover:bg-authority-dark"
          >
            Get Free Guide →
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-md text-ink lg:hidden"
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-6 bg-ink transition-transform duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[1.5px] w-6 bg-ink transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[1.5px] w-6 bg-ink transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-paper transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="container-page flex h-full flex-col gap-1 pt-6">
          {PILLARS.map((pillar, i) => (
            <Link
              key={pillar.slug}
              href={pillar.href}
              className={`flex items-center gap-3 border-b border-mist py-4 font-display text-2xl font-semibold text-ink transition-transform duration-300 ${
                menuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
            >
              <span className="text-xl">{pillar.icon}</span>
              {pillar.label}
            </Link>
          ))}
          <Link
            href="/self-help-guides/"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-authority px-5 py-4 font-body text-base font-medium text-paper"
          >
            Get Free Guide →
          </Link>
        </nav>
      </div>
    </header>
  );
}

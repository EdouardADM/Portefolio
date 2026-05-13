"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/projects/", label: "Projets" },
  { href: "/cv/", label: "CV" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-bg">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        {/* Logo / wordmark */}
        <Link
          href="/"
          className="font-display text-xl font-black tracking-tight hover:text-accent transition-colors duration-100"
          style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
        >
          EA
        </Link>

        {/* Nav */}
        <nav>
          <ul className="flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || pathname === href.replace(/\/$/, "");
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={[
                      "px-3 py-1.5 text-sm font-mono font-bold uppercase tracking-widest transition-all duration-100",
                      isActive
                        ? "bg-ink text-bg"
                        : "text-ink hover:bg-ink hover:text-bg",
                    ].join(" ")}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

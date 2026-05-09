import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-ink bg-ink text-bg mt-24">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-display text-lg font-black" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
            Edouard Adam
          </p>
          <p className="text-xs font-mono text-bg/60 mt-1">
            Etudiant à l'EPHEC · Belgique · {year}
          </p>
        </div>

        <nav>
          <ul className="flex items-center gap-4">
            {[
              { href: "https://github.com/EdouardADM", label: "GitHub" },
              { href: "https://linkedin.com/in/édouard-adam", label: "LinkedIn" },
              { href: "mailto:edouardadam44@gmail.com", label: "Email" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-xs font-mono font-bold uppercase tracking-widest text-bg/70 hover:text-accent transition-colors duration-100"
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

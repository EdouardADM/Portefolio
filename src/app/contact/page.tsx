import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacter Edouard Adam",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted mb-4">
        Contact
      </p>
      <h1
        className="font-display text-5xl sm:text-7xl font-black leading-tight mb-6"
        style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
      >
        Me
        <br />
        contacter.
      </h1>
      <p className="font-mono text-base text-muted mb-16 max-w-xl">
        Disponible pour de nouveaux projets après mes études. N'hésitez pas à me contacter via l'un de ces liens.
      </p>

      <div className="flex flex-col gap-4 max-w-2xl">
        <Link
          href="mailto:edouardadam44@gmail.com"
          className="group flex items-center gap-6 border-2 border-ink p-6 bg-surface hover:bg-ink hover:text-bg transition-colors"
        >
          <div className="flex-1 min-w-0">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-muted group-hover:text-bg/50 mb-0.5">
              Email
            </p>
            <p className="font-mono text-sm font-bold text-ink group-hover:text-bg">
              edouardadam44@gmail.com
            </p>
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent group-hover:text-bg opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
            Ouvrir →
          </span>
        </Link>

        <Link
          href="https://linkedin.com/in/édouard-adam"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-6 border-2 border-ink p-6 bg-surface hover:bg-ink hover:text-bg transition-colors"
        >
          <div className="flex-1 min-w-0">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-muted group-hover:text-bg/50 mb-0.5">
              LinkedIn
            </p>
            <p className="font-mono text-sm font-bold text-ink group-hover:text-bg">
              édouard-adam
            </p>
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent group-hover:text-bg opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
            Ouvrir →
          </span>
        </Link>
      </div>
    </section>
  );
}

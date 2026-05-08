import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "Parcours d'Edouard Adam — RTBF, EPHEC, sim racing.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted mb-4">
        À propos
      </p>
      <h1
        className="font-display text-5xl sm:text-7xl font-black leading-tight mb-12"
        style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
      >
        Mon
        <br />
        parcours.
      </h1>
      <p className="font-mono text-base text-muted">
        Page en construction. Reviens bientôt.
      </p>
    </section>
  );
}

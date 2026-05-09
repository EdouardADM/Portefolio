import type { Metadata } from "next";

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
        className="font-display text-5xl sm:text-7xl font-black leading-tight mb-12"
        style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
      >
        Me
        <br />
        contacter.
      </h1>
      <p className="font-mono text-base text-muted">
        Page en construction. En attendant :{" "}
        <a
          href="mailto:edouardadam44@gmail.com"
          className="text-accent hover:underline underline-offset-4"
        >
          edouardadam44@gmail.com
        </a>
      </p>
    </section>
  );
}

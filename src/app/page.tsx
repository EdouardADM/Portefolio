import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ExternalLink } from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────────────────── */

const featuredProjects = [
  {
    slug: "criteat",
    title: "CritEat",
    subtitle: "Application mobile de critiques de restaurants",
    tags: ["React Native", "Expo", "Supabase", "PostGIS", "MapLibre"],
    description:
      "TFE — Système de critiques géolocalisées avec photos obligatoires et mécanisme anti-fake-reviews par Karma. Backend Postgres avancé, géofencing, cartographie interactive.",
    status: "TFE 2025",
    accent: true,
  },
  {
    slug: "media-platform",
    title: "Plateforme Média",
    subtitle: "Microservices backend pour une plateforme media publique belge",
    tags: ["Laravel", "Kubernetes", "OpenAPI", "PostgreSQL"],
    description:
      "Architecture microservices en production. Pagination cursor performante sur large dataset, packages partagés entre services, documentation OpenAPI.",
    status: "En production",
    accent: false,
  },
  {
    slug: "coming-soon",
    title: "???",
    subtitle: "Prochain projet perso",
    tags: ["À venir"],
    description:
      "Un projet en cours d'idéation. Quelque chose qui va relier mes intérêts pour la performance, les données et le monde réel.",
    status: "WIP",
    accent: false,
  },
];

const stackCategories = [
  {
    label: "Backend",
    items: ["PHP / Laravel", "Node.js", "PostgreSQL", "PostGIS"],
  },
  {
    label: "Frontend",
    items: ["React", "React Native", "Next.js", "TypeScript"],
  },
  {
    label: "Infra",
    items: ["Docker", "Kubernetes", "Helm", "Supabase"],
  },
  {
    label: "Outils",
    items: ["Git", "OpenAPI", "Cursor", "Claude Code"],
  },
];

/* ─── PAGE ──────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-muted mb-6">
            Développeur Backend · Étudiant EPHEC · Belgique
          </p>

          {/* Main heading */}
          <h1
            className="font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Je construis des{" "}
            <span className="text-accent relative inline-block">
              outils
              <span
                className="absolute bottom-1 left-0 w-full h-[4px] bg-accent"
                aria-hidden="true"
              />
            </span>{" "}
            qui marchent
            <br />
            pour de vrai.
          </h1>

          {/* Sub */}
          <p className="font-mono text-base sm:text-lg text-muted max-w-2xl leading-relaxed mb-10">
            Dev backend Laravel chez une plateforme média publique belge.
            En train de finir mon TFE à l&apos;EPHEC : une app mobile de critiques
            de restaurants avec un système anti-fake-reviews.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href="/projects/">
              <Button size="lg">
                Voir mes projets
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/contact/">
              <Button variant="secondary" size="lg">
                Me contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="border-t-2 border-ink bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            {/* Label */}
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted mb-2">
                01 / À propos
              </p>
              <h2
                className="font-display text-4xl sm:text-5xl font-black leading-tight"
                style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
              >
                Qui
                <br />
                suis-je ?
              </h2>
            </div>

            {/* Content */}
            <div className="space-y-6 font-mono text-base leading-relaxed">
              <p>
                Je m&apos;appelle <strong>Edouard Adam</strong>, j&apos;ai 22 ans et je suis basé en Belgique.
                En journée, je travaille chez une{" "}
                <strong>plateforme media publique belge</strong> sur une
                architecture microservices Laravel en production — Kubernetes,
                OpenAPI, packages partagés.
              </p>
              <p>
                En parallèle, je termine mon bachelier en Informatique à
                l&apos;<strong>EPHEC</strong> avec un TFE sur{" "}
                <strong>CritEat</strong> : une app mobile qui repense les
                critiques de restaurants via un système de Karma et des photos
                obligatoires pour lutter contre les faux avis.
              </p>
              <p>
                En dehors du code, je fais du sim racing sur{" "}
                <em>Assetto Corsa Competizione</em> avec un Tobii Eye Tracker.
                La donnée, la performance, les systèmes qui fonctionnent sous
                pression — c&apos;est ce qui m&apos;intéresse partout.
              </p>

              <div className="pt-2">
                <Link
                  href="/about/"
                  className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm text-accent hover:underline underline-offset-4"
                >
                  En savoir plus <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="border-t-2 border-ink">
        <div className="mx-auto max-w-6xl px-6 py-20">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted mb-2">
                02 / Projets phares
              </p>
              <h2
                className="font-display text-4xl sm:text-5xl font-black leading-tight"
                style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
              >
                Ce que
                <br />
                j&apos;ai construit.
              </h2>
            </div>
            <Link
              href="/projects/"
              className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-muted hover:text-ink transition-colors shrink-0"
            >
              Tous les projets <ArrowRight size={14} />
            </Link>
          </div>

          {/* Cards grid — asymétrique */}
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr_1fr]">
            {featuredProjects.map((project, i) => (
              <Card key={project.slug} accent={project.accent} className="flex flex-col gap-4 bg-surface">
                {/* Status badge */}
                <div className="flex items-center justify-between">
                  <Badge variant={project.accent ? "accent" : "outline"}>
                    {project.status}
                  </Badge>
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3
                    className="font-display text-2xl sm:text-3xl font-black leading-tight mb-1"
                    style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                  >
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-muted">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="font-mono text-sm leading-relaxed text-ink flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="default" className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Link */}
                {project.slug !== "coming-soon" && (
                  <Link
                    href={`/projects/${project.slug}/`}
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-accent hover:underline underline-offset-4 mt-2"
                  >
                    Voir le case study <ExternalLink size={12} />
                  </Link>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="border-t-2 border-ink bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted mb-2">
              03 / Stack & compétences
            </p>
            <h2
              className="font-display text-4xl sm:text-5xl font-black leading-tight"
              style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
            >
              Ce avec quoi
              <br />
              je travaille.
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stackCategories.map((cat) => (
              <div
                key={cat.label}
                className="border-2 border-ink p-5 bg-bg"
              >
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent mb-4">
                  {cat.label}
                </p>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="font-mono text-sm text-ink">
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="border-t-2 border-ink bg-ink text-bg">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-center">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-bg/50 mb-4">
                04 / Contact
              </p>
              <h2
                className="font-display text-4xl sm:text-6xl font-black leading-tight mb-6"
                style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
              >
                Travaillons
                <br />
                ensemble.
              </h2>
              <p className="font-mono text-base text-bg/70 max-w-lg leading-relaxed">
                Disponible pour un CDI ou freelance après mes études. Je lis tous mes emails.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link href="mailto:contact@adamedouard.be">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                >
                  contact@adamedouard.be
                </Button>
              </Link>
              <div className="flex gap-3">
                <Link
                  href="https://github.com/adamedouard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="secondary" size="md" className="w-full justify-center bg-bg/10 border-bg/30 text-bg hover:bg-bg hover:text-ink">
                    GitHub
                  </Button>
                </Link>
                <Link
                  href="https://linkedin.com/in/adamedouard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="secondary" size="md" className="w-full justify-center bg-bg/10 border-bg/30 text-bg hover:bg-bg hover:text-ink">
                    LinkedIn
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

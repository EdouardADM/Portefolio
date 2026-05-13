import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { HeroGreeting } from "@/components/HeroGreeting";
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
    heuresValorisables: 0,
    heuresReelles: 400,
    accent: true,
  },
  {
    slug: "ataya-partners",
    title: "Ataya & Partners",
    subtitle: "Stage en entreprise",
    description:
      "Stage chez Ataya & Partners. Première immersion professionnelle dans un contexte réel, développement de fonctionnalités et découverte des pratiques en équipe.",
    tags: ["Stage", "Professionnel"],
    status: "Terminé",
    domaine: "Stage",
    heuresValorisables: 10,
    heuresReelles: 350,
  },
  {
    slug: "build-pc",
    title: "Build PC",
    subtitle: "Montage de différents pc perso & pour la famille",
    description:
      "Montage et optimisation d'un PC taillé pour le développement et le sim racing. Choix des composants, overclocking, gestion thermique — et Assetto Corsa Competizione à fond.",
    tags: ["Hardware", "Perso", "Sim Racing"],
    status: "Terminé",
    domaine: "Perso",
    heuresValorisables: 10,
    heuresReelles: 20,
  }
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
    items: ["Docker", "Kubernetes", "Supabase"],
  },
  {
    label: "Outils",
    items: ["Git", "OpenAPI", "Jira", "Postman"],
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
            Développeur Full-Stack · Étudiant EPHEC · Belgique
          </p>

          {/* Main heading — dynamique selon l'heure */}
          <HeroGreeting />

          {/* Sub — accroche */}
          <p className="font-mono text-base sm:text-lg text-muted max-w-2xl leading-relaxed mb-10">
            Bienvenue, je m'appelle <strong className="text-ink">Edouard Adam</strong>, je suis étudiant en informatique à l'EPHEC. 
            Ce portefolio a pour but de me présenter et de montrer mes différentes compétences, activitées et projets valorisable que j'ai réalisé tout au long de mes études. {" "}
            <span className="text-ink">Parcourez ce portfolio : projets, compétences et parcours pour en apprendre plus sur moi ^^.</span>
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
              </p>
              <p>
                Je termine mon bachelier en Informatique à
                l&apos;<strong>EPHEC</strong> et réalise mon TFE sur{" "}
                <strong>CritEat</strong> : une app mobile qui repense les
                critiques de restaurants via un système de Karma et des photos
                obligatoires pour lutter contre les faux avis.
              </p>
              <p>
                En dehors du code je fais différentes activitées comme du piano, de l'escalade, du sim racing et de temps en temps je pose pour différentes marques de luxe.
              </p>

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
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center shrink-0">
              <Link
                href="/projects/#recapitulatif"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-accent hover:underline underline-offset-4"
              >
                Récap des heures <ArrowRight size={12} />
              </Link>
              <Link
                href="/projects/"
                className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-muted hover:text-ink transition-colors"
              >
                Tous les projets <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Cards grid — asymétrique */}
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr_1fr]">
            {featuredProjects.map((project, i) => (
              <Card key={project.slug} accent={project.accent} className="flex flex-col gap-4 bg-surface">
                {/* Hours display */}
                <div className="flex items-center justify-between">
                  {project.heuresValorisables > 0 ? (
                    <div className="flex flex-col leading-tight">
                      <span className={`font-mono text-sm font-bold ${project.accent ? "text-accent" : "text-ink"}`}>
                        {project.heuresValorisables}h valorisables
                      </span>
                      <span className="font-mono text-xs text-muted">
                        {project.heuresReelles}h réelles
                      </span>
                    </div>
                  ) : (
                    <span className="font-mono text-xs text-muted italic">En cours…</span>
                  )}
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
                    Voir plus <ExternalLink size={12} />
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
                Disponible pour de nouveaux projets après mes études. Je lis tous mes emails.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link href="mailto:edouardadam44@gmail.com">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                >
                  edouardadam44@gmail.com
                </Button>
              </Link>
              <div className="flex gap-3">
                <Link
                  href="https://github.com/EdouardADM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="secondary" size="md" className="w-full justify-center bg-bg/10 border-bg/30 text-bg hover:bg-bg hover:text-ink">
                    GitHub
                  </Button>
                </Link>
                <Link
                  href="https://linkedin.com/in/édouard-adam"
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

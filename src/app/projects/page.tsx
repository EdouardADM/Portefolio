import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Projets",
  description: "Tous les projets d'Edouard Adam — code, expériences, aventures.",
};

/* ─── DATA ─────────────────────────────────────────────────────────── */

type ProjectStatus = "En production" | "TFE 2025" | "Terminé" | "En cours" | "Perso";

interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  accent?: boolean;
  hasPage?: boolean;
}

const projects: Project[] = [
  {
    slug: "criteat",
    title: "CritEat",
    subtitle: "App mobile de critiques de restaurants",
    description:
      "TFE — Système de critiques géolocalisées avec photos obligatoires et mécanisme anti-fake-reviews par Karma. React Native, Expo, Supabase, PostGIS, MapLibre.",
    tags: ["React Native", "Expo", "Supabase", "PostGIS", "TypeScript"],
    status: "TFE 2025",
    accent: true,
    hasPage: true,
  },
  {
    slug: "media-platform",
    title: "Plateforme Média",
    subtitle: "Microservices backend pour une plateforme media publique belge",
    description:
      "Architecture microservices Laravel en production. Pagination cursor sur large dataset, packages partagés entre services, documentation OpenAPI complète.",
    tags: ["Laravel", "Kubernetes", "OpenAPI", "PostgreSQL"],
    status: "En production",
    hasPage: true,
  },
  {
    slug: "ataya-partners",
    title: "Ataya & Partners",
    subtitle: "Stage en entreprise",
    description:
      "Stage chez Ataya & Partners. Première immersion professionnelle dans un contexte réel, développement de fonctionnalités et découverte des pratiques en équipe.",
    tags: ["Stage", "Professionnel"],
    status: "Terminé",
  },
  {
    slug: "conferences",
    title: "Conférences",
    subtitle: "Participations & présentations",
    description:
      "Conférences suivies et présentations réalisées dans le cadre de mes études à l'EPHEC et de ma vie professionnelle. Prise de parole, veille technologique, networking.",
    tags: ["EPHEC", "Veille", "Soft skills"],
    status: "En cours",
  },
  {
    slug: "build-pc",
    title: "Build PC",
    subtitle: "Station de travail & rig sim racing",
    description:
      "Montage et optimisation d'un PC taillé pour le développement et le sim racing. Choix des composants, overclocking, gestion thermique — et Assetto Corsa Competizione à fond.",
    tags: ["Hardware", "Perso", "Sim Racing"],
    status: "Terminé",
  },
  {
    slug: "vendanges",
    title: "Vendanges",
    subtitle: "Expérience terrain en viticulture",
    description:
      "Participation aux vendanges — une pause physique et humaine loin des écrans. Travail d'équipe, rythme de la nature, et retour aux choses concrètes.",
    tags: ["Expérience", "Perso"],
    status: "Terminé",
  },
  {
    slug: "portfolio",
    title: "Ce portfolio",
    subtitle: "Vitrine personnelle — adamedouard.be",
    description:
      "Conception et développement de ce site de A à Z. Next.js 16, Tailwind v4, design brutaliste, export statique sur Infomaniak. Chaque pixel est intentionnel.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Design"],
    status: "En cours",
  },
  {
    slug: "neerlandais",
    title: "Cours de néerlandais",
    subtitle: "Apprentissage de la troisième langue nationale",
    description:
      "Apprentissage du néerlandais en parallèle des études et du boulot. Belgique oblige — naviguer entre le français, l'anglais et le néerlandais fait partie du jeu.",
    tags: ["Langue", "Perso", "Belgique"],
    status: "En cours",
  },
  {
    slug: "ford-models",
    title: "Ford Models",
    subtitle: "Projet à préciser",
    description:
      "Détails à venir. Contexte et contenu en cours de rédaction.",
    tags: ["À préciser"],
    status: "Terminé",
  },
  {
    slug: "assetto-corsa-servers",
    title: "Serveurs Assetto Corsa",
    subtitle: "Administration de serveurs de sim racing",
    description:
      "Mise en place et gestion de serveurs dédiés pour Assetto Corsa Competizione. Configuration, gestion de communauté, monitoring — les mêmes réflexes qu'en infra prod, mais pour le plaisir.",
    tags: ["Linux", "Infra", "Sim Racing", "Perso"],
    status: "En cours",
  },
];

const statusColors: Record<ProjectStatus, "accent" | "default" | "outline"> = {
  "TFE 2025": "accent",
  "En production": "accent",
  "Terminé": "default",
  "En cours": "outline",
  "Perso": "outline",
};

/* ─── PAGE ──────────────────────────────────────────────────────────── */

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted mb-4">
          {projects.length} projets
        </p>
        <h1
          className="font-display text-5xl sm:text-7xl font-black leading-tight"
          style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
        >
          Tout ce que
          <br />
          j&apos;ai fait.
        </h1>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Card
            key={project.slug}
            accent={project.accent}
            className="flex flex-col gap-4 bg-surface"
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <Badge variant={statusColors[project.status]}>
                {project.status}
              </Badge>
              <span className="font-mono text-xs text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Title */}
            <div>
              <h2
                className="font-display text-2xl font-black leading-tight mb-1"
                style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
              >
                {project.title}
              </h2>
              <p className="font-mono text-xs text-muted">{project.subtitle}</p>
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

            {/* Link si case study dispo */}
            {project.hasPage && (
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
    </section>
  );
}

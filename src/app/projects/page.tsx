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

type Domaine = "Stage" | "Développement" | "Conférences" | "Expérience" | "Formation" | "Réseaux" | "Perso" | "Job" ;

interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  domaine: Domaine;
  heuresValorisables: number;
  heuresReelles: number;
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
    domaine: "Développement",
    heuresValorisables: 0,
    heuresReelles: 400,
    accent: true,
    hasPage: true,
  },
  {
    slug: "rtbf",
    title: "RTBF",
    subtitle: "Stage de fin d'étude à la RTBF",
    description:
      "Architecture microservices Laravel. Pagination cursor sur large dataset, packages partagés entre services, documentation OpenAPI complète.",
    tags: ["Laravel", "Kubernetes", "OpenAPI", "PostgreSQL"],
    status: "En production",
    domaine: "Stage",
    heuresValorisables: 0,
    heuresReelles: 450,
    hasPage: true,
  },
  {
    slug: "ataya-partners",
    title: "Ataya & Partners",
    subtitle: "Stage en entreprise",
    description:
      "Stage chez Ataya & Partners. Première immersion professionnelle dans un contexte réel, développement de fonctionnalités et découverte des pratiques en équipe. Spécialisation dans la nouvel directive NIS2",
    tags: ["Stage", "Professionnel"],
    status: "Terminé",
    domaine: "Stage",
    heuresValorisables: 10,
    heuresReelles: 350,
    hasPage: true,
  },
  {
    slug: "conferences",
    title: "Conférences",
    subtitle: "Participations à différentes conférences",
    description:
      "Conférences suivies dans le cadre de ma vie professionnelle.",
    tags: ["CCB", "Soft skills", "Veille"],
    status: "Terminé",
    domaine: "Conférences",
    heuresValorisables: 10,
    heuresReelles: 15,
    hasPage: true,
  },
  {
    slug: "build-pc",
    title: "Build PC",
    subtitle: "Montage de différents pc perso & pour la famille",
    description:
      "Montage et optimisation de différents PC taillé pour le développement et le gaming. Choix des composants et montage pour moi-même et membre de ma famille.",
    tags: ["Hardware", "Perso"],
    status: "Terminé",
    domaine: "Perso",
    heuresValorisables: 10,
    heuresReelles: 20,
    hasPage: true,
  },
  {
    slug: "vendanges",
    title: "Vendanges",
    subtitle: "Job d'été dans un domaine viticole",
    description:
      "Participation aux vendanges 2025 à Viviers, une pause physique et une expérience humaine loin des écrans. Travail d'équipe, rythme de la nature, et travail physique.",
    tags: ["Expérience", "Perso", "Job"],
    status: "Terminé",
    domaine: "Job",
    heuresValorisables: 10,
    heuresReelles: 90,
    hasPage: true,
  },
  {
    slug: "portfolio",
    title: "Ce portfolio",
    subtitle: "Vitrine personnelle — adamedouard.be",
    description:
      "Conception et développement de ce site de A à Z. Next.js 16, Tailwind v4, design brutaliste, export statique sur Infomaniak. Chaque pixel est intentionnel;)",
    tags: ["Next.js", "TypeScript", "Tailwind", "Design"],
    status: "En cours",
    domaine: "Développement",
    heuresValorisables: 10,
    heuresReelles: 20,
    hasPage: true,
  },
  {
    slug: "neerlandais",
    title: "Cours de néerlandais",
    subtitle: "Cours de langues en parallèle de mes études",
    description:
      "Apprentissage du néerlandais en parallèle des études. Suivit entre septembre 2025 et janvier 2026 pour combler le temps libre à l'eafc Uccle.",
    tags: ["Langue", "Perso", "Belgique"],
    status: "Terminé",
    domaine: "Formation",
    heuresValorisables: 10,
    heuresReelles: 210,
    hasPage: true,
  },
  {
    slug: "ford-models",
    title: "Ford Models",
    subtitle: "Job en temps que manequin pour différentes marques de luxe",
    description:
      "Participation à différents fashion-week à Paris et à Milan en parallèle de mes études. Souvent lors des examens malheureusement :(",
    tags: ["Perso", "Job", "International"],
    status: "Terminé",
    domaine: "Expérience",
    heuresValorisables: 10,
    heuresReelles: 200,
    hasPage: true,
  },
];

const domaineColors: Record<string, string> = {
  "Stage": "text-accent",
  "Développement": "text-ink",
  "Conférences": "text-muted",
  "Expérience": "text-muted",
  "Formation": "text-ink",
  "Réseaux": "text-muted",
  "Perso": "text-muted",
};

const domaines = [...new Set(projects.map((p) => p.domaine))];
const domaineStats = domaines.map((d) => ({
  domaine: d,
  heuresValorisables: projects.filter((p) => p.domaine === d).reduce((s, p) => s + p.heuresValorisables, 0),
  heuresReelles: projects.filter((p) => p.domaine === d).reduce((s, p) => s + p.heuresReelles, 0),
  count: projects.filter((p) => p.domaine === d).length,
}));
const totalValorisables = projects.reduce((s, p) => s + p.heuresValorisables, 0);
const totalReelles = projects.reduce((s, p) => s + p.heuresReelles, 0);

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
                Voir plus <ExternalLink size={12} />
              </Link>
            )}
          </Card>
        ))}
      </div>

      {/* ── RÉCAP HEURES ── */}
      <div id="recapitulatif" className="mt-24 pt-16 border-t-2 border-ink">
        <div className="mb-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted mb-2">
            Récapitulatif
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl font-black leading-tight"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Activités &amp;
            <br />
            heures valorisées.
          </h2>
        </div>

        {/* Tableau détaillé */}
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-2 border-ink font-mono text-sm">
            <thead>
              <tr className="bg-ink text-bg">
                <th className="text-left px-4 py-3 font-bold uppercase tracking-widest text-xs">Activité</th>
                <th className="text-left px-4 py-3 font-bold uppercase tracking-widest text-xs whitespace-nowrap">Domaine</th>
                <th className="text-right px-4 py-3 font-bold uppercase tracking-widest text-xs whitespace-nowrap">H. valorisables</th>
                <th className="text-right px-4 py-3 font-bold uppercase tracking-widest text-xs whitespace-nowrap">H. réelles</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr
                  key={p.slug}
                  className={`border-t-2 border-ink ${i % 2 === 0 ? "bg-surface" : "bg-bg"}`}
                >
                  <td className="px-4 py-3 text-ink font-medium">{p.title}</td>
                  <td className="px-4 py-3">
                    <span className={`font-bold text-xs uppercase tracking-widest ${domaineColors[p.domaine] ?? "text-muted"}`}>
                      {p.domaine}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-accent">{p.heuresValorisables}h</td>
                  <td className="px-4 py-3 text-right text-muted">{p.heuresReelles}h</td>
                </tr>
              ))}
              <tr className="border-t-4 border-ink bg-ink text-bg">
                <td className="px-4 py-3 font-bold uppercase tracking-widest text-xs" colSpan={2}>Total</td>
                <td className="px-4 py-3 text-right font-black text-lg">{totalValorisables}h</td>
                <td className="px-4 py-3 text-right font-bold text-bg/70">{totalReelles}h</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Récap par domaine */}
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted mb-6">
            Par domaine
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {domaineStats.map((d) => (
              <div key={d.domaine} className="border-2 border-ink p-4 bg-surface">
                <p className={`font-mono text-xs font-bold uppercase tracking-widest mb-3 ${domaineColors[d.domaine] ?? "text-muted"}`}>
                  {d.domaine}
                </p>
                <p
                  className="font-display font-black text-3xl leading-none mb-1"
                  style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                >
                  {d.heuresValorisables}h
                </p>
                <p className="font-mono text-xs text-muted">valorisables</p>
                <p className="font-mono text-xs text-muted mt-2">
                  {d.heuresReelles}h réelles · {d.count} activité{d.count > 1 ? "s" : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

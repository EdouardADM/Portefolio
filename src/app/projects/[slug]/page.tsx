import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PhotoGallery } from "@/components/PhotoGallery";

/* ─── CONTENU PAR PROJET ────────────────────────────────────────────────
   Pour chaque projet :
   - content : votre texte d'analyse réflexive (sautez une ligne entre paragraphes)
   - images  : chemins depuis /public  →  ex. "/images/projects/criteat/photo1.jpg"
────────────────────────────────────────────────────────────────────────── */

interface ProjectPageData {
  title: string;
  subtitle: string;
  domaine: string;
  heuresValorisables: number;
  heuresReelles: number;
  content: string;
  images: string[];
  imageAspect?: string;
}

const projectsData: Record<string, ProjectPageData> = {
  "criteat": {
    title: "CritEat",
    subtitle: "App mobile de critiques de restaurants",
    domaine: "Développement",
    heuresValorisables: 0,
    heuresReelles: 400,
    content: "",
    images: [],
  },
  "rtbf": {
    title: "RTBF",
    subtitle: "Stage de fin d'étude à la RTBF",
    domaine: "Stage",
    heuresValorisables: 0,
    heuresReelles: 450,
    content: "",
    images: [],
  },
  "ataya-partners": {
    title: "Ataya & Partners",
    subtitle: "Stage en entreprise",
    domaine: "Stage",
    heuresValorisables: 10,
    heuresReelles: 400,
    content: "",
    images: [],
  },
  "conferences": {
    title: "Conférences",
    subtitle: "Participations à différentes conférences",
    domaine: "Conférences",
    heuresValorisables: 10,
    heuresReelles: 10,
    content: `J'ai eu l'occasion de participer à deux événements professionnels dans le domaine de la cybersécurité et de la gouvernance IT : le salon de la Cybersécurité Belgium 2025 et le GRC Be Connected.

Le Salon de la Cybersécurité Belgium 2025 m'a permis de découvrir les tendances actuelles du secteur — des solutions de protection des infrastructures aux enjeux liés à l'intelligence artificielle. J'y ai rencontré des professionnels du domaine et assisté à plusieurs démonstrations techniques qui m'ont donné une vision concrète des défis de sécurité auxquels les entreprises font face aujourd'hui.

Le GRC Be Connected est un événement centré sur la Gouvernance, la Gestion des Risques et la Conformité (GRC). Une dimension que je croise régulièrement en stage à la RTBF, où les contraintes réglementaires et les pratiques de sécurité font partie du quotidien. Participer à cet événement m'a permis de mieux comprendre le cadre dans lequel s'inscrit mon travail.`,
    images: [
      "/images/projects/conferences/conf_cyberBelguim1.jpg",
      "/images/projects/conferences/conf_cyberBelguim2.jpg",
      "/images/projects/conferences/conf_cyberBelguim3.jpg",
      "/images/projects/conferences/conf_grc.jpg",
      "/images/projects/conferences/conf_grc1.jpg",
      "/images/projects/conferences/conf_grc2.jpg",
      "/images/projects/conferences/conf_grc3.jpg",
    ],
    imageAspect: "aspect-square",
  },
  "build-pc": {
    title: "Build PC",
    subtitle: "Montage de différents pc perso & pour la famille",
    domaine: "Perso",
    heuresValorisables: 10,
    heuresReelles: 20,
    content: `J'ai monté plusieurs PC de A à Z — d'abord le mien, puis ceux de proches. Un build noir avec boîtier NZXT, carte graphique PNY RTX et watercooling, et un second build blanc monté pour un ami. À chaque fois, le processus est le même : choisir les composants en fonction du budget et de l'usage, assembler, gérer le câblage, et vérifier que tout démarre correctement.

Ce que j'apprécie dans le montage PC, c'est que ça ressemble à de l'architecture logicielle : chaque pièce a un rôle précis, les contraintes de compatibilité sont réelles, et un mauvais choix se paie. La gestion thermique et le cable management sont l'équivalent hardware d'un code propre — ça ne se voit pas toujours de l'extérieur, mais ça change tout à long terme.

Ces builds m'ont appris la rigueur, la patience, et une connaissance concrète du hardware qui me sert au quotidien quand je travaille sur de l'infra.`,
    images: [
      "/images/projects/build_pc/PC1.jpg",
      "/images/projects/build_pc/PC2.jpg",
      "/images/projects/build_pc/PC3.png",
      "/images/projects/build_pc/PC4.jpg",
      "/images/projects/build_pc/PC5.jpg",
      "/images/projects/build_pc/PC6.jpg",
    ],
    imageAspect: "aspect-square",
  },
  "vendanges": {
    title: "Vendanges",
    subtitle: "Job d'été dans un domaine viticole",
    domaine: "Job",
    heuresValorisables: 10,
    heuresReelles: 110,
    content: `Durant l'été 2024, j'ai participé aux vendanges au Château Vivier, un domaine viticole situé en France. Une expérience complètement différente de mon quotidien de développeur — loin des écrans, les mains dans la terre.

Le travail consistait à récolter le raisin à la main, rangée après rangée, en équipe. Des journées longues, physiques, sous le soleil, avec des gens venus de partout. J'ai rapidement compris l'importance de la rigueur et du rythme collectif : une équipe qui se synchronise mal, c'est une récolte qui prend du retard.

Ce que j'en retiens, c'est la valeur du travail concret et la satisfaction d'une tâche bien faite. C'est une expérience que je recommande à n'importe quel étudiant — elle remet les choses en perspective.`,
    images: [
      "/images/projects/vendanges/bg.jpg",
      "/images/projects/vendanges/chateauVivier.jpg",
      "/images/projects/vendanges/paysage.jpg",
      "/images/projects/vendanges/raisin1.jpg",
      "/images/projects/vendanges/raisin2.jpg",
    ],
  },
  "portfolio": {
    title: "Ce portfolio",
    subtitle: "Vitrine personnelle — adamedouard.be",
    domaine: "Développement",
    heuresValorisables: 10,
    heuresReelles: 30,
    content: "",
    images: [],
  },
  "neerlandais": {
    title: "Cours de néerlandais",
    subtitle: "Cours de langues en parallèle de mes études",
    domaine: "Formation",
    heuresValorisables: 10,
    heuresReelles: 240,
    content: `J'ai suivi des cours de néerlandais entre septembre 2025 et janvier 2026, en parallèle de mes études et de mon stage à la RTBF. En Belgique, naviguer entre le français, le néerlandais et l'anglais n'est pas qu'un atout — c'est souvent une nécessité professionnelle.

Les cours se déroulaient en groupe, avec des exercices de vocabulaire, de compréhension orale et de conversation. Un rythme soutenu pour quelqu'un qui jongle déjà avec beaucoup d'autres choses, mais une discipline que j'ai voulu m'imposer.

Apprendre une langue, c'est aussi apprendre à être à l'aise dans l'inconfort — exactement comme quand on découvre une nouvelle technologie. Cette formation m'a confirmé que je suis capable de m'adapter rapidement à un nouvel environnement, qu'il soit linguistique ou technique.`,
    images: [
      "/images/projects/cours/cours1.jpg",
      "/images/projects/cours/cours2.jpg",
    ],
    imageAspect: "aspect-[3/4]",
  },
  "ford-models": {
    title: "Ford Models",
    subtitle: "Job en tant que mannequin pour différentes marques de luxe",
    domaine: "Expérience",
    heuresValorisables: 10,
    heuresReelles: 400,
    content: `En parallèle de mes études, j'ai travaillé comme mannequin pour l'agence Ford Models, participant à différents défilés et fashion weeks à Paris et à Milan. Une expérience radicalement différente de mon quotidien de développeur, mais qui partage plus de points communs qu'on ne le croit.

Les castings, les shootings et les défilés imposent une rigueur sur la ponctualité, la présentation et la gestion du stress en conditions réelles. On évolue dans un environnement où tout va vite, où les imprévus sont fréquents, et où il faut rester professionnel quoi qu'il arrive — des réflexes que je retrouve aussi en production.

C'est aussi une expérience qui m'a ouvert à d'autres milieux, d'autres façons de travailler, et à une forme de créativité que le monde du développement n'offre pas toujours. Je ne regrette pas d'avoir dit oui.`,
    images: [
      "/images/projects/ford_models/model1.jpg",
      "/images/projects/ford_models/model2.jpg",
      "/images/projects/ford_models/model3.jpg",
      "/images/projects/ford_models/model4.jpg",
      "/images/projects/ford_models/model5.jpg",
    ],
    imageAspect: "aspect-[3/4]",
  },
};

const domaineColors: Record<string, string> = {
  "Stage": "accent",
  "Développement": "default",
  "Conférences": "outline",
  "Expérience": "outline",
  "Formation": "default",
  "Réseaux": "outline",
  "Perso": "outline",
  "Job": "outline",
} as const;

/* ─── STATIC PARAMS (export statique) ───────────────────────────────── */

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

/* ─── METADATA ──────────────────────────────────────────────────────── */

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) return { title: "Projet introuvable" };
  return {
    title: project.title,
    description: project.subtitle,
  };
}

/* ─── PAGE ──────────────────────────────────────────────────────────── */

export default async function ProjectPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) notFound();

  const paragraphs = project.content
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  const badgeVariant = (domaineColors[project.domaine] ?? "outline") as "accent" | "default" | "outline";

  return (
    <article className="mx-auto max-w-4xl px-6 py-20">

      {/* ── RETOUR ── */}
      <Link
        href="/projects/"
        className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-muted hover:text-ink transition-colors mb-12"
      >
        <ArrowLeft size={12} /> Retour aux projets
      </Link>

      {/* ── EN-TÊTE ── */}
      <header className="mb-16">
        {/* Domaine + heures */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Badge variant={badgeVariant}>{project.domaine}</Badge>
          {project.heuresValorisables > 0 && (
            <span className="font-mono text-sm font-bold text-accent">
              {project.heuresValorisables}h valorisables
            </span>
          )}
          <span className="font-mono text-xs text-muted">
            {project.heuresReelles}h réelles
          </span>
        </div>

        {/* Titre */}
        <h1
          className="font-display font-black text-5xl sm:text-7xl leading-[0.95] tracking-tight mb-4"
          style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
        >
          {project.title}
        </h1>
        <p className="font-mono text-base text-muted">{project.subtitle}</p>
      </header>

      {/* ── ANALYSE RÉFLEXIVE ── */}
      {paragraphs.length > 0 && (
        <section className="mb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted mb-8">
            Analyse réflexive
          </p>
          <div className="space-y-6 font-mono text-base leading-relaxed border-l-4 border-accent pl-8">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-ink">
                {para}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* ── PHOTOS ── */}
      {project.images.length > 0 && (
        <section>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted mb-8">
            Photos
          </p>
          <PhotoGallery
            images={project.images}
            alt={project.title}
            imageAspect={project.imageAspect}
          />
        </section>
      )}

    </article>
  );
}

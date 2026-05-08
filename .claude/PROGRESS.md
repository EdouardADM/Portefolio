# Portfolio adamedouard.be — Suivi de session

## ✅ Done

### Session 1 — 2026-05-08
- [x] Init projet Next.js 16 (App Router, TypeScript, Tailwind v4, src/)
- [x] `next.config.ts` : output: 'export', trailingSlash: true, images: unoptimized
- [x] Install dépendances : framer-motion, lucide-react, next-themes, @next/mdx
- [x] Design system CSS (`globals.css`) : tokens couleurs, fonts, shadows hard, focus styles
- [x] `layout.tsx` : Fraunces + JetBrains Mono, metadata SEO complète
- [x] Composants UI brutalistes : Button (3 variants), Card (accent/default), Badge (3 variants)
- [x] Header sticky avec nav active-state
- [x] Footer sombre avec liens sociaux
- [x] Home page complète : Hero, About, Projects (3 cards), Stack (4 catégories), Contact CTA

## 🔄 In progress

- [ ] Vérification build statique (npm run build)
- [ ] Alignement visuel avec Edouard (review home)

## 📋 Next

- [ ] Pages stub : /projects, /about, /cv, /contact (pour que le build statique ne casse pas les liens)
- [ ] MDX setup pour les case studies (/projects/[slug])
- [ ] Ajouter Framer Motion sur le Hero (entrée + scroll animations)
- [ ] Page /about détaillée
- [ ] Page /cv avec téléchargement PDF
- [ ] Page /contact avec formulaire (Formspree ou mailto)
- [ ] Favicons + OG image
- [ ] Vérifier accessibilité (contraste, focus, aria-labels)

## 📌 Decisions

| Date | Décision | Rationale |
|---|---|---|
| 2026-05-08 | Palette "Braise" — accent #FF4500 sur fond crème #F5F0E8 | Validé par Edouard. Plus de caractère que le jaune électrique (Option B). |
| 2026-05-08 | Typo : Fraunces (display) + JetBrains Mono (corps) | Validé par Edouard. Contraste serif dramatique vs mono nerdy. |
| 2026-05-08 | HitParade RTBF → anonymisé "Plateforme Média" | Accord implicite, éviter mention nominative RTBF sans confirmation écrite. |
| 2026-05-08 | Pas de tailwind.config.ts — tokens dans @theme CSS | Standard Tailwind v4, pas de fichier config séparé. |

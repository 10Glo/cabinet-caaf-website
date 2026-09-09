# Seed Payload — CAAF SAS

Seed idempotent qui génère l'intégralité des contenus depuis le frontend hardcodé vers les collections Payload (localization `fr` par défaut + `en`).

## Prérequis

- `DATABASE_URL` (Postgres ≥ 14, ex: `postgres://user:pwd@localhost:5432/caaf`)
- `PAYLOAD_SECRET` (chaîne aléatoire 32c+)
- Dépendances installées (`pnpm install`)
- Migrations à jour (`pnpm payload migrate` ou `pnpm build` qui lance les migrations)

Variables requises dans `.env` :

```ini
DATABASE_URL=postgres://caaf:caaf@localhost:5432/caaf
PAYLOAD_SECRET=change-me-32-chars-min
```

## Commandes

```bash
# run direct (Payload CLI)
pnpm payload run src/payload/seed/index.ts

# alias package.json (si ajouté)
pnpm seed
# = pnpm payload run src/payload/seed/index.ts
```

Ajout recommandé dans `package.json` :

```json
{ "scripts": { "seed": "cross-env NODE_OPTIONS=--no-deprecation payload run src/payload/seed/index.ts" } }
```

## Ordre d'exécution (19 étapes)

Le seed respecte l'ordre des dépendances :

1. **Media** — upload `src/assets/*` + `src/payload/seed/media/*` vers collection `media` avec `alt` localisé (`fr`/`en`), `caption`, `focalPoint`. Déduit `defaultMediaId` utilisé comme fallback image.
2. **Users** — `admin@caaf-sas.com` (admin) + `redac@caaf-sas.com` (editor). Passwords : `Admin123!` / `Redac123!` à changer après seed.
3. **ArticleCategories (6)** — `all`, `audit`, `fiscal`, `ohada`, `secteur`, `cabinet` depuis `src/content/actualites/articles.ts` `CATEGORIES`.
4. **Authors (3)** — Jean-Marc Kalala, Marie Tshimanga, Patrick Mbuyu.
5. **Tags (~10)** — dédupliqués depuis `ARTICLES[].tags`.
6. **Sectors (8)** — Mines, Banque, Télécoms, Industrie, ONG, Institutions, Groupes, Santé depuis `sectors-bento` `SECTORS`.
7. **Clients (12)** — CRDB Bank, MIDEMA, CILU, PPC, Engen, Metalkol, Frontier, Chemaf, ABM, Weir Minerals, Ivanhoe, SEK — avec relation `sector` + `logo`.
8. **Certifications (4)** — IFAC, ONEC RDC, OHADA, ISA depuis `certifications-detail` `CERTIFICATIONS` (scope/implications/doc).
9. **Milestones (6 avec 1968)** — 1968 Création, 1990 PwC, 2005 Expansion, 2012 Lubumbashi, 2023 CAAF SAS, Aujourd'hui — depuis `history-timeline` `MILESTONES`.
10. **Publications (8)** — rapport fiscal 2024, analyse SYSCOHADA, guide audit, etc. depuis `publications-list` `PUBLICATIONS` (via `publication-categories` Rapport/Analyse/Guide).
11. **Jobs (5)** — Auditeur Senior, Consultant, Responsable Fiscal, Auditeur Junior, Stagiaire depuis `careers-openings` `OPENINGS`.
12. **Roles (6)** — Auditeur Junior → Risk Advisory depuis `careers-roles` `ROLES` (missions/profil/qualités/évolution/pourquoi).
13. **Offices (2 avec phones +243 et coords)**  
    - Kinshasa — `13 Avenue Mongala` — `+243 999 309 901` / `+243 810 372 645` — `location [15.30666, -4.302915]`  
    - Lubumbashi — `1034 Avenue Kilela Balanda` — `+243 990 658 737` / `+243 817 103 993` — `location [27.476984, -11.647864]`  
    depuis `contact-offices` `OFFICES` (corrigé avec vrais téléphones).
14. **Faqs (8)** — Prise de contact, Missions, Confidentialité, Facturation, Carrières depuis `contact-faq` `FAQ_ITEMS` (answer Lexical).
15. **Testimonials (6)** — quotes clients/banque/mines/ONG avec `featured`.
16. **Articles (12)** — titres/slugs/dates du frontend, `content` Lexical depuis `src/content/actualites/article-content.ts` (12 exports `ARTICLE_CONTENT_*`), relations `category`/`author`/`tags`/`image`.
17. **Expertises (15)** — `assistance-comptable`, `audit-financier`, `audit-informatique`, `audit-interne`, `commissariat-aux-comptes`, `conseil-fiscal`, `controle-interne`, `due-diligence`, `gestion-commerciale`, `gestion-de-paie`, `gestion-des-risques`, `maitrise-des-risques`, `manuels-de-procedure`, `restructuration`, `support-logiciels` — importe chaque config depuis `src/content/expertises/*.ts` et mappe `hero` + 6 groupes (`sousServices`, `approche`, `pourquoi`, `secteurs`, `cas`, `cta`).
18. **Pages (home/about/services etc. avec blocks)** — home, a-propos, services, secteurs, references, histoire, certifications, publications, carrieres, contact, actualites — avec `template` + `sections` blocks (hero, stats, bento, timeline, clientsGrid, testimonials, officesMap, faq, contactForm, etc.).
19. **Globals (SiteSettings, Header, Footer, SeoDefaults avec foundingYear 1968)** — `SiteSettings` (`siteName CAAF SAS`, `alternateName Congo Auditing...`, `siteUrl https://caaf-sas.com`, `foundingYear 1968`, phones +243, `sameAs`), `Header` (mega-menu + CTA), `Footer` (colonnes + offices + credentials), `SeoDefaults` (titleSuffix, robots, hreflang).

## Idempotence (slug check)

Chaque création est gardée par un `find` préalable :

```ts
const existing = await payload.find({ collection, where: { slug: { equals: slug } }, locale: 'fr', overrideAccess: true })
if (existing.docs.length) { console.log('↺ skip'); return }
await payload.create({ collection, data, locale: 'fr' })
await payload.update({ collection, id, data: dataEn, locale: 'en' })
```

- `Media` : check `alt`  
- `Users` : check `email`  
- `Certifications` : check `code`  
- `Milestones` : check `year`  
- `Offices` : check `city`  
- `Faqs` : check `question`  
- `Testimonials` : check `author`

Relance sans doublons — logs `↺ skip` / `+ created`.

Traduction `en` : création `fr` puis `update` locale `en` avec traductions basiques (` (EN)` + mappings manuels pour labels critiques).

## Ajout médias

1. Déposer les fichiers dans `src/payload/seed/media/` (ou `src/assets/`) :

```
src/payload/seed/media/
├── kinshasa-office.jpg
├── lubumbashi-office.jpg
├── logo.png
└── rapport-2024.pdf
```

2. Le seed parcourt `src/assets/*` + `src/payload/seed/media/*`, déduplicate par basename, upload vers `media` avec `alt` localisé.

3. Types acceptés (Payload `Media.upload.mimeTypes`) : `image/*`, `application/pdf`. Thumbnails `card` (800) et `hero` (1920) générés par `sharp`.

4. Fallback : si aucun fichier, les relations `image/logo/cover` utilisent `null` et un warning est loggé. Placer au moins `logo.png` dans `src/assets`.

## Reset

```bash
# Suppression sélective (psql ou payload delete)
# Exemple via payload (overrideAccess)
pnpm payload run -c "await (await import('payload')).getPayload({config: await import('./src/payload.config')}).then(p => p.delete({collection:'articles', where:{slug:{exists:true}}}))"

# Reset complet — suppression DB (destructif)
# 1. Drop + recreate DB
dropdb caaf && createdb caaf
pnpm payload migrate
pnpm seed
```

Ou supprimer document par document via Admin `/admin` (collections / globals).

## Env vars

| Variable | Requis | Exemple |
|---|---|---|
| `DATABASE_URL` | oui | `postgres://caaf:caaf@localhost:5432/caaf` |
| `PAYLOAD_SECRET` | oui | `openssl rand -hex 32` |
| `PAYLOAD_URL` | non | `http://localhost:3000` |

## Dépannage

- `Unauthorized` au seed → vérifier `overrideAccess: true` (déjà présent) et `PAYLOAD_SECRET`.
- `relation not found` → respecter l'ordre (sectors avant clients, categories avant articles).
- `upload mimeTypes` → vérifier extension (png/jpg/svg/pdf/webp).
- `duplicate slug` → le seed est idempotent ; si doc créé manuellement avec même slug, il est skippé.

## Fichiers

- `src/payload/seed/index.ts` — seed principal
- `src/payload/seed/README.md` — ce fichier
- `src/payload/seed/media/README.md` — instructions médias

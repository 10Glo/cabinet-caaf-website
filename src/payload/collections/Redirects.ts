// RATIONALE: Collection Redirects = table de redirections 301/302 gérée côté CMS.
// Frontend: middleware / next.config redirects ou hook afterRead charge Redirects (enabled=true)
// pour répondre 301/302 sans redéploiement. Évite les 404 après refonte slug.
// - from text required unique → chemin source exact (ex: "/ancien-slug"), useAsTitle, indexé.
// - to text required → destination (chemin interne "/nouveau" ou URL externe "https://...").
// - type select {301,302} default 301 → sémantique SEO (permanent vs temporaire).
// - enabled checkbox default true → activation/désactivation sans supprimer la règle.
// - access read () => true → lecture publique pour middleware, écriture auth.
// - pas de versions/drafts → règles actives immédiatement.
// SEED: { from:"/ancien-expertise", to:"/expertises/audit-financier", type:"301", enabled:true }

import type { CollectionConfig } from 'payload'

export const Redirects: CollectionConfig = {
  slug: 'redirects',
  admin: {
    useAsTitle: 'from',
    defaultColumns: ['from', 'to', 'type', 'enabled', 'updatedAt'],
    description: 'Redirections — 301/302 sans redéploiement',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'from',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { description: 'Chemin source — useAsTitle, unique (ex: /ancien-slug, doit commencer par /)' },
    },
    {
      name: 'to',
      type: 'text',
      required: true,
      admin: { description: 'Destination — chemin interne (/nouveau) ou URL externe (https://...)' },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: '301',
      options: [
        { label: '301 Permanent', value: '301' },
        { label: '302 Temporary', value: '302' },
      ],
      admin: { description: 'Type — 301 permanent (SEO) / 302 temporaire', position: 'sidebar' },
    },
    {
      name: 'enabled',
      type: 'checkbox',
      defaultValue: true,
      admin: { description: 'Actif — désactiver sans supprimer', position: 'sidebar' },
    },
  ],
}

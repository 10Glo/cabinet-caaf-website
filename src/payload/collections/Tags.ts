// RATIONALE: Taxonomie Tags = mots-clés transverses pour Articles (et potentiellement Expertises/Pages).
// Frontend: filtrage multi-tags sur /actualites, nuages de tags, et SEO keywords fallback.
// Articles.tags (hasMany → tags) permet le filtrage ET/OU côté GROQ/Payload where.
// - label/slug localisés → libellé et URL localisés (ex: TVA / en/VAT).
// - slug unique indexé → contrainte d’unicité par locale + lookup rapide.
// - pas de versions/drafts → taxonomie légère.
// - access read () => true → tags publics pour filtres sans auth.
// SEED: { label:"TVA", slug:"tva" }, { label:"RSE", slug:"rse" }

import type { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'label',
    defaultColumns: ['label', 'slug', 'updatedAt'],
    description: 'Tags — mots-clés transverses (articles)',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Libellé du tag — localisé (FR/EN)' },
    },
    {
      name: 'slug',
      type: 'text',
      localized: true,
      required: true,
      unique: true,
      index: true,
      admin: { description: 'Slug URL localisé — filtre /actualites?tag=[slug]' },
    },
  ],
}

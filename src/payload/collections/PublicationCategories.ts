// RATIONALE: Taxonomie PublicationCategories pour filtrer Publications (distinct d’ArticleCategories).
// Frontend: app/(frontend)/publications affiche barre de filtres (All + categories) et
// filtrage par category slug localisé. Contenu éditorial distinct des actualités.
// - label/slug localisés → libellé FR/EN + URL localisée.
// - slug unique indexé → contrainte d’unicité par locale + lookup rapide.
// - pas de versions/drafts → taxonomie légère.
// - access read () => true → filtres publics sans auth.
// SEED: { label:"Guides", slug:"guides" }, { label:"Rapports", slug:"rapports" }

import type { CollectionConfig } from 'payload'

export const PublicationCategories: CollectionConfig = {
  slug: 'publication-categories',
  admin: {
    useAsTitle: 'label',
    defaultColumns: ['label', 'slug', 'updatedAt'],
    description: 'Catégories de publications — taxonomie rapports & guides',
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
      admin: { description: 'Libellé affiché — localisé (FR/EN)' },
    },
    {
      name: 'slug',
      type: 'text',
      localized: true,
      required: true,
      unique: true,
      index: true,
      admin: { description: 'Slug URL localisé — filtre /publications?categorie=[slug]' },
    },
  ],
}

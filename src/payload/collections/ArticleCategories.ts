// RATIONALE: Taxonomie ArticleCategories pour filtrer Articles.
// Frontend: app/(frontend)/actualites affiche barre de filtres (All + categories) et
// app/(frontend)/actualites/categorie/[slug] liste par category slug localisé.
// - label/slug localisés → libellé FR/EN + URL localisée (/actualites/categorie/fiscalite vs /en/news/category/tax).
// - slug unique indexé → lookup O(1) + contrainte d’unicité par locale.
// - pas de versions/drafts → taxonomie légère, modifs immédiates (pas de workflow brouillon).
// - access read () => true → filtres publics sans auth.
// SEED: { label:"Fiscalité", slug:"fiscalite" }, { label:"Audit", slug:"audit" }

import type { CollectionConfig } from 'payload'

export const ArticleCategories: CollectionConfig = {
  slug: 'article-categories',
  admin: {
    useAsTitle: 'label',
    defaultColumns: ['label', 'slug', 'updatedAt'],
    description: 'Catégories d’articles — taxonomie actualités',
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
      admin: { description: 'Slug URL localisé — filtre /actualites/categorie/[slug]' },
    },
  ],
}

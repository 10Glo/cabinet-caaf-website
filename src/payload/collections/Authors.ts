// RATIONALE: Collection Authors = auteurs / experts CAAF signant les Articles.
// Frontend: byline article (avatar + name + role), page /auteurs/[slug], et structuredData
// BlogPosting.author. Relation Articles.author → Authors (many-to-one).
// - name (non localisé, personne) → useAsTitle admin + affichage byline.
// - role/bio localisés → "Expert-comptable / Chartered Accountant" selon locale.
// - avatar upload→media → image ronde byline + author page.
// - slug localisé unique indexé → URL auteur localisée (/auteurs/jean-dupont vs /en/authors/jean-dupont).
// - pas de versions/drafts → fiche auteur stable, éditable directement.
// - access read () => true → bylines publics.
// SEED: { name:"Jean Dupont", role:"Expert-comptable", bio:"15 ans d’expérience...", avatar:mediaId, slug:"jean-dupont" }

import type { CollectionConfig } from 'payload'

export const Authors: CollectionConfig = {
  slug: 'authors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'slug', 'updatedAt'],
    description: 'Auteurs — experts signant les articles',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: { description: 'Nom complet — useAsTitle (non localisé)' },
    },
    {
      name: 'role',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Fonction / titre — localisé (ex: Expert-comptable / Chartered Accountant)' },
    },
    {
      name: 'bio',
      type: 'textarea',
      localized: true,
      admin: { description: 'Biographie courte — page auteur + tooltip byline' },
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Photo / avatar — byline article (rond)' },
    },
    {
      name: 'slug',
      type: 'text',
      localized: true,
      required: true,
      unique: true,
      index: true,
      admin: { description: 'Slug URL localisé — page /auteurs/[slug]' },
    },
  ],
}

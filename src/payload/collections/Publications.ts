// RATIONALE: Collection Publications = rapports, guides, études CAAF (distinct d’Articles actualités).
// Frontend: app/(frontend)/publications + [slug] listent/filtrent Publications par category/sector/featured
// et rendent cover + excerpt + pdf téléchargeable + content Lexical.
// - title/slug/excerpt localisés → cartes + H1 anglais + meta description.
// - category relationship→publication-categories required → filtre principal publications.
// - date required → tri chronologique + sitemap lastmod.
// - sector relationship→sectors? → filtre secondaire par secteur (optionnel).
// - featured checkbox → mise en avant homepage / tête de liste.
// - pdf upload→media → téléchargement principal (bouton CTA).
// - cover upload→media → vignette carte + OG fallback.
// - content richText localized → body publication Lexical (H2/H3, listes, liens, uploads).
// - seo group → generateMetadata + OG/Twitter.
// - versions drafts + autosave + schedulePublish → workflow relecture avant publication.
// - access read () => true → publications publiques ISR, écriture auth.
// SEED: { title:"Guide fiscal 2024", slug:"guide-fiscal-2024", excerpt:"Synthèse...", category:catId, date:"2024-06-01", pdf:mediaId, cover:mediaId, content:{root:{...}} }

import type { CollectionConfig } from 'payload'

import { seoField } from '../fields/seo'

export const Publications: CollectionConfig = {
  slug: 'publications',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'date', 'featured', 'updatedAt'],
    description: 'Publications — rapports & guides (Lexical + PDF)',
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: {
      autosave: { interval: 2000 },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Titre — localisé, useAsTitle' },
    },
    {
      name: 'slug',
      type: 'text',
      localized: true,
      required: true,
      unique: true,
      index: true,
      admin: { description: 'Slug URL localisé (ex: guide-fiscal-2024 / en/tax-guide-2024)' },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      localized: true,
      admin: { description: 'Extrait / chapeau — cartes + meta description fallback' },
    },
    {
      name: 'category',
      type: 'relationship',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- CollectionSlug type regenerates after generate:types
      relationTo: 'publication-categories' as any,
      required: true,
      hasMany: false,
      admin: { description: 'Catégorie — filtre principal publications', position: 'sidebar' },
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        description: 'Date de parution — tri + sitemap',
        date: { pickerAppearance: 'dayOnly' },
      },
    },
    {
      name: 'sector',
      type: 'relationship',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      relationTo: 'sectors' as any,
      required: false,
      hasMany: false,
      admin: { description: 'Secteur lié — filtre secondaire (optionnel)', position: 'sidebar' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Mise en avant — homepage / tête de liste', position: 'sidebar' },
    },
    {
      name: 'pdf',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Fichier PDF — téléchargement principal' },
    },
    {
      name: 'cover',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Couverture — vignette carte + OG fallback' },
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      admin: { description: 'Corps — éditeur Lexical (H2/H3, Bold, Link, UL/OL, Quote, Upload)' },
    },
    seoField(),
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        description: 'Date de publication effective',
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
  ],
}

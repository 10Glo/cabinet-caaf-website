// RATIONALE: Collection Articles = actualités / blog CAAF.
// Frontend: app/(frontend)/actualites + [slug] listent/filtrent Articles par category/tags/featured
// et rendent content Lexical via RichText (H2/H3, listes, liens internes, uploads).
// Correspondance data → UI:
// - title/slug/excerpt localisés → cartes Actualités + H1 anglais + meta description.
// - category (→ article-categories) + tags (→ tags) → filtres côté frontend + breadcrumbs.
// - author (→ authors) + date/readTime → byline, tri chronologique, sitemap lastmod.
// - image (media) + featured → hero article + mise en avant homepage.
// - content richText Lexical localisé → body article (Heading/Bold/Link/UL/OL/Quote/Upload).
// - seo group → generateMetadata BlogPosting json-ld, OG/Twitter.
// - versions drafts + autosave → workflow rédaction → relecture → publication programmée.
// - access read () => true → lecture publique ISR, écriture auth.
// SEED: { title:"Réforme fiscale 2024", slug:"reforme-fiscale-2024", excerpt:"Décryptage...", category:catId, author:authorId, date:"2024-06-01", image:mediaId, content:{root:{...}} }

import type { CollectionConfig } from 'payload'

import { seoField } from '../fields/seo'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'author', 'date', 'featured', 'updatedAt'],
    description: 'Articles / actualités — Lexical + taxonomies',
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
      admin: { description: 'Titre H1 — localisé, useAsTitle admin' },
    },
    {
      name: 'slug',
      type: 'text',
      localized: true,
      required: true,
      unique: true,
      index: true,
      admin: { description: 'Slug URL localisé (ex: reforme-fiscale-2024 / en/tax-reform-2024)' },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      localized: true,
      required: true,
      admin: { description: 'Chapeau / extrait — cartes + meta description fallback (155c max)' },
    },
    {
      name: 'category',
      type: 'relationship',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- CollectionSlug type regenerates after payload.config + generate:types
      relationTo: 'article-categories' as any,
      required: true,
      hasMany: false,
      admin: { description: 'Catégorie principale — filtre actualités + breadcrumb', position: 'sidebar' },
    },
    {
      name: 'author',
      type: 'relationship',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      relationTo: 'authors' as any,
      required: true,
      hasMany: false,
      admin: { description: 'Auteur — byline + page auteur', position: 'sidebar' },
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
      name: 'readTime',
      type: 'text',
      admin: { description: 'Temps de lecture affiché (ex: "5 min") — sinon calcul auto côté frontend' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: { description: 'Image principale — hero article + OG fallback + cartes' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Mise en avant — homepage / tête de liste', position: 'sidebar' },
    },
    {
      name: 'tags',
      type: 'relationship',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      relationTo: 'tags' as any,
      hasMany: true,
      admin: { description: 'Tags — filtrage multi-critères + SEO mots-clés' },
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      required: false,
      admin: { description: 'Corps d’article — éditeur Lexical (H2/H3/H4, Bold, Italic, Link, UL/OL, Quote, Upload)' },
    },
    seoField(),
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        description: 'Date de publication effective (distinct de date calendaire)',
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
  ],
}

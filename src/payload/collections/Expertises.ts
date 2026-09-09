// RATIONALE: Collection Expertises = fiches métier détaillées (audit, fiscal, advisory...).
// Frontend: app/(frontend)/expertises/[slug] affiche hero (catégorie, H1 localisé avec titleAccent,
// CTA + stats + image) puis 6 sections éditables en groupes (pas en blocks) pour garantir
// un ordre sémantique fixe et un rendu SEO stable (H2/sous-services → approche → pourquoi → secteurs → cas → CTA).
// Chaque group réplique exactement les fields du block correspondant (expertiseSousServices, expertiseApproche, etc.)
// afin de factoriser le modèle tout en gardant l'édition directe sans indirection block.
// - title/slug localisés + hero.title localisé → H1 anglais distinct nécessaire pour /en/expertises/*.
// - hero stats/image → mapping 1:1 du Hero expertise frontend.
// - sousServices/approche/pourquoi/secteurs/cas/cta en groups → évite le page-builder libre, enforce la structure métier.
// - seo group (seoField) → generateMetadata spécifique expertise (Service schema.org).
// - versions drafts + autosave → relecture métier avant publication.
// - access read () => true → fiches publiques (ISR), écriture auth.
// SEED: { title:"Audit Financier", slug:"audit-financier", hero:{ title:"Audit Financier", titleAccent:"de confiance", ... }, sousServices:{ items:[...] } }

import type { CollectionConfig } from 'payload'

import { ExpertiseApprocheBlock } from '../blocks/expertiseApproche'
import { ExpertiseCasBlock } from '../blocks/expertiseCas'
import { ExpertiseCtaBlock } from '../blocks/expertiseCta'
import { ExpertisePourquoiBlock } from '../blocks/expertisePourquoi'
import { ExpertiseSecteursBlock } from '../blocks/expertiseSecteurs'
import { ExpertiseSousServicesBlock } from '../blocks/expertiseSousServices'
import { linkFieldWithName } from '../fields/link'
import { seoField } from '../fields/seo'

export const Expertises: CollectionConfig = {
  slug: 'expertises',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    description: 'Fiches expertises — structure fixe hero + 6 sections métier',
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
      admin: { description: 'Titre H1 de l’expertise — localisé' },
    },
    {
      name: 'slug',
      type: 'text',
      localized: true,
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'Slug URL localisé (ex: audit-financier / en/financial-audit) — H1 anglais',
      },
    },
    {
      name: 'hero',
      type: 'group',
      admin: { description: 'En-tête expertise — catégorie, H1, CTA, stats, visuel' },
      fields: [
        {
          name: 'category',
          type: 'text',
          localized: true,
          admin: { description: 'Sur-titre catégorie (ex: Expertise Comptable)' },
        },
        {
          name: 'categoryHref',
          type: 'text',
          admin: { description: 'Lien de la catégorie' },
        },
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true,
          admin: { description: 'Titre principal hero — localisé, alimente H1' },
        },
        {
          name: 'titleAccent',
          type: 'text',
          localized: true,
          admin: { description: 'Portion accentuée du titre (couleur primaire)' },
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
        },
        linkFieldWithName('ctaPrimary', { label: 'CTA Primaire' }),
        linkFieldWithName('ctaSecondary', { label: 'CTA Secondaire' }),
        {
          name: 'stats',
          type: 'array',
          admin: { description: 'Chiffres clés hero (value + label)' },
          fields: [
            {
              name: 'value',
              type: 'text',
              required: true,
              admin: { description: 'Ex: "20+", "500+"' },
            },
            {
              name: 'label',
              type: 'text',
              localized: true,
              required: true,
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Visuel hero (optionnel, fallback couleur unie)' },
        },
      ],
    },
    // Groupes métier — copie 1:1 des fields des blocks expertise* pour édition directe
    {
      name: 'sousServices',
      type: 'group',
      admin: { description: 'Sous-services — grille détaillée (copie ExpertiseSousServicesBlock)' },
      fields: [...ExpertiseSousServicesBlock.fields],
    },
    {
      name: 'approche',
      type: 'group',
      admin: { description: 'Approche méthodologique — stepper (copie ExpertiseApprocheBlock)' },
      fields: [...ExpertiseApprocheBlock.fields],
    },
    {
      name: 'pourquoi',
      type: 'group',
      admin: { description: 'Pourquoi nous choisir — arguments (copie ExpertisePourquoiBlock)' },
      fields: [...ExpertisePourquoiBlock.fields],
    },
    {
      name: 'secteurs',
      type: 'group',
      admin: { description: 'Secteurs adressés — bandeau + cartes (copie ExpertiseSecteursBlock)' },
      fields: [...ExpertiseSecteursBlock.fields],
    },
    {
      name: 'cas',
      type: 'group',
      admin: { description: 'Études de cas — contexte/approche/résultats (copie ExpertiseCasBlock)' },
      fields: [...ExpertiseCasBlock.fields],
    },
    {
      name: 'cta',
      type: 'group',
      admin: { description: 'CTA final expertise — trustPoints + contacts + stats (copie ExpertiseCtaBlock)' },
      fields: [...ExpertiseCtaBlock.fields],
    },
    seoField(),
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        description: 'Date de publication',
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
  ],
}

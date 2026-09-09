// RATIONALE: Collection Pages = page-builder générique du site CAAF.
// Frontend: app/(frontend)/[slug] + app/(frontend)/page.tsx résolvent Pages par slug localisé
// et rendent dynamiquement sections[] via RenderBlocks (mapping slug block → composant React).
// - title/slug localisés → H1 anglais distinct (slug en → /en/about vs /a-propos) + i18n routing.
// - template select → layout conditionnel (home/about/services/secteurs/.../actualites).
// - sections blocks → éditeur visuel complet réutilisant les 21 blocks génériques (hero, bento, FAQ...)
//   évite la duplication Pages/Expertises et permet le réordonnancement libre côté admin.
// - seo group (seoField) → generateMetadata() + opengraph/twitter/json-ld surcharge SeoDefaults.
// - versions drafts + autosave → workflow brouillon/publication sans casser le live.
// - access read () => true → pages publiées en accès public (SSG/ISR), écriture réservée auth.
// SEED: { title:"À propos", slug:"a-propos", template:"about", sections:[{blockType:"hero",...},{blockType:"timeline",...}] }

import type { CollectionConfig } from 'payload'

import { ActivitiesBlock } from '../blocks/activities'
import { BentoSecteursBlock } from '../blocks/bentoSecteurs'
import { BentoServicesBlock } from '../blocks/bentoServices'
import { CertificationsDetailBlock } from '../blocks/certificationsDetail'
import { ClientsGridBlock } from '../blocks/clientsGrid'
import { ContactFormBlock } from '../blocks/contactForm'
import { FaqBlock } from '../blocks/faq'
import { FinalCtaBlock } from '../blocks/finalCta'
import { HeroBlock } from '../blocks/hero'
import { LeadershipBlock } from '../blocks/leadership'
import { NewsletterBlock } from '../blocks/newsletter'
import { OfficesMapBlock } from '../blocks/officesMap'
import { ProofBannerBlock } from '../blocks/proofBanner'
import { QualityProcessBlock } from '../blocks/qualityProcess'
import { QuoteBlock } from '../blocks/quote'
import { RichTextBlock } from '../blocks/richText'
import { SectorsOverviewBlock } from '../blocks/sectorsOverview'
import { StatsSectionBlock } from '../blocks/stats'
import { TestimonialsBlock } from '../blocks/testimonials'
import { TimelineBlock } from '../blocks/timeline'
import { ValuesBlock } from '../blocks/values'
import { seoField } from '../fields/seo'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'template', 'updatedAt'],
    description: 'Pages génériques — page-builder à blocks (hero, secteurs, FAQ, contact...)',
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: {
      autosave: {
        interval: 2000,
      },
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
      admin: { description: 'Titre H1 — localisé (FR/EN)' },
    },
    {
      name: 'slug',
      type: 'text',
      localized: true,
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'Slug URL localisé (ex: a-propos / en/about) — alimente generateStaticParams + H1 anglais',
      },
    },
    {
      name: 'template',
      type: 'select',
      required: true,
      defaultValue: 'default',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Home', value: 'home' },
        { label: 'About', value: 'about' },
        { label: 'Services', value: 'services' },
        { label: 'Secteurs', value: 'secteurs' },
        { label: 'References', value: 'references' },
        { label: 'History', value: 'history' },
        { label: 'Certifications', value: 'certifications' },
        { label: 'Publications', value: 'publications' },
        { label: 'Carrieres', value: 'carrieres' },
        { label: 'Contact', value: 'contact' },
        { label: 'Actualites', value: 'actualites' },
      ],
      admin: { description: 'Gabarit de mise en page — conditionne header/nav et styles' },
    },
    {
      name: 'sections',
      type: 'blocks',
      admin: { description: 'Blocs de contenu — ordre libre, rendu via RenderBlocks côté frontend' },
      blocks: [
        HeroBlock,
        StatsSectionBlock,
        ActivitiesBlock,
        SectorsOverviewBlock,
        BentoServicesBlock,
        BentoSecteursBlock,
        ClientsGridBlock,
        TestimonialsBlock,
        TimelineBlock,
        ValuesBlock,
        LeadershipBlock,
        QuoteBlock,
        CertificationsDetailBlock,
        QualityProcessBlock,
        OfficesMapBlock,
        FaqBlock,
        ContactFormBlock,
        ProofBannerBlock,
        RichTextBlock,
        NewsletterBlock,
        FinalCtaBlock,
      ],
    },
    seoField(),
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        description: 'Date de publication — alimente sitemap / tri actualités',
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
  ],
}

// RATIONALE: Global SeoDefaults = valeurs SEO par défaut (fallback generateMetadata).
// Frontend: lib/seo.ts → generateMetadata() fusionne SeoDefaults + seoField par page (Pages/Expertises/Articles...).
// - defaultTitle localized required → title fallback si page sans seo.title (ex: CAAF SAS — Audit & Conseil).
// - titleSuffix text default " | CAAF SAS" → concaténation auto `${pageTitle}${suffix}` si titleSuffix non vide.
// - defaultDescription textarea localized required → meta description fallback (155c).
// - defaultOgImage upload→media → og:image / twitter:image fallback (sharp hero 1200x630).
// - twitterHandle text default @caaf_sas → meta twitter:site / creator.
// - siteUrl text required → base pour canonical, og:url, sitemap absolute URLs.
// - robots group {index default true, follow default true, disallow array{text}} → <meta robots> global + sitemap disallow.
// - canonicalBase text → préfixe canonique si page sans seo.canonicalURL (ex: https://caaf-sas.com).
// - hreflang array{locale, url} → <link rel="alternate" hreflang> global (FR/EN).
// - access read () => true → public ISR (metadata fetch), écriture auth.
// SEED: { defaultTitle:"CAAF SAS — Cabinet d'audit", titleSuffix:" | CAAF SAS", defaultDescription:"Cabinet d'audit...", twitterHandle:"@caaf_sas", siteUrl:"https://caaf-sas.com", robots:{index:true, follow:true} }

import type { GlobalConfig } from 'payload'

export const SeoDefaults: GlobalConfig = {
  slug: 'seo-defaults',
  access: {
    read: () => true,
  },
  admin: {
    group: 'SEO',
    description: 'SEO par défaut — fallback generateMetadata (titre, description, robots, hreflang)',
  },
  fields: [
    {
      name: 'defaultTitle',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Titre par défaut — localisé, requis (fallback si page sans titre SEO)' },
    },
    {
      name: 'titleSuffix',
      type: 'text',
      defaultValue: ' | CAAF SAS',
      admin: { description: 'Suffixe titre — concaténé après chaque page title (défaut " | CAAF SAS")' },
    },
    {
      name: 'defaultDescription',
      type: 'textarea',
      localized: true,
      required: true,
      admin: { description: 'Description par défaut — localisée, requise (155 caractères max)' },
    },
    {
      name: 'defaultOgImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Image OG par défaut — og:image / twitter:image fallback (1200x630)' },
    },
    {
      name: 'twitterHandle',
      type: 'text',
      defaultValue: '@caaf_sas',
      admin: { description: 'Handle Twitter/X — défaut @caaf_sas (meta twitter:site)' },
    },
    {
      name: 'siteUrl',
      type: 'text',
      required: true,
      admin: { description: 'URL du site — requise, base canonical/og:url/sitemap (ex: https://caaf-sas.com)' },
    },
    {
      name: 'robots',
      type: 'group',
      label: 'Robots',
      admin: { description: 'Directives robots globales' },
      fields: [
        {
          name: 'index',
          type: 'checkbox',
          defaultValue: true,
          admin: { description: 'Index — défaut activé (noindex si décoché)' },
        },
        {
          name: 'follow',
          type: 'checkbox',
          defaultValue: true,
          admin: { description: 'Follow — défaut activé (nofollow si décoché)' },
        },
        {
          name: 'disallow',
          type: 'array',
          label: 'Disallow',
          admin: { description: 'Chemins interdits — robots.txt Disallow (ex: /admin)' },
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
              admin: { description: 'Chemin — ex: /admin, /api' },
            },
          ],
        },
      ],
    },
    {
      name: 'canonicalBase',
      type: 'text',
      admin: { description: 'Base canonique — préfixe si page sans canonicalURL (ex: https://caaf-sas.com)' },
    },
    {
      name: 'hreflang',
      type: 'array',
      label: 'Hreflang',
      admin: { description: 'Alternatives linguistiques — <link rel="alternate" hreflang>' },
      fields: [
        {
          name: 'locale',
          type: 'text',
          required: true,
          admin: { description: 'Locale — ex: fr, en, fr-CD' },
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          admin: { description: 'URL — ex: https://caaf-sas.com/fr' },
        },
      ],
    },
  ],
}

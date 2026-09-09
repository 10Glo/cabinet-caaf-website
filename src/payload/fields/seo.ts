// RATIONALE: SEO group réutilisable pour Pages, Expertises, Articles, Publications.
// Correspond à frontend generateMetadata() + opengraph + robots + json-ld. Surcharge SeoDefaults.
// SEED: { title:"Audit Financier | CAAF SAS", description:"...", canonicalURL:"https://caaf-sas.com/expertises/audit-financier", noIndex:false }

import type { Field, GroupField } from 'payload'

export const seoField = (overrides: Partial<GroupField> = {}): Field => {
  const field: GroupField = {
    name: 'seo',
    type: 'group',
    admin: { description: 'Optimisation SEO — surcharge les valeurs globales SeoDefaults' },
    fields: [
      {
        name: 'title',
        type: 'text',
        localized: true,
        admin: { description: '60 caractères max' },
      },
      {
        name: 'description',
        type: 'textarea',
        localized: true,
        admin: { description: '155 caractères max' },
      },
      {
        name: 'keywords',
        type: 'text',
        localized: true,
        admin: { description: 'Mots-clés séparés par virgules (optionnel)' },
      },
      {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
        admin: { description: 'Image OG fallback si ogImage vide' },
      },
      {
        name: 'canonicalURL',
        type: 'text',
        admin: { description: 'URL canonique complète, ex: https://caaf-sas.com/expertises/audit-financier' },
      },
      {
        type: 'row',
        fields: [
          {
            name: 'noIndex',
            type: 'checkbox',
            label: 'NoIndex',
            defaultValue: false,
            admin: { width: '50%' },
          },
          {
            name: 'noFollow',
            type: 'checkbox',
            label: 'NoFollow',
            defaultValue: false,
            admin: { width: '50%' },
          },
        ],
      },
      {
        name: 'ogTitle',
        type: 'text',
        localized: true,
        label: 'OG Title',
      },
      {
        name: 'ogDescription',
        type: 'textarea',
        localized: true,
        label: 'OG Description',
      },
      {
        name: 'ogImage',
        type: 'upload',
        relationTo: 'media',
        label: 'OG Image',
      },
      {
        name: 'twitterTitle',
        type: 'text',
        localized: true,
        label: 'Twitter Title',
      },
      {
        name: 'twitterDescription',
        type: 'textarea',
        localized: true,
        label: 'Twitter Description',
      },
      {
        name: 'twitterImage',
        type: 'upload',
        relationTo: 'media',
        label: 'Twitter Image',
      },
      {
        name: 'structuredData',
        type: 'json',
        label: 'Structured Data (JSON-LD)',
        admin: { description: 'JSON-LD additionnel. Laisse vide pour génération auto (Article→BlogPosting, Service, FAQPage).' },
      },
    ],
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((overrides as any).name) (field as any).name = (overrides as any).name
  if (overrides.label) (field as Record<string, unknown>).label = overrides.label
  if (overrides.admin) field.admin = { ...field.admin, ...overrides.admin }

  return field
}

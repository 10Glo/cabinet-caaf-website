// RATIONALE: Global Footer = pied de page + colonnes nav + social + bureaux + newsletter.
// Frontend: <Footer /> (Server Component) dans layout.tsx via payload.findGlobal({slug:'footer'}).
// - description textarea localized → tagline sous logo (FR/EN).
// - columns array {title localized, links[]{label localized, href, description?}} → 2-4 colonnes nav (Services, Secteurs, Société...).
// - social array {label, href, icon} → icônes Lucide/social (label a11y, href externe, icon="linkedin").
// - offices relationship→offices hasMany → réutilise collection Offices (hasMany) pour adresses / téléphones / carte.
// - bottomText textarea localized → copyright / mention légale ligne basse (ex: © 2026 CAAF SAS).
// - credentials array{text localized} → badges conformité (OHADA / ISA / IFRS) affichés en ligne.
// - newsletter group {title/description/placeholder/buttonLabel localized} → bloc abonnement footer.
// - access read () => true → public ISR, écriture auth.
// SEED: { description:"Cabinet d'audit depuis 1968", columns:[{title:"Services", links:[{label:"Audit", href:"/expertises/audit-financier"}]}], social:[{label:"LinkedIn", href:"https://linkedin.com/company/caaf", icon:"linkedin"}], bottomText:"© 2026 CAAF SAS — OHADA", credentials:[{text:"OHADA"},{text:"ISA"},{text:"IFRS"}] }

import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Site',
    description: 'Pied de page — colonnes, réseaux, bureaux, newsletter',
  },
  fields: [
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      admin: { description: 'Texte sous logo — localisé (tagline footer)' },
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Colonnes',
      admin: { description: 'Colonnes de navigation — 2 à 4 colonnes (ex: Services, Secteurs)' },
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true,
          admin: { description: 'Titre de colonne — localisé, requis' },
        },
        {
          name: 'links',
          type: 'array',
          admin: { description: 'Liens de la colonne' },
          fields: [
            {
              name: 'label',
              type: 'text',
              localized: true,
              required: true,
              admin: { description: 'Libellé — localisé, requis' },
            },
            {
              name: 'href',
              type: 'text',
              required: true,
              admin: { description: 'URL — requis (ex: /expertises/audit-financier)' },
            },
            {
              name: 'description',
              type: 'textarea',
              localized: true,
              admin: { description: 'Description courte — localisée, optionnelle' },
            },
          ],
        },
      ],
    },
    {
      name: 'social',
      type: 'array',
      label: 'Réseaux sociaux',
      admin: { description: 'Liens sociaux — footer + schema.org sameAs' },
      fields: [
        {
          name: 'label',
          type: 'text',
          admin: { description: 'Nom — a11y (ex: LinkedIn)' },
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          admin: { description: 'URL — requis (ex: https://linkedin.com/company/caaf)' },
        },
        {
          name: 'icon',
          type: 'text',
          admin: { description: 'Icône — nom Lucide/SimpleIcons (ex: linkedin, twitter)' },
        },
      ],
    },
    {
      name: 'offices',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: 'relationship' as any,
      relationTo: 'offices' as any,
      hasMany: true,
      admin: { description: 'Bureaux affichés dans le footer — relation hasMany → offices' },
    } as any,
    {
      name: 'bottomText',
      type: 'textarea',
      localized: true,
      admin: { description: 'Texte bandeau bas — localisé (ex: © 2026 CAAF SAS — Tous droits réservés)' },
    },
    {
      name: 'credentials',
      type: 'array',
      label: 'Certifications',
      admin: { description: 'Badges conformité — défaut OHADA / ISA / IFRS' },
      fields: [
        {
          name: 'text',
          type: 'text',
          localized: true,
          required: true,
          admin: { description: 'Texte badge — localisé (ex: OHADA)' },
        },
      ],
    },
    {
      name: 'newsletter',
      type: 'group',
      label: 'Newsletter',
      admin: { description: 'Bloc abonnement footer' },
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
          admin: { description: 'Titre — localisé (ex: Restez informé)' },
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
          admin: { description: 'Description — localisée' },
        },
        {
          name: 'placeholder',
          type: 'text',
          localized: true,
          admin: { description: 'Placeholder input — localisé (ex: Votre email)' },
        },
        {
          name: 'buttonLabel',
          type: 'text',
          localized: true,
          admin: { description: 'Libellé bouton — localisé (ex: S’abonner)' },
        },
      ],
    },
  ],
}

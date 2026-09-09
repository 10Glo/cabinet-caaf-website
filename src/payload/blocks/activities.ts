// RATIONALE: Activities — grille d’activités numérotées (audit/fiscal/advisory/diligence). Mapping strict frontend, pas de Framer.
import type { Block } from 'payload'

export const ActivitiesBlock: Block = {
  slug: 'activities',
  interfaceName: 'ActivitiesBlock',
  labels: {
    singular: 'Activities',
    plural: 'Activities',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      localized: true,
    },
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      admin: { description: 'Cartes activités (numéro + visuel + lien)' },
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
          admin: { description: 'Ex: "01", "02"' },
        },
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          admin: { description: 'Lien vers la page détail (ex: /expertises/audit)' },
        },
        {
          name: 'linkLabel',
          type: 'text',
          localized: true,
          admin: { description: 'Label du lien (ex: Découvrir)' },
        },
        {
          name: 'visual',
          type: 'select',
          options: [
            { label: 'Audit', value: 'audit' },
            { label: 'Fiscal', value: 'fiscal' },
            { label: 'Advisory', value: 'advisory' },
            { label: 'Diligence', value: 'diligence' },
          ],
          admin: { description: 'Variante visuelle / illustration' },
        },
      ],
    },
  ],
}

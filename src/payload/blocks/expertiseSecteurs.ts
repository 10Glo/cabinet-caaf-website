// RATIONALE: ExpertiseSecteurs — secteurs adressés avec bandeau strip + grille de cartes (tags, featured). Mapping 1:1 frontend sans Framer.
import type { Block } from 'payload'

export const ExpertiseSecteursBlock: Block = {
  slug: 'expertiseSecteurs',
  interfaceName: 'ExpertiseSecteursBlock',
  labels: {
    singular: 'Expertise Secteurs',
    plural: 'Expertise Secteurs',
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
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'stripText',
      type: 'text',
      localized: true,
      admin: { description: 'Texte du bandeau défilant' },
    },
    {
      name: 'stripHighlight',
      type: 'text',
      localized: true,
      admin: { description: 'Portion mise en évidence dans le bandeau' },
    },
    {
      name: 'stripCta',
      type: 'text',
      localized: true,
      admin: { description: 'CTA du bandeau' },
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      admin: { description: 'Secteurs (icône + titre + tags + featured)' },
      fields: [
        {
          name: 'icon',
          type: 'text',
          admin: { description: 'Clé d’icône lucide-react' },
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
          name: 'tags',
          type: 'array',
          admin: { description: 'Tags du secteur' },
          fields: [
            {
              name: 'text',
              type: 'text',
              localized: true,
              required: true,
            },
          ],
        },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
          admin: { description: 'Mise en avant du secteur' },
        },
      ],
    },
  ],
}

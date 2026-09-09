// RATIONALE: Timeline — frise chronologique verticale (eyebrow/title + items year/title/text/image). Données brutes, pas de Framer.
import type { Block } from 'payload'

export const TimelineBlock: Block = {
  slug: 'timeline',
  interfaceName: 'TimelineBlock',
  labels: {
    singular: 'Timeline',
    plural: 'Timelines',
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
      admin: { description: 'Étapes de la frise (année + titre + texte + visuel)' },
      fields: [
        {
          name: 'year',
          type: 'text',
          required: true,
          admin: { description: 'Ex: "2005", "2018"' },
        },
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'text',
          type: 'textarea',
          localized: true,
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Visuel illustrant l’étape (optionnel)' },
        },
      ],
    },
  ],
}

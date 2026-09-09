// RATIONALE: QualityProcess — démarche qualité en étapes (eyebrow/title/description + steps title/description). Données brutes, pas de Framer.
import type { Block } from 'payload'

export const QualityProcessBlock: Block = {
  slug: 'qualityProcess',
  interfaceName: 'QualityProcessBlock',
  labels: {
    singular: 'Quality Process',
    plural: 'Quality Processes',
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
      admin: { description: 'Description introductive de la démarche qualité' },
    },
    {
      name: 'steps',
      type: 'array',
      required: true,
      admin: { description: 'Étapes du processus qualité' },
      fields: [
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
      ],
    },
  ],
}

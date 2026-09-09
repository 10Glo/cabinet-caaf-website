// RATIONALE: StatsSection — bande de chiffres clés réutilisable (eyebrow/title + items value/label). Données brutes, pas de Framer.
import type { Block } from 'payload'

export const StatsSectionBlock: Block = {
  slug: 'statsSection',
  interfaceName: 'StatsSectionBlock',
  labels: {
    singular: 'Stats Section',
    plural: 'Stats Sections',
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
      admin: { description: 'Liste des statistiques value + label' },
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: { description: 'Valeur affichée (ex: "15+", "98%")' },
        },
        {
          name: 'label',
          type: 'text',
          localized: true,
          required: true,
        },
      ],
    },
  ],
}

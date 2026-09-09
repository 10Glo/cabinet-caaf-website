// RATIONALE: Values — grille des valeurs fondamentales numérotées (eyebrow/title + items number/icon/title/description). Données brutes, pas de Framer.
import type { Block } from 'payload'

export const ValuesBlock: Block = {
  slug: 'values',
  interfaceName: 'ValuesBlock',
  labels: {
    singular: 'Values',
    plural: 'Values',
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
      admin: { description: 'Valeurs (numéro + icône + titre + description)' },
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
          admin: { description: 'Ex: "01", "02"' },
        },
        {
          name: 'icon',
          type: 'text',
          admin: { description: 'Clé d’icône lucide-react (ex: shield, heart)' },
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
      ],
    },
  ],
}

// RATIONALE: BentoSecteurs — bento secteurs avec tags et accent. Mapping strict frontend sans logique d’animation.
import type { Block } from 'payload'

export const BentoSecteursBlock: Block = {
  slug: 'bentoSecteurs',
  interfaceName: 'BentoSecteursBlock',
  labels: {
    singular: 'Bento Secteurs',
    plural: 'Bento Secteurs',
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      admin: { description: 'Cartes secteurs bento (icône + tags + accent)' },
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
        {
          name: 'href',
          type: 'text',
          admin: { description: 'Lien vers la page secteur' },
        },
        {
          name: 'icon',
          type: 'text',
          admin: { description: 'Clé d’icône lucide-react' },
        },
        {
          name: 'tags',
          type: 'array',
          admin: { description: 'Tags affichés en footer de carte' },
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
          name: 'accent',
          type: 'checkbox',
          defaultValue: false,
          admin: { description: 'Met en avant la carte (style accentué)' },
        },
      ],
    },
  ],
}

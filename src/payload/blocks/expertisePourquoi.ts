// RATIONALE: ExpertisePourquoi — grille d’arguments différenciants (icône + titre + description). Bloc simple sans Framer.
import type { Block } from 'payload'

export const ExpertisePourquoiBlock: Block = {
  slug: 'expertisePourquoi',
  interfaceName: 'ExpertisePourquoiBlock',
  labels: {
    singular: 'Expertise Pourquoi',
    plural: 'Expertise Pourquoi',
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
      name: 'items',
      type: 'array',
      required: true,
      admin: { description: 'Arguments différenciants (icône + titre + description)' },
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
      ],
    },
  ],
}

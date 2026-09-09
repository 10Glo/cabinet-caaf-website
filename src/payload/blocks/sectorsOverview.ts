// RATIONALE: SectorsOverview — présentation des secteurs d’intervention avec highlights. Données brutes strictement issues du frontend, pas de Framer.
import type { Block } from 'payload'

export const SectorsOverviewBlock: Block = {
  slug: 'sectorsOverview',
  interfaceName: 'SectorsOverviewBlock',
  labels: {
    singular: 'Sectors Overview',
    plural: 'Sectors Overviews',
  },
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
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      admin: { description: 'Cartes secteurs (nom + highlights + lien + icône)' },
      fields: [
        {
          name: 'name',
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
          name: 'highlights',
          type: 'array',
          admin: { description: 'Points clés du secteur' },
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
          name: 'href',
          type: 'text',
          admin: { description: 'Lien vers la page secteur' },
        },
        {
          name: 'icon',
          type: 'text',
          admin: { description: 'Nom lucide-react ou clé d’icône (ex: building-2)' },
        },
      ],
    },
  ],
}

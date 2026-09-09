// RATIONALE: ClientsGrid — grille de logos clients avec featured. Strict frontend, upload media pour logos, pas de Framer.
import type { Block } from 'payload'

export const ClientsGridBlock: Block = {
  slug: 'clientsGrid',
  interfaceName: 'ClientsGridBlock',
  labels: {
    singular: 'Clients Grid',
    plural: 'Clients Grids',
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
      name: 'clients',
      type: 'array',
      required: true,
      admin: { description: 'Logos clients (featured mis en avant)' },
      fields: [
        {
          name: 'name',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'sector',
          type: 'text',
          localized: true,
          admin: { description: 'Secteur d’activité affiché' },
        },
        {
          name: 'sectorType',
          type: 'text',
          localized: true,
          admin: { description: 'Type/catégorie de secteur (filtre éventuel)' },
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Logo du client (svg/png)' },
        },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
          admin: { description: 'Mise en avant dans la grille' },
        },
      ],
    },
  ],
}

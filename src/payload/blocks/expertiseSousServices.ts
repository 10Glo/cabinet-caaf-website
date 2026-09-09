// RATIONALE: ExpertiseSousServices — grille détaillée des sous-services par expertise (id/icon/title/subtitle/description + livrables). Mapping 1:1 frontend sans Framer.
import type { Block } from 'payload'

export const ExpertiseSousServicesBlock: Block = {
  slug: 'expertiseSousServices',
  interfaceName: 'ExpertiseSousServicesBlock',
  labels: {
    singular: 'Expertise Sous-Services',
    plural: 'Expertise Sous-Services',
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
      name: 'titleAccent',
      type: 'text',
      localized: true,
      admin: { description: 'Portion accentuée du titre (couleur primaire)' },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'sectionId',
      type: 'text',
      admin: { description: 'Ancre HTML de la section (ex: sous-services)' },
    },
    {
      name: 'headerLabel',
      type: 'text',
      localized: true,
      admin: { description: 'Label d’en-tête de la grille' },
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      admin: { description: 'Sous-services (icône + titre + livrables)' },
      fields: [
        {
          name: 'id',
          type: 'text',
          required: true,
          admin: { description: 'Identifiant unique (slug court)' },
        },
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
          name: 'subtitle',
          type: 'text',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
          required: true,
        },
        {
          name: 'deliverables',
          type: 'array',
          admin: { description: 'Liste des livrables' },
          fields: [
            {
              name: 'text',
              type: 'text',
              localized: true,
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

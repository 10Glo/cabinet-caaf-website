// RATIONALE: BentoServices — grille bento des catégories de services avec tailles (large/medium/small) et liens imbriqués. Pas de Framer.
import type { Block } from 'payload'

export const BentoServicesBlock: Block = {
  slug: 'bentoServices',
  interfaceName: 'BentoServicesBlock',
  labels: {
    singular: 'Bento Services',
    plural: 'Bento Services',
  },
  fields: [
    {
      name: 'categories',
      type: 'array',
      required: true,
      admin: { description: 'Catégories bento (numéro + tag + taille + liens)' },
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
          admin: { description: 'Ex: "01"' },
        },
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'tag',
          type: 'text',
          localized: true,
          admin: { description: 'Tag court au-dessus du titre' },
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
          required: true,
        },
        {
          name: 'size',
          type: 'select',
          required: true,
          defaultValue: 'medium',
          options: [
            { label: 'Large', value: 'large' },
            { label: 'Medium', value: 'medium' },
            { label: 'Small', value: 'small' },
          ],
          admin: { description: 'Taille de la carte dans la grille bento' },
        },
        {
          name: 'links',
          type: 'array',
          admin: { description: 'Liens / sous-services de la catégorie' },
          fields: [
            {
              name: 'title',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              admin: { description: 'URL ou chemin interne' },
            },
            {
              name: 'desc',
              type: 'textarea',
              localized: true,
              admin: { description: 'Description courte du lien' },
            },
          ],
        },
      ],
    },
  ],
}

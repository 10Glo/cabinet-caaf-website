// RATIONALE: Testimonials — grille de témoignages clients (eyebrow/title + items quote/author/role/company/avatar). Données brutes, pas de Framer.
import type { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  interfaceName: 'TestimonialsBlock',
  labels: {
    singular: 'Testimonials',
    plural: 'Testimonials',
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
      admin: { description: 'Témoignages clients (citation + auteur + avatar)' },
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          localized: true,
          required: true,
        },
        {
          name: 'author',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          localized: true,
        },
        {
          name: 'company',
          type: 'text',
          localized: true,
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Photo de l’auteur' },
        },
      ],
    },
  ],
}

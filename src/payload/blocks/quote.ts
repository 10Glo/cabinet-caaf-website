// RATIONALE: Quote — bloc citation mise en avant (quote/author/role/image). Données brutes, pas de Framer.
import type { Block } from 'payload'

export const QuoteBlock: Block = {
  slug: 'quote',
  interfaceName: 'QuoteBlock',
  labels: {
    singular: 'Quote',
    plural: 'Quotes',
  },
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Portrait ou visuel associé à la citation (optionnel)' },
    },
  ],
}

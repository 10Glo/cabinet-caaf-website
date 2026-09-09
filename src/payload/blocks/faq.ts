// RATIONALE: FAQ — liste de questions/réponses groupées par catégorie (accordéon frontend). Réponse en Lexical richText pour liens/listes/gras.
import type { Block } from 'payload'

export const FaqBlock: Block = {
  slug: 'faq',
  interfaceName: 'FaqBlock',
  labels: {
    singular: 'FAQ',
    plural: 'FAQs',
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
      admin: { description: 'Questions / réponses (catégorie + question + réponse Lexical)' },
      fields: [
        {
          name: 'category',
          type: 'text',
          localized: true,
          admin: { description: 'Catégorie de la question (ex: Comptabilité)' },
        },
        {
          name: 'question',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'answer',
          type: 'richText',
          localized: true,
          required: true,
        },
      ],
    },
  ],
}

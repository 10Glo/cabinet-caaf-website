// RATIONALE: Newsletter — bloc inscription newsletter (eyebrow/title/description + placeholder/button/disclaimer). Soumission gérée côté frontend/API.
import type { Block } from 'payload'

export const NewsletterBlock: Block = {
  slug: 'newsletter',
  interfaceName: 'NewsletterBlock',
  labels: {
    singular: 'Newsletter',
    plural: 'Newsletters',
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
      name: 'placeholder',
      type: 'text',
      localized: true,
      admin: { description: 'Placeholder du champ email' },
    },
    {
      name: 'buttonLabel',
      type: 'text',
      localized: true,
      admin: { description: 'Label du bouton d’inscription' },
    },
    {
      name: 'disclaimer',
      type: 'textarea',
      localized: true,
      admin: { description: 'Texte légal / RGPD sous le formulaire' },
    },
  ],
}

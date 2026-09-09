// RATIONALE: ContactForm — bloc formulaire de contact (eyebrow/title/description + textes RGPD/labels/succès). Soumission gérée côté frontend/API, pas de logique serveur ici.
import type { Block } from 'payload'

export const ContactFormBlock: Block = {
  slug: 'contactForm',
  interfaceName: 'ContactFormBlock',
  labels: {
    singular: 'Contact Form',
    plural: 'Contact Forms',
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
      name: 'rgpdText',
      type: 'textarea',
      localized: true,
      admin: { description: 'Texte RGPD / consentement affiché près du bouton' },
    },
    {
      name: 'submitLabel',
      type: 'text',
      localized: true,
      admin: { description: 'Label du bouton d’envoi' },
    },
    {
      name: 'successMessage',
      type: 'textarea',
      localized: true,
      admin: { description: 'Message affiché après envoi réussi' },
    },
  ],
}

// RATIONALE: CertificationsDetail — détail certifications (eyebrow/title + items code/fullName/description/scope/implications/icon/doc). Données brutes, pas de Framer.
import type { Block } from 'payload'

export const CertificationsDetailBlock: Block = {
  slug: 'certificationsDetail',
  interfaceName: 'CertificationsDetailBlock',
  labels: {
    singular: 'Certifications Detail',
    plural: 'Certifications Details',
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
      admin: { description: 'Certifications détaillées (code + intitulé + portée + implications)' },
      fields: [
        {
          name: 'code',
          type: 'text',
          required: true,
          admin: { description: 'Code court (ex: "ISO 9001", "QUALIOPI")' },
        },
        {
          name: 'fullName',
          type: 'text',
          localized: true,
          required: true,
          admin: { description: 'Intitulé complet de la certification' },
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
          required: true,
        },
        {
          name: 'scope',
          type: 'array',
          admin: { description: 'Périmètre / portée de la certification' },
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
          name: 'implications',
          type: 'array',
          admin: { description: 'Implications opérationnelles pour le client' },
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
          name: 'icon',
          type: 'text',
          admin: { description: 'Clé d’icône lucide-react' },
        },
        {
          name: 'doc',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Document justificatif (optionnel)' },
        },
      ],
    },
  ],
}

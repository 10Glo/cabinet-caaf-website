// RATIONALE: ExpertiseCas — études de cas par secteur (contexte, approche, résultats, citation). Données brutes sans Framer.
import type { Block } from 'payload'

export const ExpertiseCasBlock: Block = {
  slug: 'expertiseCas',
  interfaceName: 'ExpertiseCasBlock',
  labels: {
    singular: 'Expertise Cas',
    plural: 'Expertise Cas',
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
      name: 'sectionCta',
      type: 'text',
      localized: true,
      admin: { description: 'CTA de section (ex: Voir tous les cas)' },
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      admin: { description: 'Études de cas' },
      fields: [
        {
          name: 'id',
          type: 'text',
          required: true,
          admin: { description: 'Identifiant unique du cas (slug court)' },
        },
        {
          name: 'sector',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'sectorIcon',
          type: 'text',
          admin: { description: 'Clé d’icône lucide-react du secteur' },
        },
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'location',
          type: 'text',
          localized: true,
          admin: { description: 'Localisation du cas' },
        },
        {
          name: 'context',
          type: 'textarea',
          localized: true,
          required: true,
        },
        {
          name: 'approach',
          type: 'array',
          admin: { description: 'Étapes d’approche' },
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
          name: 'results',
          type: 'array',
          admin: { description: 'Résultats obtenus (icône + label)' },
          fields: [
            {
              name: 'icon',
              type: 'text',
              admin: { description: 'Clé d’icône lucide-react' },
            },
            {
              name: 'label',
              type: 'text',
              localized: true,
              required: true,
            },
          ],
        },
        {
          name: 'quote',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'quoteAuthor',
          type: 'text',
          localized: true,
          admin: { description: 'Auteur de la citation' },
        },
      ],
    },
  ],
}

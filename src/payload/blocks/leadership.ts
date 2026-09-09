// RATIONALE: Leadership — grille équipe dirigeante (eyebrow/title + members name/role/bio/image/linkedin). Données brutes, pas de Framer.
import type { Block } from 'payload'

export const LeadershipBlock: Block = {
  slug: 'leadership',
  interfaceName: 'LeadershipBlock',
  labels: {
    singular: 'Leadership',
    plural: 'Leadership',
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
      name: 'members',
      type: 'array',
      required: true,
      admin: { description: 'Membres de l’équipe dirigeante' },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          admin: { description: 'Nom complet (non localisé)' },
        },
        {
          name: 'role',
          type: 'text',
          localized: true,
          required: true,
          admin: { description: 'Fonction / titre' },
        },
        {
          name: 'bio',
          type: 'textarea',
          localized: true,
          admin: { description: 'Biographie courte' },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Photo du membre' },
        },
        {
          name: 'linkedin',
          type: 'text',
          admin: { description: 'URL profil LinkedIn' },
        },
      ],
    },
  ],
}

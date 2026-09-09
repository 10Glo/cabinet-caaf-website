// RATIONALE: Hero homepage — mapping 1:1 du frontend (eyebrow/title/titleAccent/description/CTA/stats/certs/background). Pas de Framer, données brutes uniquement.
import type { Block } from 'payload'

import { linkFieldWithName } from '../fields/link'

export const HeroBlock: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  labels: {
    singular: 'Hero',
    plural: 'Heros',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      localized: true,
      admin: { description: 'Sur-titre au-dessus du titre principal' },
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
    linkFieldWithName('ctaPrimary', {
      label: 'CTA Primaire',
    }),
    linkFieldWithName('ctaSecondary', {
      label: 'CTA Secondaire',
    }),
    {
      name: 'stats',
      type: 'array',
      admin: { description: 'Chiffres clés affichés sous les CTA' },
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: { description: 'Ex: "20+", "500+"' },
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
      name: 'certs',
      type: 'array',
      admin: { description: 'Badges certifications affichés en bas du Hero' },
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
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Image de fond plein écran' },
    },
    {
      name: 'overlayOpacity',
      type: 'number',
      min: 0,
      max: 100,
      defaultValue: 70,
      admin: { description: 'Opacité de l’overlay sur l’image (0-100)', step: 1 },
    },
    {
      name: 'category',
      type: 'text',
      localized: true,
      admin: { description: 'Label catégorie (ex: Expertise Comptable)' },
    },
    {
      name: 'categoryHref',
      type: 'text',
      admin: { description: 'Lien de la catégorie' },
    },
  ],
}

// RATIONALE: ExpertiseCta — CTA expertise avec points de confiance, liens, options de contact et stats. Watermark décoratif en lucide-react.
import type { Block } from 'payload'

import { linkField } from '../fields/link'

export const ExpertiseCtaBlock: Block = {
  slug: 'expertiseCta',
  interfaceName: 'ExpertiseCtaBlock',
  labels: {
    singular: 'Expertise CTA',
    plural: 'Expertise CTAs',
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
    {
      name: 'trustPoints',
      type: 'array',
      admin: { description: 'Points de réassurance' },
      fields: [
        {
          name: 'text',
          type: 'text',
          localized: true,
          required: true,
        },
      ],
    },
    linkField({ overrides: { name: 'primaryCta' } }),
    linkField({ overrides: { name: 'secondaryCta' } }),
    {
      name: 'watermarkIcon',
      type: 'text',
      admin: { description: 'Clé d’icône lucide-react en filigrane' },
    },
    {
      name: 'contactOptions',
      type: 'array',
      admin: { description: 'Options de contact (icône + titre + lien + CTA)' },
      fields: [
        {
          name: 'icon',
          type: 'text',
          admin: { description: 'Clé d’icône lucide-react' },
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
          name: 'href',
          type: 'text',
          admin: { description: 'Lien de l’option de contact (tel:, mailto: ou URL)' },
        },
        linkField({ overrides: { name: 'cta' } }),
        {
          name: 'primary',
          type: 'checkbox',
          defaultValue: false,
          admin: { description: 'Mise en avant de l’option' },
        },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      admin: { description: 'Chiffres clés' },
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: { description: 'Valeur affichée (ex: "15+", "98%")' },
        },
        {
          name: 'label',
          type: 'text',
          localized: true,
          required: true,
        },
      ],
    },
  ],
}

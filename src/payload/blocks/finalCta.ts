// RATIONALE: FinalCta — CTA final global (variante allégée d’ExpertiseCta sans watermark/contactOptions) avec trustPoints, liens et stats.
import type { Block } from 'payload'

import { linkField } from '../fields/link'

export const FinalCtaBlock: Block = {
  slug: 'finalCta',
  interfaceName: 'FinalCtaBlock',
  labels: {
    singular: 'Final CTA',
    plural: 'Final CTAs',
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

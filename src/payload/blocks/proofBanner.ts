// RATIONALE: ProofBanner — bande de preuves chiffrées (stats value + label localized). Données brutes, pas de Framer.
import type { Block } from 'payload'

export const ProofBannerBlock: Block = {
  slug: 'proofBanner',
  interfaceName: 'ProofBannerBlock',
  labels: {
    singular: 'Proof Banner',
    plural: 'Proof Banners',
  },
  fields: [
    {
      name: 'stats',
      type: 'array',
      required: true,
      admin: { description: 'Statistiques value + label' },
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: { description: 'Valeur affichée (ex: "500+", "98%")' },
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

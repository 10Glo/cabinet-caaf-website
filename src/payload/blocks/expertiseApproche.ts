// RATIONALE: ExpertiseApproche — timeline/stepper méthodologique (05 étapes) avec icônes et détails par étape. Mapping 1:1 frontend sans Framer.
import type { Block } from 'payload'

export const ExpertiseApprocheBlock: Block = {
  slug: 'expertiseApproche',
  interfaceName: 'ExpertiseApprocheBlock',
  labels: {
    singular: 'Expertise Approche',
    plural: 'Expertise Approches',
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
      name: 'totalSteps',
      type: 'text',
      defaultValue: '05',
      admin: { description: 'Nombre total d’étapes affiché (ex: "05")' },
    },
    {
      name: 'stepLabel',
      type: 'text',
      localized: true,
      admin: { description: 'Label générique pour "Étape" / "Step"' },
    },
    {
      name: 'steps',
      type: 'array',
      admin: { description: 'Étapes de la méthodologie' },
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
          admin: { description: 'Numéro d’étape (ex: "01")' },
        },
        {
          name: 'id',
          type: 'text',
          required: true,
          admin: { description: 'Identifiant unique de l’étape (slug court)' },
        },
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
          required: true,
        },
        {
          name: 'details',
          type: 'array',
          admin: { description: 'Points de détail de l’étape' },
          fields: [
            {
              name: 'text',
              type: 'text',
              localized: true,
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

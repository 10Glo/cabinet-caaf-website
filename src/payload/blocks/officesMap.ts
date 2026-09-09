// RATIONALE: OfficesMap — carte des bureaux CAAF avec centrage/zoom et détails par bureau (adresse multi-lignes, contact, horaires, coords). Données brutes, pas de Framer.
import type { Block } from 'payload'

export const OfficesMapBlock: Block = {
  slug: 'officesMap',
  interfaceName: 'OfficesMapBlock',
  labels: {
    singular: 'Offices Map',
    plural: 'Offices Maps',
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
      name: 'mapCenter',
      type: 'group',
      admin: { description: 'Centre de la carte' },
      fields: [
        { name: 'lng', type: 'number', required: true, admin: { step: 0.000001 } },
        { name: 'lat', type: 'number', required: true, admin: { step: 0.000001 } },
      ],
    },
    {
      name: 'zoom',
      type: 'number',
      defaultValue: 5.2,
      admin: { description: 'Niveau de zoom de la carte', step: 0.1 },
    },
    {
      name: 'officeDetails',
      type: 'array',
      admin: { description: 'Liste des bureaux (ville + adresse + contact + horaires + coords)' },
      fields: [
        {
          name: 'city',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'type',
          type: 'text',
          localized: true,
          admin: { description: 'Type de bureau (ex: Bureau Kinshasa, Bureau Lubumbashi)' },
        },
        {
          name: 'address',
          type: 'array',
          admin: { description: 'Lignes d’adresse' },
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
          name: 'phone',
          type: 'text',
          admin: { description: 'Numéro de téléphone' },
        },
        {
          name: 'email',
          type: 'text',
          admin: { description: 'Adresse email' },
        },
        {
          name: 'hours',
          type: 'textarea',
          localized: true,
          admin: { description: 'Horaires d’ouverture' },
        },
        {
          name: 'coords',
          type: 'group',
          admin: { description: 'Coordonnées du bureau' },
          fields: [
            { name: 'lng', type: 'number', required: true, admin: { step: 0.000001 } },
            { name: 'lat', type: 'number', required: true, admin: { step: 0.000001 } },
          ],
        },
      ],
    },
  ],
}

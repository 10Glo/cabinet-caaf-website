// RATIONALE: Collection Media = bibliothèque médias CAAF (upload central).
// Frontend: toutes les collections upload→media (Articles.image, Publications.pdf/cover, Authors.avatar,
// Clients.logo, Offices, Milestones.image, Testimonials.avatar...) consomment Media
// avec srcSet responsive via imageSizes. Alt localisé requis pour a11y/SEO (WCAG).
// - alt localized required → alt text obligatoire par locale (attribut alt <Image /> + SEO).
// - caption localized → légende optionnelle sous image (crédit, description).
// - focalPoint group {x,y} simple → point d’intérêt pour recadrage object-position (0-100).
// - upload true + imageSizes [{name:'card', width:800}, {name:'hero', width:1920}] → dérivés générés par sharp.
// - access read () => true → médias publics (ISR + /api/media/file/**), écriture auth.
// - admin useAsTitle alt + thumbnail via alt.
// SEED: { alt:"Bureau CAAF Kinshasa — salle de réunion", caption:"Bureau Kinshasa, 2024", focalPoint:{x:50, y:50} }

import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
    description: 'Médias — bibliothèque centralisée (images, PDF)',
  },
  access: {
    read: () => true,
  },
  upload: {
    imageSizes: [
      {
        name: 'card',
        width: 800,
      },
      {
        name: 'hero',
        width: 1920,
      },
    ],
    adminThumbnail: 'card',
    mimeTypes: ['image/*', 'application/pdf'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Texte alternatif — localisé, requis (a11y / SEO, ex: Bureau CAAF Kinshasa)' },
    },
    {
      name: 'caption',
      type: 'text',
      localized: true,
      admin: { description: 'Légende — localisé, optionnel (affichée sous l’image)' },
    },
    {
      name: 'focalPoint',
      type: 'group',
      admin: { description: 'Point focal — recadrage object-position (0-100)' },
      fields: [
        {
          name: 'x',
          type: 'number',
          min: 0,
          max: 100,
          admin: { description: 'X — 0 (gauche) → 100 (droite)', width: '50%' },
        },
        {
          name: 'y',
          type: 'number',
          min: 0,
          max: 100,
          admin: { description: 'Y — 0 (haut) → 100 (bas)', width: '50%' },
        },
      ],
    },
  ],
}

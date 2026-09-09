// RATIONALE: Collection Milestones = jalons historiques CAAF (timeline "Notre histoire").
// Frontend: blocks timeline + pages /a-propos /histoire listent Milestones triés par order asc
// et affichent année + titre + texte + visuel optionnel sur frise chronologique.
// - year text required → étiquette année (ex: "2010", "2024"), tri visuel, non localisé.
// - title localized required → H3 jalon localisé, useAsTitle admin.
// - text textarea localized → description du jalon (1-2 phrases).
// - image upload→media? → visuel d’archive / bureau / équipe (optionnel).
// - order number → tri ascendant explicite (1,2,3...) + admin defaultColumns.
// - access read () => true → historique public (ISR), écriture auth.
// - pas de versions/drafts → référentiel stable, ordonné manuellement.
// SEED: { year:"2010", title:"Création du cabinet", text:"Fondation à Kinshasa par...", image:mediaId, order:1 }

import type { CollectionConfig } from 'payload'

export const Milestones: CollectionConfig = {
  slug: 'milestones',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['year', 'title', 'order', 'updatedAt'],
    description: 'Jalons historiques — frise chronologique CAAF',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'year',
      type: 'text',
      required: true,
      admin: { description: 'Année — étiquette timeline (ex: 2010, 2024)' },
    },
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Titre du jalon — localisé, useAsTitle' },
    },
    {
      name: 'text',
      type: 'textarea',
      localized: true,
      admin: { description: 'Description — 1 à 2 phrases localisées' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Visuel d’archive — optionnel (timeline)' },
    },
    {
      name: 'order',
      type: 'number',
      admin: { description: 'Ordre d’affichage — tri ascendant (1,2,3...)' },
    },
  ],
}

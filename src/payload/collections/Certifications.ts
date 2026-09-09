// RATIONALE: Collection Certifications = normes & agréments CAAF (OHADA, ISO, BRTC...).
// Frontend: blocks certificationsDetail + pages /certifications listent Certifications
// pour grilles détaillées (code + fullName + scope/implications).
// - code text required unique → identifiant court non localisé (ex: "OHADA", "ISO 9001"), useAsTitle fallback, indexé.
// - fullName/description localisés → libellé long + description selon locale.
// - scope array{text localized} → périmètre d’intervention (puces).
// - implications array{text localized} → impacts / obligations (puces).
// - icon text (lucide name) → icône carte certification.
// - doc upload→media? → PDF / document justificatif optionnel (agrément, certificat).
// - access read () => true → certifications publiques, écriture auth.
// - pas de versions/drafts → référentiel stable.
// SEED: { code:"OHADA", fullName:"Organisation pour l’Harmonisation en Afrique du Droit des Affaires", description:"...", scope:[{text:"Audit légal"}], implications:[{text:"Conformité SYSCOHADA"}], icon:"award", doc:mediaId }

import type { CollectionConfig } from 'payload'

export const Certifications: CollectionConfig = {
  slug: 'certifications',
  admin: {
    useAsTitle: 'code',
    defaultColumns: ['code', 'fullName', 'updatedAt'],
    description: 'Certifications & agréments — normes, périmètre, implications',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { description: 'Code court — useAsTitle, unique non localisé (ex: OHADA, ISO 9001)' },
    },
    {
      name: 'fullName',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Intitulé complet — localisé (ex: Organisation pour l’Harmonisation...)' },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      admin: { description: 'Description — cartes + page détail' },
    },
    {
      name: 'scope',
      type: 'array',
      admin: { description: 'Périmètre d’intervention — puces' },
      fields: [
        {
          name: 'text',
          type: 'text',
          localized: true,
          required: true,
          admin: { description: 'Item périmètre — localisé' },
        },
      ],
    },
    {
      name: 'implications',
      type: 'array',
      admin: { description: 'Implications / obligations — puces' },
      fields: [
        {
          name: 'text',
          type: 'text',
          localized: true,
          required: true,
          admin: { description: 'Item implication — localisé' },
        },
      ],
    },
    {
      name: 'icon',
      type: 'text',
      admin: { description: 'Nom icône Lucide (ex: award, shield-check)' },
    },
    {
      name: 'doc',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Document justificatif — PDF agrément / certificat (optionnel)' },
    },
  ],
}

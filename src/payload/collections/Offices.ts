// RATIONALE: Collection Offices = bureaux CAAF (Bureau Kinshasa, Bureau Lubumbashi).
// Frontend: blocks officesMap + pages /contact affichent Offices sur carte Leaflet/MapLibre
// et fiches contact (adresse, téléphone, horaires).
// - city localized required → useAsTitle localisé (ex: Kinshasa) + H2 fiche.
// - type localized → "Bureau Kinshasa" / "Bureau Lubumbashi".
// - address array{text localized} → lignes d’adresse (rue, commune, référence) localisées.
// - phone text → téléphone principal (tel: link).
// - phone2 text → téléphone secondaire (optionnel).
// - email text → contact générique bureau.
// - hours textarea localized → horaires localisés (ex: "Lun-Ven 08:00-17:00").
// - location point required [lng,lat] → marqueur carte + lien Google Maps / OpenStreetMap.
// - access read () => true → bureaux publics, écriture auth.
// - pas de versions/drafts → référentiel stable.
// SEED: { city:"Kinshasa", type:"Bureau Kinshasa", address:[{text:"Av. Colonel Mondjiba, 123"}], phone:"+243 123 456 789", email:"kin@caaf-sas.com", hours:"Lun-Ven 08h-17h", location:[15.3136, -4.3270] }

import type { CollectionConfig } from 'payload'

export const Offices: CollectionConfig = {
  slug: 'offices',
  admin: {
    useAsTitle: 'city',
    defaultColumns: ['city', 'type', 'phone', 'updatedAt'],
    description: 'Bureaux — implantations + carte contact',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'city',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Ville — localisé, useAsTitle (ex: Kinshasa)' },
    },
    {
      name: 'type',
      type: 'text',
      localized: true,
      admin: { description: 'Type d’implantation — localisé (ex: Bureau Kinshasa / Bureau Lubumbashi)' },
    },
    {
      name: 'address',
      type: 'array',
      admin: { description: 'Lignes d’adresse — affichage fiche + tooltip carte' },
      fields: [
        {
          name: 'text',
          type: 'text',
          localized: true,
          required: true,
          admin: { description: 'Ligne d’adresse — localisé' },
        },
      ],
    },
    {
      name: 'phone',
      type: 'text',
      admin: { description: 'Téléphone principal (ex: +243 123 456 789) — lien tel:' },
    },
    {
      name: 'phone2',
      type: 'text',
      admin: { description: 'Téléphone secondaire (optionnel)' },
    },
    {
      name: 'email',
      type: 'text',
      admin: { description: 'Email du bureau (ex: kin@caaf-sas.com) — lien mailto:' },
    },
    {
      name: 'hours',
      type: 'textarea',
      localized: true,
      admin: { description: 'Horaires — localisé (ex: Lun-Ven 08:00-17:00)' },
    },
    {
      name: 'location',
      type: 'group',
      admin: { description: 'Coordonnées — marqueur carte (ex: lng 15.3136, lat -4.3270 Kinshasa)' },
      fields: [
        {
          name: 'lng',
          type: 'number',
          required: true,
          admin: { description: 'Longitude', step: 0.000001 },
        },
        {
          name: 'lat',
          type: 'number',
          required: true,
          admin: { description: 'Latitude', step: 0.000001 },
        },
      ],
    },
  ],
}

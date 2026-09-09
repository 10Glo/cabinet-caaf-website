// RATIONALE: Collection Clients = références / logos clients CAAF.
// Frontend: blocks clientsGrid + pages références filtrent Clients par sector/sectorType/featured
// et affichent logo + name dans grilles + carrousels.
// - name/slug localisés → libellé + URL localisée si fiche référence dédiée.
// - slug localisé unique indexé → contrainte d’unicité par locale.
// - sector relationship→sectors required → filtre par secteur (sectorsOverview cross-link).
// - sectorType text localized → sous-libellé secteur affiché sous le nom (ex: "Banque commerciale").
// - logo upload→media → grille logos (grayscale → couleur au hover).
// - featured checkbox → mise en avant homepage / tête de grille.
// - access read () => true → logos publics (ISR), écriture auth.
// - pas de versions/drafts → référentiel stable.
// SEED: { name:"Rawbank", slug:"rawbank", sector:sectorId, sectorType:"Banque", logo:mediaId, featured:true }

import type { CollectionConfig } from 'payload'

export const Clients: CollectionConfig = {
  slug: 'clients',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'sector', 'featured', 'updatedAt'],
    description: 'Clients / références — logos + filtrage par secteur',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Nom du client — localisé, useAsTitle' },
    },
    {
      name: 'slug',
      type: 'text',
      localized: true,
      required: true,
      unique: true,
      index: true,
      admin: { description: 'Slug URL localisé (ex: rawbank / en/rawbank)' },
    },
    {
      name: 'sector',
      type: 'relationship',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- CollectionSlug type regenerates after generate:types
      relationTo: 'sectors' as any,
      required: true,
      hasMany: false,
      admin: { description: 'Secteur d’activité — filtre références + cross-link', position: 'sidebar' },
    },
    {
      name: 'sectorType',
      type: 'text',
      localized: true,
      admin: { description: 'Sous-type secteur affiché (ex: Banque commerciale / ONG internationale)' },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Logo client — grille références (SVG/PNG, fond transparent recommandé)' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Mise en avant — homepage / tête de liste', position: 'sidebar' },
    },
  ],
}

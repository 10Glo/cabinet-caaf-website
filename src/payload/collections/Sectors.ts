// RATIONALE: Collection Sectors = secteurs d'activité CAAF (mines, banques, ONG...).
// Frontend: app/(frontend)/secteurs + bentoSecteurs / sectorsOverview blocks listent Sectors
// pour grilles secteurs, filtrage références/clients, et navigation cross-link expertises.
// - title/slug/description localisés → H1 + URL i18n + cartes secteurs.
// - slug localisé unique indexé → lookup O(1) + generateStaticParams /secteurs/[slug].
// - icon text (lucide name) → rendu icône carte sans upload (ex: "factory", "landmark").
// - tags array{text localized} → chips sous chaque carte (ex: "Audit minier", "Due diligence").
// - accent checkbox → met en avant le secteur phare (style bento accentué / bordure primaire).
// - access read () => true → secteurs publics (ISR), écriture auth.
// - pas de versions/drafts → référentiel stable, modifs immédiates.
// SEED: { title:"Mines & Carrières", slug:"mines-carrieres", description:"Accompagnement...", icon:"pickaxe", tags:[{text:"Audit minier"}], accent:true }

import type { CollectionConfig } from 'payload'

export const Sectors: CollectionConfig = {
  slug: 'sectors',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'accent', 'updatedAt'],
    description: 'Secteurs d’activité — grilles secteurs + filtrage références',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Nom du secteur — localisé, useAsTitle (ex: Mines & Carrières)' },
    },
    {
      name: 'slug',
      type: 'text',
      localized: true,
      required: true,
      unique: true,
      index: true,
      admin: { description: 'Slug URL localisé (ex: mines-carrieres / en/mining)' },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      admin: { description: 'Description courte — cartes secteurs + meta fallback' },
    },
    {
      name: 'icon',
      type: 'text',
      admin: { description: 'Nom icône Lucide (ex: factory, landmark, pickaxe) — rendu frontend <Icon />' },
    },
    {
      name: 'tags',
      type: 'array',
      admin: { description: 'Chips / mots-clés du secteur — affichage sous carte' },
      fields: [
        {
          name: 'text',
          type: 'text',
          localized: true,
          required: true,
          admin: { description: 'Libellé tag — localisé' },
        },
      ],
    },
    {
      name: 'accent',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Mise en avant visuelle — style bento accentué', position: 'sidebar' },
    },
  ],
}

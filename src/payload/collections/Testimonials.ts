// RATIONALE: Collection Testimonials = témoignages clients & collaborateurs CAAF.
// Frontend: blocks testimonials + carrousels filtrent Testimonials par featured
// et affichent quote + byline (author/role/company/sector) + avatar + guillemets.
// - quote textarea localized required → citation principale (texte long).
// - author text required → nom signataire, useAsTitle admin (non localisé, personne).
// - role text localized → fonction (ex: Directeur Financier / CFO).
// - company text localized → entreprise (ex: Rawbank / Acme Mining).
// - sector text localized → secteur (ex: Banque, Mines).
// - avatar upload→media → photo ronde (optionnel, fallback initiales).
// - featured checkbox → mise en avant homepage / carrousel (tri prioritaire).
// - access read () => true → témoignages publics (ISR), écriture auth.
// - pas de versions/drafts → référentiel stable.
// SEED: { quote:"CAAF nous accompagne depuis 5 ans avec rigueur...", author:"Jane Doe", role:"Directrice Financière", company:"Rawbank", sector:"Banque", avatar:mediaId, featured:true }

import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'author',
    defaultColumns: ['author', 'company', 'sector', 'featured', 'updatedAt'],
    description: 'Témoignages — carrousels + preuve sociale',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      localized: true,
      required: true,
      admin: { description: 'Citation — localisé, requis (texte du témoignage)' },
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      admin: { description: 'Auteur — nom complet, useAsTitle (non localisé)' },
    },
    {
      name: 'role',
      type: 'text',
      localized: true,
      admin: { description: 'Fonction — localisé (ex: Directeur Financier / CFO)' },
    },
    {
      name: 'company',
      type: 'text',
      localized: true,
      admin: { description: 'Entreprise — localisé (ex: Rawbank)' },
    },
    {
      name: 'sector',
      type: 'text',
      localized: true,
      admin: { description: 'Secteur — localisé (ex: Banque, Mines, ONG)' },
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Avatar — photo ronde (optionnel, fallback initiales)' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Mise en avant — homepage / carrousel', position: 'sidebar' },
    },
  ],
}

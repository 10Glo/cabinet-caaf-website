// RATIONALE: Collection Faqs = questions fréquentes CAAF (support + SEO FAQPage).
// Frontend: blocks faq + pages /faq listent Faqs filtrés par category/order
// et rendent accordéon (question → answer) + json-ld FAQPage via seo.
// - category text localized → groupement / filtre (ex: Général, Audit, Carrières).
// - question text localized required → H3 accordéon + useAsTitle admin.
// - answer richText localized required → Lexical (Bold, Italic, Link, UL/OL) dans panneau.
// - order number → tri ascendant intra-catégorie (1,2,3...).
// - access read () => true → FAQ publique (ISR), écriture auth.
// - pas de versions/drafts → référentiel stable, publication immédiate.
// SEED: { category:"Général", question:"Qu’est-ce que CAAF ?", answer:{root:{children:[{children:[{text:"CAAF est...", type:"text"}], type:"paragraph"}]}}, order:1 }

import type { CollectionConfig } from 'payload'

export const Faqs: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'category', 'order', 'updatedAt'],
    description: 'FAQ — questions fréquentes (accordéon + FAQPage json-ld)',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'category',
      type: 'text',
      localized: true,
      admin: { description: 'Catégorie — localisé (ex: Général, Audit, Fiscalité)' },
    },
    {
      name: 'question',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Question — localisé, useAsTitle (ex: Qu’est-ce que... ?)' },
    },
    {
      name: 'answer',
      type: 'richText',
      localized: true,
      required: true,
      admin: { description: 'Réponse — Lexical (Bold, Link, UL/OL, Quote)' },
    },
    {
      name: 'order',
      type: 'number',
      admin: { description: 'Ordre d’affichage — tri ascendant intra-catégorie' },
    },
  ],
}

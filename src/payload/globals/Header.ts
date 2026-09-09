// RATIONALE: Global Header = navigation principale + CTA + switcher langue.
// Frontend: <Header /> sticky (Server Component) consommé dans layout.tsx via payload.findGlobal({slug:'header'}).
// - logo upload→media? → surcharge SiteSettings.logo si défini, sinon fallback SiteSettings.
// - menu array {label localized, href?, type radio link/dropdown, columns{heading, links[]}} → nav desktop mega-menu + mobile drawer.
//   type=link → lien simple (label+href), type=dropdown → colonnes avec heading + links[] (title/href/description).
//   columns array → supporte 1..3 colonnes type services/secteurs (BentoServices/BentoSecteurs).
// - cta group linkField (label localized) → bouton primaire header "Planifier un échange" (internal/external).
// - langSwitcher group {showSwitcher checkbox default true} → affiche FR/EN toggle (next-intl).
// - access read () => true → header public ISR, écriture auth.
// - pas de versions → singleton.
// SEED: { menu:[{label:"Services", type:"dropdown", columns:[{heading:"Audit", links:[{title:"Audit Financier", href:"/expertises/audit-financier"}]}]}, {label:"Contact", type:"link", href:"/contact"}], cta:{link:{type:"internal", label:"Planifier un échange"}}, langSwitcher:{showSwitcher:true} }

import type { GlobalConfig } from 'payload'

import { linkFieldWithName } from '../fields/link'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Site',
    description: 'En-tête — navigation + CTA + sélecteur de langue',
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Logo header — surcharge SiteSettings.logo si défini (optionnel)' },
    },
    {
      name: 'menu',
      type: 'array',
      label: 'Menu',
      admin: { description: 'Navigation principale — liens simples ou méga-menus à colonnes' },
      fields: [
        {
          name: 'label',
          type: 'text',
          localized: true,
          required: true,
          admin: { description: 'Libellé — localisé, requis (ex: Services)' },
        },
        {
          name: 'href',
          type: 'text',
          admin: {
            description: 'URL — requis si type=link (ex: /contact), ignoré si dropdown',
            condition: (_data, siblingData) => siblingData?.type === 'link',
          },
        },
        {
          name: 'type',
          type: 'radio',
          required: true,
          defaultValue: 'link',
          options: [
            { label: 'Lien', value: 'link' },
            { label: 'Menu déroulant', value: 'dropdown' },
          ],
          admin: { layout: 'horizontal', description: 'Lien simple vs méga-menu à colonnes' },
        },
        {
          name: 'columns',
          type: 'array',
          label: 'Colonnes',
          admin: {
            description: 'Colonnes du méga-menu — uniquement si type=dropdown',
            condition: (_data, siblingData) => siblingData?.type === 'dropdown',
          },
          fields: [
            {
              name: 'heading',
              type: 'text',
              localized: true,
              admin: { description: 'Titre de colonne — localisé (ex: Audit & Conseil)' },
            },
            {
              name: 'links',
              type: 'array',
              admin: { description: 'Liens de la colonne' },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  localized: true,
                  required: true,
                  admin: { description: 'Titre du lien — localisé, requis' },
                },
                {
                  name: 'href',
                  type: 'text',
                  required: true,
                  admin: { description: 'URL — requis (ex: /expertises/audit-financier)' },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  localized: true,
                  admin: { description: 'Description courte — localisée, optionnelle (sous-titre méga-menu)' },
                },
              ],
            },
          ],
        },
      ],
    },
    linkFieldWithName('cta', {
      label: 'CTA',
      admin: { description: 'Bouton d’action header (ex: Planifier un échange)' },
    } as never),
    {
      name: 'langSwitcher',
      type: 'group',
      label: 'Sélecteur de langue',
      admin: { description: 'Affichage du switcher FR/EN' },
      fields: [
        {
          name: 'showSwitcher',
          type: 'checkbox',
          defaultValue: true,
          admin: { description: 'Afficher le sélecteur de langue — défaut activé' },
        },
      ],
    },
  ],
}

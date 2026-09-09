// RATIONALE: Global SiteSettings = référentiel identité CAAF (single source of truth).
// Frontend: Layout, Header/Footer, SEO, JSON-LD Organization, Contact, Offices, sitemap.
// - siteName localized required → <title>, H1 header, jsonld name (FR/EN).
// - alternateName localized → abréviation / alias (CAAF) pour Organization alternateName.
// - siteUrl text required default https://caaf-sas.com → canonical base, og:url, sitemap, seoDefaults.
// - description textarea localized required → meta description fallback + hero subline.
// - logo upload→media required → header light, favicon fallback, og:image fallback (sharp card/hero).
// - logoDark upload→media? → variante header sombre / footer.
// - favicon upload→media? → <link rel="icon"> + manifest.
// - address group {street/district/city localized, country default CD} → footer + Office card + schema.org PostalAddress.
// - phone / phone2 (Kinshasa) + lubPhone / lubPhone2 (Lubumbashi) → tel: links, footer, contact block.
// - foundingYear text default 1968 → footer "Depuis 1968", timeline, About.
// - email text required → mailto: principal (contact@caaf.cd).
// - sameAs array{text} → jsonld sameAs + footer social (LinkedIn).
// - access read () => true → public ISR (layout fetch), écriture auth only.
// - pas de versions → singleton global, édition directe.
// SEED: { siteName:"CAAF SAS", siteUrl:"https://caaf-sas.com", description:"Cabinet d'audit...", phone:"+243 999 999 999", lubPhone:"+243 999 999 998", foundingYear:"1968", email:"contact@caaf.cd", sameAs:[{text:"https://linkedin.com/company/caaf"}] }

import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Site',
    description: 'Identité du site — infos globales (nom, logo, adresse, contacts)',
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Nom du site — localisé, requis (ex: CAAF SAS)' },
    },
    {
      name: 'alternateName',
      type: 'text',
      localized: true,
      admin: { description: 'Nom alternatif / abréviation — localisé (ex: CAAF)' },
    },
    {
      name: 'siteUrl',
      type: 'text',
      required: true,
      defaultValue: 'https://caaf-sas.com',
      admin: { description: 'URL canonique du site (ex: https://caaf-sas.com)' },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      required: true,
      admin: { description: 'Description courte — localisée, requise (meta description fallback)' },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: { description: 'Logo principal (clair) — header / OG fallback' },
    },
    {
      name: 'logoDark',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Logo variante sombre — footer / header dark (optionnel)' },
    },
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Favicon — icône onglet / manifest (optionnel)' },
    },
    {
      name: 'address',
      type: 'group',
      label: 'Adresse',
      admin: { description: 'Adresse — affichée footer + schema.org PostalAddress' },
      fields: [
        {
          name: 'street',
          type: 'text',
          localized: true,
          admin: { description: 'Rue / avenue — localisé (ex: Av. Colonel Mondjiba, 123)' },
        },
        {
          name: 'district',
          type: 'text',
          localized: true,
          admin: { description: 'Quartier / commune — localisé (ex: Ngaliema)' },
        },
        {
          name: 'city',
          type: 'text',
          localized: true,
          admin: { description: 'Ville — localisé (ex: Kinshasa)' },
        },
        {
          name: 'country',
          type: 'text',
          localized: true,
          defaultValue: 'CD',
          admin: { description: 'Pays — code localisé, défaut CD (RDC)' },
        },
      ],
    },
    {
      name: 'phone',
      type: 'text',
      admin: { description: 'Téléphone principal Kinshasa (ex: +243 999 999 999) — lien tel:' },
    },
    {
      name: 'phone2',
      type: 'text',
      admin: { description: 'Téléphone secondaire Kinshasa (optionnel)' },
    },
    {
      name: 'lubPhone',
      type: 'text',
      admin: { description: 'Téléphone principal Lubumbashi (ex: +243 999 999 998)' },
    },
    {
      name: 'lubPhone2',
      type: 'text',
      admin: { description: 'Téléphone secondaire Lubumbashi (optionnel)' },
    },
    {
      name: 'foundingYear',
      type: 'text',
      defaultValue: '1968',
      admin: { description: 'Année de création — défaut 1968 (footer, timeline)' },
    },
    {
      name: 'email',
      type: 'text',
      required: true,
      admin: { description: 'Email principal — requis (ex: contact@caaf.cd) — lien mailto:' },
    },
    {
      name: 'sameAs',
      type: 'array',
      label: 'Réseaux / sameAs',
      admin: { description: 'Liens externes — jsonld sameAs + footer (ex: LinkedIn)' },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          admin: { description: 'URL — ex: https://linkedin.com/company/caaf' },
        },
      ],
    },
  ],
}

// RATIONALE: Collection Jobs = offres d’emploi / carrières CAAF.
// Frontend: app/(frontend)/carrieres + [slug] listent/filtrent Jobs par department/location/contract/featured
// et affichent détail (description, experience, CTA candidature).
// - title/slug localisés → H1 + URL i18n + cartes offres.
// - slug localisé unique indexé → generateStaticParams /carrieres/[slug].
// - department select {Audit,Advisory,Fiscalité,Support} → filtre département.
// - location select {Kinshasa,Lubumbashi} → filtre ville.
// - contract select {CDI,Stage,CDD} → filtre contrat.
// - experience text localized → prérequis affiché (ex: "3-5 ans").
// - description textarea localized → accroche / résumé offre.
// - featured checkbox → mise en avant tête de liste.
// - seo group → generateMetadata offre.
// - versions drafts + autosave + schedulePublish → workflow RH (brouillon → publié → archivé).
// - access read () => true → offres publiques ISR, écriture auth.
// SEED: { title:"Auditeur Senior", slug:"auditeur-senior", department:"Audit", location:"Kinshasa", contract:"CDI", experience:"3-5 ans", description:"Rejoignez..." }

import type { CollectionConfig } from 'payload'

import { seoField } from '../fields/seo'

export const Jobs: CollectionConfig = {
  slug: 'jobs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'department', 'location', 'contract', 'featured', 'updatedAt'],
    description: 'Offres d’emploi — carrières CAAF',
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: {
      autosave: { interval: 2000 },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Intitulé du poste — localisé, useAsTitle' },
    },
    {
      name: 'slug',
      type: 'text',
      localized: true,
      required: true,
      unique: true,
      index: true,
      admin: { description: 'Slug URL localisé (ex: auditeur-senior / en/senior-auditor)' },
    },
    {
      name: 'department',
      type: 'select',
      required: true,
      options: [
        { label: 'Audit', value: 'Audit' },
        { label: 'Advisory', value: 'Advisory' },
        { label: 'Fiscalité', value: 'Fiscalité' },
        { label: 'Support', value: 'Support' },
      ],
      admin: { description: 'Département — filtre carrières', position: 'sidebar' },
    },
    {
      name: 'location',
      type: 'select',
      required: true,
      options: [
        { label: 'Kinshasa', value: 'Kinshasa' },
        { label: 'Lubumbashi', value: 'Lubumbashi' },
      ],
      admin: { description: 'Ville — filtre carrières', position: 'sidebar' },
    },
    {
      name: 'contract',
      type: 'select',
      required: true,
      options: [
        { label: 'CDI', value: 'CDI' },
        { label: 'Stage', value: 'Stage' },
        { label: 'CDD', value: 'CDD' },
      ],
      admin: { description: 'Type de contrat — filtre + badge carte', position: 'sidebar' },
    },
    {
      name: 'experience',
      type: 'text',
      localized: true,
      admin: { description: 'Expérience requise — localisé (ex: 3-5 ans, Débutant accepté)' },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      admin: { description: 'Description courte — cartes offres + chapeau page détail' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Mise en avant — tête de liste carrières', position: 'sidebar' },
    },
    seoField(),
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        description: 'Date de publication',
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
  ],
}

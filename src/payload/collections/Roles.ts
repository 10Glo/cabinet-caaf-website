// RATIONALE: Collection Roles = fiches métiers / niveaux d'expérience CAAF (0-2 ans, Senior...).
// Frontend: pages /carrieres + [slug] ou bloc "Rejoignez-nous" listent Roles pour grilles métiers
// et fiches détaillées (missions, profil, qualités, évolution, pourquoi nous rejoindre).
// - title localized required → H1 fiche métier + carte, useAsTitle admin.
// - subtitle localized → sur-titre catégorie (ex: Audit, Advisory) sous le H1.
// - level text localized (ex: 0-2 ans, 3-5 ans) → badge séniorité + filtre carrières.
// - description textarea localized → accroche courte carte + chapeau page détail.
// - missions array{text localized} → puces missions quotidiennes.
// - profil textarea localized → prérequis / formation / expérience attendue.
// - qualités array{text localized} → soft skills / savoir-être (rigueur, esprit d'équipe...).
// - evolution textarea localized → perspectives d'évolution interne.
// - pourquoi textarea localized → pourquoi rejoindre CAAF sur ce rôle (culture, formation...).
// - slug localized unique indexé → URL i18n /carrieres/[slug] + generateStaticParams.
// - access read () => true → rôles publics (ISR), écriture auth.
// SEED: { title:"Auditeur Junior", subtitle:"Audit", level:"0-2 ans", description:"Démarrez votre carrière...", missions:[{text:"Participer aux missions d’audit légal"}], profil:"Bac+5 CCA/Finance", qualités:[{text:"Rigueur"}], evolution:"Évolution vers Auditeur Confirmé", pourquoi:"Mentorat + formations continues", slug:"auditeur-junior" }

import type { CollectionConfig } from 'payload'

export const Roles: CollectionConfig = {
  slug: 'roles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'level', 'slug', 'updatedAt'],
    description: 'Rôles / fiches métiers — niveaux, missions, profil, évolution',
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
      admin: { description: 'Intitulé du rôle — localisé, useAsTitle (ex: Auditeur Junior)' },
    },
    {
      name: 'subtitle',
      type: 'text',
      localized: true,
      admin: { description: 'Sous-titre catégorie — localisé (ex: Audit, Advisory, Support)' },
    },
    {
      name: 'level',
      type: 'text',
      localized: true,
      admin: { description: 'Niveau d’expérience — localisé (ex: 0-2 ans, 3-5 ans, Senior)' },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      admin: { description: 'Accroche courte — cartes rôles + chapeau page détail' },
    },
    {
      name: 'missions',
      type: 'array',
      admin: { description: 'Missions principales — puces' },
      fields: [
        {
          name: 'text',
          type: 'text',
          localized: true,
          required: true,
          admin: { description: 'Item mission — localisé' },
        },
      ],
    },
    {
      name: 'profil',
      type: 'textarea',
      localized: true,
      admin: { description: 'Profil recherché — formation / prérequis (localisé)' },
    },
    {
      name: 'qualites',
      type: 'array',
      admin: { description: 'Qualités attendues — soft skills (puces)' },
      fields: [
        {
          name: 'text',
          type: 'text',
          localized: true,
          required: true,
          admin: { description: 'Item qualité — localisé (ex: Rigueur, Curiosité)' },
        },
      ],
    },
    {
      name: 'evolution',
      type: 'textarea',
      localized: true,
      admin: { description: 'Perspectives d’évolution — localisé' },
    },
    {
      name: 'pourquoi',
      type: 'textarea',
      localized: true,
      admin: { description: 'Pourquoi nous rejoindre — localisé (culture, avantages)' },
    },
    {
      name: 'slug',
      type: 'text',
      localized: true,
      required: true,
      unique: true,
      index: true,
      admin: { description: 'Slug URL localisé — unique (ex: auditeur-junior / en/junior-auditor)' },
    },
  ],
}

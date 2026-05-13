// src/content/actualites/articles.ts

import type { Article, ActualitesCategory } from "./types"

export const CATEGORIES: ActualitesCategory[] = [
  { slug: "all", label: "Tous", count: 12 },
  { slug: "audit", label: "Audit & Assurance", count: 4 },
  { slug: "fiscal", label: "Fiscalité", count: 3 },
  { slug: "ohada", label: "OHADA & Réglementation", count: 2 },
  { slug: "secteur", label: "Secteurs", count: 2 },
  { slug: "cabinet", label: "Vie du cabinet", count: 1 },
]

export const ARTICLES: Article[] = [
  {
    slug: "syscohada-revise-2024-ce-qui-change",
    title: "SYSCOHADA révisé 2024 : ce qui change pour les entreprises congolaises",
    excerpt:
      "Les modifications apportées au SYSCOHADA révisé impactent la présentation des états financiers, le traitement des contrats de location et la comptabilisation des instruments financiers. Voici ce que votre entreprise doit savoir et préparer dès maintenant.",
    category: "OHADA & Réglementation",
    categorySlug: "ohada",
    date: "2024-12-15",
    readTime: "8 min",
    author: { name: "Jean-Marc Kalala", role: "Associé Senior" },
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    featured: true,
    tags: ["SYSCOHADA", "États financiers", "Conformité"],
  },
  {
    slug: "controle-fiscal-rdc-2024-comment-se-preparer",
    title: "Contrôle fiscal en RDC : comment se préparer efficacement",
    excerpt:
      "La DGI intensifie ses contrôles fiscaux sur les entreprises congolaises. Voici les 10 points clés à vérifier avant toute notification et les erreurs à ne surtout pas commettre.",
    category: "Fiscalité",
    categorySlug: "fiscal",
    date: "2024-12-01",
    readTime: "6 min",
    author: { name: "Marie Tshimanga", role: "Directrice Fiscale" },
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
    featured: false,
    tags: ["Contrôle fiscal", "DGI", "Préparation"],
  },
  {
    slug: "audit-interne-externalise-avantages-pme",
    title: "Pourquoi les PME congolaises gagnent à externaliser leur audit interne",
    excerpt:
      "L'audit interne n'est plus réservé aux grandes entreprises. Découvrez comment l'externalisation de cette fonction peut renforcer vos contrôles sans alourdir votre structure.",
    category: "Audit & Assurance",
    categorySlug: "audit",
    date: "2024-11-18",
    readTime: "5 min",
    author: { name: "Patrick Mbuyu", role: "Manager Audit" },
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=800&auto=format&fit=crop",
    featured: false,
    tags: ["Audit interne", "PME", "Externalisation"],
  },
  {
    slug: "prix-de-transfert-rdc-guide-pratique",
    title: "Prix de transfert en RDC : guide pratique pour les groupes internationaux",
    excerpt:
      "La réglementation congolaise sur les prix de transfert se durcit. Documentation obligatoire, méthodes acceptées et sanctions encourues : tout ce que vous devez savoir.",
    category: "Fiscalité",
    categorySlug: "fiscal",
    date: "2024-11-05",
    readTime: "10 min",
    author: { name: "Marie Tshimanga", role: "Directrice Fiscale" },
    image: "https://images.unsplash.com/photo-1507679799987-c73b7651af56?q=80&w=800&auto=format&fit=crop",
    featured: false,
    tags: ["Prix de transfert", "OCDE", "International"],
  },
  {
    slug: "secteur-minier-rdc-enjeux-audit-2024",
    title: "Secteur minier en RDC : les enjeux d'audit spécifiques en 2024",
    excerpt:
      "Entre les exigences ITIE, les obligations du Code minier révisé et les attentes des maisons-mères, l'audit des sociétés minières congolaises présente des défis uniques.",
    category: "Secteurs",
    categorySlug: "secteur",
    date: "2024-10-22",
    readTime: "7 min",
    author: { name: "Jean-Marc Kalala", role: "Associé Senior" },
    image: "https://images.unsplash.com/photo-1578328819058-b69f3d077479?q=80&w=800&auto=format&fit=crop",
    featured: false,
    tags: ["Mines", "ITIE", "Code minier"],
  },
  {
    slug: "commissaire-aux-comptes-nomination-ohada",
    title: "Nomination du commissaire aux comptes : obligations et bonnes pratiques OHADA",
    excerpt:
      "Quelles sociétés sont tenues de nommer un CAC ? Quels sont les critères de choix ? Comment se déroule la nomination en assemblée ? Décryptage du cadre OHADA.",
    category: "Audit & Assurance",
    categorySlug: "audit",
    date: "2024-10-10",
    readTime: "6 min",
    author: { name: "Patrick Mbuyu", role: "Manager Audit" },
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    featured: false,
    tags: ["CAC", "OHADA", "Assemblée Générale"],
  },
  {
    slug: "tva-rdc-erreurs-frequentes",
    title: "TVA en RDC : les 7 erreurs les plus fréquentes et comment les éviter",
    excerpt:
      "De la facturation aux déclarations, en passant par le crédit de TVA, les erreurs sont fréquentes et coûteuses. Revue des pièges les plus courants constatés par nos équipes.",
    category: "Fiscalité",
    categorySlug: "fiscal",
    date: "2024-09-28",
    readTime: "5 min",
    author: { name: "Marie Tshimanga", role: "Directrice Fiscale" },
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=800&auto=format&fit=crop",
    featured: false,
    tags: ["TVA", "Erreurs", "Déclarations"],
  },
  {
    slug: "controle-interne-coso-implementation-rdc",
    title: "Implémenter le COSO en RDC : retour d'expérience",
    excerpt:
      "Le cadre COSO est la référence mondiale en matière de contrôle interne. Comment l'adapter aux réalités des entreprises congolaises ? Retour sur 3 missions récentes.",
    category: "Audit & Assurance",
    categorySlug: "audit",
    date: "2024-09-15",
    readTime: "8 min",
    author: { name: "Jean-Marc Kalala", role: "Associé Senior" },
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    featured: false,
    tags: ["COSO", "Contrôle interne", "Implémentation"],
  },
  {
    slug: "banque-bcc-audit-exigences-2024",
    title: "Audit des banques en RDC : les nouvelles exigences de la BCC",
    excerpt:
      "La Banque Centrale du Congo a renforcé ses exigences en matière d'audit externe des établissements de crédit. Voici ce que cela change pour les commissaires aux comptes et les banques.",
    category: "Secteurs",
    categorySlug: "secteur",
    date: "2024-09-01",
    readTime: "7 min",
    author: { name: "Patrick Mbuyu", role: "Manager Audit" },
    image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?q=80&w=800&auto=format&fit=crop",
    featured: false,
    tags: ["BCC", "Banques", "Prudentiel"],
  },
  {
    slug: "caaf-30-ans-expertise",
    title: "CAAF SAS célèbre 30 ans d'expertise au service des entreprises congolaises",
    excerpt:
      "Depuis 1994, CAAF SAS accompagne les entreprises, les institutions et les organisations internationales en RDC. Retour sur trois décennies d'engagement, de rigueur et de croissance.",
    category: "Vie du cabinet",
    categorySlug: "cabinet",
    date: "2024-06-15",
    readTime: "4 min",
    author: { name: "Jean-Marc Kalala", role: "Associé Senior" },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    featured: false,
    tags: ["CAAF", "30 ans", "Histoire"],
  },
  {
    slug: "audit-informatique-cybersecurite-rdc",
    title: "Cybersécurité en RDC : pourquoi l'audit IT n'est plus optionnel",
    excerpt:
      "Les cyberattaques se multiplient en Afrique. Les entreprises congolaises sont-elles prêtes ? L'audit informatique est devenu un impératif de gouvernance, pas un luxe technologique.",
    category: "Audit & Assurance",
    categorySlug: "audit",
    date: "2024-08-20",
    readTime: "6 min",
    author: { name: "Patrick Mbuyu", role: "Manager Audit" },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    featured: false,
    tags: ["Cybersécurité", "Audit IT", "COBIT"],
  },
  {
    slug: "ohada-acte-uniforme-societes-commerciales",
    title: "Acte Uniforme OHADA : les obligations méconnues des sociétés commerciales",
    excerpt:
      "Au-delà du commissariat aux comptes, l'Acte Uniforme impose de nombreuses obligations aux sociétés commerciales. Revue des dispositions les plus souvent ignorées — à vos risques et périls.",
    category: "OHADA & Réglementation",
    categorySlug: "ohada",
    date: "2024-07-10",
    readTime: "9 min",
    author: { name: "Jean-Marc Kalala", role: "Associé Senior" },
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
    featured: false,
    tags: ["OHADA", "Sociétés commerciales", "Obligations"],
  },
]

export function getArticlesByCategory(slug: string): Article[] {
  if (slug === "all") return ARTICLES
  return ARTICLES.filter((a) => a.categorySlug === slug)
}

export function getFeaturedArticle(): Article | undefined {
  return ARTICLES.find((a) => a.featured)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}
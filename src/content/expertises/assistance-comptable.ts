import type { ExpertisePageConfig } from "./types"

export const assistanceComptableConfig: ExpertisePageConfig = {
  slug: "assistance-comptable",

  hero: {
    category: "Services Comptables",
    categoryHref: "/expertises#services-comptables",
    title: "Une comptabilité fiable,",
    titleAccent: "sans la lourdeur d'un service interne.",
    description:
      "Tenir une comptabilité conforme au référentiel OHADA exige des compétences pointues et une attention permanente. Chez CAAF\u00a0SAS, nous prenons en charge tout ou partie de votre fonction comptable pour vous permettre de vous concentrer sur votre cœur de métier, avec la garantie d'états financiers fiables et à jour.",
    ctaPrimary: { label: "Découvrir nos services", href: "#missions" },
    ctaSecondary: { label: "Externaliser ma comptabilité", href: "/contact" },
    stats: [
      { value: "OHADA", label: "Référentiel appliqué" },
      { value: "SYSCOHADA", label: "Plan comptable" },
      { value: "Mensuel", label: "Reporting garanti" },
      { value: "100%", label: "Conformité assurée" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1920&auto=format&fit=crop",
    },
  },

  sousServices: {
    eyebrow: "Nos services",
    title: "Du quotidien à la clôture,",
    titleAccent: "nous couvrons tout le cycle.",
    description:
      "Notre offre d'assistance comptable s'adapte à vos besoins\u00a0: externalisation complète, co-sourcing avec vos équipes ou missions ponctuelles de renfort.",
    sectionId: "missions",
    headerLabel: "Prestations",
    items: [
      {
        id: "tenue",
        icon: "BookOpen",
        title: "Tenue de Comptabilité",
        subtitle: "Externalisation complète",
        description:
          "Prise en charge intégrale de votre comptabilité\u00a0: saisie des pièces, lettrage, rapprochements bancaires, déclarations fiscales périodiques et production des états financiers conformes au SYSCOHADA révisé.",
        deliverables: [
          "Grand livre et balances mensuels",
          "Rapprochements bancaires",
          "Déclarations fiscales périodiques (TVA, IPR, etc.)",
        ],
      },
      {
        id: "revision",
        icon: "Calculator",
        title: "Révision Comptable",
        subtitle: "Contrôle qualité des comptes",
        description:
          "Revue et correction de votre comptabilité tenue en interne\u00a0: vérification des imputations, régularisation des écarts, justification des soldes et préparation de la clôture annuelle.",
        deliverables: [
          "Rapport de révision par cycle comptable",
          "Liste des écritures de régularisation",
          "Dossier de clôture documenté",
        ],
      },
      {
        id: "reporting",
        icon: "FileSpreadsheet",
        title: "Reporting Financier",
        subtitle: "Information décisionnelle",
        description:
          "Production de tableaux de bord et de reportings financiers périodiques adaptés à vos besoins de pilotage\u00a0: reporting mensuel, reporting groupe, reporting bailleur.",
        deliverables: [
          "Tableaux de bord mensuels personnalisés",
          "Reporting au format maison-mère (IFRS si requis)",
          "Analyse des écarts budget vs réel",
        ],
      },
      {
        id: "cloture",
        icon: "FolderOpen",
        title: "Assistance à la Clôture",
        subtitle: "États financiers annuels",
        description:
          "Accompagnement dans la préparation de la clôture annuelle\u00a0: inventaires, provisions, cut-off, production des états financiers OHADA et préparation du dossier pour le commissaire aux comptes.",
        deliverables: [
          "États financiers annuels SYSCOHADA",
          "Notes annexes complètes",
          "Dossier de travail pour l'audit externe",
        ],
      },
      {
        id: "mise-a-niveau",
        icon: "BarChart3",
        title: "Mise à Niveau Comptable",
        subtitle: "Rattrapage & Restructuration",
        description:
          "Reprise de comptabilités en retard, correction d'erreurs accumulées, reconstitution de dossiers comptables et mise en conformité avec le référentiel OHADA.",
        deliverables: [
          "Bilan d'ouverture reconstitué",
          "Comptes rattrapés et régularisés",
          "Plan comptable restructuré",
        ],
      },
    ],
  },

  approche: {
    eyebrow: "Notre approche",
    title: "La rigueur d'un cabinet,",
    titleAccent: "la proximité d'un partenaire.",
    description:
      "Nous ne sommes pas un simple prestataire de saisie. Nous sommes un partenaire comptable qui comprend vos enjeux et produit une information financière exploitable pour vos décisions.",
    totalSteps: "05",
    stepLabel: "Étape",
    steps: [
      {
        number: "01",
        id: "diagnostic",
        icon: "ScanSearch",
        title: "Diagnostic de l'existant",
        description:
          "Nous commençons par comprendre votre organisation comptable actuelle\u00a0: outils, processus, équipes, volumétrie et niveau de conformité.",
        details: [
          "Revue de l'organisation comptable existante",
          "Analyse des outils et logiciels utilisés",
          "Évaluation du niveau de conformité OHADA",
          "Identification des besoins de rattrapage",
        ],
      },
      {
        number: "02",
        id: "organisation",
        icon: "ClipboardList",
        title: "Organisation de la mission",
        description:
          "Définition du périmètre, du calendrier et des modalités de collaboration\u00a0: qui fait quoi, quels documents transmettre, quels délais respecter.",
        details: [
          "Lettre de mission détaillée",
          "Calendrier des livrables mensuels et annuels",
          "Procédure de transmission des pièces",
          "Désignation des interlocuteurs dédiés",
        ],
      },
      {
        number: "03",
        id: "production",
        icon: "Settings",
        title: "Production comptable",
        description:
          "Nos équipes prennent en charge la comptabilité selon les modalités convenues\u00a0: saisie, contrôles, rapprochements et production des livrables périodiques.",
        details: [
          "Saisie et contrôle des écritures",
          "Rapprochements bancaires mensuels",
          "Déclarations fiscales dans les délais",
          "Production des reportings convenus",
        ],
      },
      {
        number: "04",
        id: "cloture",
        icon: "FileOutput",
        title: "Clôture & États financiers",
        description:
          "Préparation de la clôture annuelle avec toute la rigueur nécessaire\u00a0: inventaires, provisions, cut-off, production des états financiers et notes annexes.",
        details: [
          "Travaux de clôture et écritures d'inventaire",
          "Production des états financiers SYSCOHADA",
          "Rédaction des notes annexes",
          "Préparation du dossier d'audit",
        ],
      },
      {
        number: "05",
        id: "suivi",
        icon: "RefreshCcw",
        title: "Suivi & Amélioration continue",
        description:
          "Nous ne nous contentons pas de produire des comptes\u00a0: nous améliorons en continu la qualité de l'information financière et l'efficacité des processus comptables.",
        details: [
          "Revue trimestrielle de la qualité des comptes",
          "Suggestions d'amélioration des processus",
          "Formation ponctuelle de vos équipes",
          "Adaptation aux évolutions réglementaires",
        ],
      },
    ],
  },

  pourquoi: {
    eyebrow: "Pourquoi CAAF",
    title: "Votre comptabilité mérite\nmieux qu'un prestataire basique.",
    description:
      "Externaliser sa comptabilité à un cabinet d'audit garantit un niveau de qualité, de conformité et de conseil que les prestataires classiques ne peuvent offrir.",
    items: [
      {
        icon: "ShieldCheck",
        title: "Qualité cabinet d'audit",
        description:
          "Nos comptables appliquent les mêmes standards de rigueur que nos équipes d'audit. Votre comptabilité est tenue comme si elle allait être auditée — parce qu'elle le sera.",
      },
      {
        icon: "Globe",
        title: "Expertise OHADA complète",
        description:
          "SYSCOHADA révisé, normes de présentation, notes annexes — nous maîtrisons le référentiel dans ses moindres détails et suivons ses évolutions en temps réel.",
      },
      {
        icon: "UserCheck",
        title: "Interlocuteur dédié",
        description:
          "Un chef de mission dédié supervise votre dossier. Vous avez un point de contact unique qui connaît votre entreprise et anticipe vos besoins.",
      },
      {
        icon: "Languages",
        title: "Reporting bilingue",
        description:
          "Nous produisons vos reportings en français et en anglais, au format OHADA et au format maison-mère si nécessaire — une exigence pour les filiales de groupes internationaux.",
      },
      {
        icon: "Clock",
        title: "Respect des délais garantis",
        description:
          "Chaque livrable a une date. Nous nous engageons contractuellement sur les délais de production et les tenons systématiquement.",
      },
      {
        icon: "Zap",
        title: "Flexibilité du dispositif",
        description:
          "Externalisation complète, co-sourcing ou renfort ponctuel — nous adaptons le dispositif à vos besoins et à votre budget sans rigidité contractuelle.",
      },
    ],
  },

  secteurs: {
    eyebrow: "Secteurs servis",
    title: "Toutes les entreprises\nont besoin de comptes fiables.",
    description:
      "De la PME locale à la filiale de groupe international, notre offre d'assistance comptable s'adapte à chaque contexte sectoriel et organisationnel.",
    stripText: "Votre comptabilité n'est pas à jour ?",
    stripHighlight: "Nous pouvons rattraper la situation rapidement.",
    stripCta: "Parlons-en",
    items: [
      {
        icon: "Globe2",
        title: "ONG & Organisations internationales",
        description:
          "Comptabilité de projet, reporting bailleur multi-formats et conformité aux procédures des principaux donateurs.",
        tags: ["Projets", "Bailleurs", "Multi-devises"],
        featured: true,
      },
      {
        icon: "Building2",
        title: "Filiales de groupes internationaux",
        description:
          "Comptabilité statutaire OHADA et reporting groupe IFRS en parallèle, dans les délais du calendrier corporate.",
        tags: ["OHADA", "IFRS", "Reporting groupe"],
        featured: true,
      },
      {
        icon: "Store",
        title: "PME & Commerce",
        description: "Tenue de comptabilité complète pour les PME, commerçants et prestataires de services.",
        tags: ["PME", "Commerce", "Services"],
        featured: false,
      },
      {
        icon: "Factory",
        title: "Industrie",
        description: "Comptabilité analytique, gestion des stocks et reporting de production.",
        tags: ["Analytique", "Stocks", "Production"],
        featured: false,
      },
      {
        icon: "Pickaxe",
        title: "Mines & Ressources",
        description: "Comptabilité des sociétés minières avec spécificités sectorielles (redevances, ITIE).",
        tags: ["Redevances", "ITIE", "Multi-sites"],
        featured: false,
      },
      {
        icon: "Landmark",
        title: "Associations & Fondations",
        description: "Comptabilité associative, suivi des subventions et reporting aux membres.",
        tags: ["Subventions", "Membres", "Transparence"],
        featured: false,
      },
    ],
  },

  cas: {
    eyebrow: "Cas d'intervention",
    title: "Des comptes fiables,\ndes clients sereins.",
    description:
      "Exemples anonymisés de missions d'assistance comptable illustrant la diversité de nos interventions.",
    sectionCta: "Externaliser ma comptabilité",
    items: [
      {
        id: "ong",
        sector: "ONG internationale",
        sectorIcon: "Globe2",
        title: "Externalisation comptable complète pour un bureau pays",
        location: "Kinshasa, RDC",
        context:
          "Le bureau pays d'une ONG internationale gérant 5 projets financés par des bailleurs différents n'avait plus de comptable depuis 3 mois. Les reportings étaient en retard, les déclarations fiscales non déposées et les bailleurs menaçaient de suspendre les décaissements.",
        approach: [
          "Rattrapage de 3 mois de comptabilité en 2 semaines",
          "Mise en place d'une comptabilité multi-projets et multi-bailleurs",
          "Dépôt de toutes les déclarations fiscales en retard avec pénalités négociées",
          "Production mensuelle des reportings au format de chaque bailleur",
        ],
        results: [
          { icon: "CheckCircle2", label: "Décaissements rétablis en 3 semaines" },
          { icon: "TrendingUp", label: "Reportings livrés à temps chaque mois depuis 2 ans" },
          { icon: "AlertTriangle", label: "Pénalités fiscales réduites de 70% par négociation" },
          { icon: "Users", label: "Mission reconduite annuellement depuis 3 exercices" },
        ],
        quote:
          "CAAF a sauvé notre programme. Sans comptabilité fiable, nos bailleurs auraient coupé les fonds. Leur réactivité a été exceptionnelle.",
        quoteAuthor: "Directeur Pays",
      },
      {
        id: "filiale",
        sector: "Filiale de groupe",
        sectorIcon: "Building2",
        title: "Co-sourcing comptable pour une filiale industrielle",
        location: "Lubumbashi, RDC",
        context:
          "La filiale congolaise d'un groupe européen disposait d'un comptable junior mais ne parvenait pas à produire des reportings conformes aux attentes de la maison-mère. Les clôtures étaient systématiquement en retard et les réconciliations incomplètes.",
        approach: [
          "Diagnostic de l'organisation comptable et des compétences",
          "Mise en place d'un co-sourcing\u00a0: le comptable interne saisit, CAAF supervise et clôture",
          "Formation du comptable junior aux exigences OHADA et au reporting IFRS",
          "Production mensuelle du reporting au format groupe",
        ],
        results: [
          { icon: "CheckCircle2", label: "Clôtures livrées dans les délais groupe dès le 2e mois" },
          { icon: "TrendingUp", label: "Qualité du reporting notée « satisfaisante » par le groupe" },
          { icon: "AlertTriangle", label: "12 erreurs systématiques corrigées dans les 3 premiers mois" },
          { icon: "Users", label: "Comptable junior devenu autonome après 12 mois de co-sourcing" },
        ],
        quote:
          "Le modèle de co-sourcing proposé par CAAF est parfait pour nous\u00a0: la qualité d'un cabinet avec un coût maîtrisé.",
        quoteAuthor: "CFO Groupe (Bruxelles)",
      },
    ],
  },

  cta: {
    eyebrow: "Prochaine étape",
    title: "Des comptes fiables,",
    titleAccent: "sans les contraintes du recrutement.",
    description:
      "Que vous ayez besoin d'une externalisation complète, d'un renfort ponctuel ou d'un rattrapage urgent, nous avons la solution adaptée à votre situation.",
    trustPoints: [
      "Démarrage possible en 48h",
      "Pas d'engagement longue durée obligatoire",
      "Interlocuteur dédié et joignable",
      "Conformité OHADA garantie",
    ],
    primaryCta: { label: "Demander une proposition", href: "/contact" },
    secondaryCta: { label: "Appeler le cabinet", href: "tel:+243999309901" },
    watermarkIcon: "BookOpen",
    contactOptions: [
      {
        icon: "Calendar",
        title: "Diagnostic gratuit",
        description: "Évaluation de vos besoins comptables en une demi-journée.",
        href: "/contact",
        cta: "Planifier le diagnostic",
        primary: true,
      },
      {
        icon: "Phone",
        title: "Appeler directement",
        description: "+243 999 309 901 / +243 810 372 645 — du lundi au vendredi, 8h–17h.",
        href: "tel:+243999309901",
        cta: "Appeler maintenant",
        primary: false,
      },
      {
        icon: "Mail",
        title: "Écrire au cabinet",
        description: "compta@caaf-rdc.com — réponse sous 24h ouvrées.",
        href: "mailto:compta@caaf-rdc.com",
        cta: "Envoyer un email",
        primary: false,
      },
    ],
    stats: [
      { value: "48h", label: "Démarrage possible" },
      { value: "OHADA", label: "Conformité" },
      { value: "Flexible", label: "Engagement" },
    ],
  },
}
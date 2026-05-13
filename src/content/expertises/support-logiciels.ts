import type { ExpertisePageConfig } from "./types"

export const supportLogicielsConfig: ExpertisePageConfig = {
  slug: "support-logiciels",

  hero: {
    category: "Support Opérationnel",
    categoryHref: "/expertises#support-operationnel",
    title: "Tirer le meilleur de vos logiciels",
    titleAccent: "de gestion et de comptabilité.",
    description:
      "Un logiciel mal paramétré ou mal utilisé produit des données erronées qui contaminent toute votre information de gestion. Chez CAAF\u00a0SAS, nous vous accompagnons dans le choix, le paramétrage, la formation et le support de vos outils comptables et de gestion pour que la technologie serve réellement votre performance.",
    ctaPrimary: { label: "Découvrir nos services", href: "#missions" },
    ctaSecondary: { label: "Optimiser mes outils", href: "/contact" },
    stats: [
      { value: "Sage", label: "Expert certifié" },
      { value: "OHADA", label: "Paramétrage conforme" },
      { value: "Formation", label: "Sur mesure" },
      { value: "Support", label: "Réactif" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop",
    },
  },

  sousServices: {
    eyebrow: "Nos services",
    title: "Du choix du logiciel au support quotidien,",
    titleAccent: "un accompagnement de bout en bout.",
    description:
      "Nous intervenons sur toute la chaîne\u00a0: conseil en choix de solutions, paramétrage, migration de données, formation des utilisateurs et assistance technique continue.",
    sectionId: "missions",
    headerLabel: "Prestations",
    items: [
      {
        id: "conseil",
        icon: "Monitor",
        title: "Conseil en Choix de Solutions",
        subtitle: "Aide à la décision",
        description:
          "Analyse de vos besoins, benchmark des solutions disponibles sur le marché congolais et recommandation du logiciel le plus adapté à votre taille, votre secteur et votre budget.",
        deliverables: [
          "Cahier des charges fonctionnel",
          "Comparatif des solutions évaluées",
          "Recommandation argumentée",
        ],
      },
      {
        id: "parametrage",
        icon: "Settings",
        title: "Paramétrage & Déploiement",
        subtitle: "Configuration aux normes",
        description:
          "Paramétrage complet de votre logiciel comptable ou de gestion\u00a0: plan de comptes OHADA, journaux, tiers, taxes, modèles d'état et interfaces avec vos autres systèmes.",
        deliverables: [
          "Plan de comptes SYSCOHADA paramétré",
          "Journaux et modèles d'écriture configurés",
          "Interfaces et imports/exports testés",
        ],
      },
      {
        id: "migration",
        icon: "Database",
        title: "Migration de Données",
        subtitle: "Reprise de l'historique",
        description:
          "Migration sécurisée de vos données depuis votre ancien système ou depuis Excel\u00a0: balances d'ouverture, fichier tiers, catalogue articles, historique des écritures.",
        deliverables: [
          "Plan de migration documenté",
          "Données migrées et vérifiées",
          "Rapport de contrôle post-migration",
        ],
      },
      {
        id: "formation",
        icon: "GraduationCap",
        title: "Formation des Utilisateurs",
        subtitle: "Montée en compétences",
        description:
          "Sessions de formation pratiques, adaptées au niveau de chaque utilisateur\u00a0: saisie courante, états de gestion, clôtures, requêtes et personnalisation des éditions.",
        deliverables: [
          "Programme de formation personnalisé",
          "Supports de cours et fiches pratiques",
          "Évaluation des acquis",
        ],
      },
      {
        id: "support",
        icon: "Headphones",
        title: "Support & Assistance Technique",
        subtitle: "Helpdesk comptable",
        description:
          "Assistance technique réactive pour résoudre les problèmes quotidiens\u00a0: erreurs de saisie, blocages, mises à jour, pannes et questions d'utilisation.",
        deliverables: [
          "Hotline dédiée (téléphone et email)",
          "Intervention à distance ou sur site",
          "Rapport mensuel des interventions",
        ],
      },
    ],
  },

  approche: {
    eyebrow: "Notre approche",
    title: "La technologie au service",
    titleAccent: "de la comptabilité, pas l'inverse.",
    description:
      "Nous sommes des comptables qui maîtrisent les logiciels, pas des informaticiens qui essaient de comprendre la comptabilité. Cette différence change tout.",
    totalSteps: "05",
    stepLabel: "Étape",
    steps: [
      {
        number: "01",
        id: "audit",
        icon: "ScanSearch",
        title: "Audit de l'existant",
        description:
          "Évaluation de votre environnement logiciel actuel\u00a0: outils utilisés, niveau de paramétrage, qualité des données, compétences des utilisateurs et problèmes récurrents.",
        details: [
          "Inventaire des logiciels et versions",
          "Évaluation du paramétrage actuel",
          "Identification des dysfonctionnements",
          "Niveau de compétences des utilisateurs",
        ],
      },
      {
        number: "02",
        id: "specification",
        icon: "ClipboardList",
        title: "Spécifications & Planification",
        description:
          "Définition des besoins fonctionnels, du plan de paramétrage et du calendrier de déploiement ou d'optimisation.",
        details: [
          "Cahier des charges fonctionnel",
          "Plan de paramétrage détaillé",
          "Calendrier de déploiement",
          "Plan de formation des utilisateurs",
        ],
      },
      {
        number: "03",
        id: "implementation",
        icon: "Wrench",
        title: "Implémentation & Tests",
        description:
          "Paramétrage, migration des données et tests complets avant la mise en production. Chaque fonctionnalité est validée dans un environnement de test.",
        details: [
          "Paramétrage selon les spécifications",
          "Migration des données avec contrôles",
          "Tests fonctionnels complets",
          "Validation par les utilisateurs clés",
        ],
      },
      {
        number: "04",
        id: "formation",
        icon: "FileOutput",
        title: "Formation & Go-live",
        description:
          "Formation des utilisateurs et mise en production assistée. Nous restons présents pendant les premières semaines pour accompagner la transition.",
        details: [
          "Sessions de formation par profil utilisateur",
          "Go-live accompagné avec support renforcé",
          "Résolution en temps réel des problèmes",
          "Documentation utilisateur livrée",
        ],
      },
      {
        number: "05",
        id: "support-continu",
        icon: "RefreshCcw",
        title: "Support continu & Évolutions",
        description:
          "Assistance technique permanente, mises à jour du paramétrage et accompagnement dans l'évolution de vos besoins.",
        details: [
          "Contrat de support annuel",
          "Hotline téléphone et email",
          "Mises à jour réglementaires (barèmes, taux)",
          "Évolutions fonctionnelles à la demande",
        ],
      },
    ],
  },

  pourquoi: {
    eyebrow: "Pourquoi CAAF",
    title: "Le support logiciel par\ndes experts-comptables.",
    description:
      "La plupart des éditeurs et intégrateurs paramètrent des logiciels. Nous, nous paramétrons la conformité comptable et fiscale dans vos logiciels. La nuance est essentielle.",
    items: [
      {
        icon: "ShieldCheck",
        title: "Expertise comptable d'abord",
        description:
          "Nous ne sommes pas des revendeurs de logiciels. Nous sommes des experts-comptables qui maîtrisent les outils. Notre paramétrage est guidé par le référentiel OHADA, pas par les fonctionnalités du logiciel.",
      },
      {
        icon: "Globe",
        title: "Conformité OHADA intégrée",
        description:
          "Plan de comptes SYSCOHADA révisé, formats d'états financiers conformes, gestion des devises — notre paramétrage respecte les spécificités du référentiel applicable en RDC.",
      },
      {
        icon: "UserCheck",
        title: "Formation orientée métier",
        description:
          "Nos formations ne sont pas des cours sur les menus du logiciel. Elles enseignent comment utiliser l'outil pour produire une information comptable fiable et des reportings exploitables.",
      },
      {
        icon: "Clock",
        title: "Support réactif",
        description:
          "Quand votre logiciel bloque en période de clôture, vous avez besoin d'une réponse en heures, pas en jours. Notre helpdesk comptable est conçu pour les urgences opérationnelles.",
      },
      {
        icon: "Zap",
        title: "Indépendance vis-à-vis des éditeurs",
        description:
          "Nous ne sommes liés à aucun éditeur. Notre recommandation est objective et guidée uniquement par vos besoins. Sage, QuickBooks, Odoo — nous travaillons avec les solutions qui vous conviennent.",
      },
      {
        icon: "BrainCircuit",
        title: "Vision intégrée",
        description:
          "Comptabilité, paie, gestion commerciale, immobilisations — nous paramétrons et formons sur l'ensemble des modules pour garantir la cohérence de votre système d'information de gestion.",
      },
    ],
  },

  secteurs: {
    eyebrow: "Secteurs servis",
    title: "Chaque secteur a\nses besoins logiciels.",
    description:
      "Le choix et le paramétrage d'un logiciel dépendent de votre secteur, de votre taille et de vos obligations spécifiques. Nous adaptons notre accompagnement à chaque contexte.",
    stripText: "Votre logiciel ne produit pas les bons résultats ?",
    stripHighlight: "Le problème est rarement le logiciel — c'est souvent le paramétrage.",
    stripCta: "Faire diagnostiquer",
    items: [
      {
        icon: "Globe2",
        title: "ONG & Organisations internationales",
        description: "Paramétrage multi-projets, multi-bailleurs, multi-devises et reporting spécifique.",
        tags: ["Multi-projets", "Multi-devises", "Bailleurs"],
        featured: true,
      },
      {
        icon: "Store",
        title: "PME & Commerce",
        description: "Mise en place de solutions intégrées comptabilité-gestion commerciale-paie.",
        tags: ["Intégré", "Simple", "Abordable"],
        featured: true,
      },
      {
        icon: "Factory",
        title: "Industrie",
        description: "Paramétrage de modules de gestion de production, stocks et comptabilité analytique.",
        tags: ["Production", "Analytique", "Stocks"],
        featured: false,
      },
      {
        icon: "Pickaxe",
        title: "Mines & Ressources",
        description: "Intégration des logiciels comptables avec les systèmes de gestion minière.",
        tags: ["Intégration", "Multi-sites", "Reporting"],
        featured: false,
      },
      {
        icon: "Building2",
        title: "Filiales de groupes",
        description: "Paramétrage conforme aux normes groupe et interfaces de consolidation.",
        tags: ["Normes groupe", "Interfaces", "Consolidation"],
        featured: false,
      },
      {
        icon: "Landmark",
        title: "Associations & Fondations",
        description: "Solutions adaptées aux budgets modestes avec reporting aux membres et donateurs.",
        tags: ["Budget maîtrisé", "Transparence", "Donateurs"],
        featured: false,
      },
    ],
  },

  cas: {
    eyebrow: "Cas d'intervention",
    title: "Des outils qui fonctionnent,\ndes équipes autonomes.",
    description:
      "Exemples anonymisés de missions de support logiciel illustrant notre approche et nos résultats concrets.",
    sectionCta: "Optimiser mes outils",
    items: [
      {
        id: "ong",
        sector: "ONG internationale",
        sectorIcon: "Globe2",
        title: "Déploiement d'une solution comptable multi-projets",
        location: "Kinshasa, RDC",
        context:
          "Une ONG internationale gérant 6 projets financés par 4 bailleurs différents utilisait Excel pour sa comptabilité. Les erreurs étaient fréquentes, les rapprochements impossibles et les reportings bailleurs systématiquement en retard.",
        approach: [
          "Analyse des besoins et rédaction du cahier des charges",
          "Sélection et paramétrage de Sage Comptabilité en mode multi-projets",
          "Migration de 3 années d'historique depuis Excel",
          "Formation de 8 utilisateurs sur 5 jours",
        ],
        results: [
          { icon: "CheckCircle2", label: "Reportings bailleurs livrés à temps dès le premier mois" },
          { icon: "TrendingUp", label: "Temps de clôture réduit de 15 jours à 3 jours" },
          { icon: "AlertTriangle", label: "Erreurs de saisie réduites de 90%" },
          { icon: "Users", label: "8 utilisateurs autonomes après 2 mois" },
        ],
        quote:
          "Le passage d'Excel à Sage avec l'accompagnement de CAAF a été une révolution pour notre bureau. Les reportings qui prenaient 2 semaines sortent maintenant en 2 heures.",
        quoteAuthor: "Directeur Administratif et Financier",
      },
      {
        id: "pme",
        sector: "PME industrielle",
        sectorIcon: "Factory",
        title: "Optimisation du paramétrage Sage pour une PME en croissance",
        location: "Lubumbashi, RDC",
        context:
          "Une PME industrielle utilisait Sage depuis 3 ans mais le paramétrage initial n'avait jamais été revu. Le plan de comptes ne correspondait pas au SYSCOHADA, les états financiers étaient incorrects et la TVA mal calculée.",
        approach: [
          "Audit complet du paramétrage existant",
          "Restructuration du plan de comptes selon le SYSCOHADA révisé",
          "Correction des paramètres de TVA et création des modèles d'état",
          "Formation de recyclage du comptable et du directeur",
        ],
        results: [
          { icon: "CheckCircle2", label: "États financiers conformes au SYSCOHADA dès la clôture suivante" },
          { icon: "TrendingUp", label: "TVA correctement calculée — fin des redressements" },
          { icon: "AlertTriangle", label: "23 anomalies de paramétrage corrigées" },
          { icon: "Users", label: "Comptable désormais autonome sur les clôtures" },
        ],
        quote:
          "Nous utilisions Sage depuis 3 ans sans savoir qu'il était mal paramétré. CAAF a tout corrigé et maintenant nos comptes sont enfin justes.",
        quoteAuthor: "Gérant de la PME",
      },
    ],
  },

  cta: {
    eyebrow: "Prochaine étape",
    title: "Faites de vos logiciels",
    titleAccent: "de vrais outils de pilotage.",
    description:
      "Un diagnostic de votre environnement logiciel permet d'identifier rapidement les problèmes de paramétrage et les opportunités d'optimisation. Parlons-en.",
    trustPoints: [
      "Diagnostic en une demi-journée",
      "Recommandations actionnables immédiatement",
      "Formation sur mesure incluse",
      "Support continu disponible",
    ],
    primaryCta: { label: "Demander un diagnostic", href: "/contact" },
    secondaryCta: { label: "Appeler le cabinet", href: "tel:+243XXXXXXXX" },
    watermarkIcon: "Monitor",
    contactOptions: [
      {
        icon: "Calendar",
        title: "Diagnostic logiciel",
        description: "Une demi-journée pour évaluer votre paramétrage.",
        href: "/contact",
        cta: "Planifier le diagnostic",
        primary: true,
      },
      {
        icon: "Phone",
        title: "Appeler directement",
        description: "+243 XX XXX XXXX — du lundi au vendredi, 8h–17h.",
        href: "tel:+243XXXXXXXX",
        cta: "Appeler maintenant",
        primary: false,
      },
      {
        icon: "Mail",
        title: "Écrire au cabinet",
        description: "support@caaf-rdc.com — réponse sous 24h ouvrées.",
        href: "mailto:support@caaf-rdc.com",
        cta: "Envoyer un email",
        primary: false,
      },
    ],
    stats: [
      { value: "½ jour", label: "Diagnostic" },
      { value: "Sage", label: "Expertise" },
      { value: "Autonomie", label: "Objectif" },
    ],
  },
}
import type { ExpertisePageConfig } from "./types"

export const manuelsDeProcedureConfig: ExpertisePageConfig = {
  slug: "manuels-de-procedure",

  hero: {
    category: "Support Opérationnel",
    categoryHref: "/expertises#support-operationnel",
    title: "Formaliser vos pratiques,",
    titleAccent: "pérenniser votre savoir-faire.",
    description:
      "Un manuel de procédures n'est pas un document de plus dans une armoire. C'est le socle de votre organisation\u00a0: il décrit qui fait quoi, comment et avec quels contrôles. Chez CAAF\u00a0SAS, nous rédigeons des manuels de procédures vivants, opérationnels et réellement utilisés par vos équipes.",
    ctaPrimary: { label: "Découvrir notre démarche", href: "#missions" },
    ctaSecondary: { label: "Formaliser mes procédures", href: "/contact" },
    stats: [
      { value: "COSO", label: "Cadre de référence" },
      { value: "Opérationnel", label: "Résultat garanti" },
      { value: "Sur mesure", label: "Adapté à votre contexte" },
      { value: "Vivant", label: "Manuel actualisable" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1920&auto=format&fit=crop",
    },
  },

  sousServices: {
    eyebrow: "Nos services",
    title: "Du diagnostic à la formation,",
    titleAccent: "un accompagnement complet.",
    description:
      "Nous ne nous contentons pas de rédiger des documents. Nous cartographions vos processus, identifions les risques, intégrons les contrôles et formons vos équipes.",
    sectionId: "missions",
    headerLabel: "Types de manuels",
    items: [
      {
        id: "comptable",
        icon: "BookOpen",
        title: "Manuel de Procédures Comptables",
        subtitle: "Référentiel comptable interne",
        description:
          "Formalisation de l'ensemble des procédures comptables\u00a0: plan de comptes, schémas d'écriture, processus de clôture, archivage — conforme au SYSCOHADA révisé.",
        deliverables: [
          "Manuel de procédures comptables complet",
          "Plan de comptes annoté",
          "Schémas d'écriture par cycle",
        ],
      },
      {
        id: "administratif",
        icon: "FileText",
        title: "Manuel de Procédures Administratives",
        subtitle: "Organisation & Gouvernance",
        description:
          "Formalisation des procédures administratives\u00a0: achats, ventes, trésorerie, immobilisations, RH, voyages — avec les circuits de validation et les niveaux d'autorisation.",
        deliverables: [
          "Manuel de procédures administratives",
          "Matrice des autorisations et délégations",
          "Flowcharts des processus clés",
        ],
      },
      {
        id: "operationnel",
        icon: "Workflow",
        title: "Manuel de Procédures Opérationnelles",
        subtitle: "Processus métier",
        description:
          "Documentation des processus spécifiques à votre métier\u00a0: production, logistique, maintenance, gestion de projet — avec les points de contrôle et les indicateurs de performance.",
        deliverables: [
          "Manuel de procédures opérationnelles",
          "Fiches de processus détaillées",
          "Indicateurs de performance par processus",
        ],
      },
      {
        id: "controle",
        icon: "CheckSquare",
        title: "Intégration des Contrôles Internes",
        subtitle: "Risques & Contrôles",
        description:
          "Pour chaque procédure, nous identifions les risques associés et intégrons les contrôles nécessaires pour garantir que le processus fonctionne comme prévu.",
        deliverables: [
          "Matrice risques-contrôles par processus",
          "Points de contrôle intégrés dans les procédures",
          "Checklist d'auto-évaluation",
        ],
      },
      {
        id: "mise-a-jour",
        icon: "PenTool",
        title: "Mise à Jour & Actualisation",
        subtitle: "Manuels existants",
        description:
          "Revue et actualisation de manuels de procédures existants pour intégrer les changements organisationnels, réglementaires ou technologiques survenus depuis leur rédaction.",
        deliverables: [
          "Audit du manuel existant",
          "Version actualisée et validée",
          "Log des modifications",
        ],
      },
    ],
  },

  approche: {
    eyebrow: "Notre méthode",
    title: "Des procédures écrites",
    titleAccent: "par ceux qui les comprennent.",
    description:
      "Nos rédacteurs sont des auditeurs. Ils ne décrivent pas seulement ce qui devrait se passer — ils vérifient ce qui se passe réellement et conçoivent des procédures qui fonctionnent dans votre contexte.",
    totalSteps: "05",
    stepLabel: "Étape",
    steps: [
      {
        number: "01",
        id: "cartographie",
        icon: "ScanSearch",
        title: "Cartographie de l'existant",
        description:
          "Avant de rédiger, nous observons. Nous cartographions vos processus réels, pas ceux que vous imaginez avoir.",
        details: [
          "Entretiens avec les responsables de processus",
          "Observation directe des pratiques terrain",
          "Identification des processus formalisés vs informels",
          "Recensement des outils et supports utilisés",
        ],
      },
      {
        number: "02",
        id: "analyse",
        icon: "ClipboardList",
        title: "Analyse des risques par processus",
        description:
          "Pour chaque processus, nous identifions les risques d'erreur, de fraude ou de non-conformité et les contrôles nécessaires.",
        details: [
          "Identification des risques par étape du processus",
          "Évaluation de l'impact et de la probabilité",
          "Définition des contrôles clés à intégrer",
          "Validation avec les opérationnels",
        ],
      },
      {
        number: "03",
        id: "redaction",
        icon: "Settings",
        title: "Rédaction des procédures",
        description:
          "Rédaction structurée de chaque procédure\u00a0: objet, périmètre, responsabilités, étapes détaillées, points de contrôle, documents associés et indicateurs.",
        details: [
          "Rédaction selon un format standardisé",
          "Intégration des flowcharts et matrices RACI",
          "Points de contrôle et validations intégrés",
          "Revue contradictoire avec les opérationnels",
        ],
      },
      {
        number: "04",
        id: "validation",
        icon: "FileOutput",
        title: "Validation & Diffusion",
        description:
          "Validation formelle du manuel par la direction, diffusion aux équipes et organisation des sessions de présentation.",
        details: [
          "Revue et validation par la direction",
          "Mise en page professionnelle du manuel",
          "Diffusion contrôlée aux utilisateurs",
          "Sessions de présentation par service",
        ],
      },
      {
        number: "05",
        id: "formation",
        icon: "RefreshCcw",
        title: "Formation & Appropriation",
        description:
          "Un manuel non compris est un manuel inutile. Nous formons vos équipes à l'utilisation des procédures et vérifions leur appropriation.",
        details: [
          "Sessions de formation par groupe de processus",
          "Exercices pratiques et mises en situation",
          "Évaluation de l'appropriation",
          "Mécanisme de mise à jour défini",
        ],
      },
    ],
  },

  pourquoi: {
    eyebrow: "Pourquoi CAAF",
    title: "Un manuel écrit par un auditeur\nvaut mieux qu'un guide théorique.",
    description:
      "La différence entre un bon et un mauvais manuel de procédures tient en un mot\u00a0: l'applicabilité. Nos manuels sont écrits par des auditeurs qui savent ce qui fonctionne sur le terrain.",
    items: [
      {
        icon: "ShieldCheck",
        title: "Rédigé par des auditeurs",
        description:
          "Nos rédacteurs sont des auditeurs expérimentés. Ils connaissent les failles, les risques et les contrôles qui font la différence entre un processus sûr et un processus vulnérable.",
      },
      {
        icon: "Globe",
        title: "Adapté au contexte congolais",
        description:
          "Nous ne livrons pas des templates importés. Chaque procédure est écrite en tenant compte des réalités opérationnelles, culturelles et réglementaires de la RDC.",
      },
      {
        icon: "UserCheck",
        title: "Co-construit avec vos équipes",
        description:
          "Nous impliquons vos équipes dans chaque étape pour garantir que les procédures reflètent la réalité et soient acceptées par ceux qui devront les appliquer.",
      },
      {
        icon: "Layers",
        title: "Contrôles internes intégrés",
        description:
          "Chaque procédure intègre les points de contrôle issus de notre analyse des risques. Le manuel devient un outil de contrôle interne et pas seulement un guide opérationnel.",
      },
      {
        icon: "Clock",
        title: "Livraison dans les délais",
        description:
          "Un projet de manuel a une date de fin. Nous nous engageons sur un calendrier et le tenons — parce que vos équipes ont besoin de ces procédures maintenant.",
      },
      {
        icon: "Zap",
        title: "Format exploitable",
        description:
          "Nos manuels sont livrés en format éditable pour que vous puissiez les mettre à jour facilement. Nous incluons un guide de maintenance du document.",
      },
    ],
  },

  secteurs: {
    eyebrow: "Secteurs concernés",
    title: "Toutes les organisations\nont besoin de procédures.",
    description:
      "Qu'elles soient exigées par un bailleur, un régulateur ou la direction elle-même, les procédures formalisées sont la base de toute organisation performante.",
    stripText: "Vos procédures ne sont pas documentées ?",
    stripHighlight: "C'est le moment de formaliser avant le prochain audit.",
    stripCta: "Nous contacter",
    items: [
      {
        icon: "Globe2",
        title: "ONG & Organisations internationales",
        description: "Manuels exigés par les bailleurs\u00a0: Banque Mondiale, UE, USAID, agences ONU.",
        tags: ["Bailleurs", "Conformité", "Projets"],
        featured: true,
      },
      {
        icon: "Landmark",
        title: "Banque & Finance",
        description: "Manuels de procédures bancaires conformes aux circulaires BCC.",
        tags: ["BCC", "Conformité", "Opérations"],
        featured: true,
      },
      {
        icon: "Factory",
        title: "Industrie",
        description: "Procédures de production, qualité, maintenance et HSE.",
        tags: ["Production", "Qualité", "HSE"],
        featured: false,
      },
      {
        icon: "Pickaxe",
        title: "Mines & Ressources",
        description: "Manuels de procédures pour les opérations minières et la sous-traitance.",
        tags: ["Opérations", "Sous-traitance", "HSE"],
        featured: false,
      },
      {
        icon: "Building2",
        title: "Groupes & Holdings",
        description: "Manuels groupe harmonisant les procédures entre filiales.",
        tags: ["Groupe", "Harmonisation", "Filiales"],
        featured: false,
      },
      {
        icon: "Store",
        title: "PME & Commerce",
        description: "Premiers manuels pour structurer la croissance et préparer l'audit.",
        tags: ["Structuration", "Croissance", "Premier manuel"],
        featured: false,
      },
    ],
  },

  cas: {
    eyebrow: "Cas d'intervention",
    title: "Des organisations structurées,\ndes audits réussis.",
    description:
      "Exemples anonymisés de missions de rédaction de manuels de procédures et leur impact sur la gouvernance des organisations.",
    sectionCta: "Formaliser mes procédures",
    items: [
      {
        id: "ong",
        sector: "ONG internationale",
        sectorIcon: "Globe2",
        title: "Rédaction du manuel de procédures pour un programme Banque Mondiale",
        location: "Kinshasa, RDC",
        context:
          "Un programme financé par la Banque Mondiale exigeait un manuel de procédures administratives, comptables et de passation des marchés conforme aux directives du bailleur, comme condition préalable au premier décaissement.",
        approach: [
          "Revue des directives et exigences spécifiques de la Banque Mondiale",
          "Cartographie des processus du programme avec l'équipe projet",
          "Rédaction du manuel en français et en anglais",
          "Formation de l'ensemble du personnel du programme",
        ],
        results: [
          { icon: "CheckCircle2", label: "Manuel validé par la Banque Mondiale sans réserve" },
          { icon: "TrendingUp", label: "Premier décaissement obtenu dans les délais" },
          { icon: "AlertTriangle", label: "15 processus formalisés couvrant 100% des opérations" },
          { icon: "Users", label: "32 agents formés à l'utilisation du manuel" },
        ],
        quote:
          "Le manuel produit par CAAF a été qualifié de « modèle » par la mission de supervision de la Banque Mondiale. Un travail remarquable.",
        quoteAuthor: "Coordonnateur du Programme",
      },
      {
        id: "groupe",
        sector: "Groupe industriel",
        sectorIcon: "Factory",
        title: "Harmonisation des procédures d'un groupe multi-filiales",
        location: "Lubumbashi & Kinshasa, RDC",
        context:
          "Un groupe industriel congolais comptant 4 filiales opérait avec des procédures disparates d'une filiale à l'autre. L'absence d'harmonisation rendait la consolidation difficile et le contrôle interne inefficace.",
        approach: [
          "Diagnostic des procédures existantes dans chaque filiale",
          "Identification des meilleures pratiques à généraliser",
          "Rédaction d'un manuel groupe couvrant tous les processus transversaux",
          "Déploiement et formation dans chaque filiale",
        ],
        results: [
          { icon: "CheckCircle2", label: "Manuel groupe unique déployé dans les 4 filiales" },
          { icon: "TrendingUp", label: "Délai de consolidation réduit de 60%" },
          { icon: "AlertTriangle", label: "23 incohérences inter-filiales éliminées" },
          { icon: "Users", label: "Audit externe facilité dès le premier exercice" },
        ],
        quote:
          "Pour la première fois, nos 4 filiales parlent le même langage. Le manuel CAAF a été le ciment de notre gouvernance groupe.",
        quoteAuthor: "Directeur Général du Groupe",
      },
    ],
  },

  cta: {
    eyebrow: "Prochaine étape",
    title: "Formalisez vos pratiques",
    titleAccent: "avant qu'un audit ne le fasse pour vous.",
    description:
      "Un manuel de procédures bien conçu est le meilleur investissement en gouvernance que vous puissiez faire. Parlons de vos besoins.",
    trustPoints: [
      "Diagnostic initial gratuit",
      "Livraison en 4 à 8 semaines selon le périmètre",
      "Format éditable pour mises à jour futures",
      "Formation de vos équipes incluse",
    ],
    primaryCta: { label: "Demander un devis", href: "/contact" },
    secondaryCta: { label: "Appeler le cabinet", href: "tel:+243999309901" },
    watermarkIcon: "BookOpen",
    contactOptions: [
      {
        icon: "Calendar",
        title: "Réunion de cadrage",
        description: "Définissons ensemble le périmètre et le calendrier du projet.",
        href: "/contact",
        cta: "Planifier la réunion",
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
        description: "procedures@caaf-rdc.com — réponse sous 24h ouvrées.",
        href: "mailto:procedures@caaf-rdc.com",
        cta: "Envoyer un email",
        primary: false,
      },
    ],
    stats: [
      { value: "4-8 sem.", label: "Délai de livraison" },
      { value: "Éditable", label: "Format livré" },
      { value: "Formation", label: "Incluse" },
    ],
  },
}
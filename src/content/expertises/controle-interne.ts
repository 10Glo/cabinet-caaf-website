import { ExpertisePageConfig } from "./types"

export const controleInterneConfig: ExpertisePageConfig = {
  slug: "controle-interne",

  hero: {
    category: "Risk Assurance Services",
    categoryHref: "/expertises#risk-assurance",
    title: "Un dispositif de contrôle robuste,",
    titleAccent: "pour une gouvernance sans failles.",
    description:
      "Le contrôle interne est le système nerveux de votre organisation. Il garantit que vos objectifs sont atteints, vos actifs protégés et vos informations fiables. Chez CAAF SAS, nous évaluons, concevons et renforçons votre dispositif selon le référentiel COSO.",
    ctaPrimary: { label: "Découvrir notre approche", href: "#missions" },
    ctaSecondary: { label: "Évaluer mon dispositif", href: "/contact" },
    stats: [
      { value: "COSO", label: "Référentiel" },
      { value: "5", label: "Composantes évaluées" },
      { value: "360°", label: "Vision de l'organisation" },
      { value: "100%", label: "Objectivité garantie" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1920&auto=format&fit=crop",
    },
  },

  sousServices: {
    eyebrow: "Nos interventions",
    title: "Du diagnostic à la mise en œuvre,",
    titleAccent: "nous couvrons tout le cycle.",
    description:
      "Le contrôle interne n'est pas un état statique. C'est un processus vivant qui doit évoluer avec votre organisation. Nous intervenons à chaque étape de ce cycle.",
    sectionId: "missions",
    headerLabel: "Types d'intervention",
    items: [
      {
        id: "diagnostic",
        icon: "FileSearch",
        title: "Diagnostic du dispositif",
        subtitle: "État des lieux",
        description:
          "Évaluation complète de votre dispositif de contrôle interne selon les 5 composantes COSO : environnement de contrôle, évaluation des risques, activités de contrôle, information & communication, pilotage.",
        deliverables: [
          "Rapport de diagnostic avec notation par composante",
          "Cartographie des lacunes et faiblesses identifiées",
          "Plan de remédiation priorisé",
        ],
      },
      {
        id: "conception",
        icon: "Settings",
        title: "Conception du dispositif",
        subtitle: "Mise en place from scratch",
        description:
          "Pour les organisations qui n'ont pas encore de dispositif structuré, nous concevons de A à Z l'ensemble des procédures, contrôles et outils nécessaires à une gouvernance solide.",
        deliverables: [
          "Politique de contrôle interne",
          "Manuel des procédures clés",
          "Matrice des risques et contrôles (RCM)",
        ],
      },
      {
        id: "test",
        icon: "ClipboardCheck",
        title: "Test d'effectivité",
        subtitle: "Vérification en conditions réelles",
        description:
          "Les contrôles conçus fonctionnent-ils vraiment ? Nous testons l'application effective des procédures sur le terrain pour identifier les écarts entre le prescrit et le réel.",
        deliverables: [
          "Rapport de test des contrôles clés",
          "Taux d'effectivité par processus",
          "Recommandations de renforcement",
        ],
      },
      {
        id: "formation",
        icon: "BookOpen",
        title: "Sensibilisation & Formation",
        subtitle: "Ancrage dans la culture",
        description:
          "Le meilleur dispositif ne sert à rien si les équipes ne comprennent pas leur rôle. Nous formons vos managers et opérationnels aux enjeux et aux pratiques du contrôle interne.",
        deliverables: [
          "Programme de formation sur mesure",
          "Supports pédagogiques",
          "Évaluation des acquis",
        ],
      },
    ],
  },

  approche: {
    eyebrow: "Notre méthode",
    title: "COSO comme boussole,",
    titleAccent: "pragmatisme comme moteur.",
    description:
      "Notre approche repose sur le cadre COSO internationalement reconnu, adapté aux réalités opérationnelles et culturelles de vos équipes en RDC.",
    totalSteps: "05",
    stepLabel: "Étape",
    steps: [
      {
        number: "01",
        id: "cadrage",
        icon: "BarChart3",
        title: "Cadrage stratégique",
        description:
          "Nous comprenons vos objectifs stratégiques, votre modèle d'affaires et votre appétence au risque avant de toucher aux procédures.",
        details: [
          "Entretiens avec la direction générale",
          "Revue des objectifs et indicateurs stratégiques",
          "Identification des processus critiques",
        ],
      },
      {
        number: "02",
        id: "risques",
        icon: "ShieldCheck",
        title: "Identification des risques",
        description:
          "Cartographie des risques inhérents par processus : financiers, opérationnels, de conformité et stratégiques.",
        details: [
          "Workshops avec les responsables de processus",
          "Évaluation probabilité × impact",
          "Priorisation des risques résiduels",
        ],
      },
      {
        number: "03",
        id: "controles",
        icon: "ClipboardCheck",
        title: "Revue des contrôles existants",
        description:
          "Pour chaque risque identifié, nous recensons les contrôles en place et évaluons leur conception et leur effectivité.",
        details: [
          "Entretiens et observation des pratiques réelles",
          "Test de la conception des contrôles",
          "Identification des contrôles manquants",
        ],
      },
      {
        number: "04",
        id: "renforcement",
        icon: "Settings",
        title: "Plan de renforcement",
        description:
          "Nous proposons des contrôles additionnels et des améliorations concrètes, priorisées selon le niveau de risque et la faisabilité opérationnelle.",
        details: [
          "Matrice risques-contrôles actualisée (RCM)",
          "Fiches de procédures pour les contrôles clés",
          "Calendrier de mise en œuvre réaliste",
        ],
      },
      {
        number: "05",
        id: "suivi",
        icon: "Lock",
        title: "Monitoring & Amélioration continue",
        description:
          "Un dispositif de contrôle interne n'est jamais définitif. Nous mettons en place les outils de pilotage pour que votre organisation maintienne et améliore son niveau de maîtrise.",
        details: [
          "Tableau de bord des indicateurs de contrôle",
          "Revue périodique du dispositif",
          "Intégration dans le reporting direction",
        ],
      },
    ],
  },

  pourquoi: {
    eyebrow: "Pourquoi CAAF",
    title: "Le contrôle interne vu\npar des auditeurs terrain.",
    description:
      "Nous ne livrons pas des rapports théoriques. Nous concevons des dispositifs qui fonctionnent réellement dans vos contextes opérationnels spécifiques.",
    items: [
      {
        icon: "BookOpen",
        title: "Maîtrise du référentiel COSO",
        description:
          "Nous appliquons rigoureusement les 5 composantes et 17 principes du COSO 2013, le standard international en matière de contrôle interne.",
      },
      {
        icon: "Globe",
        title: "Adaptation au contexte congolais",
        description:
          "Nos recommandations tiennent compte des réalités locales : ressources humaines, contraintes IT, culture d'entreprise et environnement réglementaire.",
      },
      {
        icon: "UserCheck",
        title: "Approche participative",
        description:
          "Nous travaillons avec vos équipes, pas au-dessus d'elles. Cette approche garantit l'adhésion et la pérennité des améliorations.",
      },
      {
        icon: "Languages",
        title: "Livrables actionnables",
        description:
          "Nos rapports ne sont pas des constats académiques. Chaque recommandation est accompagnée d'un plan d'action concret, chiffré et priorisé.",
      },
      {
        icon: "Clock",
        title: "Rapidité d'exécution",
        description:
          "Nos équipes sont structurées pour intervenir rapidement et livrer des diagnostics exploitables sans mobiliser vos équipes pendant des mois.",
      },
      {
        icon: "Zap",
        title: "Vision transversale",
        description:
          "Notre expérience multi-sectorielle nous permet d'identifier les meilleures pratiques d'autres secteurs et de les adapter à votre contexte.",
      },
    ],
  },

  secteurs: {
    eyebrow: "Secteurs concernés",
    title: "Le contrôle interne\nest universel.",
    description:
      "Qu'il soit imposé par un régulateur, exigé par un investisseur ou voulu par la direction, le contrôle interne concerne toutes les organisations qui souhaitent maîtriser leurs opérations.",
    stripText: "Votre secteur n'apparaît pas ?",
    stripHighlight: "Toutes les organisations bénéficient d'un dispositif de contrôle robuste.",
    stripCta: "Échangeons",
    items: [
      {
        icon: "Landmark",
        title: "Banque & Finance",
        description:
          "Contrôle interne des processus de crédit, trésorerie, conformité et reporting prudentiel selon les exigences de la BCC.",
        tags: ["BCC", "Prudentiel", "Crédit"],
        featured: true,
      },
      {
        icon: "Pickaxe",
        title: "Mines & Ressources",
        description:
          "Maîtrise des processus d'achat, de production, de vente et de reporting pour les groupes miniers opérant en RDC.",
        tags: ["Achats", "Production", "Reporting"],
        featured: true,
      },
      {
        icon: "Factory",
        title: "Industrie",
        description: "Contrôle des processus de fabrication, stockage et distribution.",
        tags: ["Manufacturing", "Stocks", "Qualité"],
        featured: false,
      },
      {
        icon: "Building2",
        title: "Groupes & Holdings",
        description: "Contrôle interne au niveau groupe avec harmonisation inter-filiales.",
        tags: ["Groupe", "Consolidation", "Filiales"],
        featured: false,
      },
      {
        icon: "Globe2",
        title: "ONG & Organisations internationales",
        description: "Conformité aux exigences des bailleurs en matière de gestion des fonds.",
        tags: ["Bailleurs", "Conformité", "Traçabilité"],
        featured: false,
      },
      {
        icon: "HeartPulse",
        title: "Santé & Éducation",
        description: "Maîtrise des processus de gestion dans les structures à but non lucratif.",
        tags: ["Hôpitaux", "Écoles", "Associations"],
        featured: false,
      },
    ],
  },

  cas: {
    eyebrow: "Cas d'intervention",
    title: "Des dispositifs qui font\nla différence.",
    description:
      "Exemples anonymisés de missions de contrôle interne menées dans des contextes exigeants.",
    sectionCta: "Évaluer mon dispositif",
    items: [
      {
        id: "holding",
        sector: "Groupe industriel",
        sectorIcon: "Factory",
        title: "Refonte complète du dispositif de contrôle interne",
        location: "Kinshasa, RDC",
        context:
          "Un groupe industriel en forte croissance avait des processus de contrôle disparates entre ses cinq filiales. La direction souhaitait un dispositif harmonisé avant une levée de fonds.",
        approach: [
          "Diagnostic simultané dans les 5 filiales sur 6 semaines",
          "Identification de 47 lacunes de contrôle significatives",
          "Conception d'un référentiel de contrôle groupe unifié",
          "Formation des contrôleurs internes dans chaque filiale",
        ],
        results: [
          { icon: "CheckCircle2", label: "Dispositif unifié déployé en 4 mois" },
          { icon: "TrendingUp", label: "Réduction de 60% des erreurs de reporting" },
          { icon: "AlertTriangle", label: "Détection de 3 fraudes mineures lors du diagnostic" },
          { icon: "ShieldCheck", label: "Levée de fonds réussie grâce au dispositif renforcé" },
        ],
        quote:
          "Pour la première fois, nous avions une vision claire de ce qui se passait réellement dans nos filiales.",
        quoteAuthor: "DG du Groupe",
      },
      {
        id: "banque",
        sector: "Banque commerciale",
        sectorIcon: "Landmark",
        title: "Préparation à l'inspection BCC",
        location: "Kinshasa, RDC",
        context:
          "Une banque commerciale anticipait une inspection de la Banque Centrale du Congo et souhaitait s'assurer que son dispositif de contrôle interne répondait aux exigences réglementaires.",
        approach: [
          "Revue complète selon le guide d'inspection BCC",
          "Tests approfondis sur les processus de crédit et de conformité",
          "Simulation d'inspection interne avec les équipes",
          "Remédiation accélérée des lacunes identifiées",
        ],
        results: [
          { icon: "CheckCircle2", label: "Inspection BCC passée sans observation majeure" },
          { icon: "TrendingUp", label: "Score de conformité amélioré de 68% à 91%" },
          { icon: "ShieldCheck", label: "Manuel de contrôle interne validé par la direction" },
          { icon: "AlertTriangle", label: "24 points de contrôle renforcés avant l'inspection" },
        ],
        quote:
          "L'équipe CAAF nous a aidés à voir notre dispositif avec les yeux du régulateur. Inestimable.",
        quoteAuthor: "Directeur des Risques",
      },
    ],
  },

  cta: {
    eyebrow: "Première étape",
    title: "Commençons par un",
    titleAccent: "diagnostic de votre dispositif.",
    description:
      "Votre contrôle interne est-il à la hauteur de vos ambitions et de vos obligations ? Une demi-journée de diagnostic suffit pour identifier les priorités d'action.",
    trustPoints: [
      "Diagnostic initial offert",
      "Résultats présentés en 48h",
      "Recommandations immédiatement actionnables",
      "Confidentialité garantie",
    ],
    primaryCta: { label: "Demander un diagnostic", href: "/contact" },
    secondaryCta: { label: "Appeler le cabinet", href: "tel:+243999309901" },
    watermarkIcon: "ShieldCheck",
    contactOptions: [
      {
        icon: "Calendar",
        title: "Diagnostic gratuit",
        description: "Une demi-journée pour évaluer votre dispositif actuel.",
        href: "/contact",
        cta: "Réserver une date",
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
        description: "contact@caaf.cd — réponse sous 24h ouvrées.",
        href: "mailto:contact@caaf.cd",
        cta: "Envoyer un email",
        primary: false,
      },
    ],
    stats: [
      { value: "48h", label: "Résultats du diagnostic" },
      { value: "COSO", label: "Référentiel appliqué" },
      { value: "100%", label: "Confidentiel" },
    ],
  },
}
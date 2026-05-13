import type { ExpertisePageConfig } from "./types"

export const maitriseDesRisquesConfig: ExpertisePageConfig = {
  slug: "maitrise-des-risques",

  hero: {
    category: "Risk Assurance Services",
    categoryHref: "/expertises#risk-assurance",
    title: "Transformer vos risques identifiés",
    titleAccent: "en risques maîtrisés.",
    description:
      "La maîtrise des risques va au-delà de la cartographie. Elle garantit que les dispositifs de contrôle mis en place fonctionnent réellement, que les plans de traitement sont exécutés et que le niveau de risque résiduel reste dans les limites définies par votre direction. C'est le passage de la théorie à la pratique.",
    ctaPrimary: { label: "Évaluer ma maîtrise", href: "#missions" },
    ctaSecondary: { label: "Renforcer mes contrôles", href: "/contact" },
    stats: [
      { value: "COSO", label: "Cadre de référence" },
      { value: "KRI", label: "Indicateurs de risque" },
      { value: "Continu", label: "Monitoring permanent" },
      { value: "Résiduel", label: "Risque mesuré" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop",
    },
  },

  sousServices: {
    eyebrow: "Nos interventions",
    title: "Identifier un risque ne suffit pas,",
    titleAccent: "il faut le maîtriser.",
    description:
      "La maîtrise des risques repose sur l'efficacité réelle de vos contrôles, la qualité de votre monitoring et la capacité de votre organisation à réagir aux signaux d'alerte.",
    sectionId: "missions",
    headerLabel: "Nos services",
    items: [
      {
        id: "evaluation-controles",
        icon: "ClipboardCheck",
        title: "Évaluation de l'effectivité des contrôles",
        subtitle: "Les contrôles fonctionnent-ils vraiment ?",
        description:
          "Test systématique des contrôles censés couvrir vos risques prioritaires. Nous vérifions que les procédures prescrites sont appliquées sur le terrain et que les contrôles produisent les résultats attendus.",
        deliverables: [
          "Rapport d'effectivité par processus et par risque",
          "Taux de couverture des risques par les contrôles",
          "Recommandations de renforcement priorisées",
        ],
      },
      {
        id: "monitoring",
        icon: "Gauge",
        title: "Mise en place du monitoring continu",
        subtitle: "Surveillance en temps réel",
        description:
          "Conception et déploiement d'un système de monitoring des risques basé sur des indicateurs clés (KRI) permettant de détecter les dérives avant qu'elles ne deviennent des incidents.",
        deliverables: [
          "Tableau de bord des KRI par catégorie de risque",
          "Seuils d'alerte et procédures d'escalade",
          "Reporting automatisé pour la direction",
        ],
      },
      {
        id: "plan-continuite",
        icon: "Lock",
        title: "Plan de continuité d'activité (PCA)",
        subtitle: "Résilience organisationnelle",
        description:
          "Élaboration de plans de continuité et de reprise d'activité pour garantir que votre organisation peut maintenir ses opérations critiques en cas d'incident majeur.",
        deliverables: [
          "Business Impact Analysis (BIA)",
          "Plan de continuité d'activité documenté",
          "Exercices de simulation et tests",
        ],
      },
      {
        id: "reporting",
        icon: "LineChart",
        title: "Reporting risques & Gouvernance",
        subtitle: "Information décisionnelle",
        description:
          "Structuration du reporting des risques pour les organes de gouvernance\u00a0: comité des risques, comité d'audit, conseil d'administration. Des informations claires pour des décisions éclairées.",
        deliverables: [
          "Modèle de reporting trimestriel des risques",
          "Dashboard interactif pour le comité",
          "Rapport annuel sur le profil de risque",
        ],
      },
    ],
  },

  approche: {
    eyebrow: "Notre méthode",
    title: "Du diagnostic à l'assurance,",
    titleAccent: "un processus rigoureux.",
    description:
      "Notre approche de maîtrise des risques s'appuie sur cinq phases conçues pour garantir que votre dispositif ne reste pas un document théorique mais devienne un outil de pilotage opérationnel.",
    totalSteps: "05",
    stepLabel: "Phase",
    steps: [
      {
        number: "01",
        id: "diagnostic",
        icon: "FileSearch",
        title: "Diagnostic de maturité",
        description:
          "Évaluation du niveau de maturité de votre dispositif de maîtrise des risques sur une échelle de 1 à 5, selon les meilleures pratiques internationales.",
        details: [
          "Revue documentaire du dispositif existant",
          "Entretiens avec les propriétaires de risques",
          "Benchmark avec les standards sectoriels",
          "Score de maturité par composante COSO",
        ],
      },
      {
        number: "02",
        id: "gaps",
        icon: "Target",
        title: "Analyse des écarts",
        description:
          "Identification des gaps entre votre niveau actuel et le niveau cible défini avec la direction. Chaque écart est documenté et priorisé.",
        details: [
          "Comparaison niveau actuel vs niveau cible",
          "Cartographie des contrôles manquants ou inefficaces",
          "Priorisation selon l'exposition au risque",
          "Estimation de l'effort de remédiation",
        ],
      },
      {
        number: "03",
        id: "renforcement",
        icon: "Settings",
        title: "Renforcement des contrôles",
        description:
          "Conception et mise en œuvre des contrôles additionnels nécessaires pour combler les gaps identifiés et ramener le risque résiduel dans les limites acceptées.",
        details: [
          "Design des contrôles par risque",
          "Rédaction des procédures associées",
          "Formation des responsables de contrôle",
          "Pilotage de la mise en œuvre",
        ],
      },
      {
        number: "04",
        id: "test",
        icon: "Microscope",
        title: "Tests d'assurance",
        description:
          "Vérification que les contrôles renforcés fonctionnent effectivement et produisent les résultats attendus. Une étape indispensable pour valider l'efficacité de la démarche.",
        details: [
          "Tests de cheminement (walkthroughs)",
          "Tests d'effectivité opérationnelle",
          "Mesure du risque résiduel post-contrôle",
          "Ajustements si nécessaire",
        ],
      },
      {
        number: "05",
        id: "perennisation",
        icon: "RefreshCcw",
        title: "Pérennisation & Amélioration continue",
        description:
          "Mise en place des routines de suivi, de revue périodique et de mise à jour du dispositif pour garantir sa pertinence dans le temps.",
        details: [
          "Calendrier de revue annuelle du dispositif",
          "Procédures de mise à jour du registre des risques",
          "Intégration dans le cycle de planification",
          "Revue post-incident systématique",
        ],
      },
    ],
  },

  pourquoi: {
    eyebrow: "Pourquoi CAAF",
    title: "La maîtrise des risques est\nun métier, pas un formulaire.",
    description:
      "Beaucoup d'organisations ont une cartographie des risques. Peu ont un dispositif qui fonctionne réellement. C'est là que notre expertise fait la différence.",
    items: [
      {
        icon: "ShieldCheck",
        title: "De la théorie à la pratique",
        description:
          "Nous ne livrons pas des matrices PowerPoint. Nous testons, nous formons, nous accompagnons jusqu'à ce que le dispositif vive réellement dans votre organisation.",
      },
      {
        icon: "Globe",
        title: "Contexte RDC intégré",
        description:
          "Risques de change, instabilité réglementaire, enjeux sécuritaires, contraintes logistiques — nous intégrons les risques spécifiques à l'environnement congolais dans chaque analyse.",
      },
      {
        icon: "UserCheck",
        title: "Propriétaires de risques formés",
        description:
          "Un contrôle sans propriétaire est un contrôle mort. Nous formons systématiquement les responsables de risques pour qu'ils portent le dispositif au quotidien.",
      },
      {
        icon: "Layers",
        title: "Cohérence trois lignes de défense",
        description:
          "Notre approche intègre la maîtrise des risques dans le modèle des trois lignes de défense\u00a0: opérations, fonctions risques/conformité, audit interne.",
      },
      {
        icon: "Zap",
        title: "KRI actionnables",
        description:
          "Nos indicateurs de risque (KRI) sont conçus pour déclencher des actions, pas pour remplir un rapport. Chaque indicateur est lié à un seuil d'alerte et une procédure d'escalade.",
      },
      {
        icon: "BrainCircuit",
        title: "Capitalisation inter-missions",
        description:
          "Notre portefeuille de missions nous permet de partager les meilleures pratiques observées dans d'autres secteurs et organisations, toujours dans le respect de la confidentialité.",
      },
    ],
  },

  secteurs: {
    eyebrow: "Secteurs concernés",
    title: "La maîtrise des risques\nest universelle.",
    description:
      "Quel que soit votre secteur, la question est la même\u00a0: vos contrôles sont-ils efficaces ? Vos risques résiduels sont-ils acceptables ? Notre réponse est adaptée à votre contexte.",
    stripText: "Votre organisation a besoin de renforcer ses contrôles ?",
    stripHighlight: "Parlons-en concrètement.",
    stripCta: "Nous contacter",
    items: [
      {
        icon: "Landmark",
        title: "Banque & Finance",
        description: "Maîtrise des risques de crédit, de marché et opérationnels selon les exigences BCC et Bâle.",
        tags: ["Bâle", "BCC", "Opérationnel"],
        featured: true,
      },
      {
        icon: "Pickaxe",
        title: "Mines & Ressources",
        description: "Maîtrise des risques d'exploitation, HSE, environnementaux et de supply chain.",
        tags: ["HSE", "Environnement", "Supply Chain"],
        featured: true,
      },
      {
        icon: "Factory",
        title: "Industrie",
        description: "Contrôle des risques de production, qualité et sécurité industrielle.",
        tags: ["Production", "Qualité", "Sécurité"],
        featured: false,
      },
      {
        icon: "Building2",
        title: "Groupes & Holdings",
        description: "Harmonisation des dispositifs de maîtrise entre filiales.",
        tags: ["Groupe", "Harmonisation", "Filiales"],
        featured: false,
      },
      {
        icon: "Globe2",
        title: "ONG & Organisations internationales",
        description: "Maîtrise des risques de détournement et de non-conformité bailleur.",
        tags: ["Bailleurs", "Détournement", "Conformité"],
        featured: false,
      },
      {
        icon: "Truck",
        title: "Transport & Logistique",
        description: "Maîtrise des risques logistiques, de flotte et de continuité de service.",
        tags: ["Flotte", "Continuité", "Logistique"],
        featured: false,
      },
    ],
  },

  cas: {
    eyebrow: "Cas d'intervention",
    title: "Des dispositifs testés,\ndes résultats mesurés.",
    description:
      "Exemples anonymisés de missions de maîtrise des risques illustrant notre capacité à transformer des dispositifs théoriques en outils opérationnels.",
    sectionCta: "Évaluer mon dispositif",
    items: [
      {
        id: "industriel",
        sector: "Industrie",
        sectorIcon: "Factory",
        title: "Renforcement du dispositif de maîtrise des risques opérationnels",
        location: "Kinshasa, RDC",
        context:
          "Un groupe industriel disposait d'une cartographie des risques mais constatait que les incidents opérationnels continuaient d'augmenter. La direction suspectait un problème d'effectivité des contrôles plutôt qu'un problème d'identification.",
        approach: [
          "Test d'effectivité de 45 contrôles clés sur 6 processus critiques",
          "Identification de 18 contrôles inefficaces ou non appliqués",
          "Redesign des contrôles défaillants avec les opérationnels",
          "Mise en place de KRI avec seuils d'alerte automatisés",
        ],
        results: [
          { icon: "CheckCircle2", label: "Taux d'effectivité des contrôles passé de 52% à 89%" },
          { icon: "TrendingUp", label: "Réduction de 65% des incidents opérationnels en 6 mois" },
          { icon: "AlertTriangle", label: "3 risques reclassifiés en critique grâce aux KRI" },
          { icon: "Users", label: "15 propriétaires de risques formés et autonomes" },
        ],
        quote:
          "Nous avions la cartographie mais pas la maîtrise. CAAF a comblé ce gap de manière spectaculaire.",
        quoteAuthor: "Directeur des Opérations",
      },
      {
        id: "banque",
        sector: "Banque & Finance",
        sectorIcon: "Landmark",
        title: "Plan de continuité d'activité pour une banque commerciale",
        location: "Kinshasa, RDC",
        context:
          "Suite à une panne informatique majeure ayant paralysé ses opérations pendant 48 heures, une banque commerciale a mandaté CAAF pour élaborer un plan de continuité d'activité couvrant ses processus critiques.",
        approach: [
          "Business Impact Analysis (BIA) sur 12 processus bancaires",
          "Identification des temps de reprise acceptables (RTO/RPO)",
          "Rédaction du PCA et des procédures de basculement",
          "Exercice de simulation grandeur nature",
        ],
        results: [
          { icon: "CheckCircle2", label: "PCA opérationnel couvrant 100% des processus critiques" },
          { icon: "TrendingUp", label: "Temps de reprise réduit de 48h à 4h" },
          { icon: "AlertTriangle", label: "5 vulnérabilités IT critiques détectées et corrigées" },
          { icon: "Users", label: "Cellule de crise constituée et testée" },
        ],
        quote:
          "La prochaine panne ne nous prendra plus au dépourvu. Le PCA conçu par CAAF nous donne une sérénité que nous n'avions jamais eue.",
        quoteAuthor: "Directeur Général Adjoint",
      },
    ],
  },

  cta: {
    eyebrow: "Prochaine étape",
    title: "Vos risques sont identifiés.",
    titleAccent: "Sont-ils vraiment maîtrisés ?",
    description:
      "Un diagnostic de maturité de votre dispositif de maîtrise des risques permet de répondre à cette question en quelques jours. Parlons-en.",
    trustPoints: [
      "Diagnostic de maturité en 3 jours",
      "Score de maturité objectif et comparable",
      "Plan d'action immédiatement actionnable",
      "Confidentialité garantie",
    ],
    primaryCta: { label: "Diagnostiquer mon dispositif", href: "/contact" },
    secondaryCta: { label: "Appeler le cabinet", href: "tel:+243XXXXXXXX" },
    watermarkIcon: "Lock",
    contactOptions: [
      {
        icon: "Calendar",
        title: "Diagnostic de maturité",
        description: "3 jours pour évaluer l'effectivité de votre dispositif.",
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
        description: "risques@caaf-rdc.com — réponse sous 24h ouvrées.",
        href: "mailto:risques@caaf-rdc.com",
        cta: "Envoyer un email",
        primary: false,
      },
    ],
    stats: [
      { value: "3 jours", label: "Diagnostic" },
      { value: "COSO", label: "Référentiel" },
      { value: "Opérationnel", label: "Résultat garanti" },
    ],
  },
}
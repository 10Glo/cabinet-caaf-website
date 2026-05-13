
import type { ExpertisePageConfig } from "./types"

export const auditFinancierConfig: ExpertisePageConfig = {
  slug: "audit-financier",

  hero: {
    category: "Audit & Assurance",
    categoryHref: "/expertises#audit-assurance",
    title: "Donner à vos parties prenantes",
    titleAccent: "la confiance qu'elles méritent.",
    description:
      "L'audit financier est le socle de la transparence. Il garantit aux investisseurs, aux banques, aux actionnaires et aux régulateurs que vos états financiers reflètent fidèlement la réalité économique de votre organisation. Chez CAAF\u00a0SAS, nous allons au-delà de la conformité\u00a0: nous apportons une lecture claire et exploitable de votre situation financière.",
    ctaPrimary: { label: "Découvrir notre approche", href: "#approche" },
    ctaSecondary: { label: "Demander un échange", href: "/contact" },
    stats: [
      { value: "ISA", label: "Normes appliquées" },
      { value: "OHADA", label: "Référentiel comptable" },
      { value: "30+", label: "Années d'expérience" },
      { value: "100%", label: "Indépendance" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1920&auto=format&fit=crop",
    },
  },

  sousServices: {
    eyebrow: "Nos interventions",
    title: "Chaque situation appelle",
    titleAccent: "un type d'audit adapté.",
    description:
      "De la certification légale à l'attestation ponctuelle, nous structurons nos missions pour répondre précisément à vos obligations et aux attentes de vos parties prenantes.",
    sectionId: "sous-services",
    headerLabel: "Types d'intervention",
    items: [
      {
        id: "audit-legal",
        icon: "FileCheck",              // ← string
        title: "Audit Légal",
        subtitle: "Commissariat aux comptes",
        description:
          "Certification des comptes annuels conformément aux obligations légales et réglementaires. Une mission exercée en toute indépendance selon les normes applicables et les exigences du référentiel OHADA.",
        deliverables: [
          "Rapport du commissaire aux comptes",
          "Lettre de recommandations",
          "Rapport spécial sur les conventions réglementées",
        ],
      },
      {
        id: "audit-contractuel",
        icon: "FileSignature",          // ← string
        title: "Audit Contractuel",
        subtitle: "Mission ponctuelle à la demande",
        description:
          "Audit réalisé dans un cadre contractuel pour répondre aux attentes d'un investisseur, d'un bailleur, d'une maison-mère ou d'une direction souhaitant un niveau de confort renforcé sur les comptes.",
        deliverables: [
          "Rapport d'audit contractuel",
          "Synthèse des constats clés",
          "Recommandations ciblées",
        ],
      },
      {
        id: "revue-limitee",
        icon: "ClipboardCheck",         // ← string
        title: "Revue Limitée",
        subtitle: "Assurance modérée",
        description:
          "Examen reposant sur des procédures analytiques et des entretiens ciblés, adapté aux situations nécessitant une assurance modérée sur des comptes intermédiaires ou annuels dans des délais resserrés.",
        deliverables: [
          "Rapport de revue limitée",
          "Synthèse des observations",
          "Points d'attention identifiés",
        ],
      },
      {
        id: "attestations",
        icon: "FileBadge",              // ← string
        title: "Attestations & Rapports Spéciaux",
        subtitle: "Missions spécifiques",
        description:
          "Interventions sur des informations financières déterminées\u00a0: chiffre d'affaires, situation nette, comptes prévisionnels, apports en nature ou autres données destinées à des tiers ou autorités.",
        deliverables: [
          "Attestation sur chiffre d'affaires",
          "Attestation de situation nette",
          "Rapport sur les apports en nature",
        ],
      },
    ],
  },

  approche: {
    eyebrow: "Notre approche",
    title: "Une méthodologie éprouvée,",
    titleAccent: "adaptée à chaque mission.",
    description:
      "Chaque audit suit un processus structuré en cinq phases. Cette rigueur méthodologique garantit la qualité de nos travaux, la maîtrise des délais et la pertinence de nos conclusions.",
    totalSteps: "05",
    stepLabel: "Étape",
    steps: [
      {
        number: "01",
        id: "cadrage",
        icon: "MessageSquareText",      // ← string
        title: "Cadrage & Prise de connaissance",
        description:
          "Nous commençons par comprendre votre organisation, votre environnement réglementaire, vos enjeux sectoriels et les attentes de vos parties prenantes. Cette phase conditionne la pertinence de toute la mission.",
        details: [
          "Entretiens avec la direction et les équipes clés",
          "Analyse de l'environnement de contrôle",
          "Identification des zones de risques significatifs",
          "Définition du périmètre et du calendrier",
        ],
      },
      {
        number: "02",
        id: "planification",
        icon: "ClipboardCheck",         // ← string
        title: "Planification & Stratégie d'audit",
        description:
          "Sur la base du cadrage, nous élaborons une stratégie d'audit sur mesure. Nous définissons les procédures, les seuils de matérialité et les ressources mobilisées pour garantir une couverture optimale des risques.",
        details: [
          "Élaboration du plan de mission",
          "Détermination des seuils de signification",
          "Sélection des procédures d'audit adaptées",
          "Constitution et briefing de l'équipe dédiée",
        ],
      },
      {
        number: "03",
        id: "execution",
        icon: "SearchCheck",            // ← string
        title: "Exécution des travaux",
        description:
          "Nos équipes déploient les procédures prévues sur le terrain\u00a0: tests de contrôle, procédures analytiques, vérifications de détail. Chaque constat est documenté, chaque anomalie est analysée avec rigueur.",
        details: [
          "Tests sur les contrôles internes clés",
          "Contrôles substantifs et procédures analytiques",
          "Circularisation des tiers",
          "Supervision continue par un associé",
        ],
      },
      {
        number: "04",
        id: "restitution",
        icon: "FileOutput",             // ← string
        title: "Restitution & Rapport",
        description:
          "Nous restituons nos conclusions dans un rapport clair et exploitable. Au-delà de l'opinion d'audit, nous formulons des recommandations concrètes pour renforcer vos processus et votre gouvernance financière.",
        details: [
          "Présentation des conclusions à la direction",
          "Émission du rapport d'audit",
          "Lettre de recommandations détaillée",
          "Échange avec le comité d'audit le cas échéant",
        ],
      },
      {
        number: "05",
        id: "suivi",
        icon: "HeartHandshake",         // ← string
        title: "Suivi & Accompagnement",
        description:
          "Notre engagement ne s'arrête pas au rapport. Nous assurons un suivi des recommandations émises et restons disponibles tout au long de l'exercice pour accompagner vos équipes sur les sujets identifiés.",
        details: [
          "Suivi de la mise en œuvre des recommandations",
          "Disponibilité inter-exercice",
          "Veille réglementaire partagée",
          "Préparation de l'exercice suivant",
        ],
      },
    ],
  },

  pourquoi: {
    eyebrow: "Pourquoi CAAF",
    title: "Ce qui nous distingue\ndes autres cabinets.",
    description:
      "Le choix d'un auditeur est un acte de confiance. Voici les raisons pour lesquelles les directions financières, les conseils d'administration et les investisseurs nous confient leurs missions les plus exigeantes.",
    items: [
      {
        icon: "BookOpen",               // ← string
        title: "Double référentiel maîtrisé",
        description:
          "Nous intervenons avec une maîtrise complète des normes OHADA et des standards internationaux ISA et IFRS — une exigence indispensable pour les groupes opérant en Afrique centrale.",
      },
      {
        icon: "Globe",                  // ← string
        title: "Connaissance terrain RDC",
        description:
          "Implantés à Lubumbashi et actifs sur l'ensemble du territoire congolais, nous comprenons les réalités opérationnelles, fiscales et réglementaires locales comme peu de cabinets peuvent le faire.",
      },
      {
        icon: "UserCheck",             // ← string
        title: "Interlocuteur associé dédié",
        description:
          "Chaque mission est supervisée directement par un associé. Vous ne parlez jamais à un intermédiaire — vous avez accès au décideur, du cadrage à la restitution.",
      },
      {
        icon: "Languages",             // ← string
        title: "Équipes bilingues",
        description:
          "Nos équipes opèrent indifféremment en français et en anglais, garantissant une communication fluide avec les maisons-mères, investisseurs et partenaires internationaux.",
      },
      {
        icon: "Clock",                 // ← string
        title: "30 ans d'expérience",
        description:
          "Trois décennies d'interventions dans les secteurs clés de la RDC — mines, banque, industrie, organisations internationales — nous confèrent une lecture sectorielle inégalée.",
      },
      {
        icon: "ShieldCheck",           // ← string
        title: "Indépendance totale",
        description:
          "Cabinet indépendant et non affilié à un réseau international, nous garantissons une objectivité absolue dans nos opinions, libre de tout conflit d'intérêts structurel.",
      },
    ],
  },

  secteurs: {
    eyebrow: "Secteurs d'intervention",
    title: "Une expertise sectorielle\nqui fait la différence.",
    description:
      "L'audit financier ne se pratique pas de la même manière dans une banque, une mine ou une ONG. Notre connaissance approfondie de chaque secteur nous permet d'adapter nos procédures, notre lecture des risques et nos recommandations.",
    stripText: "Votre secteur n'est pas listé ?",
    stripHighlight: "Nous intervenons dans tous les domaines d'activité.",
    stripCta: "Échangeons",
    items: [
      {
        icon: "Pickaxe",               // ← string
        title: "Mines & Ressources naturelles",
        description:
          "Certification des comptes de groupes miniers, audits de filiales, conformité aux exigences des maisons-mères et des régulateurs du secteur extractif.",
        tags: ["Katanga", "ITIE", "Joint-ventures"],
        featured: true,
      },
      {
        icon: "Landmark",              // ← string
        title: "Banque & Services financiers",
        description:
          "Audit des établissements de crédit, microfinance et assurances — en conformité avec les exigences de la Banque Centrale du Congo et les normes prudentielles.",
        tags: ["BCC", "Bâle", "Microfinance"],
        featured: true,
      },
      {
        icon: "Factory",               // ← string
        title: "Industrie & Production",
        description:
          "Accompagnement des entreprises industrielles dans la certification de leurs comptes et l'optimisation de leurs processus de reporting financier.",
        tags: ["Manufacturing", "Agroalimentaire", "BTP"],
        featured: false,
      },
      {
        icon: "Globe2",                // ← string
        title: "Organisations internationales & ONG",
        description:
          "Audits de projets financés par des bailleurs internationaux, certification des fonds et conformité aux procédures des principaux donateurs.",
        tags: ["Banque Mondiale", "UE", "USAID"],
        featured: false,
      },
      {
        icon: "Building2",             // ← string
        title: "Groupes & Holdings",
        description:
          "Consolidation, audit des comptes combinés et certification statutaire pour les structures multi-entités opérant en RDC et dans la sous-région.",
        tags: ["Consolidation", "IFRS", "Multi-entités"],
        featured: false,
      },
      {
        icon: "HeartPulse",            // ← string
        title: "Santé & Secteur social",
        description:
          "Audit des structures de santé, hôpitaux, mutuelles et programmes sociaux — avec une attention particulière à la traçabilité des financements.",
        tags: ["Hôpitaux", "Mutuelles", "Programmes"],
        featured: false,
      },
      {
        icon: "Leaf",                  // ← string
        title: "Environnement & Développement durable",
        description:
          "Vérification des données financières liées aux programmes environnementaux, fonds climat et initiatives ESG dans le contexte congolais.",
        tags: ["ESG", "Fonds climat", "REDD+"],
        featured: false,
      },
      {
        icon: "GraduationCap",         // ← string
        title: "Éducation & Recherche",
        description:
          "Certification des comptes d'universités, centres de recherche et programmes éducatifs financés par des partenaires nationaux et internationaux.",
        tags: ["Universités", "Recherche", "Bailleurs"],
        featured: false,
      },
    ],
  },

  cas: {
    eyebrow: "Cas d'intervention",
    title: "Des résultats concrets,\ndans des contextes exigeants.",
    description:
      "Chaque mission est unique. Voici quelques exemples anonymisés d'interventions récentes illustrant notre approche et la valeur que nous apportons à nos clients.",
    sectionCta: "Discutons de votre contexte",
    items: [
      {
        id: "minier",
        sector: "Mines & Ressources",
        sectorIcon: "Pickaxe",         // ← string
        title: "Certification des comptes d'un groupe minier multi-sites",
        location: "Katanga, RDC",
        context:
          "Un groupe minier international exploitant trois sites au Katanga devait répondre aux exigences de certification de sa maison-mère européenne tout en respectant les obligations comptables locales OHADA.",
        approach: [
          "Déploiement simultané de trois équipes sur chaque site minier",
          "Coordination centralisée par un associé basé à Lubumbashi",
          "Double reporting OHADA et IFRS intégré dès la planification",
          "Circularisation étendue des fournisseurs et sous-traitants",
        ],
        results: [
          { icon: "CheckCircle2", label: "Opinion sans réserve émise dans les délais" },
          { icon: "Clock", label: "Rapport livré 10 jours avant l'échéance groupe" },
          { icon: "TrendingUp", label: "12 recommandations de contrôle interne implémentées" },
          { icon: "Users", label: "Mission reconduite pour les 3 exercices suivants" },
        ],
        quote:
          "CAAF a démontré une capacité rare à conjuguer rigueur internationale et maîtrise du terrain congolais.",
        quoteAuthor: "Directeur Financier Groupe",
      },
      {
        id: "bancaire",
        sector: "Banque & Finance",
        sectorIcon: "Landmark",        // ← string
        title: "Audit légal d'un établissement bancaire sous supervision BCC",
        location: "Kinshasa, RDC",
        context:
          "Une banque commerciale soumise à la supervision de la Banque Centrale du Congo nécessitait un commissaire aux comptes capable de répondre simultanément aux exigences prudentielles locales et aux attentes de ses actionnaires internationaux.",
        approach: [
          "Analyse approfondie du portefeuille de crédits et des provisions",
          "Revue des procédures de conformité anti-blanchiment",
          "Coordination avec l'inspection générale et le comité d'audit",
          "Rapports spécifiques pour la BCC selon le format réglementaire",
        ],
        results: [
          { icon: "CheckCircle2", label: "Certification conforme aux exigences BCC" },
          { icon: "TrendingUp", label: "Renforcement du dispositif de provisionnement" },
          { icon: "Clock", label: "Livrables réglementaires transmis dans les délais" },
          { icon: "Users", label: "Relation de confiance établie avec le régulateur" },
        ],
        quote:
          "Une approche rigoureuse qui a renforcé la crédibilité de notre institution auprès de nos parties prenantes.",
        quoteAuthor: "Président du Comité d'Audit",
      },
      {
        id: "ong",
        sector: "Organisations internationales",
        sectorIcon: "Globe2",          // ← string
        title: "Audit de projet multi-bailleurs pour une ONG internationale",
        location: "Nord-Kivu & Sud-Kivu, RDC",
        context:
          "Une ONG internationale gérant un programme humanitaire financé par la Banque Mondiale, l'Union Européenne et l'USAID devait fournir des rapports d'audit conformes aux exigences spécifiques de chaque bailleur.",
        approach: [
          "Compréhension des procédures propres à chaque bailleur",
          "Déploiement d'équipes formées aux standards de chaque donateur",
          "Vérification terrain des dépenses dans les zones d'intervention",
          "Rapports individualisés par source de financement",
        ],
        results: [
          { icon: "CheckCircle2", label: "Trois rapports d'audit acceptés sans réserve" },
          { icon: "Clock", label: "Respect des calendriers de chaque bailleur" },
          { icon: "TrendingUp", label: "Amélioration des procédures d'éligibilité des dépenses" },
          { icon: "Users", label: "Référencement auprès de deux nouveaux bailleurs" },
        ],
        quote:
          "Leur compréhension des exigences multi-bailleurs nous a fait gagner un temps considérable.",
        quoteAuthor: "Directeur Pays",
      },
    ],
  },

  cta: {
    eyebrow: "Prochaine étape",
    title: "Discutons de votre",
    titleAccent: "prochain exercice d'audit.",
    description:
      "Que vous prépariez une certification légale, un audit contractuel ou une mission spécifique, nous sommes disponibles pour comprendre votre contexte et vous proposer une approche adaptée.",
    trustPoints: [
      "Premier échange sans engagement",
      "Interlocuteur associé dès le premier contact",
      "Confidentialité totale garantie",
      "Réponse sous 24h ouvrées",
    ],
    primaryCta: { label: "Planifier un échange", href: "/contact" },
    secondaryCta: { label: "Appeler le cabinet", href: "tel:+243XXXXXXXX" },
    watermarkIcon: "ShieldCheck",      // ← string
    contactOptions: [
      {
        icon: "Calendar",              // ← string
        title: "Planifier un échange",
        description: "30 minutes avec un associé pour évaluer votre situation.",
        href: "/contact",
        cta: "Réserver un créneau",
        primary: true,
      },
      {
        icon: "Phone",                 // ← string
        title: "Appeler directement",
        description: "+243 XX XXX XXXX — du lundi au vendredi, 8h–17h.",
        href: "tel:+243XXXXXXXX",
        cta: "Appeler maintenant",
        primary: false,
      },
      {
        icon: "Mail",                  // ← string
        title: "Écrire au cabinet",
        description: "contact@caaf-rdc.com — réponse sous 24h ouvrées.",
        href: "mailto:contact@caaf-rdc.com",
        cta: "Envoyer un email",
        primary: false,
      },
    ],
    stats: [
      { value: "24h", label: "Délai de réponse" },
      { value: "30 min", label: "Premier échange" },
      { value: "100%", label: "Confidentiel" },
    ],
  },
}
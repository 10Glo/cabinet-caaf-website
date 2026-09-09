
import type { ExpertisePageConfig } from "./types"

export const restructurationConfig: ExpertisePageConfig = {
  slug: "restructuration",

  hero: {
    category: "Conseil & Advisory",
    categoryHref: "/expertises#conseil-advisory",
    title: "Transformer la crise",
    titleAccent: "en opportunité de renouveau.",
    description:
      "Qu'il s'agisse de difficultés financières, d'une réorganisation stratégique ou d'une transformation de modèle économique, la restructuration exige un accompagnement expert, lucide et pragmatique. Chez CAAF\u00a0SAS, nous aidons les entreprises congolaises à traverser les turbulences et à en sortir plus fortes.",
    ctaPrimary: { label: "Découvrir nos interventions", href: "#missions" },
    ctaSecondary: { label: "Évaluer ma situation", href: "/contact" },
    stats: [
      { value: "Urgence", label: "Intervention rapide" },
      { value: "OHADA", label: "Cadre juridique" },
      { value: "360°", label: "Diagnostic global" },
      { value: "Confidentiel", label: "Protocole renforcé" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop",
    },
  },

  sousServices: {
    eyebrow: "Nos interventions",
    title: "Chaque situation de crise",
    titleAccent: "appelle une réponse adaptée.",
    description:
      "La restructuration n'est pas un aveu d'échec — c'est une décision stratégique. Nous intervenons à chaque stade, de la prévention des difficultés à l'accompagnement post-retournement.",
    sectionId: "missions",
    headerLabel: "Types d'intervention",
    items: [
      {
        id: "diagnostic",
        icon: "TrendingDown",
        title: "Diagnostic de crise",
        subtitle: "État des lieux d'urgence",
        description:
          "Analyse rapide et complète de la situation financière, opérationnelle et stratégique de l'entreprise en difficulté. Identification des causes profondes et évaluation de la viabilité.",
        deliverables: [
          "Rapport de diagnostic flash (72h)",
          "Analyse de trésorerie à court terme",
          "Évaluation de la viabilité et scénarios",
        ],
      },
      {
        id: "plan-retournement",
        icon: "RefreshCcw",
        title: "Plan de retournement",
        subtitle: "Stratégie de redressement",
        description:
          "Élaboration d'un plan de retournement crédible et chiffré\u00a0: mesures d'urgence, restructuration opérationnelle, réduction des coûts, optimisation du BFR et renégociation des dettes.",
        deliverables: [
          "Plan de retournement détaillé et chiffré",
          "Business plan restructuré sur 3-5 ans",
          "Budget de trésorerie prévisionnel",
        ],
      },
      {
        id: "negociation",
        icon: "Handshake",
        title: "Négociation avec les créanciers",
        subtitle: "Restructuration de dettes",
        description:
          "Assistance dans la négociation avec les banques, fournisseurs et créanciers pour obtenir des moratoires, des remises de dettes ou une restructuration des échéances de paiement.",
        deliverables: [
          "Propositions de restructuration de dettes",
          "Support aux négociations bancaires",
          "Accords de moratoire documentés",
        ],
      },
      {
        id: "reorganisation",
        icon: "Building2",
        title: "Réorganisation & Transformation",
        subtitle: "Nouveau modèle opérationnel",
        description:
          "Refonte de l'organisation, des processus et du modèle économique pour adapter l'entreprise à son nouvel environnement et garantir la pérennité du retournement.",
        deliverables: [
          "Nouvel organigramme et allocation des ressources",
          "Processus opérationnels redessinés",
          "Plan de transformation avec jalons",
        ],
      },
      {
        id: "cession",
        icon: "Scissors",
        title: "Cession d'actifs & Désinvestissement",
        subtitle: "Recentrage stratégique",
        description:
          "Identification et cession des actifs non stratégiques pour générer des liquidités, désendetter l'entreprise et recentrer les ressources sur les activités créatrices de valeur.",
        deliverables: [
          "Cartographie des actifs cessibles",
          "Valorisation des actifs identifiés",
          "Accompagnement du processus de cession",
        ],
      },
    ],
  },

  approche: {
    eyebrow: "Notre approche",
    title: "Lucidité, rapidité,",
    titleAccent: "exécution disciplinée.",
    description:
      "En situation de crise, chaque jour compte. Notre approche est conçue pour livrer un diagnostic rapide, des décisions fondées et un accompagnement dans l'exécution jusqu'au retour à la normale.",
    totalSteps: "05",
    stepLabel: "Phase",
    steps: [
      {
        number: "01",
        id: "urgence",
        icon: "ScanSearch",
        title: "Diagnostic d'urgence",
        description:
          "En 72 heures, nous établissons un état des lieux de la situation\u00a0: trésorerie, exposition bancaire, engagements, contentieux et viabilité de l'exploitation.",
        details: [
          "Analyse de la trésorerie à 13 semaines",
          "Revue des engagements et échéances critiques",
          "Évaluation de la continuité d'exploitation",
          "Identification des mesures d'urgence immédiates",
        ],
      },
      {
        number: "02",
        id: "stabilisation",
        icon: "ClipboardList",
        title: "Stabilisation",
        description:
          "Mise en œuvre des mesures d'urgence pour stopper l'hémorragie financière et préserver la valeur résiduelle\u00a0: gel des dépenses non essentielles, sécurisation de la trésorerie, communication de crise.",
        details: [
          "Gel des investissements non critiques",
          "Renégociation urgente des échéances",
          "Communication aux parties prenantes clés",
          "Mise en place d'un reporting de crise quotidien",
        ],
      },
      {
        number: "03",
        id: "plan",
        icon: "Settings",
        title: "Élaboration du plan",
        description:
          "Construction d'un plan de retournement crédible, chiffré et validé par les parties prenantes. Ce plan devient la feuille de route de la restructuration.",
        details: [
          "Modélisation financière des scénarios",
          "Identification des leviers de performance",
          "Plan social si nécessaire",
          "Validation par la direction et les créanciers",
        ],
      },
      {
        number: "04",
        id: "execution",
        icon: "FileOutput",
        title: "Exécution & Pilotage",
        description:
          "Accompagnement dans la mise en œuvre du plan\u00a0: pilotage des chantiers, suivi des indicateurs, ajustements en temps réel et reporting aux parties prenantes.",
        details: [
          "Mise en place du comité de pilotage",
          "Suivi hebdomadaire des KPIs de retournement",
          "Gestion des écarts et ajustements",
          "Reporting régulier aux créanciers et actionnaires",
        ],
      },
      {
        number: "05",
        id: "perennisation",
        icon: "Presentation",
        title: "Pérennisation",
        description:
          "Une fois le retournement réalisé, nous aidons l'entreprise à ancrer les changements dans la durée et à mettre en place les garde-fous pour éviter la rechute.",
        details: [
          "Transfert de compétences aux équipes internes",
          "Mise en place des indicateurs d'alerte précoce",
          "Revue post-retournement à 6 et 12 mois",
          "Documentation des leçons apprises",
        ],
      },
    ],
  },

  pourquoi: {
    eyebrow: "Pourquoi CAAF",
    title: "La restructuration exige\nde l'expérience et du courage.",
    description:
      "Restructurer une entreprise n'est pas un exercice académique. C'est un combat qui demande de la lucidité, de la rapidité et un ancrage local indispensable.",
    items: [
      {
        icon: "ShieldCheck",
        title: "Expérience des situations de crise",
        description:
          "Nous avons accompagné des entreprises en difficulté dans les moments les plus critiques de leur existence. Cette expérience nous rend efficaces quand le temps presse.",
      },
      {
        icon: "Globe",
        title: "Connaissance du cadre OHADA",
        description:
          "Procédures préventives, règlement préventif, redressement judiciaire — nous maîtrisons le cadre juridique OHADA applicable aux entreprises en difficulté en RDC.",
      },
      {
        icon: "UserCheck",
        title: "Interlocuteur unique et senior",
        description:
          "En période de crise, vous n'avez pas le temps de gérer plusieurs interlocuteurs. Un associé senior pilote l'ensemble de la mission et prend les décisions rapidement.",
      },
      {
        icon: "Clock",
        title: "Diagnostic en 72 heures",
        description:
          "Nos équipes sont structurées pour livrer un diagnostic d'urgence en trois jours. Chaque jour gagné en amont est un jour de survie en plus.",
      },
      {
        icon: "Scale",
        title: "Crédibilité auprès des banques",
        description:
          "Notre réputation et notre indépendance donnent de la crédibilité à vos plans de retournement auprès des créanciers bancaires et des investisseurs.",
      },
      {
        icon: "BrainCircuit",
        title: "Vision globale Audit-Fiscal-Advisory",
        description:
          "La restructuration touche à la finance, à la fiscalité, à l'organisation et au droit. Notre cabinet couvre toutes ces dimensions en interne.",
      },
    ],
  },

  secteurs: {
    eyebrow: "Secteurs concernés",
    title: "La crise ne choisit pas\nson secteur.",
    description:
      "Aucun secteur n'est à l'abri des difficultés. Notre expérience couvre les situations de retournement dans les secteurs les plus variés de l'économie congolaise.",
    stripText: "Votre entreprise traverse une période difficile ?",
    stripHighlight: "Plus vous agissez tôt, plus les options sont nombreuses.",
    stripCta: "Appeler maintenant",
    items: [
      {
        icon: "Factory",
        title: "Industrie & Production",
        description:
          "Retournement d'unités de production confrontées à des surcapacités, des pertes d'exploitation ou des problèmes de trésorerie.",
        tags: ["Surcapacité", "Trésorerie", "Restructuration"],
        featured: true,
      },
      {
        icon: "Landmark",
        title: "Banque & Finance",
        description:
          "Restructuration d'établissements financiers en difficulté, plans de redressement sous supervision BCC.",
        tags: ["BCC", "Redressement", "Solvabilité"],
        featured: true,
      },
      {
        icon: "Pickaxe",
        title: "Mines & Ressources",
        description: "Restructuration de sociétés minières impactées par la chute des cours ou des problèmes opérationnels.",
        tags: ["Cours", "Opérations", "Cash flow"],
        featured: false,
      },
      {
        icon: "Store",
        title: "Commerce & Distribution",
        description: "Retournement de réseaux commerciaux en perte de vitesse ou confrontés à des impayés massifs.",
        tags: ["Impayés", "Réseau", "BFR"],
        featured: false,
      },
      {
        icon: "Truck",
        title: "Transport & Logistique",
        description: "Restructuration d'entreprises de transport confrontées à des problèmes de flotte ou de rentabilité.",
        tags: ["Flotte", "Rentabilité", "Dettes"],
        featured: false,
      },
      {
        icon: "Globe2",
        title: "ONG & Projets",
        description: "Restructuration de programmes en difficulté opérationnelle ou financière.",
        tags: ["Programmes", "Bailleurs", "Viabilité"],
        featured: false,
      },
    ],
  },

  cas: {
    eyebrow: "Cas d'intervention",
    title: "Des entreprises sauvées,\ndes emplois préservés.",
    description:
      "Exemples anonymisés de missions de restructuration illustrant notre capacité à redresser des situations critiques.",
    sectionCta: "Évaluer ma situation",
    items: [
      {
        id: "industriel",
        sector: "Industrie",
        sectorIcon: "Factory",
        title: "Retournement d'une entreprise industrielle en cessation de paiements",
        location: "Kinshasa, RDC",
        context:
          "Une entreprise industrielle employant 450 personnes était en cessation de paiements avec une dette bancaire de 6 millions USD et des arriérés fournisseurs de 2,3 millions USD. La direction envisageait la liquidation.",
        approach: [
          "Diagnostic d'urgence en 72h et stabilisation de la trésorerie",
          "Négociation d'un moratoire de 18 mois avec les 3 banques créancières",
          "Plan de retournement incluant la cession de 2 actifs non stratégiques",
          "Restructuration des effectifs et renégociation des contrats fournisseurs",
        ],
        results: [
          { icon: "CheckCircle2", label: "Cessation de paiements levée en 4 mois" },
          { icon: "TrendingUp", label: "Retour à l'équilibre d'exploitation en 14 mois" },
          { icon: "AlertTriangle", label: "350 emplois préservés sur 450" },
          { icon: "Users", label: "Moratoire bancaire intégralement respecté" },
        ],
        quote:
          "Sans l'intervention de CAAF, notre entreprise aurait fermé. Ils nous ont montré qu'il y avait un chemin — et ils nous ont accompagnés sur chaque pas.",
        quoteAuthor: "Fondateur & PDG",
      },
      {
        id: "commercial",
        sector: "Commerce & Distribution",
        sectorIcon: "Store",
        title: "Restructuration d'un réseau de distribution en perte de rentabilité",
        location: "Lubumbashi & Likasi, RDC",
        context:
          "Un réseau de distribution alimentaire comprenant 12 points de vente connaissait des pertes cumulées depuis 3 exercices. Le besoin en fonds de roulement avait explosé et la trésorerie était structurellement négative.",
        approach: [
          "Analyse de rentabilité point de vente par point de vente",
          "Fermeture de 4 points de vente structurellement déficitaires",
          "Renégociation des conditions fournisseurs et des baux commerciaux",
          "Mise en place d'un outil de pilotage quotidien de la trésorerie",
        ],
        results: [
          { icon: "CheckCircle2", label: "Retour à la rentabilité en 8 mois" },
          { icon: "TrendingUp", label: "BFR réduit de 40% grâce à la renégociation fournisseurs" },
          { icon: "AlertTriangle", label: "8 points de vente restructurés et pérennisés" },
          { icon: "Users", label: "CA par point de vente en hausse de 25% après restructuration" },
        ],
        quote:
          "CAAF a eu le courage de nous dire ce que nous ne voulions pas entendre. Fermer 4 magasins pour sauver les 8 autres — c'était la bonne décision.",
        quoteAuthor: "Directeur Général",
      },
    ],
  },

  cta: {
    eyebrow: "Le temps presse",
    title: "Chaque jour compte",
    titleAccent: "quand l'entreprise est en danger.",
    description:
      "N'attendez pas que la situation devienne irréversible. Un diagnostic rapide permet d'identifier les options et d'agir avant qu'il ne soit trop tard.",
    trustPoints: [
      "Diagnostic d'urgence en 72 heures",
      "Confidentialité absolue garantie",
      "Interlocuteur associé mobilisé immédiatement",
      "Accompagnement jusqu'au retournement effectif",
    ],
    primaryCta: { label: "Demander un diagnostic d'urgence", href: "/contact" },
    secondaryCta: { label: "Appeler maintenant", href: "tel:+243999309901" },
    watermarkIcon: "RefreshCcw",
    contactOptions: [
      {
        icon: "Calendar",
        title: "Diagnostic d'urgence",
        description: "72 heures pour évaluer la situation et identifier les options.",
        href: "/contact",
        cta: "Demander le diagnostic",
        primary: true,
      },
      {
        icon: "Phone",
        title: "Ligne directe associé",
        description: "+243 999 309 901 / +243 810 372 645 — disponible y compris le week-end.",
        href: "tel:+243999309901",
        cta: "Appeler maintenant",
        primary: false,
      },
      {
        icon: "Mail",
        title: "Écrire en urgence",
        description: "urgence@caaf-rdc.com — réponse dans les 4 heures.",
        href: "mailto:urgence@caaf-rdc.com",
        cta: "Envoyer un email",
        primary: false,
      },
    ],
    stats: [
      { value: "72h", label: "Diagnostic d'urgence" },
      { value: "24/7", label: "Disponibilité" },
      { value: "100%", label: "Confidentiel" },
    ],
  },
}
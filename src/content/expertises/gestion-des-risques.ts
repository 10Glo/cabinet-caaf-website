import type { ExpertisePageConfig } from "./types"

export const gestionDesRisquesConfig: ExpertisePageConfig = {
  slug: "gestion-des-risques",

  hero: {
    category: "Risk Assurance Services",
    categoryHref: "/expertises#risk-assurance",
    title: "Anticiper les menaces,",
    titleAccent: "protéger la valeur de votre entreprise.",
    description:
      "La gestion des risques ne consiste pas à éliminer l'incertitude — c'est impossible. Elle consiste à identifier, évaluer et traiter les menaces et opportunités qui pèsent sur vos objectifs stratégiques. Chez CAAF\u00a0SAS, nous vous aidons à passer d'une gestion réactive à une gouvernance proactive des risques.",
    ctaPrimary: { label: "Découvrir notre démarche", href: "#missions" },
    ctaSecondary: { label: "Cartographier mes risques", href: "/contact" },
    stats: [
      { value: "ISO 31000", label: "Norme de référence" },
      { value: "COSO ERM", label: "Cadre méthodologique" },
      { value: "360°", label: "Vision des risques" },
      { value: "Proactif", label: "Approche adoptée" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop",
    },
  },

  sousServices: {
    eyebrow: "Nos interventions",
    title: "De l'identification au pilotage,",
    titleAccent: "un accompagnement complet.",
    description:
      "La gestion des risques est un processus continu. Nous intervenons à chaque étape pour vous aider à construire un dispositif robuste, adapté à votre taille et à votre secteur.",
    sectionId: "missions",
    headerLabel: "Types d'intervention",
    items: [
      {
        id: "cartographie",
        icon: "Radar",
        title: "Cartographie des risques",
        subtitle: "Identification & Évaluation",
        description:
          "Identification exhaustive des risques auxquels votre organisation est exposée — stratégiques, opérationnels, financiers, de conformité — suivie d'une évaluation systématique par probabilité et impact.",
        deliverables: [
          "Matrice des risques hiérarchisée",
          "Heat map par direction et processus",
          "Rapport de synthèse pour le comité de direction",
        ],
      },
      {
        id: "dispositif",
        icon: "ShieldAlert",
        title: "Conception du dispositif ERM",
        subtitle: "Enterprise Risk Management",
        description:
          "Mise en place d'un dispositif structuré de gestion des risques d'entreprise\u00a0: politique, organisation, outils et processus de remontée d'information — conforme à l'ISO 31000 et au COSO ERM.",
        deliverables: [
          "Politique de gestion des risques",
          "Charte et organigramme de la fonction risques",
          "Processus de remontée et d'escalade",
        ],
      },
      {
        id: "appetence",
        icon: "BarChart3",
        title: "Appétence & Tolérance au risque",
        subtitle: "Cadre décisionnel",
        description:
          "Définition du niveau de risque que votre organisation est prête à accepter pour atteindre ses objectifs. Un outil essentiel pour aligner la prise de risque avec la stratégie d'entreprise.",
        deliverables: [
          "Déclaration d'appétence au risque",
          "Seuils de tolérance par catégorie de risque",
          "Tableau de bord des indicateurs de risque",
        ],
      },
      {
        id: "plan-traitement",
        icon: "Workflow",
        title: "Plans de traitement",
        subtitle: "Réponses aux risques",
        description:
          "Élaboration de plans d'action pour chaque risque significatif\u00a0: évitement, réduction, transfert ou acceptation. Chaque plan est chiffré, chronologisé et attribué à un responsable.",
        deliverables: [
          "Fiches de traitement par risque prioritaire",
          "Budget de mitigation estimé",
          "Calendrier de mise en œuvre",
        ],
      },
    ],
  },

  approche: {
    eyebrow: "Notre méthode",
    title: "Une approche structurée,",
    titleAccent: "ancrée dans votre réalité.",
    description:
      "Nous combinons les meilleurs standards internationaux avec une compréhension pragmatique de votre environnement. Notre méthode en cinq étapes garantit un dispositif opérationnel et pérenne.",
    totalSteps: "05",
    stepLabel: "Étape",
    steps: [
      {
        number: "01",
        id: "contexte",
        icon: "Compass",
        title: "Compréhension du contexte",
        description:
          "Analyse de votre environnement interne et externe, de vos objectifs stratégiques et de votre culture de risque pour calibrer notre intervention.",
        details: [
          "Entretiens avec la direction et le conseil",
          "Revue de la stratégie et du business plan",
          "Analyse de l'environnement concurrentiel et réglementaire",
          "Évaluation de la maturité risque actuelle",
        ],
      },
      {
        number: "02",
        id: "identification",
        icon: "ScanSearch",
        title: "Identification des risques",
        description:
          "Recensement systématique des risques par catégorie, par direction et par processus, à travers des ateliers participatifs et des analyses documentaires.",
        details: [
          "Ateliers de brainstorming avec les managers",
          "Analyse des incidents et pertes historiques",
          "Benchmark sectoriel des risques typiques",
          "Constitution du registre des risques",
        ],
      },
      {
        number: "03",
        id: "evaluation",
        icon: "BarChart3",
        title: "Évaluation & Priorisation",
        description:
          "Chaque risque est évalué selon sa probabilité d'occurrence et son impact potentiel. La matrice résultante permet de concentrer les efforts sur les risques les plus critiques.",
        details: [
          "Cotation probabilité × impact",
          "Prise en compte des contrôles existants",
          "Classification par niveau de criticité",
          "Validation de la matrice par la direction",
        ],
      },
      {
        number: "04",
        id: "traitement",
        icon: "Settings",
        title: "Traitement & Plans d'action",
        description:
          "Pour chaque risque prioritaire, nous définissons la stratégie de réponse optimale et élaborons un plan d'action concret avec des responsables et des échéances.",
        details: [
          "Choix de la stratégie par risque (éviter, réduire, transférer, accepter)",
          "Élaboration des fiches de traitement",
          "Estimation budgétaire des mesures",
          "Attribution des propriétaires de risque",
        ],
      },
      {
        number: "05",
        id: "pilotage",
        icon: "Presentation",
        title: "Pilotage & Reporting",
        description:
          "Mise en place des outils de suivi et de reporting pour que la gestion des risques reste vivante et intégrée dans votre processus décisionnel au quotidien.",
        details: [
          "Conception du tableau de bord des risques",
          "Définition des KRI (Key Risk Indicators)",
          "Calendrier de revue périodique",
          "Reporting au comité d'audit et au conseil",
        ],
      },
    ],
  },

  pourquoi: {
    eyebrow: "Pourquoi CAAF",
    title: "La gestion des risques n'est pas\nun exercice de style.",
    description:
      "C'est un levier stratégique. Voici ce qui fait la différence quand vous nous confiez la structuration de votre dispositif de gestion des risques.",
    items: [
      {
        icon: "ShieldCheck",
        title: "Standards internationaux appliqués",
        description:
          "ISO 31000, COSO ERM — nous maîtrisons les référentiels internationaux et les adaptons à la réalité des entreprises opérant en RDC et dans la sous-région.",
      },
      {
        icon: "Globe",
        title: "Connaissance des risques locaux",
        description:
          "Risques réglementaires congolais, instabilité des changes, enjeux sécuritaires, contraintes logistiques — nous connaissons les risques spécifiques à votre environnement.",
      },
      {
        icon: "UserCheck",
        title: "Approche participative",
        description:
          "Les risques ne se gèrent pas depuis un bureau. Nous impliquons vos équipes dans chaque atelier pour garantir l'adhésion et la pertinence des résultats.",
      },
      {
        icon: "BrainCircuit",
        title: "Vision stratégique",
        description:
          "Nous ne listons pas des risques dans un tableur. Nous les relions à vos objectifs stratégiques pour que chaque décision de traitement ait un sens business.",
      },
      {
        icon: "Layers",
        title: "Intégration avec l'audit interne",
        description:
          "Notre double compétence en audit interne et en gestion des risques permet une cohérence totale entre les deux lignes de défense de votre organisation.",
      },
      {
        icon: "Clock",
        title: "Résultats rapides et tangibles",
        description:
          "Dès les premières semaines, vous disposez d'une cartographie exploitable. Pas de rapport théorique qui dort dans un tiroir — des outils de pilotage opérationnels.",
      },
    ],
  },

  secteurs: {
    eyebrow: "Secteurs concernés",
    title: "Chaque secteur a\nson profil de risque.",
    description:
      "Le profil de risque d'une banque n'est pas celui d'une mine ni celui d'une ONG. Notre expérience multi-sectorielle nous permet d'adapter notre approche à vos enjeux spécifiques.",
    stripText: "Votre secteur a des risques que vous ne maîtrisez pas encore ?",
    stripHighlight: "C'est précisément notre métier.",
    stripCta: "En parler",
    items: [
      {
        icon: "Landmark",
        title: "Banque & Finance",
        description:
          "Risques de crédit, de marché, de liquidité, opérationnels et de conformité — selon les exigences prudentielles de la BCC et les standards Bâle.",
        tags: ["Crédit", "Liquidité", "Conformité"],
        featured: true,
      },
      {
        icon: "Pickaxe",
        title: "Mines & Ressources",
        description:
          "Risques d'exploitation, environnementaux, de sécurité, de change et de dépendance aux cours des matières premières.",
        tags: ["Exploitation", "Environnement", "Cours"],
        featured: true,
      },
      {
        icon: "Factory",
        title: "Industrie",
        description: "Risques de production, de supply chain, de qualité et de sécurité industrielle.",
        tags: ["Production", "Supply Chain", "Qualité"],
        featured: false,
      },
      {
        icon: "Building2",
        title: "Groupes & Holdings",
        description: "Risques de gouvernance, de consolidation et de cohérence inter-filiales.",
        tags: ["Gouvernance", "Filiales", "Stratégie"],
        featured: false,
      },
      {
        icon: "Globe2",
        title: "ONG & Organisations internationales",
        description: "Risques de détournement, de non-conformité bailleur et de réputation.",
        tags: ["Bailleurs", "Réputation", "Conformité"],
        featured: false,
      },
      {
        icon: "HeartPulse",
        title: "Santé & Services publics",
        description: "Risques de gestion des fonds publics, de qualité de service et de gouvernance.",
        tags: ["Fonds publics", "Qualité", "Éthique"],
        featured: false,
      },
    ],
  },

  cas: {
    eyebrow: "Cas d'intervention",
    title: "Des risques identifiés,\ndes crises évitées.",
    description:
      "Exemples anonymisés de missions de gestion des risques menées dans des contextes variés et exigeants.",
    sectionCta: "Cartographier mes risques",
    items: [
      {
        id: "minier",
        sector: "Mines & Ressources",
        sectorIcon: "Pickaxe",
        title: "Cartographie des risques d'un groupe minier en expansion",
        location: "Katanga, RDC",
        context:
          "Un groupe minier en phase d'expansion souhaitait structurer sa gestion des risques avant l'ouverture d'un nouveau site d'exploitation. La direction avait conscience des risques opérationnels mais manquait de visibilité sur les risques stratégiques et de conformité.",
        approach: [
          "Ateliers de cartographie avec les 8 directions du groupe",
          "Analyse des incidents survenus sur les sites existants",
          "Benchmark avec les pratiques du secteur extractif international",
          "Définition de l'appétence au risque avec le conseil d'administration",
        ],
        results: [
          { icon: "CheckCircle2", label: "87 risques identifiés et cotés dont 12 critiques" },
          { icon: "TrendingUp", label: "Plans de traitement déployés sur les 12 risques prioritaires" },
          { icon: "AlertTriangle", label: "3 risques de conformité ITIE détectés et corrigés" },
          { icon: "Users", label: "Fonction risque créée en interne avec notre accompagnement" },
        ],
        quote:
          "Nous avions une intuition de nos risques. CAAF nous a donné une vision structurée et actionnable.",
        quoteAuthor: "Directeur Général du Groupe",
      },
      {
        id: "banque",
        sector: "Banque & Finance",
        sectorIcon: "Landmark",
        title: "Mise en conformité ERM d'une banque commerciale",
        location: "Kinshasa, RDC",
        context:
          "Dans le cadre d'une inspection programmée de la BCC, une banque commerciale devait démontrer qu'elle disposait d'un dispositif de gestion des risques conforme aux circulaires prudentielles. Le dispositif existant était fragmenté et essentiellement informel.",
        approach: [
          "Diagnostic du dispositif existant vs exigences BCC",
          "Conception de la politique et du cadre ERM",
          "Formation du comité des risques et des propriétaires de risques",
          "Mise en place du reporting trimestriel des risques",
        ],
        results: [
          { icon: "CheckCircle2", label: "Dispositif ERM validé lors de l'inspection BCC" },
          { icon: "TrendingUp", label: "Score de maturité risque passé de 2/5 à 4/5" },
          { icon: "AlertTriangle", label: "Identification de 5 risques opérationnels non documentés" },
          { icon: "Users", label: "Comité des risques opérationnel et actif" },
        ],
        quote:
          "Le dispositif mis en place par CAAF a transformé notre approche du risque. Le régulateur a été impressionné.",
        quoteAuthor: "Directeur des Risques",
      },
    ],
  },

  cta: {
    eyebrow: "Première étape",
    title: "Commençons par",
    titleAccent: "cartographier vos risques.",
    description:
      "Une cartographie des risques bien menée change la manière dont vous prenez vos décisions. Parlons de votre situation et de vos enjeux.",
    trustPoints: [
      "Premier atelier de cadrage offert",
      "Résultats exploitables en 2 semaines",
      "Approche participative avec vos équipes",
      "Confidentialité garantie",
    ],
    primaryCta: { label: "Lancer une cartographie", href: "/contact" },
    secondaryCta: { label: "Appeler le cabinet", href: "tel:+243999309901" },
    watermarkIcon: "Radar",
    contactOptions: [
      {
        icon: "Calendar",
        title: "Atelier de cadrage",
        description: "Une demi-journée pour définir le périmètre et les priorités.",
        href: "/contact",
        cta: "Planifier l'atelier",
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
        description: "risques@caaf-rdc.com — réponse sous 24h ouvrées.",
        href: "mailto:risques@caaf-rdc.com",
        cta: "Envoyer un email",
        primary: false,
      },
    ],
    stats: [
      { value: "2 sem.", label: "Premiers résultats" },
      { value: "ISO 31000", label: "Référentiel" },
      { value: "100%", label: "Confidentiel" },
    ],
  },
}
import type { ExpertisePageConfig } from "./types"

export const dueDiligenceConfig: ExpertisePageConfig = {
  slug: "due-diligence",

  hero: {
    category: "Conseil & Advisory",
    categoryHref: "/expertises#conseil-advisory",
    title: "Investir en connaissance de cause,",
    titleAccent: "décider sans zones d'ombre.",
    description:
      "Avant chaque acquisition, investissement ou partenariat stratégique, la due diligence révèle ce que les documents officiels ne montrent pas. Chez CAAF\u00a0SAS, nous menons des investigations approfondies pour que vous entriez dans chaque transaction avec une vision claire des risques et des opportunités.",
    ctaPrimary: { label: "Découvrir nos missions", href: "#missions" },
    ctaSecondary: { label: "Lancer une due diligence", href: "/contact" },
    stats: [
      { value: "360°", label: "Couverture de l'analyse" },
      { value: "Confidentiel", label: "Protocole renforcé" },
      { value: "4 sem.", label: "Délai moyen de livraison" },
      { value: "Décision", label: "Orientée résultat" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1507679799987-c73b7651af56?q=80&w=1920&auto=format&fit=crop",
    },
  },

  sousServices: {
    eyebrow: "Nos missions",
    title: "Chaque transaction mérite",
    titleAccent: "une investigation sur mesure.",
    description:
      "Nous couvrons toutes les dimensions de la due diligence\u00a0: financière, fiscale, opérationnelle et de conformité. Chaque mission est calibrée selon la nature de la transaction et les enjeux spécifiques de l'acquéreur.",
    sectionId: "missions",
    headerLabel: "Types de due diligence",
    items: [
      {
        id: "financiere",
        icon: "BarChart3",
        title: "Due Diligence Financière",
        subtitle: "Qualité des résultats & Bilan",
        description:
          "Analyse approfondie des états financiers historiques et prévisionnels de la cible\u00a0: qualité des revenus, normalisation de l'EBITDA, fonds de roulement, dette nette, engagements hors bilan et provisions.",
        deliverables: [
          "Rapport de due diligence financière (Quality of Earnings)",
          "Analyse du besoin en fonds de roulement normatif",
          "Identification des ajustements de prix potentiels",
        ],
      },
      {
        id: "fiscale",
        icon: "Scale",
        title: "Due Diligence Fiscale",
        subtitle: "Risques & Expositions",
        description:
          "Revue exhaustive de la situation fiscale de la cible\u00a0: conformité des déclarations, risques de redressement latents, positions agressives, crédits d'impôt et expositions liées aux prix de transfert.",
        deliverables: [
          "Rapport de due diligence fiscale",
          "Quantification des risques de redressement",
          "Recommandations pour les garanties contractuelles",
        ],
      },
      {
        id: "operationnelle",
        icon: "Search",
        title: "Due Diligence Opérationnelle",
        subtitle: "Processus & Organisation",
        description:
          "Évaluation de la robustesse opérationnelle de la cible\u00a0: organisation, processus clés, ressources humaines, systèmes d'information, contrats majeurs et dépendances critiques.",
        deliverables: [
          "Cartographie des forces et faiblesses opérationnelles",
          "Analyse des risques de transition post-acquisition",
          "Estimation des coûts d'intégration",
        ],
      },
      {
        id: "conformite",
        icon: "ShieldAlert",
        title: "Due Diligence de Conformité",
        subtitle: "Réglementaire & Éthique",
        description:
          "Vérification de la conformité de la cible aux lois et règlements applicables\u00a0: anti-corruption, blanchiment, environnement, droit du travail, licences et autorisations d'exploitation.",
        deliverables: [
          "Rapport de conformité réglementaire",
          "Analyse des risques juridiques et contentieux",
          "Red flags et deal breakers identifiés",
        ],
      },
      {
        id: "vendor",
        icon: "Briefcase",
        title: "Vendor Due Diligence",
        subtitle: "Côté vendeur",
        description:
          "Due diligence réalisée pour le compte du vendeur avant la mise en vente d'un actif. Elle permet d'anticiper les questions des acquéreurs potentiels, de corriger les faiblesses et d'accélérer le processus de cession.",
        deliverables: [
          "Rapport de vendor due diligence",
          "Data room structurée et documentée",
          "Identification proactive des points de négociation",
        ],
      },
    ],
  },

  approche: {
    eyebrow: "Notre approche",
    title: "Une investigation rigoureuse,",
    titleAccent: "dans des délais serrés.",
    description:
      "Les transactions n'attendent pas. Notre méthodologie est conçue pour livrer des résultats fiables dans les délais imposés par le calendrier transactionnel, sans sacrifier la profondeur de l'analyse.",
    totalSteps: "05",
    stepLabel: "Phase",
    steps: [
      {
        number: "01",
        id: "cadrage",
        icon: "ScanSearch",
        title: "Cadrage & Scoping",
        description:
          "Définition du périmètre de la due diligence avec l'acquéreur\u00a0: enjeux prioritaires, zones de risque présumées, calendrier et modalités d'accès à l'information.",
        details: [
          "Réunion de cadrage avec l'acquéreur et ses conseils",
          "Définition des work streams et des priorités",
          "Organisation de l'accès à la data room",
          "Constitution de l'équipe dédiée",
        ],
      },
      {
        number: "02",
        id: "collecte",
        icon: "ClipboardList",
        title: "Collecte & Analyse documentaire",
        description:
          "Revue systématique de la documentation mise à disposition\u00a0: états financiers, contrats, déclarations fiscales, organigrammes, politiques internes.",
        details: [
          "Request list détaillée envoyée à la cible",
          "Analyse des états financiers historiques (3-5 ans)",
          "Revue des contrats majeurs et engagements",
          "Identification des premières anomalies et questions",
        ],
      },
      {
        number: "03",
        id: "investigation",
        icon: "Microscope",
        title: "Investigation terrain",
        description:
          "Entretiens avec le management de la cible, visites de sites et vérifications physiques pour confronter les documents avec la réalité opérationnelle.",
        details: [
          "Management interviews structurées",
          "Visites de sites et vérifications physiques",
          "Tests de détail sur les données financières",
          "Cross-check des informations entre sources",
        ],
      },
      {
        number: "04",
        id: "rapport",
        icon: "FileOutput",
        title: "Rapport & Red Flags",
        description:
          "Rédaction d'un rapport structuré identifiant les constats clés, les risques quantifiés, les deal breakers potentiels et les recommandations pour la négociation.",
        details: [
          "Rapport de due diligence détaillé",
          "Executive summary pour le comité d'investissement",
          "Quantification des ajustements de prix recommandés",
          "Liste des garanties à négocier dans le SPA",
        ],
      },
      {
        number: "05",
        id: "support",
        icon: "Presentation",
        title: "Support à la négociation",
        description:
          "Assistance technique pendant la phase de négociation\u00a0: réponses aux questions de la contrepartie, ajustement des analyses et support sur les clauses du contrat de cession.",
        details: [
          "Participation aux sessions de négociation",
          "Analyses complémentaires à la demande",
          "Support sur les mécanismes d'ajustement de prix",
          "Assistance jusqu'au closing",
        ],
      },
    ],
  },

  pourquoi: {
    eyebrow: "Pourquoi CAAF",
    title: "La due diligence en RDC\nexige un expert local.",
    description:
      "Les transactions en RDC comportent des risques spécifiques que seul un cabinet profondément ancré localement peut identifier et quantifier avec fiabilité.",
    items: [
      {
        icon: "Globe",
        title: "Connaissance du marché congolais",
        description:
          "Nous connaissons les pratiques comptables locales, les subtilités fiscales congolaises et les risques opérationnels spécifiques à la RDC que les cabinets internationaux peuvent sous-estimer.",
      },
      {
        icon: "ShieldCheck",
        title: "Double lecture OHADA / IFRS",
        description:
          "Nous analysons les comptes sous le prisme OHADA pour le local et IFRS pour le reporting groupe — une compétence essentielle pour les transactions transfrontalières.",
      },
      {
        icon: "UserCheck",
        title: "Associé impliqué personnellement",
        description:
          "L'associé qui signe le rapport est celui qui mène les investigations. Pas de sous-traitance à des juniors sur un sujet aussi critique.",
      },
      {
        icon: "Clock",
        title: "Respect des délais transactionnels",
        description:
          "Nous sommes habitués aux calendriers serrés des transactions M&A. Nos équipes sont mobilisables en 48h et livrent dans les délais convenus.",
      },
      {
        icon: "Zap",
        title: "Accès terrain immédiat",
        description:
          "Basés à Lubumbashi et actifs dans toutes les provinces, nous pouvons accéder aux sites de la cible rapidement — un avantage décisif quand la data room ne suffit pas.",
      },
      {
        icon: "BrainCircuit",
        title: "Synergie Audit-Fiscal-Advisory",
        description:
          "Notre capacité à mobiliser simultanément des experts en audit, fiscalité et risques au sein du même cabinet garantit une cohérence totale de l'analyse.",
      },
    ],
  },

  secteurs: {
    eyebrow: "Secteurs couverts",
    title: "Des transactions dans\nles secteurs clés du pays.",
    description:
      "Nous avons accompagné des due diligences dans les secteurs les plus actifs en matière de transactions en RDC et dans la sous-région.",
    stripText: "Vous préparez une acquisition ou un investissement ?",
    stripHighlight: "Parlons-en en toute confidentialité.",
    stripCta: "Nous contacter",
    items: [
      {
        icon: "Pickaxe",
        title: "Mines & Ressources naturelles",
        description:
          "Due diligence sur les actifs miniers, sociétés d'exploration, sous-traitants et joint-ventures dans le secteur extractif.",
        tags: ["Actifs miniers", "JV", "Exploration"],
        featured: true,
      },
      {
        icon: "Landmark",
        title: "Banque & Finance",
        description:
          "Due diligence sur les établissements bancaires, institutions de microfinance et compagnies d'assurance.",
        tags: ["Acquisitions bancaires", "Microfinance", "Portefeuille"],
        featured: true,
      },
      {
        icon: "Factory",
        title: "Industrie & Production",
        description: "Analyse pré-acquisition d'unités de production, usines et actifs industriels.",
        tags: ["Usines", "Capacités", "Actifs"],
        featured: false,
      },
      {
        icon: "Building2",
        title: "Immobilier & Infrastructure",
        description: "Due diligence sur les actifs immobiliers et les projets d'infrastructure.",
        tags: ["Actifs immobiliers", "Projets", "PPP"],
        featured: false,
      },
      {
        icon: "Globe2",
        title: "Télécoms & Technologies",
        description: "Analyse de cibles technologiques, opérateurs et fournisseurs IT.",
        tags: ["Opérateurs", "Licences", "Tech"],
        featured: false,
      },
      {
        icon: "Store",
        title: "Commerce & Distribution",
        description: "Due diligence sur les réseaux de distribution, franchises et chaînes commerciales.",
        tags: ["Réseaux", "Franchises", "Retail"],
        featured: false,
      },
    ],
  },

  cas: {
    eyebrow: "Cas d'intervention",
    title: "Des transactions sécurisées,\ndes décisions éclairées.",
    description:
      "Exemples anonymisés de missions de due diligence illustrant notre capacité à révéler les risques cachés et à protéger les intérêts de nos clients.",
    sectionCta: "Lancer une due diligence",
    items: [
      {
        id: "minier",
        sector: "Mines & Ressources",
        sectorIcon: "Pickaxe",
        title: "Due diligence pré-acquisition d'un actif minier au Katanga",
        location: "Katanga, RDC",
        context:
          "Un fonds d'investissement basé à Londres envisageait l'acquisition d'une participation de 70% dans une société minière congolaise. Le prix demandé était de 45 millions USD. Le fonds avait besoin d'une due diligence financière, fiscale et opérationnelle complète en 4 semaines.",
        approach: [
          "Équipe de 6 personnes mobilisée en 48h (2 financiers, 2 fiscalistes, 2 opérationnels)",
          "Analyse des comptes sur 5 exercices avec normalisation de l'EBITDA",
          "Revue fiscale complète incluant les risques liés au Code minier",
          "Visites des 2 sites miniers et entretiens avec le management",
        ],
        results: [
          { icon: "AlertTriangle", label: "Passifs fiscaux non provisionnés de 3,2 millions USD identifiés" },
          { icon: "CheckCircle2", label: "EBITDA normalisé inférieur de 22% au chiffre présenté" },
          { icon: "TrendingUp", label: "Prix d'acquisition renégocié à la baisse de 8 millions USD" },
          { icon: "Users", label: "Transaction conclue avec les garanties appropriées dans le SPA" },
        ],
        quote:
          "Sans la due diligence CAAF, nous aurions payé 8 millions de trop. Leur connaissance du terrain congolais a été déterminante.",
        quoteAuthor: "Managing Partner du Fonds",
      },
      {
        id: "banque",
        sector: "Banque & Finance",
        sectorIcon: "Landmark",
        title: "Vendor due diligence pour la cession d'une institution de microfinance",
        location: "Kinshasa, RDC",
        context:
          "Les actionnaires d'une institution de microfinance en forte croissance souhaitaient céder leur participation à un groupe bancaire régional. Ils ont mandaté CAAF pour réaliser une vendor due diligence afin d'accélérer le processus et maximiser le prix de cession.",
        approach: [
          "Préparation d'une data room complète et structurée",
          "Rapport de vendor DD couvrant finances, fiscalité et opérations",
          "Identification proactive des points de faiblesse et remédiation préalable",
          "Assistance dans la rédaction de l'information memorandum",
        ],
        results: [
          { icon: "CheckCircle2", label: "Data room opérationnelle en 2 semaines" },
          { icon: "TrendingUp", label: "3 offres fermes reçues en 6 semaines" },
          { icon: "AlertTriangle", label: "2 faiblesses opérationnelles corrigées avant la mise en vente" },
          { icon: "Users", label: "Cession conclue à un prix supérieur de 15% aux attentes initiales" },
        ],
        quote:
          "La vendor DD préparée par CAAF a donné confiance aux acheteurs potentiels et accéléré considérablement le processus de cession.",
        quoteAuthor: "Président du Conseil d'Administration",
      },
    ],
  },

  cta: {
    eyebrow: "Transaction en vue ?",
    title: "Ne signez rien",
    titleAccent: "sans avoir investigué.",
    description:
      "Que vous soyez acquéreur, vendeur ou investisseur, une due diligence rigoureuse est votre meilleure protection. Parlons de votre transaction en toute confidentialité.",
    trustPoints: [
      "Mobilisation en 48h",
      "Protocole de confidentialité renforcé",
      "Rapport livré dans les délais transactionnels",
      "Support jusqu'au closing",
    ],
    primaryCta: { label: "Lancer une due diligence", href: "/contact" },
    secondaryCta: { label: "Appeler le cabinet", href: "tel:+243999309901" },
    watermarkIcon: "Search",
    contactOptions: [
      {
        icon: "Calendar",
        title: "Réunion de cadrage",
        description: "Définissons ensemble le périmètre et le calendrier.",
        href: "/contact",
        cta: "Planifier la réunion",
        primary: true,
      },
      {
        icon: "Phone",
        title: "Appeler directement",
        description: "+243 999 309 901 / +243 810 372 645 — disponible pour les sujets urgents.",
        href: "tel:+243999309901",
        cta: "Appeler maintenant",
        primary: false,
      },
      {
        icon: "Mail",
        title: "Écrire au cabinet",
        description: "advisory@caaf-rdc.com — réponse sous 24h ouvrées.",
        href: "mailto:advisory@caaf-rdc.com",
        cta: "Envoyer un email",
        primary: false,
      },
    ],
    stats: [
      { value: "48h", label: "Mobilisation" },
      { value: "4 sem.", label: "Délai moyen" },
      { value: "100%", label: "Confidentiel" },
    ],
  },
}
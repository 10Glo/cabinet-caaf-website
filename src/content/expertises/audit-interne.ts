import type { ExpertisePageConfig } from "./types"

export const auditInterneConfig: ExpertisePageConfig = {
  slug: "audit-interne",

  // ─── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    category: "Risk Assurance Services",
    categoryHref: "/expertises#risk-assurance",
    title: "Renforcer votre contrôle de gestion,",
    titleAccent: "sécuriser vos opérations.",
    description:
      "L'audit interne est le premier rempart contre les dysfonctionnements. Nous évaluons pour vous l'efficacité de vos contrôles internes, la fiabilité de vos informations managériales et l'atteinte de vos objectifs stratégiques, conformément aux normes internationales IIA (Institute of Internal Auditors).",
    ctaPrimary: { label: "Découvrir nos interventions", href: "#missions" },
    ctaSecondary: { label: "Structurer votre audit interne", href: "/contact" },
    stats: [
      { value: "IIA", label: "Normes internationales" },
      { value: "COSO", label: "Cadre de référence" },
      { value: "Indépendant", label: "Structure du service" },
      { value: "Risque", label: "Approche pilotée par le risque" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=1920&auto=format&fit=crop",
    },
  },

  // ─── Sous-services ────────────────────────────────────────────────────────
  sousServices: {
    eyebrow: "Nos missions",
    title: "Chaque risque exige",
    titleAccent: "une approche sur mesure.",
    description:
      "L'audit interne ne se limite pas à vérifier si les comptes sont justes. Il examine si l'entreprise atteint ses objectifs en maîtrisant ses risques. Voici nos cinq types d'interventions.",
    sectionId: "missions",
    headerLabel: "Types d'audit",
    items: [
      {
        id: "performance",
        icon: "SearchCheck",
        title: "Audit de Performance",
        subtitle: "Efficacité & Optimisation",
        description:
          "Examen critique des processus métiers pour identifier les gisements de productivité, les gaspillages et les opportunités d'amélioration opérationnelle. L'objectif\u00a0: faire mieux avec les mêmes ressources.",
        deliverables: [
          "Rapport sur les performances des processus",
          "Cartographie des gains potentiels",
          "Recommandations d'optimisation chiffrées",
        ],
      },
      {
        id: "compliance",
        icon: "FileText",
        title: "Audit de Conformité",
        subtitle: "Respect des règles",
        description:
          "Vérification de l'adhésion aux lois, règlements, directives internes et procédures établies par l'entreprise. Un outil de prévention essentiel dans un environnement réglementaire complexe.",
        deliverables: [
          "Rapport de conformité réglementaire",
          "Analyse détaillée des écarts constatés",
          "Plan de redressement priorisé",
        ],
      },
      {
        id: "operational",
        icon: "TrendingUp",
        title: "Audit Opérationnel",
        subtitle: "Processus & Contrôles",
        description:
          "Évaluation des systèmes de contrôle interne visant à protéger les actifs, assurer la fiabilité de l'information financière et garantir l'efficacité opérationnelle au quotidien.",
        deliverables: [
          "Tests des contrôles clés par processus",
          "Évaluation des risques résiduels",
          "Rapport d'assurance sur la maîtrise des risques",
        ],
      },
      {
        id: "fraude",
        icon: "ShieldAlert",
        title: "Enquêtes & Investigations",
        subtitle: "Gestion des risques majeurs",
        description:
          "Enquêtes discrètes sur des signalements de fraude, de corruption ou de conflits d'intérêts potentiels au sein de l'organisation. Nous intervenons avec la rigueur et la confidentialité que ces situations exigent.",
        deliverables: [
          "Rapport d'enquête confidentiel",
          "Documentation probante des faits",
          "Recommandations disciplinaires ou juridiques",
        ],
      },
      {
        id: "pre-acquis",
        icon: "LockKeyhole",
        title: "Due Diligence Interne",
        subtitle: "Préparation aux transactions",
        description:
          "Audit préparatoire avant une acquisition, une fusion ou une restructuration pour cartographier les risques opérationnels et financiers non couverts par l'audit financier classique.",
        deliverables: [
          "Rapport des risques critiques identifiés",
          "Estimation du coût de consolidation",
          "Due diligence opérationnelle complète",
        ],
      },
    ],
  },

  // ─── Approche ─────────────────────────────────────────────────────────────
  approche: {
    eyebrow: "Méthodologie",
    title: "Une démarche constructive,",
    titleAccent: "non punitive.",
    description:
      "Notre rôle n'est pas de chercher des coupables, mais d'améliorer le système. Nous travaillons main dans la main avec vos équipes pour transformer les risques en opportunités de progrès.",
    totalSteps: "05",
    stepLabel: "Phase",
    steps: [
      {
        number: "01",
        id: "planification",
        icon: "Target",
        title: "Planification basée sur les risques",
        description:
          "Nous identifions d'abord les zones à fort risque pour votre entreprise. Le plan d'audit annuel est dynamique, orienté vers ce qui menace réellement vos objectifs stratégiques et opérationnels.",
        details: [
          "Analyse macro des risques stratégiques et opérationnels",
          "Entretiens avec les directeurs de département",
          "Définition des priorités et du plan d'audit annuel",
          "Validation par la direction générale",
        ],
      },
      {
        number: "02",
        id: "evaluation",
        icon: "Microscope",
        title: "Évaluation du dispositif de contrôle",
        description:
          "Avant de tester, nous comprenons comment vos processus fonctionnent réellement. Nous évaluons la conception théorique des contrôles pour déterminer s'ils sont aptes à couvrir les risques identifiés.",
        details: [
          "Cartographie des processus (flowcharts)",
          "Identification des points de contrôle existants",
          "Test de la conception des contrôles",
          "Gap analysis entre risques et contrôles",
        ],
      },
      {
        number: "03",
        id: "testing",
        icon: "PenTool",
        title: "Tests d'effectivité & Analyse",
        description:
          "Nous vérifions si les contrôles sont appliqués comme prévu sur le terrain. Si une faille est détectée, nous analysons son impact potentiel sur les actifs, l'information ou la réputation de l'entreprise.",
        details: [
          "Tests statistiques sur les transactions",
          "Observation directe des pratiques terrain",
          "Interviews des opérationnels",
          "Quantification de l'impact des défaillances",
        ],
      },
      {
        number: "04",
        id: "rapport",
        icon: "Presentation",
        title: "Restitution & Plan d'action",
        description:
          "Le rapport n'est pas qu'un constat. Il inclut un plan d'action chiffré et chronologisé pour remédier aux faiblesses identifiées, avec des responsables et des échéances claires.",
        details: [
          "Réunion de restitution avec le management",
          "Validation contradictoire des constats",
          "Attribution des responsables et des délais",
          "Présentation au comité d'audit",
        ],
      },
      {
        number: "05",
        id: "suivi",
        icon: "RefreshCcw",
        title: "Suivi des corrections",
        description:
          "La valeur de l'audit réside dans la correction des anomalies. Nous assurons le suivi jusqu'à la clôture complète des recommandations et la validation de leur mise en œuvre effective.",
        details: [
          "Point trimestriel sur l'avancement",
          "Validation des preuves de mise en œuvre",
          "Mise à jour du niveau de risque résiduel",
          "Reporting au comité d'audit",
        ],
      },
    ],
  },

  // ─── Pourquoi CAAF ────────────────────────────────────────────────────────
  pourquoi: {
    eyebrow: "Pourquoi nous choisir",
    title: "Le regard neutre\nqui fait avancer l'entreprise.",
    description:
      "L'audit interne externalisé est souvent préférable pour les PME/ETI qui ne justifient pas encore d'une fonction permanente, ou pour les grandes entreprises souhaitant un regard neuf et indépendant sur leurs opérations.",
    items: [
      {
        icon: "ShieldCheck",
        title: "Approche constructive",
        description:
          "Nous sommes là pour aider, pas pour sanctionner. Nos rapports proposent des solutions réalisables et pragmatiques adaptées à votre culture d'entreprise et à vos contraintes opérationnelles.",
      },
      {
        icon: "Users",
        title: "Indépendance garantie",
        description:
          "Contrairement à un auditeur interne salarié parfois dépendant hiérarchiquement, notre cabinet offre la distance de jugement indispensable pour pointer les vraies faiblesses sans complaisance.",
      },
      {
        icon: "BrainCircuit",
        title: "Expertise métier croisée",
        description:
          "Nos auditeurs ne connaissent pas seulement la finance. Ils comprennent les enjeux du marketing, de la production, de la logistique et des ressources humaines dans le contexte congolais.",
      },
      {
        icon: "Eye",
        title: "Vision terrain & direction",
        description:
          "Nous descendons au niveau opérationnel pour observer les pratiques réelles, et remontons à la direction pour conseiller. Un pont essentiel entre le terrain et la gouvernance.",
      },
      {
        icon: "Handshake",
        title: "Confidentialité absolue",
        description:
          "Certains sujets — fraude, conflits RH, stratégies sensibles — nécessitent une discrétion totale. Nous garantissons le secret professionnel le plus strict sur chaque mission.",
      },
      {
        icon: "Zap",
        title: "Rapidité de mobilisation",
        description:
          "Un audit interne externalisé peut être mobilisé rapidement, sans lourd investissement en recrutement ou en formation. Nos équipes sont opérationnelles en quelques jours.",
      },
    ],
  },

  // ─── Secteurs ─────────────────────────────────────────────────────────────
  secteurs: {
    eyebrow: "Domaines d'expertise",
    title: "Des défis spécifiques\nselon votre secteur.",
    description:
      "L'audit interne requiert une connaissance pointue de votre environnement métier. Nos consultants sont formés pour comprendre les réalités opérationnelles du terrain congolais dans chaque secteur.",
    stripText: "Votre secteur comporte des risques spécifiques ?",
    stripHighlight: "Discutons-en.",
    stripCta: "Prendre contact",
    items: [
      {
        icon: "Factory",
        title: "Industrie & Manufacturing",
        description:
          "Optimisation des chaînes de production, contrôle des stocks, gestion des coûts de revient et audit de la sécurité industrielle.",
        tags: ["Production", "Logistique", "Coûts"],
        featured: true,
      },
      {
        icon: "Landmark",
        title: "Banque & Finance",
        description:
          "Contrôle des risques de crédit, conformité réglementaire, gestion de trésorerie et prévention de la fraude financière.",
        tags: ["Crédit", "Trésorerie", "Fraude"],
        featured: true,
      },
      {
        icon: "Pickaxe",
        title: "Mines & Ressources",
        description:
          "Audit des processus d'extraction, traçabilité des matières premières, contrats fournisseurs et maintenance lourde.",
        tags: ["Supply Chain", "Maintenance", "Achats"],
        featured: false,
      },
      {
        icon: "Truck",
        title: "Transport & Logistique",
        description:
          "Audit des circuits de distribution, frais de transport, gestion de flotte et optimisation des délais de livraison.",
        tags: ["Flotte", "Délais", "Distribution"],
        featured: false,
      },
      {
        icon: "Store",
        title: "Commerce & Distribution",
        description:
          "Contrôle des ventes, inventaires physiques, merchandising et gestion des points de vente.",
        tags: ["Points de vente", "Inventaire", "Ventes"],
        featured: false,
      },
      {
        icon: "Globe2",
        title: "ONG & Projets internationaux",
        description:
          "Audit des fonds de projets, conformité aux procédures bailleurs et vérification de l'utilisation des ressources.",
        tags: ["Bailleurs", "Conformité", "Terrain"],
        featured: false,
      },
    ],
  },

  // ─── Cas d'intervention ───────────────────────────────────────────────────
  cas: {
    eyebrow: "Témoignages",
    title: "Des résultats qui parlent\npar eux-mêmes.",
    description:
      "Des situations complexes résolues grâce à une investigation minutieuse et des recommandations actionnables. Exemples anonymisés.",
    sectionCta: "Évaluer vos propres risques",
    items: [
      {
        id: "industriel",
        sector: "Industrie Manufacturière",
        sectorIcon: "Factory",
        title: "Audit de la chaîne d'approvisionnement d'une unité de fabrication",
        location: "Kinshasa, Zone Industrielle",
        context:
          "Une grande unité de fabrication signalait des écarts persistants entre ses besoins en matière première et ses livraisons effectives, entraînant des arrêts de production coûteux et une augmentation inexpliquée des coûts d'achat depuis plusieurs trimestres.",
        approach: [
          "Analyse des données historiques de consommation vs commandes",
          "Observation terrain des processus de réception de marchandises",
          "Entretiens anonymisés avec les agents logistiques et acheteurs",
          "Tests de concordance entre bons de commande et factures fournisseurs",
        ],
        results: [
          { icon: "DollarSign", label: "Détection de fuites financières représentant 8% du CA" },
          { icon: "CheckCircle2", label: "Mise en place d'un nouveau process d'achat centralisé" },
          { icon: "Clock", label: "Réduction des arrêts de production de 40%" },
          { icon: "ShieldAlert", label: "Sanctions disciplinaires et récupération de créances" },
        ],
        quote:
          "L'audit a permis de révéler des failles systémiques que nous ignorions totalement. Le retour sur investissement a été immédiat.",
        quoteAuthor: "Directeur Industriel",
      },
      {
        id: "commercial",
        sector: "Commercial & Vente",
        sectorIcon: "Building2",
        title: "Audit du cycle commercial et de la politique de commissions",
        location: "Lubumbashi, RDC",
        context:
          "Des tensions internes et des plaintes clients concernant le recouvrement des créances ont conduit la direction générale à demander un audit complet du cycle commercial, de la politique de commissions et de la gestion des comptes clients.",
        approach: [
          "Revue de la matrice de calcul des commissions sur 3 exercices",
          "Audits physiques des stocks vendus vs stocks comptabilisés",
          "Enquête de satisfaction auprès de clients partenaires",
          "Vérification de la cohérence des ristournes accordées",
        ],
        results: [
          { icon: "CheckCircle2", label: "Recouvrement de 150 millions FC de dettes anciennes" },
          { icon: "DollarSign", label: "Corrections de paiements de commissions erronés" },
          { icon: "ShieldAlert", label: "Nettoyage de la base client (clients fantômes détectés)" },
          { icon: "Clock", label: "Accélération du cycle de recouvrement de 35%" },
        ],
        quote:
          "Nous avions perdu le fil de notre réseau commercial. L'équipe d'audit interne de CAAF nous a rendu la main.",
        quoteAuthor: "Président Directeur Général",
      },
      {
        id: "projet",
        sector: "Gestion de Projet",
        sectorIcon: "Pickaxe",
        title: "Suivi de fonds pour un programme d'infrastructures international",
        location: "Bas-Congo & Kinshasa, RDC",
        context:
          "Un organisme international finançant des infrastructures routières craignait des détournements de fonds et une mauvaise utilisation des ressources humaines et matérielles sur plusieurs chantiers dispersés dans deux provinces.",
        approach: [
          "Visites surprise sur les chantiers pour vérifier la présence effective des équipements",
          "Vérification physique des quantités de matériaux posés vs devis validés",
          "Audit des bordereaux de paiement des sous-traitants locaux",
          "Tests d'inventaires physiques des outils et machines",
        ],
        results: [
          { icon: "ShieldAlert", label: "Identification de deux chantiers hors spécifications contractuelles" },
          { icon: "DollarSign", label: "Arrêt de paiements sur des factures litigieuses" },
          { icon: "CheckCircle2", label: "Refonte complète du reporting chantier vers la maison-mère" },
          { icon: "Clock", label: "Clôture du projet dans les délais malgré les problèmes détectés" },
        ],
        quote:
          "La rigueur apportée par nos partenaires d'audit a permis de maintenir la confiance des donateurs sur la suite du programme.",
        quoteAuthor: "Coordinateur Pays",
      },
    ],
  },

  // ─── CTA ──────────────────────────────────────────────────────────────────
  cta: {
    eyebrow: "Prêt à agir ?",
    title: "Ne subissez plus les risques",
    titleAccent: "de vos propres dysfonctionnements.",
    description:
      "Qu'il s'agisse de mettre en place une fonction d'audit interne, d'externaliser une mission ponctuelle ou de traiter un sujet sensible, nous sommes prêts à intervenir rapidement et en toute confidentialité.",
    trustPoints: [
      "Premier échange sans engagement",
      "Cartographie gratuite des risques majeurs",
      "Approche bienveillante pour vos équipes",
      "Garantie de confidentialité totale",
    ],
    primaryCta: { label: "Diagnostiquer mon organisation", href: "/contact" },
    secondaryCta: { label: "Appeler directement", href: "tel:+243XXXXXXXX" },
    watermarkIcon: "ShieldCheck",
    contactOptions: [
      {
        icon: "Calendar",
        title: "Programmer un diagnostic",
        description: "Une demi-journée pour cartographier vos besoins en audit interne.",
        href: "/contact",
        cta: "Réserver un créneau",
        primary: true,
      },
      {
        icon: "Phone",
        title: "Appeler l'associé senior",
        description: "+243 XX XXX XXXX — disponible pour un échange direct.",
        href: "tel:+243XXXXXXXX",
        cta: "Appeler maintenant",
        primary: false,
      },
      {
        icon: "Mail",
        title: "Envoyer une demande",
        description: "audit.interne@caaf-rdc.com — réponse sous 24h ouvrées.",
        href: "mailto:audit.interne@caaf-rdc.com",
        cta: "Envoyer un email",
        primary: false,
      },
    ],
    stats: [
      { value: "Discret", label: "Sur signalement" },
      { value: "100%", label: "Objectif" },
      { value: "Action", label: "Orienté résultat" },
    ],
  },
}
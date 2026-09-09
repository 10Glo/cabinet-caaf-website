import type { ExpertisePageConfig } from "./types"

export const conseilFiscalConfig: ExpertisePageConfig = {
  slug: "conseil-fiscal",

  hero: {
    category: "Conseil & Advisory",
    categoryHref: "/expertises#conseil-advisory",
    title: "Maîtriser votre fiscalité,",
    titleAccent: "sécuriser votre développement.",
    description:
      "La fiscalité congolaise est complexe, évolutive et souvent source de risques majeurs pour les entreprises. Chez CAAF\u00a0SAS, nous vous aidons à transformer cette contrainte en levier stratégique\u00a0: conformité assurée, charge fiscale optimisée, contentieux anticipés.",
    ctaPrimary: { label: "Découvrir nos services", href: "#missions" },
    ctaSecondary: { label: "Consulter un fiscaliste", href: "/contact" },
    stats: [
      { value: "CGI", label: "Code Général des Impôts RDC" },
      { value: "OHADA", label: "Droit des affaires" },
      { value: "OCDE", label: "Prix de transfert" },
      { value: "30+", label: "Années d'expérience" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1920&auto=format&fit=crop",
    },
  },

  sousServices: {
    eyebrow: "Nos services fiscaux",
    title: "De la conformité à la stratégie,",
    titleAccent: "un accompagnement complet.",
    description:
      "Notre département fiscal couvre l'ensemble du spectre\u00a0: déclarations, optimisation, contentieux, prix de transfert et structuration des opérations internationales.",
    sectionId: "missions",
    headerLabel: "Domaines d'intervention",
    items: [
      {
        id: "conformite",
        icon: "FileText",
        title: "Conformité Fiscale",
        subtitle: "Déclarations & Obligations",
        description:
          "Préparation, revue et dépôt de l'ensemble de vos déclarations fiscales\u00a0: impôt sur les bénéfices, TVA, IPR, impôt foncier, taxes sectorielles. Nous garantissons l'exactitude et le respect des délais pour éviter les pénalités.",
        deliverables: [
          "Préparation des déclarations fiscales périodiques",
          "Revue de cohérence avant dépôt",
          "Suivi du calendrier fiscal et alertes",
        ],
      },
      {
        id: "optimisation",
        icon: "Calculator",
        title: "Optimisation Fiscale",
        subtitle: "Réduction légale de la charge",
        description:
          "Identification des opportunités d'optimisation fiscale légitimes dans le cadre du droit congolais\u00a0: régimes incitatifs, exonérations sectorielles, structuration des opérations, gestion des déficits reportables.",
        deliverables: [
          "Diagnostic fiscal complet",
          "Stratégie d'optimisation documentée",
          "Estimation des économies réalisables",
        ],
      },
      {
        id: "contentieux",
        icon: "Scale",
        title: "Contentieux Fiscal",
        subtitle: "Défense & Négociation",
        description:
          "Assistance et représentation lors des contrôles fiscaux, rédaction des réclamations, négociation avec l'administration fiscale et accompagnement devant les juridictions compétentes.",
        deliverables: [
          "Préparation aux contrôles fiscaux",
          "Rédaction des mémoires en réclamation",
          "Représentation devant l'administration et les tribunaux",
        ],
      },
      {
        id: "international",
        icon: "Globe2",
        title: "Fiscalité Internationale",
        subtitle: "Prix de transfert & Conventions",
        description:
          "Structuration fiscale des opérations transfrontalières, documentation des prix de transfert conformément aux directives OCDE, analyse des conventions fiscales et gestion des retenues à la source.",
        deliverables: [
          "Documentation prix de transfert (Master File / Local File)",
          "Analyse des conventions de non-double imposition",
          "Structuration fiscale des flux internationaux",
        ],
      },
      {
        id: "veille",
        icon: "Receipt",
        title: "Veille & Formation Fiscale",
        subtitle: "Anticipation des changements",
        description:
          "Suivi permanent de l'évolution de la législation fiscale congolaise et internationale. Formation de vos équipes comptables et financières aux nouvelles dispositions.",
        deliverables: [
          "Notes d'alerte sur les changements législatifs",
          "Sessions de formation sur mesure",
          "Revue annuelle de l'exposition fiscale",
        ],
      },
    ],
  },

  approche: {
    eyebrow: "Notre approche",
    title: "La rigueur du droit,",
    titleAccent: "le pragmatisme du terrain.",
    description:
      "Notre démarche conjugue une connaissance approfondie du droit fiscal congolais avec une compréhension des réalités pratiques de l'administration fiscale en RDC.",
    totalSteps: "05",
    stepLabel: "Étape",
    steps: [
      {
        number: "01",
        id: "diagnostic",
        icon: "Search",
        title: "Diagnostic fiscal",
        description:
          "Revue complète de votre situation fiscale\u00a0: historique des déclarations, positions prises, risques latents, opportunités non exploitées.",
        details: [
          "Revue des déclarations des 3 derniers exercices",
          "Identification des risques de redressement",
          "Analyse des positions fiscales agressives ou prudentes",
          "Entretiens avec votre équipe comptable",
        ],
      },
      {
        number: "02",
        id: "strategie",
        icon: "ClipboardList",
        title: "Élaboration de la stratégie",
        description:
          "Sur la base du diagnostic, nous définissons une stratégie fiscale adaptée à vos objectifs\u00a0: sécurisation, optimisation, structuration internationale.",
        details: [
          "Définition des objectifs fiscaux avec la direction",
          "Identification des leviers d'optimisation légaux",
          "Analyse des régimes incitatifs applicables",
          "Évaluation de l'impact des options retenues",
        ],
      },
      {
        number: "03",
        id: "mise-en-oeuvre",
        icon: "Settings",
        title: "Mise en œuvre",
        description:
          "Implémentation des mesures retenues\u00a0: restructuration des flux, mise à jour des déclarations, documentation des prix de transfert, négociation avec l'administration.",
        details: [
          "Restructuration des schémas fiscaux",
          "Préparation de la documentation de support",
          "Formation des équipes internes",
          "Coordination avec vos conseils juridiques",
        ],
      },
      {
        number: "04",
        id: "securisation",
        icon: "ShieldCheck",
        title: "Sécurisation & Documentation",
        description:
          "Chaque position fiscale est documentée et argumentée pour résister à un éventuel contrôle. La traçabilité est notre meilleure protection.",
        details: [
          "Constitution du dossier de défense préventif",
          "Documentation des positions fiscales prises",
          "Archivage structuré des pièces justificatives",
          "Préparation aux éventuels contrôles",
        ],
      },
      {
        number: "05",
        id: "suivi",
        icon: "RefreshCcw",
        title: "Suivi permanent",
        description:
          "La fiscalité évolue constamment. Nous assurons une veille continue et ajustons votre stratégie en fonction des changements législatifs et de l'évolution de vos activités.",
        details: [
          "Veille législative et réglementaire",
          "Revue fiscale annuelle",
          "Alertes sur les changements impactant votre secteur",
          "Mise à jour de la stratégie fiscale",
        ],
      },
    ],
  },

  pourquoi: {
    eyebrow: "Pourquoi CAAF",
    title: "La fiscalité congolaise\nne s'improvise pas.",
    description:
      "Le système fiscal de la RDC comporte des subtilités, des zones grises et des pratiques administratives que seul un cabinet ancré localement depuis plus de trente ans peut maîtriser pleinement.",
    items: [
      {
        icon: "BookOpen",
        title: "Maîtrise du CGI congolais",
        description:
          "Nous connaissons le Code Général des Impôts dans ses moindres détails — y compris les instructions administratives, les circulaires et les pratiques non codifiées.",
      },
      {
        icon: "Globe",
        title: "Fiscalité internationale intégrée",
        description:
          "Prix de transfert, conventions fiscales, retenues à la source — nous accompagnons les groupes internationaux dans la structuration fiscale de leurs opérations congolaises.",
      },
      {
        icon: "UserCheck",
        title: "Relations avec l'administration",
        description:
          "Trois décennies de pratique nous ont permis de bâtir des relations professionnelles avec la DGI et la DGDA, facilitant le dialogue et la résolution des contentieux.",
      },
      {
        icon: "Languages",
        title: "Conseil bilingue",
        description:
          "Nos avis et notre documentation fiscale sont produits en français et en anglais pour les groupes internationaux et leurs maisons-mères.",
      },
      {
        icon: "Clock",
        title: "Réactivité en période de contrôle",
        description:
          "Lorsqu'un contrôle fiscal est notifié, chaque jour compte. Nous mobilisons nos équipes en 24h pour vous assister dès le premier acte de la procédure.",
      },
      {
        icon: "BrainCircuit",
        title: "Vision intégrée Audit-Fiscal",
        description:
          "Notre double compétence en audit et en fiscalité nous permet d'identifier les risques fiscaux lors des missions d'audit et inversement — une synergie que peu de cabinets offrent.",
      },
    ],
  },

  secteurs: {
    eyebrow: "Secteurs d'intervention",
    title: "Chaque secteur a\nsa fiscalité propre.",
    description:
      "Les régimes fiscaux varient considérablement selon votre secteur d'activité en RDC. Mines, banque, industrie — chacun a ses spécificités que nous maîtrisons.",
    stripText: "Votre secteur a des enjeux fiscaux spécifiques ?",
    stripHighlight: "Parlons de votre situation concrète.",
    stripCta: "Consulter un fiscaliste",
    items: [
      {
        icon: "Pickaxe",
        title: "Mines & Ressources naturelles",
        description:
          "Code minier, redevances, taxes superficiaires, régime fiscal stabilisé — une fiscalité sectorielle dense que nous maîtrisons depuis trois décennies.",
        tags: ["Code minier", "Redevances", "Stabilisation"],
        featured: true,
      },
      {
        icon: "Landmark",
        title: "Banque & Finance",
        description:
          "Fiscalité des produits financiers, taxe sur les intérêts, TVA bancaire, retenues à la source et conformité aux circulaires BCC.",
        tags: ["TVA bancaire", "Retenues", "BCC"],
        featured: true,
      },
      {
        icon: "Factory",
        title: "Industrie & Production",
        description: "Régimes incitatifs à l'investissement, droits de douane, TVA industrielle et taxes sectorielles.",
        tags: ["Investissement", "Douane", "TVA"],
        featured: false,
      },
      {
        icon: "Building2",
        title: "Groupes & Holdings",
        description: "Prix de transfert, consolidation fiscale, structuration des flux intra-groupe.",
        tags: ["Prix de transfert", "Intra-groupe", "Holding"],
        featured: false,
      },
      {
        icon: "Globe2",
        title: "ONG & Organisations internationales",
        description: "Exonérations, régimes spéciaux, TVA non récupérable et obligations déclaratives spécifiques.",
        tags: ["Exonérations", "TVA", "Régimes spéciaux"],
        featured: false,
      },
      {
        icon: "Store",
        title: "Commerce & Distribution",
        description: "TVA, droits d'accise, fiscalité des importations et gestion des crédits de TVA.",
        tags: ["TVA", "Accises", "Importation"],
        featured: false,
      },
    ],
  },

  cas: {
    eyebrow: "Cas d'intervention",
    title: "Des positions sécurisées,\ndes économies réalisées.",
    description:
      "Exemples anonymisés de missions fiscales illustrant notre capacité à protéger nos clients et à optimiser leur charge fiscale dans le respect de la loi.",
    sectionCta: "Discutons de votre situation fiscale",
    items: [
      {
        id: "minier",
        sector: "Mines & Ressources",
        sectorIcon: "Pickaxe",
        title: "Défense fiscale d'un groupe minier face à un redressement majeur",
        location: "Katanga, RDC",
        context:
          "Un groupe minier international a reçu une notification de redressement fiscal portant sur trois exercices et représentant un montant de 12 millions USD. Les chefs de redressement portaient sur les prix de transfert, les amortissements et la déductibilité de certaines charges.",
        approach: [
          "Analyse détaillée de chaque chef de redressement",
          "Constitution du dossier de défense avec documentation probante",
          "Rédaction du mémoire en réclamation de 180 pages",
          "Négociation directe avec la commission de recours de la DGI",
        ],
        results: [
          { icon: "CheckCircle2", label: "Redressement réduit de 85% après réclamation" },
          { icon: "TrendingUp", label: "Économie de 10,2 millions USD pour le client" },
          { icon: "AlertTriangle", label: "Documentation prix de transfert mise en conformité OCDE" },
          { icon: "Users", label: "Relation constructive établie avec la DGI pour les exercices suivants" },
        ],
        quote:
          "CAAF a transformé une menace existentielle en un redressement gérable. Leur maîtrise du droit fiscal congolais est sans égale.",
        quoteAuthor: "Directeur Financier Groupe",
      },
      {
        id: "industriel",
        sector: "Industrie",
        sectorIcon: "Factory",
        title: "Optimisation fiscale pour une unité de production en phase d'expansion",
        location: "Kinshasa, RDC",
        context:
          "Une entreprise industrielle prévoyant un investissement de 8 millions USD dans une nouvelle ligne de production souhaitait structurer son projet pour bénéficier des régimes incitatifs prévus par le Code des investissements et minimiser l'impact fiscal de la phase de montée en charge.",
        approach: [
          "Analyse des régimes incitatifs applicables (Code des investissements, zones économiques)",
          "Structuration de l'investissement pour maximiser les avantages fiscaux",
          "Préparation du dossier d'agrément auprès de l'ANAPI",
          "Planification fiscale sur 5 ans avec scénarios",
        ],
        results: [
          { icon: "CheckCircle2", label: "Agrément ANAPI obtenu en 3 mois" },
          { icon: "TrendingUp", label: "Exonérations estimées à 2,4 millions USD sur 5 ans" },
          { icon: "AlertTriangle", label: "Structuration conforme pour éviter tout risque de remise en cause" },
          { icon: "Users", label: "Équipe comptable formée aux obligations du régime incitatif" },
        ],
        quote:
          "L'économie fiscale réalisée a financé une partie significative de notre investissement. CAAF a pensé à des leviers que nous n'aurions jamais identifiés seuls.",
        quoteAuthor: "PDG",
      },
      {
        id: "groupe",
        sector: "Groupe international",
        sectorIcon: "Building2",
        title: "Mise en conformité prix de transfert d'un groupe européen",
        location: "Lubumbashi & Luxembourg",
        context:
          "La filiale congolaise d'un groupe européen n'avait jamais documenté ses prix de transfert. La DGI ayant annoncé un renforcement des contrôles sur les transactions intra-groupe, la maison-mère a mandaté CAAF pour une mise en conformité complète.",
        approach: [
          "Cartographie de l'ensemble des transactions intra-groupe",
          "Analyse fonctionnelle de la filiale congolaise",
          "Benchmarking des prix et marges avec les bases de données internationales",
          "Rédaction du Master File et du Local File",
        ],
        results: [
          { icon: "CheckCircle2", label: "Documentation complète produite en 8 semaines" },
          { icon: "TrendingUp", label: "Positions prix de transfert sécurisées pour 3 exercices" },
          { icon: "AlertTriangle", label: "2 transactions restructurées pour éliminer le risque" },
          { icon: "Users", label: "Processus de mise à jour annuelle automatisé" },
        ],
        quote:
          "La documentation produite par CAAF répond aux standards que notre groupe applique dans tous les pays. Impressionnant pour un cabinet local.",
        quoteAuthor: "Head of Tax (Luxembourg)",
      },
    ],
  },

  cta: {
    eyebrow: "Prochaine étape",
    title: "Sécurisez votre fiscalité",
    titleAccent: "avant que le fisc ne s'en charge.",
    description:
      "Un diagnostic fiscal préventif coûte infiniment moins cher qu'un redressement. Parlons de votre situation et identifions ensemble les priorités.",
    trustPoints: [
      "Premier échange confidentiel et sans engagement",
      "Diagnostic fiscal en 5 jours ouvrés",
      "Recommandations immédiatement actionnables",
      "Interlocuteur associé dédié",
    ],
    primaryCta: { label: "Demander un diagnostic fiscal", href: "/contact" },
    secondaryCta: { label: "Appeler le cabinet", href: "tel:+243999309901" },
    watermarkIcon: "Scale",
    contactOptions: [
      {
        icon: "Calendar",
        title: "Diagnostic fiscal",
        description: "5 jours pour cartographier vos risques et opportunités.",
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
        description: "fiscal@caaf-rdc.com — réponse sous 24h ouvrées.",
        href: "mailto:fiscal@caaf-rdc.com",
        cta: "Envoyer un email",
        primary: false,
      },
    ],
    stats: [
      { value: "5 jours", label: "Diagnostic fiscal" },
      { value: "CGI", label: "Expertise locale" },
      { value: "100%", label: "Confidentiel" },
    ],
  },
}
import type { ExpertisePageConfig } from "./types"

export const gestionCommercialeConfig: ExpertisePageConfig = {
  slug: "gestion-commerciale",

  hero: {
    category: "Services Comptables",
    categoryHref: "/expertises#services-comptables",
    title: "Piloter vos ventes et vos stocks",
    titleAccent: "avec rigueur et visibilité.",
    description:
      "La gestion commerciale est le lien entre votre activité opérationnelle et votre comptabilité. Chez CAAF\u00a0SAS, nous mettons en place et optimisons vos processus de facturation, de gestion des stocks et de suivi des créances pour que chaque transaction soit tracée, chaque franc comptabilisé.",
    ctaPrimary: { label: "Découvrir nos services", href: "#missions" },
    ctaSecondary: { label: "Optimiser ma gestion commerciale", href: "/contact" },
    stats: [
      { value: "Flux", label: "Achats-Ventes maîtrisés" },
      { value: "Stock", label: "Inventaire permanent" },
      { value: "BFR", label: "Besoin en fonds optimisé" },
      { value: "Temps réel", label: "Visibilité garantie" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1920&auto=format&fit=crop",
    },
  },

  sousServices: {
    eyebrow: "Nos services",
    title: "De la commande au recouvrement,",
    titleAccent: "chaque étape sous contrôle.",
    description:
      "Nous structurons et optimisons l'ensemble de votre cycle commercial pour éliminer les pertes, accélérer les encaissements et fiabiliser votre information de gestion.",
    sectionId: "missions",
    headerLabel: "Prestations",
    items: [
      {
        id: "facturation",
        icon: "Receipt",
        title: "Gestion de la Facturation",
        subtitle: "Émission & Suivi",
        description:
          "Mise en place d'un processus de facturation rigoureux\u00a0: numérotation séquentielle, conformité fiscale (TVA, retenues), suivi des factures émises et relance des impayés.",
        deliverables: [
          "Processus de facturation documenté",
          "Suivi des factures émises et échéances",
          "Reporting mensuel des créances clients",
        ],
      },
      {
        id: "stocks",
        icon: "Package",
        title: "Gestion des Stocks",
        subtitle: "Inventaire & Valorisation",
        description:
          "Mise en place d'un système de gestion des stocks\u00a0: entrées, sorties, inventaires périodiques, valorisation selon les méthodes OHADA (CUMP, FIFO) et alertes de réapprovisionnement.",
        deliverables: [
          "Fiches de stock par article",
          "Rapports d'inventaire périodiques",
          "Valorisation des stocks selon la méthode retenue",
        ],
      },
      {
        id: "achats",
        icon: "ShoppingCart",
        title: "Cycle Achats-Fournisseurs",
        subtitle: "Commandes & Règlements",
        description:
          "Structuration du cycle achats\u00a0: procédure de commande, réception, rapprochement factures-bons de livraison, échéancier fournisseurs et gestion de la trésorerie fournisseurs.",
        deliverables: [
          "Procédure achats formalisée",
          "Échéancier fournisseurs actualisé",
          "Rapprochement commandes-réceptions-factures",
        ],
      },
      {
        id: "recouvrement",
        icon: "TrendingUp",
        title: "Recouvrement des Créances",
        subtitle: "Relance & Suivi",
        description:
          "Mise en place d'une procédure de relance structurée pour accélérer les encaissements, réduire le délai moyen de recouvrement et limiter les créances douteuses.",
        deliverables: [
          "Procédure de relance en 3 niveaux",
          "Balance âgée des créances clients",
          "Reporting mensuel du recouvrement",
        ],
      },
      {
        id: "tableaux-bord",
        icon: "BarChart3",
        title: "Tableaux de Bord Commerciaux",
        subtitle: "Pilotage de la performance",
        description:
          "Production de tableaux de bord commerciaux\u00a0: chiffre d'affaires, marges, rotation des stocks, délais de paiement clients et fournisseurs, top clients et top produits.",
        deliverables: [
          "Dashboard commercial mensuel",
          "Analyse des marges par produit/client",
          "Indicateurs de performance commerciale (KPI)",
        ],
      },
    ],
  },

  approche: {
    eyebrow: "Notre approche",
    title: "Structurer d'abord,",
    titleAccent: "piloter ensuite.",
    description:
      "Une gestion commerciale efficace repose sur des processus clairs, des outils adaptés et des indicateurs pertinents. Nous commençons par structurer avant de piloter.",
    totalSteps: "05",
    stepLabel: "Étape",
    steps: [
      {
        number: "01",
        id: "diagnostic",
        icon: "ScanSearch",
        title: "Diagnostic du cycle commercial",
        description:
          "Analyse de vos processus existants de vente, d'achat et de gestion des stocks pour identifier les failles, les doublons et les sources de pertes.",
        details: [
          "Cartographie du cycle achats-ventes",
          "Analyse des pertes et écarts de stock",
          "Évaluation des délais de recouvrement",
          "Identification des processus manuels à risque",
        ],
      },
      {
        number: "02",
        id: "conception",
        icon: "ClipboardList",
        title: "Conception des processus",
        description:
          "Formalisation des procédures commerciales\u00a0: circuit de validation des commandes, processus de réception, procédure de facturation et politique de crédit clients.",
        details: [
          "Rédaction des procédures clés",
          "Définition des circuits de validation",
          "Politique de crédit et limites clients",
          "Procédure d'inventaire périodique",
        ],
      },
      {
        number: "03",
        id: "deploiement",
        icon: "Settings",
        title: "Déploiement & Paramétrage",
        description:
          "Mise en place des outils et paramétrage du logiciel de gestion commerciale. Formation des utilisateurs aux nouveaux processus.",
        details: [
          "Paramétrage du logiciel de gestion",
          "Création des fiches articles et clients",
          "Formation des utilisateurs",
          "Phase de rodage accompagnée",
        ],
      },
      {
        number: "04",
        id: "production",
        icon: "FileOutput",
        title: "Production & Reporting",
        description:
          "Production régulière des états de gestion commerciale et des tableaux de bord pour le pilotage de l'activité.",
        details: [
          "États de stock mensuels",
          "Balance âgée des créances et dettes",
          "Reporting commercial mensuel",
          "Rapprochement avec la comptabilité",
        ],
      },
      {
        number: "05",
        id: "optimisation",
        icon: "RefreshCcw",
        title: "Optimisation continue",
        description:
          "Amélioration continue des processus sur la base des indicateurs de performance et des retours terrain.",
        details: [
          "Analyse des KPI commerciaux",
          "Identification des axes d'amélioration",
          "Ajustement des paramètres et seuils",
          "Revue trimestrielle avec la direction",
        ],
      },
    ],
  },

  pourquoi: {
    eyebrow: "Pourquoi CAAF",
    title: "La gestion commerciale vue\npar des experts comptables.",
    description:
      "Confier sa gestion commerciale à un cabinet d'audit garantit la cohérence entre vos opérations commerciales et votre comptabilité — une cohérence que les logiciels seuls ne peuvent assurer.",
    items: [
      {
        icon: "ShieldCheck",
        title: "Cohérence compta-gestion",
        description:
          "Nous garantissons que chaque mouvement commercial est correctement traduit en écriture comptable. Fini les écarts entre le stock physique et le stock comptable.",
      },
      {
        icon: "Globe",
        title: "Conformité fiscale intégrée",
        description:
          "Chaque facture, chaque avoir, chaque mouvement de stock est traité dans le respect des obligations fiscales congolaises\u00a0: TVA, retenues, taxes sectorielles.",
      },
      {
        icon: "UserCheck",
        title: "Interlocuteur unique",
        description:
          "Un chef de mission supervise votre gestion commerciale et votre comptabilité. Cette vision intégrée élimine les incohérences et accélère les clôtures.",
      },
      {
        icon: "Clock",
        title: "Visibilité en temps réel",
        description:
          "Nos reportings vous donnent une vue claire et actualisée de votre activité commerciale\u00a0: CA, marges, stocks, créances et trésorerie.",
      },
      {
        icon: "Zap",
        title: "Adaptabilité",
        description:
          "Que vous gériez 50 ou 5 000 références, notre dispositif s'adapte à votre volumétrie et à la complexité de votre activité commerciale.",
      },
      {
        icon: "BrainCircuit",
        title: "Conseil intégré",
        description:
          "Au-delà de la gestion quotidienne, nous vous conseillons sur l'optimisation de votre BFR, la gestion de vos marges et la politique de crédit clients.",
      },
    ],
  },

  secteurs: {
    eyebrow: "Secteurs servis",
    title: "Chaque activité commerciale\na ses spécificités.",
    description:
      "Distribution, industrie, import-export — nous adaptons nos processus de gestion commerciale aux particularités de votre métier.",
    stripText: "Vos stocks ne correspondent jamais à votre comptabilité ?",
    stripHighlight: "Nous pouvons résoudre ce problème définitivement.",
    stripCta: "En parler",
    items: [
      {
        icon: "Store",
        title: "Commerce & Distribution",
        description: "Gestion de points de vente, multi-références, inventaires fréquents et recouvrement intensif.",
        tags: ["Multi-références", "Inventaire", "Recouvrement"],
        featured: true,
      },
      {
        icon: "Factory",
        title: "Industrie & Production",
        description: "Gestion des matières premières, produits finis, en-cours de production et coûts de revient.",
        tags: ["Matières premières", "En-cours", "Coût de revient"],
        featured: true,
      },
      {
        icon: "Truck",
        title: "Import-Export & Logistique",
        description: "Suivi des importations, dédouanement, gestion des transit et stocks en entrepôt.",
        tags: ["Import", "Transit", "Dédouanement"],
        featured: false,
      },
      {
        icon: "Pickaxe",
        title: "Mines & Sous-traitance",
        description: "Gestion des achats techniques, pièces détachées et consommables miniers.",
        tags: ["Pièces détachées", "Consommables", "Achats techniques"],
        featured: false,
      },
      {
        icon: "Building2",
        title: "BTP & Construction",
        description: "Suivi des approvisionnements chantier, stocks de matériaux et facturation par lot.",
        tags: ["Chantier", "Matériaux", "Lots"],
        featured: false,
      },
      {
        icon: "Landmark",
        title: "Services & Prestations",
        description: "Facturation de services, suivi des contrats et gestion des abonnements.",
        tags: ["Contrats", "Abonnements", "Services"],
        featured: false,
      },
    ],
  },

  cas: {
    eyebrow: "Cas d'intervention",
    title: "Des flux maîtrisés,\ndes marges retrouvées.",
    description:
      "Exemples anonymisés de missions de gestion commerciale illustrant l'impact concret de nos interventions.",
    sectionCta: "Structurer ma gestion commerciale",
    items: [
      {
        id: "distribution",
        sector: "Commerce & Distribution",
        sectorIcon: "Store",
        title: "Restructuration de la gestion commerciale d'un réseau de distribution",
        location: "Lubumbashi, RDC",
        context:
          "Un réseau de distribution alimentaire comptant 8 points de vente constatait des écarts d'inventaire récurrents, une facturation désorganisée et un taux d'impayés clients de 35%. La direction n'avait aucune visibilité sur les marges par produit.",
        approach: [
          "Audit complet du cycle commercial sur les 8 points de vente",
          "Mise en place d'un logiciel de gestion commerciale centralisé",
          "Formalisation des procédures d'inventaire, de facturation et de recouvrement",
          "Formation de 16 utilisateurs et accompagnement pendant 3 mois",
        ],
        results: [
          { icon: "CheckCircle2", label: "Écarts d'inventaire réduits de 85%" },
          { icon: "DollarSign", label: "Taux d'impayés passé de 35% à 8% en 6 mois" },
          { icon: "TrendingUp", label: "Marges par produit identifiées pour la première fois" },
          { icon: "Users", label: "Direction dotée d'un tableau de bord commercial mensuel" },
        ],
        quote:
          "Nous vendions sans savoir ce que nous gagnions. CAAF nous a donné la visibilité dont nous avions besoin pour prendre les bonnes décisions.",
        quoteAuthor: "Directeur Commercial",
      },
      {
        id: "industrie",
        sector: "Industrie",
        sectorIcon: "Factory",
        title: "Mise en place de la gestion des stocks pour une unité de production",
        location: "Kinshasa, RDC",
        context:
          "Une unité de production de matériaux de construction n'avait aucun système de gestion des stocks. Les matières premières étaient commandées au feeling, les ruptures fréquentes et le stock comptable n'existait pas.",
        approach: [
          "Inventaire physique complet et valorisation initiale",
          "Paramétrage d'un module stock dans le logiciel comptable",
          "Mise en place des fiches de stock et des seuils de réapprovisionnement",
          "Formation du magasinier et du comptable à la gestion intégrée",
        ],
        results: [
          { icon: "CheckCircle2", label: "Stock comptable fiable pour la première fois" },
          { icon: "DollarSign", label: "Coûts de rupture réduits de 70%" },
          { icon: "TrendingUp", label: "Rotation des stocks améliorée de 40%" },
          { icon: "AlertTriangle", label: "Détection de coulage représentant 5% de la valeur du stock" },
        ],
        quote:
          "Avant CAAF, notre stock était un trou noir. Aujourd'hui, chaque kilo de ciment est tracé et comptabilisé.",
        quoteAuthor: "Directeur de Production",
      },
    ],
  },

  cta: {
    eyebrow: "Prochaine étape",
    title: "Reprenez le contrôle",
    titleAccent: "de vos flux commerciaux.",
    description:
      "Un diagnostic de votre gestion commerciale permet d'identifier rapidement les sources de pertes et les leviers d'amélioration. Parlons de votre situation.",
    trustPoints: [
      "Diagnostic en une semaine",
      "Recommandations actionnables immédiatement",
      "Accompagnement dans la mise en œuvre",
      "Formation de vos équipes incluse",
    ],
    primaryCta: { label: "Demander un diagnostic", href: "/contact" },
    secondaryCta: { label: "Appeler le cabinet", href: "tel:+243XXXXXXXX" },
    watermarkIcon: "ShoppingCart",
    contactOptions: [
      {
        icon: "Calendar",
        title: "Diagnostic commercial",
        description: "Une semaine pour identifier les failles et les opportunités.",
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
        description: "gestion@caaf-rdc.com — réponse sous 24h ouvrées.",
        href: "mailto:gestion@caaf-rdc.com",
        cta: "Envoyer un email",
        primary: false,
      },
    ],
    stats: [
      { value: "1 sem.", label: "Diagnostic" },
      { value: "Concret", label: "Résultats" },
      { value: "100%", label: "Actionnable" },
    ],
  },
}
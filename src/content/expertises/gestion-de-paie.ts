import type { ExpertisePageConfig } from "./types"

export const gestionDePaieConfig: ExpertisePageConfig = {
  slug: "gestion-de-paie",

  hero: {
    category: "Services Comptables",
    categoryHref: "/expertises#services-comptables",
    title: "Une paie juste et conforme,",
    titleAccent: "chaque mois, sans exception.",
    description:
      "La gestion de la paie en RDC combine des obligations légales complexes — CNSS, INPP, IPR, ONEM — avec des réalités terrain souvent difficiles à maîtriser. Chez CAAF\u00a0SAS, nous sécurisons votre processus de paie de A à Z pour que vos salariés soient payés correctement et vos obligations sociales parfaitement respectées.",
    ctaPrimary: { label: "Découvrir nos services", href: "#missions" },
    ctaSecondary: { label: "Externaliser ma paie", href: "/contact" },
    stats: [
      { value: "CNSS", label: "Cotisations sociales" },
      { value: "IPR", label: "Impôt professionnel" },
      { value: "INPP", label: "Formation professionnelle" },
      { value: "100%", label: "Conformité garantie" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1554224155-3a58f57f47af?q=80&w=1920&auto=format&fit=crop",
    },
  },

  sousServices: {
    eyebrow: "Nos prestations",
    title: "Bien plus qu'un bulletin,",
    titleAccent: "un processus sécurisé de bout en bout.",
    description:
      "Notre offre couvre l'ensemble du cycle de paie\u00a0: calcul, déclarations, conseil social et reporting RH. Chaque étape est contrôlée pour garantir la conformité et la confidentialité.",
    sectionId: "missions",
    headerLabel: "Services de paie",
    items: [
      {
        id: "traitement",
        icon: "Calculator",
        title: "Traitement Mensuel de la Paie",
        subtitle: "Calcul & Bulletins",
        description:
          "Calcul des rémunérations, primes, indemnités, retenues légales et conventionnelles. Production des bulletins de paie individuels et du journal de paie consolidé.",
        deliverables: [
          "Bulletins de paie individuels",
          "Journal de paie mensuel",
          "État récapitulatif des charges sociales",
        ],
      },
      {
        id: "declarations",
        icon: "FileText",
        title: "Déclarations Sociales & Fiscales",
        subtitle: "CNSS, INPP, IPR, ONEM",
        description:
          "Préparation, calcul et dépôt de l'ensemble des déclarations sociales et fiscales liées à la paie\u00a0: cotisations CNSS, contribution INPP, IPR et déclarations ONEM.",
        deliverables: [
          "Déclarations CNSS trimestrielles",
          "Déclarations IPR mensuelles",
          "Contribution INPP annuelle",
        ],
      },
      {
        id: "conseil",
        icon: "ShieldCheck",
        title: "Conseil Social & Juridique",
        subtitle: "Droit du travail congolais",
        description:
          "Assistance sur les questions de droit du travail liées à la paie\u00a0: embauches, licenciements, congés, avantages en nature, indemnités de fin de contrat et conventions collectives.",
        deliverables: [
          "Notes de conseil sur les situations individuelles",
          "Simulation du coût des embauches et départs",
          "Veille sociale et réglementaire",
        ],
      },
      {
        id: "reporting",
        icon: "BarChart3",
        title: "Reporting RH & Masse Salariale",
        subtitle: "Pilotage des coûts",
        description:
          "Production de tableaux de bord RH et d'analyses de la masse salariale pour aider la direction à piloter ses coûts de personnel et à anticiper les évolutions.",
        deliverables: [
          "Tableau de bord de la masse salariale mensuel",
          "Analyse de l'évolution des coûts par catégorie",
          "Projections budgétaires de la masse salariale",
        ],
      },
      {
        id: "audit-paie",
        icon: "ClipboardList",
        title: "Audit de Paie",
        subtitle: "Vérification & Mise en conformité",
        description:
          "Revue complète de votre processus de paie existant pour identifier les erreurs, les non-conformités et les risques de contentieux social ou fiscal.",
        deliverables: [
          "Rapport d'audit de paie détaillé",
          "Liste des anomalies et non-conformités",
          "Plan de mise en conformité priorisé",
        ],
      },
    ],
  },

  approche: {
    eyebrow: "Notre approche",
    title: "La précision du chiffre,",
    titleAccent: "la sensibilité du sujet.",
    description:
      "La paie touche directement les personnes. Notre processus est conçu pour garantir l'exactitude des calculs, le respect des délais et la confidentialité absolue des données individuelles.",
    totalSteps: "05",
    stepLabel: "Étape",
    steps: [
      {
        number: "01",
        id: "cadrage",
        icon: "ScanSearch",
        title: "Cadrage & Paramétrage",
        description:
          "Nous commençons par comprendre votre structure de rémunération, vos conventions collectives et vos spécificités pour paramétrer notre outil de paie à votre image.",
        details: [
          "Collecte de la structure de rémunération",
          "Analyse des conventions collectives applicables",
          "Paramétrage des rubriques de paie",
          "Configuration des cotisations et retenues",
        ],
      },
      {
        number: "02",
        id: "collecte",
        icon: "ClipboardList",
        title: "Collecte des éléments variables",
        description:
          "Chaque mois, nous collectons les éléments variables\u00a0: absences, heures supplémentaires, primes, avances, entrées et sorties de personnel.",
        details: [
          "Fiche de collecte standardisée",
          "Vérification et validation des données",
          "Traitement des cas particuliers",
          "Date limite de transmission définie",
        ],
      },
      {
        number: "03",
        id: "calcul",
        icon: "Settings",
        title: "Calcul & Contrôle",
        description:
          "Calcul de la paie avec double contrôle\u00a0: vérification par un deuxième collaborateur avant la validation finale et la production des bulletins.",
        details: [
          "Calcul automatisé de la paie",
          "Contrôle de cohérence par un superviseur",
          "Comparaison mois N vs N-1",
          "Validation finale par le chef de mission",
        ],
      },
      {
        number: "04",
        id: "livraison",
        icon: "FileOutput",
        title: "Production & Déclarations",
        description:
          "Production des bulletins, du journal de paie et des ordres de virement. Préparation et dépôt des déclarations sociales et fiscales.",
        details: [
          "Émission des bulletins de paie",
          "Génération des fichiers de virement bancaire",
          "Dépôt des déclarations CNSS, IPR, INPP",
          "Archivage sécurisé des dossiers mensuels",
        ],
      },
      {
        number: "05",
        id: "suivi",
        icon: "RefreshCcw",
        title: "Suivi & Veille",
        description:
          "Suivi permanent de la réglementation sociale et fiscale pour anticiper les changements et adapter votre paie en conséquence.",
        details: [
          "Veille sur le barème IPR et les taux CNSS",
          "Alertes sur les changements réglementaires",
          "Révision annuelle du paramétrage",
          "Reporting annuel de la masse salariale",
        ],
      },
    ],
  },

  pourquoi: {
    eyebrow: "Pourquoi CAAF",
    title: "La paie n'est pas\nun sujet qu'on improvise.",
    description:
      "Les erreurs de paie coûtent cher\u00a0: contentieux sociaux, redressements fiscaux, démotivation des salariés. Voici pourquoi confier votre paie à un cabinet reconnu fait la différence.",
    items: [
      {
        icon: "ShieldCheck",
        title: "Double contrôle systématique",
        description:
          "Chaque paie est calculée par un collaborateur et contrôlée par un superviseur avant validation. Zéro bulletin n'est émis sans ce double regard.",
      },
      {
        icon: "Lock",
        title: "Confidentialité renforcée",
        description:
          "Les données de paie sont parmi les plus sensibles de l'entreprise. Nous appliquons des protocoles stricts d'accès, de stockage et de transmission des informations.",
      },
      {
        icon: "Globe",
        title: "Maîtrise du droit social congolais",
        description:
          "Code du travail, conventions collectives, barèmes IPR, taux CNSS — nous maîtrisons l'ensemble du cadre réglementaire applicable en RDC.",
      },
      {
        icon: "UserCheck",
        title: "Gestionnaire de paie dédié",
        description:
          "Un gestionnaire de paie dédié connaît votre entreprise, vos salariés et vos spécificités. Vous avez un point de contact unique, réactif et compétent.",
      },
      {
        icon: "Clock",
        title: "Respect absolu des délais",
        description:
          "Les salariés n'attendent pas. Nous nous engageons sur une date de livraison de la paie et la tenons chaque mois, sans exception.",
      },
      {
        icon: "Zap",
        title: "Scalabilité immédiate",
        description:
          "Que vous ayez 15 ou 500 salariés, notre dispositif s'adapte instantanément. Pas besoin de recruter un gestionnaire de paie supplémentaire quand vous grandissez.",
      },
    ],
  },

  secteurs: {
    eyebrow: "Secteurs servis",
    title: "Chaque secteur a\nses spécificités salariales.",
    description:
      "Conventions collectives, primes sectorielles, régimes d'expatriés — nous adaptons le traitement de la paie aux particularités de votre secteur.",
    stripText: "Votre paie pose des problèmes récurrents ?",
    stripHighlight: "Un audit de paie permet d'identifier et de corriger les anomalies.",
    stripCta: "Demander un audit",
    items: [
      {
        icon: "Pickaxe",
        title: "Mines & Ressources",
        description: "Gestion des paies minières\u00a0: expatriés, rotation, primes de site, logement et transport.",
        tags: ["Expatriés", "Rotation", "Primes site"],
        featured: true,
      },
      {
        icon: "Globe2",
        title: "ONG & Organisations internationales",
        description: "Paie des staffs nationaux et internationaux, barèmes ONU, avantages spécifiques.",
        tags: ["Barèmes ONU", "Per diem", "Staff national"],
        featured: true,
      },
      {
        icon: "Factory",
        title: "Industrie",
        description: "Gestion des paies ouvrières, heures supplémentaires, primes de production et ancienneté.",
        tags: ["Ouvriers", "Heures sup", "Ancienneté"],
        featured: false,
      },
      {
        icon: "Landmark",
        title: "Banque & Finance",
        description: "Paie du secteur financier\u00a0: grilles spécifiques, bonus, avantages en nature.",
        tags: ["Bonus", "Avantages", "Grilles"],
        featured: false,
      },
      {
        icon: "Building2",
        title: "Filiales de groupes",
        description: "Harmonisation de la paie avec les standards groupe et reporting consolidé.",
        tags: ["Standards groupe", "Reporting", "Harmonisation"],
        featured: false,
      },
      {
        icon: "Store",
        title: "Commerce & Services",
        description: "Gestion des paies du commerce\u00a0: commissions, temps partiels, saisonniers.",
        tags: ["Commissions", "Temps partiel", "Saisonniers"],
        featured: false,
      },
    ],
  },

  cas: {
    eyebrow: "Cas d'intervention",
    title: "Des paies corrigées,\ndes salariés rassurés.",
    description:
      "Exemples anonymisés de missions de gestion de paie illustrant notre capacité à sécuriser ce processus critique.",
    sectionCta: "Externaliser ma paie",
    items: [
      {
        id: "minier",
        sector: "Mines & Ressources",
        sectorIcon: "Pickaxe",
        title: "Reprise de la paie d'un site minier de 280 salariés",
        location: "Kolwezi, Katanga, RDC",
        context:
          "Un site minier traitant la paie en interne accumulait des erreurs de calcul IPR et des retards de déclaration CNSS depuis 18 mois. Plusieurs salariés avaient déposé des plaintes auprès de l'inspection du travail.",
        approach: [
          "Audit complet de la paie sur 18 mois\u00a0: identification de 340 erreurs",
          "Régularisation des déclarations CNSS et IPR en retard",
          "Reprise complète du processus de paie par CAAF",
          "Formation du responsable RH au suivi de la paie externalisée",
        ],
        results: [
          { icon: "CheckCircle2", label: "Zéro erreur de paie depuis la reprise (24 mois)" },
          { icon: "TrendingUp", label: "Plaintes à l'inspection du travail retirées" },
          { icon: "AlertTriangle", label: "Pénalités CNSS négociées et réduites de 60%" },
          { icon: "Users", label: "Satisfaction des salariés mesurée à 94%" },
        ],
        quote:
          "Depuis que CAAF gère notre paie, nous n'avons plus un seul problème. Les salariés sont payés juste et à temps. La paix sociale est revenue.",
        quoteAuthor: "Directeur des Ressources Humaines",
      },
      {
        id: "ong",
        sector: "ONG internationale",
        sectorIcon: "Globe2",
        title: "Mise en conformité de la paie d'un bureau pays multi-projets",
        location: "Kinshasa, RDC",
        context:
          "Une ONG internationale gérant 120 salariés répartis sur 4 projets constatait des incohérences entre les barèmes appliqués et les conventions collectives. Le bailleur principal exigeait un audit de paie avant le renouvellement du financement.",
        approach: [
          "Audit de paie sur 2 exercices couvrant les 120 salariés",
          "Recalcul de l'ensemble des IPR et cotisations CNSS",
          "Harmonisation des barèmes avec la convention collective applicable",
          "Mise en place d'un reporting mensuel de masse salariale par projet",
        ],
        results: [
          { icon: "CheckCircle2", label: "Financement renouvelé après validation de l'audit" },
          { icon: "TrendingUp", label: "Barèmes harmonisés pour les 120 salariés" },
          { icon: "AlertTriangle", label: "Trop-perçus identifiés et régularisés" },
          { icon: "Users", label: "Reporting masse salariale par projet désormais mensuel" },
        ],
        quote:
          "L'audit de paie CAAF nous a permis de démontrer au bailleur que nos coûts de personnel étaient conformes et justifiés.",
        quoteAuthor: "Directeur Administratif et Financier",
      },
    ],
  },

  cta: {
    eyebrow: "Prochaine étape",
    title: "Libérez-vous du stress",
    titleAccent: "de la paie mensuelle.",
    description:
      "Confiez votre paie à des professionnels qui en font leur métier. Vos salariés méritent une paie juste, vos obligations méritent d'être respectées.",
    trustPoints: [
      "Premier mois de paie offert pour test",
      "Aucun engagement longue durée requis",
      "Confidentialité absolue garantie",
      "Interlocuteur dédié dès le premier jour",
    ],
    primaryCta: { label: "Demander un devis", href: "/contact" },
    secondaryCta: { label: "Appeler le cabinet", href: "tel:+243XXXXXXXX" },
    watermarkIcon: "Users",
    contactOptions: [
      {
        icon: "Calendar",
        title: "Mois test gratuit",
        description: "Testez notre service de paie pendant un mois, sans engagement.",
        href: "/contact",
        cta: "Démarrer le test",
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
        description: "paie@caaf-rdc.com — réponse sous 24h ouvrées.",
        href: "mailto:paie@caaf-rdc.com",
        cta: "Envoyer un email",
        primary: false,
      },
    ],
    stats: [
      { value: "1 mois", label: "Test gratuit" },
      { value: "0 erreur", label: "Notre objectif" },
      { value: "100%", label: "Confidentiel" },
    ],
  },
}

import type { ExpertisePageConfig } from "./types"

export const auditInformatiqueConfig: ExpertisePageConfig = {
  slug: "audit-informatique",

  hero: {
    category: "Risk Assurance Services",
    categoryHref: "/expertises#risk-assurance",
    title: "Sécuriser vos systèmes,",
    titleAccent: "fiabiliser vos données.",
    description:
      "Vos systèmes d'information sont le cœur battant de votre organisation. L'audit informatique évalue leur sécurité, leur fiabilité et leur conformité pour garantir l'intégrité de vos données, la continuité de vos opérations et la protection de vos actifs numériques.",
    ctaPrimary: { label: "Découvrir nos audits IT", href: "#missions" },
    ctaSecondary: { label: "Auditer mes systèmes", href: "/contact" },
    stats: [
      { value: "COBIT", label: "Cadre de gouvernance IT" },
      { value: "ISO 27001", label: "Sécurité de l'information" },
      { value: "ITIL", label: "Gestion des services" },
      { value: "RGPD", label: "Protection des données" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1920&auto=format&fit=crop",
    },
  },

  sousServices: {
    eyebrow: "Nos missions",
    title: "Chaque couche de votre SI",
    titleAccent: "mérite une attention spécifique.",
    description:
      "L'audit informatique couvre la sécurité, la gouvernance, les applications, les infrastructures et la conformité réglementaire de vos systèmes d'information.",
    sectionId: "missions",
    headerLabel: "Domaines d'audit",
    items: [
      {
        id: "securite",
        icon: "ShieldCheck",
        title: "Audit de Sécurité",
        subtitle: "Cybersécurité & Protection",
        description:
          "Évaluation des vulnérabilités de vos systèmes, de vos réseaux et de vos applications face aux menaces internes et externes. Tests d'intrusion, revue des accès et analyse de la politique de sécurité.",
        deliverables: [
          "Rapport de vulnérabilités avec cotation de criticité",
          "Résultats des tests d'intrusion",
          "Plan de remédiation sécurité priorisé",
        ],
      },
      {
        id: "gouvernance",
        icon: "Monitor",
        title: "Audit de Gouvernance IT",
        subtitle: "Alignement stratégique",
        description:
          "Évaluation de l'alignement de votre IT avec la stratégie d'entreprise, de la qualité de la gouvernance SI et de la maturité de vos processus IT selon le cadre COBIT.",
        deliverables: [
          "Score de maturité COBIT par domaine",
          "Analyse de l'alignement IT / Business",
          "Recommandations de gouvernance",
        ],
      },
      {
        id: "applications",
        icon: "Code",
        title: "Audit des Applications",
        subtitle: "ERP, CRM, métier",
        description:
          "Revue des contrôles applicatifs de vos logiciels métiers — ERP, comptabilité, paie, gestion commerciale — pour vérifier l'intégrité des traitements et la fiabilité des données produites.",
        deliverables: [
          "Rapport de revue des contrôles applicatifs",
          "Analyse des séparations de fonctions dans le SI",
          "Test de l'intégrité des interfaces entre applications",
        ],
      },
      {
        id: "infrastructure",
        icon: "Server",
        title: "Audit d'Infrastructure",
        subtitle: "Réseaux, serveurs, cloud",
        description:
          "Évaluation de la robustesse de votre infrastructure technique\u00a0: serveurs, réseaux, sauvegardes, plan de reprise, gestion des accès physiques et logiques.",
        deliverables: [
          "Cartographie de l'infrastructure et des flux",
          "Analyse de la politique de sauvegarde et PRA",
          "Revue des accès physiques et logiques",
        ],
      },
      {
        id: "donnees",
        icon: "Database",
        title: "Audit des Données",
        subtitle: "Qualité & Conformité",
        description:
          "Évaluation de la qualité, de l'intégrité et de la protection de vos données\u00a0: doublons, incohérences, politique de rétention, conformité aux réglementations sur la protection des données personnelles.",
        deliverables: [
          "Rapport de qualité des données",
          "Analyse de conformité sur la protection des données",
          "Recommandations de data governance",
        ],
      },
    ],
  },

  approche: {
    eyebrow: "Méthodologie",
    title: "Une approche structurée,",
    titleAccent: "adaptée à votre maturité IT.",
    description:
      "Notre méthodologie d'audit informatique combine les standards internationaux (COBIT, ISO 27001, ITIL) avec une compréhension pragmatique des réalités IT en RDC.",
    totalSteps: "05",
    stepLabel: "Phase",
    steps: [
      {
        number: "01",
        id: "cadrage",
        icon: "ScanSearch",
        title: "Cadrage & Cartographie",
        description:
          "Identification du périmètre, cartographie de l'existant et compréhension de votre écosystème IT\u00a0: applications, infrastructure, organisation, prestataires.",
        details: [
          "Inventaire des actifs informatiques",
          "Cartographie des applications et des flux de données",
          "Entretiens avec la DSI et les utilisateurs clés",
          "Identification des zones de risque IT prioritaires",
        ],
      },
      {
        number: "02",
        id: "evaluation",
        icon: "ClipboardList",
        title: "Évaluation des contrôles IT",
        description:
          "Revue de la conception et de l'effectivité des contrôles informatiques généraux (ITGC) et des contrôles applicatifs sur les processus critiques.",
        details: [
          "Revue des ITGC (accès, changements, opérations, sauvegarde)",
          "Test des contrôles applicatifs par processus métier",
          "Évaluation de la séparation des fonctions dans le SI",
          "Revue de la gestion des incidents et des problèmes",
        ],
      },
      {
        number: "03",
        id: "tests",
        icon: "SearchCheck",
        title: "Tests techniques",
        description:
          "Réalisation de tests techniques approfondis\u00a0: scans de vulnérabilités, tests d'intrusion, revue de configuration, analyse des logs.",
        details: [
          "Scan de vulnérabilités réseau et applicatif",
          "Tests d'intrusion internes et externes",
          "Revue de la configuration des équipements critiques",
          "Analyse des journaux d'événements (logs)",
        ],
      },
      {
        number: "04",
        id: "restitution",
        icon: "FileOutput",
        title: "Restitution & Recommandations",
        description:
          "Présentation des résultats avec une cotation claire des vulnérabilités et un plan de remédiation priorisé par niveau de risque et effort de mise en œuvre.",
        details: [
          "Rapport d'audit IT détaillé",
          "Matrice des vulnérabilités (criticité × effort)",
          "Plan de remédiation chiffré et chronologisé",
          "Présentation à la direction et à la DSI",
        ],
      },
      {
        number: "05",
        id: "suivi",
        icon: "RefreshCcw",
        title: "Suivi de la remédiation",
        description:
          "Accompagnement dans la mise en œuvre des corrections et vérification de l'efficacité des mesures prises. Re-test des vulnérabilités critiques.",
        details: [
          "Points d'avancement réguliers avec la DSI",
          "Re-test des vulnérabilités corrigées",
          "Validation de la clôture des recommandations",
          "Préparation de l'audit de suivi annuel",
        ],
      },
    ],
  },

  pourquoi: {
    eyebrow: "Pourquoi CAAF",
    title: "L'audit IT par des auditeurs\nqui comprennent le business.",
    description:
      "Nos auditeurs informatiques ne sont pas des techniciens déconnectés du business. Ils comprennent les enjeux financiers, réglementaires et opérationnels qui sous-tendent chaque système d'information.",
    items: [
      {
        icon: "ShieldCheck",
        title: "Double compétence Audit & IT",
        description:
          "Nos équipes combinent l'expertise technique en cybersécurité et en infrastructure avec la rigueur méthodologique de l'audit financier. Un avantage unique pour un diagnostic complet.",
      },
      {
        icon: "Globe",
        title: "Réalités IT congolaises intégrées",
        description:
          "Connectivité limitée, dépendance aux prestataires, parc hétérogène — nous connaissons les contraintes IT spécifiques à la RDC et adaptons nos recommandations en conséquence.",
      },
      {
        icon: "UserCheck",
        title: "Interlocuteur senior dédié",
        description:
          "Un associé supervise chaque mission IT. Vous avez un point de contact unique qui comprend à la fois la technique et les enjeux de gouvernance.",
      },
      {
        icon: "Lock",
        title: "Confidentialité renforcée",
        description:
          "Les audits IT touchent aux données les plus sensibles de votre organisation. Nous appliquons des protocoles de confidentialité renforcés sur chaque mission.",
      },
      {
        icon: "Cpu",
        title: "Outils professionnels",
        description:
          "Nous utilisons des outils de scan, d'analyse et de test reconnus par la profession pour garantir la fiabilité et la reproductibilité de nos résultats.",
      },
      {
        icon: "BrainCircuit",
        title: "Vision intégrée GRC",
        description:
          "L'audit IT s'inscrit dans notre approche globale Gouvernance, Risques et Conformité (GRC). Vos résultats IT alimentent la cartographie des risques d'entreprise.",
      },
    ],
  },

  secteurs: {
    eyebrow: "Secteurs concernés",
    title: "La sécurité IT n'est pas\nune option sectorielle.",
    description:
      "Tous les secteurs dépendent aujourd'hui de leurs systèmes d'information. Les enjeux varient mais l'exigence de fiabilité et de sécurité est universelle.",
    stripText: "Vos systèmes sont-ils vraiment sécurisés ?",
    stripHighlight: "Un audit IT permet de le vérifier concrètement.",
    stripCta: "Demander un audit",
    items: [
      {
        icon: "Landmark",
        title: "Banque & Finance",
        description:
          "Audit des systèmes bancaires, monétique, banque en ligne et conformité aux exigences IT de la BCC.",
        tags: ["Core Banking", "Monétique", "BCC"],
        featured: true,
      },
      {
        icon: "Pickaxe",
        title: "Mines & Ressources",
        description:
          "Audit des systèmes de gestion minière, ERP, SCADA et infrastructure réseau sur sites isolés.",
        tags: ["ERP", "SCADA", "Sites isolés"],
        featured: true,
      },
      {
        icon: "Factory",
        title: "Industrie",
        description: "Audit des systèmes de production, MES, gestion des stocks et automates industriels.",
        tags: ["MES", "Automates", "ERP"],
        featured: false,
      },
      {
        icon: "Building2",
        title: "Groupes & Holdings",
        description: "Harmonisation IT inter-filiales, audit de consolidation et cybersécurité groupe.",
        tags: ["Multi-sites", "Consolidation", "Cyber"],
        featured: false,
      },
      {
        icon: "Globe2",
        title: "ONG & Organisations internationales",
        description: "Audit de la sécurité des données sensibles et conformité aux standards bailleurs.",
        tags: ["Données sensibles", "Conformité", "Cloud"],
        featured: false,
      },
      {
        icon: "Truck",
        title: "Transport & Logistique",
        description: "Audit des systèmes de tracking, de gestion de flotte et de logistique intégrée.",
        tags: ["GPS", "Fleet", "Logistique"],
        featured: false,
      },
    ],
  },

  cas: {
    eyebrow: "Cas d'intervention",
    title: "Des vulnérabilités détectées,\ndes systèmes renforcés.",
    description:
      "Exemples anonymisés de missions d'audit informatique illustrant la diversité de nos interventions et l'impact concret de nos recommandations.",
    sectionCta: "Auditer mes systèmes",
    items: [
      {
        id: "banque",
        sector: "Banque & Finance",
        sectorIcon: "Landmark",
        title: "Audit de sécurité du système bancaire core et de la monétique",
        location: "Kinshasa, RDC",
        context:
          "Une banque commerciale ayant déployé un nouveau core banking system souhaitait s'assurer de la robustesse de la sécurité de ses systèmes avant le lancement de son service de banque en ligne. La BCC exigeait un rapport d'audit IT préalable.",
        approach: [
          "Scan de vulnérabilités sur l'ensemble de l'infrastructure réseau",
          "Tests d'intrusion sur le core banking et le portail web",
          "Revue des droits d'accès et de la séparation des fonctions",
          "Audit de la politique de sauvegarde et du PRA",
        ],
        results: [
          { icon: "AlertTriangle", label: "14 vulnérabilités critiques détectées et corrigées" },
          { icon: "CheckCircle2", label: "Rapport IT validé par la BCC pour le lancement" },
          { icon: "TrendingUp", label: "Politique de sécurité IT entièrement refondue" },
          { icon: "Users", label: "Formation de l'équipe IT aux bonnes pratiques sécurité" },
        ],
        quote:
          "Sans l'audit CAAF, nous aurions lancé notre banque en ligne avec des failles que nous ignorions. C'est un investissement qui nous a probablement évité un incident majeur.",
        quoteAuthor: "Directeur des Systèmes d'Information",
      },
      {
        id: "minier",
        sector: "Mines & Ressources",
        sectorIcon: "Pickaxe",
        title: "Audit IT d'un groupe minier multi-sites",
        location: "Katanga, RDC",
        context:
          "Un groupe minier opérant trois sites de production reliés par un réseau VSAT souhaitait évaluer la fiabilité de son infrastructure IT, la sécurité de ses données et la qualité des contrôles applicatifs de son ERP minier.",
        approach: [
          "Audit physique des salles serveurs et de l'infrastructure réseau sur chaque site",
          "Revue des contrôles applicatifs de l'ERP (achats, stocks, production, comptabilité)",
          "Test de la politique de sauvegarde et simulation de reprise",
          "Évaluation de la dépendance aux prestataires IT",
        ],
        results: [
          { icon: "AlertTriangle", label: "Politique de sauvegarde défaillante corrigée" },
          { icon: "CheckCircle2", label: "Séparation des fonctions rétablie dans l'ERP" },
          { icon: "TrendingUp", label: "Contrats prestataires renégociés avec SLA" },
          { icon: "Users", label: "Responsable IT formé sur chaque site" },
        ],
        quote:
          "L'audit a révélé que notre sauvegarde n'avait jamais été testée. Si nous avions perdu nos données, c'était la catastrophe. Merci CAAF.",
        quoteAuthor: "CFO du Groupe",
      },
    ],
  },

  cta: {
    eyebrow: "Prêt à agir ?",
    title: "Vos systèmes méritent",
    titleAccent: "un regard expert et indépendant.",
    description:
      "Un audit IT ne coûte pas cher comparé au coût d'un incident de sécurité ou d'une perte de données. Parlons de vos systèmes et de vos priorités.",
    trustPoints: [
      "Diagnostic initial en 48h",
      "Tests non intrusifs possibles",
      "Confidentialité renforcée",
      "Recommandations priorisées par risque",
    ],
    primaryCta: { label: "Demander un audit IT", href: "/contact" },
    secondaryCta: { label: "Appeler le cabinet", href: "tel:+243XXXXXXXX" },
    watermarkIcon: "Server",
    contactOptions: [
      {
        icon: "Calendar",
        title: "Planifier un audit",
        description: "Définissons ensemble le périmètre et le calendrier.",
        href: "/contact",
        cta: "Réserver un créneau",
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
        description: "it@caaf-rdc.com — réponse sous 24h ouvrées.",
        href: "mailto:it@caaf-rdc.com",
        cta: "Envoyer un email",
        primary: false,
      },
    ],
    stats: [
      { value: "48h", label: "Diagnostic initial" },
      { value: "COBIT", label: "Référentiel" },
      { value: "100%", label: "Confidentiel" },
    ],
  },
}
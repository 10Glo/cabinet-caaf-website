import type { ExpertisePageConfig } from "./types"

export const commissariatAuxComptesConfig: ExpertisePageConfig = {
  slug: "commissariat-aux-comptes",

  // ─── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    category: "Audit & Assurance",
    categoryHref: "/expertises#audit-assurance",
    title: "Protéger votre gouvernance,",
    titleAccent: "sécuriser vos obligations légales.",
    description:
      "Le commissariat aux comptes est une mission légale permanente, imposée par l'Acte Uniforme OHADA. Au-delà de la certification, il protège vos dirigeants, rassure vos actionnaires et garantit la fiabilité de votre information financière sur la durée de notre mandat. Chez CAAF\u00a0SAS, nous en faisons un véritable levier de gouvernance.",
    ctaPrimary: { label: "Découvrir nos missions", href: "#missions" },
    ctaSecondary: { label: "Nommer un commissaire", href: "/contact" },
    stats: [
      { value: "6 ans", label: "Durée du mandat OHADA" },
      { value: "OHADA", label: "Référentiel comptable" },
      { value: "ISA", label: "Normes d'audit appliquées" },
      { value: "100%", label: "Indépendance garantie" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop",
    },
  },

  // ─── Sous-services ────────────────────────────────────────────────────────
  sousServices: {
    eyebrow: "Missions légales",
    title: "Un mandat complet,",
    titleAccent: "bien au-delà de la certification.",
    description:
      "Le commissaire aux comptes exerce cinq missions distinctes définies par l'Acte Uniforme OHADA. Chacune répond à un objectif spécifique de protection, de transparence et de prévention.",
    sectionId: "missions",
    headerLabel: "Les 5 missions du CAC",
    items: [
      {
        id: "certification",
        icon: "FileCheck",
        title: "Certification des comptes annuels",
        subtitle: "Mission principale",
        description:
          "Vérification et certification que les états financiers annuels sont réguliers, sincères et donnent une image fidèle du patrimoine, de la situation financière et du résultat de la société — conformément au référentiel OHADA.",
        deliverables: [
          "Rapport général du commissaire aux comptes",
          "Opinion sur les comptes annuels",
          "Observations éventuelles sur la régularité",
        ],
      },
      {
        id: "conventions",
        icon: "Handshake",
        title: "Rapport spécial sur les conventions",
        subtitle: "Conventions réglementées",
        description:
          "Examen et rapport sur les conventions conclues entre la société et ses dirigeants, administrateurs ou actionnaires significatifs. Une obligation légale visant à prévenir les conflits d'intérêts et protéger les minoritaires.",
        deliverables: [
          "Rapport spécial sur les conventions réglementées",
          "Liste des conventions autorisées",
          "Analyse des conventions non autorisées",
        ],
      },
      {
        id: "alerte",
        icon: "AlertTriangle",
        title: "Procédure d'alerte",
        subtitle: "Prévention des difficultés",
        description:
          "Déclenchement de la procédure d'alerte lorsque le commissaire identifie des faits de nature à compromettre la continuité de l'exploitation. Un rôle de vigie qui protège l'entreprise, ses salariés et ses créanciers.",
        deliverables: [
          "Lettre d'alerte à la direction",
          "Rapport au conseil d'administration",
          "Saisine éventuelle du tribunal de commerce",
        ],
      },
      {
        id: "infractions",
        icon: "FileWarning",
        title: "Révélation des faits délictueux",
        subtitle: "Obligation légale",
        description:
          "Obligation légale de porter à la connaissance du procureur de la République les faits délictueux découverts au cours de la mission — détournements, faux, abus de biens sociaux — indépendamment de leur montant.",
        deliverables: [
          "Signalement au procureur de la République",
          "Documentation des faits constatés",
          "Communication au conseil d'administration",
        ],
      },
      {
        id: "verifications",
        icon: "ScrollText",
        title: "Vérifications spécifiques",
        subtitle: "Contrôles complémentaires",
        description:
          "Ensemble de vérifications imposées par la loi\u00a0: sincérité du rapport de gestion, respect de l'égalité entre actionnaires, régularité des conventions courantes, exactitude des informations données en assemblée.",
        deliverables: [
          "Rapport sur le rapport de gestion",
          "Vérification de la concordance des informations",
          "Contrôle de l'égalité entre actionnaires",
        ],
      },
    ],
  },

  // ─── Approche ─────────────────────────────────────────────────────────────
  approche: {
    eyebrow: "Notre approche",
    title: "Un mandat structuré,",
    titleAccent: "une présence continue.",
    description:
      "Le commissariat aux comptes s'inscrit dans la durée. Notre approche en six phases couvre l'intégralité du mandat, de l'acceptation initiale au suivi permanent, avec une rigueur constante et un interlocuteur associé dédié.",
    totalSteps: "06",
    stepLabel: "Étape",
    steps: [
      {
        number: "01",
        id: "acceptation",
        icon: "Handshake",
        title: "Acceptation du mandat",
        description:
          "Avant toute nomination, nous évaluons notre capacité à accepter la mission\u00a0: indépendance, compétences sectorielles, absence de conflits d'intérêts. Cette étape garantit l'intégrité du mandat dès son origine.",
        details: [
          "Vérification de l'indépendance et des incompatibilités",
          "Évaluation des risques liés à l'entité",
          "Lettre d'acceptation formelle du mandat",
          "Désignation de l'associé responsable",
        ],
      },
      {
        number: "02",
        id: "connaissance",
        icon: "ScanSearch",
        title: "Prise de connaissance approfondie",
        description:
          "Nous analysons votre environnement, votre organisation, vos systèmes d'information et votre dispositif de contrôle interne pour identifier les zones de risques significatifs qui orienteront nos travaux.",
        details: [
          "Cartographie des processus clés et des flux financiers",
          "Entretiens avec la direction et les responsables opérationnels",
          "Analyse du contrôle interne et de l'environnement IT",
          "Identification des risques d'anomalies significatives",
        ],
      },
      {
        number: "03",
        id: "planification",
        icon: "ClipboardList",
        title: "Planification de la mission",
        description:
          "Sur la base des risques identifiés, nous élaborons un plan de mission pluriannuel et un programme de travail annuel détaillé, calibrés pour couvrir l'ensemble des cycles significatifs.",
        details: [
          "Plan de mission sur la durée du mandat",
          "Programme de travail annuel détaillé",
          "Détermination des seuils de signification",
          "Coordination avec l'audit interne le cas échéant",
        ],
      },
      {
        number: "04",
        id: "controles",
        icon: "SearchCheck",
        title: "Exécution des contrôles",
        description:
          "Nos équipes déploient les procédures prévues\u00a0: contrôles intérimaires en cours d'exercice, puis travaux de fin d'exercice sur les comptes arrêtés. Chaque constat est documenté et chaque anomalie traitée.",
        details: [
          "Contrôles intérimaires sur les processus et cycles clés",
          "Travaux de clôture sur les comptes annuels",
          "Circularisation des tiers et confirmations externes",
          "Supervision permanente par l'associé signataire",
        ],
      },
      {
        number: "05",
        id: "rapport",
        icon: "FileOutput",
        title: "Rapports & Assemblée Générale",
        description:
          "Nous émettons nos rapports — général et spécial — et les présentons en Assemblée Générale. Nos recommandations sont formulées pour renforcer concrètement votre gouvernance financière.",
        details: [
          "Émission du rapport général sur les comptes",
          "Rapport spécial sur les conventions réglementées",
          "Présentation en Assemblée Générale",
          "Lettre de recommandations à la direction",
        ],
      },
      {
        number: "06",
        id: "suivi",
        icon: "RefreshCcw",
        title: "Suivi permanent du mandat",
        description:
          "Tout au long de l'exercice et du mandat de six ans, nous restons votre interlocuteur de confiance\u00a0: suivi des recommandations, veille réglementaire, conseil sur les évolutions comptables.",
        details: [
          "Suivi de la mise en œuvre des recommandations",
          "Veille réglementaire OHADA et fiscale",
          "Disponibilité continue entre les campagnes",
          "Actualisation annuelle de l'évaluation des risques",
        ],
      },
    ],
  },

  // ─── Pourquoi CAAF ────────────────────────────────────────────────────────
  pourquoi: {
    eyebrow: "Pourquoi CAAF",
    title: "Le choix d'un commissaire\nest un acte de gouvernance.",
    description:
      "Nommer un commissaire aux comptes, c'est confier la certification de vos comptes à un professionnel pour six exercices. Voici pourquoi les entreprises congolaises et internationales nous font confiance.",
    items: [
      {
        icon: "Scale",
        title: "Maîtrise du cadre OHADA",
        description:
          "Notre connaissance approfondie de l'Acte Uniforme relatif au droit des sociétés et du droit comptable OHADA garantit une mission parfaitement conforme aux exigences légales applicables en RDC.",
      },
      {
        icon: "UserCheck",
        title: "Un associé signataire impliqué",
        description:
          "L'associé qui signe vos rapports est celui qui supervise vos travaux. Pas de délégation opaque — un engagement personnel sur la qualité et la pertinence de chaque intervention.",
      },
      {
        icon: "ShieldCheck",
        title: "Indépendance structurelle",
        description:
          "Cabinet indépendant, nous ne sommes soumis à aucune pression de réseau. Nos opinions sont dictées par nos constats, jamais par des considérations commerciales.",
      },
      {
        icon: "Building2",
        title: "Expérience multi-sectorielle",
        description:
          "Mines, banque, industrie, ONG — notre portefeuille de mandats couvre les secteurs les plus exigeants de l'économie congolaise, avec les spécificités comptables de chacun.",
      },
      {
        icon: "Clock",
        title: "Continuité sur le mandat",
        description:
          "Un mandat de six ans exige de la constance. Nos équipes sont stables, nos méthodes documentées et notre connaissance de votre entité s'approfondit chaque année.",
      },
      {
        icon: "BookOpen",
        title: "Valeur ajoutée au-delà de l'opinion",
        description:
          "Nos recommandations ne sont pas des observations de forme. Elles visent des améliorations concrètes de vos processus, de votre contrôle interne et de votre gouvernance.",
      },
    ],
  },

  // ─── Secteurs ─────────────────────────────────────────────────────────────
  secteurs: {
    eyebrow: "Secteurs d'intervention",
    title: "Des mandats dans les secteurs\nles plus structurants du pays.",
    description:
      "Chaque secteur a ses spécificités comptables, réglementaires et opérationnelles. Notre expérience multi-sectorielle nous permet d'adapter nos procédures d'audit au contexte réel de chaque mandat.",
    stripText: "Votre secteur n'apparaît pas ?",
    stripHighlight: "Nous acceptons des mandats dans tous les secteurs d'activité.",
    stripCta: "Nous contacter",
    items: [
      {
        icon: "Pickaxe",
        title: "Mines & Ressources naturelles",
        description:
          "Mandats de commissariat pour des groupes miniers, sociétés d'exploration et sous-traitants du secteur extractif — avec reporting dual OHADA et IFRS.",
        tags: ["Katanga", "ITIE", "Reporting groupe"],
        featured: true,
      },
      {
        icon: "Landmark",
        title: "Banque & Services financiers",
        description:
          "Mandats auprès d'établissements bancaires, institutions de microfinance et compagnies d'assurance — en conformité avec les exigences prudentielles de la BCC.",
        tags: ["BCC", "Prudentiel", "Microfinance"],
        featured: true,
      },
      {
        icon: "Factory",
        title: "Industrie & Production",
        description:
          "Commissariat pour les entreprises manufacturières, agroalimentaires et de BTP opérant en RDC.",
        tags: ["Manufacturing", "Agroalimentaire", "BTP"],
        featured: false,
      },
      {
        icon: "Globe2",
        title: "Organisations internationales",
        description:
          "Mandats de certification pour les bureaux pays d'organisations internationales et ONG présentes en RDC.",
        tags: ["ONU", "Banque Mondiale", "ONG"],
        featured: false,
      },
      {
        icon: "Building2",
        title: "Groupes & Holdings",
        description:
          "Commissariat aux comptes consolidés et statutaires pour les structures multi-entités et holdings.",
        tags: ["Consolidation", "Multi-entités", "OHADA"],
        featured: false,
      },
      {
        icon: "HeartPulse",
        title: "Santé & Secteur social",
        description:
          "Certification des comptes d'hôpitaux, mutuelles et programmes sociaux avec traçabilité des financements.",
        tags: ["Hôpitaux", "Mutuelles", "Fonds sociaux"],
        featured: false,
      },
      {
        icon: "Leaf",
        title: "Environnement & ESG",
        description:
          "Commissariat pour les entités portant des programmes environnementaux, fonds climat et initiatives durables.",
        tags: ["ESG", "Fonds climat", "REDD+"],
        featured: false,
      },
      {
        icon: "GraduationCap",
        title: "Éducation & Recherche",
        description:
          "Mandats pour les universités, centres de recherche et établissements d'enseignement supérieur.",
        tags: ["Universités", "Recherche", "Bailleurs"],
        featured: false,
      },
    ],
  },

  // ─── Cas d'intervention ───────────────────────────────────────────────────
  cas: {
    eyebrow: "Cas d'intervention",
    title: "Des mandats exigeants,\nmenés avec rigueur.",
    description:
      "Voici quelques exemples anonymisés de mandats de commissariat aux comptes illustrant la diversité de nos interventions et la valeur ajoutée que nous apportons à nos clients.",
    sectionCta: "Discutons de votre mandat",
    items: [
      {
        id: "holding",
        sector: "Groupes & Holdings",
        sectorIcon: "Building2",
        title: "Mandat de commissariat pour un holding multi-filiales",
        location: "Lubumbashi & Kinshasa, RDC",
        context:
          "Un holding congolais regroupant cinq filiales dans les secteurs du transport, de l'immobilier et de la distribution cherchait un commissaire aux comptes capable de certifier les comptes statutaires de chaque entité et les comptes consolidés du groupe — dans un contexte de structuration récente et de processus comptables hétérogènes.",
        approach: [
          "Diagnostic initial de l'organisation comptable de chaque filiale",
          "Plan de mission pluriannuel couvrant les cinq entités",
          "Harmonisation des calendriers de clôture inter-filiales",
          "Supervision centralisée par un associé unique pour le groupe",
        ],
        results: [
          { icon: "CheckCircle2", label: "5 rapports statutaires émis sans réserve" },
          { icon: "TrendingUp", label: "Consolidation OHADA mise en place avec succès" },
          { icon: "Clock", label: "Clôture avancée de 3 semaines dès le 2e exercice" },
          { icon: "Users", label: "Mandat renouvelé pour un second cycle de 6 ans" },
        ],
        quote:
          "CAAF a apporté la structure et la rigueur dont notre groupe avait besoin pour franchir un cap de gouvernance.",
        quoteAuthor: "Directeur Général du Holding",
      },
      {
        id: "banque",
        sector: "Banque & Finance",
        sectorIcon: "Landmark",
        title: "Commissariat aux comptes d'une institution de microfinance",
        location: "Kinshasa, RDC",
        context:
          "Une institution de microfinance en forte croissance, supervisée par la Banque Centrale du Congo, devait nommer un commissaire aux comptes répondant aux exigences prudentielles tout en accompagnant la montée en charge de ses opérations — passant de 15 000 à 80 000 clients en quatre ans.",
        approach: [
          "Évaluation approfondie du portefeuille de crédits et du provisionnement",
          "Revue du dispositif anti-blanchiment et de conformité réglementaire",
          "Audit des systèmes d'information bancaire et de la sécurité IT",
          "Rapports spécifiques au format exigé par la BCC",
        ],
        results: [
          { icon: "CheckCircle2", label: "Certification conforme aux attentes BCC chaque année" },
          { icon: "TrendingUp", label: "Politique de provisionnement restructurée" },
          { icon: "Clock", label: "Rapports réglementaires livrés systématiquement dans les délais" },
          { icon: "Users", label: "Accompagnement reconnu par les investisseurs étrangers" },
        ],
        quote:
          "Leur rigueur et leur compréhension du secteur financier ont été déterminantes dans notre développement.",
        quoteAuthor: "Administrateur Délégué",
      },
      {
        id: "minier",
        sector: "Mines & Ressources",
        sectorIcon: "Pickaxe",
        title: "Mandat CAC pour une société minière à capitaux étrangers",
        location: "Kolwezi, Katanga, RDC",
        context:
          "Une société minière détenue par un groupe australien devait nommer un commissaire aux comptes local répondant simultanément aux exigences de l'OHADA et aux attentes de reporting IFRS du groupe — avec des délais de clôture très courts imposés par la maison-mère.",
        approach: [
          "Double programme de travail OHADA et IFRS intégré",
          "Équipe dédiée basée à Kolwezi pendant les campagnes d'audit",
          "Coordination directe avec les auditeurs du groupe en Australie",
          "Reporting en anglais pour la maison-mère, en français pour le statutaire",
        ],
        results: [
          { icon: "CheckCircle2", label: "Opinion sans réserve sur les deux référentiels" },
          { icon: "Clock", label: "Délais groupe respectés malgré le décalage horaire" },
          { icon: "TrendingUp", label: "8 recommandations opérationnelles adoptées" },
          { icon: "Users", label: "Confiance établie avec les auditeurs groupe" },
        ],
        quote:
          "Avoir un CAC qui maîtrise l'OHADA et l'IFRS, sur le terrain, en anglais — c'est exactement ce qu'il nous fallait.",
        quoteAuthor: "CFO Groupe (Melbourne)",
      },
    ],
  },

  // ─── CTA ──────────────────────────────────────────────────────────────────
  cta: {
    eyebrow: "Prochaine étape",
    title: "Nommez un commissaire",
    titleAccent: "à la hauteur de vos enjeux.",
    description:
      "Que vous prépariez une première nomination, un renouvellement de mandat ou un changement de commissaire, nous sommes disponibles pour comprendre vos obligations et vous proposer un accompagnement structuré.",
    trustPoints: [
      "Premier échange sans engagement",
      "Interlocuteur associé dès le premier contact",
      "Évaluation gratuite de vos obligations",
      "Confidentialité totale garantie",
    ],
    primaryCta: { label: "Planifier un échange", href: "/contact" },
    secondaryCta: { label: "Appeler le cabinet", href: "tel:+243XXXXXXXX" },
    watermarkIcon: "Scale",
    contactOptions: [
      {
        icon: "Calendar",
        title: "Planifier un échange",
        description: "30 minutes avec un associé pour évaluer votre situation.",
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
        description: "contact@caaf-rdc.com — réponse sous 24h ouvrées.",
        href: "mailto:contact@caaf-rdc.com",
        cta: "Envoyer un email",
        primary: false,
      },
    ],
    stats: [
      { value: "6 ans", label: "Durée du mandat" },
      { value: "24h", label: "Délai de réponse" },
      { value: "100%", label: "Indépendance" },
    ],
  },
}
// src/content/actualites/article-content.ts

// Contenu de l'article SYSCOHADA révisé
export const ARTICLE_CONTENT_SYSCOHADA: string[] = [
  "## Contexte de la révision",
  "Le SYSCOHADA révisé, entré en vigueur le 1er janvier 2018, continue d'évoluer. Les ajustements apportés en 2024 visent à rapprocher davantage le référentiel OHADA des normes IFRS, tout en préservant les spécificités du contexte africain.",
  "Ces modifications ne sont pas cosmétiques. Elles impactent directement la manière dont les entreprises congolaises présentent leurs états financiers, comptabilisent certaines opérations et communiquent avec leurs parties prenantes.",
  "> Les entreprises qui n'anticipent pas ces changements s'exposent à des réserves du commissaire aux comptes et à des difficultés avec les régulateurs.",
  "## Les principales modifications à connaître",
  "### 1. Présentation des états financiers",
  "Le format du bilan et du compte de résultat a été ajusté pour améliorer la lisibilité et la comparabilité. Les entreprises doivent désormais présenter séparément certains éléments qui étaient auparavant agrégés.",
  "- Séparation obligatoire des activités ordinaires et des éléments HAO\n- Nouveau format du tableau des flux de trésorerie\n- Notes annexes renforcées avec davantage d'informations qualitatives\n- Présentation obligatoire des engagements hors bilan",
  "### 2. Contrats de location",
  "L'une des modifications les plus significatives concerne le traitement comptable des contrats de location. Inspiré de la norme IFRS 16, le nouveau traitement impose aux preneurs de reconnaître un actif et un passif pour la quasi-totalité des contrats de location.",
  "Concrètement, cela signifie que les loyers qui apparaissaient uniquement en charges au compte de résultat vont désormais générer un actif au bilan (le droit d'utilisation) et une dette (l'obligation de paiement des loyers futurs).",
  "> Pour les entreprises ayant des baux immobiliers ou des contrats de location de matériel significatifs, l'impact sur le bilan peut être considérable.",
  "### 3. Instruments financiers",
  "Le traitement des instruments financiers a été aligné sur les principes de l'IFRS 9, avec des simplifications adaptées au contexte OHADA. Les principales nouveautés concernent la classification et l'évaluation des actifs financiers, ainsi que le modèle de dépréciation basé sur les pertes de crédit attendues.",
  "- Trois catégories de classification des actifs financiers\n- Modèle de dépréciation prospectif (pertes attendues)\n- Comptabilité de couverture simplifiée\n- Informations à fournir en annexe renforcées",
  "## Impact pour les entreprises congolaises",
  "### Sociétés minières",
  "Les sociétés minières seront particulièrement impactées par les nouvelles dispositions sur les contrats de location (engins, véhicules, bâtiments) et sur les provisions pour réhabilitation de sites. La documentation requise sera significativement plus importante.",
  "### Établissements bancaires",
  "Les banques devront adapter leur modèle de provisionnement des créances pour intégrer l'approche par les pertes de crédit attendues. Cela nécessitera des outils de modélisation et une collaboration étroite entre les équipes risques et comptabilité.",
  "### PME et ETI",
  "Pour les entreprises de taille moyenne, l'impact principal sera sur les contrats de location et la présentation des états financiers. Un accompagnement par un expert-comptable est fortement recommandé pour la première application.",
  "## Comment se préparer",
  "- Réaliser un diagnostic d'impact avec votre cabinet comptable\n- Identifier les contrats de location significatifs et estimer l'impact bilanciel\n- Mettre à jour le paramétrage de votre logiciel comptable\n- Former vos équipes comptables aux nouvelles dispositions\n- Planifier la communication avec votre commissaire aux comptes",
  "## Notre accompagnement",
  "Chez CAAF SAS, nous accompagnons déjà plusieurs entreprises congolaises dans la préparation de cette transition. Notre approche combine un diagnostic d'impact personnalisé, la mise à jour des procédures comptables et la formation de vos équipes.",
  "> N'attendez pas la clôture pour découvrir l'impact sur vos comptes. Anticipez dès maintenant pour une transition sereine.",
  "Si vous souhaitez évaluer l'impact des modifications du SYSCOHADA sur votre entreprise, nos équipes sont disponibles pour un premier échange sans engagement.",
]

// Mapping slug → content
export const ARTICLE_CONTENTS: Record<string, string[]> = {
  "syscohada-revise-2024-ce-qui-change": ARTICLE_CONTENT_SYSCOHADA,
}

// Default content for articles without specific content
export const DEFAULT_ARTICLE_CONTENT: string[] = [
  "## Introduction",
  "Cet article est en cours de rédaction par nos experts. Le contenu complet sera disponible prochainement.",
  "> Abonnez-vous à notre newsletter pour être informé de la publication.",
  "## En attendant",
  "N'hésitez pas à nous contacter directement si vous avez des questions sur ce sujet. Nos associés et managers sont disponibles pour un échange personnalisé.",
  "- Contactez-nous par email : contact@caaf-rdc.com\n- Appelez-nous : +243 XX XXX XXXX\n- Prenez rendez-vous en ligne",
]
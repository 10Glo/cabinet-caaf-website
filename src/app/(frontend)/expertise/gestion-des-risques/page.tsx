// src/app/expertises/gestion-des-risques/page.tsx

import { gestionDesRisquesConfig } from "@/content/expertises/gestion-des-risques"
import { ExpertiseHero } from "@/components/expertise/shared/expertise-hero"
import { ExpertiseSousServices } from "@/components/expertise/shared/expertise-sous-services"
import { ExpertiseApproche } from "@/components/expertise/shared/expertise-approche"
import { ExpertisePourquoi } from "@/components/expertise/shared/expertise-pourquoi"
import { ExpertiseSecteurs } from "@/components/expertise/shared/expertise-secteurs"
import { ExpertiseCas } from "@/components/expertise/shared/expertise-cas"
import { ExpertiseCta } from "@/components/expertise/shared/expertise-cta"

const BREADCRUMB = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Risk Assurance Services", href: "/expertises#risk-assurance" },
  { label: "Gestion des Risques", href: "/expertises/gestion-des-risques" },
]

export default function GestionDesRisquesPage() {
  return (
    <main>
      <ExpertiseHero config={gestionDesRisquesConfig.hero} breadcrumb={BREADCRUMB} />
      <ExpertiseSousServices config={gestionDesRisquesConfig.sousServices} />
      <ExpertiseApproche config={gestionDesRisquesConfig.approche} />
      <ExpertisePourquoi config={gestionDesRisquesConfig.pourquoi} />
      <ExpertiseSecteurs config={gestionDesRisquesConfig.secteurs} />
      <ExpertiseCas config={gestionDesRisquesConfig.cas} />
      <ExpertiseCta config={gestionDesRisquesConfig.cta} />
    </main>
  )
}
// src/app/expertises/maitrise-des-risques/page.tsx

import { maitriseDesRisquesConfig } from "@/content/expertises/maitrise-des-risques"
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
  { label: "Maîtrise des Risques", href: "/expertises/maitrise-des-risques" },
]

export default function MaitriseDesRisquesPage() {
  return (
    <main>
      <ExpertiseHero config={maitriseDesRisquesConfig.hero} breadcrumb={BREADCRUMB} />
      <ExpertiseSousServices config={maitriseDesRisquesConfig.sousServices} />
      <ExpertiseApproche config={maitriseDesRisquesConfig.approche} />
      <ExpertisePourquoi config={maitriseDesRisquesConfig.pourquoi} />
      <ExpertiseSecteurs config={maitriseDesRisquesConfig.secteurs} />
      <ExpertiseCas config={maitriseDesRisquesConfig.cas} />
      <ExpertiseCta config={maitriseDesRisquesConfig.cta} />
    </main>
  )
}
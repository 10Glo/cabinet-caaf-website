// src/app/expertises/restructuration/page.tsx

import { restructurationConfig } from "@/content/expertises/restructuration"
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
  { label: "Conseil & Advisory", href: "/expertises#conseil-advisory" },
  { label: "Restructuration", href: "/expertises/restructuration" },
]

export default function RestructurationPage() {
  return (
    <main>
      <ExpertiseHero config={restructurationConfig.hero} breadcrumb={BREADCRUMB} />
      <ExpertiseSousServices config={restructurationConfig.sousServices} />
      <ExpertiseApproche config={restructurationConfig.approche} />
      <ExpertisePourquoi config={restructurationConfig.pourquoi} />
      <ExpertiseSecteurs config={restructurationConfig.secteurs} />
      <ExpertiseCas config={restructurationConfig.cas} />
      <ExpertiseCta config={restructurationConfig.cta} />
    </main>
  )
}
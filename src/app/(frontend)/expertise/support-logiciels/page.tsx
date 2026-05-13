// src/app/expertises/support-logiciels/page.tsx

import { supportLogicielsConfig } from "@/content/expertises/support-logiciels"
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
  { label: "Support Opérationnel", href: "/expertises#support-operationnel" },
  { label: "Support aux Logiciels", href: "/expertises/support-logiciels" },
]

export default function SupportLogicielsPage() {
  return (
    <main>
      <ExpertiseHero config={supportLogicielsConfig.hero} breadcrumb={BREADCRUMB} />
      <ExpertiseSousServices config={supportLogicielsConfig.sousServices} />
      <ExpertiseApproche config={supportLogicielsConfig.approche} />
      <ExpertisePourquoi config={supportLogicielsConfig.pourquoi} />
      <ExpertiseSecteurs config={supportLogicielsConfig.secteurs} />
      <ExpertiseCas config={supportLogicielsConfig.cas} />
      <ExpertiseCta config={supportLogicielsConfig.cta} />
    </main>
  )
}
import { controleInterneConfig } from "@/content/expertises/controle-interne"
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
  { label: "Contrôle Interne", href: "/expertises/controle-interne" },
]

export default function ControleInternePage() {
  return (
    <main>
      <ExpertiseHero config={controleInterneConfig.hero} breadcrumb={BREADCRUMB} />
      <ExpertiseSousServices config={controleInterneConfig.sousServices} />
      <ExpertiseApproche config={controleInterneConfig.approche} />
      <ExpertisePourquoi config={controleInterneConfig.pourquoi} />
      <ExpertiseSecteurs config={controleInterneConfig.secteurs} />
      <ExpertiseCas config={controleInterneConfig.cas} />
      <ExpertiseCta config={controleInterneConfig.cta} />
    </main>
  )
}
import { commissariatAuxComptesConfig } from "@/content/expertises/commissariat-aux-comptes"
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
  { label: "Audit & Assurance", href: "/expertises#audit-assurance" },
  { label: "Commissariat aux Comptes", href: "/expertises/commissariat-aux-comptes" },
]

export default function CommissariatAuxComptesPage() {
  return (
    <main>
      <ExpertiseHero config={commissariatAuxComptesConfig.hero} breadcrumb={BREADCRUMB} />
      <ExpertiseSousServices config={commissariatAuxComptesConfig.sousServices} />
      <ExpertiseApproche config={commissariatAuxComptesConfig.approche} />
      <ExpertisePourquoi config={commissariatAuxComptesConfig.pourquoi} />
      <ExpertiseSecteurs config={commissariatAuxComptesConfig.secteurs} />
      <ExpertiseCas config={commissariatAuxComptesConfig.cas} />
      <ExpertiseCta config={commissariatAuxComptesConfig.cta} />
    </main>
  )
}
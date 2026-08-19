import { ExpertisePage } from "@/components/expertise/shared/expertise-page"
import { commissariatAuxComptesConfig } from "@/content/expertises/commissariat-aux-comptes"

const BREADCRUMB = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Audit & Assurance", href: "/expertises#audit-assurance" },
  {
    label: "Commissariat aux Comptes",
    href: "/expertises/commissariat-aux-comptes",
  },
]

export default function CommissariatAuxComptesPage() {
  return (
    <ExpertisePage
      config={commissariatAuxComptesConfig}
      breadcrumb={BREADCRUMB}
    />
  )
}

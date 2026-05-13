// src/app/(frontend)/services/page.tsx
import { ServicesBentoGrid } from "@/components/ui/services-bento-grid"
import { ServicesFinalCta } from "@/components/ui/services-final-cta"
import { ServicesHero } from "@/components/ui/services-hero"
import { ServicesSectorExpertise } from "@/components/ui/services-sector-expertise"

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesBentoGrid />
      <ServicesSectorExpertise />
      <ServicesFinalCta />
    </>
  )
}
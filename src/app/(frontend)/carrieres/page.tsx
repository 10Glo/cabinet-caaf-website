// src/app/(frontend)/carrieres/page.tsx
import { CareersCulture } from "@/components/ui/careers-culture";
import { CareersFinalCta } from "@/components/ui/careers-final-cta";
import { CareersHero } from "@/components/ui/careers-hero";
import { CareersOpenings } from "@/components/ui/careers-openings";
import UnderConstruction from "../underConstruction";
import { CertificationsHero } from "@/components/ui/certifications-hero";


export default function CareersPage() {
  return (
    <>
    <CertificationsHero />
      <UnderConstruction />
      {/* <CareersHero />
      <CareersOpenings />
      <CareersCulture />
      <CareersFinalCta /> */}
    </>
  )
}
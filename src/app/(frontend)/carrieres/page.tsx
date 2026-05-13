// src/app/(frontend)/carrieres/page.tsx
import { CareersCulture } from "@/components/ui/careers-culture";
import { CareersFinalCta } from "@/components/ui/careers-final-cta";
import { CareersHero } from "@/components/ui/careers-hero";
import { CareersOpenings } from "@/components/ui/careers-openings";


export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersOpenings />
      <CareersCulture />
      <CareersFinalCta />
    </>
  )
}
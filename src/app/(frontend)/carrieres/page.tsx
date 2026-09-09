// src/app/(frontend)/carrieres/page.tsx
import { CareersCulture } from "@/components/ui/careers-culture";
import { CareersFinalCta } from "@/components/ui/careers-final-cta";
import { CareersHero } from "@/components/ui/careers-hero";
import { CareersOpenings } from "@/components/ui/careers-openings";
import { CareersRoles } from "@/components/ui/careers-roles";

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersRoles />
      <CareersOpenings />
    </>
  )
}
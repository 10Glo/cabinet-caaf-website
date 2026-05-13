// src/app/(frontend)/certifications/page.tsx
import { CertificationsCta } from "@/components/ui/certifications-cta"
import { CertificationsDetail } from "@/components/ui/certifications-detail"
import { CertificationsHero } from "@/components/ui/certifications-hero"
import { CertificationsQuality } from "@/components/ui/certifications-quality"

export default function CertificationsPage() {
  return (
    <>
      <CertificationsHero />
      <CertificationsDetail />
      <CertificationsQuality />
      <CertificationsCta />
    </>
  )
}
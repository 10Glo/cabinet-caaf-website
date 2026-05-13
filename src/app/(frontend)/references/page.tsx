// src/app/(frontend)/references/page.tsx
import { ReferencesHero } from "@/components/ui/references-hero"
import { ReferencesGrid } from "@/components/ui/references-grid"
import { ReferencesTestimonials } from "@/components/ui/references-testimonials"
import { ReferencesCta } from "@/components/ui/references-cta"

export default function ReferencesPage() {
  return (
    <>
      <ReferencesHero /> 
      <ReferencesGrid />
      <ReferencesTestimonials />
      <ReferencesCta />
    </>
  )
}

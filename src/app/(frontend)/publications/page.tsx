// src/app/(frontend)/publications/page.tsx

import { PublicationsCta } from "@/components/ui/publications-cta";
import { PublicationsHero } from "@/components/ui/publications-hero";
import { PublicationsList } from "@/components/ui/publications-list";
import { PublicationsSubscribe } from "@/components/ui/publications-subscribe";

export default function PublicationsPage() {
  return (
    <>
      <PublicationsHero />
      <PublicationsList />
      <PublicationsSubscribe />
      <PublicationsCta />
    </>
  )
}
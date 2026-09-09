// src/app/(frontend)/actualites/page.tsx

import { ActualitesFeatured } from "@/components/ui/actualites-featured"
import { ActualitesGrid } from "@/components/ui/actualites-grid"
import { ActualitesHero } from "@/components/ui/actualites-hero"
import { ARTICLES } from "@/content/actualites/articles"

export default function ActualitesPage() {
  const featuredArticle = ARTICLES.find((a) => a.featured)

  return (
    <main>
      <ActualitesHero />
      {featuredArticle && <ActualitesFeatured article={featuredArticle} />}
      <ActualitesGrid articles={ARTICLES} />
    </main>
  )
}
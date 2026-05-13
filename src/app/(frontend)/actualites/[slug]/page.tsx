// src/app/(frontend)/actualites/[slug]/page.tsx

import { ARTICLES } from "@/content/actualites/articles"
import {
  ARTICLE_CONTENTS,
  DEFAULT_ARTICLE_CONTENT,
} from "@/content/actualites/article-content"
import { notFound } from "next/navigation"
import { ArticleReader } from "@/components/ui/article-reader"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = ARTICLES.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  // Get article content or fallback
  const content = ARTICLE_CONTENTS[slug] ?? DEFAULT_ARTICLE_CONTENT

  // Get related articles (same category, excluding current)
  const relatedArticles = ARTICLES.filter(
    (a) => a.categorySlug === article.categorySlug && a.slug !== slug
  ).slice(0, 3)

  // If not enough related, fill with other articles
  const finalRelated =
    relatedArticles.length >= 3
      ? relatedArticles
      : [
          ...relatedArticles,
          ...ARTICLES.filter(
            (a) =>
              a.slug !== slug &&
              !relatedArticles.find((r) => r.slug === a.slug)
          ).slice(0, 3 - relatedArticles.length),
        ]

  return (
    <main>
      <ArticleReader
        article={article}
        relatedArticles={finalRelated}
        content={content}
      />
    </main>
  )
}
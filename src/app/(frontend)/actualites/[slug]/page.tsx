// src/app/(frontend)/actualites/[slug]/page.tsx — Payload powered
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArticleReader } from "@/components/ui/article-reader"
import { getPayload } from "payload"
import config from "@/payload.config"
import { buildMetadata } from "@/lib/seo"
import { ARTICLES as FALLBACK_ARTICLES, formatDate as fallbackFormatDate } from "@/content/actualites/articles"
import {
  ARTICLE_CONTENTS,
  DEFAULT_ARTICLE_CONTENT,
} from "@/content/actualites/article-content"
import type { Media } from "@/payload-types"

interface Props {
  params: Promise<{ slug: string }>
}

function mediaUrl(m: unknown): string {
  if (!m) return ""
  if (typeof m === "number") return ""
  return (m as Media).url ?? ""
}

function lexicalToParagraphs(content: unknown): string[] | null {
  try {
    const root = (content as { root?: { children?: Array<Record<string, unknown>> } })?.root
    if (!root?.children?.length) return null
    const out: string[] = []
    for (const node of root.children) {
      const type = node.type as string
      if (type === "heading") {
        const tag = (node as { tag?: string }).tag ?? "h2"
        const text = extractText(node)
        if (!text) continue
        out.push(tag === "h3" ? `### ${text}` : `## ${text}`)
      } else if (type === "quote" || type === "blockquote") {
        const text = extractText(node)
        if (text) out.push(`> ${text}`)
      } else if (type === "list") {
        const items = (node as { children?: Array<Record<string, unknown>> }).children ?? []
        const lines = items.map((li) => `- ${extractText(li)}`).filter(Boolean)
        if (lines.length) out.push(lines.join("\n"))
      } else if (type === "upload") {
        const fields = (node as { fields?: { caption?: string } }).fields
        const rel = (node as { relationTo?: string; value?: Media }).value
        const url = rel && typeof rel !== "number" ? (rel as Media).url ?? "" : ""
        if (url) out.push(`![${fields?.caption ?? ""}](${url})`)
      } else {
        const text = extractText(node)
        if (text) out.push(text)
      }
    }
    return out.length ? out : null
  } catch {
    return null
  }
}

function extractText(node: Record<string, unknown>): string {
  if (typeof node.text === "string") return node.text
  const children = node.children as Array<Record<string, unknown>> | undefined
  if (children?.length) return children.map(extractText).join("")
  return ""
}

async function fetchArticle(slug: string) {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    for (const locale of ["fr", "en"] as const) {
      const res = await payload.find({
        collection: "articles",
        locale,
          depth: 2,
        limit: 1,
        where: {
          slug: { equals: slug },
          _status: { equals: "published" },
        },
      })
      if (res.docs[0]) return res.docs[0] as unknown as Record<string, unknown>
    }
    return null
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const res = await payload.find({
      collection: "articles",
      locale: "fr",
      depth: 0,
      limit: 100,
      pagination: false,
      where: { _status: { equals: "published" } },
    })
    const slugs = (res.docs as Array<{ slug?: string }>)
      .map((d) => d.slug)
      .filter(Boolean) as string[]
    if (slugs.length) return slugs.map((slug) => ({ slug }))
  } catch {}
  // fallback to hardcoded
  return FALLBACK_ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const payloadArticle = await fetchArticle(slug)

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const defaults = (await payload.findGlobal({ slug: "seo-defaults", locale: "fr" })) as unknown as Parameters<typeof buildMetadata>[0]["defaults"]
    if (payloadArticle) {
      const seo = (payloadArticle.seo ?? null) as Parameters<typeof buildMetadata>[0]["seo"]
      const title = (payloadArticle.title as string) ?? slug
      // buildMetadata will use seo.title fallback etc.
      return buildMetadata({
        seo: seo ?? { title, description: (payloadArticle.excerpt as string) ?? "" },
        defaults,
        locale: "fr",
        path: `/actualites/${slug}`,
      })
    }
  } catch {}

  // fallback to hardcoded article
  const fallback = FALLBACK_ARTICLES.find((a) => a.slug === slug)
  if (!fallback) return {}
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const defaults = (await payload.findGlobal({ slug: "seo-defaults", locale: "fr" })) as unknown as Parameters<typeof buildMetadata>[0]["defaults"]
    return buildMetadata({
      seo: { title: fallback.title, description: fallback.excerpt },
      defaults,
      locale: "fr",
      path: `/actualites/${slug}`,
    })
  } catch {
    return {
      title: fallback.title,
      description: fallback.excerpt,
    }
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params

  // Try Payload first
  const payloadArticle = await fetchArticle(slug)

  if (payloadArticle) {
    // Map Payload article to ArticleReader props
    const category = payloadArticle.category as unknown as { label?: string; slug?: string } | null
    const author = payloadArticle.author as unknown as { name?: string; role?: string } | null
    const image = payloadArticle.image as unknown as Media | number
    const tagsRaw = (payloadArticle.tags as unknown as Array<{ label?: string } | string | number>) ?? []
    const tags = tagsRaw.map((t) => {
      if (typeof t === "string") return t
      if (typeof t === "number") return String(t)
      return (t as { label?: string }).label ?? ""
    }).filter(Boolean)

    const article = {
      title: (payloadArticle.title as string) ?? "",
      slug: (payloadArticle.slug as string) ?? slug,
      image: mediaUrl(image) || "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
      excerpt: (payloadArticle.excerpt as string) ?? "",
      category: (category?.label as string) ?? "Actualités",
      categorySlug: (category?.slug as string) ?? "all",
      date: (payloadArticle.date as string) ?? (payloadArticle.publishedAt as string) ?? new Date().toISOString(),
      readTime: (payloadArticle.readTime as string) ?? "5 min",
      author: { name: author?.name ?? "CAAF SAS", role: author?.role ?? "Rédaction" },
      tags,
    }

    const lexicalContent = lexicalToParagraphs(payloadArticle.content)
    const content = lexicalContent ?? ARTICLE_CONTENTS[slug] ?? DEFAULT_ARTICLE_CONTENT

    // Related articles: fetch 3 from same category
    let relatedArticles: typeof FALLBACK_ARTICLES = []
    try {
      const payloadConfig = await config
      const payload = await getPayload({ config: payloadConfig })
      const catId = (payloadArticle.category as unknown as { id?: number })?.id ?? payloadArticle.category
      const relRes = await payload.find({
        collection: "articles",
        locale: "fr",
          depth: 1,
        limit: 4,
        where: {
          _status: { equals: "published" },
          slug: { not_equals: slug },
        },
      })
      // crude filter by category not needed, just take first 3
      relatedArticles = (relRes.docs as unknown as Array<Record<string, unknown>>).slice(0, 3).map((d) => ({
        slug: d.slug as string,
        title: d.title as string,
        excerpt: (d.excerpt as string) ?? "",
        category: ((d.category as unknown as { label?: string })?.label as string) ?? "Actualités",
        categorySlug: ((d.category as unknown as { slug?: string })?.slug as string) ?? "all",
        date: (d.date as string) ?? new Date().toISOString(),
        readTime: (d.readTime as string) ?? "5 min",
        author: {
          name: ((d.author as unknown as { name?: string })?.name as string) ?? "CAAF SAS",
          role: ((d.author as unknown as { role?: string })?.role as string) ?? "",
        },
        image: mediaUrl(d.image) || article.image,
        featured: Boolean(d.featured),
        tags: [],
      }))
    } catch {}

    // Fallback to hardcoded related if not enough
    if (relatedArticles.length < 3) {
      const needed = 3 - relatedArticles.length
      const fallbackRelated = FALLBACK_ARTICLES.filter((a) => a.slug !== slug && !relatedArticles.find((r) => r.slug === a.slug)).slice(0, needed)
      relatedArticles = [...relatedArticles, ...fallbackRelated]
    }

    return (
      <main>
        <ArticleReader article={article} relatedArticles={relatedArticles} content={content} />
      </main>
    )
  }

  // Fallback: hardcoded ARTICLES
  const article = FALLBACK_ARTICLES.find((a) => a.slug === slug)
  if (!article) notFound()

  const content = ARTICLE_CONTENTS[slug] ?? DEFAULT_ARTICLE_CONTENT
  const relatedArticles = FALLBACK_ARTICLES.filter((a) => a.categorySlug === article.categorySlug && a.slug !== slug).slice(0, 3)
  const finalRelated =
    relatedArticles.length >= 3
      ? relatedArticles
      : [
          ...relatedArticles,
          ...FALLBACK_ARTICLES.filter((a) => a.slug !== slug && !relatedArticles.find((r) => r.slug === a.slug)).slice(0, 3 - relatedArticles.length),
        ]

  return (
    <main>
      <ArticleReader article={article} relatedArticles={finalRelated} content={content} />
    </main>
  )
}

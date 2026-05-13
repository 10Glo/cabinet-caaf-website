// src/content/actualites/types.ts

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  categorySlug: string
  date: string           // "2024-12-15"
  readTime: string       // "5 min"
  author: {
    name: string
    role: string
  }
  image: string
  featured?: boolean
  tags: string[]
}

export interface ActualitesCategory {
  slug: string
  label: string
  count: number
}
// src/components/actualites/actualites-grid.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Clock, CalendarDays, User } from "lucide-react"
import type { Article } from "@/content/actualites/types"
import {
  CATEGORIES,
  getArticlesByCategory,
  formatDate,
} from "@/content/actualites/articles"

interface Props {
  articles: Article[]
}

export function ActualitesGrid({ articles }: Props) {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredArticles = getArticlesByCategory(activeCategory).filter(
    (a) => !a.featured
  )

  return (
    <section className="bg-white px-10 py-section">
      <div className="w-full">
        {/* Heading */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Tous nos articles
            </span>
          </div>
          <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
            Explorer par thématique.
          </h2>
        </div>

        {/* Category filters */}
        <div className="mb-10 flex flex-wrap items-center gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = cat.slug === activeCategory
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setActiveCategory(cat.slug)}
                className={`inline-flex items-center gap-2 border px-5 py-3 text-[13px] font-medium transition-all ${
                  isActive
                    ? "border-primary/30 bg-primary/5 text-primary"
                    : "border-hairline bg-white text-ink/45 hover:border-primary/20 hover:text-ink/70"
                }`}
              >
                {cat.label}
                <span
                  className={`font-mono text-[11px] ${
                    isActive ? "text-primary/60" : "text-ink/25"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {filteredArticles.map((article, index) => {
            // Bento pattern: first row = 8+4, then 4+4+4, repeat
            const isLarge = index % 4 === 0
            const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4"

            return (
              <Link
                key={article.slug}
                href={`/actualites/${article.slug}`}
                className={`group flex flex-col border border-hairline bg-white transition-colors hover:border-primary/20 ${colSpan}`}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      isLarge ? "h-64" : "h-48"
                    }`}
                  />
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  {/* Meta */}
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-[11px] text-ink/35">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays size={12} strokeWidth={1.5} />
                      {formatDate(article.date)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} strokeWidth={1.5} />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl leading-snug text-brand-navy transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 flex-1 text-[13px] leading-6 text-ink/50">
                    {article.excerpt.length > 150
                      ? `${article.excerpt.slice(0, 150)}…`
                      : article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4">
                    <div className="flex items-center gap-2">
                      <div className="inline-flex h-7 w-7 items-center justify-center border border-primary/15 bg-primary/5 text-primary">
                        <User size={14} strokeWidth={1.5} />
                      </div>
                      <span className="text-[12px] font-medium text-ink/50">
                        {article.author.name}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Lire
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Empty state */}
        {filteredArticles.length === 0 && (
          <div className="border border-hairline bg-surface-card p-16 text-center">
            <p className="text-sm text-ink/40">
              Aucun article dans cette catégorie pour le moment.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
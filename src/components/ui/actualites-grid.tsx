// src/components/ui/actualites-grid.tsx — level up editorial
"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Article } from "@/content/actualites/types"
import { CATEGORIES, getArticlesByCategory, formatDate } from "@/content/actualites/articles"

interface Props { articles: Article[] }

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/actualites/${article.slug}`} className="group flex h-full flex-col border border-slate-200 bg-white transition-colors hover:border-slate-300">
      <div className="relative h-[200px] overflow-hidden border-b border-slate-200">
        <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
        <span className="absolute left-3 top-3 bg-white px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-700">{article.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2 font-sans text-xs text-slate-400">
          <span>{formatDate(article.date)}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>{article.readTime}</span>
        </div>
        <h3 className="font-serif text-[18px] font-semibold leading-snug text-slate-900 line-clamp-2 group-hover:text-slate-700">{article.title}</h3>
        <p className="mt-2 line-clamp-2 font-sans text-sm leading-6 text-slate-500">{article.excerpt}</p>
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="font-sans text-xs font-semibold text-slate-900">{article.author.name}</p>
            <p className="font-sans text-xs text-slate-400">{article.author.role}</p>
          </div>
          <span className="inline-flex items-center gap-1 font-sans text-xs font-medium text-slate-900 opacity-60 group-hover:opacity-100 group-hover:gap-1.5 transition-all">Lire <ArrowRight size={12} /></span>
        </div>
      </div>
    </Link>
  )
}

export function ActualitesGrid({ articles }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const filtered = getArticlesByCategory(activeCategory).filter((a) => !a.featured)
  return (
    <section ref={sectionRef} className="bg-white px-6 sm:px-10 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-slate-300" />
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Tous nos articles</span>
            </div>
            <h2 className="font-serif text-3xl leading-tight text-slate-900 md:text-4xl">Explorer par <span className="text-slate-400">thématique.</span></h2>
          </div>
          <p className="max-w-md font-sans text-sm leading-6 text-slate-500">Analyses, décryptages et veille réglementaire signés par nos associés — à lire, à partager, à conserver.</p>
        </div>
        <div className="mb-8 flex flex-wrap gap-2 border-y border-slate-200 py-4">
          {CATEGORIES.map((cat) => {
            const isActive = cat.slug === activeCategory
            return (
              <button key={cat.slug} onClick={() => setActiveCategory(cat.slug)} className={`px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${isActive ? "bg-slate-900 text-white" : "border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-900"}`}>
                {cat.label} <span className={`ml-1.5 font-mono text-[11px] ${isActive ? "text-white/60" : "text-slate-400"}`}>{cat.count}</span>
              </button>
            )
          })}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="mt-8 border border-slate-200 bg-slate-50 px-8 py-16 text-center">
            <p className="font-sans text-sm text-slate-500">Aucun article dans cette catégorie pour le moment.</p>
          </div>
        )}
      </div>
    </section>
  )
}

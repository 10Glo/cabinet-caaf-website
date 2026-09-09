// src/components/ui/actualites-featured.tsx — level up editorial side-by-side
"use client"

import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import type { Article } from "@/content/actualites/types"
import { formatDate } from "@/content/actualites/articles"

export function ActualitesFeatured({ article }: { article: Article }) {
  return (
    <section className="bg-[#f8fafc] border-y border-slate-200 px-6 sm:px-10 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-8 bg-slate-900" />
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900">À la une</span>
          <span className="h-px flex-1 bg-slate-200" />
        </div>
        <Link href={`/actualites/${article.slug}`} className="group grid overflow-hidden border border-slate-200 bg-white lg:grid-cols-[1.35fr_1fr]">
          <div className="relative h-[320px] overflow-hidden lg:h-auto">
            <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
          </div>
          <div className="flex flex-col p-8 lg:p-10">
            <div className="mb-4 flex items-center gap-2">
              <span className="bg-slate-900 px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-white">{article.category}</span>
              <span className="font-sans text-xs text-slate-400">{formatDate(article.date)}</span>
            </div>
            <h2 className="font-serif text-2xl font-bold leading-tight text-slate-900 group-hover:text-slate-700 md:text-3xl">{article.title}</h2>
            <p className="mt-4 font-sans text-[15px] leading-7 text-slate-500 line-clamp-3">{article.excerpt}</p>
            <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 font-serif text-xs font-bold text-white">{article.author.name.split(" ").map(n=>n[0]).join("").slice(0,2)}</div>
              <div>
                <p className="font-sans text-sm font-semibold text-slate-900">{article.author.name}</p>
                <p className="font-sans text-xs text-slate-400">{article.author.role} · {article.readTime}</p>
              </div>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-medium text-slate-900 group-hover:gap-3 transition-all">Lire l&apos;article <ArrowRight size={14} /></div>
          </div>
        </Link>
      </div>
    </section>
  )
}

// src/components/actualites/actualites-featured.tsx
"use client"

import Link from "next/link"
import { ArrowRight, Clock, CalendarDays, User } from "lucide-react"
import type { Article } from "@/content/actualites/types"
import { formatDate } from "@/content/actualites/articles"

interface Props {
  article: Article
}

export function ActualitesFeatured({ article }: Props) {
  return (
    <section className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* Heading */}
        <div className="mb-10 flex items-center gap-3">
          <div className="h-px w-10 bg-primary" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            À la une
          </span>
        </div>

        {/* Card */}
        <Link
          href={`/actualites/${article.slug}`}
          className="group grid grid-cols-1 gap-0 border border-hairline bg-white transition-colors md:grid-cols-12"
        >
          {/* Image */}
          <div className="relative overflow-hidden md:col-span-7">
            <img
              src={article.image}
              alt={article.title}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full md:min-h-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent md:bg-linear-to-r" />

            {/* Category badge */}
            <div className="absolute left-6 top-6">
              <span className="inline-flex items-center border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm">
                {article.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 md:col-span-5 md:p-10 lg:p-14">
            {/* Meta */}
            <div className="mb-6 flex flex-wrap items-center gap-4 text-[12px] text-ink/40">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={13} strokeWidth={1.5} />
                {formatDate(article.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={13} strokeWidth={1.5} />
                {article.readTime} de lecture
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-2xl leading-snug text-brand-navy transition-colors group-hover:text-primary md:text-3xl">
              {article.title}
            </h2>

            {/* Excerpt */}
            <p className="mt-4 text-sm leading-7 text-ink/60 md:text-base">
              {article.excerpt}
            </p>

            {/* Author */}
            <div className="mt-8 flex items-center gap-3 border-t border-hairline pt-6">
              <div className="inline-flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/5 text-primary">
                <User size={18} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-navy">
                  {article.author.name}
                </p>
                <p className="text-[12px] text-ink/40">{article.author.role}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                Lire l&apos;article complet
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
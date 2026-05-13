// src/components/actualites/article-reader.tsx
"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  CalendarDays,
  User,
  Share2,
  Bookmark,
  ChevronRight,
  ArrowUp,
} from "lucide-react"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import type { Article } from "@/content/actualites/types"
import { formatDate } from "@/content/actualites/articles"

interface Props {
  article: Article
  relatedArticles: Article[]
  content: string[]
}

export function ArticleReader({ article, relatedArticles, content }: Props) {
  const [progress, setProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return
      const el = contentRef.current
      const rect = el.getBoundingClientRect()
      const totalHeight = el.scrollHeight - window.innerHeight
      const scrolled = -rect.top
      const pct = Math.min(Math.max(scrolled / totalHeight, 0), 1)
      setProgress(pct)
      setShowBackToTop(scrolled > 600)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* ── Progress bar (fixed top) ── */}
      <div className="fixed left-0 right-0 top-0 z-50 h-[3px] bg-brand-navy/5">
        <div
          className="h-full bg-primary transition-all duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* ── Hero / Header ── */}
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={article.image}
            alt=""
            className="h-full w-full object-cover"
            style={{ opacity: 0.15 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.02,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 w-full px-6 pb-16 pt-32 sm:px-10 md:pt-40 lg:pb-20">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <nav
              aria-label="Fil d'Ariane"
              className="mb-8 flex items-center gap-2 text-[12px] text-white/40"
            >
              <Link href="/" className="transition-colors hover:text-white/60">
                Accueil
              </Link>
              <ChevronRight size={12} />
              <Link
                href="/actualites"
                className="transition-colors hover:text-white/60"
              >
                Actualités
              </Link>
              <ChevronRight size={12} />
              <span className="text-white/60">{article.category}</span>
            </nav>

            {/* Category badge */}
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="max-w-3xl font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em]">
              {article.title}
            </h1>

            {/* Meta row */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-[13px] text-white/45">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={15} strokeWidth={1.5} />
                {formatDate(article.date)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={15} strokeWidth={1.5} />
                {article.readTime} de lecture
              </span>
              <div className="h-4 w-px bg-white/15" />
              <div className="flex items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center border border-white/15 bg-white/5">
                  <User size={14} strokeWidth={1.5} className="text-primary" />
                </div>
                <div>
                  <span className="font-medium text-white/70">
                    {article.author.name}
                  </span>
                  <span className="ml-1 text-white/30">
                    · {article.author.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <section className="relative bg-white" ref={contentRef}>
        {/* Progressive blur top */}
        <ProgressiveBlur
          position="top"
          backgroundColor="rgb(255,255,255)"
          height="100px"
          blurAmount="3px"
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-6 py-16 sm:px-10 md:py-24 lg:grid-cols-[1fr_280px] lg:gap-16">
          {/* Main content */}
          <article className="mx-auto max-w-3xl lg:mx-0">
            {/* Lead paragraph */}
            <p className="mb-12 border-l-[3px] border-primary pl-6 text-[18px] font-medium leading-[1.9] text-brand-navy/80">
              {article.excerpt}
            </p>

            {/* Body paragraphs */}
            <div className="prose-caaf space-y-8">
              {content.map((section, index) => {
                // Check if it's a heading (starts with ##)
                if (section.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="mt-16 font-serif text-2xl font-bold text-brand-navy md:text-3xl"
                    >
                      {section.replace("## ", "")}
                    </h2>
                  )
                }

                if (section.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="mt-10 font-serif text-xl font-bold text-brand-navy"
                    >
                      {section.replace("### ", "")}
                    </h3>
                  )
                }

                // Check if it's a blockquote (starts with >)
                if (section.startsWith("> ")) {
                  return (
                    <blockquote
                      key={index}
                      className="my-10 border-l-[3px] border-primary/40 bg-primary/[0.03] px-6 py-5"
                    >
                      <p className="text-[15px] font-medium italic leading-[1.8] text-brand-navy/70">
                        {section.replace("> ", "")}
                      </p>
                    </blockquote>
                  )
                }

                // Check if it's a list item (starts with -)
                if (section.startsWith("- ")) {
                  const items = section.split("\n").filter((l) => l.startsWith("- "))
                  return (
                    <ul key={index} className="my-6 space-y-3">
                      {items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[16px] leading-[1.85] text-ink/70"
                        >
                          <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                          <span>{item.replace("- ", "")}</span>
                        </li>
                      ))}
                    </ul>
                  )
                }

                // Regular paragraph
                return (
                  <p
                    key={index}
                    className="text-[16px] leading-[1.85] text-ink/70"
                  >
                    {section}
                  </p>
                )
              })}
            </div>

            {/* Author card */}
            <div className="mt-20 border border-hairline bg-surface-card p-8 md:p-10">
              <div className="flex items-start gap-5">
                <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center border border-primary/20 bg-primary/5 text-primary">
                  <User size={28} strokeWidth={1.3} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/35">
                    Rédigé par
                  </p>
                  <p className="mt-1 text-lg font-bold text-brand-navy">
                    {article.author.name}
                  </p>
                  <p className="text-sm text-ink/50">{article.author.role}</p>
                  <p className="mt-3 text-[13px] leading-6 text-ink/50">
                    Expert en {article.category.toLowerCase()} avec plus de 15 ans
                    d'expérience dans l'accompagnement des entreprises en RDC et
                    dans la sous-région.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">
              {/* Share */}
              <div className="border border-hairline bg-white p-6">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/35">
                  Partager
                </p>
                <div className="flex gap-2">
                  {["LinkedIn", "Twitter", "Email"].map((platform) => (
                    <button
                      key={platform}
                      type="button"
                      className="inline-flex h-10 w-10 items-center justify-center border border-hairline bg-surface-card text-ink/40 transition-colors hover:border-primary/20 hover:text-primary"
                    >
                      <Share2 size={15} strokeWidth={1.5} />
                    </button>
                  ))}
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center border border-hairline bg-surface-card text-ink/40 transition-colors hover:border-primary/20 hover:text-primary"
                  >
                    <Bookmark size={15} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* Table of contents (simplified) */}
              <div className="border border-hairline bg-white p-6">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/35">
                  Dans cet article
                </p>
                <nav className="space-y-2">
                  {content
                    .filter((s) => s.startsWith("## "))
                    .map((heading, i) => (
                      <a
                        key={i}
                        href={`#section-${i}`}
                        className="block text-[13px] leading-6 text-ink/50 transition-colors hover:text-primary"
                      >
                        {heading.replace("## ", "")}
                      </a>
                    ))}
                </nav>
              </div>

              {/* Tags */}
              <div className="border border-hairline bg-white p-6">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/35">
                  Thématiques
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center border border-primary/15 bg-primary/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Progressive blur bottom */}
        <ProgressiveBlur
          position="bottom"
          backgroundColor="rgb(248,247,246)"
          height="100px"
          blurAmount="3px"
        />
      </section>

      {/* ── Related articles ── */}
      <section className="bg-canvas px-10 py-section">
        <div className="w-full">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  À lire également
                </span>
              </div>
              <h2 className="font-serif text-3xl text-brand-navy md:text-4xl">
                Articles recommandés
              </h2>
            </div>
            <Link
              href="/actualites"
              className="group hidden items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3 md:inline-flex"
            >
              Tous les articles
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
            {relatedArticles.slice(0, 3).map((related, index) => {
              const colSpan =
                index === 0 ? "md:col-span-8" : "md:col-span-4"

              return (
                <Link
                  key={related.slug}
                  href={`/actualites/${related.slug}`}
                  className={`group flex flex-col border border-hairline bg-white transition-colors hover:border-primary/20 ${colSpan}`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        index === 0 ? "h-56" : "h-44"
                      }`}
                    />
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm">
                        {related.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="mb-3 flex items-center gap-3 text-[11px] text-ink/35">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays size={12} strokeWidth={1.5} />
                        {formatDate(related.date)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={12} strokeWidth={1.5} />
                        {related.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg leading-snug text-brand-navy transition-colors group-hover:text-primary">
                      {related.title}
                    </h3>

                    <p className="mt-3 flex-1 text-[13px] leading-6 text-ink/50">
                      {related.excerpt.length > 120
                        ? `${related.excerpt.slice(0, 120)}…`
                        : related.excerpt}
                    </p>

                    <div className="mt-5 flex items-center gap-2">
                      <div className="inline-flex h-6 w-6 items-center justify-center border border-primary/15 bg-primary/5 text-primary">
                        <User size={12} strokeWidth={1.5} />
                      </div>
                      <span className="text-[11px] font-medium text-ink/45">
                        {related.author.name}
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* CTA strip */}
          <div className="mt-5 flex items-center justify-between border border-hairline bg-white p-8 md:px-10">
            <div className="flex items-center gap-4">
              <Link
                href="/actualites"
                className="group inline-flex items-center gap-2 text-sm font-medium text-brand-navy transition-all hover:text-primary"
              >
                <ArrowLeft size={15} />
                Retour aux actualités
              </Link>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
            >
              Une question sur ce sujet ?
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Back to top button ── */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Remonter en haut"
        className={`fixed bottom-8 right-8 z-40 inline-flex h-12 w-12 items-center justify-center border border-hairline bg-white text-brand-navy/50 shadow-lg transition-all hover:border-primary/30 hover:text-primary ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp size={18} strokeWidth={1.5} />
      </button>
    </>
  )
}
// src/components/actualites/article-reader.tsx
"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

// ─── Constants ───────────────────────────────────────────
const EASE_OUT = [0.1, 0, 0.1, 1] as const

interface Article {
  title: string
  slug: string
  image: string
  excerpt: string
  category: string
  categorySlug: string
  date: string
  readTime: string
  author: {
    name: string
    role: string
  }
  tags: string[]
}

interface Props {
  article: Article
  relatedArticles: Article[]
  content: string[]
}

// ─── Format date helper ──────────────────────────────────
function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

// ─── Share buttons data ──────────────────────────────────
const SHARE_PLATFORMS = [
  { label: "Li", href: "#" },
  { label: "X", href: "#" },
  { label: "@", href: "#" },
]

// ─── Parse image markdown ────────────────────────────────
function parseImageMarkdown(text: string): { caption: string; src: string } | null {
  const match = text.match(/^!$$(.*?)$$$$(.*?)$$$/)
  if (match) {
    return { caption: match[1], src: match[2] }
  }
  return null
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

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

  // Extract headings for ToC
  const headings = content
    .map((s, i) => ({ text: s, index: i }))
    .filter((s) => s.text.startsWith("## "))

  return (
    <>
      {/* ── Progress bar (fixed top) ── */}
      <div className="fixed left-0 right-0 top-0 z-50 h-[3px] bg-[#111A4A]/[0.06]">
        <div
          className="h-full bg-primary transition-all duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════ */}
      <section className="hero-section relative w-full overflow-hidden bg-brand-navy">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={article.image}
            alt=""
            className="h-full w-full object-cover opacity-[0.10]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/70 via-brand-navy/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/30 via-transparent to-brand-navy/80" />
          <div className="absolute inset-0 hero-radial-accent" />
        </div>

        {/* Glow accents */}
        <div className="hero-glow hero-glow-primary absolute -right-40 top-40 z-0 h-[600px] w-[600px] rounded-full bg-primary/[0.08] blur-[160px]" />
        <div className="hero-glow hero-glow-secondary absolute -left-48 bottom-16 z-0 h-[500px] w-[500px] rounded-full bg-emerald-400/[0.06] blur-[140px]" />

        {/* Grain */}
        <div
          aria-hidden
          className="hero-grain pointer-events-none absolute inset-0 z-[2]"
        />

        {/* Grid */}
        <div className="hero-grid absolute inset-0 z-[2]" />

        {/* Vertical line */}
        <div className="absolute left-8 top-0 z-[2] hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent lg:block" />

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="px-6 pb-20 pt-36 sm:px-10 md:pt-44 lg:pb-28">
            <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-4xl">
              {/* Breadcrumb */}
              <nav
                aria-label="Fil d'Ariane"
                className="mb-10 flex items-center gap-2 text-[11px] text-white/30"
              >
                <Link
                  href="/"
                  className="transition-colors duration-200 hover:text-white/50"
                >
                  Accueil
                </Link>
                <span className="text-white/15">/</span>
                <Link
                  href="/actualites"
                  className="transition-colors duration-200 hover:text-white/50"
                >
                  Actualités
                </Link>
                <span className="text-white/15">/</span>
                <span className="text-white/45">{article.category}</span>
              </nav>

              {/* Eyebrow pill */}
              <div className="mb-10 inline-flex items-center">
                <div className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/[0.08]">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/85">
                    {article.category}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/[0.08] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.5, delay: 0.2, ease: EASE_OUT }}
                className="max-w-3xl font-serif text-[clamp(2rem,4.5vw,3.8rem)] font-black leading-[0.95] tracking-[-0.02em] text-white/95"
              >
                {article.title}
              </motion.h1>

              {/* Meta row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.35, ease: EASE_OUT }}
                className="mt-10 flex flex-wrap items-center gap-6"
              >
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/25">
                    Publié le
                  </p>
                  <p className="mt-1 text-[13px] text-white/55">
                    {formatDate(article.date)}
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/25">
                    Lecture
                  </p>
                  <p className="mt-1 text-[13px] text-white/55">
                    {article.readTime}
                  </p>
                </div>

                <div className="h-8 w-px bg-white/[0.08]" />

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/25">
                    Auteur
                  </p>
                  <p className="mt-1 text-[13px] font-medium text-white/70">
                    {article.author.name}
                    <span className="ml-1 text-white/30">
                      · {article.author.role}
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.45, ease: EASE_OUT }}
                className="mt-7 flex flex-wrap gap-2"
              >
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-white/35"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.55 }}
                className="mt-12 h-px w-28 bg-gradient-to-r from-white/20 to-transparent"
              />
            </div>
          </div>
        </div>

        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════
          ARTICLE BODY
          ═══════════════════════════════════════════════════ */}
      <section className="relative bg-white" ref={contentRef}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-6 py-16 sm:px-10 md:py-24 lg:grid-cols-[1fr_280px] lg:gap-16">
          {/* ── Main content ── */}
          <article className="mx-auto max-w-3xl lg:mx-0">
            {/* Lead paragraph */}
            <p className="mb-14 border-l-[3px] border-primary pl-6 text-[18px] font-medium leading-[1.9] text-[#111A4A]/80">
              {article.excerpt}
            </p>

            {/* Body paragraphs */}
            <div className="space-y-8">
              {content.map((section, index) => {
                // ## Heading
                if (section.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      id={`section-${headings.findIndex((h) => h.index === index)}`}
                      className="mt-16 font-serif text-2xl font-bold text-[#111A4A] md:text-3xl"
                    >
                      {section.replace("## ", "")}
                    </h2>
                  )
                }

                // ### Sub-heading
                if (section.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="mt-10 font-serif text-xl font-bold text-[#111A4A]"
                    >
                      {section.replace("### ", "")}
                    </h3>
                  )
                }

                // > Blockquote
                if (section.startsWith("> ")) {
                  return (
                    <blockquote
                      key={index}
                      className="my-10 border-l-[3px] border-primary/40 bg-primary/[0.03] px-6 py-5"
                    >
                      <p className="text-[15px] font-medium italic leading-[1.8] text-[#111A4A]/70">
                        {section.replace("> ", "")}
                      </p>
                    </blockquote>
                  )
                }

                // ![caption](url) — Image
                if (section.startsWith("![")) {
                  const parsed = parseImageMarkdown(section)
                  if (parsed) {
                    return (
                      <figure key={index} className="my-10">
                        <div className="relative overflow-hidden border border-[#111A4A]/[0.06]">
                          <img
                            src={parsed.src}
                            alt={parsed.caption}
                            className="aspect-[16/9] w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        {parsed.caption && (
                          <figcaption className="mt-3 text-center text-[12px] leading-6 text-[#7C7F88]">
                            {parsed.caption}
                          </figcaption>
                        )}
                      </figure>
                    )
                  }
                }

                // - List items
                if (section.startsWith("- ")) {
                  const items = section
                    .split("\n")
                    .filter((l) => l.startsWith("- "))
                  return (
                    <ul key={index} className="my-6 space-y-3">
                      {items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[16px] leading-[1.85] text-[#7C7F88]"
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
                    className="text-[16px] leading-[1.85] text-[#7C7F88]"
                  >
                    {section}
                  </p>
                )
              })}
            </div>

            {/* Author card */}
            <div className="mt-20 border border-[#111A4A]/[0.06] bg-white p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-primary/15 bg-primary/5">
                  <span className="font-serif text-xl font-bold text-primary">
                    {article.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7C7F88]/40">
                    Rédigé par
                  </p>
                  <p className="mt-1 text-lg font-bold text-[#111A4A]">
                    {article.author.name}
                  </p>
                  <p className="text-sm text-[#7C7F88]">
                    {article.author.role}
                  </p>
                  <p className="mt-3 text-[13px] leading-6 text-[#7C7F88]">
                    Expert en {article.category.toLowerCase()} avec plus de 15
                    ans d&apos;expérience dans l&apos;accompagnement des
                    entreprises en RDC et dans la sous-région.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">
              {/* Share */}
              <div className="border border-[#111A4A]/[0.06] bg-white p-6">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7C7F88]/40">
                  Partager
                </p>
                <div className="flex gap-2">
                  {SHARE_PLATFORMS.map((p) => (
                    <a
                      key={p.label}
                      href={p.href}
                      className="inline-flex h-10 w-10 items-center justify-center border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.01] font-mono text-[11px] text-[#7C7F88]/40 transition-all duration-200 hover:border-primary/20 hover:text-primary"
                    >
                      {p.label}
                    </a>
                  ))}
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.01] font-mono text-[14px] text-[#7C7F88]/40 transition-all duration-200 hover:border-primary/20 hover:text-primary"
                    aria-label="Sauvegarder"
                  >
                    &lowast;
                  </button>
                </div>
              </div>

              {/* Table of contents */}
              {headings.length > 0 && (
                <div className="border border-[#111A4A]/[0.06] bg-white p-6">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7C7F88]/40">
                    Dans cet article
                  </p>
                  <nav className="space-y-2">
                    {headings.map((heading, i) => (
                      <a
                        key={i}
                        href={`#section-${i}`}
                        className="group/toc flex items-center gap-3 text-[13px] leading-6 text-[#7C7F88]/50 transition-colors duration-200 hover:text-primary"
                      >
                        <span className="font-mono text-[9px] text-[#7C7F88]/30 transition-colors group-hover/toc:text-primary/60">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {heading.text.replace("## ", "")}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Tags */}
              <div className="border border-[#111A4A]/[0.06] bg-white p-6">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7C7F88]/40">
                  Thématiques
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block border border-primary/15 bg-primary/5 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.08em] text-primary/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          RELATED ARTICLES
          ═══════════════════════════════════════════════════ */}
      <section className="bg-canvas px-10 py-section">
        <div className="w-full">
          {/* Header */}
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="mb-5 inline-flex items-center">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  À lire également
                </span>
              </div>
              <h2 className="font-serif text-3xl text-[#111A4A] md:text-4xl">
                Articles{" "}
                <span className="opacity-40">recommandés</span>
              </h2>
            </div>
            <Link
              href="/actualites"
              className="group hidden items-center gap-2 text-[13px] font-medium text-primary transition-all hover:gap-2.5 md:inline-flex"
            >
              Tous les articles
              <span className="text-[14px] leading-none transition-transform duration-200 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </Link>
          </div>

          {/* Cards — all equal */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.slice(0, 3).map((related) => (
              <Link
                key={related.slug}
                href={`/actualites/${related.slug}`}
                className="group relative flex h-full flex-col border border-[#111A4A]/[0.06] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#111A4A]/12 hover:shadow-[0_8px_30px_rgba(17,26,74,0.06)]"
              >
                {/* Image */}
                <div className="relative h-[220px] shrink-0 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute left-4 top-4">
                    <span className="inline-block border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
                      {related.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#7C7F88]/50">
                      {formatDate(related.date)}
                    </span>
                    <span className="h-0.5 w-0.5 rounded-full bg-[#111A4A]/10" />
                    <span className="font-mono text-[10px] text-[#7C7F88]/50">
                      {related.readTime}
                    </span>
                  </div>

                  <h3 className="mb-3 font-serif text-xl leading-snug text-[#111A4A] transition-colors duration-300 group-hover:text-primary">
                    {related.title}
                  </h3>

                  <p className="line-clamp-3 flex-1 text-[13px] leading-6 text-[#7C7F88]">
                    {related.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#111A4A]/[0.06] pt-5">
                    <div>
                      <p className="text-[13px] font-medium text-[#111A4A]">
                        {related.author.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[#7C7F88]">
                        {related.author.role}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                      Lire
                      <span className="text-[13px] leading-none">
                        &rarr;
                      </span>
                    </span>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="h-[2px] w-0 bg-primary/40 transition-all duration-700 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Bottom strip */}
          <div className="mt-5 flex flex-col items-center justify-between gap-4 border border-[#111A4A]/[0.06] bg-white px-8 py-5 md:flex-row">
            <Link
              href="/actualites"
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#7C7F88] transition-colors duration-200 hover:text-primary"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
                &larr;
              </span>
              Retour aux actualités
            </Link>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 text-[13px] font-medium text-primary transition-all hover:gap-2.5"
            >
              Une question sur ce sujet ?
              <span className="text-[14px] leading-none transition-transform duration-200 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Back to top ── */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Remonter en haut"
        className={`fixed bottom-8 right-8 z-40 inline-flex h-12 w-12 items-center justify-center border border-[#111A4A]/[0.06] bg-white font-mono text-[18px] text-[#7C7F88]/50 shadow-lg transition-all duration-300 hover:border-primary/30 hover:text-primary ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        &uarr;
      </button>
    </>
  )
}

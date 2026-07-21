// src/components/actualites/actualites-grid.tsx
"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Article } from "@/content/actualites/types"
import {
  CATEGORIES,
  getArticlesByCategory,
  formatDate,
} from "@/content/actualites/articles"

// ─── Constants ───────────────────────────────────────────
const EASE_OUT = [0.1, 0, 0.1, 1] as const

// ─── Props ───────────────────────────────────────────────
interface Props {
  articles: Article[]
}

// ─── Article Card ────────────────────────────────────────

function ArticleCard({
  article,
  index,
  isInView,
}: {
  article: Article
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={
        isInView
          ? {
              opacity: [0, 1, 1],
              y: [20, 0, 0],
              filter: ["blur(4px)", "blur(0px)", "blur(0px)"],
            }
          : {}
      }
      transition={{
        duration: 1.5,
        delay: 0.3 + index * 0.06,
        ease: EASE_OUT,
      }}
    >
      <Link
        href={`/actualites/${article.slug}`}
        className="group relative flex h-full flex-col border border-[#111A4A]/[0.06] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#111A4A]/12 hover:shadow-[0_8px_30px_rgba(17,26,74,0.06)]"
      >
        {/* Image — fixed height */}
        <div className="relative h-[220px] shrink-0 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />

          {/* Gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Category badge — top left */}
          <div className="absolute left-4 top-4">
            <span className="inline-block border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
              {article.category}
            </span>
          </div>

          {/* Number — top right */}
          <div className="absolute right-4 top-4">
            <span className="font-mono text-[10px] text-white/30">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Content — flex-1 pushes footer down uniformly */}
        <div className="flex flex-1 flex-col p-6">
          {/* Meta */}
          <div className="mb-4 flex items-center gap-2">
            <span className="font-mono text-[10px] text-[#7C7F88]/50">
              {formatDate(article.date)}
            </span>
            <span className="h-0.5 w-0.5 rounded-full bg-[#111A4A]/10" />
            <span className="font-mono text-[10px] text-[#7C7F88]/50">
              {article.readTime}
            </span>
          </div>

          {/* Title — fixed 3-line height */}
          <h3 className="mb-3 font-serif text-xl leading-snug text-[#111A4A] transition-colors duration-300 group-hover:text-primary">
            {article.title}
          </h3>

          {/* Excerpt — fixed 3-line clamp */}
          <p className="line-clamp-3 flex-1 text-[13px] leading-6 text-[#7C7F88]">
            {article.excerpt}
          </p>

          {/* Footer — always at bottom */}
          <div className="mt-6 flex items-center justify-between border-t border-[#111A4A]/[0.06] pt-5">
            {/* Author */}
            <div>
              <p className="text-[13px] font-medium text-[#111A4A]">
                {article.author.name}
              </p>
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#7C7F88]">
                {article.author.role}
              </p>
            </div>

            {/* CTA */}
            <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
              Lire
              <ArrowRight size={13} />
            </span>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="h-[2px] w-0 bg-primary/40 transition-all duration-700 group-hover:w-full" />
      </Link>
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function ActualitesGrid({ articles }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredArticles = getArticlesByCategory(activeCategory).filter(
    (a) => !a.featured
  )

  return (
    <section
      ref={sectionRef}
      className="bg-white px-10 py-section"
    >
      <div className="w-full">
        {/* ── Header ── */}
        <div className="mb-10 max-w-3xl lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
            className="mb-5 inline-flex items-center"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Tous nos articles
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={
              isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
            }
            transition={{ duration: 1.5, delay: 0.2, ease: EASE_OUT }}
            className="max-w-2xl text-[40px] font-normal leading-tight tracking-tight text-[#111A4A]"
          >
            Explorer par{" "}
            <span className="opacity-40">thématique.</span>
          </motion.h2>
        </div>

        {/* ── Category filters ── */}
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={
            isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
          }
          transition={{ duration: 1.2, delay: 0.25, ease: EASE_OUT }}
          className="mb-10 flex flex-wrap items-center gap-3"
        >
          {CATEGORIES.map((cat) => {
            const isActive = cat.slug === activeCategory
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setActiveCategory(cat.slug)}
                className={`inline-flex items-center gap-2 border px-5 py-3 text-[13px] font-medium transition-all duration-200 ${
                  isActive
                    ? "border-primary/30 bg-primary/5 text-primary"
                    : "border-[#111A4A]/[0.06] bg-white text-[#7C7F88] hover:border-primary/20 hover:text-[#111A4A]"
                }`}
              >
                {cat.label}
                <span
                  className={`font-mono text-[10px] ${
                    isActive ? "text-primary/60" : "text-[#7C7F88]/40"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-10 h-px bg-[#111A4A]/[0.06]"
        />

        {/* ── Articles grid — all equal ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article, index) => (
            <ArticleCard
              key={article.slug}
              article={article}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* ── Empty state ── */}
        {filteredArticles.length === 0 && (
          <div className="border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.02] p-16 text-center">
            <p className="text-sm text-[#7C7F88]">
              Aucun article dans cette catégorie pour le moment.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

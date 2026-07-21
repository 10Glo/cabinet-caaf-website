// src/components/actualites/actualites-featured.tsx
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Article } from "@/content/actualites/types"
import { formatDate } from "@/content/actualites/articles"

// ─── Constants ───────────────────────────────────────────
const EASE_OUT = [0.1, 0, 0.1, 1] as const

// ─── Props ───────────────────────────────────────────────
interface Props {
  article: Article
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function ActualitesFeatured({ article }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section
      ref={sectionRef}
      className="bg-canvas px-10 py-section"
    >
      <div className="w-full">
        {/* ── Eyebrow ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
          className="mb-10 inline-flex items-center"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            À la une
          </span>
        </motion.div>

        {/* ── Featured card ── */}
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
          transition={{ duration: 1.5, delay: 0.2, ease: EASE_OUT }}
        >
          <Link
            href={`/actualites/${article.slug}`}
            className="group relative block overflow-hidden border border-[#111A4A]/[0.06] bg-white"
          >
            {/* Full-bleed image */}
            <div className="relative h-125 w-full md:h-145 lg:h-155">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Gradient overlay from bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/50 to-transparent" />

              {/* Content overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 lg:p-14">
                {/* Category badge */}
                <span className="mb-5 inline-block border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
                  {article.category}
                </span>

                {/* Title */}
                <h2 className="max-w-3xl font-serif text-2xl leading-snug text-white transition-colors duration-300 group-hover:text-primary md:text-3xl lg:text-4xl">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                  {article.excerpt}
                </p>

                {/* Bottom row */}
                <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-6">
                    {/* Author */}
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                        Auteur
                      </p>
                      <p className="mt-1 text-sm font-medium text-white/80">
                        {article.author.name}
                      </p>
                    </div>

                    {/* Date */}
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                        Publié le
                      </p>
                      <p className="mt-1 text-sm text-white/60">
                        {formatDate(article.date)}
                      </p>
                    </div>

                    {/* Read time */}
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                        Lecture
                      </p>
                      <p className="mt-1 text-sm text-white/60">
                        {article.readTime}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <span className="inline-flex shrink-0 items-center gap-2 text-[13px] font-medium text-primary transition-all group-hover:gap-2.5">
                    Lire l&apos;article
                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// src/components/expertise/shared/expertise-cas.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { getIcon } from "@/content/expertises/icon-registry"
import type { ExpertiseCasConfig } from "@/content/expertises/types"

interface Props {
  config: ExpertiseCasConfig
}

export function ExpertiseCas({ config }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCase = config.items[activeIndex]
  const ActiveSectorIcon = getIcon(activeCase.sectorIcon)   // ← résolution runtime

  const goTo = (index: number) => {
    if (index >= 0 && index < config.items.length) setActiveIndex(index)
  }

  return (
    <section className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* Heading + Nav */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {config.eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              {config.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
              {config.description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Cas précédent"
              className="inline-flex h-12 w-12 items-center justify-center border border-hairline bg-white text-brand-navy/50 transition-colors hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === config.items.length - 1}
              aria-label="Cas suivant"
              className="inline-flex h-12 w-12 items-center justify-center border border-hairline bg-white text-brand-navy/50 transition-colors hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
            <span className="ml-2 font-mono text-[12px] text-ink/30">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(config.items.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Left */}
          <article className="border border-hairline bg-white p-8 md:col-span-7 md:p-10">
            <div className="max-w-2xl">
              <div className="mb-8 inline-flex items-center gap-3 border border-primary/15 bg-primary/5 px-4 py-2">
                <ActiveSectorIcon className="h-4 w-4 text-primary" strokeWidth={1.7} />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-primary/80">
                  {activeCase.sector}
                </span>
                <div className="h-3 w-px bg-primary/20" />
                <span className="text-[11px] text-primary/50">{activeCase.location}</span>
              </div>

              <h3 className="font-serif text-2xl leading-snug text-brand-navy md:text-3xl">
                {activeCase.title}
              </h3>

              <div className="mt-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-primary/40" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/35">
                    Contexte
                  </span>
                </div>
                <p className="text-sm leading-7 text-ink/60 md:text-base">
                  {activeCase.context}
                </p>
              </div>

              <div className="mt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-primary/40" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/35">
                    Notre approche
                  </span>
                </div>
                <ul className="grid gap-3">
                  {activeCase.approach.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border border-hairline bg-surface-card px-5 py-4"
                    >
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm leading-6 text-ink/65">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          {/* Right */}
          <div className="flex flex-col gap-5 md:col-span-5">
            <article className="flex-1 border border-white/10 bg-surface-dark p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-primary/40" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35">
                  Résultats obtenus
                </span>
              </div>
              <ul className="grid gap-4">
                {activeCase.results.map((result) => {
                  const ResultIcon = getIcon(result.icon)   // ← résolution runtime
                  return (
                    <li
                      key={result.label}
                      className="flex items-start gap-4 border border-white/6 bg-white/3 px-5 py-4"
                    >
                      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-primary">
                        <ResultIcon className="h-4 w-4" strokeWidth={1.7} />
                      </div>
                      <span className="text-sm leading-6 text-white/65">
                        {result.label}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </article>

            <article className="border border-primary/20 bg-primary/5 p-8 md:p-10">
              <svg
                className="mb-4 h-8 w-8 text-primary/30"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <blockquote className="text-[15px] font-medium italic leading-7 text-brand-navy/80 md:text-base">
                {activeCase.quote}
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-px w-6 bg-primary/30" />
                <span className="text-[12px] font-semibold text-brand-navy/50">
                  {activeCase.quoteAuthor}
                </span>
              </div>
            </article>
          </div>

          {/* Selector pills */}
          <div className="flex flex-wrap items-center gap-3 md:col-span-12">
            {config.items.map((cs, index) => {
              const isActive = index === activeIndex
              const Icon = getIcon(cs.sectorIcon)   // ← résolution runtime
              return (
                <button
                  key={cs.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`inline-flex items-center gap-2.5 border px-5 py-3 text-[13px] font-medium transition-all ${
                    isActive
                      ? "border-primary/30 bg-primary/5 text-primary"
                      : "border-hairline bg-white text-ink/45 hover:border-primary/20 hover:text-ink/70"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.7} />
                  {cs.sector}
                </button>
              )
            })}
            <div className="ml-auto hidden md:block">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
              >
                {config.sectionCta}
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
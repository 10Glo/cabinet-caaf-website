// src/components/expertise/shared/expertise-secteurs.tsx
"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getIcon } from "@/content/expertises/icon-registry"
import type { ExpertiseSecteursConfig } from "@/content/expertises/types"
import { SectionEyebrow } from "@/components/shared/section-eyebrow"

interface Props {
  config: ExpertiseSecteursConfig
}

export function ExpertiseSecteurs({ config }: Props) {
  const featured = config.items.filter((s) => s.featured)
  const others = config.items.filter((s) => !s.featured)

  return (
    <section className="bg-white px-10 py-section">
      <div className="w-full">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
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

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Featured */}
          {featured.map((sector) => {
            const Icon = getIcon(sector.icon)   // ← résolution runtime
            return (
              <article
                key={sector.title}
                className="group relative overflow-hidden border border-hairline bg-canvas p-8 transition-colors hover:bg-canvas/80 md:col-span-6 md:p-10"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 text-brand-navy opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.06]">
                  <Icon className="h-40 w-40" strokeWidth={0.6} />
                </div>
                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-primary/20 bg-white text-primary">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>
                  <h3 className="font-serif text-2xl text-brand-navy md:text-3xl">
                    {sector.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-ink/60 md:text-base">
                    {sector.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {sector.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center border border-primary/15 bg-primary/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}

          {/* Others — Dark panel */}
          {others.length > 0 && (
            <div className="border border-hairline bg-surface-dark p-8 md:col-span-12 md:p-10">
              <SectionEyebrow className="mb-6" tone="muted-light">
                Autres secteurs d'intervention
              </SectionEyebrow>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {others.map((sector) => {
                  const Icon = getIcon(sector.icon)   // ← résolution runtime
                  return (
                    <div
                      key={sector.title}
                      className="group flex items-start gap-4 border border-white/6 bg-white/3 p-5 transition-colors hover:border-white/12 hover:bg-white/6"
                    >
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-primary">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[15px] font-semibold leading-snug text-white/90">
                          {sector.title}
                        </h4>
                        <p className="mt-2 text-[13px] leading-6 text-white/40">
                          {sector.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {sector.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center bg-white/6 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.06em] text-white/35"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Strip */}
          <div className="flex items-center justify-between border border-hairline bg-white p-8 md:col-span-12 md:px-10">
            <p className="text-sm text-ink/50 md:text-base">
              {config.stripText}{" "}
              <span className="text-brand-navy">{config.stripHighlight}</span>
            </p>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
            >
              {config.stripCta}
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
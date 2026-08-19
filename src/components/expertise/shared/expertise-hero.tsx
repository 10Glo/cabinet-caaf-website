// src/components/expertise/shared/expertise-hero.tsx
"use client"

import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { ExpertiseHeroConfig } from "@/content/expertises/types"
import { SectionEyebrow } from "@/components/shared/section-eyebrow"

interface ExpertiseHeroProps {
  config: ExpertiseHeroConfig
  breadcrumb: { label: string; href: string }[]
}

export function ExpertiseHero({ config }: ExpertiseHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={config.image.src}
          alt={config.image.alt ?? ""}
          className="h-full w-full object-cover grayscale"
          style={{ opacity: 0.12 }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-navy/80 via-brand-navy/65 to-brand-navy" />
        <div className="absolute inset-0 bg-linear-to-r from-brand-navy via-brand-navy/85 to-transparent" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          opacity: 0.025,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 z-0 h-130 w-130 rounded-full bg-primary/6 blur-[160px]" />
      <div className="absolute left-10 top-0 z-0 hidden h-full w-px bg-linear-to-b from-transparent via-white/6 to-transparent lg:block" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-16 pt-32 sm:px-10 md:pt-40 lg:pb-24">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Fil d'Ariane"
            className="mb-8 flex items-center gap-2 text-[12px] text-white/40"
          >
            
          </nav>

          {/* Eyebrow */}
          <SectionEyebrow className="mb-6 inline-flex">
            {config.category}
          </SectionEyebrow>

          {/* Heading */}
          <h1 className="max-w-3xl font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            {config.title}
            <br />
            <span className="bg-linear-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
              {config.titleAccent}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.8] text-white/55 md:text-lg">
            {config.description}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={config.ctaPrimary.href}
              className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-primary-active"
            >
              {config.ctaPrimary.label}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href={config.ctaSecondary.href}
              className="inline-flex items-center justify-center gap-3 border border-white/15 bg-white/3 px-8 py-4 text-[14px] font-semibold text-white/80 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/8 hover:text-white"
            >
              {config.ctaSecondary.label}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/6 pt-6 md:grid-cols-4">
            {config.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl text-white">{stat.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
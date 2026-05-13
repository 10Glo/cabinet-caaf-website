// src/components/expertise/shared/expertise-cta.tsx
"use client"

import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { getIcon } from "@/content/expertises/icon-registry"
import type { ExpertiseCtaConfig } from "@/content/expertises/types"

interface Props {
  config: ExpertiseCtaConfig
}

export function ExpertiseCta({ config }: Props) {
  const WatermarkIcon = getIcon(config.watermarkIcon)   // ← résolution runtime

  return (
    <section className="bg-white px-10 py-section">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Main card */}
          <article className="relative overflow-hidden border border-white/10 bg-surface-dark p-8 md:col-span-8 md:p-10 lg:p-14">
            <div className="pointer-events-none absolute -right-10 -top-10 text-white opacity-[0.02]">
              <WatermarkIcon className="h-64 w-64" strokeWidth={0.5} />
            </div>
            <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-[320px] rounded-full bg-primary/4 blur-[120px]" />

            <div className="relative z-10 max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  {config.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
                {config.title}
                <br />
                <span className="bg-linear-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
                  {config.titleAccent}
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 md:text-base">
                {config.description}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {config.trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-[13px] text-white/45">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={config.primaryCta.href}
                  className="group/btn inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-primary-active"
                >
                  {config.primaryCta.label}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </Link>
                <Link
                  href={config.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-3 border border-white/15 bg-white/3 px-8 py-4 text-[14px] font-semibold text-white/80 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/8 hover:text-white"
                >
                  <Phone size={15} strokeWidth={1.7} />
                  {config.secondaryCta.label}
                </Link>
              </div>
            </div>
          </article>

          {/* Contact options */}
          <div className="flex flex-col gap-5 md:col-span-4">
            {config.contactOptions.map((option) => {
              const Icon = getIcon(option.icon)   // ← résolution runtime
              return (
                <Link
                  key={option.title}
                  href={option.href}
                  className={`group flex flex-1 flex-col justify-between border p-8 transition-all ${
                    option.primary
                      ? "border-primary/20 bg-primary/5 hover:border-primary/35 hover:bg-primary/8"
                      : "border-hairline bg-canvas hover:border-primary/20 hover:bg-canvas/80"
                  }`}
                >
                  <div>
                    <div
                      className={`mb-5 inline-flex h-12 w-12 items-center justify-center border transition-colors ${
                        option.primary
                          ? "border-primary/25 bg-white text-primary"
                          : "border-hairline bg-white text-brand-navy/40 group-hover:text-primary"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <h3
                      className={`text-[16px] font-semibold transition-colors ${
                        option.primary
                          ? "text-brand-navy"
                          : "text-brand-navy/80 group-hover:text-brand-navy"
                      }`}
                    >
                      {option.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-6 text-ink/45">
                      {option.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <span
                      className={`inline-flex items-center gap-2 text-[13px] font-medium transition-all group-hover:gap-3 ${
                        option.primary
                          ? "text-primary"
                          : "text-ink/40 group-hover:text-primary"
                      }`}
                    >
                      {option.cta}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Bottom strip */}
          <div className="flex flex-col items-center justify-between gap-6 border border-hairline bg-white px-8 py-6 sm:flex-row md:col-span-12 md:px-10">
            <div className="flex flex-wrap items-center gap-6">
              {config.stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="font-serif text-xl text-brand-navy">{stat.value}</span>
                  <span className="text-[11px] uppercase tracking-[0.12em] text-ink/35">
                    {stat.label}
                  </span>
                  {i < config.stats.length - 1 && (
                    <div className="hidden h-4 w-px bg-hairline sm:block" />
                  )}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
            >
              Toutes nos coordonnées
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
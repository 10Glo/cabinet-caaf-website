// src/components/ui/success-story-feature.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import type { StaticImageData } from "next/image"
import {
  ArrowRight,
  FileSearch,
  ShieldCheck,
  Landmark,
  TrendingUp,
  BadgeCheck,
} from "lucide-react"

type SuccessMetric = {
  value: string
  label: string
}

type SuccessStoryFeatureProps = {
  eyebrow?: string
  title: string
  description: string
  metrics: SuccessMetric[]
  image?: string | StaticImageData
  imageAlt?: string
  quote?: string
  sector?: string
  ctaHref?: string
  ctaLabel?: string
}

export function SuccessStoryFeature({
  eyebrow = "Étude de cas",
  title,
  description,
  metrics,
  image,
  imageAlt = "Illustration étude de cas",
  quote,
  sector = "Secteur stratégique",
  ctaHref = "#contact",
  ctaLabel = "Lire l’étude complète",
}: SuccessStoryFeatureProps) {
  return (
    <section className="px-10 pb-section">
      <div className="overflow-hidden border border-hairline bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <div className="p-8 md:p-12 lg:p-14">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-3">
                <div className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {eyebrow}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 border border-hairline bg-canvas px-3 py-1.5">
                <Landmark className="h-4 w-4 text-primary" strokeWidth={1.6} />
                <span className="text-[11px] uppercase tracking-[0.14em] text-ink/45">
                  {sector}
                </span>
              </div>
            </div>

            <h2 className="max-w-2xl font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              {title}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
              {description}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border border-hairline bg-surface-card/40 px-5 py-5"
                >
                  <div className="font-serif text-3xl leading-none text-primary">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.14em] text-ink/40">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {quote && (
              <div className="mt-10 border-l-2 border-primary pl-5">
                <p className="font-serif text-xl italic leading-relaxed text-brand-navy">
                  “{quote}”
                </p>
              </div>
            )}

            <div className="mt-10">
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-3 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
              >
                {ctaLabel}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative border-l border-hairline bg-surface-dark">
            {image ? (
              <div className="relative h-full min-h-[320px]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/40 to-surface-dark/20" />
              </div>
            ) : (
              <div className="flex h-full min-h-[320px] items-end p-8 md:p-10">
                <div className="w-full border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5">
                      <FileSearch className="h-5 w-5 text-primary" strokeWidth={1.6} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Intervention structurée
                      </p>
                      <p className="text-xs uppercase tracking-[0.14em] text-white/35">
                        Audit · Conseil · conformité
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Diagnostic initial",
                        icon: FileSearch,
                      },
                      {
                        label: "Sécurisation réglementaire",
                        icon: ShieldCheck,
                      },
                      {
                        label: "Optimisation financière",
                        icon: TrendingUp,
                      },
                      {
                        label: "Mise en conformité durable",
                        icon: BadgeCheck,
                      },
                    ].map((step) => (
                      <div
                        key={step.label}
                        className="flex items-center gap-3 border border-white/8 bg-white/[0.03] px-4 py-3"
                      >
                        <step.icon className="h-4 w-4 text-primary" strokeWidth={1.6} />
                        <span className="text-sm text-white/70">{step.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {!image && (
              <div className="pointer-events-none absolute right-0 top-0 h-24 w-24">
                <div className="absolute right-0 top-0 h-px w-24 bg-gradient-to-l from-primary/50 to-transparent" />
                <div className="absolute right-0 top-0 h-24 w-px bg-gradient-to-b from-primary/50 to-transparent" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
// src/components/ui/featured-quote-section.tsx
"use client"

import { Quote, ShieldCheck } from "lucide-react"

type FeaturedQuoteSectionProps = {
  quote?: string
  author?: string
  role?: string
  note?: string
}

export function FeaturedQuoteSection({
  quote = "Notre cabinet existe pour apporter la clarté, la sécurité et la confiance nécessaires aux projets les plus ambitieux de la RDC, afin qu’ils puissent atteindre une maturité conforme aux standards internationaux.",
  author = "Managing Partner",
  role = "CAAF SAS",
  note = "Vision stratégique · Indépendance · Rigueur",
}: FeaturedQuoteSectionProps) {
  return (
    <section className="border-y border-hairline bg-surface-soft/40 px-10 py-section">
      <div className="w-full">
        <div className="grid grid-cols-1 border border-hairline bg-white lg:grid-cols-[260px_1fr]">
          {/* Left rail */}
          <div className="flex flex-col justify-between border-b border-hairline bg-surface-dark p-8 text-white lg:border-b-0 lg:border-r lg:border-r-white/10">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Parole de direction
                </span>
              </div>

              <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5">
                <Quote className="h-6 w-6 text-primary" strokeWidth={1.7} />
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  strokeWidth={1.7}
                />
                <p className="text-sm leading-7 text-white/60">
                  Une vision fondée sur la qualité d’exécution, la conformité et
                  la confiance.
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35">
                  Signature
                </p>
                <p className="mt-2 text-sm font-medium text-white">{author}</p>
                <p className="text-xs uppercase tracking-[0.14em] text-white/40">
                  {role}
                </p>
              </div>
            </div>
          </div>

          {/* Main quote */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Conviction du cabinet
              </span>
            </div>

            <blockquote className="max-w-4xl font-serif text-3xl italic leading-relaxed text-brand-navy md:text-4xl">
              “{quote}”
            </blockquote>

            <div className="mt-10 flex flex-col gap-4 border-t border-hairline pt-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-brand-navy">{author}</p>
                <p className="text-xs uppercase tracking-[0.14em] text-ink/40">
                  {role}
                </p>
              </div>

              <p className="text-xs uppercase tracking-[0.14em] text-ink/35">
                {note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
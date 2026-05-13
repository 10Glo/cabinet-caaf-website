// src/components/ui/sectors-quote.tsx
"use client"

import { Scale } from "lucide-react"

type SectorsQuoteProps = {
  quote?: string
  label?: string
}

export function SectorsQuote({
  quote = "Naviguer dans le cadre réglementaire complexe de la RDC exige plus qu'une compétence technique — cela requiert une profondeur locale et un standard d'intégrité mondial.",
  label = "Assurance réglementaire RDC",
}: SectorsQuoteProps) {
  return (
    <section className="border-y border-hairline bg-white px-10 py-section">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          {/* Vertical accent */}
          <div className="mb-8 h-12 w-px bg-primary" />

          {/* Icon */}
          <div className="mb-8 flex h-14 w-14 items-center justify-center border border-primary/20 bg-primary/5">
            <Scale className="h-7 w-7 text-primary" strokeWidth={1.5} />
          </div>

          {/* Quote */}
          <blockquote className="max-w-3xl font-serif text-3xl italic leading-relaxed text-brand-navy md:text-4xl">
            &ldquo;{quote}&rdquo;
          </blockquote>

          {/* Label */}
          <div className="mt-8 flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              {label}
            </p>
            <div className="h-px w-8 bg-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
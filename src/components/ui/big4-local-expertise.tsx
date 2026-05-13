// src/components/ui/big4-local-expertise.tsx
"use client"

import {
  CheckCircle2,
  Quote,
  Globe2,
  Languages,
  ShieldCheck,
  MapPinned,
} from "lucide-react"

const DIFFERENTIATORS = [
  {
    title: "Maîtrise OHADA & IFRS",
    description:
      "Une expertise approfondie des référentiels comptables et réglementaires applicables aux groupes locaux et internationaux.",
    icon: ShieldCheck,
  },
  {
    title: "Conseil multilingue",
    description:
      "Des échanges fluides en français et en anglais, avec une capacité d’adaptation au contexte opérationnel local.",
    icon: Languages,
  },
  {
    title: "Lecture fine du terrain",
    description:
      "Une compréhension concrète des enjeux propres au marché congolais, là où les approches trop centralisées montrent leurs limites.",
    icon: MapPinned,
  },
]

export function Big4LocalExpertiseSection() {
  return (
    <section className="border-y border-hairline/60 bg-surface-soft/50 px-10 py-section">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* ── Left content ── */}
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Notre différence
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
            Standards internationaux,
            <br />
            <span className="text-primary">
              expertise locale inégalée
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/60">
            CAAF SAS conjugue la rigueur méthodologique des grands réseaux
            internationaux avec une compréhension nuancée du tissu économique,
            réglementaire et opérationnel de la RDC. Cette double lecture nous
            permet d’apporter des recommandations plus justes, plus concrètes et
            immédiatement activables.
          </p>

          <div className="mt-10 space-y-6">
            {DIFFERENTIATORS.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-primary/20 bg-primary/5">
                  <item.icon className="h-5 w-5 text-primary" strokeWidth={1.7} />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-ink/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right testimonial card ── */}
        <div className="relative">
          {/* decorative block */}
          <div className="absolute -left-4 -top-4 h-24 w-24 bg-primary/10" />

          <div className="relative border border-white/10 bg-surface-dark p-10 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            <Quote
              className="mb-6 h-12 w-12 text-primary/70"
              strokeWidth={1.5}
            />

            <blockquote className="max-w-xl font-serif text-2xl italic leading-relaxed text-white md:text-[30px]">
              “CAAF a su comprendre les exigences réglementaires propres à nos
              opérations en RDC tout en répondant parfaitement aux standards de
              reporting et d’audit exigés par notre siège international.”
            </blockquote>

            <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="flex h-12 w-12 items-center justify-center bg-white/10">
                <Globe2 className="h-5 w-5 text-primary" strokeWidth={1.7} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  CFO, Groupe minier international
                </p>
                <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                  Opérations Lubumbashi
                </p>
              </div>
            </div>
          </div>

          {/* bottom accent line */}
          <div className="mt-4 flex items-center gap-3">
            <CheckCircle2 className="h-4 w-4 text-primary" strokeWidth={1.7} />
            <p className="text-xs text-ink/45">
              Approche conforme aux attentes des sièges internationaux, adaptée
              aux réalités locales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
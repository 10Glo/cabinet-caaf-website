// src/components/ui/sector-approach-difference.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  ShieldCheck,
  Layers3,
  Target,
  Users,
  Globe2,
  Scale,
  CheckCircle2,
  X,
  TrendingUp,
  BookOpen,
  Landmark,
} from "lucide-react"

const PILLARS = [
  {
    number: "01",
    title: "Immersion sectorielle",
    description:
      "Nous ne plaquons pas une méthodologie générique sur un secteur. Chaque mission démarre par une immersion dans les réalités opérationnelles, réglementaires et économiques propres à l'industrie du client.",
    icon: Target,
    detail: "Compréhension du terrain avant toute recommandation.",
  },
  {
    number: "02",
    title: "Équipes spécialisées",
    description:
      "Nos interventions mobilisent des profils ayant une expérience concrète dans le secteur concerné. Un auditeur bancaire n'est pas interchangeable avec un auditeur minier.",
    icon: Users,
    detail: "Expertise technique et connaissance sectorielle combinées.",
  },
  {
    number: "03",
    title: "Référentiels croisés",
    description:
      "Nous appliquons les normes OHADA, IFRS et ISA en les contextualisant au secteur d'activité : les enjeux de conformité d'une banque ne sont pas ceux d'un groupe industriel.",
    icon: Layers3,
    detail: "OHADA · IFRS · ISA — interprétés par secteur.",
  },
  {
    number: "04",
    title: "Vision stratégique",
    description:
      "Nos recommandations ne se limitent pas à la conformité technique. Elles intègrent une lecture stratégique des enjeux propres au secteur : régulation, concurrence, transformation.",
    icon: TrendingUp,
    detail: "Au-delà de l'audit : une lecture prospective.",
  },
]

const COMPARISON = {
  generic: [
    "Méthodologie identique pour tous les secteurs",
    "Équipes généralistes affectées au hasard",
    "Recommandations décontextualisées",
    "Peu de connaissance du cadre réglementaire local",
    "Rapports standardisés sans lecture terrain",
  ],
  caaf: [
    "Approche calibrée par secteur d'activité",
    "Équipes avec expérience sectorielle prouvée",
    "Recommandations ancrées dans la réalité opérationnelle",
    "Maîtrise des référentiels OHADA, BCC, ARPTC, Code minier",
    "Livrables adaptés aux attentes des parties prenantes",
  ],
}

export function SectorApproachDifference() {
  return (
    <section className="border-t border-hairline bg-white px-10 py-section">
      <div className="w-full">
        {/* ── Header ── */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Notre approche
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              Pourquoi notre lecture
              <br />
              <span className="text-ink/40">
                sectorielle fait la différence.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            Trop de cabinets appliquent un modèle unique à tous les secteurs.
            Chez CAAF SAS, nous pensons que la qualité d'un audit ou d'un
            conseil dépend directement de la compréhension du contexte dans
            lequel évolue le client.
          </p>
        </div>

        {/* ── 4 Pillars ── */}
        <div className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.number}
              className="group border border-hairline bg-canvas p-8 transition-colors hover:bg-surface-soft/40"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5 transition-colors group-hover:bg-primary/10">
                  <pillar.icon
                    className="h-6 w-6 text-primary"
                    strokeWidth={1.7}
                  />
                </div>
                <span className="font-mono text-xs font-semibold text-primary">
                  {pillar.number}
                </span>
              </div>

              <h3 className="font-serif text-xl text-brand-navy md:text-2xl">
                {pillar.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-ink/55">
                {pillar.description}
              </p>

              <div className="mt-6 border-t border-hairline pt-4">
                <p className="text-xs text-ink/40 italic">{pillar.detail}</p>
              </div>

              {/* Bottom accent on hover */}
              <div className="mt-4 h-[2px] w-0 bg-primary/40 transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* ── Comparison: Generic vs CAAF ── */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Generic approach */}
          <div className="border border-hairline bg-surface-card/40 p-8 lg:col-span-5 lg:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-ink/10 bg-ink/5">
                <Scale className="h-5 w-5 text-ink/40" strokeWidth={1.7} />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink/60">
                  Approche générique
                </p>
                <p className="text-xs uppercase tracking-[0.14em] text-ink/30">
                  Cabinet standard
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {COMPARISON.generic.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center border border-ink/10 bg-ink/5">
                    <X className="h-3 w-3 text-ink/30" strokeWidth={2} />
                  </div>
                  <span className="text-sm leading-7 text-ink/50">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CAAF approach */}
          <div className="border border-white/10 bg-surface-dark p-8 lg:col-span-7 lg:p-10">
            {/* Corner accent */}
            <div className="absolute right-0 top-0 hidden h-20 w-20 lg:block">
              <div className="absolute right-0 top-0 h-px w-20 bg-gradient-to-l from-primary/40 to-transparent" />
              <div className="absolute right-0 top-0 h-20 w-px bg-gradient-to-b from-primary/40 to-transparent" />
            </div>

            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/10">
                <ShieldCheck
                  className="h-5 w-5 text-primary"
                  strokeWidth={1.7}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Approche CAAF SAS
                </p>
                <p className="text-xs uppercase tracking-[0.14em] text-white/35">
                  Lecture sectorielle adaptée
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {COMPARISON.caaf.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    strokeWidth={1.7}
                  />
                  <span className="text-sm leading-7 text-white/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/[0.06] pt-6">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  { icon: Globe2, label: "OHADA" },
                  { icon: Landmark, label: "BCC" },
                  { icon: BookOpen, label: "IFRS" },
                  { icon: Scale, label: "ISA" },
                ].map((ref) => (
                  <div key={ref.label} className="flex items-center gap-2">
                    <ref.icon
                      className="h-4 w-4 text-primary/70"
                      strokeWidth={1.7}
                    />
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                      {ref.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Quote manifeste ── */}
        <div className="mt-12 border border-hairline bg-canvas p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <blockquote className="max-w-3xl font-serif text-2xl italic leading-relaxed text-brand-navy md:text-3xl">
                &ldquo;Un bon audit ne se contente pas de vérifier des
                chiffres. Il éclaire les décisions en tenant compte de la
                réalité du secteur, pas d&apos;un modèle théorique
                déconnecté.&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/5">
                  <Users className="h-5 w-5 text-primary" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">
                    Direction CAAF SAS
                  </p>
                  <p className="text-xs uppercase tracking-[0.14em] text-ink/35">
                    Philosophie d&apos;intervention
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-3 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
            >
              Discuter de votre secteur
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
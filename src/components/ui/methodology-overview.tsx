// src/components/ui/methodology-overview.tsx
"use client"

import React from "react"
import Link from "next/link"
import {
  ArrowRight,
  FileSearch,
  ClipboardCheck,
  Presentation,
  ShieldCheck,
  FileCheck2,
  ChevronRight,
} from "lucide-react"

const STEPS = [
  {
    number: "01",
    title: "Diagnostic & Cadrage",
    description:
      "Analyse préliminaire de l'environnement, du périmètre et des risques. Identification des zones critiques et définition des objectifs de la mission.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Planification",
    description:
      "Élaboration du plan de travail détaillé, allocation des ressources spécialisées et validation du calendrier d'intervention.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Exécution & Contrôle",
    description:
      "Collecte et analyse documentaire, tests de conformité, entretiens terrain et revue systématique des processus clés.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Rapport & Recommandations",
    description:
      "Restitution formelle des résultats, tableau de synthèse des observations, recommandations opérationnelles et plan d'action.",
    icon: FileCheck2,
  },
]

export function MethodologyOverview() {
  return (
    <section className="border-t border-hairline bg-surface-soft/30 px-10 py-section">
      <div className="w-full">
        {/* Header */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Notre approche
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              Une méthodologie rigoureuse,
              <br />
              <span className="text-ink/40">itérative et transparente.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            Chaque mission suit un protocole structuré, adapté au périmètre et
            aux enjeux spécifiques du client. Notre cadre méthodologique s'appuie
            sur les normes ISA, les référentiels OHADA et les meilleures
            pratiques internationales.
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="absolute left-0 right-0 top-[60px] hidden h-px bg-hairline md:block" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {STEPS.map((step, index) => (
              <div
                key={step.number}
                className="group relative border border-hairline bg-white p-7 transition-colors hover:bg-surface-soft/40"
              >
                {/* Step number + icon */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center border border-primary/20 bg-white">
                    <step.icon
                      className="h-5 w-5 text-primary"
                      strokeWidth={1.7}
                    />
                  </div>

                  <span className="font-mono text-xs font-semibold text-primary">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-brand-navy">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-ink/55">
                  {step.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-6 h-[2px] w-0 bg-primary/40 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border border-hairline bg-canvas px-8 py-5 md:flex-row">
          <div className="flex items-center gap-3">
            <Presentation className="h-5 w-5 text-primary" strokeWidth={1.7} />
            <p className="text-sm text-ink/60">
              Méthodologie adaptée à chaque mission.{" "}
              <span className="font-medium text-ink/80">
                Découvrez notre approche complète.
              </span>
            </p>
          </div>

          <Link
            href="#methodologie"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
          >
            Voir la méthodologie détaillée
            <ChevronRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
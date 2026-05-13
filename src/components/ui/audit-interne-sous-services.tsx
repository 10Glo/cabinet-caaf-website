// src/components/expertise/audit-interne/audit-interne-sous-services.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  SearchCheck,
  LockKeyhole,
  FileText,
  TrendingUp,
  ShieldAlert,
} from "lucide-react"

const AUDIT_TYPES = [
  {
    id: "performance",
    icon: SearchCheck,
    title: "Audit Performance",
    subtitle: "Efficacité & Optimisation",
    description:
      "Examen critique des processus métiers pour identifier les gisements de productivité, les gaspillages et les opportunités d'amélioration opérationnelle.",
    deliverables: [
      "Rapport sur les performances des processus",
      "Cartographie des gains potentiels",
      "Recommandations d'optimisation",
    ],
  },
  {
    id: "compliance",
    icon: FileText,
    title: "Audit de Conformité",
    subtitle: "Respect des règles",
    description:
      "Vérification de l'adhésion aux lois, règlements, directives internes et procédures établies par l'entreprise.",
    deliverables: [
      "Rapport de conformité réglementaire",
      "Analyse des écarts constatés",
      "Plan de redressement",
    ],
  },
  {
    id: "operational",
    icon: TrendingUp,
    title: "Audit Opérationnel",
    subtitle: "Processus & Risques",
    description:
      "Évaluation des systèmes de contrôle interne visant à protéger les actifs, assurer la fiabilité de l'information financière et opérer efficacement.",
    deliverables: [
      "Test des contrôles clés",
      "Évaluation des risques résiduels",
      "Attestation de maîtrise des risques",
    ],
  },
  {
    id: "fraude",
    icon: ShieldAlert,
    title: "Enquêtes & Investigations",
    subtitle: "Gestion des risques majeurs",
    description:
      "Enquêtes discrètes sur des signalements de fraude, de corruption ou de conflits d'intérêts potentiels au sein de l'organisation.",
    deliverables: [
      "Rapport d'enquête confidentiel",
      "Preuves documentées",
      "Recommandations pénales ou disciplinaires",
    ],
  },
  {
    id: "pre-acquis",
    icon: LockKeyhole,
    title: "Due Diligence Interne",
    subtitle: "Préparation aux transactions",
    description:
      "Audit préparatoire avant une acquisition ou une fusion pour cartographier les risques opérationnels et financiers non couverts par l'audit financier classique.",
    deliverables: [
      "Rapport de risques critiques",
      "Estimation du coût de consolidation",
      "Due diligence opérationnelle",
    ],
  },
]

export function AuditInterneSousServices() {
  const [activeId, setActiveId] = useState(AUDIT_TYPES[0].id)

  const activeService = AUDIT_TYPES.find((s) => s.id === activeId) ?? AUDIT_TYPES[0]
  const ActiveIcon = activeService.icon

  return (
    <section id="missions" className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* ── Heading ── */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Nos missions
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
            Chaque risque exige
            <br />
            <span className="text-primary">une approche sur mesure.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
            L'audit interne ne se limite pas à vérifier si les comptes sont justes. Il examine si l'entreprise atteint ses objectifs en maîtrisant ses risques. Voici nos 5 types d'interventions.
          </p>
        </div>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Left panel — navigation */}
          <div className="border border-hairline bg-white md:col-span-4">
            <div className="border-b border-hairline px-8 py-6 md:px-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/35">
                Types d'audit
              </p>
            </div>

            <div className="divide-y divide-hairline">
              {AUDIT_TYPES.map((service) => {
                const isActive = service.id === activeId
                const Icon = service.icon

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveId(service.id)}
                    className={`group relative flex w-full items-start gap-4 px-8 py-6 text-left transition-colors md:px-10 ${isActive ? "bg-primary/5" : "bg-white hover:bg-surface-card"}`}
                  >
                    <div className={`absolute left-0 top-0 h-full w-[3px] transition-colors ${isActive ? "bg-primary" : "bg-transparent"}`} />
                    <div className={`inline-flex h-12 w-12 shrink-0 items-center justify-center border transition-colors ${isActive ? "border-primary/20 bg-white text-primary" : "border-hairline bg-surface-card text-brand-navy/45 group-hover:text-brand-navy/70"}`}>
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`text-base font-semibold transition-colors ${isActive ? "text-brand-navy" : "text-brand-navy/70 group-hover:text-brand-navy"}`}>{service.title}</h3>
                      <p className={`mt-1 text-sm transition-colors ${isActive ? "text-ink/50" : "text-ink/40 group-hover:text-ink/55"}`}>{service.subtitle}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right panel — active detail */}
          <article className="border border-hairline bg-white p-8 md:col-span-8 md:p-10">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                <ActiveIcon className="h-6 w-6 text-primary" strokeWidth={1.7} />
              </div>

              <div className="mb-6">
                <h3 className="font-serif text-2xl text-brand-navy md:text-3xl">{activeService.title}</h3>
                <p className="mt-2 text-sm text-ink/45">{activeService.subtitle}</p>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-ink/60 md:text-base">{activeService.description}</p>

              <div className="mt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-primary/40" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/35">Livrables clés</span>
                </div>
                <ul className="grid gap-3 lg:max-w-2xl">
                  {activeService.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 border border-hairline bg-surface-card px-4 py-4">
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm leading-6 text-ink/65">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <Link href="/contact" className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3">
                  Discuter de cette mission <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
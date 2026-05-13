// src/components/expertise/audit-interne/audit-interne-approche.tsx
"use client"

import { useState } from "react"
import {
  Target,
  Microscope,
  PenTool,
  Presentation,
  RefreshCcw,
} from "lucide-react"

const STEPS = [
  {
    number: "01",
    id: "planification",
    icon: Target,
    title: "Planification basée sur les risques",
    description: "Nous identifions d'abord les zones à fort risque pour votre entreprise. Le plan d'audit annuel est donc dynamique, orienté vers ce qui menace réellement vos objectifs.",
    details: ["Analyse macro des risques stratégiques et opérationnels", "Entretiens avec les chefs de département", "Définition des priorités d'audit"],
  },
  {
    number: "02",
    id: "evaluation",
    icon: Microscope,
    title: "Évaluation du dispositif de contrôle",
    description: "Avant de tester, nous comprenons comment vos processus fonctionnent. Nous évaluons la conception théorique des contrôles pour savoir s'ils sont aptes à fonctionner.",
    details: ["Cartographie des processus (Flowcharts)", "Identification des points de contrôle existants", "Test de la conception des contrôles"],
  },
  {
    number: "03",
    id: "testing",
    icon: PenTool,
    title: "Tests d'effectivité & Analyse",
    description: "Nous vérifions si les contrôles sont appliqués comme prévu. Si une faille est détectée, nous analysons son impact potentiel sur les actifs ou l'image de l'entreprise.",
    details: ["Tests statistiques sur les transactions", "Observation directe des pratiques terrain", "Interviews des opérationnels"],
  },
  {
    number: "04",
    id: "rapport",
    icon: Presentation,
    title: "Restitution & Plan d'action",
    description: "Le rapport n'est pas qu'un constat. Il inclut un plan d'action chiffré et chronologisé pour remédier aux faiblesses identifiées.",
    details: ["Réunion de restitution avec le management", "Validation des correctifs proposés", "Attribution des responsables et délais"],
  },
  {
    number: "05",
    id: "suivi",
    icon: RefreshCcw,
    title: "Suivi des corrections",
    description: "La valeur de l'audit réside dans la correction des anomalies. Nous assurons le suivi jusqu'à la clôture complète des recommandations.",
    details: ["Point trimestriel sur l'avancement", "Validation des preuves de mise en œuvre", "Mise à jour du niveau de risque"],
  },
]

export function AuditInterneApproche() {
  const [activeId, setActiveId] = useState(STEPS[0].id)
  const activeStep = STEPS.find((s) => s.id === activeId) ?? STEPS[0]
  const ActiveIcon = activeStep.icon

  return (
    <section id="approche" className="bg-white px-10 py-section">
      <div className="w-full">
        {/* ── Heading ── */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Méthodologie
            </span>
          </div>
          <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
            Une démarche constructive,
            <br />non punitive.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
            Notre rôle n'est pas de chercher des coupables, mais d'améliorer le système. Nous travaillons main dans la main avec vos équipes pour transformer les risques en opportunités de progrès.
          </p>
        </div>

        {/* ── Timeline + Detail ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Left — Steps */}
          <div className="border border-hairline bg-canvas p-8 md:col-span-5 md:p-10">
            <div className="relative">
              <div className="absolute bottom-0 left-[23px] top-0 w-px bg-hairline" />
              <div className="space-y-1">
                {STEPS.map((step) => {
                  const isActive = step.id === activeId
                  const Icon = step.icon
                  return (
                    <button key={step.id} type="button" onClick={() => setActiveId(step.id)} className="group relative flex w-full items-start gap-5 px-0 py-5 text-left">
                      <div className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border transition-all duration-300 ${isActive ? "border-primary bg-primary text-white shadow-sm shadow-primary/20" : "border-hairline bg-white text-brand-navy/30 group-hover:border-primary/30 group-hover:text-brand-navy/60"}`}>
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <div className="min-w-0 pt-1">
                        <div className="flex items-baseline gap-3">
                          <span className={`font-mono text-[11px] font-semibold tracking-wider transition-colors ${isActive ? "text-primary" : "text-ink/25 group-hover:text-ink/40"}`}>{step.number}</span>
                          <h3 className={`text-[15px] font-semibold leading-snug transition-colors ${isActive ? "text-brand-navy" : "text-brand-navy/55 group-hover:text-brand-navy/80"}`}>{step.title}</h3>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right — Active detail */}
          <article className="border border-hairline bg-surface-dark p-8 text-white md:col-span-7 md:p-10">
            <div className="max-w-2xl">
              <div className="mb-8 inline-flex items-center gap-3">
                <span className="font-mono text-[13px] font-bold tracking-wider text-primary">{activeStep.number}</span>
                <div className="h-px w-6 bg-white/15" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35">Phase {activeStep.number} sur 05</span>
              </div>
              <div className="mb-6 flex items-center gap-4">
                <div className="inline-flex h-14 w-14 items-center justify-center border border-white/10 bg-white/5">
                  <ActiveIcon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl leading-tight text-white md:text-3xl">{activeStep.title}</h3>
              </div>
              <p className="text-sm leading-7 text-white/55 md:text-base">{activeStep.description}</p>
              <div className="mt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-primary/40" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">Actions clés</span>
                </div>
                <ul className="grid gap-3">
                  {activeStep.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 border border-white/[0.06] bg-white/[0.03] px-5 py-4">
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm leading-6 text-white/60">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 flex items-center gap-2">
                {STEPS.map((step) => (
                  <button key={step.id} type="button" onClick={() => setActiveId(step.id)} className={`h-1.5 rounded-full transition-all duration-300 ${step.id === activeId ? "w-8 bg-primary" : "w-1.5 bg-white/15 hover:bg-white/30"}`} />
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
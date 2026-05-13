
"use client"

import { useState } from "react"
import {
  Handshake,
  ScanSearch,
  ClipboardList,
  SearchCheck,
  FileOutput,
  RefreshCcw,
} from "lucide-react"

const STEPS = [
  {
    number: "01",
    id: "acceptation",
    icon: Handshake,
    title: "Acceptation du mandat",
    description:
      "Avant toute nomination, nous évaluons notre capacité à accepter la mission : indépendance, compétences sectorielles, absence de conflits d'intérêts. Cette étape garantit l'intégrité du mandat dès son origine.",
    details: [
      "Vérification de l'indépendance et des incompatibilités",
      "Évaluation des risques liés à l'entité",
      "Lettre d'acceptation formelle du mandat",
      "Désignation de l'associé responsable",
    ],
  },
  {
    number: "02",
    id: "connaissance",
    icon: ScanSearch,
    title: "Prise de connaissance approfondie",
    description:
      "Nous analysons votre environnement, votre organisation, vos systèmes d'information et votre dispositif de contrôle interne pour identifier les zones de risques significatifs qui orienteront nos travaux.",
    details: [
      "Cartographie des processus clés et des flux financiers",
      "Entretiens avec la direction et les responsables opérationnels",
      "Analyse du contrôle interne et de l'environnement IT",
      "Identification des risques d'anomalies significatives",
    ],
  },
  {
    number: "03",
    id: "planification",
    icon: ClipboardList,
    title: "Planification de la mission",
    description:
      "Sur la base des risques identifiés, nous élaborons un plan de mission pluriannuel et un programme de travail annuel détaillé, calibrés pour couvrir l'ensemble des cycles significatifs.",
    details: [
      "Plan de mission sur la durée du mandat",
      "Programme de travail annuel détaillé",
      "Détermination des seuils de signification",
      "Coordination avec l'audit interne le cas échéant",
    ],
  },
  {
    number: "04",
    id: "controles",
    icon: SearchCheck,
    title: "Exécution des contrôles",
    description:
      "Nos équipes déploient les procédures prévues : contrôles intérimaires en cours d'exercice, puis travaux de fin d'exercice sur les comptes arrêtés. Chaque constat est documenté et chaque anomalie traitée.",
    details: [
      "Contrôles intérimaires sur les processus et cycles clés",
      "Travaux de clôture sur les comptes annuels",
      "Circularisation des tiers et confirmations externes",
      "Supervision permanente par l'associé signataire",
    ],
  },
  {
    number: "05",
    id: "rapport",
    icon: FileOutput,
    title: "Rapports & Assemblée Générale",
    description:
      "Nous émettons nos rapports — général et spécial — et les présentons en Assemblée Générale. Nos recommandations sont formulées pour renforcer concrètement votre gouvernance financière.",
    details: [
      "Émission du rapport général sur les comptes",
      "Rapport spécial sur les conventions réglementées",
      "Présentation en Assemblée Générale",
      "Lettre de recommandations à la direction",
    ],
  },
  {
    number: "06",
    id: "suivi",
    icon: RefreshCcw,
    title: "Suivi permanent du mandat",
    description:
      "Tout au long de l'exercice et du mandat de six ans, nous restons votre interlocuteur de confiance : suivi des recommandations, veille réglementaire, conseil sur les évolutions comptables.",
    details: [
      "Suivi de la mise en œuvre des recommandations",
      "Veille réglementaire OHADA et fiscale",
      "Disponibilité continue entre les campagnes",
      "Actualisation annuelle de l'évaluation des risques",
    ],
  },
]

export function CommissariatApproche() {
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
              Notre approche
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
            Un mandat structuré,
            <br />
            une présence continue.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
            Le commissariat aux comptes s&apos;inscrit dans la durée. Notre
            approche en six phases couvre l&apos;intégralité du mandat, de
            l&apos;acceptation initiale au suivi permanent, avec une rigueur
            constante et un interlocuteur associé dédié.
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
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveId(step.id)}
                      className="group relative flex w-full items-start gap-5 px-0 py-5 text-left"
                    >
                      <div
                        className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border transition-all duration-300 ${
                          isActive
                            ? "border-primary bg-primary text-white shadow-sm shadow-primary/20"
                            : "border-hairline bg-white text-brand-navy/30 group-hover:border-primary/30 group-hover:text-brand-navy/60"
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>

                      <div className="min-w-0 pt-1">
                        <div className="flex items-baseline gap-3">
                          <span
                            className={`font-mono text-[11px] font-semibold tracking-wider transition-colors ${
                              isActive
                                ? "text-primary"
                                : "text-ink/25 group-hover:text-ink/40"
                            }`}
                          >
                            {step.number}
                          </span>
                          <h3
                            className={`text-[15px] font-semibold leading-snug transition-colors ${
                              isActive
                                ? "text-brand-navy"
                                : "text-brand-navy/55 group-hover:text-brand-navy/80"
                            }`}
                          >
                            {step.title}
                          </h3>
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
                <span className="font-mono text-[13px] font-bold tracking-wider text-primary">
                  {activeStep.number}
                </span>
                <div className="h-px w-6 bg-white/15" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35">
                  Étape {activeStep.number} sur 06
                </span>
              </div>

              <div className="mb-6 flex items-center gap-4">
                <div className="inline-flex h-14 w-14 items-center justify-center border border-white/10 bg-white/5">
                  <ActiveIcon
                    className="h-7 w-7 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-serif text-2xl leading-tight text-white md:text-3xl">
                  {activeStep.title}
                </h3>
              </div>

              <p className="text-sm leading-7 text-white/55 md:text-base">
                {activeStep.description}
              </p>

              <div className="mt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-primary/40" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">
                    Ce que cela implique
                  </span>
                </div>

                <ul className="grid gap-3">
                  {activeStep.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 border border-white/[0.06] bg-white/[0.03] px-5 py-4"
                    >
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm leading-6 text-white/60">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex items-center gap-2">
                {STEPS.map((step) => (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveId(step.id)}
                    aria-label={`Aller à l'étape ${step.number}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      step.id === activeId
                        ? "w-8 bg-primary"
                        : "w-1.5 bg-white/15 hover:bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
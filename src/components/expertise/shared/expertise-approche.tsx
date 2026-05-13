// src/components/expertise/shared/expertise-approche.tsx
"use client"

import { useState } from "react"
import { getIcon } from "@/content/expertises/icon-registry"
import type { ExpertiseApprocheConfig } from "@/content/expertises/types"

interface Props {
  config: ExpertiseApprocheConfig
}

export function ExpertiseApproche({ config }: Props) {
  const [activeId, setActiveId] = useState(config.steps[0].id)
  const activeStep = config.steps.find((s) => s.id === activeId) ?? config.steps[0]
  const ActiveIcon = getIcon(activeStep.icon)   // ← résolution runtime

  return (
    <section id="approche" className="bg-white px-10 py-section">
      <div className="w-full">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              {config.eyebrow}
            </span>
          </div>
          <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
            {config.title}
            {config.titleAccent && (
              <>
                <br />
                {config.titleAccent}
              </>
            )}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
            {config.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Left — Timeline */}
          <div className="border border-hairline bg-canvas p-8 md:col-span-5 md:p-10">
            <div className="relative">
              <div className="absolute bottom-0 left-5.75 top-0 w-px bg-hairline" />
              <div className="space-y-1">
                {config.steps.map((step) => {
                  const isActive = step.id === activeId
                  const Icon = getIcon(step.icon)   // ← résolution ici
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

          {/* Right — Detail */}
          <article className="border border-hairline bg-surface-dark p-8 text-white md:col-span-7 md:p-10">
            <div className="max-w-2xl">
              <div className="mb-8 inline-flex items-center gap-3">
                <span className="font-mono text-[13px] font-bold tracking-wider text-primary">
                  {activeStep.number}
                </span>
                <div className="h-px w-6 bg-white/15" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35">
                  {config.stepLabel} {activeStep.number} sur {config.totalSteps}
                </span>
              </div>
              <div className="mb-6 flex items-center gap-4">
                <div className="inline-flex h-14 w-14 items-center justify-center border border-white/10 bg-white/5">
                  <ActiveIcon className="h-7 w-7 text-primary" strokeWidth={1.5} />
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
                      className="flex items-start gap-3 border border-white/6 bg-white/3 px-5 py-4"
                    >
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm leading-6 text-white/60">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 flex items-center gap-2">
                {config.steps.map((step) => (
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
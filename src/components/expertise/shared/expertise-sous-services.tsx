// src/components/expertise/shared/expertise-sous-services.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getIcon } from "@/content/expertises/icon-registry"
import type { ExpertiseSousServicesConfig } from "@/content/expertises/types"
import { SectionEyebrow } from "@/components/shared/section-eyebrow"

interface Props {
  config: ExpertiseSousServicesConfig
}

export function ExpertiseSousServices({ config }: Props) {
  const [activeId, setActiveId] = useState(config.items[0].id)
  const active = config.items.find((s) => s.id === activeId) ?? config.items[0]
  const ActiveIcon = getIcon(active.icon)   // ← résolution au runtime

  return (
    <section id={config.sectionId} className="bg-canvas px-10 py-section">
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
                <span className="text-primary">{config.titleAccent}</span>
              </>
            )}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
            {config.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Left — Tabs */}
          <div className="border border-hairline bg-white md:col-span-4">
            <div className="border-b border-hairline px-8 py-6 md:px-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/35">
                {config.headerLabel}
              </p>
            </div>
            <div className="divide-y divide-hairline">
              {config.items.map((item) => {
                const isActive = item.id === activeId
                const Icon = getIcon(item.icon)   // ← résolution ici aussi
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`group relative flex w-full items-start gap-4 px-8 py-6 text-left transition-colors md:px-10 ${
                      isActive ? "bg-primary/5" : "bg-white hover:bg-surface-card"
                    }`}
                  >
                    <div
                      className={`absolute left-0 top-0 h-full w-0.75 transition-colors ${
                        isActive ? "bg-primary" : "bg-transparent"
                      }`}
                    />
                    <div
                      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center border transition-colors ${
                        isActive
                          ? "border-primary/20 bg-white text-primary"
                          : "border-hairline bg-surface-card text-brand-navy/45 group-hover:text-brand-navy/70"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <div className="min-w-0">
                      <h3
                        className={`text-base font-semibold transition-colors ${
                          isActive
                            ? "text-brand-navy"
                            : "text-brand-navy/70 group-hover:text-brand-navy"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`mt-1 text-sm transition-colors ${
                          isActive
                            ? "text-ink/50"
                            : "text-ink/40 group-hover:text-ink/55"
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right — Detail */}
          <article className="border border-hairline bg-white p-8 md:col-span-8 md:p-10">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                <ActiveIcon className="h-6 w-6 text-primary" strokeWidth={1.7} />
              </div>
              <div className="mb-6">
                <h3 className="font-serif text-2xl text-brand-navy md:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-2 text-sm text-ink/45">{active.subtitle}</p>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-ink/60 md:text-base">
                {active.description}
              </p>
              <div className="mt-10">
              <SectionEyebrow className="mb-4" tone="muted-dark">
                Livrables clés
              </SectionEyebrow>
                <ul className="grid gap-3 lg:max-w-2xl">
                  {active.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border border-hairline bg-surface-card px-4 py-4"
                    >
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm leading-6 text-ink/65">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
                >
                  Discuter de cette mission
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
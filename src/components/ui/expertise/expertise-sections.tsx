// src/components/ui/expertise/expertise-sections.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { getIcon } from "@/content/expertises/icon-registry"
import type {
  ExpertiseSousServicesConfig,
  ExpertiseApprocheConfig,
  ExpertisePourquoiConfig,
  ExpertiseSecteursConfig,
  ExpertiseCasConfig,
  ExpertiseCtaConfig,
} from "@/content/expertises/types"

// ─── Sous-Services ───────────────────────────────────────────────────────────
export function ExpertiseSousServices({ config }: { config: ExpertiseSousServicesConfig }) {
  const [activeId, setActiveId] = useState(config.items[0]?.id)
  const active = config.items.find((i) => i.id === activeId) ?? config.items[0]
  if (!active) return null
  const ActiveIcon = getIcon(active.icon)
  return (
    <section id={config.sectionId} className="bg-[#f8fafc] px-6 sm:px-10 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">{config.eyebrow}</span>
          </div>
          <h2 className="font-serif text-4xl leading-tight text-slate-900 md:text-5xl">
            {config.title} <br />
            <span className="text-primary">{config.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-base leading-7 text-slate-500">{config.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          <div className="border border-slate-200 bg-white md:col-span-4">
            <div className="border-b border-slate-200 px-8 py-5">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">{config.headerLabel}</p>
            </div>
            <div className="divide-y divide-slate-200">
              {config.items.map((item) => {
                const Icon = getIcon(item.icon)
                const isActive = item.id === activeId
                return (
                  <button key={item.id} onClick={() => setActiveId(item.id)} className={`group flex w-full items-start gap-4 px-8 py-6 text-left transition-colors ${isActive ? "bg-primary/[0.06]" : "bg-white hover:bg-slate-50"}`}>
                    <div className={`absolute left-0 top-0 h-full w-[3px] ${isActive ? "bg-primary" : "bg-transparent"}`} style={{ position: "relative" }} />
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center border ${isActive ? "border-primary/20 bg-white text-primary" : "border-slate-200 bg-slate-50 text-slate-400 group-hover:text-slate-600"}`}>
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <div>
                      <h3 className={`font-sans text-sm font-semibold ${isActive ? "text-slate-900" : "text-slate-700"}`}>{item.title}</h3>
                      <p className="mt-1 font-sans text-xs text-slate-500">{item.subtitle}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
          <article className="border border-slate-200 bg-white p-8 md:col-span-8 md:p-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
              <ActiveIcon className="h-6 w-6 text-primary" strokeWidth={1.7} />
            </div>
            <h3 className="font-serif text-2xl text-slate-900 md:text-3xl">{active.title}</h3>
            <p className="mt-2 font-sans text-sm text-slate-500">{active.subtitle}</p>
            <p className="mt-6 max-w-2xl font-sans text-sm leading-7 text-slate-600">{active.description}</p>
            <div className="mt-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-8 bg-primary/30" />
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">Livrables clés</span>
              </div>
              <ul className="grid gap-3">
                {active.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 border border-slate-200 bg-slate-50 px-4 py-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="font-sans text-sm leading-6 text-slate-600">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 font-sans text-sm font-medium text-primary hover:gap-3 transition-all">
                Discuter de cette mission <ArrowRight size={15} />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

// ─── Approche ────────────────────────────────────────────────────────────────
export function ExpertiseApproche({ config }: { config: ExpertiseApprocheConfig }) {
  const [activeId, setActiveId] = useState(config.steps[0]?.id)
  const active = config.steps.find((s) => s.id === activeId) ?? config.steps[0]
  return (
    <section className="bg-white px-6 sm:px-10 py-20 lg:py-24 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">{config.eyebrow}</span>
            </div>
            <h2 className="font-serif text-4xl leading-tight text-slate-900 md:text-5xl">
              {config.title} <span className="text-primary">{config.titleAccent}</span>
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-7 text-slate-500">{config.description}</p>
          </div>
          <div className="flex items-center gap-3 font-sans text-xs text-slate-400">
            <span className="font-mono text-2xl font-light text-slate-900">{config.totalSteps}</span>
            <span className="uppercase tracking-widest">étapes</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="space-y-2 lg:col-span-5">
            {config.steps.map((step) => {
              const Icon = getIcon(step.icon)
              const isActive = step.id === activeId
              return (
                <button key={step.id} onClick={() => setActiveId(step.id)} className={`flex w-full items-center gap-4 border px-5 py-4 text-left transition-colors ${isActive ? "border-primary/20 bg-primary/[0.04]" : "border-slate-200 bg-white hover:bg-slate-50"}`}>
                  <span className="font-mono text-xs font-semibold text-primary">{step.number}</span>
                  <div className={`flex h-9 w-9 items-center justify-center border ${isActive ? "border-primary/20 bg-white text-primary" : "border-slate-200 bg-slate-50 text-slate-400"}`}>
                    <Icon className="h-4 w-4" strokeWidth={1.7} />
                  </div>
                  <span className={`font-sans text-sm font-medium ${isActive ? "text-slate-900" : "text-slate-600"}`}>{step.title}</span>
                  <ChevronRight size={14} className={`ml-auto ${isActive ? "text-primary" : "text-slate-300"}`} />
                </button>
              )
            })}
          </div>
          {active && (
            <div className="border border-slate-200 bg-slate-50 p-8 lg:col-span-7">
              <p className="font-mono text-xs font-semibold text-primary">{active.number} — {active.id}</p>
              <h3 className="mt-2 font-serif text-2xl text-slate-900">{active.title}</h3>
              <p className="mt-4 font-sans text-sm leading-7 text-slate-600">{active.description}</p>
              <ul className="mt-6 space-y-2">
                {active.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 font-sans text-sm leading-6 text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// ─── Pourquoi ────────────────────────────────────────────────────────────────
export function ExpertisePourquoi({ config }: { config: ExpertisePourquoiConfig }) {
  return (
    <section className="bg-[#f8fafc] px-6 sm:px-10 py-20 lg:py-24 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">{config.eyebrow}</span>
          </div>
          <h2 className="whitespace-pre-line font-serif text-4xl leading-tight text-slate-900 md:text-5xl">{config.title}</h2>
          <p className="mt-6 font-sans text-base leading-7 text-slate-500">{config.description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {config.items.map((item) => {
            const Icon = getIcon(item.icon)
            return (
              <div key={item.title} className="border border-slate-200 bg-white p-8">
                <div className="mb-5 flex h-10 w-10 items-center justify-center border border-slate-200 bg-slate-50">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.7} />
                </div>
                <h3 className="font-sans text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 font-sans text-sm leading-7 text-slate-500">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Secteurs ────────────────────────────────────────────────────────────────
export function ExpertiseSecteurs({ config }: { config: ExpertiseSecteursConfig }) {
  return (
    <section className="bg-white px-6 sm:px-10 py-20 lg:py-24 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">{config.eyebrow}</span>
          </div>
          <h2 className="whitespace-pre-line font-serif text-4xl leading-tight text-slate-900 md:text-5xl">{config.title}</h2>
          <p className="mt-6 font-sans text-base leading-7 text-slate-500">{config.description}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {config.items.map((sector) => {
            const Icon = getIcon(sector.icon)
            return (
              <div key={sector.title} className={`border p-8 ${sector.featured ? "border-primary/20 bg-primary/[0.03]" : "border-slate-200 bg-white"}`}>
                <div className="mb-5 flex h-10 w-10 items-center justify-center border border-slate-200 bg-white">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.7} />
                </div>
                <h3 className="font-sans text-base font-semibold text-slate-900">{sector.title}</h3>
                <p className="mt-3 font-sans text-sm leading-6 text-slate-500">{sector.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {sector.tags.map((tag) => (
                    <span key={tag} className="border border-slate-200 bg-slate-50 px-2.5 py-1 font-sans text-[11px] font-medium uppercase tracking-wide text-slate-500">{tag}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border border-slate-200 bg-slate-50 px-8 py-6 md:flex-row">
          <p className="font-sans text-sm text-slate-600">{config.stripText} <span className="font-semibold text-primary">{config.stripHighlight}</span></p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary px-6 py-3 font-sans text-sm font-semibold text-white hover:bg-primary-active">{config.stripCta} <ArrowRight size={14} /></Link>
        </div>
      </div>
    </section>
  )
}

// ─── Cas ───────────────────────────────────────────────────────────────────
export function ExpertiseCas({ config }: { config: ExpertiseCasConfig }) {
  const [activeId, setActiveId] = useState(config.items[0]?.id)
  const active = config.items.find((c) => c.id === activeId) ?? config.items[0]
  if (!active) return null
  return (
    <section className="bg-[#f8fafc] px-6 sm:px-10 py-20 lg:py-24 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">{config.eyebrow}</span>
          </div>
          <h2 className="whitespace-pre-line font-serif text-4xl leading-tight text-slate-900 md:text-5xl">{config.title}</h2>
          <p className="mt-6 font-sans text-base leading-7 text-slate-500">{config.description}</p>
        </div>
        <div className="mb-6 flex gap-2 overflow-x-auto">
          {config.items.map((c) => (
            <button key={c.id} onClick={() => setActiveId(c.id)} className={`shrink-0 border px-5 py-3 font-sans text-sm font-medium transition-colors ${activeId === c.id ? "border-primary bg-primary text-white" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`}>
              {c.sector}
            </button>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 border border-slate-200 bg-white p-8 md:p-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-primary">{active.sector} — {active.location}</p>
            <h3 className="mt-3 font-serif text-2xl text-slate-900">{active.title}</h3>
            <p className="mt-4 font-sans text-sm leading-7 text-slate-600">{active.context}</p>
            <div className="mt-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-slate-400">Approche</p>
              <ul className="mt-3 space-y-2">
                {active.approach.map((a) => (
                  <li key={a} className="flex gap-2 font-sans text-sm leading-6 text-slate-600"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />{a}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {active.results.map((r) => {
                const Icon = getIcon(r.icon)
                return (
                  <div key={r.label} className="flex items-center gap-3 border border-slate-200 bg-slate-50 px-4 py-3">
                    <Icon className="h-4 w-4 text-primary" strokeWidth={1.7} />
                    <span className="font-sans text-sm text-slate-700">{r.label}</span>
                  </div>
                )
              })}
            </div>
            <blockquote className="mt-8 border-l-2 border-primary pl-5 font-serif text-lg italic leading-7 text-slate-700">“{active.quote}” <span className="not-italic font-sans text-sm font-semibold text-slate-500">— {active.quoteAuthor}</span></blockquote>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="border border-slate-200 bg-white p-6">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-slate-400">{config.sectionCta}</p>
              <Link href="/contact" className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-3 font-sans text-sm font-semibold text-white hover:bg-primary-active">Prendre contact <ArrowRight size={14} /></Link>
              <p className="mt-3 font-sans text-xs leading-5 text-slate-400">Réponse sous 24h · Confidentiel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ───────────────────────────────────────────────────────────────────
export function ExpertiseCta({ config }: { config: ExpertiseCtaConfig }) {
  return (
    <section className="bg-[#f8fafc] border-t border-slate-200/60 px-6 sm:px-10 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">{config.eyebrow}</span>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-slate-900 md:text-4xl">
              {config.title} <span className="text-primary">{config.titleAccent}</span>
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-7 text-slate-500">{config.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {config.trustPoints.map((p) => (
                <span key={p} className="inline-flex items-center gap-2 border border-slate-200 bg-white px-3 py-2 font-sans text-xs text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {p}
                </span>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <Link href={config.primaryCta.href} className="inline-flex items-center gap-2 bg-primary px-6 py-3 font-sans text-sm font-semibold text-white hover:bg-primary-active">{config.primaryCta.label} <ArrowRight size={14} /></Link>
              <Link href={config.secondaryCta.href} className="inline-flex items-center gap-2 border border-slate-200 bg-white px-6 py-3 font-sans text-sm font-semibold text-slate-700 hover:bg-slate-50">{config.secondaryCta.label}</Link>
            </div>
          </div>
          <div className="lg:col-span-5 grid gap-4">
            {config.contactOptions.map((opt) => {
              const Icon = getIcon(opt.icon)
              return (
                <Link key={opt.title} href={opt.href} className={`flex items-center gap-4 border p-5 ${opt.primary ? "border-primary/20 bg-primary/5" : "border-slate-200 bg-white hover:bg-slate-50"}`}>
                  <div className="flex h-10 w-10 items-center justify-center bg-white border border-slate-200">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.7} />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-slate-900">{opt.title}</p>
                    <p className="font-sans text-xs text-slate-500">{opt.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// src/components/expertise/shared/expertise-pourquoi.tsx
"use client"

import { getIcon } from "@/content/expertises/icon-registry"
import type { ExpertisePourquoiConfig } from "@/content/expertises/types"

interface Props {
  config: ExpertisePourquoiConfig
}

export function ExpertisePourquoi({ config }: Props) {
  const LAYOUT = [
    { colSpan: "md:col-span-8", dark: false },
    { colSpan: "md:col-span-4", dark: false },
    { colSpan: "md:col-span-4", dark: true  },
    { colSpan: "md:col-span-8", dark: false },
    { colSpan: "md:col-span-8", dark: false },
    { colSpan: "md:col-span-4", dark: true  },
  ]

  return (
    <section className="bg-canvas px-10 py-section">
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
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
            {config.description}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {config.items.map((item, index) => {
            const layout = LAYOUT[index] ?? { colSpan: "md:col-span-4", dark: false }
            const Icon = getIcon(item.icon)   // ← résolution runtime

            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden border p-8 transition-colors md:p-10 ${layout.colSpan} ${
                  layout.dark
                    ? "border-white/10 bg-surface-dark"
                    : "border-hairline bg-white"
                }`}
              >
                <div
                  className={`pointer-events-none absolute -right-4 -top-4 opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.06] ${
                    layout.dark ? "text-white" : "text-brand-navy"
                  }`}
                >
                  <Icon className="h-36 w-36" strokeWidth={0.7} />
                </div>
                <div className="relative z-10">
                  <div
                    className={`mb-6 inline-flex h-12 w-12 items-center justify-center border ${
                      layout.dark
                        ? "border-white/10 bg-white/5 text-primary"
                        : "border-primary/20 bg-primary/5 text-primary"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>
                  <h3
                    className={`font-serif text-xl md:text-2xl ${
                      layout.dark ? "text-white" : "text-brand-navy"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-4 max-w-lg text-sm leading-7 md:text-base ${
                      layout.dark ? "text-white/55" : "text-ink/60"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
// src/components/ui/featured-quote-section.tsx
"use client"

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function FeaturedQuoteSection() {
  return (
    <section className="bg-brand-navy px-10 py-section">
      <div className="w-full">
        <div className="border border-white/[0.08] bg-white/[0.03]">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">
            {/* ── Left rail ── */}
            <div className="flex flex-col justify-between border-b border-white/[0.06] p-8 lg:border-b-0 lg:border-r lg:border-white/[0.06] lg:p-10">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Parole de direction
                </span>

                <p className="mt-6 text-sm leading-7 text-white/40">
                  Une vision fondée sur la qualité d&apos;exécution, la
                  conformité et la confiance.
                </p>
              </div>
            </div>

            {/* ── Main quote ── */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <span className="mb-8 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                Conviction du cabinet
              </span>

              <blockquote className="max-w-3xl font-serif text-[clamp(1.5rem,2.5vw,2.5rem)] italic leading-[1.35] text-white/90">
                &ldquo;Notre cabinet existe pour apporter la clarté, la
                sécurité et la confiance nécessaires aux projets les plus
                ambitieux de la RDC, afin qu&apos;ils puissent atteindre une
                maturité conforme aux standards internationaux.&rdquo;
              </blockquote>

              <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.06] pt-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-medium text-white/80">
                    Jean-Pierre Kabongo
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">
                    Managing Partner — CAAF SAS
                  </p>
                </div>

                <p className="text-[10px] uppercase tracking-[0.14em] text-white/20">
                  Clarté · Conformité · Confiance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

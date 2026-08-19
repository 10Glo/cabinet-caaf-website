// src/components/actualites/actualites-hero.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { useMounted } from "@/hooks/use-mounted"
import { ArrowRight, Phone } from "lucide-react"
import hero_img from "@/assets/2.png"

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function ActualitesHero() {
  const mounted = useMounted()

  const a = (delay: string) => (mounted ? `hero-up ${delay}` : "opacity-0")
  const fadeIn = (delay: string) =>
    mounted ? `hero-in ${delay}` : "opacity-0"

  return (
    <section className="hero-section relative w-full overflow-hidden bg-brand-navy">
      {/* ═══════════════════════════════════════════════════
          BACKGROUND
          ═══════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero_img}
          alt="Actualités et insights CAAF SAS"
          fill
          priority
          sizes="100vw"
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            mounted ? "hero-image-reveal d6" : "opacity-0"
          }`}
          quality={90}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/70 via-brand-navy/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/30 via-transparent to-brand-navy/80" />
        <div className="absolute inset-0 hero-radial-accent" />
      </div>

      <div className="absolute inset-0 z-[1] bg-brand-navy/20 lg:hidden" />

      {/* ── Glow accents ── */}
      <div className="hero-glow hero-glow-primary absolute -right-40 top-40 z-0 h-[600px] w-[600px] rounded-full bg-primary/[0.08] blur-[160px]" />
      <div className="hero-glow hero-glow-secondary absolute -left-48 bottom-16 z-0 h-[500px] w-[500px] rounded-full bg-emerald-400/[0.06] blur-[140px]" />

      {/* ── Grain overlay ── */}
      <div
        aria-hidden
        className="hero-grain pointer-events-none absolute inset-0 z-[2]"
      />

      {/* ── Precision grid ── */}
      <div className="hero-grid absolute inset-0 z-[2]" />

      {/* ── Vertical accent line ── */}
      <div className="absolute left-8 top-0 z-[2] hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent lg:block" />

      {/* ═══════════════════════════════════════════════════
          CONTENT
          ═══════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full">
        <div className="px-6 pb-20 pt-36 sm:px-10 md:pt-44 lg:pb-28">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-14">
            {/* ─── LEFT — Text content ─── */}
            <div className="flex flex-col justify-center lg:col-span-7">
              {/* Eyebrow badge */}
              <div className="mb-11 inline-flex items-center">
                <div className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/[0.08]">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/85">
                    Actualités &amp; Insights · Veille professionnelle
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/[0.08] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>

              {/* Headline */}
              <div className={a("d2")}>
                <h1 className="font-serif text-[clamp(2.8rem,5.2vw,5.5rem)] font-black leading-[0.90] tracking-[-0.02em]">
                  <span className="text-white/95">
                    Analyses, décryptages
                    <br />
                    et veille
                  </span>
                  <br />
                  <span className="relative inline-block mt-1">
                    <span className="bg-gradient-to-r from-emerald-300 via-primary to-emerald-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite]">
                      professionnelle.
                    </span>
                    <span
                      className={
                        mounted
                          ? "hero-line d5 absolute -bottom-2.5 left-0 h-[2px] w-full bg-gradient-to-r from-emerald-400/60 to-transparent"
                          : "opacity-0"
                      }
                    />
                  </span>
                </h1>
              </div>

              {/* Subheadline */}
              <div className={a("d3")}>
                <p className="mt-11 max-w-xl text-[17px] leading-[1.8] text-white/65">
                  Fiscalité congolaise, normes OHADA, enjeux sectoriels, bonnes
                  pratiques d&apos;audit — nos experts partagent leur lecture de
                  l&apos;actualité pour vous aider à{" "}
                  <span className="font-medium text-white/90">
                    anticiper et à décider
                  </span>
                  .
                </p>
              </div>

              {/* CTAs */}
              <div className={a("d4")}>
                <div className="mt-14 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#articles"
                    className="btn-primary-hero group relative inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-9 py-4 text-[14px] font-semibold tracking-wide text-white"
                  >
                    <span className="relative z-10">Lire nos analyses</span>
                    <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="#contact"
                    className="btn-secondary-hero group inline-flex items-center justify-center gap-3 rounded-sm border border-white/20 bg-white/[0.04] px-9 py-4 text-[14px] font-semibold tracking-wide text-white/85 backdrop-blur-sm hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-emerald-400/80 transition-colors group-hover:text-emerald-400" />
                    Recevoir nos publications
                  </Link>
                </div>
              </div>

              {/* Divider */}
              <div className={a("d5")}>
                <div className="mt-12 h-px w-28 bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              {/* Bottom strip */}
              <div className={fadeIn("d6")}>
                <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {[
                    {
                      label: "Contenu",
                      text: "Des analyses rédigées par nos associés et directeurs, fondées sur l'expérience terrain.",
                    },
                    {
                      label: "Fréquence",
                      text: "Publication mensuelle avec des décryptages ciblés sur les évolutions réglementaires.",
                    },
                    {
                      label: "Lecture",
                      text: "OHADA, fiscalité minière, gouvernance bancaire, normes IFRS — autant de sujets couverts.",
                    },
                  ].map((item) => (
                    <div key={item.label}>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                        {item.label}
                      </span>
                      <p className="mt-2 text-sm leading-7 text-white/45">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom transition ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}

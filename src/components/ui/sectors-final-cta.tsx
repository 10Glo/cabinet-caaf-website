// src/components/ui/sectors-final-cta.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import ctaImage from "@/assets/3.png"

const COMMITMENTS = [
  "Réponse qualifiée sous 24h",
  "Interlocuteur senior dès le premier échange",
  "Proposition adaptée à votre secteur",
  "Confidentialité absolue garantie",
]

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function SectorsFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] border-t border-slate-200/60">
{/* ── Grain texture (subtle) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* ── Grid + image layout — compact ── */}
      <div className="relative z-10 grid min-h-[460px] grid-cols-1 lg:min-h-[520px] lg:grid-cols-2">
        {/* ═══════════════════════════════════════════════
            LEFT — Text content
            ═══════════════════════════════════════════════ */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Votre secteur, notre expertise
            </span>
          </div>

          {/* Title */}
          <h2 className="mb-4 max-w-lg text-[clamp(1.7rem,3vw,2.6rem)] font-light leading-[1.05] tracking-tight text-slate-900">
            Quel que soit votre secteur,
            <br />
            <span className="text-slate-400">
              nous avons l&apos;expertise.
            </span>
          </h2>

          {/* Description */}
          <p className="mb-6 max-w-md text-[15px] leading-6 text-slate-500">
            Notre approche sectorielle nous permet de mobiliser les bonnes
            compétences, de comprendre vos enjeux spécifiques et de formuler
            des recommandations immédiatement actionnables.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-7 py-3 text-[13px] font-semibold tracking-wide text-white"
            >
              <span className="relative z-10">Planifier un entretien</span>
              <span className="relative z-10 text-[14px] leading-none transition-transform duration-200 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </Link>

            <a
              href="tel:+243000000000"
              className="group inline-flex items-center justify-center gap-3 rounded-sm border border-slate-200 bg-white px-7 py-3 text-[13px] font-semibold tracking-wide text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
            >
              Appeler directement
            </a>
          </div>

          {/* Divider */}
          <div className="my-6 h-px w-20 bg-slate-200" />

          {/* Commitments */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {COMMITMENTS.map((point) => (
              <span
                key={point}
                className="text-xs text-slate-400"
              >
                {point}
              </span>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            RIGHT — Full-height image
            ═══════════════════════════════════════════════ */}
        <div className="relative h-[280px] sm:h-[320px] lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
          <Image
            src={ctaImage}
            alt="Secteurs CAAF SAS — Expertise multi-sectorielle"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

        </div>
      </div>
    </section>
  )
}

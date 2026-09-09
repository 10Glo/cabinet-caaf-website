// src/components/ui/actualites-hero.tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import hero_img from '@/assets/2.png'

export function ActualitesHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-brand-navy">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero_img}
          alt="Actualités et insights CAAF SAS"
          fill
          priority
          sizes="100vw"
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
          quality={85}
        />
        <div className="absolute inset-0 bg-brand-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="px-6 pb-24 pt-36 sm:px-10 md:pt-44 lg:pb-28">
          <div className="max-w-7xl mx-auto">
            {/* Eyebrow */}
            <div
              className={`mb-14 transition-opacity duration-500 ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Actualités &amp; Insights · Veille professionnelle
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-serif text-[clamp(2.8rem,5.2vw,5.5rem)] font-black leading-[0.88] tracking-[-0.03em] text-white transition-opacity duration-700 delay-100 ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="block">Analyses, veille</span>
              <span className="block">professionnelle,</span>
              <span className="block mt-2">
                <span className="text-white/40 font-light mx-3 text-[0.65em]">&amp;</span>
                <span className="text-[#259E01]">décryptages.</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`mt-11 max-w-xl text-[16px] leading-[1.75] text-white/60 transition-opacity duration-700 delay-200 ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Fiscalité congolaise, normes OHADA, enjeux sectoriels, bonnes
              pratiques d&apos;audit — nos experts partagent leur lecture de
              l&apos;actualité pour vous aider à anticiper et à décider.
            </p>

            {/* CTAs */}
            <div
              className={`mt-14 flex flex-col gap-4 sm:flex-row transition-opacity duration-700 delay-300 ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Link
                href="#articles"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-3.5 text-[13px] font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-primary-active"
              >
                Lire nos analyses
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Link>

              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 bg-transparent px-8 py-3.5 text-[13px] font-semibold tracking-wide text-white/80 transition-colors duration-200 hover:border-white/40 hover:text-white"
              >
                Recevoir nos publications
              </Link>
            </div>

            {/* Certifications */}
            <div
              className={`mt-14 flex flex-wrap items-center gap-x-5 gap-y-2 transition-opacity duration-700 delay-500 ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {['Membre CNCC', 'Inscrit OEC', 'Normes ISA', 'OHADA', 'IFRS'].map((cert) => (
                <span
                  key={cert}
                  className="text-[11px] font-medium tracking-wide text-white/35"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// src/components/ui/hero.tsx
'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import crdb_logo from '@/assets/CRDB_BANK_logo.svg'
import midema_logo from '@/assets/ACG-LOGO-MIDEMA.png'
import ppc_logo from '@/assets/ppc.png'
import cilu_logo from '@/assets/cilu.png'
import enge_logo from '@/assets/engen_logo.png'
import metalkol from '@/assets/Metakol-banner.png'
import Chemaf from '@/assets/chemaf.png'
import ABM from '@/assets/alphamin-logo-primary.png'
import frontier from '@/assets/horizontal-black.png'
import weir_minerals from '@/assets/weir minerals.png'
import ivanhoe from '@/assets/ivanhoe.png'
import sek from '@/assets/kipoi.webp'
import hero_bg from '@/assets/10.png'

// ─── Types ───────────────────────────────────────────────
type Client = {
  name: string
  img?: string | StaticImageData
}

// ─── Clients / Partners ──────────────────────────────────
const CLIENTS: Client[] = [
  { name: 'CRDB Bank', img: crdb_logo },
  { name: 'MIDEMA R.D Congo', img: midema_logo },
  { name: 'CILU', img: cilu_logo },
  { name: 'PPC', img: ppc_logo },
  { name: 'Engen', img: enge_logo },
  { name: 'Metalkol', img: metalkol },
  { name: 'Frontier', img: frontier },
  { name: 'Chemaf', img: Chemaf },
  { name: 'ABM', img: ABM },
  { name: 'Weir Minerals', img: weir_minerals },
  { name: 'Ivanhoe', img: ivanhoe },
  { name: 'SEK', img: sek },
]

// ─── Client Logo Component ───────────────────────────────
function isStaticImageData(img: string | StaticImageData): img is StaticImageData {
  return typeof img === 'object' && 'src' in img
}

function ClientLogo({ client }: { client: Client }) {
  return (
    <div className="group inline-flex shrink-0 items-center gap-3 px-1 opacity-40 transition-opacity duration-300 hover:opacity-75">
      {client.img ? (
        <div className="flex h-6 max-w-32 shrink-0 items-center">
          <Image
            src={client.img}
            alt={client.name}
            width={isStaticImageData(client.img) ? client.img.width : 120}
            height={isStaticImageData(client.img) ? client.img.height : 24}
            className="h-full w-auto max-w-full shrink-0 object-contain [filter:brightness(0)_invert(1)]"
            style={{ width: 'auto', height: '24px' }}
            unoptimized
          />
        </div>
      ) : (
        <span className="shrink-0 text-sm font-medium tracking-tight text-white/70">
          {client.name}
        </span>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════
export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-brand-navy">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero_bg}
          alt="L'équipe CAAF en réunion de travail"
          width={1920}
          height={1080}
          priority
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
          quality={85}
        />
        {/* Solid overlay — no gradients */}
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
                Cabinet d&apos;Audit &amp; Conseil — Depuis 1968
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-serif text-[clamp(2.8rem,5.2vw,5.5rem)] font-black leading-[0.88] tracking-[-0.03em] text-white transition-opacity duration-700 delay-100 ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="block">Votre Partenaire</span>
              <span className="block">de Confiance en</span>
              <span className="block mt-2">
                <span className="text-[#259E01]">Audit</span>
                <span className="text-white/40 font-light mx-3 text-[0.65em]">&amp;</span>
                <span className="text-[#259E01]">Conseil</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`mt-11 max-w-xl text-[16px] leading-[1.75] text-white/60 transition-opacity duration-700 delay-200 ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Plus de 55 ans au service des entreprises et institutions en RDC.
              Audit financier, commissariat aux comptes, conseil fiscal — avec la
              rigueur des normes internationales et une expertise terrain éprouvée.
            </p>

            {/* CTAs */}
            <div
              className={`mt-14 flex flex-col gap-4 sm:flex-row transition-opacity duration-700 delay-300 ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Link
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-3.5 text-[13px] font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-primary-active"
              >
                Découvrir nos Services
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Link>

              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 bg-transparent px-8 py-3.5 text-[13px] font-semibold tracking-wide text-white/80 transition-colors duration-200 hover:border-white/40 hover:text-white"
              >
                Prendre Rendez-vous
              </Link>
            </div>

            {/* Certifications — simple inline */}
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

        {/* Trusted By — Marquee */}
        <div
          className={`border-t border-white/[0.08] transition-opacity duration-700 delay-700 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center px-6 py-6 sm:px-10">
            <span className="mr-8 hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25 lg:block">
              Ils nous
              <br />
              font confiance
            </span>

            <div className="hidden h-8 w-px bg-white/[0.08] lg:block" />

            <div className="relative flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="flex w-max items-center gap-14 whitespace-nowrap pl-8 animate-[marquee_55s_linear_infinite]">
                {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                  <ClientLogo key={`${client.name}-${i}`} client={client} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

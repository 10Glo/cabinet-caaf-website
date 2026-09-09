// src/components/ui/audit-stats-section.tsx
'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import drcMap from '@/assets/drc-map-caaf.png'

// ─── Types ───────────────────────────────────────────────
type AuditStatItem = {
  value: number
  label: string
  suffix?: string
  prefix?: string
  decimals?: number
  description: string
}

type OfficeLocation = {
  name: string
  city: string
  type: 'siege' | 'bureau'
}

// ─── Data ────────────────────────────────────────────────
const AUDIT_STATS: AuditStatItem[] = [
  {
    value: 55,
    suffix: '+',
    label: "Années d'expérience",
    description: 'Au service des entreprises, institutions et groupes en RDC.',
  },
  {
    value: 350,
    suffix: '+',
    label: 'Missions réalisées',
    description: 'Audit, fiscalité, conseil et accompagnement opérationnel.',
  },
  {
    value: 45,
    suffix: '+',
    label: 'Professionnels actifs',
    description: 'Une équipe solide de professionnels qualifiés à votre écoute.',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Secteurs d\'activité',
    description: 'Banque, mines, ONG, télécoms, et plus encore. Une expertise transversale.',
  }
]

const OFFICES: OfficeLocation[] = [
  {
    name: 'Bureau Kinshasa',
    city: 'Kinshasa',
    type: 'siege',
  },
  {
    name: 'Bureau Lubumbashi',
    city: 'Lubumbashi',
    type: 'bureau',
  },
]

// ─── Pin positions (kept in sync with SVG line) ──────────
const PIN_POSITIONS = {
  Kinshasa: { top: '53.8%', left: '21.5%' },
  Lubumbashi: { top: '86%', left: '78.6%' },
} as const

// ─── Animated Number ─────────────────────────────────────
function AnimatedNumber({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  start,
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  start: boolean
}) {
  const [displayValue, setDisplayValue] = useState(0)

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat('fr-FR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }),
    [decimals],
  )

  useEffect(() => {
    if (!start) return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) {
      setDisplayValue(value)
      return
    }

    let frame = 0
    const duration = 1800
    const t0 = performance.now()

    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      setDisplayValue(value * (1 - Math.pow(1 - p, 3)))
      if (p < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, value])

  return (
    <span>
      {prefix}
      {formatter.format(displayValue)}
      {suffix}
    </span>
  )
}

// ─── DRC Map — minimal, decorative ───────────────────────
function DRCMap({
  locations,
  activeIndex,
}: {
  locations: OfficeLocation[]
  activeIndex: number
}) {
  return (
    <div
      className="relative mx-auto w-full"
      style={{ maxWidth: '560px', aspectRatio: '1 / 1' }}
    >
      <Image
        src={drcMap}
        alt="Carte de la RDC — Présence CAAF"
        width={560}
        height={560}
        className="h-full w-full select-none object-contain opacity-[0.75]"
      />

      {/* Connecting line — synced with PIN_POSITIONS */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line
          x1="21.5"
          y1="53.8"
          x2="78.6"
          y2="86"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="0.2"
          strokeDasharray="2 2"
        />
      </svg>

      {locations.map((loc, i) => {
        const isActive = i === activeIndex
        const pos = PIN_POSITIONS[loc.city as keyof typeof PIN_POSITIONS]

        return (
          <div
            key={loc.city}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: pos.top, left: pos.left }}
          >
            {isActive && (
              <span
                className="absolute animate-ping rounded-full bg-primary/20"
                style={{
                  width: '24px',
                  height: '24px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            )}

            <div
              className={`relative z-10 rounded-full transition-all duration-500 ${
                loc.type === 'siege' ? 'h-3 w-3' : 'h-2.5 w-2.5'
              } ${isActive ? 'bg-primary shadow-sm shadow-primary/30' : 'bg-[#111A4A]/20'}`}
            />

            <div
              className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center"
              style={{ top: '-24px' }}
            >
              <p
                className={`text-[9px] font-medium uppercase tracking-[0.15em] transition-colors duration-500 ${
                  isActive ? 'text-[#111A4A]' : 'text-[#111A4A]/25'
                }`}
              >
                {loc.city}
              </p>
              <p
                className={`text-[7px] uppercase tracking-[0.1em] transition-colors duration-500 ${
                  isActive ? 'text-primary' : 'text-[#111A4A]/15'
                }`}
              >
                {loc.name}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════
export function AuditStatsSection({ className }: { className?: string }) {
  const [activeOffice, setActiveOffice] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOffice((prev) => (prev + 1) % OFFICES.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-canvas px-6 pb-20 pt-16 sm:px-10 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-10 lg:pb-28 lg:pt-20">
        {/* ═══════════════════════════════════════════════
            TOP — Map + Text
            ═══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-x-14">
          {/* LEFT — Map */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <DRCMap locations={OFFICES} activeIndex={activeOffice} />
          </div>

          {/* RIGHT — Text */}
          <div className="order-1 relative z-10 lg:order-2 lg:col-span-7">
            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center">
              <span className="font-semibold text-[11px] uppercase tracking-[0.2em] text-primary">
                Notre présence en RDC
              </span>
            </div>

            <h2 className="mb-6 max-w-2xl text-[40px] font-normal leading-tight tracking-tight text-[#111A4A]">
              Au-delà d&apos;une présence géographique,{' '}
              <span className="opacity-40">une expertise portée ensemble en RDC.</span>
            </h2>

            <p className="mb-6 max-w-xl text-justify text-lg leading-6 text-[#111A4A] opacity-60">
              CAAF dispose en RDC d&apos;une longue et unique expérience en matière d&apos;audit et
              de conseil dans tous les secteurs d&apos;activités. Cette expérience implique une
              connaissance approfondie non seulement de l&apos;environnement interne de nos clients
              mais aussi de leur environnement externe. Avec deux bureaux stratégiquement
              positionnés et une équipe de professionnels dédiés, notre proximité dépasse la
              promesse — c&apos;est la base de notre accompagnement.
            </p>

            <div>
              <Link
                href="#contact"
                className="btn-primary-hero group relative inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-9 py-4 text-[14px] font-semibold tracking-wide text-white"
              >
                <span className="relative z-10">Découvrir notre cabinet</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            MIDDLE — Offices
            ═══════════════════════════════════════════════ */}
        <div className="mt-14 h-px bg-[#111A4A]/[0.06] lg:mt-16" />

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {OFFICES.map((office, i) => (
            <div
              key={office.city}
              className="flex items-baseline gap-3"
            >
              <span
                className={`h-2 w-2 shrink-0 rounded-full ${
                  i === activeOffice ? 'bg-primary' : 'bg-[#111A4A]/15'
                }`}
              />
              <span className="font-semibold text-[10px] uppercase tracking-[0.2em] text-primary">
                {office.type === 'siege' ? 'Bureau Kinshasa' : 'Bureau Lubumbashi'}
              </span>
              <span className="text-sm font-medium text-[#111A4A]">{office.city}</span>
            </div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════════
            BOTTOM — Stats
            ═══════════════════════════════════════════════ */}
        <div className="mb-8 mt-10 h-px bg-[#111A4A]/[0.06]" />

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {AUDIT_STATS.map((stat) => (
            <div key={stat.label}>
              <span className="text-2xl font-medium leading-[26.4px] tracking-tight text-primary">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                  start={true}
                />
              </span>
              <p className="mt-2 text-xs leading-[13.2px] text-[#7C7F88]">{stat.label}</p>
              <p className="mt-2 text-[11px] leading-[15px] text-[#7C7F88]/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

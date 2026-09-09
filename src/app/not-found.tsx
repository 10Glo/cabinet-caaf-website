// src/app/not-found.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import './(frontend)/styles.css'

export default function NotFound() {
  const [count, setCount] = useState(8)

  useEffect(() => {
    if (count <= 0) {
      window.location.href = '/'
      return
    }
    const timer = setInterval(() => {
      setCount((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [count])

  const formatted = String(count).padStart(2, '0')

  return (
    <div className="relative flex min-h-screen w-full select-none flex-col justify-between overflow-hidden bg-canvas text-ink">
      {/* Grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(20,20,19,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(20,20,19,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Top — Brand + 404 */}
      <div className="relative z-10 px-8 pt-10 md:px-16 md:pt-14">
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-lighter">
          CAAF SAS
        </span>

        <h1 className="mt-6 font-serif text-[clamp(4rem,12vw,10rem)] font-black leading-[0.85] tracking-[-0.04em] text-ink">
          404
          <span className="mx-3 font-light text-hairline-strong">/</span>
          <span className="text-[0.35em] font-sans font-bold uppercase tracking-[0.08em] text-ink-light">
            Page introuvable
          </span>
        </h1>

        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-light">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
          Vous serez redirigé vers l&apos;accueil automatiquement.
        </p>
      </div>

      {/* Bottom — Countdown + CTA */}
      <div className="relative z-10 flex flex-col items-end justify-between gap-8 px-8 pb-10 md:flex-row md:items-end md:px-16 md:pb-14">
        {/* Left — Links */}
        <div className="flex flex-col gap-3 self-start md:self-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-sm bg-brand-navy px-7 py-3 text-[13px] font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-brand-navy-deep"
          >
            Retour à l&apos;accueil
            <span>→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm border border-hairline bg-white px-7 py-3 text-[13px] font-semibold tracking-wide text-brand-navy transition-colors duration-200 hover:border-brand-navy/30"
          >
            Nous contacter
          </Link>
        </div>

        {/* Right — Countdown */}
        <div className="text-right">
          <span className="block font-serif text-[clamp(5rem,14vw,11rem)] font-black leading-none tracking-[-0.04em] text-ink/[0.07] tabular-nums">
            {formatted}
          </span>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-lighter">
            Redirection dans
          </p>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hairline to-transparent" />
    </div>
  )
}

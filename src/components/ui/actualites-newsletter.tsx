// src/components/actualites/actualites-newsletter.tsx
"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import ctaImage from "@/assets/3.png"

// ─── Constants ───────────────────────────────────────────
const EASE_OUT = [0.1, 0, 0.1, 1] as const

const TRUST_POINTS = [
  "Gratuit, sans engagement",
  "1 seul email par mois",
  "Désinscription en 1 clic",
  "Zéro spam, zéro revente de données",
]

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function ActualitesNewsletter() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-brand-navy"
    >
      {/* ── Grain texture ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* ── Grid + image layout ── */}
      <div className="relative z-10 grid min-h-[600px] grid-cols-1 lg:min-h-[700px] lg:grid-cols-2">
        {/* ═══════════════════════════════════════════════
            LEFT — Text content
            ═══════════════════════════════════════════════ */}
        <div className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
            className="mb-6 inline-flex items-center"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Newsletter
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={
              isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
            }
            transition={{ duration: 1.5, delay: 0.2, ease: EASE_OUT }}
            className="mb-6 max-w-lg text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-tight text-white"
          >
            Restez informé des évolutions
            <br />
            <span className="opacity-40">qui comptent.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={
              isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
            }
            transition={{ duration: 1.5, delay: 0.3, ease: EASE_OUT }}
            className="mb-10 max-w-md text-lg leading-6 text-white/45"
          >
            Recevez nos analyses, décryptages et alertes réglementaires
            directement dans votre boîte mail. Un email par mois, uniquement
            du contenu utile.
          </motion.p>

          {/* Email form */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={
              isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
            }
            transition={{ duration: 1.5, delay: 0.4, ease: EASE_OUT }}
          >
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <div className="flex-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="w-full rounded-sm border border-white/[0.12] bg-white/[0.04] px-5 py-4 text-[14px] text-white placeholder-white/30 outline-none backdrop-blur-sm transition-colors focus:border-primary/50 focus:bg-white/[0.08]"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary-hero group relative inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-9 py-4 text-[14px] font-semibold tracking-wide text-white"
                >
                  <span className="relative z-10">S&apos;abonner</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-3 rounded-sm border border-primary/20 bg-primary/10 px-6 py-4">
                <span className="text-sm text-white/70">
                  Merci ! Vous recevrez notre prochaine newsletter.
                </span>
              </div>
            )}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.55 }}
            className="my-10 h-px w-24 bg-white/[0.08]"
          />

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            animate={
              isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
            }
            transition={{ duration: 1.5, delay: 0.6, ease: EASE_OUT }}
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {TRUST_POINTS.map((point) => (
              <span key={point} className="text-xs text-white/25">
                {point}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════
            RIGHT — Full-height image
            ═══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3, ease: EASE_OUT }}
          className="relative h-[350px] sm:h-[400px] lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2"
        >
          <Image
            src={ctaImage}
            alt="Newsletter CAAF SAS — Analyses et décryptages"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Dark gradient overlay — blends image into navy background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/50 via-brand-navy/10 to-transparent lg:bg-gradient-to-r lg:from-brand-navy lg:via-brand-navy/40 lg:to-transparent" />

          {/* Bottom fade on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent lg:hidden" />
        </motion.div>
      </div>
    </section>
  )
}

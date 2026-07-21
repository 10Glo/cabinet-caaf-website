// src/components/ui/history-values.tsx
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

// ─── Constants ───────────────────────────────────────────
const EASE_OUT = [0.1, 0, 0.1, 1] as const

const VALUES = [
  {
    number: "01",
    title: "Intégrité",
    text: "L'indépendance d'esprit et la droiture sont non négociables. Chaque mission, chaque rapport, chaque conseil est guidé par une honnêteté totale envers nos clients et leurs parties prenantes.",
  },
  {
    number: "02",
    title: "Excellence",
    text: "Nous ne cherchons pas le résultat acceptable — nous cherchons le résultat juste. La qualité technique, la profondeur d'analyse et la rigueur méthodologique sont au cœur de chaque intervention.",
  },
  {
    number: "03",
    title: "Indépendance",
    text: "Notre jugement professionnel ne se monnaye pas. Nous refusons toute mission qui pourrait compromettre notre objectivité ou notre liberté de conclure selon les faits.",
  },
  {
    number: "04",
    title: "Engagement local",
    text: "Nous croyons que l'expertise de classe mondiale doit être accessible en RDC. Notre ancrage à Kinshasa et Lubumbashi n'est pas un choix géographique — c'est un engagement.",
  },
]

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function HistoryValues() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section
      ref={sectionRef}
      className="bg-canvas px-6 pb-20 pt-16 sm:px-10 lg:pb-28 lg:pt-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* ── Header ── */}
        <div className="mb-14 max-w-3xl lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
            className="mb-5 inline-flex items-center"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Nos piliers
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={
              isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
            }
            transition={{ duration: 1.5, delay: 0.2, ease: EASE_OUT }}
            className="mb-6 max-w-2xl text-[40px] font-normal leading-tight tracking-tight text-[#111A4A]"
          >
            Ce qui nous
            <br />
            <span className="opacity-40">définit.</span>
          </motion.h2>
        </div>

        {/* ── Values grid ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={
                isInView
                  ? {
                      opacity: [0, 1, 1],
                      y: [20, 0, 0],
                      filter: ["blur(4px)", "blur(0px)", "blur(0px)"],
                    }
                  : {}
              }
              transition={{
                duration: 1.5,
                delay: 0.3 + i * 0.1,
                ease: EASE_OUT,
              }}
              className="group border border-[#111A4A]/[0.06] bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#111A4A]/12 hover:shadow-[0_8px_30px_rgba(17,26,74,0.06)] md:p-10"
            >
              {/* Number */}
              <span className="mb-6 block font-mono text-[11px] text-[#7C7F88]/40">
                {value.number}
              </span>

              {/* Title */}
              <h3 className="mb-4 font-serif text-[22px] text-[#111A4A] transition-colors duration-300 group-hover:text-primary">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-7 text-[#7C7F88]">
                {value.text}
              </p>

              {/* Bottom accent */}
              <div className="mt-6 h-[2px] w-0 bg-primary/40 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

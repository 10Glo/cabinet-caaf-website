// src/components/ui/references-testimonials.tsx
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

// ─── Constants ───────────────────────────────────────────
const EASE_OUT = [0.1, 0, 0.1, 1] as const

const TESTIMONIALS = [
  {
    quote:
      "CAAF a su comprendre les exigences réglementaires propres à nos opérations en RDC tout en répondant parfaitement aux standards de reporting et d'audit exigés par notre siège international.",
    role: "CFO, Groupe minier international",
    sector: "Mines & Ressources",
    location: "Lubumbashi",
  },
  {
    quote:
      "L'équipe CAAF nous a accompagnés avec rigueur et discrétion dans la mise en conformité de notre dispositif de contrôle interne. Leurs recommandations ont été saluées par la BCC.",
    role: "Directeur Général, Institution bancaire",
    sector: "Banque & Services Financiers",
    location: "Kinshasa",
  },
  {
    quote:
      "La qualité du rapport d'audit fourni par CAAF a été déterminante pour obtenir le renouvellement du financement de notre programme par les bailleurs internationaux.",
    role: "Directeur de Programme, Organisation internationale",
    sector: "ONG & Développement",
    location: "Kinshasa",
  },
]

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function ReferencesTestimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section
      ref={sectionRef}
      className="bg-white px-6 pb-20 pt-16 sm:px-10 lg:pb-28 lg:pt-20"
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
              Témoignages
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
            Ce que disent
            <br />
            <span className="opacity-40">nos clients.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={
              isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
            }
            transition={{ duration: 1.5, delay: 0.3, ease: EASE_OUT }}
            className="max-w-xl text-lg leading-6 text-[#111A4A] opacity-60"
          >
            La satisfaction de nos clients est notre meilleure preuve de qualité.
            Voici quelques retours anonymisés, dans le respect de nos
            engagements de confidentialité.
          </motion.p>
        </div>

        {/* ── Testimonial cards ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
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
            >
              <article className="group flex h-full flex-col border border-[#111A4A]/[0.06] bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#111A4A]/12 hover:shadow-[0_8px_30px_rgba(17,26,74,0.06)]">
                {/* Quote */}
                <div className="flex-1">
                  <span className="mb-5 block font-serif text-[48px] leading-none text-primary/15">
                    &ldquo;
                  </span>

                  <blockquote className="font-serif text-lg italic leading-relaxed text-[#111A4A]/80">
                    {testimonial.quote}
                  </blockquote>
                </div>

                {/* Author */}
                <div className="mt-8 border-t border-[#111A4A]/[0.06] pt-6">
                  <p className="text-[13px] font-semibold text-[#111A4A]">
                    {testimonial.role}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C7F88]/50">
                      {testimonial.sector}
                    </span>
                    <span className="h-0.5 w-0.5 rounded-full bg-[#111A4A]/10" />
                    <span className="font-mono text-[10px] text-[#7C7F88]/40">
                      {testimonial.location}
                    </span>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="mt-6 h-[2px] w-0 bg-primary/40 transition-all duration-700 group-hover:w-full" />
              </article>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom strip ── */}
        <motion.div
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
          transition={{ duration: 1.5, delay: 0.7, ease: EASE_OUT }}
          className="mt-5 flex flex-col items-center justify-between gap-4 border border-[#111A4A]/[0.06] bg-white px-8 py-5 md:flex-row"
        >
          <p className="text-sm text-[#7C7F88]">
            Témoignages anonymisés.{" "}
            <span className="font-medium text-[#111A4A]/70">
              Références nominatives disponibles sur demande autorisée.
            </span>
          </p>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 text-[13px] font-medium text-primary transition-all hover:gap-2.5"
          >
            Demander des références
            <span className="text-[14px] leading-none transition-transform duration-200 group-hover:translate-x-0.5">
              &rarr;
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

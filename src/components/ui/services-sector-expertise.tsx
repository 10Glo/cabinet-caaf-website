// src/components/ui/services-sector-expertise.tsx
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// ─── Data ────────────────────────────────────────────────
const EASE_OUT = [0.1, 0, 0.1, 1] as const

const SECTORS = [
  { label: "Mines & Ressources", href: "/secteurs#mines-ressources" },
  { label: "Banque & Assurance", href: "/secteurs#banque-services-financiers" },
  { label: "Télécommunications", href: "/secteurs#telecommunications" },
  { label: "ONG & Développement", href: "/secteurs#ong-developpement" },
  { label: "Secteur Public", href: "/secteurs#institutions-secteur-public" },
  { label: "Industrie & Production", href: "/secteurs#industrie-production" },
  { label: "Groupes & Holdings", href: "/secteurs#groupes-holdings" },
  { label: "Santé & Éducation", href: "/secteurs#sante-education" },
]

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function ServicesSectorExpertise() {
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
              Expertise sectorielle
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
            Des services conçus pour{" "}
            <span className="opacity-40">
              des environnements spécialisés.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={
              isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
            }
            transition={{ duration: 1.5, delay: 0.3, ease: EASE_OUT }}
            className="max-w-xl text-lg leading-6 text-[#111A4A] opacity-60"
          >
            Nos services s&apos;adaptent aux secteurs les plus réglementés et
            les plus exigeants. Chaque intervention est calibrée selon les
            contraintes opérationnelles, comptables et stratégiques propres à
            votre activité.
          </motion.p>
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.35 }}
          className="h-px bg-[#111A4A]/[0.06]"
        />

        {/* ── Sector grid ── */}
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((sector, i) => (
            <motion.div
              key={sector.label}
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
                delay: 0.35 + i * 0.06,
                ease: EASE_OUT,
              }}
            >
              <Link
                href={sector.href}
                className="group flex items-center justify-between border-b border-r border-[#111A4A]/[0.06] px-6 py-6 transition-all duration-300 hover:bg-[#111A4A]/[0.02]"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-[#7C7F88]/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-[#111A4A] transition-colors duration-300 group-hover:text-primary">
                    {sector.label}
                  </span>
                </div>

                <ArrowRight
                  size={13}
                  className="text-[#7C7F88]/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="h-px bg-[#111A4A]/[0.06]"
        />

        {/* ── Bottom note ── */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={
            isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
          }
          transition={{ duration: 1.5, delay: 0.75, ease: EASE_OUT }}
          className="mt-10 flex flex-col items-center justify-between gap-4 border border-[#111A4A]/[0.06] bg-white px-8 py-5 md:flex-row"
        >
          <p className="text-sm text-[#7C7F88]">
            Votre secteur n&apos;apparaît pas ici ?{" "}
            <span className="font-medium text-[#111A4A]/70">
              Notre approche reste adaptable à des contextes spécifiques.
            </span>
          </p>

          <Link
            href="/secteurs"
            className="group/link inline-flex shrink-0 items-center gap-2 text-[13px] font-medium text-primary transition-all hover:gap-2.5"
          >
            Voir tous les secteurs
            <ArrowRight
              size={13}
              className="transition-transform group-hover/link:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

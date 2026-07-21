// src/components/ui/services-bento-grid.tsx
"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// ─── Data ────────────────────────────────────────────────
const EASE_OUT = [0.1, 0, 0.1, 1] as const

const SERVICE_CATEGORIES = [
  {
    number: "01",
    heading: "Audit & Assurance",
    tag: "Fondation",
    description:
      "Notre approche d'audit repose sur l'excellence technique, la compréhension du cadre réglementaire congolais et l'application rigoureuse des standards internationaux.",
    links: [
      { title: "Audit Financier", href: "/expertise/audit-financier", desc: "Certification selon les normes ISA" },
      { title: "Commissariat aux Comptes", href: "/services#commissariat", desc: "Mission légale de contrôle et attestation" },
      { title: "Audit Interne", href: "/services#audit-interne", desc: "Évaluation périodique du contrôle interne" },
      { title: "Audit Informatique", href: "/services#audit-informatique", desc: "Sécurité et gouvernance des SI" },
    ],
    size: "large" as const,
  },
  {
    number: "02",
    heading: "Risk Assurance",
    tag: "Protection",
    description:
      "Nous aidons les organisations à identifier, cartographier et maîtriser leurs risques opérationnels, financiers et de conformité.",
    links: [
      { title: "Contrôle Interne", href: "/services#controle-interne", desc: "Conception et optimisation des processus" },
      { title: "Gestion des Risques", href: "/services#gestion-risques", desc: "Cartographie et atténuation des risques" },
      { title: "Maîtrise des Risques", href: "/services#maitrise-risques", desc: "Conformité et contrôle permanent" },
    ],
    size: "medium" as const,
  },
  {
    number: "03",
    heading: "Conseil & Advisory",
    tag: "Stratégie",
    description:
      "Un conseil financier fiable dans les situations sensibles : opérations de croissance, restructurations, transactions et investigations.",
    links: [
      { title: "Conseil Fiscal", href: "/services#conseil-fiscal", desc: "Optimisation et conformité réglementaire" },
      { title: "Due Diligence", href: "/services#due-diligence", desc: "Analyse pour opérations M&A" },
      { title: "Restructuration", href: "/services#restructuration", desc: "Transformations structurelles et financières" },
    ],
    size: "medium" as const,
  },
  {
    number: "04",
    heading: "Services Comptables",
    tag: "Opérationnel",
    description:
      "Externalisation et supervision des fonctions comptables, paie et commerciales pour libérer vos équipes de la charge opérationnelle.",
    links: [
      { title: "Assistance Comptable", href: "/services#assistance-comptable", desc: "Tenue, révision et supervision" },
      { title: "Gestion de Paie", href: "/services#gestion-paie", desc: "Administration et conformité salariale" },
      { title: "Gestion Commerciale", href: "/services#gestion-commerciale", desc: "Facturation, suivi client et reporting" },
    ],
    size: "medium" as const,
  },
  {
    number: "05",
    heading: "Support Opérationnel",
    tag: "Execution",
    description:
      "Formalisation et fiabilisation de vos processus internes pour renforcer la cohérence opérationnelle de votre organisation.",
    links: [
      { title: "Manuels de Procédure", href: "/services#manuels-procedure", desc: "Formalisation des processus internes" },
      { title: "Support aux Logiciels", href: "/services#support-logiciels", desc: "Paramétrage et accompagnement ERP" },
    ],
    size: "small" as const,
  },
]

// ─── Service Card ────────────────────────────────────────

function ServiceCard({
  category,
  index,
  isInView,
}: {
  category: (typeof SERVICE_CATEGORIES)[number]
  index: number
  isInView: boolean
}) {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null)

  const colSpan =
    category.size === "large"
      ? "md:col-span-2"
      : category.size === "small"
        ? "md:col-span-1"
        : "md:col-span-1"

  return (
    <motion.article
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
        delay: 0.3 + index * 0.1,
        ease: EASE_OUT,
      }}
      className={`group flex flex-col border border-[#111A4A]/[0.06] bg-white ${colSpan}`}
    >
      {/* Top section */}
      <div className="flex-1 p-8 lg:p-10">
        {/* Number + Tag */}
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-[11px] text-[#7C7F88]/40">
            {category.number}
          </span>
          <span className="border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.02] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#7C7F88]/60">
            {category.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-4 font-serif text-2xl text-[#111A4A] transition-transform duration-500 group-hover:translate-x-1 lg:text-[28px]">
          {category.heading}
        </h3>

        {/* Description */}
        <p className="mb-8 text-sm leading-7 text-[#7C7F88]">
          {category.description}
        </p>

        {/* Services list */}
        <div className="space-y-0">
          {category.links.map((link, i) => (
            <Link
              key={link.title}
              href={link.href}
              onMouseEnter={() => setHoveredLink(i)}
              onMouseLeave={() => setHoveredLink(null)}
              className="group/link flex items-start justify-between gap-3 border-t border-[#111A4A]/[0.06] py-4 transition-all duration-300 first:border-t-0"
            >
              <div className="flex-1">
                <p
                  className={`text-sm font-medium transition-colors duration-300 ${
                    hoveredLink === i ? "text-primary" : "text-[#111A4A]"
                  }`}
                >
                  {link.title}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-[#7C7F88]/60">
                  {link.desc}
                </p>
              </div>

              <ArrowRight
                size={12}
                className={`mt-1 shrink-0 transition-all duration-300 ${
                  hoveredLink === i
                    ? "translate-x-0.5 text-primary"
                    : "text-[#7C7F88]/20"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="h-px w-0 bg-primary/40 transition-all duration-700 group-hover:w-full" />
    </motion.article>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function ServicesBentoGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const totalServices = SERVICE_CATEGORIES.reduce(
    (acc, cat) => acc + cat.links.length,
    0
  )

  return (
    <section
      ref={sectionRef}
      id="services-grid"
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
              Vue d&apos;ensemble
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
            Une offre structurée{" "}
            <span className="opacity-40">
              autour des enjeux les plus critiques.
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
            Nos services couvrent les besoins essentiels des organisations :
            fiabilité de l&apos;information financière, maîtrise des risques,
            transformation des fonctions support et accompagnement des
            décisions stratégiques.
          </motion.p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((category, i) => (
            <ServiceCard
              key={category.heading}
              category={category}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        {/* ── Bottom strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={
            isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
          }
          transition={{ duration: 1.5, delay: 0.9, ease: EASE_OUT }}
          className="mt-10 flex flex-col items-center justify-between gap-4 border border-[#111A4A]/[0.06] bg-white px-8 py-5 md:flex-row"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#7C7F88]/50">
              {totalServices}
            </span>
            <p className="text-sm text-[#7C7F88]">
              Une intervention peut mobiliser plusieurs expertises.{" "}
              <span className="font-medium text-[#111A4A]/70">
                Nous construisons l&apos;approche la plus adaptée.
              </span>
            </p>
          </div>

          <Link
            href="#contact"
            className="group/link inline-flex shrink-0 items-center gap-2 text-[13px] font-medium text-primary transition-all hover:gap-2.5"
          >
            Nous consulter
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

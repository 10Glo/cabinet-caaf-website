// src/components/ui/certifications-detail.tsx
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

// ─── Constants ───────────────────────────────────────────
const EASE_OUT = [0.1, 0, 0.1, 1] as const

type Certification = {
  number: string
  title: string
  fullName: string
  description: string
  scope: string[]
  implications: string[]
}

const CERTIFICATIONS: Certification[] = [
  {
    number: "01",
    title: "IFAC",
    fullName: "International Federation of Accountants",
    description:
      "La IFAC est l'organisation mondiale de la profession comptable. Notre conformité aux normes IFAC garantit que nos pratiques d'audit et d'assurance répondent aux standards les plus élevés reconnus internationalement.",
    scope: [
      "Normes internationales d'audit (ISA)",
      "Code de déontologie IESBA",
      "Normes de contrôle qualité (ISQM)",
      "Formation professionnelle continue",
    ],
    implications: [
      "Rapports acceptés par les investisseurs internationaux",
      "Méthodologie alignée sur les Big Four",
      "Crédibilité auprès des bailleurs de fonds",
    ],
  },
  {
    number: "02",
    title: "ONEC RDC",
    fullName: "Ordre National des Experts-Comptables de la RDC",
    description:
      "L'inscription à l'ONEC est la condition légale d'exercice de la profession d'expert-comptable et de commissaire aux comptes en République Démocratique du Congo. Elle atteste de notre compétence technique et de notre conformité déontologique.",
    scope: [
      "Inscription au tableau de l'Ordre",
      "Respect du code de déontologie national",
      "Assurance responsabilité civile professionnelle",
      "Contrôle qualité périodique",
    ],
    implications: [
      "Habilitation légale à certifier les comptes",
      "Reconnaissance par les juridictions congolaises",
      "Protection juridique des missions réalisées",
    ],
  },
  {
    number: "03",
    title: "OHADA",
    fullName: "Organisation pour l'Harmonisation en Afrique du Droit des Affaires",
    description:
      "Le référentiel comptable OHADA est le cadre normatif applicable dans les 17 États membres. Notre maîtrise du SYSCOHADA révisé garantit la conformité des états financiers produits ou audités par nos soins.",
    scope: [
      "SYSCOHADA révisé (2017)",
      "Plan comptable OHADA",
      "Normes de consolidation",
      "Traitement des instruments financiers",
    ],
    implications: [
      "États financiers conformes dans toute la zone OHADA",
      "Harmonisation multi-pays pour les groupes",
      "Base solide pour la conversion IFRS",
    ],
  },
  {
    number: "04",
    title: "ISA",
    fullName: "International Standards on Auditing",
    description:
      "Les normes ISA constituent le référentiel méthodologique mondial pour la conduite des missions d'audit. Nous appliquons l'intégralité du corpus ISA dans toutes nos missions de certification.",
    scope: [
      "ISA 200 à 810 — corpus complet",
      "Approche par les risques",
      "Documentation et traçabilité",
      "Rapport d'audit normé",
    ],
    implications: [
      "Missions reconnues par les sièges internationaux",
      "Rapports lisibles par tout auditeur mondial",
      "Qualité d'exécution vérifiable",
    ],
  },
]

// ─── Certification Card ──────────────────────────────────

function CertificationCard({
  cert,
  index,
  isInView,
}: {
  cert: Certification
  index: number
  isInView: boolean
}) {
  return (
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
      transition={{
        duration: 1.5,
        delay: 0.3 + index * 0.1,
        ease: EASE_OUT,
      }}
    >
      <article className="group border border-[#111A4A]/[0.06] bg-white transition-all duration-300 hover:border-[#111A4A]/12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
          {/* ── Left — Description ── */}
          <div className="p-8 md:p-10 lg:p-12">
            {/* Header */}
            <div className="mb-7 flex items-start gap-5">
              <span className="mt-1 shrink-0 font-mono text-[11px] text-[#7C7F88]/30">
                {cert.number}
              </span>
              <div>
                <h3 className="font-serif text-[26px] leading-tight text-[#111A4A] transition-colors duration-300 group-hover:text-primary">
                  {cert.title}
                </h3>
                <p className="mt-1 text-[12px] text-[#7C7F88]">
                  {cert.fullName}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mb-8 max-w-2xl text-base leading-7 text-[#7C7F88]">
              {cert.description}
            </p>

            {/* Scope */}
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7C7F88]/40">
                Périmètre couvert
              </p>
              <ul className="space-y-2.5">
                {cert.scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-[#7C7F88]"
                  >
                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right — Implications ── */}
          <div className="flex flex-col justify-between border-t border-[#111A4A]/[0.06] bg-[#111A4A]/[0.01] p-8 md:p-10 lg:border-t-0 lg:border-l lg:p-12">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7C7F88]/40">
                Ce que cela garantit
              </p>

              <div className="space-y-4">
                {cert.implications.map((item, i) => (
                  <div
                    key={item}
                    className="border border-[#111A4A]/[0.06] bg-white px-5 py-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 font-mono text-[9px] text-primary/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-6 text-[#7C7F88]">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom accent */}
            <div className="mt-8 h-[2px] w-0 bg-primary/30 transition-all duration-700 group-hover:w-full" />
          </div>
        </div>
      </article>
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function CertificationsDetail() {
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
              Détail des accréditations
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
            Chaque certification,
            <br />
            <span className="opacity-40">un engagement concret.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={
              isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
            }
            transition={{ duration: 1.5, delay: 0.3, ease: EASE_OUT }}
            className="max-w-xl text-lg leading-6 text-[#111A4A] opacity-60"
          >
            Nos accréditations ne sont pas des labels décoratifs. Elles
            structurent notre méthodologie, encadrent notre déontologie et
            garantissent à nos clients un niveau de qualité vérifiable.
          </motion.p>
        </div>

        {/* ── Certification cards ── */}
        <div className="space-y-5">
          {CERTIFICATIONS.map((cert, i) => (
            <CertificationCard
              key={cert.title}
              cert={cert}
              index={i}
              isInView={isInView}
            />
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
          transition={{ duration: 1.5, delay: 0.8, ease: EASE_OUT }}
          className="mt-5 flex flex-col items-center justify-between gap-4 border border-[#111A4A]/[0.06] bg-white px-8 py-5 md:flex-row"
        >
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-primary" />
            <p className="text-sm text-[#7C7F88]">
              Toutes nos accréditations sont vérifiables auprès des ordres
              compétents.{" "}
              <span className="font-medium text-[#111A4A]/70">
                Demandez nos attestations à tout moment.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

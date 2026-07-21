// src/components/ui/contact-faq.tsx
"use client"

import React, { useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

// ─── Constants ───────────────────────────────────────────
const EASE_OUT = [0.1, 0, 0.1, 1] as const

type FaqItem = {
  question: string
  answer: string
  category: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    category: "Prise de contact",
    question:
      "Quel est le délai de réponse après une demande de consultation ?",
    answer:
      "Nous nous engageons à répondre à toute demande dans un délai maximum de 24 heures ouvrées. Un interlocuteur senior qualifie votre besoin et vous recontacte par email ou par téléphone, selon votre préférence.",
  },
  {
    category: "Prise de contact",
    question: "Le premier échange est-il payant ?",
    answer:
      "Non. Le premier entretien est un échange exploratoire sans engagement. Il nous permet de comprendre votre contexte, d'évaluer la pertinence de notre intervention et de vous orienter vers le bon interlocuteur au sein du cabinet.",
  },
  {
    category: "Missions",
    question: "Quels types de missions réalisez-vous ?",
    answer:
      "Nous intervenons principalement en audit financier et légal, commissariat aux comptes, contrôle interne, due diligence, conseil fiscal et advisory stratégique. Nos missions sont adaptées à chaque contexte : secteur d'activité, taille de l'organisation, cadre réglementaire.",
  },
  {
    category: "Missions",
    question:
      "Intervenez-vous en dehors de Kinshasa et Lubumbashi ?",
    answer:
      "Oui. Bien que nos bureaux soient basés à Kinshasa et Lubumbashi, nous intervenons sur l'ensemble du territoire de la RDC, y compris dans les provinces minières (Lualaba, Haut-Katanga) et les zones d'opérations de nos clients.",
  },
  {
    category: "Confidentialité",
    question:
      "Comment garantissez-vous la confidentialité des échanges ?",
    answer:
      "La confidentialité est un principe fondamental de notre exercice. Tous les échanges sont couverts par le secret professionnel. Nous appliquons des protocoles stricts de protection des données et ne communiquons jamais d'informations client sans autorisation explicite.",
  },
  {
    category: "Confidentialité",
    question:
      "Puis-je demander des références avant de mandater CAAF ?",
    answer:
      "Absolument. Nous pouvons vous fournir des références sectorielles anonymisées ou, avec l'accord de nos clients, des contacts directs. Nous comprenons que la confiance se construit sur des preuves concrètes.",
  },
  {
    category: "Facturation",
    question:
      "Comment sont structurés vos honoraires ?",
    answer:
      "Nos honoraires dépendent de la nature, de la complexité et de la durée de la mission. Nous proposons systématiquement une lettre de mission détaillée avec une estimation précise avant le démarrage. Il n'y a pas de frais cachés.",
  },
  {
    category: "Carrières",
    question: "Comment postuler chez CAAF SAS ?",
    answer:
      "Vous pouvez consulter nos postes ouverts sur la page Carrières ou envoyer une candidature spontanée à recrutement@caaf-sas.com. Nous recherchons des profils rigoureux, intègres et motivés par l'excellence professionnelle.",
  },
]

// ─── Accordion Item ──────────────────────────────────────

function FaqAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`border transition-colors duration-300 ${
        isOpen
          ? "border-white/15 bg-white/[0.04]"
          : "border-white/[0.06] bg-white/[0.02] hover:border-white/10"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-5 px-7 py-6 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-5">
          {/* Number */}
          <span
            className={`mt-0.5 shrink-0 font-mono text-[10px] transition-colors duration-200 ${
              isOpen ? "text-primary" : "text-white/20"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div>
            <span
              className={`mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                isOpen ? "text-primary" : "text-white/25"
              }`}
            >
              {item.category}
            </span>
            <h3
              className={`font-serif text-lg leading-snug transition-colors duration-200 md:text-xl ${
                isOpen ? "text-white" : "text-white/60"
              }`}
            >
              {item.question}
            </h3>
          </div>
        </div>

        {/* Toggle indicator */}
        <span
          className={`mt-1 shrink-0 text-[18px] font-light transition-all duration-300 ${
            isOpen
              ? "rotate-45 text-primary"
              : "text-white/25"
          }`}
        >
          +
        </span>
      </button>

      {/* Answer — animated with grid-rows trick */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-7 pb-7 pl-[4.5rem] md:pl-[5rem]">
            <p className="max-w-2xl text-sm leading-7 text-white/50">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function ContactFaq() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      ref={sectionRef}
      className="bg-brand-navy px-10 py-section"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ═══════════════════════════════════════════════
              LEFT — Editorial column
              ═══════════════════════════════════════════════ */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
                className="mb-5 inline-flex items-center"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  FAQ
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={
                  isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
                }
                transition={{ duration: 1.5, delay: 0.2, ease: EASE_OUT }}
                className="mb-6 max-w-lg text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-tight text-white"
              >
                Questions
                <br />
                <span className="opacity-40">fréquentes.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={
                  isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
                }
                transition={{ duration: 1.5, delay: 0.3, ease: EASE_OUT }}
                className="mb-10 max-w-sm text-sm leading-7 text-white/45"
              >
                Retrouvez ici les réponses aux questions les plus courantes
                concernant nos services, notre approche et nos modalités
                d&apos;intervention.
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="mb-8 h-px w-16 bg-white/[0.08]"
              />

              {/* Side CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={
                  isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
                }
                transition={{ duration: 1.5, delay: 0.45, ease: EASE_OUT }}
              >
                <p className="mb-4 text-sm font-medium text-white/70">
                  Vous ne trouvez pas votre réponse ?
                </p>

                <p className="mb-6 text-[13px] leading-6 text-white/35">
                  Notre direction reste disponible pour répondre à vos
                  questions spécifiques en toute confidentialité.
                </p>

                <div className="space-y-3">
                  <Link
                    href="#formulaire-contact"
                    className="group flex items-center justify-between border border-white/[0.08] bg-white/[0.03] px-5 py-4 text-sm text-white/50 transition-all duration-200 hover:border-primary/20 hover:bg-white/[0.06] hover:text-white/80"
                  >
                    <span>Nous écrire</span>
                    <span className="text-white/15 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary">
                      &rarr;
                    </span>
                  </Link>

                  <Link
                    href="tel:+243000000000"
                    className="group flex items-center justify-between border border-white/[0.08] bg-white/[0.03] px-5 py-4 text-sm text-white/50 transition-all duration-200 hover:border-primary/20 hover:bg-white/[0.06] hover:text-white/80"
                  >
                    <span>Appeler directement</span>
                    <span className="text-white/15 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════
              RIGHT — FAQ accordion
              ═══════════════════════════════════════════════ */}
          <div className="space-y-2 lg:col-span-8">
            {FAQ_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={
                  isInView
                    ? {
                        opacity: [0, 1, 1],
                        y: [16, 0, 0],
                        filter: ["blur(4px)", "blur(0px)", "blur(0px)"],
                      }
                    : {}
                }
                transition={{
                  duration: 1.2,
                  delay: 0.25 + index * 0.04,
                  ease: EASE_OUT,
                }}
              >
                <FaqAccordionItem
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              </motion.div>
            ))}

            {/* Bottom strip */}
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={
                isInView
                  ? {
                      opacity: [0, 1, 1],
                      y: [16, 0, 0],
                      filter: ["blur(4px)", "blur(0px)", "blur(0px)"],
                    }
                  : {}
              }
              transition={{ duration: 1.5, delay: 0.6, ease: EASE_OUT }}
              className="mt-8 flex flex-col items-center justify-between gap-4 border border-white/[0.06] bg-white/[0.02] px-8 py-5 md:flex-row"
            >
              <p className="text-sm text-white/35">
                Toutes nos réponses sont données à titre informatif.{" "}
                <span className="font-medium text-white/55">
                  Chaque situation mérite un échange personnalisé.
                </span>
              </p>

              <Link
                href="#formulaire-contact"
                className="group inline-flex shrink-0 items-center gap-2 text-[13px] font-medium text-primary transition-all hover:gap-2.5"
              >
                Poser une question
                <span className="text-[14px] leading-none transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

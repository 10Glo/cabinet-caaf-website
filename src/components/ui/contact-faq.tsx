// src/components/ui/contact-faq.tsx
"use client"

import React, { useState } from "react"
import Link from "next/link"

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
          ? "border-primary/20 bg-white shadow-sm"
          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
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
              isOpen ? "text-primary" : "text-slate-300"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div>
            <span
              className={`mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                isOpen ? "text-primary" : "text-slate-400"
              }`}
            >
              {item.category}
            </span>
            <h3
              className={`font-serif text-lg leading-snug transition-colors duration-200 md:text-xl ${
                isOpen ? "text-slate-900" : "text-slate-700"
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
              : "text-slate-400"
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
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
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
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      className="relative overflow-hidden bg-[#f8fafc] border-t border-slate-200/60 px-10 py-section"
    >
      {/* Luminous base — same family as footer for seamless transition */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 50% 0%, rgba(37,158,1,0.05) 0%, transparent 70%), radial-gradient(700px 400px at 85% 30%, rgba(56,189,248,0.06) 0%, transparent 65%), radial-gradient(600px 400px at 15% 80%, rgba(14,165,233,0.04) 0%, transparent 70%)",
        }}
      />
      {/* Grain texture (subtle) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
      {/* Seamless transition to footer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f8fafc] to-transparent"
      />
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ═══════════════════════════════════════════════
              LEFT — Editorial column
              ═══════════════════════════════════════════════ */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div
                className="mb-5 inline-flex items-center"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  FAQ
                </span>
              </div>

              <h2
                className="mb-6 max-w-lg text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-tight text-slate-900"
              >
                Questions
                <br />
                <span className="text-slate-400">fréquentes.</span>
              </h2>

              <p
                className="mb-10 max-w-sm text-sm leading-7 text-slate-500"
              >
                Retrouvez ici les réponses aux questions les plus courantes
                concernant nos services, notre approche et nos modalités
                d&apos;intervention.
              </p>

              {/* Divider */}
              <div
                className="mb-8 h-px w-16 bg-slate-200"
              />

              {/* Side CTA */}
              <div>
                <p className="mb-4 text-sm font-medium text-white/70">
                  Vous ne trouvez pas votre réponse ?
                </p>

                <p className="mb-6 text-[13px] leading-6 text-slate-500">
                  Notre direction reste disponible pour répondre à vos
                  questions spécifiques en toute confidentialité.
                </p>

                <div className="space-y-3">
                  <Link
                    href="#formulaire-contact"
                    className="group flex items-center justify-between border border-white/[0.08] bg-white/[0.03] px-5 py-4 text-sm text-slate-600 transition-all duration-200 hover:border-primary/20 hover:bg-white/[0.06] hover:text-white/80"
                  >
                    <span>Nous écrire</span>
                    <span className="text-white/15 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary">
                      &rarr;
                    </span>
                  </Link>

                  <Link
                    href="tel:+243000000000"
                    className="group flex items-center justify-between border border-white/[0.08] bg-white/[0.03] px-5 py-4 text-sm text-slate-600 transition-all duration-200 hover:border-primary/20 hover:bg-white/[0.06] hover:text-white/80"
                  >
                    <span>Appeler directement</span>
                    <span className="text-white/15 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════
              RIGHT — FAQ accordion
              ═══════════════════════════════════════════════ */}
          <div className="space-y-2 lg:col-span-8">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index}>
                <FaqAccordionItem
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              </div>
            ))}

            {/* Bottom strip */}
            <div
              className="mt-8 flex flex-col items-center justify-between gap-4 border border-slate-200 bg-white px-8 py-5 md:flex-row"
            >
              <p className="text-sm text-slate-500">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

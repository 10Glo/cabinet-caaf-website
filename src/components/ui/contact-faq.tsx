// src/components/ui/contact-faq.tsx
"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  ChevronDown,
  ArrowRight,
  HelpCircle,
  ShieldCheck,
  MessageSquare,
} from "lucide-react"
import { cn } from "@/lib/utils"

type FaqItem = {
  question: string
  answer: string
  category: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    category: "Prise de contact",
    question: "Quel est le délai de réponse après une demande de consultation ?",
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
    question: "Intervenez-vous en dehors de Kinshasa et Lubumbashi ?",
    answer:
      "Oui. Bien que nos bureaux soient basés à Kinshasa et Lubumbashi, nous intervenons sur l'ensemble du territoire de la RDC, y compris dans les provinces minières (Lualaba, Haut-Katanga) et les zones d'opérations de nos clients.",
  },
  {
    category: "Confidentialité",
    question: "Comment garantissez-vous la confidentialité des échanges ?",
    answer:
      "La confidentialité est un principe fondamental de notre exercice. Tous les échanges sont couverts par le secret professionnel. Nous appliquons des protocoles stricts de protection des données et ne communiquons jamais d'informations client sans autorisation explicite.",
  },
  {
    category: "Confidentialité",
    question: "Puis-je demander des références avant de mandater CAAF ?",
    answer:
      "Absolument. Nous pouvons vous fournir des références sectorielles anonymisées ou, avec l'accord de nos clients, des contacts directs. Nous comprenons que la confiance se construit sur des preuves concrètes.",
  },
  {
    category: "Facturation",
    question: "Comment sont structurés vos honoraires ?",
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
  isOpen,
  onToggle,
}: {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={cn(
        "border border-hairline bg-white transition-colors",
        isOpen && "border-primary/20 bg-primary/[0.02]"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left md:px-8"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border transition-colors",
              isOpen
                ? "border-primary/20 bg-primary/10"
                : "border-hairline bg-canvas"
            )}
          >
            <HelpCircle
              className={cn(
                "h-4 w-4 transition-colors",
                isOpen ? "text-primary" : "text-ink/30"
              )}
              strokeWidth={1.7}
            />
          </div>

          <div>
            <span
              className={cn(
                "mb-1 block text-[10px] font-semibold uppercase tracking-[0.14em]",
                isOpen ? "text-primary" : "text-ink/25"
              )}
            >
              {item.category}
            </span>
            <h3
              className={cn(
                "font-serif text-lg transition-colors md:text-xl",
                isOpen ? "text-brand-navy" : "text-ink/70"
              )}
            >
              {item.question}
            </h3>
          </div>
        </div>

        <ChevronDown
          size={18}
          className={cn(
            "mt-1 shrink-0 transition-transform duration-200",
            isOpen ? "rotate-180 text-primary" : "text-ink/30"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pl-[72px] md:px-8 md:pb-8 md:pl-[88px]">
            <p className="max-w-3xl text-sm leading-7 text-ink/55">
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
    <section className="border-t border-hairline bg-canvas px-10 py-section">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left editorial column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  FAQ
                </span>
              </div>

              <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
                Questions
                <br />
                <span className="text-ink/40">fréquentes.</span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-ink/55">
                Retrouvez ici les réponses aux questions les plus courantes
                concernant nos services, notre approche et nos modalités
                d&apos;intervention.
              </p>

              {/* Side panel */}
              <div className="mt-10 border border-hairline bg-surface-card/40 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <MessageSquare
                    className="h-5 w-5 text-primary"
                    strokeWidth={1.7}
                  />
                  <p className="text-sm font-semibold text-brand-navy">
                    Vous ne trouvez pas votre réponse ?
                  </p>
                </div>

                <p className="mb-5 text-sm leading-7 text-ink/50">
                  Notre direction reste disponible pour répondre à vos questions
                  spécifiques en toute confidentialité.
                </p>

                <div className="space-y-3">
                  <Link
                    href="#formulaire-contact"
                    className="group flex items-center gap-2 border border-hairline bg-white px-4 py-3 text-sm font-medium text-ink/70 transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    <MessageSquare
                      className="h-4 w-4 text-ink/30 transition-colors group-hover:text-primary"
                      strokeWidth={1.7}
                    />
                    Nous écrire
                  </Link>

                  <a
                    href="tel:+243000000000"
                    className="group flex items-center gap-2 border border-hairline bg-white px-4 py-3 text-sm font-medium text-ink/70 transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    <ShieldCheck
                      className="h-4 w-4 text-ink/30 transition-colors group-hover:text-primary"
                      strokeWidth={1.7}
                    />
                    Appeler directement
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right FAQ accordion */}
          <div className="space-y-3 lg:col-span-8">
            {FAQ_ITEMS.map((item, index) => (
              <FaqAccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}

            {/* Bottom strip */}
            <div className="mt-8 flex flex-col items-center justify-between gap-4 border border-hairline bg-white px-8 py-5 md:flex-row">
              <div className="flex items-center gap-3">
                <ShieldCheck
                  className="h-5 w-5 text-primary"
                  strokeWidth={1.7}
                />
                <p className="text-sm text-ink/60">
                  Toutes nos réponses sont données à titre informatif.{" "}
                  <span className="font-medium text-ink/80">
                    Chaque situation mérite un échange personnalisé.
                  </span>
                </p>
              </div>

              <Link
                href="#formulaire-contact"
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
              >
                Poser une question
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
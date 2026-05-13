// src/components/ui/references-testimonials.tsx
"use client"

import {
  Quote,
  Globe2,
  Landmark,
  Factory,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react"
import Link from "next/link"

type Testimonial = {
  quote: string
  role: string
  sector: string
  location: string
  variant: "light" | "dark"
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "CAAF a su comprendre les exigences réglementaires propres à nos opérations en RDC tout en répondant parfaitement aux standards de reporting et d'audit exigés par notre siège international.",
    role: "CFO, Groupe minier international",
    sector: "Mines & Ressources",
    location: "Lubumbashi",
    variant: "dark",
  },
  {
    quote:
      "L'équipe CAAF nous a accompagnés avec rigueur et discrétion dans la mise en conformité de notre dispositif de contrôle interne. Leurs recommandations ont été saluées par la BCC.",
    role: "Directeur Général, Institution bancaire",
    sector: "Banque & Services Financiers",
    location: "Kinshasa",
    variant: "light",
  },
  {
    quote:
      "La qualité du rapport d'audit fourni par CAAF a été déterminante pour obtenir le renouvellement du financement de notre programme par les bailleurs internationaux.",
    role: "Directeur de Programme, Organisation internationale",
    sector: "ONG & Développement",
    location: "Kinshasa",
    variant: "light",
  },
]

export function ReferencesTestimonials() {
  return (
    <section className="border-t border-hairline bg-white px-10 py-section">
      <div className="w-full">
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Témoignages
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              Ce que disent
              <br />
              <span className="text-ink/40">nos clients.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            La satisfaction de nos clients est notre meilleure preuve de qualité.
            Voici quelques retours anonymisés, dans le respect de nos engagements
            de confidentialité.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <article
              key={index}
              className={
                testimonial.variant === "dark"
                  ? "flex flex-col justify-between border border-white/10 bg-surface-dark p-8"
                  : "flex flex-col justify-between border border-hairline bg-canvas p-8"
              }
            >
              <div>
                <Quote
                  className={
                    testimonial.variant === "dark"
                      ? "mb-5 h-8 w-8 text-primary/50"
                      : "mb-5 h-8 w-8 text-primary/30"
                  }
                  strokeWidth={1.5}
                />

                <blockquote
                  className={
                    testimonial.variant === "dark"
                      ? "font-serif text-lg italic leading-relaxed text-white/80"
                      : "font-serif text-lg italic leading-relaxed text-brand-navy"
                  }
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>

              <div
                className={
                  testimonial.variant === "dark"
                    ? "mt-8 border-t border-white/[0.06] pt-5"
                    : "mt-8 border-t border-hairline pt-5"
                }
              >
                <p
                  className={
                    testimonial.variant === "dark"
                      ? "text-sm font-semibold text-white"
                      : "text-sm font-semibold text-brand-navy"
                  }
                >
                  {testimonial.role}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <span
                    className={
                      testimonial.variant === "dark"
                        ? "text-xs uppercase tracking-[0.14em] text-white/35"
                        : "text-xs uppercase tracking-[0.14em] text-ink/35"
                    }
                  >
                    {testimonial.sector}
                  </span>
                  <span
                    className={
                      testimonial.variant === "dark"
                        ? "text-xs text-white/25"
                        : "text-xs text-ink/20"
                    }
                  >
                    ·
                  </span>
                  <span
                    className={
                      testimonial.variant === "dark"
                        ? "text-xs text-white/30"
                        : "text-xs text-ink/30"
                    }
                  >
                    {testimonial.location}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border border-hairline bg-canvas px-8 py-5 md:flex-row">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={1.7} />
            <p className="text-sm text-ink/60">
              Témoignages anonymisés.{" "}
              <span className="font-medium text-ink/80">
                Références nominatives disponibles sur demande autorisée.
              </span>
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
          >
            Demander des références
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
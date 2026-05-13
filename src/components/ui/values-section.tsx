// src/components/ui/values-section.tsx
"use client"

import {
  ShieldCheck,
  Scale,
  SearchCheck,
  Handshake,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const VALUES = [
  {
    title: "Intégrité",
    description:
      "Nous agissons avec droiture, indépendance et cohérence dans chacune de nos missions, quelles que soient les contraintes du contexte.",
    icon: ShieldCheck,
  },
  {
    title: "Rigueur",
    description:
      "Nos interventions reposent sur une méthodologie exigeante, une analyse documentée et un haut niveau d’attention au détail.",
    icon: SearchCheck,
  },
  {
    title: "Responsabilité",
    description:
      "Nous mesurons l’impact de nos recommandations et assumons pleinement notre rôle dans la sécurisation des décisions de nos clients.",
    icon: Scale,
  },
  {
    title: "Engagement",
    description:
      "Nous construisons des relations durables avec les dirigeants, fondées sur l’écoute, la confidentialité et la qualité d’exécution.",
    icon: Handshake,
  },
]

export function ValuesSection() {
  return (
    <section className="border-t border-hairline bg-white px-10 py-section">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left editorial block */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Nos valeurs
                </span>
              </div>

              <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
                Les principes qui
                <br />
                <span className="text-ink/40">guident notre pratique.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/60">
                Au-delà de l’expertise technique, CAAF SAS s’appuie sur un socle
                de convictions professionnelles qui structurent notre manière de
                travailler, de conseiller et d’accompagner les décideurs.
              </p>
            </div>

            {/* Manifesto block */}
            <div className="mt-10 border border-hairline bg-surface-card/40 p-8">
              <p className="font-serif text-2xl italic leading-relaxed text-brand-navy">
                “La confiance ne se déclare pas.
                <br />
                Elle se démontre, mission après mission.”
              </p>

              <div className="mt-8 border-t border-hairline pt-5">
                <p className="text-xs uppercase tracking-[0.15em] text-ink/35">
                  Doctrine du cabinet
                </p>
              </div>
            </div>
          </div>

          {/* Right values grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {VALUES.map((value, index) => (
              <article
                key={value.title}
                className={
                  index === 1
                    ? "border border-white/10 bg-surface-dark p-8"
                    : "border border-hairline bg-white p-8"
                }
              >
                <div
                  className={
                    index === 1
                      ? "mb-6 flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5"
                      : "mb-6 flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5"
                  }
                >
                  <value.icon
                    className={index === 1 ? "h-6 w-6 text-primary" : "h-6 w-6 text-primary"}
                    strokeWidth={1.7}
                  />
                </div>

                <h3
                  className={
                    index === 1
                      ? "font-serif text-2xl text-white"
                      : "font-serif text-2xl text-brand-navy"
                  }
                >
                  {value.title}
                </h3>

                <p
                  className={
                    index === 1
                      ? "mt-4 text-sm leading-7 text-white/60"
                      : "mt-4 text-sm leading-7 text-ink/55"
                  }
                >
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border border-hairline bg-canvas px-8 py-5 md:flex-row">
          <p className="text-sm text-ink/60">
            Nos valeurs structurent notre posture, notre méthodologie et notre
            relation de confiance avec chaque client.
          </p>

          <Link
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
          >
            Échanger avec notre équipe
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
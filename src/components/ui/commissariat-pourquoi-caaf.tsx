
"use client"

import {
  Scale,
  UserCheck,
  Clock,
  BookOpen,
  ShieldCheck,
  Building2,
} from "lucide-react"

const DIFFERENTIATORS = [
  {
    icon: Scale,
    title: "Maîtrise du cadre OHADA",
    description:
      "Notre connaissance approfondie de l'Acte Uniforme relatif au droit des sociétés et du droit comptable OHADA garantit une mission parfaitement conforme aux exigences légales applicables en RDC.",
  },
  {
    icon: UserCheck,
    title: "Un associé signataire impliqué",
    description:
      "L'associé qui signe vos rapports est celui qui supervise vos travaux. Pas de délégation opaque — un engagement personnel sur la qualité et la pertinence de chaque intervention.",
  },
  {
    icon: ShieldCheck,
    title: "Indépendance structurelle",
    description:
      "Cabinet indépendant, nous ne sommes soumis à aucune pression de réseau. Nos opinions sont dictées par nos constats, jamais par des considérations commerciales.",
  },
  {
    icon: Building2,
    title: "Expérience multi-sectorielle",
    description:
      "Mines, banque, industrie, ONG — notre portefeuille de mandats couvre les secteurs les plus exigeants de l'économie congolaise, avec les spécificités comptables de chacun.",
  },
  {
    icon: Clock,
    title: "Continuité sur le mandat",
    description:
      "Un mandat de six ans exige de la constance. Nos équipes sont stables, nos méthodes documentées et notre connaissance de votre entité s'approfondit chaque année.",
  },
  {
    icon: BookOpen,
    title: "Valeur ajoutée au-delà de l'opinion",
    description:
      "Nos recommandations ne sont pas des observations de forme. Elles visent des améliorations concrètes de vos processus, de votre contrôle interne et de votre gouvernance.",
  },
]

export function CommissariatPourquoiCaaf() {
  return (
    <section className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* ── Heading ── */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Pourquoi CAAF
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
            Le choix d&apos;un commissaire
            <br />
            est un acte de gouvernance.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
            Nommer un commissaire aux comptes, c&apos;est confier la
            certification de vos comptes à un professionnel pour six exercices.
            Voici pourquoi les entreprises congolaises et internationales nous
            font confiance.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {DIFFERENTIATORS.map((item, index) => {
            const Icon = item.icon
            const isWide = index === 0 || index === 3 || index === 4
            const colSpan = isWide ? "md:col-span-8" : "md:col-span-4"
            const isDark = index === 2 || index === 5

            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden border p-8 transition-colors md:p-10 ${colSpan} ${
                  isDark
                    ? "border-white/10 bg-surface-dark"
                    : "border-hairline bg-white"
                }`}
              >
                <div
                  className={`pointer-events-none absolute -right-4 -top-4 opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.06] ${
                    isDark ? "text-white" : "text-brand-navy"
                  }`}
                >
                  <Icon className="h-36 w-36" strokeWidth={0.7} />
                </div>

                <div className="relative z-10">
                  <div
                    className={`mb-6 inline-flex h-12 w-12 items-center justify-center border ${
                      isDark
                        ? "border-white/10 bg-white/5 text-primary"
                        : "border-primary/20 bg-primary/5 text-primary"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>

                  <h3
                    className={`font-serif text-xl md:text-2xl ${
                      isDark ? "text-white" : "text-brand-navy"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-4 max-w-lg text-sm leading-7 md:text-base ${
                      isDark ? "text-white/55" : "text-ink/60"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
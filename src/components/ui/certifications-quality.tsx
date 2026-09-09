// src/components/ui/certifications-quality.tsx
"use client"

// ─── Constants ───────────────────────────────────────────
const EASE_OUT = [0.1, 0, 0.1, 1] as const

const QUALITY_PILLARS = [
  {
    number: "01",
    title: "Contrôle qualité interne",
    description:
      "Chaque mission fait l'objet d'une revue indépendante par un associé non impliqué dans l'exécution. Ce dispositif garantit une objectivité totale dans l'évaluation de la qualité technique.",
  },
  {
    number: "02",
    title: "Formation continue",
    description:
      "Nos équipes suivent un programme annuel de mise à jour technique couvrant les évolutions normatives ISA, IFRS et SYSCOHADA. Chaque professionnel cumule au minimum 40 heures de formation par an.",
  },
  {
    number: "03",
    title: "Indépendance garantie",
    description:
      "Nous appliquons des procédures strictes de vérification d'indépendance avant chaque acceptation de mission. Aucune mission n'est acceptée si un risque d'atteinte à l'indépendance est identifié.",
  },
  {
    number: "04",
    title: "Supervision senior",
    description:
      "Tout livrable est validé par un associé ou un directeur avant communication au client. La hiérarchie de validation est formalisée et documentée pour chaque mission.",
  },
]

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function CertificationsQuality() {
  return (
    <section
      className="bg-white px-6 pb-20 pt-16 sm:px-10 lg:pb-28 lg:pt-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ═══════════════════════════════════════════════
              LEFT — Editorial column
              ═══════════════════════════════════════════════ */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div
                className="mb-5 inline-flex items-center"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Engagement qualité
                </span>
              </div>

              <h2
                className="mb-6 max-w-lg text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-tight text-[#111A4A]"
              >
                Au-delà des labels,
                <br />
                <span className="opacity-40">
                  une discipline quotidienne.
                </span>
              </h2>

              <p
                className="mb-10 max-w-sm text-sm leading-7 text-[#7C7F88]"
              >
                Nos certifications ne sont pas des acquis statiques. Elles
                s&apos;accompagnent de mécanismes internes de contrôle, de
                formation et de supervision qui garantissent leur application
                effective à chaque mission.
              </p>

              {/* Divider */}
              <div
                className="mb-8 h-px w-16 bg-[#111A4A]/[0.06]"
              />

              {/* Quote card */}
              <div
                className="border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.01] p-8"
              >
                <span className="mb-4 block font-serif text-[48px] leading-none text-primary/20">
                  &ldquo;
                </span>

                <blockquote className="font-serif text-xl italic leading-relaxed text-[#111A4A]">
                  La qualité n&apos;est pas un objectif. C&apos;est une
                  habitude, un réflexe, une exigence constante.
                </blockquote>

                <div className="mt-6 border-t border-[#111A4A]/[0.06] pt-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7C7F88]/40">
                    Politique qualité CAAF SAS
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════
              RIGHT — Pillar cards
              ═══════════════════════════════════════════════ */}
          <div className="space-y-5 lg:col-span-7">
            {QUALITY_PILLARS.map((pillar) => (
              <div key={pillar.title}>
                <article className="group border border-[#111A4A]/[0.06] bg-white p-8 transition-all duration-300 hover:border-[#111A4A]/12 md:p-10">
                  <div className="flex items-start gap-5">
                    {/* Number */}
                    <span className="mt-1 shrink-0 font-mono text-[11px] text-[#7C7F88]/30">
                      {pillar.number}
                    </span>

                    <div className="flex-1">
                      <h3 className="mb-3 font-serif text-[22px] text-[#111A4A] transition-colors duration-300 group-hover:text-primary">
                        {pillar.title}
                      </h3>
                      <p className="text-sm leading-7 text-[#7C7F88]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-6 h-[2px] w-0 bg-primary/40 transition-all duration-700 group-hover:w-full" />
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

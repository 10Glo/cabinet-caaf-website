// src/components/ui/certifications-quality.tsx
"use client"

import {
  ShieldCheck,
  FileCheck2,
  Users,
  BookOpen,
  CheckCircle2,
  Quote,
} from "lucide-react"

const QUALITY_PILLARS = [
  {
    title: "Contrôle qualité interne",
    description:
      "Chaque mission fait l'objet d'une revue indépendante par un associé non impliqué dans l'exécution.",
    icon: FileCheck2,
  },
  {
    title: "Formation continue",
    description:
      "Nos équipes suivent un programme annuel de mise à jour technique couvrant les évolutions normatives.",
    icon: BookOpen,
  },
  {
    title: "Indépendance garantie",
    description:
      "Nous appliquons des procédures strictes de vérification d'indépendance avant chaque acceptation de mission.",
    icon: ShieldCheck,
  },
  {
    title: "Supervision senior",
    description:
      "Tout livrable est validé par un associé ou un directeur avant communication au client.",
    icon: Users,
  },
]

export function CertificationsQuality() {
  return (
    <section className="border-t border-hairline bg-white px-10 py-section">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Engagement qualité
                </span>
              </div>

              <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
                Au-delà des labels,
                <br />
                <span className="text-ink/40">une discipline quotidienne.</span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-ink/55">
                Nos certifications ne sont pas des acquis statiques. Elles
                s&apos;accompagnent de mécanismes internes de contrôle, de
                formation et de supervision qui garantissent leur application
                effective à chaque mission.
              </p>

              <div className="mt-10 border border-hairline bg-surface-card/40 p-8">
                <Quote className="mb-4 h-8 w-8 text-primary/50" strokeWidth={1.5} />

                <blockquote className="font-serif text-xl italic leading-relaxed text-brand-navy">
                  &ldquo;La qualité n&apos;est pas un objectif. C&apos;est une
                  habitude, un réflexe, une exigence constante.&rdquo;
                </blockquote>

                <div className="mt-6 border-t border-hairline pt-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-ink/35">
                    Politique qualité CAAF SAS
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-7">
            {QUALITY_PILLARS.map((pillar, index) => (
              <article
                key={pillar.title}
                className={
                  index === 2
                    ? "group border border-white/10 bg-surface-dark p-8 md:p-10"
                    : "group border border-hairline bg-canvas p-8 transition-colors hover:bg-surface-soft/40 md:p-10"
                }
              >
                <div className="flex items-start gap-5">
                  <div
                    className={
                      index === 2
                        ? "flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 bg-white/5"
                        : "flex h-12 w-12 shrink-0 items-center justify-center border border-primary/20 bg-primary/5"
                    }
                  >
                    <pillar.icon className="h-6 w-6 text-primary" strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3
                      className={
                        index === 2
                          ? "font-serif text-2xl text-white"
                          : "font-serif text-2xl text-brand-navy"
                      }
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className={
                        index === 2
                          ? "mt-3 text-sm leading-7 text-white/55"
                          : "mt-3 text-sm leading-7 text-ink/55"
                      }
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-[2px] w-0 bg-primary/40 transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
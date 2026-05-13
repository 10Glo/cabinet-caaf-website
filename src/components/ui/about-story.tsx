// src/components/ui/about-story.tsx
"use client"

import {
  History,
  CheckCircle2,
  ShieldCheck,
  Landmark,
  Award,
  Globe2,
  Scale,
  Users,
  ArrowRight,
  BadgeCheck,
} from "lucide-react"
import Link from "next/link"

const WHY_CHOOSE = [
  "Maîtrise approfondie de la réglementation RDC",
  "Méthodologie d'audit alignée sur les standards IFAC",
  "Conseil bilingue (Français / Anglais)",
  "Expertise OHADA & IFRS combinée",
  "Réseau sectoriel établi depuis 30 ans",
]

const CERTIFICATIONS = [
  {
    badge: "Certifié",
    title: "IFAC",
    description:
      "Conformité intégrale aux normes de la Fédération Internationale des Comptables.",
    icon: Globe2,
  },
  {
    badge: "Accrédité",
    title: "ONEC RDC",
    description:
      "Inscrit à l'Ordre National des Experts-Comptables de la République Démocratique du Congo.",
    icon: Landmark,
  },
  {
    badge: "Conforme",
    title: "OHADA",
    description:
      "Application rigoureuse du référentiel comptable OHADA dans l'ensemble de nos missions.",
    icon: Scale,
  },
]

const MILESTONES = [
  { year: "1994", label: "Création du cabinet" },
  { year: "2004", label: "Expansion Lubumbashi" },
  { year: "2012", label: "Certification IFAC" },
  { year: "2020", label: "150+ clients actifs" },
]

export function AboutStory() {
  return (
    <section className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* ═══ Our Story — large card ═══ */}
          <article className="relative overflow-hidden border border-hairline bg-white p-8 md:col-span-8 md:p-12">
            {/* Top accent */}
            <div className="absolute right-0 top-0 h-[2px] w-24 bg-primary" />

            {/* Corner decorative */}
            <div className="absolute right-0 top-0 h-20 w-20">
              <div className="absolute right-0 top-0 h-px w-20 bg-gradient-to-l from-primary/30 to-transparent" />
              <div className="absolute right-0 top-0 h-20 w-px bg-gradient-to-b from-primary/30 to-transparent" />
            </div>

            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Notre histoire
              </span>
            </div>

            <h2 className="max-w-2xl font-serif text-3xl leading-tight text-brand-navy md:text-4xl">
              30 ans de rigueur au service
              <br />
              de l&apos;économie congolaise.
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-[1fr_0.8fr]">
              <div className="space-y-5">
                <p className="text-base leading-7 text-ink/60">
                  Fondé avec la conviction que les entreprises congolaises
                  méritent un accompagnement de niveau international, CAAF SAS
                  s&apos;est construit au fil des années comme un acteur de
                  référence dans l&apos;audit, le conseil et l&apos;assurance en
                  RDC.
                </p>

                <p className="text-base leading-7 text-ink/60">
                  Notre parcours est défini par un ancrage profond dans le tissu
                  économique local, combiné aux méthodologies rigoureuses
                  attendues par les investisseurs internationaux, les groupes
                  multinationaux et les institutions financières.
                </p>

                <Link
                  href="#timeline"
                  className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
                >
                  Voir notre parcours complet
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              {/* Mini timeline */}
              <div className="border-l border-hairline pl-6">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/30">
                  Étapes clés
                </p>
                <div className="space-y-5">
                  {MILESTONES.map((m, i) => (
                    <div key={m.year} className="flex items-start gap-3">
                      <div className="relative mt-1">
                        <div className="h-2.5 w-2.5 border border-primary/40 bg-primary/10" />
                        {i < MILESTONES.length - 1 && (
                          <div className="absolute left-1/2 top-full h-6 w-px -translate-x-1/2 bg-hairline" />
                        )}
                      </div>
                      <div>
                        <span className="font-mono text-xs font-semibold text-primary">
                          {m.year}
                        </span>
                        <p className="mt-0.5 text-sm text-ink/50">{m.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* ═══ Years of excellence — stat card ═══ */}
          <article className="flex flex-col justify-between border border-hairline bg-surface-card p-8 md:col-span-4">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                <History className="h-6 w-6 text-primary" strokeWidth={1.7} />
              </div>

              <div className="font-serif text-6xl leading-none text-brand-navy">
                30<span className="text-primary">+</span>
              </div>

              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-ink/40">
                Années d&apos;excellence partenariale
              </p>
            </div>

            <div className="mt-8 border-t border-hairline pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-serif text-2xl text-brand-navy">500+</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ink/35">
                    missions
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl text-brand-navy">150+</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ink/35">
                    clients
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* ═══ Why Choose CAAF — dark card ═══ */}
          <article className="border border-white/10 bg-surface-dark p-8 md:col-span-5 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5">
                <BadgeCheck className="h-5 w-5 text-primary" strokeWidth={1.7} />
              </div>
              <h3 className="font-serif text-2xl text-white">
                Pourquoi choisir CAAF ?
              </h3>
            </div>

            <ul className="space-y-4">
              {WHY_CHOOSE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    strokeWidth={1.7}
                  />
                  <span className="text-sm leading-7 text-white/70">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/[0.06] pt-6">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
              >
                Discuter avec un expert
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </article>

          {/* ═══ Certifications — wide card ═══ */}
          <article className="border border-hairline bg-white p-8 md:col-span-7 md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Accréditations & Conformité
              </span>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.title} className="group">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/5 transition-colors group-hover:bg-primary/10">
                      <cert.icon
                        className="h-5 w-5 text-primary"
                        strokeWidth={1.7}
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                        {cert.badge}
                      </span>
                    </div>
                  </div>

                  <h4 className="font-serif text-2xl text-brand-navy">
                    {cert.title}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-ink/55">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* ═══ Featured Quote ═══ */}
          <article className="relative overflow-hidden border border-hairline bg-white p-8 md:col-span-12 md:p-12">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-px w-8 bg-primary" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Notre engagement
                  </span>
                </div>

                <blockquote className="max-w-3xl font-serif text-2xl italic leading-relaxed text-brand-navy md:text-3xl">
                  &ldquo;Nous croyons qu&apos;un audit bien conduit n&apos;est
                  pas seulement un exercice de conformité — c&apos;est un levier
                  de confiance, de gouvernance et de performance durable.&rdquo;
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                    <Users className="h-5 w-5 text-primary" strokeWidth={1.7} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">
                      Direction Générale
                    </p>
                    <p className="text-xs uppercase tracking-[0.14em] text-ink/40">
                      CAAF SAS · Kinshasa
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side decorative stats */}
              <div className="hidden border-l border-hairline pl-10 md:block">
                <div className="space-y-6">
                  {[
                    { icon: ShieldCheck, label: "Indépendance", sub: "garantie" },
                    { icon: Award, label: "Qualité", sub: "constante" },
                    { icon: Globe2, label: "Standards", sub: "internationaux" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center border border-hairline bg-canvas">
                        <item.icon
                          className="h-4 w-4 text-primary"
                          strokeWidth={1.7}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-brand-navy">
                          {item.label}
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.14em] text-ink/35">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
// src/components/ui/about-hero.tsx
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  Landmark,
  BadgeCheck,
} from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1920&auto=format&fit=crop"
          alt="Architecture moderne symbolisant stabilité et rigueur"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/70 to-brand-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-transparent" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-10 pb-20 pt-32 md:pt-40 lg:pb-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-end">
          {/* Left column */}
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Établi en RDC · Standards internationaux
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.6rem)] font-bold leading-[0.95] tracking-[-0.03em]">
              Intégrité sans compromis.
              <br />
              <span className="text-white/75">Vision stratégique durable.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-[1.8] text-white/60 md:text-lg">
              CAAF SAS accompagne les entreprises, institutions et groupes
              stratégiques en conciliant la réalité du marché congolais avec les
              exigences des standards financiers internationaux. Notre rôle :
              éclairer la décision, sécuriser la conformité et renforcer la
              confiance.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#notre-histoire"
                className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
              >
                Découvrir notre histoire
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#valeurs"
                className="inline-flex items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
              >
                Nos valeurs
              </Link>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5">
            <div className="border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="font-serif text-2xl text-white">CAAF SAS</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                    Cabinet d’Audit & Conseil
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 border-b border-white/[0.06] pb-5">
                  <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.7} />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Lecture locale, exigence globale
                    </p>
                    <p className="mt-1 text-sm leading-7 text-white/50">
                      Une approche enracinée dans le contexte congolais, alignée
                      sur les attentes des groupes, investisseurs et sièges
                      internationaux.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-b border-white/[0.06] pb-5">
                  <Landmark className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.7} />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Gouvernance, conformité, confiance
                    </p>
                    <p className="mt-1 text-sm leading-7 text-white/50">
                      Nous intervenons là où la rigueur comptable, la
                      transparence et la maîtrise réglementaire deviennent
                      décisives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.7} />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Relation durable avec les décideurs
                    </p>
                    <p className="mt-1 text-sm leading-7 text-white/50">
                      Notre accompagnement est fondé sur la confidentialité,
                      l’indépendance et la qualité d’exécution.
                    </p>
                  </div>
                </div>
              </div>

              {/* mini stats */}
              <div className="mt-8 grid grid-cols-3 border-t border-white/[0.06] pt-6">
                <div className="pr-4">
                  <p className="font-serif text-3xl text-white">30+</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    années
                  </p>
                </div>
                <div className="border-l border-white/[0.06] px-4">
                  <p className="font-serif text-3xl text-white">RDC</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    ancrage
                  </p>
                </div>
                <div className="border-l border-white/[0.06] pl-4">
                  <p className="font-serif text-3xl text-white">OHADA</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 border-t border-white/[0.06] pt-6">
          <div className="grid grid-cols-1 gap-6 text-sm text-white/45 md:grid-cols-3">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                Positionnement
              </span>
              <p className="mt-2 leading-7">
                Un cabinet indépendant au service des organisations exigeantes.
              </p>
            </div>

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                Mission
              </span>
              <p className="mt-2 leading-7">
                Apporter clarté, sécurité et fiabilité à la décision financière.
              </p>
            </div>

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                Engagement
              </span>
              <p className="mt-2 leading-7">
                Servir avec rigueur, discrétion et constance dans la durée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
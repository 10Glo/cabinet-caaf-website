
"use client"

import Link from "next/link"
import {
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  ShieldCheck,
} from "lucide-react"

const CONTACT_OPTIONS = [
  {
    icon: Calendar,
    title: "Programmer un diagnostic",
    description: "Une demi-journée pour cartographier vos besoins en audit interne.",
    href: "/contact",
    cta: "Réserver un créneau",
    primary: true,
  },
  {
    icon: Phone,
    title: "Appeler l'associé senior",
    description: "+243 999 309 901 / +243 810 372 645 — disponible pour un échange direct.",
    href: "tel:+243999309901",
    cta: "Appeler maintenant",
    primary: false,
  },
  {
    icon: Mail,
    title: "Envoyer une demande",
    description: "audit.interne@caaf-rdc.com — réponse sous 24h ouvrées.",
    href: "mailto:audit.interne@caaf-rdc.com",
    cta: "Envoyer un email",
    primary: false,
  },
]

const TRUST_POINTS = [
  "Premier échange sans engagement",
  "Cartographie gratuite des risques majeurs",
  "Approche bienveillante pour vos équipes",
  "Garantie de confidentialité",
]

export function AuditInterneCta() {
  return (
    <section className="bg-white px-10 py-section">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Main Card */}
          <article className="group relative overflow-hidden border border-white/10 bg-surface-dark p-8 md:col-span-8 md:p-10 lg:p-14">
            <div className="pointer-events-none absolute -right-10 -top-10 text-white opacity-[0.02]">
              <ShieldCheck className="h-64 w-64" strokeWidth={0.5} />
            </div>
            <div className="pointer-events-none absolute -left-20 bottom-0 h-[320px] w-[320px] rounded-full bg-primary/[0.04] blur-[120px]" />
            
            <div className="relative z-10 max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Prêt à agir ?
                </span>
              </div>
              <h2 className="font-serif text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
                Ne subissez plus les risques
                <br />
                <span className="bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
                 de vos propres dysfonctionnements.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 md:text-base">
                Qu'il s'agisse de mettre en place une fonction d'audit interne, d'externaliser une mission ponctuelle ou de traiter un sujet sensible, nous sommes prêts à intervenir.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {TRUST_POINTS.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-[13px] text-white/45">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="group/btn inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-primary-active">
                  Diagnostiquer mon organisation <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
                <Link href="tel:+243999309901" className="inline-flex items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-8 py-4 text-[14px] font-semibold text-white/80 transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white">
                  <Phone size={15} strokeWidth={1.7} /> Appeler directement
                </Link>
              </div>
            </div>
          </article>

          {/* Options */}
          <div className="flex flex-col gap-5 md:col-span-4">
            {CONTACT_OPTIONS.map((option) => {
              const Icon = option.icon
              return (
                <Link key={option.title} href={option.href} className={`group flex flex-1 flex-col justify-between border p-8 transition-all ${option.primary ? "border-primary/20 bg-primary/5 hover:border-primary/35 hover:bg-primary/[0.08]" : "border-hairline bg-canvas hover:border-primary/20 hover:bg-canvas/80"}`}>
                  <div>
                    <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center border transition-colors ${option.primary ? "border-primary/25 bg-white text-primary" : "border-hairline bg-white text-brand-navy/40 group-hover:text-primary"}`}>
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <h3 className={`text-[16px] font-semibold transition-colors ${option.primary ? "text-brand-navy" : "text-brand-navy/80 group-hover:text-brand-navy"}`}>{option.title}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-ink/45">{option.description}</p>
                  </div>
                  <div className="mt-6">
                    <span className={`inline-flex items-center gap-2 text-[13px] font-medium transition-all group-hover:gap-3 ${option.primary ? "text-primary" : "text-ink/40 group-hover:text-primary"}`}>
                      {option.cta} <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5"/>
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Bottom */}
          <div className="flex flex-col items-center justify-between gap-6 border border-hairline bg-white px-8 py-6 sm:flex-row md:col-span-12 md:px-10">
            <div className="flex flex-wrap items-center gap-6">
               {[
                { value: "Discret", label: "Sur signalement" },
                { value: "100%", label: "Objectif" },
                { value: "Action", label: "Orienté résultat" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="font-serif text-xl text-brand-navy">{stat.value}</span>
                  <span className="text-[11px] uppercase tracking-[0.12em] text-ink/35">{stat.label}</span>
                  <div className="hidden h-4 w-px bg-hairline sm:block" />
                </div>
              ))}
            </div>
            <Link href="/contact" className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3">
              Toutes nos coordonnées <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5"/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
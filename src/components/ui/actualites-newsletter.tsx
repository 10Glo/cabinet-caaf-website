// src/components/actualites/actualites-newsletter.tsx
"use client"

import { useState } from "react"
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react"

export function ActualitesNewsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="bg-canvas px-10 py-section">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Main card */}
          <div className="relative overflow-hidden border border-white/10 bg-surface-dark p-8 md:col-span-8 md:p-10 lg:p-14">
            {/* Glow */}
            <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-[320px] rounded-full bg-primary/4 blur-[120px]" />

            <div className="relative z-10 max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Newsletter
                </span>
              </div>

              <h2 className="font-serif text-3xl leading-tight text-white md:text-4xl">
                Restez informé des
                <br />
                <span className="bg-linear-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
                  évolutions qui comptent.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 md:text-base">
                Recevez nos analyses, décryptages et alertes réglementaires
                directement dans votre boîte mail. Un email par mois, uniquement
                du contenu utile.
              </p>

              {/* Form */}
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 flex flex-col gap-3 sm:flex-row"
                >
                  <div className="relative flex-1">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                      strokeWidth={1.5}
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-[14px] text-white placeholder-white/30 outline-none transition-colors focus:border-primary/50 focus:bg-white/[0.08]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-primary-active"
                  >
                    S&apos;abonner
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </form>
              ) : (
                <div className="mt-8 flex items-center gap-3 border border-primary/20 bg-primary/10 px-6 py-4">
                  <CheckCircle2
                    size={20}
                    className="text-primary"
                    strokeWidth={1.5}
                  />
                  <p className="text-sm text-white/70">
                    Merci ! Vous recevrez notre prochaine newsletter.
                  </p>
                </div>
              )}

              {/* Trust */}
              <div className="mt-6 flex flex-wrap items-center gap-6 text-[12px] text-white/30">
                <span>✓ Gratuit</span>
                <span>✓ 1 email/mois</span>
                <span>✓ Désinscription en 1 clic</span>
              </div>
            </div>
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-5 md:col-span-4">
            {[
              {
                value: "1×/mois",
                label: "Fréquence",
                description: "Un seul email par mois avec l'essentiel.",
              },
              {
                value: "Expert",
                label: "Contenu",
                description: "Rédigé par nos associés et managers.",
              },
              {
                value: "0 spam",
                label: "Engagement",
                description: "Aucune pub, aucune revente de données.",
              },
            ].map((card) => (
              <div
                key={card.label}
                className="flex flex-1 flex-col justify-center border border-hairline bg-white p-8"
              >
                <p className="font-serif text-2xl text-brand-navy">
                  {card.value}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/35">
                  {card.label}
                </p>
                <p className="mt-3 text-[13px] leading-6 text-ink/50">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
// src/components/ui/contact-form.tsx
"use client"

import React, { useState } from "react"
import {
  Send,
  ShieldCheck,
  CheckCircle2,
  User,
  Mail,
  Building2,
  MessageSquare,
  Phone,
  Briefcase,
} from "lucide-react"

const SERVICES = [
  "Audit Financier",
  "Commissariat aux Comptes",
  "Due Diligence",
  "Conseil & Advisory",
  "Contrôle Interne & Risques",
  "Autre",
]

const OFFICES = ["Bureau de Kinshasa", "Bureau de Lubumbashi"]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-canvas px-10 py-section">
        <div className="mx-auto max-w-2xl border border-hairline bg-white p-12 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-primary/20 bg-primary/5">
            <CheckCircle2 className="h-8 w-8 text-primary" strokeWidth={1.5} />
          </div>

          <h2 className="font-serif text-3xl text-brand-navy">
            Message envoyé
          </h2>

          <p className="mt-4 text-base leading-relaxed text-ink/60">
            Merci pour votre message. Un membre de notre équipe vous
            contactera dans un délai de 24 heures ouvrées.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" strokeWidth={1.7} />
            <span className="text-xs uppercase tracking-[0.14em] text-ink/35">
              Confidentialité garantie
            </span>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="formulaire-contact" className="bg-canvas px-10 py-section">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="border border-hairline bg-white p-8 md:p-10">
              {/* Header */}
              <div className="mb-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-px w-8 bg-primary" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Formulaire
                  </span>
                </div>

                <h2 className="font-serif text-3xl text-brand-navy md:text-4xl">
                  Demander une consultation
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-ink/55">
                  Décrivez brièvement votre contexte et vos besoins. Un
                  interlocuteur senior vous contactera dans les 24 heures.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/40">
                      <User className="h-3 w-3" strokeWidth={1.7} />
                      Nom complet
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom"
                      className="w-full border border-hairline bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-primary focus:ring-1 focus:ring-primary/20"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/40">
                      <Mail className="h-3 w-3" strokeWidth={1.7} />
                      Adresse email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@entreprise.com"
                      className="w-full border border-hairline bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-primary focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/40">
                      <Phone className="h-3 w-3" strokeWidth={1.7} />
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      placeholder="+243 000 000 000"
                      className="w-full border border-hairline bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-primary focus:ring-1 focus:ring-primary/20"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/40">
                      <Building2 className="h-3 w-3" strokeWidth={1.7} />
                      Organisation
                    </label>
                    <input
                      type="text"
                      placeholder="Nom de l'entreprise"
                      className="w-full border border-hairline bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-primary focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Service */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/40">
                      <Briefcase className="h-3 w-3" strokeWidth={1.7} />
                      Service souhaité
                    </label>
                    <select className="w-full appearance-none border border-hairline bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/20">
                      <option value="">Sélectionnez un service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Office */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/40">
                      <Building2 className="h-3 w-3" strokeWidth={1.7} />
                      Bureau préféré
                    </label>
                    <select className="w-full appearance-none border border-hairline bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/20">
                      {OFFICES.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/40">
                    <MessageSquare className="h-3 w-3" strokeWidth={1.7} />
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Décrivez brièvement votre contexte et vos besoins..."
                    className="w-full resize-none border border-hairline bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-primary focus:ring-1 focus:ring-primary/20"
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col gap-4 border-t border-hairline pt-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck
                      className="h-4 w-4 text-primary/70"
                      strokeWidth={1.7}
                    />
                    <span className="text-xs text-ink/40">
                      Vos données sont traitées en toute confidentialité.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
                  >
                    <Send className="h-4 w-4" strokeWidth={1.7} />
                    Envoyer la demande
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Side info */}
          <div className="space-y-5 lg:col-span-5">
            {/* What happens next */}
            <div className="border border-hairline bg-surface-card/40 p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-6 bg-primary" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Après votre demande
                </span>
              </div>

              <div className="space-y-5">
                {[
                  {
                    step: "01",
                    title: "Accusé de réception",
                    description: "Confirmation automatique par email dans les minutes qui suivent.",
                  },
                  {
                    step: "02",
                    title: "Analyse & qualification",
                    description: "Un senior évalue votre demande et identifie le meilleur interlocuteur.",
                  },
                  {
                    step: "03",
                    title: "Prise de contact",
                    description: "Appel ou email personnalisé sous 24h ouvrées maximum.",
                  },
                ].map((item, index) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center border border-primary/20 bg-primary/5">
                        <span className="font-mono text-[10px] font-semibold text-primary">
                          {item.step}
                        </span>
                      </div>
                      {index < 2 && (
                        <div className="mt-1 h-5 w-px bg-hairline" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-ink/50">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct contact */}
            <div className="border border-white/10 bg-surface-dark p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-6 bg-primary" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                  Contact direct
                </span>
              </div>

              <p className="mb-5 text-sm leading-7 text-white/55">
                Vous préférez échanger directement ? Notre direction reste
                accessible par téléphone ou par email.
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:contact@caaf-sas.com"
                  className="group flex items-center gap-3 border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-colors hover:border-primary/20 hover:bg-white/[0.04]"
                >
                  <Mail className="h-4 w-4 text-white/40 transition-colors group-hover:text-primary" strokeWidth={1.6} />
                  <span className="text-sm text-white/60 transition-colors group-hover:text-white/80">
                    contact@caaf-sas.com
                  </span>
                </a>

                <a
                  href="tel:+243000000000"
                  className="group flex items-center gap-3 border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-colors hover:border-primary/20 hover:bg-white/[0.04]"
                >
                  <Phone className="h-4 w-4 text-white/40 transition-colors group-hover:text-primary" strokeWidth={1.6} />
                  <span className="text-sm text-white/60 transition-colors group-hover:text-white/80">
                    +243 00 000 0000
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// src/components/ui/publications-subscribe.tsx
"use client"

import React, { useState } from "react"
import {
  Mail,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  FileText,
  BarChart3,
  Lightbulb,
} from "lucide-react"

export function PublicationsSubscribe() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="border-t border-hairline bg-white px-10 py-section">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Veille professionnelle
                </span>
              </div>

              <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
                Restez informé
                <br />
                <span className="text-ink/40">des évolutions clés.</span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-ink/55">
                Recevez nos publications directement dans votre boîte mail :
                rapports sectoriels, analyses réglementaires et guides pratiques
                pour les décideurs.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { icon: FileText, label: "Rapports sectoriels trimestriels" },
                  { icon: BarChart3, label: "Notes d'analyse réglementaire" },
                  { icon: Lightbulb, label: "Guides pratiques et méthodologies" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-primary" strokeWidth={1.7} />
                    <span className="text-sm text-ink/55">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-primary/20 bg-primary/[0.02] p-12 text-center">
                <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-primary" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-brand-navy">
                  Inscription confirmée
                </h3>
                <p className="mt-3 text-sm text-ink/55">
                  Vous recevrez nos prochaines publications par email.
                </p>
              </div>
            ) : (
              <div className="border border-hairline bg-canvas p-8 md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" strokeWidth={1.7} />
                  <h3 className="font-serif text-2xl text-brand-navy">
                    S&apos;abonner aux publications
                  </h3>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/40">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Votre nom"
                        className="w-full border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-primary focus:ring-1 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/40">
                        Email professionnel
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@entreprise.com"
                        className="w-full border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-primary focus:ring-1 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/40">
                        Fonction
                      </label>
                      <input
                        type="text"
                        placeholder="DAF, DG, Auditeur..."
                        className="w-full border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-primary focus:ring-1 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/40">
                        Secteur d&apos;activité
                      </label>
                      <select className="w-full appearance-none border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/20">
                        <option value="">Sélectionnez</option>
                        <option>Banque & Finance</option>
                        <option>Mines & Ressources</option>
                        <option>Industrie</option>
                        <option>ONG & Développement</option>
                        <option>Secteur Public</option>
                        <option>Autre</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 border-t border-hairline pt-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-primary/70" strokeWidth={1.7} />
                      <span className="text-xs text-ink/40">
                        Pas de spam. Désinscription à tout moment.
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
                    >
                      <Mail className="h-4 w-4" strokeWidth={1.7} />
                      S&apos;inscrire
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
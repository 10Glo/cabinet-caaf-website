// src/components/ui/contact-form.tsx
"use client"

import React, { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
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
  ArrowRight,
} from "lucide-react"
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
} from "@/lib/contact"

// ─── Constants ───────────────────────────────────────────
const EASE_OUT = [0.1, 0, 0.1, 1] as const

const SERVICES = [
  "Audit Financier",
  "Commissariat aux Comptes",
  "Due Diligence",
  "Conseil & Advisory",
  "Contrôle Interne & Risques",
  "Autre",
]

const OFFICES = ["Bureau de Kinshasa", "Bureau de Lubumbashi"]

const TIMELINE_STEPS = [
  {
    step: "01",
    title: "Accusé de réception",
    description:
      "Confirmation automatique par email dans les minutes qui suivent.",
  },
  {
    step: "02",
    title: "Analyse & qualification",
    description:
      "Un senior évalue votre demande et identifie le meilleur interlocuteur.",
  },
  {
    step: "03",
    title: "Prise de contact",
    description:
      "Appel ou email personnalisé sous 24h ouvrées maximum.",
  },
]

// ─── Form Field ──────────────────────────────────────────

function FormField({
  label,
  icon: Icon,
  children,
}: {
  label: string
  icon: React.ElementType
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2.5">
      <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7C7F88]">
        <Icon className="h-3 w-3" strokeWidth={1.7} />
        {label}
      </label>
      {children}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  // ── Success state ──
  if (submitted) {
    return (
      <section className="bg-canvas px-10 py-section">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: EASE_OUT }}
            className="relative overflow-hidden border border-[#111A4A]/[0.06] bg-white p-16 text-center"
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[400px] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-[100px]" />

            <div className="relative z-10">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center border border-primary/20 bg-primary/5">
                <CheckCircle2
                  className="h-10 w-10 text-primary"
                  strokeWidth={1.5}
                />
              </div>

              <h2 className="mb-4 font-serif text-3xl text-[#111A4A] md:text-4xl">
                Message envoyé
              </h2>

              <p className="mx-auto max-w-md text-base leading-7 text-[#7C7F88]">
                Merci pour votre message. Un membre de notre équipe vous
                contactera dans un délai de 24 heures ouvrées.
              </p>

              <div className="mt-10 flex items-center justify-center gap-2">
                <ShieldCheck
                  className="h-4 w-4 text-primary"
                  strokeWidth={1.7}
                />
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7C7F88]/50">
                  Confidentialité garantie
                </span>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-primary/20" />
          </motion.div>
        </div>
      </section>
    )
  }

  // ── Form state ──
  return (
    <section
      ref={sectionRef}
      id="formulaire-contact"
      className="bg-canvas px-10 py-section"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* ═══════════════════════════════════════════════
              LEFT — Form
              ═══════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={
              isInView
                ? {
                    opacity: [0, 1, 1],
                    y: [20, 0, 0],
                    filter: ["blur(4px)", "blur(0px)", "blur(0px)"],
                  }
                : {}
            }
            transition={{ duration: 1.5, delay: 0.2, ease: EASE_OUT }}
            className="lg:col-span-7"
          >
            <div className="group relative overflow-hidden border border-[#111A4A]/[0.06] bg-white p-8 md:p-10 lg:p-12">
              {/* Header */}
              <div className="mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: EASE_OUT,
                  }}
                  className="mb-5 inline-flex items-center"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Formulaire
                  </span>
                </motion.div>

                <h2 className="mb-4 font-serif text-3xl text-[#111A4A] md:text-4xl">
                  Demander une consultation
                </h2>

                <p className="max-w-xl text-sm leading-7 text-[#7C7F88]">
                  Décrivez brièvement votre contexte et vos besoins. Un
                  interlocuteur senior vous contactera dans les 24 heures.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Row 1 — Name + Email */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <FormField label="Nom complet" icon={User}>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom"
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.01] px-5 py-3.5 text-sm text-[#111A4A] outline-none transition-all duration-200 placeholder:text-[#7C7F88]/35 focus:border-primary/40 focus:bg-primary/[0.02] focus:ring-1 focus:ring-primary/10"
                    />
                  </FormField>

                  <FormField label="Adresse email" icon={Mail}>
                    <input
                      type="email"
                      required
                      placeholder="email@entreprise.com"
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.01] px-5 py-3.5 text-sm text-[#111A4A] outline-none transition-all duration-200 placeholder:text-[#7C7F88]/35 focus:border-primary/40 focus:bg-primary/[0.02] focus:ring-1 focus:ring-primary/10"
                    />
                  </FormField>
                </div>

                {/* Row 2 — Phone + Company */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <FormField label="Téléphone" icon={Phone}>
                    <input
                      type="tel"
                      placeholder={CONTACT_PHONE_DISPLAY}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.01] px-5 py-3.5 text-sm text-[#111A4A] outline-none transition-all duration-200 placeholder:text-[#7C7F88]/35 focus:border-primary/40 focus:bg-primary/[0.02] focus:ring-1 focus:ring-primary/10"
                    />
                  </FormField>

                  <FormField label="Organisation" icon={Building2}>
                    <input
                      type="text"
                      placeholder="Nom de l'entreprise"
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.01] px-5 py-3.5 text-sm text-[#111A4A] outline-none transition-all duration-200 placeholder:text-[#7C7F88]/35 focus:border-primary/40 focus:bg-primary/[0.02] focus:ring-1 focus:ring-primary/10"
                    />
                  </FormField>
                </div>

                {/* Row 3 — Service + Office */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <FormField label="Service souhaité" icon={Briefcase}>
                    <select
                      onFocus={() => setFocusedField("service")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full appearance-none border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.01] px-5 py-3.5 text-sm text-[#111A4A] outline-none transition-all duration-200 focus:border-primary/40 focus:bg-primary/[0.02] focus:ring-1 focus:ring-primary/10"
                    >
                      <option value="">Sélectionnez un service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="Bureau préféré" icon={Building2}>
                    <select
                      onFocus={() => setFocusedField("office")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full appearance-none border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.01] px-5 py-3.5 text-sm text-[#111A4A] outline-none transition-all duration-200 focus:border-primary/40 focus:bg-primary/[0.02] focus:ring-1 focus:ring-primary/10"
                    >
                      {OFFICES.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </div>

                {/* Row 4 — Message */}
                <FormField label="Message" icon={MessageSquare}>
                  <textarea
                    rows={5}
                    placeholder="Décrivez brièvement votre contexte et vos besoins..."
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full resize-none border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.01] px-5 py-3.5 text-sm leading-relaxed text-[#111A4A] outline-none transition-all duration-200 placeholder:text-[#7C7F88]/35 focus:border-primary/40 focus:bg-primary/[0.02] focus:ring-1 focus:ring-primary/10"
                  />
                </FormField>

                {/* Divider */}
                <div className="h-px bg-[#111A4A]/[0.06]" />

                {/* Submit row */}
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck
                      className="h-4 w-4 text-primary/60"
                      strokeWidth={1.7}
                    />
                    <span className="text-xs text-[#7C7F88]/50">
                      Vos données sont traitées en toute confidentialité.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-hero group relative inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-9 py-4 text-[14px] font-semibold tracking-wide text-white"
                  >
                    <span className="relative z-10">Envoyer la demande</span>
                    <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary/30 transition-all duration-700 group-hover:w-full" />
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════
              RIGHT — Side info
              ═══════════════════════════════════════════════ */}
          <div className="space-y-5 lg:col-span-5">
            {/* Timeline card */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={
                isInView
                  ? {
                      opacity: [0, 1, 1],
                      y: [20, 0, 0],
                      filter: ["blur(4px)", "blur(0px)", "blur(0px)"],
                    }
                  : {}
              }
              transition={{ duration: 1.5, delay: 0.35, ease: EASE_OUT }}
              className="group relative overflow-hidden border border-[#111A4A]/[0.06] bg-white p-8"
            >
              {/* Eyebrow */}
              <div className="mb-6 inline-flex items-center">
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Après votre demande
                </span>
              </div>

              {/* Steps */}
              <div className="space-y-0">
                {TIMELINE_STEPS.map((item, index) => (
                  <div key={item.step} className="flex items-start gap-5">
                    {/* Step indicator + connector */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-9 w-9 items-center justify-center border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.02] transition-colors duration-200 group-hover:border-primary/15">
                        <span className="font-mono text-[10px] font-semibold text-primary">
                          {item.step}
                        </span>
                      </div>
                      {index < TIMELINE_STEPS.length - 1 && (
                        <div className="h-10 w-px bg-[#111A4A]/[0.06]" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-7">
                      <p className="text-[13px] font-semibold text-[#111A4A]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[13px] leading-6 text-[#7C7F88]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary/30 transition-all duration-700 group-hover:w-full" />
            </motion.div>

            {/* Direct contact card */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={
                isInView
                  ? {
                      opacity: [0, 1, 1],
                      y: [20, 0, 0],
                      filter: ["blur(4px)", "blur(0px)", "blur(0px)"],
                    }
                  : {}
              }
              transition={{ duration: 1.5, delay: 0.5, ease: EASE_OUT }}
              className="group relative overflow-hidden border border-white/[0.08] bg-brand-navy p-8"
            >
              {/* Eyebrow */}
              <div className="mb-5 inline-flex items-center">
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                  Contact direct
                </span>
              </div>

              <p className="mb-6 text-sm leading-7 text-white/50">
                Vous préférez échanger directement ? Notre direction reste
                accessible par téléphone ou par email.
              </p>

              {/* Contact links */}
              <div className="space-y-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group/link flex items-center gap-4 border border-white/[0.06] bg-white/[0.02] px-5 py-4 transition-all duration-200 hover:border-primary/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/[0.08] bg-white/[0.04] transition-colors group-hover/link:border-primary/20 group-hover/link:bg-primary/10">
                    <Mail
                      className="h-4 w-4 text-white/40 transition-colors group-hover/link:text-primary"
                      strokeWidth={1.6}
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/25">
                      Email
                    </p>
                    <p className="mt-0.5 text-sm text-white/60 transition-colors group-hover/link:text-white/90">
                      {CONTACT_EMAIL}
                    </p>
                  </div>
                </a>

                <a
                  href={CONTACT_PHONE_HREF}
                  className="group/link flex items-center gap-4 border border-white/[0.06] bg-white/[0.02] px-5 py-4 transition-all duration-200 hover:border-primary/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/[0.08] bg-white/[0.04] transition-colors group-hover/link:border-primary/20 group-hover/link:bg-primary/10">
                    <Phone
                      className="h-4 w-4 text-white/40 transition-colors group-hover/link:text-primary"
                      strokeWidth={1.6}
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/25">
                      Téléphone
                    </p>
                    <p className="mt-0.5 text-sm text-white/60 transition-colors group-hover/link:text-white/90">
                      +243 00 000 0000
                    </p>
                  </div>
                </a>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary/30 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

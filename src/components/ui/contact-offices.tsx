// src/components/ui/contact-offices.tsx
"use client"

import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Building2,
  ArrowRight,
  Navigation,
} from "lucide-react"

type Office = {
  city: string
  type: string
  address: string[]
  phone: string
  email: string
  hours: string
  mapUrl: string
}

const OFFICES: Office[] = [
  {
    city: "Kinshasa",
    type: "Siège social",
    address: ["12 Avenue de la Paix", "Commune de la Gombe", "Kinshasa, RDC"],
    phone: "+243 812 000 001",
    email: "kinshasa@caaf-sas.com",
    hours: "Lun — Ven · 08:00 — 17:30",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63774.70974!2d15.266293!3d-4.325024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130f0a7a2e3%3A0x3acf7e7f25e8a0!2sGombe%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1700000000000",
  },
  {
    city: "Lubumbashi",
    type: "Bureau régional",
    address: ["Avenue Kasavubu", "Centre-ville", "Lubumbashi, Haut-Katanga"],
    phone: "+243 970 000 002",
    email: "lubumbashi@caaf-sas.com",
    hours: "Lun — Ven · 08:00 — 17:00",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63058.7!2d27.4739!3d-11.6647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19723ead4d0f0001%3A0x1234567890abcdef!2sLubumbashi!5e0!3m2!1sfr!2scd!4v1700000000000",
  },
]

function OfficeCard({ office }: { office: Office }) {
  return (
    <article className="group border border-hairline bg-white">
      {/* Map */}
      <div className="relative h-52 w-full overflow-hidden bg-surface-card">
        <iframe
          src={office.mapUrl}
          title={`Carte ${office.city}`}
          className="h-full w-full border-0 grayscale transition-all duration-500 group-hover:grayscale-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
      </div>

      <div className="p-8">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/5">
              <Building2 className="h-5 w-5 text-primary" strokeWidth={1.7} />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-brand-navy">
                {office.city}
              </h3>
              <p className="text-xs uppercase tracking-[0.14em] text-primary">
                {office.type}
              </p>
            </div>
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address.join(", "))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group/nav flex h-8 w-8 items-center justify-center border border-hairline bg-canvas transition-all hover:border-primary/30 hover:bg-primary/5"
          >
            <Navigation
              className="h-4 w-4 text-ink/30 transition-colors group-hover/nav:text-primary"
              strokeWidth={1.7}
            />
          </a>
        </div>

        {/* Address */}
        <div className="mb-6 flex items-start gap-3">
          <MapPin
            className="mt-0.5 h-4 w-4 shrink-0 text-ink/30"
            strokeWidth={1.7}
          />
          <div className="text-sm leading-6 text-ink/60">
            {office.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </div>
        </div>

        {/* Contact details */}
        <div className="space-y-3">
          <a
            href={`tel:${office.phone.replace(/\s/g, "")}`}
            className="group flex items-center gap-3 border border-hairline bg-canvas px-4 py-3 transition-colors hover:border-primary/30 hover:bg-primary/5"
          >
            <Phone
              className="h-4 w-4 text-ink/30 transition-colors group-hover:text-primary"
              strokeWidth={1.7}
            />
            <span className="text-sm text-ink/60 transition-colors group-hover:text-ink">
              {office.phone}
            </span>
          </a>

          <a
            href={`mailto:${office.email}`}
            className="group flex items-center gap-3 border border-hairline bg-canvas px-4 py-3 transition-colors hover:border-primary/30 hover:bg-primary/5"
          >
            <Mail
              className="h-4 w-4 text-ink/30 transition-colors group-hover:text-primary"
              strokeWidth={1.7}
            />
            <span className="text-sm text-ink/60 transition-colors group-hover:text-ink">
              {office.email}
            </span>
          </a>
        </div>

        {/* Hours */}
        <div className="mt-6 border-t border-hairline pt-5">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Clock3
                className="h-4 w-4 text-primary"
                strokeWidth={1.7}
              />
              <span className="text-ink/40">Horaires</span>
            </div>
            <span className="font-medium text-ink/60">{office.hours}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export function ContactOffices() {
  return (
    <section className="border-t border-hairline bg-surface-soft/30 px-10 py-section">
      <div className="w-full">
        {/* Header */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Nos bureaux
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              Présence à Kinshasa
              <br />
              <span className="text-ink/40">et à Lubumbashi.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            Notre implantation dans les deux principaux pôles économiques de la
            RDC nous permet d'intervenir rapidement et de maintenir une
            proximité opérationnelle avec nos clients.
          </p>
        </div>

        {/* Office cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {OFFICES.map((office) => (
            <OfficeCard key={office.city} office={office} />
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border border-hairline bg-canvas px-8 py-5 md:flex-row">
          <p className="text-sm text-ink/60">
            Tous nos bureaux sont accessibles sur rendez-vous.{" "}
            <span className="font-medium text-ink/80">
              Contactez-nous pour organiser une visite.
            </span>
          </p>

          <a
            href="#formulaire-contact"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
          >
            Prendre rendez-vous
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
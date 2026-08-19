// src/components/ui/footer.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Mail,
  Link2,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowUp,
  Heart,
  Shield,
} from "lucide-react"
import logo from "@/assets/logo.png"
import {
  CONTACT_EMAIL,
  FOOTER_PHONE_HREF,
} from "@/lib/contact"

const navigation = {
  sections: [
    {
      id: "expertises",
      name: "Expertises",
      items: [
        { name: "Audit Financier", href: "#audit-financier" },
        { name: "Commissariat aux Comptes", href: "#commissariat" },
        { name: "Conseil Fiscal", href: "#conseil-fiscal" },
        { name: "Due Diligence", href: "#due-diligence" },
      ],
    },
    {
      id: "cabinet",
      name: "Le Cabinet",
      items: [
        { name: "À propos", href: "/about" },
        { name: "Méthodologie", href: "#methodologie" },
        { name: "Équipe", href: "#equipe" },
        { name: "Certifications", href: "#certifications" },
      ],
    },
    {
      id: "secteurs",
      name: "Secteurs",
      items: [
        { name: "Industrie", href: "#industrie" },
        { name: "Services Financiers", href: "#services-financiers" },
        { name: "Secteur Public", href: "#secteur-public" },
        { name: "Immobilier", href: "#immobilier" },
      ],
    },
    {
      id: "ressources",
      name: "Ressources",
      items: [
        { name: "Publications", href: "/publications" },
        { name: "Actualités", href: "/actualites" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      id: "legal",
      name: "Légal",
      items: [
        { name: "Mentions légales", href: "/mentions-legales" },
        { name: "Politique de confidentialité", href: "/confidentialite" },
        { name: "CGU", href: "/cgu" },
      ],
    },
  ],
}

const socialLinks = [
  {
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/caaf-sas",
    icon: Link2,
  },
  {
    label: "Téléphone",
    href: FOOTER_PHONE_HREF,
    icon: Phone,
  },
]

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  })
}

const SocialButton = ({
  href,
  label,
  icon: Icon,
}: {
  href: string
  label: string
  icon: React.ElementType
}) => (
  <Link
    aria-label={label}
    href={href}
    rel="noreferrer"
    target="_blank"
    className="rounded-xl border border-dotted border-hairline p-2.5 text-ink/60 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
  >
    <Icon className="h-5 w-5" strokeWidth={1.5} />
  </Link>
)

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas">
      {/* ── Top: Brand + Description ── */}
      <div className="mx-auto w-full px-10">
        <div className="flex flex-col items-start gap-6 pb-0 pt-16 md:flex-row md:items-center">
          <Link href="/" className="shrink-0">
            <Image
              src={logo}
              alt="CAAF SAS"
              height={36}
              width={140}
              className="h-9 w-auto"
            />
          </Link>

          <div className="hidden h-10 w-px bg-hairline md:block" />

          <p className="max-w-2xl text-xs leading-5 text-ink/50 font-sans">
            CAAF SAS accompagne les entreprises et organisations dans leurs
            obligations d&apos;audit, de commissariat aux comptes et de conseil
            fiscal. Notre approche allie rigueur technique et compréhension
            sectorielle pour garantir la conformité, la transparence et la
            performance financière de nos clients.
          </p>
        </div>
      </div>

      {/* ── Navigation Grid ── */}
      <div className="mx-auto w-full px-10 py-12">
        <div className="border-b border-dotted border-hairline" />

        <div className="py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {navigation.sections.map((section) => (
              <div key={section.id}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/40 font-sans">
                  {section.name}
                </h3>
                <ul role="list" className="flex flex-col space-y-3">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group inline-flex items-center gap-1 text-sm text-ink/60 transition-colors hover:text-primary"
                      >
                        {item.name}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-dotted border-hairline" />
      </div>

      {/* ── Contact Bar ── */}
      <div className="mx-auto w-full px-10">
        <div className="flex flex-col items-center gap-8 pb-10 md:flex-row md:justify-between">
          {/* Address */}
          <div className="flex items-center gap-2 text-xs text-ink/40">
            <MapPin size={14} strokeWidth={1.5} />
            <span>12 Rue de la Conformité, 75008 Paris, France</span>
          </div>

          {/* Social + Scroll top */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <SocialButton
                key={link.label}
                href={link.href}
                label={link.label}
                icon={link.icon}
              />
            ))}

            <div className="h-5 w-px bg-hairline" />

            <button
              type="button"
              onClick={handleScrollTop}
              className="rounded-xl border border-dotted border-hairline p-2.5 text-ink/60 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
              aria-label="Retour en haut"
            >
              <ArrowUp className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-hairline bg-surface-card/30">
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-4 px-10 py-6 md:flex-row">
          {/* Copyright */}
          <div className="flex flex-wrap items-center justify-center gap-1 text-xs text-ink/40">
            <span>©</span>
            <span>{new Date().getFullYear()}</span>
            <span>CAAF SAS — Fait avec</span>
            <Heart className="mx-0.5 h-3 w-3 animate-pulse text-primary" />
            <span>et rigueur.</span>
          </div>

          {/* Certifications badge */}
          <div className="flex items-center gap-2 rounded-full border border-hairline bg-canvas px-4 py-1.5">
            <Shield size={14} className="text-primary" strokeWidth={1.5} />
            <span className="text-[11px] font-medium text-ink/50">
              Membre de la CNCC · Inscrit à l&apos;Ordre des Experts-Comptables
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
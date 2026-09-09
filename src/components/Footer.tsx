// src/components/Footer.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, Variants } from 'motion/react'
import { ArrowUpRight, ArrowRight, MapPin } from 'lucide-react'
import logo from '@/assets/logo.png'

// ─── Data ─────────────────────────────────────────────────────
const navigation = [
  {
    title: 'Expertise',
    links: [
      { label: 'Audit & Assurance', href: '/expertises/audit-financier' },
      { label: 'Commissariat aux Comptes', href: '/expertises/commissariat-aux-comptes' },
      { label: 'Advisory', href: '/expertises/conseil-fiscal' },
      { label: 'Due Diligence', href: '/expertises/due-diligence' },
      { label: 'Audit Interne', href: '/expertises/audit-interne' },
      { label: 'Contrôle Interne', href: '/expertises/controle-interne' },
    ],
  },
  {
    title: 'Secteurs',
    links: [
      { label: 'Services financiers', href: '/secteurs' },
      { label: 'Énergie & Ressources', href: '/secteurs' },
      { label: 'Télécommunications', href: '/secteurs' },
      { label: 'Secteur public', href: '/secteurs' },
      { label: 'Références clients', href: '/references' },
    ],
  },
  {
    title: 'Le Cabinet',
    links: [
      { label: 'À propos', href: '/about' },
      { label: 'Notre histoire', href: '/about/histoire' },
      { label: 'Certifications', href: '/about/certifications' },
      { label: 'Carrières', href: '/carrieres' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Publications', href: '/publications' },
      { label: 'Actualités', href: '/actualites' },
      { label: 'Méthodologie', href: '/about#methodologie' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

const offices = [
  {
    city: 'Kinshasa',
    role: 'Bureau Kinshasa',
    lines: ['13 Avenue de la Mongala', 'Immeuble Midema, C/Gombe'],
  },
  {
    city: 'Lubumbashi',
    role: 'Bureau Lubumbashi',
    lines: ['1034 Kilela Balanda, 3ᵉ Étage', 'Immeuble Infinity'],
  },
]

const legalLinks = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Confidentialité', href: '/politique-confidentialite' },
  { label: 'Cookies', href: '/politique-confidentialite#cookies' },
]

// ─── Motion ───────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── Component ────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-neutral-800 dark:bg-neutral-950">
      <motion.div
        className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
      >
        {/* ═══ Zone principale : 2 cartes ═══ */}
        <div className="grid gap-5 lg:grid-cols-[1fr_2.4fr] lg:gap-6">
          {/* ─── Carte gauche : Brand + Proposition + CTA ─── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 md:p-10 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div>
              <Link
                href="/"
                className="inline-block transition-opacity hover:opacity-80"
                aria-label="CAAF — Accueil"
              >
                <Image
                  src={logo}
                  alt="CAAF"
                  height={36}
                  width={144}
                  className="h-9 w-auto dark:invert"
                  priority={false}
                />
              </Link>

              <p className="mt-10 max-w-sm text-[15px] leading-[1.65] text-slate-700 dark:text-neutral-300">
                Audit, conseil et expertise au service des organisations
                opérant dans des environnements complexes et fortement
                réglementés.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-[15px] font-medium text-slate-900 dark:text-white"
              >
                <span className="relative">
                  Parlons de votre besoin
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-100 bg-slate-900 transition-transform duration-300 group-hover:scale-x-0 dark:bg-white" />
                </span>
                <ArrowRight
                  size={16}
                  strokeWidth={1.75}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <div className="border-t border-slate-200 pt-8 dark:border-neutral-800">
                <p className="font-sans text-[14px] font-semibold text-slate-900 dark:text-white">
                  Contact
                </p>
                <div className="mt-4 space-y-2">
                  <a
                    href="mailto:contact@caaf.cd"
                    className="block text-[14px] text-slate-700 transition-colors hover:text-slate-950 dark:text-neutral-300 dark:hover:text-white"
                  >
                    contact@caaf.cd
                  </a>
                  <a
                    href="tel:+243999309901"
                    className="block text-[14px] text-slate-700 transition-colors hover:text-slate-950 dark:text-neutral-300 dark:hover:text-white"
                  >
                    +243 999 309 901 / +243 810 372 645 — Kinshasa
                  </a>
                  <a
                    href="tel:+243990658737"
                    className="block text-[14px] text-slate-700 transition-colors hover:text-slate-950 dark:text-neutral-300 dark:hover:text-white"
                  >
                    +243 990 658 737 / +243 817 103 993 — Lubumbashi
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Carte droite : Navigation + Bureaux ─── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 md:p-12 dark:border-neutral-800 dark:bg-neutral-900"
          >
            {/* Grille de navigation — 4 colonnes */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
              {navigation.map((column) => (
                <div key={column.title}>
                  <h4 className="font-sans text-[14px] font-semibold text-slate-900 dark:text-white">
                    {column.title}
                  </h4>
                  <ul className="mt-5 space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[14px] text-slate-700 transition-colors duration-200 hover:text-slate-950 dark:text-neutral-300 dark:hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bureaux */}
            <div className="mt-14 border-t border-slate-200 pt-10 dark:border-neutral-800">
              <h4 className="font-sans text-[14px] font-semibold text-slate-900 dark:text-white">
                Bureaux
              </h4>
              <div className="mt-6 grid gap-8 sm:grid-cols-2">
                {offices.map((office) => (
                  <div key={office.city} className="flex gap-3">
                    <MapPin
                      size={14}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-slate-400 dark:text-neutral-600"
                    />
                    <div>
                      <div className="flex items-baseline gap-2">
                        <p className="text-[14px] font-bold text-slate-900 dark:text-white">
                          {office.city}
                        </p>
                        <span className="text-[12px] text-slate-500 dark:text-neutral-500">
                          {office.role}
                        </span>
                      </div>
                      <p className="mt-1 text-[13px] leading-6 text-slate-600 dark:text-neutral-400">
                        {office.lines.map((line, i) => (
                          <span key={line}>
                            {line}
                            {i < office.lines.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══ Bottom bar ═══ */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center dark:border-neutral-800"
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12.5px] text-slate-600 dark:text-neutral-400">
            <span>© {new Date().getFullYear()} CAAF. Tous droits réservés.</span>
          </div>

          <nav aria-label="Liens légaux" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[12.5px] text-slate-600 transition-colors hover:text-slate-950 dark:text-neutral-400 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/company/caaf-sas"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 text-[12.5px] text-slate-600 transition-colors hover:text-slate-950 dark:text-neutral-400 dark:hover:text-white"
            >
              LinkedIn
              <ArrowUpRight
                size={12}
                strokeWidth={1.75}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </nav>
        </motion.div>
      </motion.div>
    </footer>
  )
}
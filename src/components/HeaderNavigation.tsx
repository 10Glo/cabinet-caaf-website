// src/components/HeaderNavigation.tsx
"use client"

import React, { useState, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon"
import { cn } from "@/lib/utils"
import logo from "@/assets/logo.png"

// ─── Types ───────────────────────────────────────────────
type LinkItem = {
  title: string
  href: string
  description?: string
}

type DropdownColumn = {
  heading: string
  links: LinkItem[]
}

type MenuItem = {
  label: string
  href: string
  columns?: DropdownColumn[]
}

// ─── Nav Data ────────────────────────────────────────────
const MENU_ITEMS: MenuItem[] = [
  {
    label: "Le Cabinet",
    href: "/about",
    columns: [
      {
        heading: "À Propos",
        links: [
          {
            title: "Notre Histoire",
            href: "/history",
            description: "30 ans d'expertise en RDC et en Afrique",
          },
          {
            title: "Certifications",
            href: "/certifications",
            description: "IFAC, ONEC, normes ISA et OHADA",
          },
          {
            title: "Références",
            href: "/references",
            description: "Nos clients et partenaires de confiance",
          },
        ],
      },
      {
        heading: "Ressources",
        links: [
          {
            title: "Publications",
            href: "/publications",
            description: "Rapports, analyses et guides pratiques",
          },
          {
            title: "Secteurs d'activité",
            href: "/secteurs",
            description: "Industries et domaines accompagnés",
          },
          {
            title: "Carrières",
            href: "/carrieres",
            description: "Rejoignez l'équipe CAAF SAS",
          },
        ],
      },
    ],
  },
  {
    label: "Expertises",
    href: "/services",
    columns: [
      {
        heading: "Audit & Assurance",
        links: [
          {
            title: "Audit Financier",
            href: "/expertise/audit-financier",
            description: "Certification selon les normes ISA",
          },
          {
            title: "Commissariat aux Comptes",
            href: "/services#commissariat",
            description: "Mission légale de contrôle et attestation",
          },
        ],
      },
      {
        heading: "Risk Assurance",
        links: [
          {
            title: "Audit Interne",
            href: "/services#audit-interne",
            description: "Évaluation périodique du contrôle interne",
          },
          {
            title: "Contrôle Interne",
            href: "/services#controle-interne",
            description: "Conception et optimisation des processus",
          },
          {
            title: "Gestion des Risques",
            href: "/services#gestion-risques",
            description: "Cartographie et atténuation des risques",
          },
          {
            title: "Maîtrise des Risques",
            href: "/services#maitrise-risques",
            description: "Conformité et contrôle permanent",
          },
          {
            title: "Audit Informatique",
            href: "/services#audit-informatique",
            description: "Sécurité et gouvernance des SI",
          },
        ],
      },
      {
        heading: "Conseil & Advisory",
        links: [
          {
            title: "Conseil Fiscal",
            href: "/services#conseil-fiscal",
            description: "Optimisation et conformité réglementaire",
          },
          {
            title: "Due Diligence",
            href: "/services#due-diligence",
            description: "Analyse pour opérations M&A",
          },
          {
            title: "Restructuration",
            href: "/services#restructuration",
            description: "Transformations structurelles",
          },
        ],
      },
      {
        heading: "Services Comptables",
        links: [
          {
            title: "Assistance Comptable",
            href: "/services#assistance-comptable",
            description: "Tenue, révision et supervision",
          },
          {
            title: "Gestion de Paie",
            href: "/services#gestion-paie",
            description: "Administration et conformité salariale",
          },
          {
            title: "Gestion Commerciale",
            href: "/services#gestion-commerciale",
            description: "Facturation, suivi client et reporting",
          },
        ],
      },
      {
        heading: "Support Opérationnel",
        links: [
          {
            title: "Manuels de Procédure",
            href: "/services#manuels-procedure",
            description: "Formalisation des processus internes",
          },
          {
            title: "Support aux Logiciels",
            href: "/services#support-logiciels",
            description: "Paramétrage et accompagnement ERP",
          },
        ],
      },
    ],
  },
  {
    label: "Actualités",
    href: "/actualites",
  },
  {
    label: "Contact",
    href: "/contact",
  },
]

// ─────────────────────────────────────────────────────────
// TEXTURE LAYERS
// Two layers combined:
//   1. Dot grid  — structural rhythm
//   2. SVG noise — organic grain
// ─────────────────────────────────────────────────────────

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`

/** Dot grid — same pattern as bg-texture-dots utility */
function DotGrid({ opacity = 0.04 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(0,0,0,1) 1px, transparent 0)",
        backgroundSize: "24px 24px",
        opacity,
      }}
    />
  )
}

/** SVG fractal noise grain */
function GrainOverlay({ opacity = 0.028 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        backgroundImage: NOISE_SVG,
        backgroundRepeat: "repeat",
        backgroundSize: "180px 180px",
        opacity,
        mixBlendMode: "multiply",
      }}
    />
  )
}

// ─── useScroll hook ──────────────────────────────────────
function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false)

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold)
  }, [threshold])

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [onScroll])

  React.useEffect(() => {
    onScroll()
  }, [onScroll])

  return scrolled
}

// ─── Mega Dropdown ───────────────────────────────────────
function MegaDropdown({
  item,
  onClose,
}: {
  item: MenuItem
  onClose: () => void
}) {
  if (!item.columns) return null

  const colCount = item.columns.length

  return (
    <div className="relative w-full overflow-hidden border-t border-stone-200/80">
      {/* ── Background stack ─────────────────────── */}
      {/* 1. Base warm gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(168deg, #faf9f7 0%, #f7f5f2 40%, #f5f3ef 100%)",
        }}
      />
      {/* 2. Dot grid */}
      <DotGrid opacity={0.032} />
      {/* 3. Grain on top */}
      <GrainOverlay opacity={0.025} />

      {/* Top accent glow */}
      <div className="absolute inset-x-0 top-0 z-0 h-px bg-linear-to-r from-transparent via-primary/15 to-transparent" />

      {/* ── Content ──────────────────────────────── */}
      <div className="relative z-10 px-10 pb-10 pt-8">
        <div
          className={cn(
            "grid",
            colCount === 2 && "grid-cols-2",
            colCount === 3 && "grid-cols-3",
            colCount === 4 && "grid-cols-4",
            colCount === 5 && "grid-cols-5",
            colCount >= 6 && "grid-cols-5"
          )}
        >
          {item.columns.map((col, ci) => (
            <div
              key={ci}
              className={cn(
                "py-1",
                ci > 0 && "border-l border-stone-200/60 pl-8",
                ci === 0 ? "pr-8" : ci < colCount - 1 ? "px-8" : "pl-8"
              )}
            >
              {/* Column heading */}
              <p className="mb-5 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-widest text-brand-navy/80">
                <span className="inline-block h-0.75 w-3 bg-primary/40" />
                {col.heading}
              </p>

              {/* Links */}
              <div className="space-y-0.5">
                {col.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={onClose}
                    className="group relative block rounded-sm py-2.5 pl-0 pr-3 transition-colors"
                  >
                    {/*
                     * Hover background:
                     * — was: bg-stone-900/[0.025]   (grey, cold)
                     * — now: bg-primary/[0.06]       (green, on-brand)
                     * Subtle but clearly intentional.
                     */}
                    <div className="absolute -left-2 -right-1 inset-y-0 rounded-sm bg-transparent transition-colors group-hover:bg-primary/6" />

                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        {/*
                         * Title colour on hover:
                         * — was: text-ink  (neutral)
                         * — now: text-primary (green)
                         */}
                        <p className="text-[14px] font-medium text-ink/75 transition-colors group-hover:text-primary">
                          {link.title}
                        </p>
                        {link.description && (
                          <p className="mt-0.5 text-[12px] leading-relaxed text-ink/30 transition-colors group-hover:text-ink/55">
                            {link.description}
                          </p>
                        )}
                      </div>
                      <ArrowRight
                        size={13}
                        className="shrink-0 text-ink/0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary"
                      />
                    </div>

                    {/* Bottom rule */}
                    <div className="absolute inset-x-0 bottom-0 h-px bg-stone-200/40" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-stone-200/60 pt-6">
          <p className="text-[13px] tracking-wide text-ink/35">
            Besoin d&apos;un accompagnement sur mesure ?
          </p>
          <Link
            href="/contact"
            onClick={onClose}
            className="group inline-flex items-center gap-2.5 bg-primary px-6 py-2.5 text-[13px] font-semibold tracking-wide text-white transition-all hover:bg-primary-active hover:shadow-sm"
          >
            Contactez-nous
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

// ─── Mobile Menu ─────────────────────────────────────────
type MobileMenuProps = React.ComponentProps<"div"> & {
  open: boolean
}

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          id="mobile-navigation"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="fixed inset-0 z-40 flex flex-col md:hidden top-16"
        >
          {/* ── Background stack ─────────────────── */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(180deg, #faf9f7 0%, #f6f4f0 100%)",
            }}
          />
          <DotGrid opacity={0.03} />
          <GrainOverlay opacity={0.022} />

          <div
            className={cn(
              "relative z-10 size-full overflow-y-auto px-10 py-8",
              className
            )}
            {...props}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN NAVIGATION
// ═══════════════════════════════════════════════════════════
export const Navigation = () => {
  const [open, setOpen] = React.useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<
    number | null
  >(null)
  const scrolled = useScroll(10)

  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const openDropdown = useCallback((index: number) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    if (MENU_ITEMS[index].columns) {
      setActiveIndex(index)
    } else {
      setActiveIndex(null)
    }
  }, [])

  const scheduleClose = useCallback(() => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = setTimeout(() => {
      setActiveIndex(null)
    }, 180)
  }, [])

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }, [])

  const closeDropdown = useCallback(() => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setActiveIndex(null)
  }, [])

  const navBtnClass =
    "inline-flex items-center justify-center gap-2.5 px-6 py-2.5 text-[13px] font-semibold tracking-wide transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-stone-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-xl"
            : "border-b border-white/10 bg-transparent"
        )}
        onMouseLeave={scheduleClose}
      >
        {/* ── Scrolled header background stack ── */}
        {scrolled && (
          <>
            {/* 1. Base */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(250,249,247,0.97) 0%, rgba(247,245,242,0.97) 100%)",
              }}
            />
            {/* 2. Dot grid */}
            <DotGrid opacity={0.028} />
            {/* 3. Grain */}
            <GrainOverlay opacity={0.016} />
          </>
        )}

        <nav className="relative z-10 flex h-16 w-full items-center justify-between px-10">
          {/* ── Left ── */}
          <div className="flex h-full items-center gap-6">
            <Link
              href="/"
              className="group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            >
              <Image
                src={logo}
                alt="CAAF SAS"
                height={36}
                width={140}
                style={{ width: "auto", height: "36px" }}
                className={cn(
                  "transition-all duration-300 group-hover:scale-[1.02]",
                  !scrolled && "brightness-0 invert"
                )}
                priority
              />
            </Link>

            <div
              className={cn(
                "hidden h-5 w-px md:block",
                scrolled ? "bg-stone-300/50" : "bg-white/15"
              )}
            />

            {/* ── Desktop Nav ── */}
            <ul className="hidden h-full list-none items-center gap-1 md:flex">
              {MENU_ITEMS.map((item, index) => (
                <li
                  key={item.label}
                  className="flex h-full items-center"
                  onMouseEnter={() => openDropdown(index)}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (!item.columns) closeDropdown()
                    }}
                    className={cn(
                      "relative flex h-full items-center px-4 text-[14px] font-medium tracking-[-0.01em] transition-colors",
                      // underline indicator
                      "after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200",
                      activeIndex === index && "after:scale-x-100",
                      scrolled
                        ? activeIndex === index
                          ? "text-primary"       // ← active = primary green
                          : "text-ink/50 hover:text-ink"
                        : activeIndex === index
                          ? "text-white"
                          : "text-white/50 hover:text-white"
                    )}
                  >
                    {item.label}
                    {item.columns && (
                      <ChevronDown
                        size={13}
                        className={cn(
                          "ml-1.5 transition-transform duration-200",
                          activeIndex === index && "rotate-180"
                        )}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right ── */}
          <div className="hidden items-center md:flex">
            <Link
              href="/contact"
              className={cn(
                navBtnClass,
                scrolled
                  ? "bg-primary text-white hover:bg-primary-active hover:shadow-sm"
                  : "bg-white text-ink hover:bg-white/90"
              )}
            >
              Contactez-nous
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center border transition-colors md:hidden",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
              scrolled
                ? "border-stone-200/80 bg-canvas text-ink hover:bg-primary/5 hover:border-primary/20"
                : "border-white/15 bg-white/5 text-white hover:bg-white/10"
            )}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <MenuToggleIcon open={open} className="h-5 w-5" duration={300} />
          </button>
        </nav>

        {/* ── Dropdown ── */}
        <AnimatePresence mode="wait">
          {activeIndex !== null && MENU_ITEMS[activeIndex]?.columns && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            >
              <MegaDropdown
                item={MENU_ITEMS[activeIndex]}
                onClose={closeDropdown}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Mobile Menu ── */}
      <MobileMenu open={open} className="flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-1">
          {MENU_ITEMS.map((item, index) => (
            <div key={item.label}>
              {item.columns ? (
                <div>
                  <button
                    onClick={() =>
                      setMobileExpandedIndex(
                        mobileExpandedIndex === index ? null : index
                      )
                    }
                    className="flex w-full items-center justify-between py-4 text-left text-[15px] font-medium text-ink"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={cn(
                        "text-ink/30 transition-transform duration-200",
                        mobileExpandedIndex === index && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileExpandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-l-2 border-primary/20 pb-6 pl-5 pt-1">
                          {item.columns.map((col, ci) => (
                            <div key={ci} className="mb-5 last:mb-0">
                              <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-navy/80">
                                <span className="inline-block h-0.75 w-2.5 bg-primary/40" />
                                {col.heading}
                              </p>
                              <div className="space-y-0.5">
                                {col.links.map((link) => (
                                  <Link
                                    key={link.title}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="group flex items-center justify-between rounded-sm px-2 py-2.5 text-[14px] text-ink/55 transition-colors hover:bg-primary/6 hover:text-primary"
                                  >
                                    <span>{link.title}</span>
                                    <ArrowRight
                                      size={13}
                                      className="text-ink/0 transition-all group-hover:text-primary group-hover:translate-x-0.5"
                                    />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="h-px w-full bg-stone-200/50" />
                </div>
              ) : (
                <div>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center py-4 text-[15px] font-medium text-ink/60 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                  <div className="h-px w-full bg-stone-200/50" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Bottom */}
        <div className="space-y-4 border-t border-stone-200/60 pt-6">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={cn(
              navBtnClass,
              "w-full bg-primary text-white hover:bg-primary-active"
            )}
          >
            Contactez-nous
            <ArrowRight size={14} />
          </Link>

          {/* Trust strip */}
          <div className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.08em] text-ink/25">
            <span>OHADA</span>
            <div className="h-3 w-px bg-stone-300/60" />
            <span>ISA</span>
            <div className="h-3 w-px bg-stone-300/60" />
            <span>IFRS</span>
            <div className="h-3 w-px bg-stone-300/60" />
            <span>30+ ans</span>
          </div>
        </div>
      </MobileMenu>
    </>
  )
}
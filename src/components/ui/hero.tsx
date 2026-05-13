// src/components/ui/hero.tsx
"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import type { StaticImageData } from "next/image"
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  type LucideIcon,
} from "lucide-react"
import crdb_logo from "@/assets/CRDB_BANK_logo.svg"
import midema_logo from "@/assets/ACG-LOGO-MIDEMA.png"
import ppc_logo from "@/assets/ppc.png"
import cilu_logo from "@/assets/cilu.png"
import enge_logo from "@/assets/engen_logo.png"
import metalkol from "@/assets/Metakol-banner.png"
import Chemaf from "@/assets/chemaf.png"
import ABM from "@/assets/alphamin-logo-primary.png"
import frontier from "@/assets/horizontal-black.png"
import weir_minerals from "@/assets/weir minerals.png"
import ivanhoe from "@/assets/ivanhoe.png"
import sek from "@/assets/kipoi.webp"
import hero_bg from "@/assets/1778595631.png"

// ─── Types ───────────────────────────────────────────────
type Client = {
  name: string
  icon?: LucideIcon
  img?: string | StaticImageData
}

// ─── Clients / Partners ──────────────────────────────────
const CLIENTS: Client[] = [
  { name: "CRDB Bank", img: crdb_logo },
  { name: "MIDEMA R.D Congo", img: midema_logo },
  { name: "CILU", img: cilu_logo },
  { name: "PPC", img: ppc_logo },
  { name: "Engen", img: enge_logo },
  { name: "Metalkol", img: metalkol },
  { name: "Frontier", img: frontier },
  { name: "Chemaf", img: Chemaf },
  { name: "ABM", img: ABM },
  { name: "Weir Minerals", img: weir_minerals },
  { name: "Ivanhoe", img: ivanhoe },
  { name: "SEK", img: sek },
]

// ─── Certifications ──────────────────────────────────────
const CERTIFICATIONS = [
  "Membre CNCC",
  "Inscrit OEC",
  "Normes ISA",
  "OHADA Conforme",
  "IFRS",
]

// ─── Expertise Tags ──────────────────────────────────────
const EXPERTISE_TAGS = [
  "Audit Financier",
  "Commissariat aux Comptes",
  "Conseil Fiscal",
  "Due Diligence",
  "Restructuration",
]

// ─── Grain texture (subtil) ──────────────────────────────
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`

// ─── Scoped Styles ───────────────────────────────────────
const heroStyles = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes heroFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes heroMarquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes heroGlow {
    0%, 100% { opacity: 0.15; transform: scale(1); }
    50%      { opacity: 0.25; transform: scale(1.03); }
  }
  @keyframes heroLine {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  @keyframes heroImageReveal {
    from { opacity: 0; transform: scale(1.04); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes heroTagLine {
    from { opacity: 0; transform: translateX(-6px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes badgeShimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  .hero-up {
    animation: heroFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    opacity: 0;
  }
  .hero-in {
    animation: heroFadeIn 1s ease-out forwards;
    opacity: 0;
  }
  .hero-marquee {
    animation: heroMarquee 55s linear infinite;
    will-change: transform;
  }
  .hero-glow {
    animation: heroGlow 10s ease-in-out infinite;
  }
  .hero-line {
    animation: heroLine 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    transform: scaleX(0);
    transform-origin: left;
  }
  .hero-image-reveal {
    animation: heroImageReveal 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    opacity: 0;
  }
  .hero-tag-line {
    animation: heroTagLine 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    opacity: 0;
  }
  .badge-shimmer {
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    background-size: 200% 100%;
    animation: badgeShimmer 3s ease-in-out infinite;
  }
  .d1 { animation-delay: 0.05s; }
  .d2 { animation-delay: 0.15s; }
  .d3 { animation-delay: 0.28s; }
  .d4 { animation-delay: 0.42s; }
  .d5 { animation-delay: 0.55s; }
  .d6 { animation-delay: 0.68s; }
  .d7 { animation-delay: 0.82s; }
  .d8 { animation-delay: 0.95s; }
  .d9 { animation-delay: 1.08s; }
  
  /* Smooth hover transitions */
  .btn-primary {
    transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 40px rgba(23, 162, 184, 0.35);
  }
  .btn-secondary {
    transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .btn-secondary:hover {
    transform: translateY(-1px);
    border-color: rgba(255,255,255,0.35);
  }
`

// ─── Client Logo Component ───────────────────────────────
function isStaticImageData(
  img: string | StaticImageData
): img is StaticImageData {
  return typeof img === "object" && "src" in img
}

function ClientLogo({ client }: { client: Client }) {
  return (
    <div className="group inline-flex shrink-0 items-center gap-3 px-1 opacity-40 transition-opacity duration-300 hover:opacity-75">
      {client.img ? (
        <div className="flex h-6 max-w-32 shrink-0 items-center">
          <Image
            src={client.img}
            alt={client.name}
            width={isStaticImageData(client.img) ? client.img.width : 120}
            height={isStaticImageData(client.img) ? client.img.height : 24}
            className="h-full w-auto max-w-full shrink-0 object-contain [filter:brightness(0)_invert(1)]"
            style={{ width: "auto", height: "24px" }}
            unoptimized
          />
        </div>
      ) : client.icon ? (
        <>
          <client.icon className="h-4 w-4 shrink-0 text-white/70" strokeWidth={1.5} />
          <span className="shrink-0 text-sm font-medium tracking-tight text-white/70">
            {client.name}
          </span>
        </>
      ) : (
        <span className="shrink-0 text-sm font-medium tracking-tight text-white/70">
          {client.name}
        </span>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════
export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const a = (delay: string) => (mounted ? `hero-up ${delay}` : "opacity-0")
  const fadeIn = (delay: string) => mounted ? `hero-in ${delay}` : "opacity-0"

  return (
    <section className="hero-section relative w-full overflow-hidden bg-brand-navy">
      <style>{heroStyles}</style>

      {/* ═══════════════════════════════════════════════════
          BACKGROUND — Lightened for visibility
          ═══════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero_bg}
          alt="L'équipe CAAF en réunion de travail"
          width={1920}
          height={1080}
          priority
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            mounted ? "hero-image-reveal d6" : "opacity-0"
          }`}
          quality={90}
        />
        
        {/* Overlay très subtil — seulement pour la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/70 via-brand-navy/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/30 via-transparent to-brand-navy/80" />
        
        {/* Radial accent — plus discret */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 40%, rgba(23,162,184,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Mobile overlay — plus léger */}
      <div className="absolute inset-0 z-[1] bg-brand-navy/20 lg:hidden" />

      {/* ── Subtle glow accents ── */}
      <div className="hero-glow absolute -right-40 top-40 z-0 h-[600px] w-[600px] rounded-full bg-primary/[0.08] blur-[160px]" />
      <div
        className="hero-glow absolute -left-48 bottom-16 z-0 h-[500px] w-[500px] rounded-full bg-emerald-400/[0.06] blur-[140px]"
        style={{ animationDelay: "5s" }}
      />

      {/* ── Grain overlay — très discret ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          backgroundImage: NOISE_SVG,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          opacity: 0.02,
          mixBlendMode: "overlay",
        }}
      />

      {/* ── Precision grid — ultra subtil ── */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          opacity: 0.012,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* ── Vertical accent line — refined ── */}
      <div className="absolute left-8 top-0 z-[2] hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent lg:block" />

      {/* ═══════════════════════════════════════════════════
          CONTENT
          ═══════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full">
        <div className="px-6 pb-24 pt-36 sm:px-10 md:pt-44 lg:pb-28">
          <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-12 lg:gap-14">
            
            {/* ─── LEFT — Text content ─── */}
            <div className="flex flex-col justify-center lg:col-span-6">
              
              {/* Eyebrow — Badge professionnel style "Big 4" */}
              <div className={a("d1")}>
                <div className="mb-11 inline-flex items-center">
                  <div className="relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
                      Cabinet d&apos;Audit & Conseil
                    </span>
                    <span className="badge-shimmer absolute inset-0" />
                  </div>
                </div>
              </div>

              {/* Headline — Typographie élégante et lisible */}
              <div className={a("d2")}>
                <h1 className="font-serif text-[clamp(2.4rem,5.2vw,4.2rem)] font-bold leading-[0.95] tracking-[-0.02em]">
                  <span className="text-white/95">
                    Votre Partenaire
                    <br />
                    de Confiance en
                  </span>
                  <br />
                  <span className="relative inline-block mt-1">
                    <span className="bg-gradient-to-r from-emerald-300 via-primary to-emerald-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite]">
                      Audit &amp; Conseil
                    </span>
                    <span
                      className={
                        mounted
                          ? "hero-line d5 absolute -bottom-2.5 left-0 h-[2px] w-full bg-gradient-to-r from-emerald-400/60 to-transparent"
                          : "opacity-0"
                      }
                    />
                  </span>
                </h1>
              </div>

              {/* Subheadline — Clarté et autorité */}
              <div className={a("d3")}>
                <p className="mt-11 max-w-xl text-[17px] leading-[1.8] text-white/65">
                  Plus de 30 ans au service des entreprises et institutions en
                  RDC. Audit financier, commissariat aux comptes, conseil
                  fiscal — avec la rigueur des{" "}
                  <span className="font-medium text-white/90">
                    normes internationales
                  </span>{" "}
                  et une expertise terrain éprouvée.
                </p>
              </div>

              {/* CTAs — Design épuré et impactant */}
              <div className={a("d4")}>
                <div className="mt-14 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#services"
                    className="btn-primary group relative inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-9 py-4 text-[14px] font-semibold tracking-wide text-white"
                  >
                    <span className="relative z-10">Découvrir nos Services</span>
                    <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="#contact"
                    className="btn-secondary group inline-flex items-center justify-center gap-3 rounded-sm border border-white/20 bg-white/[0.04] px-9 py-4 text-[14px] font-semibold tracking-wide text-white/85 backdrop-blur-sm hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-emerald-400/80 transition-colors group-hover:text-emerald-400" />
                    Reservez une Consultation
                  </Link>
                </div>
              </div>

              {/* Divider subtil */}
              <div className={a("d5")}>
                <div className="mt-12 h-px w-28 bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              {/* Certifications — Présentation épurée */}
              <div className={a("d5")}>
                <div className="mt-9 flex flex-wrap items-center gap-2.5">
                  <span className="mr-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
                    Accréditations
                  </span>
                  {CERTIFICATIONS.map((cert, i) => (
                    <div
                      key={cert}
                      className={`hero-tag-line inline-flex items-center gap-2 rounded-sm border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-[10.5px] font-medium tracking-wide text-white/50 transition-all duration-200 hover:border-emerald-400/30 hover:bg-white/[0.06] hover:text-emerald-300/90 ${
                        mounted ? "" : "opacity-0"
                      }`}
                      style={{
                        animationDelay: mounted ? `${0.85 + i * 0.06}s` : undefined,
                      }}
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400/60" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>

              {/* Expertise Tags — Minimal & élégant */}
              <div className={fadeIn("d6")}>
                <div className="mt-6 flex flex-wrap items-center gap-2.5">
                  <span className="mr-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
                    Expertises
                  </span>
                  {EXPERTISE_TAGS.map((tag, i) => (
                    <span
                      key={tag}
                      className={`hero-tag-line rounded-sm border border-white/[0.06] bg-white/[0.02] px-3.5 py-2 text-[10.5px] font-medium tracking-wide text-white/45 transition-all duration-200 hover:border-emerald-400/25 hover:bg-white/[0.05] hover:text-emerald-300/85 ${
                        mounted ? "" : "opacity-0"
                      }`}
                      style={{
                        animationDelay: mounted ? `${0.95 + i * 0.06}s` : undefined,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── RIGHT — Image area (optionnelle) ─── */}
            <div className="relative lg:col-span-6 lg:mt-0">
              <div className={fadeIn("d6")}>
                <div className="relative">
                  {/* Conteneur image avec cadre subtil */}
                  <div className="relative overflow-hidden rounded-sm">
                    
                    
                    {/* Overlay très léger pour harmoniser */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
                    
                    {/* Cadre décoratif — coins élégants */}
                    <div className="pointer-events-none absolute inset-0">
                      <div className="absolute left-4 top-4 h-8 w-8 border-l border-t border-white/20" />
                      <div className="absolute right-4 bottom-4 h-8 w-8 border-r border-b border-white/20" />
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Trusted By — Marquee épuré ── */}
        <div className={fadeIn("d8")}>
          <div className="border-t border-white/[0.08]">
            <div className="flex items-center px-6 py-7 sm:px-10">
              <span className="mr-10 hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25 lg:block">
                Ils nous
                <br />
                font confiance
              </span>

              <div className="hidden h-9 w-px bg-white/[0.08] lg:block" />

              <div
                className="relative flex flex-1 overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                }}
              >
                <div className="hero-marquee flex w-max items-center gap-16 whitespace-nowrap pl-10">
                  {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                    <ClientLogo
                      key={`${client.name}-${i}`}
                      client={client}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom transition ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
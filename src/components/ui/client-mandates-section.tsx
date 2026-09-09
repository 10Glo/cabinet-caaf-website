// src/components/ui/client-mandates-section.tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { StaticImageData } from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

import crdb_logo from "@/assets/CRDB_BANK_logo.svg"
import midema_logo from "@/assets/ACG-LOGO-MIDEMA.png"
import cilu_logo from "@/assets/cilu.png"
import ppc_logo from "@/assets/ppc.png"
import enge_logo from "@/assets/engen_logo.png"
import metalkol from "@/assets/Metakol-banner.png"
import Chemaf from "@/assets/chemaf.png"
import ABM from "@/assets/alphamin-logo-primary.png"
import frontier from "@/assets/horizontal-black.png"
import weir_minerals from "@/assets/weir minerals.png"
import ivanhoe from "@/assets/ivanhoe.png"
import sek from "@/assets/kipoi.webp"

// ─── Types ───────────────────────────────────────────────
type ClientItem = {
  name: string
  sector?: string
  img?: string | StaticImageData
  active?: boolean
}

// ─── Data ────────────────────────────────────────────────
const ITEMS_PER_PAGE = 8

const CLIENTS: ClientItem[] = [
  { name: "CRDB Bank", img: crdb_logo, sector: "Institution financière" },
  { name: "MIDEMA R.D Congo", img: midema_logo, sector: "Industrie" },
  { name: "CILU", img: cilu_logo, sector: "Production" },
  { name: "PPC", img: ppc_logo, sector: "Matériaux" },
  { name: "Engen", img: enge_logo, sector: "Énergie" },
  { name: "Metalkol", img: metalkol, sector: "Mines" },
  { name: "Frontier", img: frontier, sector: "Mines" },
  { name: "Chemaf", img: Chemaf, sector: "Mines" },
  { name: "ABM", img: ABM, sector: "Ressources" },
  { name: "Weir Minerals", img: weir_minerals, sector: "Industrie minière" },
  { name: "Ivanhoe", img: ivanhoe, sector: "Mines" },
  { name: "SEK", img: sek, sector: "Industrie" },
]

// ─── Helpers ─────────────────────────────────────────────
function isStaticImageData(
  img: string | StaticImageData
): img is StaticImageData {
  return typeof img === "object" && "src" in img
}

// ─── Client Card ─────────────────────────────────────────
function ClientCard({
  client,
  index,
  isVisible,
}: {
  client: ClientItem
  index: number
  isVisible: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const isActive = client.active ?? true

  return (
    <div
      className={`group relative cursor-default overflow-hidden border p-6 transition-all duration-500 lg:p-8 ${
        hovered
          ? "border-[#111A4A]/20 bg-[#111A4A]/[0.02]"
          : "border-[#111A4A]/[0.06]"
      } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
      style={{
        transitionDelay: `${index * 40 + 200}ms`,
        opacity: isVisible ? (isActive ? 1 : 0.65) : 0,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Sector tag + status indicator */}
      <div className="mb-6 flex items-center gap-2">
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 ${
            isActive
              ? hovered
                ? "bg-primary"
                : "bg-primary/50"
              : "bg-[#7C7F88]/25"
          }`}
        />
        <span
          className={`inline-block px-2 py-0.5 font-semibold text-[10px] transition-colors duration-300 ${
            hovered
              ? "bg-[#111A4A] text-white"
              : "bg-[#111A4A]/[0.05] text-[#7C7F88]"
          }`}
        >
          {client.sector ?? "Mission"}
        </span>
      </div>

      {/* Logo + Name — justified extremes */}
      <div className="flex min-h-[36px] items-center justify-between gap-3">
        {client.img ? (
          <Image
            src={client.img}
            alt={client.name}
            width={isStaticImageData(client.img) ? client.img.width : 160}
            height={isStaticImageData(client.img) ? client.img.height : 40}
            className={`h-7 w-auto max-w-[100px] shrink-0 object-contain transition-all duration-300 ${
              hovered
                ? "opacity-90 grayscale-0"
                : "opacity-40 grayscale"
            }`}
            style={{ width: "auto", height: "28px" }}
            unoptimized
          />
        ) : null}

        <span
          className={`text-right text-xs font-semibold transition-colors duration-300 ${
            hovered ? "text-[#111A4A]" : "text-[#111A4A]/70"
          }`}
        >
          {client.name}
        </span>
      </div>

      {/* Animated underline */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden bg-[#111A4A]/[0.06]">
        <div
          className={`h-full transition-all duration-500 ${
            hovered ? "w-full" : "w-0"
          } ${isActive ? "bg-primary/40" : "bg-[#111A4A]/20"}`}
        />
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function ClientMandatesSection() {
  const [page, setPage] = useState(0)

  const totalPages = Math.ceil(CLIENTS.length / ITEMS_PER_PAGE)
  const start = page * ITEMS_PER_PAGE
  const visibleClients = CLIENTS.slice(start, start + ITEMS_PER_PAGE)
  const hasMore = totalPages > 1

  return (
    <section className="bg-white px-10 py-section">
      <div className="w-full">
        {/* ── Header — left-aligned ── */}
        <div className="mb-14 max-w-3xl lg:mb-20">
          <div
            className="mb-5 inline-flex items-center"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Références
            </span>
          </div>

          <h2
            className="mb-6 max-w-2xl text-[40px] font-normal leading-tight tracking-tight text-[#111A4A]"
          >
            Des missions conduites auprès d&apos;acteurs{" "}
            <span className="opacity-40">de premier plan.</span>
          </h2>

          <p
            className="max-w-xl text-lg leading-6 text-[#111A4A] opacity-60"
          >
            Nos équipes interviennent auprès d&apos;institutions financières,
            de groupes miniers, d&apos;acteurs industriels et de sociétés
            stratégiques opérant en RDC et dans la région.
          </p>
        </div>

        {/* ── Client Grid ── */}
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {visibleClients.map((client, i) => (
            <ClientCard
              key={`${client.name}-${start + i}`}
              client={client}
              index={i}
              isVisible={true}
            />
          ))}
        </div>

        {/* ── Bottom row: stats + pagination ── */}
        <div
          className="h-px bg-[#111A4A]/[0.06]"
        />

        <div
          className="flex flex-wrap items-center justify-between gap-8 pt-10"
        >
          {/* Stats */}
          <div className="flex flex-wrap gap-10">
            {[
              { value: `${CLIENTS.length}+`, label: "Références" },
              { value: "Multi-sectoriel", label: "Banque, mines, industrie" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-3">
                <span className="font-serif text-2xl text-[#111A4A]">
                  {stat.value}
                </span>
                <span className="text-xs text-[#7C7F88]">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {hasMore && (
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="flex h-8 w-8 items-center justify-center border border-[#111A4A]/[0.1] text-[#7C7F88] transition-all hover:border-primary/30 hover:text-primary disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPage(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === page
                        ? "w-6 bg-primary"
                        : "w-1.5 bg-[#111A4A]/15 hover:bg-[#111A4A]/30"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  setPage((p) => Math.min(totalPages - 1, p + 1))
                }
                disabled={page === totalPages - 1}
                className="flex h-8 w-8 items-center justify-center border border-[#111A4A]/[0.1] text-[#7C7F88] transition-all hover:border-primary/30 hover:text-primary disabled:opacity-30"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* ── CTAs — left-aligned ── */}
        <div
          className="mt-12 flex flex-col items-start gap-6"
        >
          <Link
            href="#contact"
            className="btn-primary-hero group relative inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-9 py-4 text-[14px] font-semibold tracking-wide text-white"
          >
            <span className="relative z-10">Demander des références sectorielles</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <p className="text-sm text-[#7C7F88]">
            Besoin d&apos;une référence dans votre secteur ?{" "}
            <Link
              href="#contact"
              className="group/link inline-flex items-center gap-1.5 font-medium text-primary transition-all hover:gap-2.5"
            >
              Demandez-nous
              <ArrowRight
                size={13}
                className="transition-transform group-hover/link:translate-x-0.5"
              />
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

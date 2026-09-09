// src/components/ui/references-grid.tsx
"use client"

import React, { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import type { StaticImageData } from "next/image"
import Link from "next/link"

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

// ─── Constants ───────────────────────────────────────────
const ITEMS_PER_PAGE = 8

type ClientRef = {
 name: string
 sector: string
 type: string
 img?: string | StaticImageData
}

type SectorFilter = "Tous" | "Mines" | "Industrie" | "Finance" | "Énergie"

const CLIENTS: ClientRef[] = [
 { name: "CRDB Bank", sector: "Finance", type: "Institution financière", img: crdb_logo },
 { name: "MIDEMA R.D Congo", sector: "Industrie", type: "Production industrielle", img: midema_logo },
 { name: "CILU", sector: "Industrie", type: "Cimenterie", img: cilu_logo },
 { name: "PPC", sector: "Industrie", type: "Matériaux de construction", img: ppc_logo },
 { name: "Engen", sector: "Énergie", type: "Distribution pétrolière", img: enge_logo },
 { name: "Metalkol", sector: "Mines", type: "Exploitation minière", img: metalkol },
 { name: "Frontier", sector: "Mines", type: "Exploration minière", img: frontier },
 { name: "Chemaf", sector: "Mines", type: "Traitement de minerais", img: Chemaf },
 { name: "ABM (Alphamin)", sector: "Mines", type: "Ressources minières", img: ABM },
 { name: "Weir Minerals", sector: "Mines", type: "Équipements miniers", img: weir_minerals },
 { name: "Ivanhoe Mines", sector: "Mines", type: "Développement minier", img: ivanhoe },
 { name: "SEK (Kipoi)", sector: "Mines", type: "Cuivre & Cobalt", img: sek },
]

const SECTORS: SectorFilter[] = ["Tous", "Mines", "Industrie", "Finance", "Énergie"]

// ─── Helpers ─────────────────────────────────────────────

function isStaticImageData(img: string | StaticImageData): img is StaticImageData {
 return typeof img === "object" && "src" in img
}

// ─── Client Card ─────────────────────────────────────────

function ClientCard({ client }: { client: ClientRef }) {
 return (
  <div className="group flex h-full flex-col justify-between border border-[#111A4A]/[0.06] bg-white p-6 transition-all duration-300 hover:border-slate-300">
   {/* Logo */}
   <div className="flex h-10 items-center">
    {client.img ? (
     <Image
      src={client.img}
      alt={client.name}
      width={isStaticImageData(client.img) ? client.img.width : 160}
      height={isStaticImageData(client.img) ? client.img.height : 40}
      className="h-8 w-auto max-w-[140px] object-contain opacity-50 grayscale transition-all duration-500 group-hover:opacity-90 group-hover:grayscale-0"
      style={{ width: "auto", height: "32px" }}
      unoptimized
     />
    ) : (
     <span className="text-base font-semibold tracking-tight text-[#111A4A]/70">
      {client.name}
     </span>
    )}
   </div>

   {/* Meta */}
   <div className="mt-5 flex items-center justify-between border-t border-[#111A4A]/[0.06] pt-4">
    <div>
     <span className="block font-mono text-[9px] uppercase tracking-[0.12em] text-primary/70">
      {client.sector}
     </span>
     <span className="mt-0.5 block text-[11px] text-[#7C7F88]/50">
      {client.type}
     </span>
    </div>
    <span className="h-1.5 w-1.5 rounded-full bg-primary/30 transition-colors duration-300 group-hover:bg-primary/60" />
   </div>
  </div>
 )
}

// ─── Pagination ──────────────────────────────────────────

function Pagination({
 currentPage,
 totalPages,
 totalItems,
 onPageChange,
}: {
 currentPage: number
 totalPages: number
 totalItems: number
 onPageChange: (page: number) => void
}) {
 if (totalPages <= 1) return null

 const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
 const start = (currentPage - 1) * ITEMS_PER_PAGE + 1
 const end = Math.min(currentPage * ITEMS_PER_PAGE, totalItems)

 return (
  <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
   {/* Page info */}
   <p className="font-mono text-[11px] text-[#7C7F88]/50">
    Affichage {start}—{end} sur {totalItems}
   </p>

   {/* Page buttons */}
   <div className="flex items-center gap-2">
    <button
     type="button"
     onClick={() => onPageChange(currentPage - 1)}
     disabled={currentPage === 1}
     className={`flex h-9 w-9 items-center justify-center border text-[13px] transition-all duration-200 ${
      currentPage === 1
       ? "cursor-not-allowed border-[#111A4A]/[0.03] text-[#7C7F88]/20"
       : "border-[#111A4A]/[0.06] text-[#7C7F88] hover:border-primary/30 hover:text-primary"
     }`}
    >
     &larr;
    </button>

    {pages.map((page) => (
     <button
      key={page}
      type="button"
      onClick={() => onPageChange(page)}
      className={`flex h-9 w-9 items-center justify-center border font-mono text-[11px] transition-all duration-200 ${
       page === currentPage
        ? "border-primary/30 bg-primary/5 text-primary"
        : "border-[#111A4A]/[0.06] text-[#7C7F88]/50 hover:border-slate-300 hover:text-[#111A4A]"
      }`}
     >
      {page}
     </button>
    ))}

    <button
     type="button"
     onClick={() => onPageChange(currentPage + 1)}
     disabled={currentPage === totalPages}
     className={`flex h-9 w-9 items-center justify-center border text-[13px] transition-all duration-200 ${
      currentPage === totalPages
       ? "cursor-not-allowed border-[#111A4A]/[0.03] text-[#7C7F88]/20"
       : "border-[#111A4A]/[0.06] text-[#7C7F88] hover:border-primary/30 hover:text-primary"
     }`}
    >
     &rarr;
    </button>
   </div>
  </div>
 )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function ReferencesGrid() {
 const [activeSector, setActiveSector] = useState<SectorFilter>("Tous")
 const [currentPage, setCurrentPage] = useState(1)

 const filtered =
  activeSector === "Tous"
   ? CLIENTS
   : CLIENTS.filter((c) => c.sector === activeSector)

 const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
 const paginated = filtered.slice(
  (currentPage - 1) * ITEMS_PER_PAGE,
  currentPage * ITEMS_PER_PAGE
 )

 // Reset page when filter changes
 const handleSectorChange = useCallback((sector: SectorFilter) => {
  setActiveSector(sector)
  setCurrentPage(1)
 }, [])

 // Page change with scroll
 const handlePageChange = useCallback((page: number) => {
  setCurrentPage(page)
  const el = document.getElementById("references-grid")
  if (el) {
   el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
 }, [])

 // Keyboard navigation
 useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
   if (e.key === "ArrowLeft" && currentPage > 1) {
    handlePageChange(currentPage - 1)
   } else if (e.key === "ArrowRight" && currentPage < totalPages) {
    handlePageChange(currentPage + 1)
   }
  }
  window.addEventListener("keydown", handleKeyDown)
  return () => window.removeEventListener("keydown", handleKeyDown)
 }, [currentPage, totalPages, handlePageChange])

 return (
  <section
   id="references-grid"
   className="bg-canvas px-6 pb-20 pt-16 sm:px-10 lg:pb-28 lg:pt-20"
  >
   <div className="mx-auto max-w-7xl">
    {/* ── Header ── */}
    <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
     <div className="max-w-3xl">
      <div className="mb-5 inline-flex items-center">
       <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
        Nos clients
       </span>
      </div>

      <h2 className="mb-4 max-w-2xl text-[40px] font-normal leading-tight tracking-tight text-[#111A4A] lg:mb-0">
       Des missions conduites auprès
       <br />
       <span className="opacity-40">
        d&apos;acteurs de premier plan.
       </span>
      </h2>
     </div>

     {/* Live count badge */}
     <div className="inline-flex shrink-0 items-center gap-3 self-start border border-[#111A4A]/[0.06] bg-white px-5 py-3 lg:self-auto">
      <span className="font-serif text-2xl text-[#111A4A]">
       {filtered.length}
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7C7F88]">
       {activeSector === "Tous"
        ? "références totales"
        : `en ${activeSector.toLowerCase()}`}
      </span>
     </div>
    </div>

    {/* ── Sector filters ── */}
    <div className="mb-8 flex flex-wrap items-center gap-3">
     {SECTORS.map((sector) => {
      const isActive = sector === activeSector
      const count =
       sector === "Tous"
        ? CLIENTS.length
        : CLIENTS.filter((c) => c.sector === sector).length
      return (
       <button
        key={sector}
        type="button"
        onClick={() => handleSectorChange(sector)}
        className={`inline-flex items-center gap-2 border px-5 py-3 text-[13px] font-medium transition-all duration-200 ${
         isActive
          ? "border-primary/30 bg-primary/5 text-primary"
          : "border-[#111A4A]/[0.06] bg-white text-[#7C7F88] hover:border-slate-300 hover:text-[#111A4A]"
        }`}
       >
        {sector}
        <span
         className={`font-mono text-[10px] ${
          isActive ? "text-primary/60" : "text-[#7C7F88]/40"
         }`}
        >
         {count}
        </span>
       </button>
      )
     })}
    </div>

    {/* ── Divider ── */}
    <div className="mb-8 h-px bg-[#111A4A]/[0.06]" />

    {/* ── Client grid ── */}
    {paginated.length > 0 ? (
     <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {paginated.map((client) => (
       <ClientCard
        key={client.name}
        client={client}
       />
      ))}
     </div>
    ) : (
     <div className="border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.02] py-20 text-center">
      <p className="font-serif text-xl text-[#111A4A]/40">
       Aucune référence dans ce secteur
      </p>
      <p className="mt-2 text-sm text-[#7C7F88]/50">
       Essayez un autre filtre ou consultez toutes nos références.
      </p>
      <button
       type="button"
       onClick={() => handleSectorChange("Tous")}
       className="mt-6 inline-flex items-center gap-2 border border-[#111A4A]/[0.06] bg-white px-5 py-2.5 text-[12px] font-medium text-[#7C7F88] transition-all duration-200 hover:border-slate-300 hover:text-primary"
      >
       Voir toutes les références
      </button>
     </div>
    )}

    {/* ── Pagination ── */}
    <Pagination
     currentPage={currentPage}
     totalPages={totalPages}
     totalItems={filtered.length}
     onPageChange={handlePageChange}
    />

    {/* ── Bottom strip ── */}
    <div className="mt-10 flex flex-col items-center justify-between gap-4 border border-[#111A4A]/[0.06] bg-white px-8 py-5 md:flex-row">
     <p className="text-sm text-[#7C7F88]">
      Cette liste est non exhaustive.{" "}
      <span className="font-medium text-[#111A4A]/70">
       Contactez-nous pour des références sectorielles détaillées.
      </span>
     </p>

     <Link
      href="/contact"
      className="group inline-flex shrink-0 items-center gap-2 text-[13px] font-medium text-primary transition-all hover:gap-2.5"
     >
      Demander des références
      <span className="text-[14px] leading-none transition-transform duration-200 group-hover:translate-x-0.5">
       &rarr;
      </span>
     </Link>
    </div>
   </div>
  </section>
 )
}

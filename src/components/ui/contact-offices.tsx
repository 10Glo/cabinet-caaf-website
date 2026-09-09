// src/components/ui/contact-offices.tsx
"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
 Map,
 MapMarker,
 MarkerContent,
 MarkerLabel,
 MarkerPopup,
} from "@/components/ui/map"

// ─── Data ────────────────────────────────────────────────
const EASE_OUT = [0.1, 0, 0.1, 1] as const

type Office = {
 id: number
 city: string
 type: string
 label: string
 address: string[]
 phone: string
 email: string
 hours: string
 lat: number
 lng: number
}

const OFFICES: Office[] = [
  {
   id: 1,
   city: "Kinshasa",
   type: "Bureau Kinshasa",
   label: "Bureau Kinshasa",
   address: ["13 Avenue de la Mongala", "Immeuble Midema, C/Gombe", "Kinshasa, RDC"],
   phone: "+243 999 309 901 / +243 810 372 645",
   email: "contact@caaf.cd",
   hours: "Lun — Ven · 08h00 — 17h30",
   lat: -4.302915,
   lng: 15.306660,
  },
  {
   id: 2,
   city: "Lubumbashi",
   type: "Bureau Lubumbashi",
   label: "Bureau Lubumbashi",
   address: ["1034 Kilela Balanda, 3ᵉ Étage", "Immeuble Infinity", "Lubumbashi, Haut-Katanga"],
   phone: "+243 990 658 737 / +243 817 103 993",
   email: "contact@caaf.cd",
   hours: "Lun — Ven · 08h00 — 17h00",
   lat: -11.647864,
   lng: 27.476984,
  },
]

// Center between both cities
const MAP_CENTER: [number, number] = [21.39, -7.97]
const MAP_ZOOM = 5.2

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════
export function ContactOffices() {
 return (
  <section className="relative overflow-hidden bg-white">
   {/* Subtle dot texture */}
   <div
    aria-hidden
    className="pointer-events-none absolute inset-0"
    style={{
     opacity: 0.03,
     backgroundImage:
      "radial-gradient(circle at 1px 1px, rgba(17,26,74,0.18) 1px, transparent 0)",
     backgroundSize: "26px 26px",
    }}
   />

   <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
    {/* ── Header ── */}
    <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
     <div>
      <div
       className="mb-5 inline-flex items-center"
      >
       <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
        Nos bureaux
       </span>
      </div>

      <h2
       className="text-[40px] font-normal leading-tight tracking-tight text-[#111A4A]"
      >
       Présence à Kinshasa{" "}
       <span className="opacity-40">et à Lubumbashi.</span>
      </h2>
     </div>

     <p
      className="max-w-xl text-lg leading-6 text-[#111A4A]/60"
     >
      Notre implantation dans les deux principaux pôles économiques de la
      RDC nous permet d'intervenir rapidement et de maintenir une
      proximité opérationnelle avec nos clients.
     </p>
    </div>

    {/* ── Map + Office Cards ── */}
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
     {/* Map — large */}
     <div
      className="overflow-hidden border border-[#111A4A]/[0.08] lg:col-span-7"
     >
      <div className="h-[420px] w-full lg:h-full lg:min-h-[520px]">
       <Map center={MAP_CENTER} zoom={MAP_ZOOM}>
        {OFFICES.map((office) => (
         <MapMarker
          key={office.id}
          longitude={office.lng}
          latitude={office.lat}
         >
          <MarkerContent>
           <div className="relative">
            <div className="h-4 w-4 cursor-pointer rounded-full border-2 border-white bg-primary shadow-lg transition-transform hover:scale-110" />
            <span className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
           </div>
           <MarkerLabel position="bottom">
            {office.label}
           </MarkerLabel>
          </MarkerContent>

          <MarkerPopup className="w-64 p-0">
           <div className="space-y-3 p-4">
            <div>
             <p className="pb-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              {office.type}
             </p>
             <h3 className="text-lg font-semibold leading-tight text-[#111A4A]">
              {office.city}
             </h3>
            </div>

            <div className="space-y-1 text-[13px] text-[#7C7F88]">
             {office.address.map((line) => (
              <p key={line}>{line}</p>
             ))}
            </div>

            <div className="border-t border-[#111A4A]/[0.06] pt-3">
             <p className="text-[12px] text-[#7C7F88]">
              {office.hours}
             </p>
            </div>

            <div className="flex gap-2 pt-1">
             <a
              href={`tel:${office.phone.replace(/\s/g, "")}`}
              className="flex-1 bg-primary px-3 py-2 text-center text-[12px] font-medium text-white transition-colors hover:bg-primary/90"
             >
              Appeler
             </a>
             <a
              href={`mailto:${office.email}`}
              className="border border-[#111A4A]/[0.08] bg-white px-3 py-2 text-[12px] font-medium text-[#111A4A] transition-colors hover:bg-[#111A4A]/[0.03]"
             >
              Email
             </a>
            </div>
           </div>
          </MarkerPopup>
         </MapMarker>
        ))}
       </Map>
      </div>
     </div>

     {/* Office cards — stacked */}
     <div className="flex flex-col gap-5 lg:col-span-5">
      {OFFICES.map((office) => (
       <article
        key={office.id}
        className="group relative flex-1 border border-[#111A4A]/[0.08] bg-white p-7 transition-all duration-500 hover:border-slate-300 "
       >
        {/* Top accent line on hover */}
        <div className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-primary/50 transition-transform duration-500 group-hover:scale-x-100" />

        {/* Type + City */}
        <div className="mb-6">
         <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
          {office.type}
         </p>
         <h3 className="text-2xl font-normal tracking-tight text-[#111A4A] transition-transform duration-500 group-hover:translate-x-1">
          {office.city}
         </h3>
        </div>

        {/* Address */}
        <div className="mb-6 space-y-0.5">
         {office.address.map((line) => (
          <p key={line} className="text-[13px] leading-5 text-[#7C7F88]">
           {line}
          </p>
         ))}
        </div>

        {/* Contact rows */}
        <div className="space-y-2">
         <a
          href={`tel:${office.phone.replace(/\s/g, "")}`}
          className="group/row flex items-center justify-between border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.015] px-4 py-3 transition-all duration-300 hover:border-slate-300 hover:bg-primary/[0.03]"
         >
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7C7F88]/60">
           Téléphone
          </span>
          <span className="text-[13px] font-medium text-[#111A4A]/70 transition-colors group-hover/row:text-[#111A4A]">
           {office.phone}
          </span>
         </a>

         <a
          href={`mailto:${office.email}`}
          className="group/row flex items-center justify-between border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.015] px-4 py-3 transition-all duration-300 hover:border-slate-300 hover:bg-primary/[0.03]"
         >
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7C7F88]/60">
           Email
          </span>
          <span className="text-[13px] font-medium text-[#111A4A]/70 transition-colors group-hover/row:text-[#111A4A]">
           {office.email}
          </span>
         </a>
        </div>

        {/* Hours */}
        <div className="mt-6 border-t border-[#111A4A]/[0.06] pt-5">
         <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7C7F88]/50">
           Horaires
          </span>
          <span className="text-[13px] font-medium text-[#111A4A]/60">
           {office.hours}
          </span>
         </div>
        </div>
       </article>
      ))}
     </div>
    </div>

    {/* ── Bottom strip ── */}
    <div
     className="mt-10 flex flex-col items-center justify-between gap-4 border border-[#111A4A]/[0.08] bg-white px-8 py-5 md:flex-row"
    >
     <p className="text-sm text-[#7C7F88]">
      Tous nos bureaux sont accessibles sur rendez-vous.{" "}
      <span className="font-medium text-[#111A4A]/80">
       Contactez-nous pour organiser une visite.
      </span>
     </p>

     <Link
      href="#formulaire-contact"
      className="group inline-flex shrink-0 items-center gap-2 text-[13px] font-medium text-primary transition-all hover:gap-2.5"
     >
      Prendre rendez-vous
      <ArrowRight
       size={13}
       className="transition-transform group-hover:translate-x-0.5"
      />
     </Link>
    </div>
   </div>
  </section>
 )
}

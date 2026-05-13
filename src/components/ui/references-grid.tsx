// src/components/ui/references-grid.tsx
"use client"

import React, { useState } from "react"
import Image from "next/image"
import type { StaticImageData } from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Filter,
  Building2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

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

type ClientRef = {
  name: string
  sector: string
  type: string
  img?: string | StaticImageData
  icon?: LucideIcon
}

type SectorFilter = "Tous" | "Mines" | "Industrie" | "Finance" | "Énergie" | "Autre"

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

function isStaticImageData(img: string | StaticImageData): img is StaticImageData {
  return typeof img === "object" && "src" in img
}

function ClientCard({ client }: { client: ClientRef }) {
  return (
    <div className="group flex min-h-[130px] flex-col justify-between border border-hairline bg-white p-6 transition-all hover:border-primary/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <div className="flex min-h-[40px] items-center">
        {client.img ? (
          <Image
            src={client.img}
            alt={client.name}
            width={isStaticImageData(client.img) ? client.img.width : 160}
            height={isStaticImageData(client.img) ? client.img.height : 40}
            className="h-8 w-auto max-w-[150px] object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            style={{ width: "auto", height: "32px" }}
            unoptimized
          />
        ) : (
          <div className="flex items-center gap-3">
            <Building2 className="h-5 w-5 text-brand-navy/50" strokeWidth={1.6} />
            <span className="text-base font-semibold tracking-tight text-brand-navy">
              {client.name}
            </span>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-hairline pt-4">
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
            {client.sector}
          </span>
          <span className="text-[11px] text-ink/35">{client.type}</span>
        </div>
        <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
      </div>
    </div>
  )
}

export function ReferencesGrid() {
  const [activeSector, setActiveSector] = useState<SectorFilter>("Tous")

  const filtered =
    activeSector === "Tous"
      ? CLIENTS
      : CLIENTS.filter((c) => c.sector === activeSector)

  return (
    <section id="references-grid" className="bg-canvas px-10 py-section">
      <div className="w-full">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Nos clients
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              Des missions conduites auprès
              <br />
              <span className="text-ink/40">d'acteurs de premier plan.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-ink/30" strokeWidth={1.7} />
            {SECTORS.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={cn(
                  "border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
                  activeSector === sector
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-hairline bg-white text-ink/40 hover:border-primary/30 hover:text-primary"
                )}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        {/* Summary strip */}
        <div className="mb-8 grid grid-cols-2 border border-hairline bg-white md:grid-cols-4">
          {[
            { value: `${filtered.length}`, label: "références affichées" },
            { value: "Audit", label: "missions de certification" },
            { value: "Conseil", label: "interventions stratégiques" },
            { value: "Multi", label: "sectoriel & régional" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 border-r border-hairline px-5 py-5 last:border-r-0"
            >
              <div className="font-serif text-2xl leading-none text-brand-navy">
                {item.value}
              </div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-ink/35">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {filtered.map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="border border-hairline bg-white px-8 py-16 text-center">
            <p className="text-sm text-ink/40">
              Aucune référence dans ce secteur pour le moment.
            </p>
          </div>
        )}

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border border-hairline bg-white px-8 py-5 md:flex-row">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={1.7} />
            <p className="text-sm text-ink/60">
              Cette liste est non exhaustive.{" "}
              <span className="font-medium text-ink/80">
                Contactez-nous pour des références sectorielles détaillées.
              </span>
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
          >
            Demander des références
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
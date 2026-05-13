// src/app/design-system/page.tsx
"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Check,
  X,
  Copy,
  ChevronRight,
  ArrowUpRight,
  Shield,
  Eye,
  Palette,
  Type,
  Layout,
  Square,
  Layers,
  MousePointer2,
  Smartphone,
  Monitor,
  Tablet,
  AlertCircle,
  Info,
  Minus,
} from "lucide-react"
import logo from "@/assets/logo.png"

// ─── Utility ─────────────────────────────────────────────
const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ")

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 rounded-md border border-hairline bg-canvas px-2 py-1 text-[11px] font-mono text-ink/50 transition-all hover:border-primary/40 hover:text-primary active:scale-95"
    >
      {copied ? (
        <>
          <Check size={10} />
          Copié
        </>
      ) : (
        <>
          <Copy size={10} />
          {text}
        </>
      )}
    </button>
  )
}

// ─── Section Wrapper ─────────────────────────────────────
function Section({
  id,
  number,
  title,
  subtitle,
  children,
}: {
  id: string
  number: string
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <div className="mb-10 border-b border-hairline pb-6">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-primary">{number}</span>
          <h2 className="font-serif text-3xl tracking-tight text-brand-navy md:text-4xl">
            {title}
          </h2>
        </div>
        <p className="mt-2 max-w-2xl pl-12 text-sm text-ink/50">{subtitle}</p>
      </div>
      {children}
    </section>
  )
}

// ─── Color Swatch ────────────────────────────────────────
function ColorSwatch({
  name,
  hex,
  cssVar,
  className,
  textClass = "text-white",
  description,
}: {
  name: string
  hex: string
  cssVar: string
  className: string
  textClass?: string
  description?: string
}) {
  return (
    <div className="group overflow-hidden rounded-lg border border-hairline transition-shadow hover:shadow-md">
      <div className={cn("flex h-24 items-end p-4", className)}>
        <span className={cn("font-mono text-xs font-medium", textClass)}>
          {hex}
        </span>
      </div>
      <div className="bg-canvas p-4">
        <p className="text-sm font-medium text-ink">{name}</p>
        <div className="mt-1 flex items-center gap-2">
          <CopyButton text={cssVar} />
        </div>
        {description && (
          <p className="mt-2 text-xs leading-relaxed text-ink/40">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

// ─── Table of Contents ───────────────────────────────────
const TOC_ITEMS = [
  { id: "philosophy", number: "01", label: "Philosophie", icon: Eye },
  { id: "colors", number: "02", label: "Couleurs", icon: Palette },
  { id: "typography", number: "03", label: "Typographie", icon: Type },
  { id: "spacing", number: "04", label: "Espacement & Layout", icon: Layout },
  { id: "shapes", number: "05", label: "Formes & Rayons", icon: Square },
  { id: "components", number: "06", label: "Composants", icon: Layers },
  { id: "interactions", number: "07", label: "Interactions", icon: MousePointer2 },
  { id: "responsive", number: "08", label: "Responsive", icon: Smartphone },
  { id: "dos-donts", number: "09", label: "Do's & Don'ts", icon: AlertCircle },
]

// ═══════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════
export default function CaafDesignSystem() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* ── Hero ── */}
      <header className="border-b border-hairline bg-canvas px-10 pb-16 pt-36 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
                  <Shield size={12} className="text-primary" />
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                    Design System v1.0
                  </span>
                </div>
              </div>

              <h1 className="max-w-xl font-serif text-5xl leading-[1.05] tracking-tight text-brand-navy md:text-6xl">
                CAAF SAS
                <br />
                <span className="text-primary">Design System</span>
              </h1>

              <p className="max-w-lg text-base leading-relaxed text-ink/60">
                Un système de design inspiré du style éditorial de{" "}
                <strong className="text-ink/80">Claude (Anthropic)</strong>,
                adapté à l&apos;identité formelle du secteur de l&apos;audit
                financier avec les couleurs signature du cabinet.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-end gap-3">
              <Image
                src={logo}
                alt="CAAF SAS"
                height={48}
                width={180}
                className="h-12 w-auto"
              />
              <div className="flex items-center gap-4 text-xs text-ink/40">
                <span>Janvier 2025</span>
                <span>·</span>
                <span>Tailwind CSS v4</span>
                <span>·</span>
                <span>Next.js 15</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Origin Note ── */}
      <div className="border-b border-hairline bg-surface-card/40 px-10 py-8">
        <div className="mx-auto flex max-w-6xl items-start gap-4">
          <Info size={18} className="mt-0.5 shrink-0 text-brand-navy" />
          <div className="space-y-2">
            <p className="text-sm font-medium text-ink/80">
              Parti Pris Esthétique
            </p>
            <p className="max-w-3xl text-sm leading-relaxed text-ink/50">
              Nous avons choisi de suivre le langage visuel de{" "}
              <strong className="text-ink/70">claude.ai (Anthropic)</strong> —
              un canvas crème chaud, une typographie éditoriale serif/sans
              contrastée, et des surfaces sombres pour les éléments produit. Ce
              style volontairement humaniste et éditorial distingue CAAF SAS des
              sites corporate froids du secteur, tout en préservant la rigueur
              attendue d&apos;un cabinet d&apos;audit. Les couleurs corail
              d&apos;Anthropic sont remplacées par notre{" "}
              <span className="font-semibold text-primary">vert signature</span>{" "}
              et le{" "}
              <span className="font-semibold text-brand-navy">
                bleu navy de la firme
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* ── Sidebar TOC ── */}
        <aside className="sticky top-36 hidden h-fit w-64 shrink-0 border-r border-hairline px-6 py-12 lg:block">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[2px] text-ink/30">
            Sommaire
          </p>
          <nav className="flex flex-col gap-1">
            {TOC_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-ink/50 transition-colors hover:bg-surface-card hover:text-ink"
              >
                <item.icon size={14} strokeWidth={1.5} />
                <span>{item.label}</span>
                <span className="ml-auto font-mono text-[10px] text-ink/20 group-hover:text-primary">
                  {item.number}
                </span>
              </a>
            ))}
          </nav>
        </aside>

        {/* ── Main Content ── */}
        <main className="flex-1 space-y-24 px-10 py-16">
          <div className="mx-auto max-w-5xl space-y-32">
            {/* ═══ 01. PHILOSOPHY ═══ */}
            <Section
              id="philosophy"
              number="01"
              title="Philosophie de Design"
              subtitle="Les quatre piliers qui guident chaque décision visuelle du système."
            >
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Rigueur",
                    desc: "Chaque élément est intentionnel, rien n'est décoratif. Espacement calculé, alignements précis, hiérarchie respectée.",
                    icon: "01",
                  },
                  {
                    title: "Sobriété",
                    desc: "Palette limitée à 6 couleurs max, typographie contrastée serif/sans, pas de gradients ni d'effets tape-à-l'œil.",
                    icon: "02",
                  },
                  {
                    title: "Modernité",
                    desc: "Backdrop blur, micro-interactions subtiles, surfaces glassmorphiques — touches contemporaines dans un style classique.",
                    icon: "03",
                  },
                  {
                    title: "Transparence",
                    desc: "Architecture d'information claire, navigation simple, hiérarchie visible — l'utilisateur sait toujours où il est.",
                    icon: "04",
                  },
                ].map((principle) => (
                  <div
                    key={principle.title}
                    className="audit-card group transition-shadow hover:shadow-md"
                  >
                    <span className="mb-4 inline-block font-mono text-xs text-primary">
                      {principle.icon}
                    </span>
                    <h3 className="mb-2 font-serif text-xl text-brand-navy">
                      {principle.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink/60">
                      {principle.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-lg border border-white/10 bg-surface-dark px-8 py-12 text-center bg-grid-navy">
                <p className="font-serif text-2xl italic text-white/90">
                  &ldquo;La rigueur est la politesse des experts.&rdquo;
                </p>
                <span className="mt-4 block text-sm text-white/40">
                  — Philosophie CAAF SAS
                </span>
              </div>
            </Section>

            {/* ═══ 02. COLORS ═══ */}
            <Section
              id="colors"
              number="02"
              title="Palette de Couleurs"
              subtitle="Inspirée du canvas crème de Claude, adaptée avec le vert et bleu CAAF."
            >
              {/* Primary & Brand */}
              <div className="mb-8">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/40">
                  Couleurs Principales
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <ColorSwatch
                    name="Vert Primaire"
                    hex="#259E01"
                    cssVar="bg-primary"
                    className="bg-primary"
                    description="CTAs, liens actifs, accents. Remplace le corail d'Anthropic."
                  />
                  <ColorSwatch
                    name="Vert Hover"
                    hex="#1d7d01"
                    cssVar="bg-primary-active"
                    className="bg-primary-active"
                    description="État hover/pressed des boutons primaires."
                  />
                  <ColorSwatch
                    name="Bleu Navy"
                    hex="#014065"
                    cssVar="bg-brand-navy"
                    className="bg-brand-navy"
                    description="Titres, surfaces sombres. L'autorité du cabinet."
                  />
                </div>
              </div>

              {/* Surfaces */}
              <div className="mb-8">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/40">
                  Surfaces & Canvas
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <ColorSwatch
                    name="Canvas"
                    hex="#faf9f5"
                    cssVar="bg-canvas"
                    className="bg-canvas"
                    textClass="text-ink/60"
                    description="Fond principal — crème chaud, jamais blanc pur."
                  />
                  <ColorSwatch
                    name="Surface Soft"
                    hex="#f5f0e8"
                    cssVar="bg-surface-soft"
                    className="bg-surface-soft"
                    textClass="text-ink/60"
                    description="Bandes alternées, fonds légers."
                  />
                  <ColorSwatch
                    name="Surface Card"
                    hex="#efe9de"
                    cssVar="bg-surface-card"
                    className="bg-surface-card"
                    textClass="text-ink/60"
                    description="Cartes contenu, feature cards."
                  />
                  <ColorSwatch
                    name="Surface Dark"
                    hex="#014065"
                    cssVar="bg-surface-dark"
                    className="bg-surface-dark"
                    description="Blocs foncés, citations, CTAs."
                  />
                </div>
              </div>

              {/* Text & Borders */}
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/40">
                  Texte & Bordures
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <ColorSwatch
                    name="Ink (Encre)"
                    hex="#141413"
                    cssVar="text-ink"
                    className="bg-ink"
                    description="Texte principal. Noir chaud, légèrement off-black."
                  />
                  <ColorSwatch
                    name="Hairline"
                    hex="#e6dfd8"
                    cssVar="border-hairline"
                    className="bg-[#e6dfd8]"
                    textClass="text-ink/60"
                    description="Bordures 1px. Subtiles, jamais noires."
                  />
                  <ColorSwatch
                    name="Blanc"
                    hex="#ffffff"
                    cssVar="text-white"
                    className="bg-white border border-hairline"
                    textClass="text-ink/40"
                    description="Texte sur surfaces primaires/sombres."
                  />
                </div>
              </div>

              {/* Claude vs CAAF comparison */}
              <div className="mt-10 overflow-hidden rounded-lg border border-hairline">
                <div className="bg-surface-card/50 px-6 py-4">
                  <h4 className="text-sm font-semibold text-ink/70">
                    Claude → CAAF : Correspondance des couleurs
                  </h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-hairline bg-canvas text-left">
                        <th className="px-6 py-3 font-medium text-ink/50">
                          Rôle
                        </th>
                        <th className="px-6 py-3 font-medium text-ink/50">
                          Claude (Anthropic)
                        </th>
                        <th className="px-6 py-3 font-medium text-ink/50">
                          CAAF SAS
                        </th>
                        <th className="px-6 py-3 font-medium text-ink/50">
                          Raison
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-hairline">
                      {[
                        {
                          role: "Primary / CTA",
                          claude: "#cc785c (Corail)",
                          caaf: "#259E01 (Vert)",
                          reason: "Couleur logo CAAF, symbolise croissance",
                        },
                        {
                          role: "Canvas",
                          claude: "#faf9f5 (Crème)",
                          caaf: "#faf9f5 (Crème)",
                          reason: "Identique — chaleur éditoriale conservée",
                        },
                        {
                          role: "Ink",
                          claude: "#141413",
                          caaf: "#141413",
                          reason: "Identique — noir chaud pour lisibilité",
                        },
                        {
                          role: "Surface Dark",
                          claude: "#181715 (Charbon)",
                          caaf: "#014065 (Navy)",
                          reason: "Bleu logo CAAF, autorité institutionnelle",
                        },
                        {
                          role: "Hairline",
                          claude: "#e6dfd8",
                          caaf: "#e6dfd8",
                          reason: "Identique — bordures crème cohérentes",
                        },
                      ].map((row) => (
                        <tr key={row.role} className="hover:bg-surface-soft/50">
                          <td className="px-6 py-3 font-medium text-ink">
                            {row.role}
                          </td>
                          <td className="px-6 py-3 font-mono text-xs text-ink/60">
                            {row.claude}
                          </td>
                          <td className="px-6 py-3 font-mono text-xs text-primary">
                            {row.caaf}
                          </td>
                          <td className="px-6 py-3 text-xs text-ink/50">
                            {row.reason}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Section>

            {/* ═══ 03. TYPOGRAPHY ═══ */}
            <Section
              id="typography"
              number="03"
              title="Typographie"
              subtitle="Serif pour l'autorité, Sans pour la modernité technique. Le contraste est la voix de la marque."
            >
              {/* Font families */}
              <div className="mb-10 grid gap-6 md:grid-cols-2">
                <div className="audit-card">
                  <span className="mb-2 inline-block rounded-full bg-brand-navy/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-navy">
                    Display / Titres
                  </span>
                  <p className="mt-4 font-serif text-4xl tracking-tight text-brand-navy">
                    EB Garamond
                  </p>
                  <p className="mt-2 font-serif text-lg text-ink/60">
                    Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
                  </p>
                  <p className="mt-1 font-serif text-lg text-ink/60">
                    0123456789 — &amp; é è ê ë à â ç
                  </p>
                  <div className="mt-4 flex gap-2">
                    <CopyButton text="font-serif" />
                    <CopyButton text="tracking-[-0.02em]" />
                  </div>
                  <p className="mt-3 text-xs text-ink/40">
                    Substitut open-source de Copernicus / Tiempos Headline.
                    Poids 400 uniquement — jamais bold.
                  </p>
                </div>

                <div className="audit-card">
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                    Body / UI
                  </span>
                  <p className="mt-4 text-4xl font-medium tracking-tight text-ink">
                    Inter
                  </p>
                  <p className="mt-2 text-lg text-ink/60">
                    Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
                  </p>
                  <p className="mt-1 text-lg text-ink/60">
                    0123456789 — &amp; é è ê ë à â ç
                  </p>
                  <div className="mt-4 flex gap-2">
                    <CopyButton text="font-sans" />
                    <CopyButton text="leading-relaxed" />
                  </div>
                  <p className="mt-3 text-xs text-ink/40">
                    Substitut de StyreneB. Humaniste, lisible, technique.
                    Poids 400 (body) et 500 (labels).
                  </p>
                </div>
              </div>

              {/* Type scale */}
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/40">
                Échelle Typographique
              </h3>
              <div className="space-y-0 overflow-hidden rounded-lg border border-hairline">
                {[
                  {
                    label: "Display XL",
                    size: "text-6xl",
                    font: "font-serif",
                    preview: "L'expertise",
                    specs: "64px / 400 / -1.5px",
                    use: "Hero h1",
                  },
                  {
                    label: "Display LG",
                    size: "text-5xl",
                    font: "font-serif",
                    preview: "Croissance",
                    specs: "48px / 400 / -1px",
                    use: "Section heads",
                  },
                  {
                    label: "Display MD",
                    size: "text-4xl",
                    font: "font-serif",
                    preview: "Audit financier",
                    specs: "36px / 400 / -0.5px",
                    use: "Sous-sections",
                  },
                  {
                    label: "Display SM",
                    size: "text-3xl",
                    font: "font-serif",
                    preview: "Commissariat",
                    specs: "28px / 400 / -0.3px",
                    use: "Card titles",
                  },
                  {
                    label: "Title MD",
                    size: "text-lg",
                    font: "font-sans font-medium",
                    preview: "Méthodologie d'audit",
                    specs: "18px / 500 / 0",
                    use: "Feature cards",
                  },
                  {
                    label: "Body",
                    size: "text-base",
                    font: "font-sans",
                    preview:
                      "Notre approche allie rigueur technique et compréhension sectorielle.",
                    specs: "16px / 400 / 1.55lh",
                    use: "Paragraphes",
                  },
                  {
                    label: "Caption",
                    size: "text-xs",
                    font: "font-sans uppercase tracking-widest",
                    preview: "EXPERTISES",
                    specs: "12px / 500 / 1.5px",
                    use: "Labels, tags",
                  },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    className={cn(
                      "flex flex-col gap-3 px-6 py-5 md:flex-row md:items-center md:gap-6",
                      i !== 0 && "border-t border-hairline"
                    )}
                  >
                    <div className="w-28 shrink-0">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-ink/30">
                        {row.label}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p
                        className={cn(
                          row.size,
                          row.font,
                          "text-ink leading-tight tracking-tight"
                        )}
                      >
                        {row.preview}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1">
                      <span className="font-mono text-[10px] text-ink/30">
                        {row.specs}
                      </span>
                      <span className="text-[10px] text-ink/40">{row.use}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CSS Rules */}
              <div className="mt-8 overflow-hidden rounded-lg border border-hairline bg-surface-dark">
                <div className="border-b border-white/10 px-6 py-3">
                  <span className="font-mono text-xs text-white/40">
                    globals.css — Règles de base
                  </span>
                </div>
                <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-white/80">
{`h1, h2, h3, h4 {
  @apply font-serif font-normal tracking-[-0.02em];
}

p {
  @apply font-sans leading-relaxed;
}`}
                </pre>
              </div>
            </Section>

            {/* ═══ 04. SPACING & LAYOUT ═══ */}
            <Section
              id="spacing"
              number="04"
              title="Espacement & Layout"
              subtitle="Un système cohérent pour l'alignement parfait entre header, contenu et footer."
            >
              {/* Spacing tokens */}
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/40">
                Tokens d&apos;Espacement
              </h3>
              <div className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: "XXS", value: "4px", tw: "1" },
                  { name: "XS", value: "8px", tw: "2" },
                  { name: "SM", value: "12px", tw: "3" },
                  { name: "MD", value: "16px", tw: "4" },
                  { name: "LG", value: "24px", tw: "6" },
                  { name: "XL", value: "32px", tw: "8" },
                  { name: "XXL", value: "48px", tw: "12" },
                  { name: "Section", value: "96px", tw: "py-section" },
                ].map((token) => (
                  <div
                    key={token.name}
                    className="flex items-center gap-3 rounded-md border border-hairline bg-canvas p-4"
                  >
                    <div
                      className="shrink-0 rounded-sm bg-primary/20"
                      style={{
                        width: Math.min(parseInt(token.value), 48),
                        height: Math.min(parseInt(token.value), 48),
                      }}
                    />
                    <div>
                      <p className="text-sm font-medium text-ink">
                        {token.name}
                      </p>
                      <p className="font-mono text-[11px] text-ink/40">
                        {token.value} → {token.tw}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Layout frame */}
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/40">
                Cadre de Page
              </h3>
              <div className="overflow-hidden rounded-lg border border-hairline bg-surface-card/50 p-8">
                <div className="mx-auto max-w-lg space-y-2">
                  {/* Header */}
                  <div className="flex h-10 items-center rounded-md bg-brand-navy/10 px-4">
                    <span className="text-[10px] font-semibold text-brand-navy">
                      HEADER — fixed, px-10, h-16 / md:h-20
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex h-40 flex-col items-center justify-center rounded-md border-2 border-dashed border-primary/30 bg-canvas px-4">
                    <span className="text-[10px] font-semibold text-primary">
                      MAIN — px-10, pt-36 md:pt-40
                    </span>
                    <span className="mt-1 text-[10px] text-ink/40">
                      Même padding horizontal que le header
                    </span>
                  </div>
                  {/* Footer */}
                  <div className="flex h-10 items-center rounded-md bg-ink/10 px-4">
                    <span className="text-[10px] font-semibold text-ink/60">
                      FOOTER — px-10, w-full
                    </span>
                  </div>
                </div>

                <div className="mt-6 rounded-md border border-hairline bg-canvas p-4">
                  <p className="text-xs leading-relaxed text-ink/50">
                    <strong className="text-ink/70">Règle clé :</strong> Header,
                    contenu et footer partagent le même{" "}
                    <code className="rounded bg-surface-card px-1.5 py-0.5 font-mono text-primary">
                      px-10
                    </code>{" "}
                    pour un alignement parfait des bords. Pas de{" "}
                    <code className="rounded bg-surface-card px-1.5 py-0.5 font-mono text-ink/50">
                      max-w-7xl
                    </code>{" "}
                    sur les conteneurs principaux.
                  </p>
                </div>
              </div>
            </Section>

            {/* ═══ 05. SHAPES ═══ */}
            <Section
              id="shapes"
              number="05"
              title="Formes & Rayons"
              subtitle="Arrondis subtils et hiérarchiques — jamais excessifs."
            >
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    name: "SM",
                    value: "6px",
                    tw: "rounded-sm",
                    radius: "rounded-sm",
                  },
                  {
                    name: "MD",
                    value: "8px",
                    tw: "rounded-md",
                    radius: "rounded-md",
                  },
                  {
                    name: "LG",
                    value: "12px",
                    tw: "rounded-lg",
                    radius: "rounded-lg",
                  },
                  {
                    name: "Pill",
                    value: "9999px",
                    tw: "rounded-full",
                    radius: "rounded-full",
                  },
                ].map((shape) => (
                  <div key={shape.name} className="text-center">
                    <div
                      className={cn(
                        "mx-auto flex h-24 w-24 items-center justify-center border-2 border-primary/30 bg-primary/5",
                        shape.radius
                      )}
                    >
                      <span className="font-mono text-xs text-primary">
                        {shape.value}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-medium text-ink">
                      {shape.name}
                    </p>
                    <CopyButton text={shape.tw} />
                    <p className="mt-2 text-[11px] text-ink/40">
                      {shape.name === "SM" && "Badges, petits boutons"}
                      {shape.name === "MD" && "Boutons, inputs"}
                      {shape.name === "LG" && "Cartes, modales"}
                      {shape.name === "Pill" && "Tags, badges arrondis"}
                    </p>
                  </div>
                ))}
              </div>

              {/* Borders */}
              <div className="mt-10">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/40">
                  Bordures
                </h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-hairline bg-canvas p-6">
                    <p className="mb-2 text-sm font-medium text-ink">Solid</p>
                    <CopyButton text="border border-hairline" />
                    <p className="mt-2 text-xs text-ink/40">
                      Séparations standard
                    </p>
                  </div>
                  <div className="rounded-lg border border-dotted border-hairline bg-canvas p-6">
                    <p className="mb-2 text-sm font-medium text-ink">Dotted</p>
                    <CopyButton text="border border-dotted border-hairline" />
                    <p className="mt-2 text-xs text-ink/40">
                      Footer, séparateurs légers
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-surface-dark p-6">
                    <p className="mb-2 text-sm font-medium text-white">
                      Sur fond sombre
                    </p>
                    <CopyButton text="border border-white/10" />
                    <p className="mt-2 text-xs text-white/40">
                      Blocs navy, CTAs sombres
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* ═══ 06. COMPONENTS ═══ */}
            <Section
              id="components"
              number="06"
              title="Composants"
              subtitle="Les blocs de construction de l'interface CAAF."
            >
              {/* Buttons */}
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/40">
                Boutons
              </h3>
              <div className="mb-10 rounded-lg border border-hairline bg-canvas p-8">
                <div className="flex flex-wrap items-center gap-4">
                  <button className="btn-primary">
                    Commencer un Audit
                  </button>
                  <button className="rounded-md border border-hairline bg-white px-6 py-2.5 font-medium text-ink transition-all hover:bg-surface-soft active:scale-95">
                    En savoir plus
                  </button>
                  <button className="rounded-md px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/5">
                    Lien texte →
                  </button>
                  <button
                    disabled
                    className="cursor-not-allowed rounded-md bg-hairline px-6 py-2.5 text-sm font-medium text-ink/30"
                  >
                    Désactivé
                  </button>
                </div>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-hairline text-left">
                        <th className="pb-2 font-medium text-ink/50">Type</th>
                        <th className="pb-2 font-medium text-ink/50">Classe</th>
                        <th className="pb-2 font-medium text-ink/50">Usage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-hairline">
                      <tr>
                        <td className="py-2 text-ink">Primary</td>
                        <td className="py-2">
                          <CopyButton text="btn-primary" />
                        </td>
                        <td className="py-2 text-ink/50">
                          Actions principales
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 text-ink">Secondary</td>
                        <td className="py-2">
                          <CopyButton text="border border-hairline bg-white" />
                        </td>
                        <td className="py-2 text-ink/50">
                          Actions alternatives
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 text-ink">Text Link</td>
                        <td className="py-2">
                          <CopyButton text="text-primary" />
                        </td>
                        <td className="py-2 text-ink/50">
                          Navigation contextuelle
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cards */}
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/40">
                Cartes
              </h3>
              <div className="mb-10 grid gap-6 md:grid-cols-2">
                {/* Audit Card */}
                <div>
                  <div className="audit-card mb-3">
                    <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                      <Shield size={10} />
                      Expertise
                    </span>
                    <h3 className="mb-2 font-serif text-xl text-brand-navy">
                      Audit Financier
                    </h3>
                    <p className="text-sm leading-relaxed text-ink/60">
                      Analyse approfondie de vos états financiers pour garantir
                      conformité et transparence.
                    </p>
                    <Link
                      href="#"
                      className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
                    >
                      En savoir plus
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                  <CopyButton text="audit-card" />
                </div>

                {/* Dark Card */}
                <div>
                  <div className="mb-3 rounded-lg border border-white/10 bg-surface-dark p-8 bg-grid-navy">
                    <span className="mb-3 inline-block text-[10px] font-semibold uppercase tracking-widest text-white/40">
                      Citation
                    </span>
                    <p className="font-serif text-xl italic text-white/90">
                      &ldquo;La transparence financière est le socle de la
                      confiance.&rdquo;
                    </p>
                    <span className="mt-4 block text-sm text-white/40">
                      — Direction CAAF SAS
                    </span>
                  </div>
                  <CopyButton text="bg-surface-dark bg-grid-navy" />
                </div>
              </div>

              {/* Navigation */}
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/40">
                Navigation
              </h3>
              <div className="overflow-hidden rounded-lg border border-hairline">
                <div className="flex h-16 items-center justify-between bg-canvas/90 px-6 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary">
                      <span className="text-xs font-bold text-white">C</span>
                    </div>
                    <span className="font-serif text-lg text-ink">
                      CAAF SAS
                    </span>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-ink/60">
                    <span className="text-primary">Expertises</span>
                    <span>Méthodologie</span>
                    <span>Secteurs</span>
                    <button className="btn-primary !py-2 !text-xs">
                      Espace Client
                    </button>
                  </div>
                </div>
                <div className="bg-surface-card/50 px-6 py-3">
                  <p className="text-xs text-ink/40">
                    ↑ Header fixe avec backdrop-blur. Se transforme en pill
                    flottant au scroll.
                  </p>
                </div>
              </div>
            </Section>

            {/* ═══ 07. INTERACTIONS ═══ */}
            <Section
              id="interactions"
              number="07"
              title="Interactions"
              subtitle="Micro-interactions subtiles qui ne distraient pas de l'information."
            >
              <div className="grid gap-6 md:grid-cols-3">
                {/* Hover lift */}
                <div className="text-center">
                  <div className="audit-card mx-auto transition-all hover:-translate-y-1 hover:shadow-md">
                    <p className="text-sm font-medium text-ink">Hover Lift</p>
                    <p className="mt-1 text-xs text-ink/40">Survolez-moi</p>
                  </div>
                  <p className="mt-3 text-[11px] text-ink/40">
                    hover:-translate-y-1 hover:shadow-md
                  </p>
                </div>

                {/* Press scale */}
                <div className="text-center">
                  <button className="btn-primary w-full">
                    Cliquez-moi
                  </button>
                  <p className="mt-3 text-[11px] text-ink/40">
                    active:scale-[0.98]
                  </p>
                </div>

                {/* Link arrow */}
                <div className="text-center">
                  <Link
                    href="#"
                    className="group inline-flex items-center gap-1 text-sm font-medium text-primary"
                  >
                    Survolez ce lien
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                  <p className="mt-3 text-[11px] text-ink/40">
                    group-hover:translate-x-0.5
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-md border border-hairline bg-canvas p-6">
                <h4 className="mb-3 text-sm font-semibold text-ink/70">
                  Règles d&apos;Animation
                </h4>
                <ul className="space-y-2 text-sm text-ink/60">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                    <span>
                      Durée standard : <code className="font-mono text-primary">200ms</code> — jamais plus de 300ms
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                    <span>
                      Easing : <code className="font-mono text-primary">ease-out</code> pour les entrées, <code className="font-mono text-primary">ease-in</code> pour les sorties
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                    <span>
                      Respecter <code className="font-mono text-primary">prefers-reduced-motion</code> — désactiver les animations si demandé
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X size={14} className="mt-0.5 shrink-0 text-red-500" />
                    <span>
                      Pas de bounce, pas de pulse, pas d&apos;animation gratuite
                    </span>
                  </li>
                </ul>
              </div>
            </Section>

            {/* ═══ 08. RESPONSIVE ═══ */}
            <Section
              id="responsive"
              number="08"
              title="Responsive"
              subtitle="Comportement adaptatif sur tous les devices."
            >
              <div className="overflow-hidden rounded-lg border border-hairline">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-hairline bg-surface-card/50 text-left">
                      <th className="px-6 py-3 font-medium text-ink/50">
                        Device
                      </th>
                      <th className="px-6 py-3 font-medium text-ink/50">
                        Breakpoint
                      </th>
                      <th className="px-6 py-3 font-medium text-ink/50">
                        Comportement
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {[
                      {
                        device: "Mobile",
                        icon: Smartphone,
                        bp: "< 768px",
                        desc: "Nav hamburger, grids 1-col, hero plein écran empilé",
                      },
                      {
                        device: "Tablet",
                        icon: Tablet,
                        bp: "768–1024px",
                        desc: "Nav complète, grids 2-col, footer 2-col",
                      },
                      {
                        device: "Desktop",
                        icon: Monitor,
                        bp: "> 1024px",
                        desc: "Layout complet, grids 3-5 col, sidebar TOC visible",
                      },
                    ].map((row) => (
                      <tr key={row.device} className="hover:bg-surface-soft/50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <row.icon size={16} className="text-ink/40" />
                            <span className="font-medium text-ink">
                              {row.device}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-mono text-xs text-primary">
                          {row.bp}
                        </td>
                        <td className="px-6 py-4 text-ink/60">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* ═══ 09. DO'S & DON'TS ═══ */}
            <Section
              id="dos-donts"
              number="09"
              title="Do's & Don'ts"
              subtitle="Les règles non-négociables du système."
            >
              <div className="grid gap-6 md:grid-cols-2">
                {/* Do's */}
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Check
                      size={18}
                      className="text-primary"
                      strokeWidth={2.5}
                    />
                    <h3 className="font-serif text-lg text-primary">
                      À faire
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm text-ink/70">
                    {[
                      "Ancrer chaque page sur le canvas crème #faf9f5",
                      "Utiliser EB Garamond serif pour tous les titres d'affichage",
                      "Réserver le vert primaire aux CTAs et accents",
                      "Alterner cream → card → dark dans les bandes de page",
                      "Appliquer py-section (96px) entre les sections majeures",
                      "Maintenir px-10 identique sur header, content et footer",
                      "Utiliser Inter sans-serif pour le body text à poids 400",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Minus
                          size={12}
                          className="mt-1 shrink-0 text-primary"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Don'ts */}
                <div className="rounded-lg border border-red-200 bg-red-50/50 p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <X size={18} className="text-red-500" strokeWidth={2.5} />
                    <h3 className="font-serif text-lg text-red-600">
                      À éviter
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm text-ink/70">
                    {[
                      "Pas de gris froid ni de blanc pur pour le canvas",
                      "Pas de serif bold — rester en poids 400",
                      "Pas de bleu saturé ou cyan comme accent",
                      "Pas de vert partout — le vert est rare et précieux",
                      "Pas d'Inter pour les titres d'affichage",
                      "Pas de deux surfaces identiques consécutives",
                      "Pas de gradients, pas d'ombres lourdes",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Minus
                          size={12}
                          className="mt-1 shrink-0 text-red-400"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>

            {/* ═══ Footer Credit ═══ */}
            <div className="border-t border-hairline pt-12 text-center">
              <Image
                src={logo}
                alt="CAAF SAS"
                height={32}
                width={120}
                className="mx-auto mb-4 h-8 w-auto opacity-40"
              />
              <p className="text-xs text-ink/30">
                Design System CAAF SAS — Version 1.0 — Janvier 2025
              </p>
              <p className="mt-1 text-xs text-ink/30">
                Inspiré du langage visuel de{" "}
                <Link
                  href="https://claude.ai"
                  target="_blank"
                  className="text-primary/50 hover:text-primary"
                >
                  claude.ai
                </Link>{" "}
                par Anthropic
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
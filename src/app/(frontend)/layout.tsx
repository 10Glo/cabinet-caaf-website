// src/app/layout.tsx
import { Inter, EB_Garamond } from "next/font/google"
import React from "react"
import "./styles.css"
import { Navigation } from "@/components/HeaderNavigation"
import { Footer } from "@/components/Footer"
import { CookieConsentManager } from "@/components/ui/cookie-consent-manager"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

// Keep metadataBase via generateMetadata; fallback if Payload unavailable
export async function generateMetadata(): Promise<Metadata> {
  try {
    const { getSeoDefaults } = await import("@/lib/payload")
    const defaults = await getSeoDefaults("fr")
    if (!defaults) throw new Error("no defaults")
    return buildMetadata({ defaults, locale: "fr", path: "/" })
  } catch {
    return {
      metadataBase: new URL("https://caaf-sas.com"),
      title: "CAAF SAS | Cabinet d'Audit",
      description: "Cabinet d'Audit & Conseil - Expertise, Rigueur et Transparence.",
      openGraph: {
        title: "CAAF SAS | Cabinet d'Audit & Conseil en RDC",
        description: "Expertise, Rigueur et Transparence en audit et conseil.",
        url: "https://caaf-sas.com",
        siteName: "CAAF SAS",
        locale: "fr_CD",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "CAAF SAS | Cabinet d'Audit & Conseil en RDC",
        description: "Expertise, Rigueur et Transparence en audit et conseil.",
      },
      robots: { index: true, follow: true },
    }
  }
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})




export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD Organization depuis SiteSettings (fallback hardcodé si Payload indisponible)
  let orgJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "CAAF SAS",
    alternateName: "Congo Auditing and Advisory Firm SAS",
    url: "https://caaf-sas.com",
    logo: "https://caaf-sas.com/logo.png",
    description: "Cabinet d'Audit & Conseil en RDC - Expertise, Rigueur et Transparence.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "13 Avenue de la Mongala, Immeuble Midema, C/Gombe",
      addressLocality: "Kinshasa",
      addressCountry: "CD",
    },
    telephone: "+243999309901",
    email: "contact@caaf.cd",
    sameAs: ["https://www.linkedin.com/company/caaf-sas"],
  }
  try {
    const { getSiteSettings } = await import("@/lib/payload")
    const s = await getSiteSettings("fr")
    if (s) {
      const mediaUrl = (m: unknown) => {
        if (!m || typeof m === "number") return undefined
        return (m as { url?: string }).url
      }
      const street = s.address?.street ?? "13 Avenue de la Mongala, Immeuble Midema, C/Gombe"
      orgJsonLd = {
        "@context": "https://schema.org",
        "@type": "AccountingService",
        name: s.siteName ?? "CAAF SAS",
        alternateName: s.alternateName ?? "Congo Auditing and Advisory Firm SAS",
        url: s.siteUrl ?? "https://caaf-sas.com",
        logo: mediaUrl(s.logo) ?? "https://caaf-sas.com/logo.png",
        description: s.description ?? "Cabinet d'Audit & Conseil en RDC - Expertise, Rigueur et Transparence.",
        address: {
          "@type": "PostalAddress",
          streetAddress: street,
          addressLocality: s.address?.city ?? "Kinshasa",
          addressCountry: s.address?.country ?? "CD",
        },
        telephone: s.phone ?? "+243999309901",
        email: s.email ?? "contact@caaf.cd",
        sameAs: s.sameAs?.map((x) => x.text) ?? ["https://www.linkedin.com/company/caaf-sas"],
      }
    }
  } catch {}

  return (
    <html lang="fr" className={`${inter.variable} ${ebGaramond.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgJsonLd),
          }}
        />
      </head>
      <body suppressHydrationWarning
        className="min-h-screen w-full bg-canvas font-sans text-ink antialiased">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Navigation />
        <main id="main-content" className="w-full">{children}</main>
        <CookieConsentManager />
        <Footer />
      </body>
    </html>
  )
}
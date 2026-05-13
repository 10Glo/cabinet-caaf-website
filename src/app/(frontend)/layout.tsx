// src/app/layout.tsx
import { Inter, EB_Garamond } from "next/font/google"
import React from "react"
import "./styles.css"
import { Navigation } from "@/components/HeaderNavigation"
import { Footer } from "@/components/Footer"
import { CookieConsentManager } from "@/components/ui/cookie-consent-manager"

export const metadata = {
  description:
    "Cabinet d'Audit & Conseil - Expertise, Rigueur et Transparence.",
  title: "CAAF SAS | Cabinet d'Audit",
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




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="fr" className={`${inter.variable} ${ebGaramond.variable}`}>
      <body suppressHydrationWarning
        className="min-h-screen w-full bg-canvas font-sans text-ink antialiased">
        <Navigation />
        <main className="w-full">{children}</main>
        <CookieConsentManager />
        <Footer />
      </body>
    </html>
  )
}
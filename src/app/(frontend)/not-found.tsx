import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import CountdownRedirect from '@/components/ui/countdown-redirect'

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-brand-navy flex flex-col justify-between select-none">
      {/* ─── Fonds & Dégradés (identiques au Hero) ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/60 to-brand-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-transparent to-brand-navy/90" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#259E01]/10 blur-3xl" />
      </div>

      {/* ─── Contenu Principal ─── */}
      <div className="relative z-10 w-full px-6 pt-20 sm:px-10 md:pt-28">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow */}
          <div className="mb-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#259E01]">
              Erreur 404 — Page Introuvable
            </span>
          </div>

          {/* Titre Serif */}
          <h1 className="font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] font-black leading-[0.95] tracking-[-0.03em] text-white">
            <span className="block">Cette page semble</span>
            <span className="block mt-1">
              avoir été <span className="text-[#259E01]">déplacée</span>.
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="mt-8 max-w-xl text-[16px] leading-[1.75] text-white/60">
            Le document ou la ressource que vous recherchez n&apos;existe pas ou a
            été archivé. Nous vous redirigeons automatiquement vers notre page
            d&apos;accueil.
          </p>

          {/* Boutons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-3.5 text-[13px] font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-primary-active"
            >
              <Home className="h-4 w-4" />
              Retour à l&apos;accueil
            </Link>

            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 bg-transparent px-8 py-3.5 text-[13px] font-semibold tracking-wide text-white/80 transition-colors duration-200 hover:border-white/40 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
              Page précédente
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Bas de page : Countdown (Client Component) ─── */}
      <div className="relative z-10 w-full border-t border-white/[0.08] mt-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-end sm:items-center justify-between px-6 py-8 sm:px-10 gap-6">
          <div className="text-left hidden sm:block">
            <span className="text-[11px] font-medium tracking-wide text-white/35">
              Cabinet d&apos;Audit &amp; Conseil — RDC
            </span>
          </div>

          {/* Composant Client isolé */}
          <CountdownRedirect seconds={100} redirectTo="/" />
        </div>
      </div>
    </main>
  )
}
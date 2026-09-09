// src/app/(frontend)/politique-confidentialite/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de confidentialité — CAAF",
  description: "Politique de confidentialité du cabinet CAAF — collecte, usage, conservation et droits sur vos données personnelles.",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a1930] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">Légal</p>
          <h1 className="mt-3 font-serif text-[36px] font-normal leading-tight tracking-tight text-white md:text-[44px]">
            Politique de confidentialité
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-6 text-white/70">
            Comment CAAF collecte, utilise et protège vos données personnelles.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl space-y-10 text-[14px] leading-7 text-slate-700">
          <div>
            <h2 className="font-sans text-[14px] font-semibold text-slate-900">Données collectées</h2>
            <p className="mt-3">
              Nous collectons les informations que vous nous transmettez via le formulaire de contact, les candidatures ou les échanges directs :
              identité, coordonnées professionnelles (email, téléphone), contenu de votre message et pièces jointes éventuelles.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-10">
            <h2 className="font-sans text-[14px] font-semibold text-slate-900">Finalités</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Répondre à vos demandes et organiser un échange avec nos équipes</li>
              <li>Traiter les candidatures et la gestion des recrutements</li>
              <li>Améliorer nos services et notre communication</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
          </div>

          <div className="border-t border-slate-200 pt-10">
            <h2 className="font-sans text-[14px] font-semibold text-slate-900">Base légale & conservation</h2>
            <p className="mt-3">
              Le traitement repose sur votre consentement, l&apos;exécution de mesures précontractuelles ou notre intérêt légitime à répondre à votre sollicitation.
              Les données sont conservées pendant la durée nécessaire à la finalité poursuivie, puis archivées conformément aux obligations applicables.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-10">
            <h2 className="font-sans text-[14px] font-semibold text-slate-900">Partage</h2>
            <p className="mt-3">
              Vos données ne sont ni vendues ni louées. Elles sont accessibles aux seules équipes habilitées de CAAF et, le cas échéant, à nos prestataires techniques soumis à des obligations de confidentialité.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-10">
            <h2 className="font-sans text-[14px] font-semibold text-slate-900">Vos droits</h2>
            <p className="mt-3">
              Vous disposez des droits d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition et de portabilité.
              Pour les exercer, contactez <a href="mailto:contact@caaf.cd" className="text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900">contact@caaf.cd</a>.
              Nous répondons dans les meilleurs délais et, au plus tard, dans un délai d&apos;un mois.
            </p>
          </div>

          <div id="cookies" className="border-t border-slate-200 pt-10">
            <h2 className="font-sans text-[14px] font-semibold text-slate-900">Cookies</h2>
            <p className="mt-3">
              Le site utilise des cookies strictement nécessaires à son fonctionnement et, avec votre consentement, des cookies de mesure d&apos;audience.
              Vous pouvez gérer vos préférences via le bandeau cookies ou les paramètres de votre navigateur.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-10">
            <h2 className="font-sans text-[14px] font-semibold text-slate-900">Contact</h2>
            <p className="mt-3">
              CAAF — Bureau Kinshasa : 13 Avenue de la Mongala, Immeuble Midema, C/Gombe — Kinshasa · <a href="tel:+243999309901" className="hover:text-slate-900">+243 999 309 901</a>
              <br />
              Bureau Lubumbashi : 1034 Kilela Balanda, 3ᵉ Étage, Immeuble Infinity — Lubumbashi · <a href="tel:+243990658737" className="hover:text-slate-900">+243 990 658 737</a>
              <br />
              Email : <a href="mailto:contact@caaf.cd" className="text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900">contact@caaf.cd</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

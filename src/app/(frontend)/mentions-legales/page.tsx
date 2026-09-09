// src/app/(frontend)/mentions-legales/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions légales — CAAF",
  description: "Mentions légales du cabinet CAAF — Éditeur, hébergement, propriété intellectuelle et responsabilités.",
}

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a1930] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">Légal</p>
          <h1 className="mt-3 font-serif text-[36px] font-normal leading-tight tracking-tight text-white md:text-[44px]">
            Mentions légales
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-6 text-white/70">
            Informations relatives à l&apos;éditeur du site, à l&apos;hébergeur et aux conditions d&apos;utilisation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl space-y-10 text-[14px] leading-7 text-slate-700">
          <div>
            <h2 className="font-sans text-[14px] font-semibold text-slate-900">Éditeur</h2>
            <p className="mt-3">
              CAAF — Cabinet d&apos;Audit, d&apos;Assistance Comptable et de Formation
              <br />
              Bureau Kinshasa : 13 Avenue de la Mongala, Immeuble Midema, C/Gombe — Kinshasa, RDC
              <br />
              Bureau Lubumbashi : 1034 Kilela Balanda, 3ᵉ Étage, Immeuble Infinity — Lubumbashi, RDC
              <br />
              Email : <a href="mailto:contact@caaf.cd" className="text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900">contact@caaf.cd</a>
              <br />
              Téléphone : <a href="tel:+243999309901" className="hover:text-slate-900">+243 999 309 901</a> / <a href="tel:+243810372645" className="hover:text-slate-900">+243 810 372 645</a> — Kinshasa · <a href="tel:+243990658737" className="hover:text-slate-900">+243 990 658 737</a> / <a href="tel:+243817103993" className="hover:text-slate-900">+243 817 103 993</a> — Lubumbashi
            </p>
          </div>

          <div className="border-t border-slate-200 pt-10">
            <h2 className="font-sans text-[14px] font-semibold text-slate-900">Hébergement</h2>
            <p className="mt-3">
              Site hébergé par l&apos;infrastructure Next.js / Vercel ou équivalent selon l&apos;environnement de déploiement.
              <br />
              Les données sont traitées conformément à la politique de confidentialité du cabinet.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-10">
            <h2 className="font-sans text-[14px] font-semibold text-slate-900">Propriété intellectuelle</h2>
            <p className="mt-3">
              L&apos;ensemble des contenus (textes, visuels, logos, documents) présents sur ce site est la propriété de CAAF ou de ses partenaires.
              Toute reproduction, distribution ou exploitation sans autorisation écrite est interdite.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-10">
            <h2 className="font-sans text-[14px] font-semibold text-slate-900">Responsabilité</h2>
            <p className="mt-3">
              Les informations publiées sont fournies à titre informatif et ne constituent pas un avis professionnel.
              CAAF ne saurait être tenue responsable de l&apos;usage qui en est fait. Pour un accompagnement adapté à votre situation, contactez nos équipes.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-10">
            <h2 className="font-sans text-[14px] font-semibold text-slate-900">Nous contacter</h2>
            <p className="mt-3">
              Pour toute question relative aux mentions légales, écrivez à <a href="mailto:contact@caaf.cd" className="text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900">contact@caaf.cd</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

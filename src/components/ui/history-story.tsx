// src/components/ui/about-story.tsx
"use client"

// ─── Data ────────────────────────────────────────────────

const CHAPTERS = [
  {
    tag: "1970",
    title: "Les fondations",
    text: "C'est en 1970 que l'aventure commence en République Démocratique du Congo. Un cabinet d'audit et de conseil s'implante à Kinshasa avec une ambition claire : offrir aux entreprises congolaises un accompagnement de niveau international.",
  },
  {
    tag: "PwC RDC",
    title: "L'ère PwC",
    text: "Intégré au réseau PricewaterhouseCoopers, le cabinet a développé pendant plusieurs décennies une expertise multidisciplinaire solide. Méthodologies certifiées, outils de gestion des risques, formation continue des équipes — chaque mission renforçait un savoir-faire reconnu.",
  },
  {
    tag: "Aujourd'hui",
    title: "CAAF SAS",
    text: "Suite à la séparation de la marque PwC avec l'Afrique francophone, le cabinet est devenu CAAF SAS — Congo Auditing and Advisory Firm. L'ensemble de l'expérience, du savoir-faire et des pratiques professionnelles développées au sein de l'ancien réseau ont été préservés.",
  },
]

const FIGURES = [
  { value: "1970", label: "Année de création" },
  { value: "40+", label: "Professionnels" },
  { value: "55+", label: "Années d'expertise" },
  { value: "2", label: "Bureaux en RDC" },
]

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function HistoryStory() {
  return (
    <section
      className="bg-canvas px-6 pb-20 pt-16 sm:px-10 lg:pb-28 lg:pt-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* ── Header ── */}
        <div className="mb-14 max-w-3xl lg:mb-16">
          <div
            className="mb-5 inline-flex items-center"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Notre histoire
            </span>
          </div>

          <h2
            className="mb-6 max-w-2xl text-[40px] font-normal leading-tight tracking-tight text-[#111A4A]"
          >
            Plus de 55 ans au service
            <br />
            <span className="opacity-40">de l&apos;excellence congolaise.</span>
          </h2>

          <p
            className="max-w-xl text-lg leading-6 text-[#111A4A] opacity-60"
          >
            CAAF SAS — anciennement PwC RDC SAS — est un cabinet d&apos;audit,
            de conseil et d&apos;assistance comptable qui exerce ses activités
            en République Démocratique du Congo depuis 1970.
          </p>
        </div>

        {/* ── Main description card ── */}
        <div
          className="border border-[#111A4A]/[0.06] bg-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Text */}
            <div className="p-8 md:p-10 lg:p-12">
              <p className="text-base leading-8 text-[#111A4A]/80">
                Au cœur de Kinshasa, un cabinet a traversé les décennies en
                gardant une exigence intacte : celle de{" "}
                <span className="font-medium text-[#111A4A]">
                  servir avec rigueur, discrétion et constance
                </span>
                . De l&apos;intégration au réseau PricewaterhouseCoopers à sa
                transformation en cabinet indépendant, CAAF SAS a su
                préserver l&apos;essentiel — son savoir-faire.
              </p>

              <p className="mt-6 text-base leading-8 text-[#111A4A]/80">
                Cet héritage lui permet de maintenir une expertise
                multidisciplinaire solide, des standards de qualité internationaux
                et une signature reconnue dans le secteur de l&apos;audit et du
                conseil en RDC et dans la sous-région.
              </p>

              <p className="mt-6 text-base leading-8 text-[#111A4A]/80">
                Aujourd&apos;hui fort de plus de{" "}
                <span className="font-medium text-[#111A4A]">
                  40 professionnels
                </span>
                , le cabinet accompagne les entreprises, institutions et groupes
                stratégiques dans leurs enjeux de conformité, de gouvernance et
                de transformation financière.
              </p>
            </div>

            {/* Stats */}
            <div className="border-t border-[#111A4A]/[0.06] p-8 md:p-10 lg:border-t-0 lg:border-l lg:border-[#111A4A]/[0.06] lg:p-12">
              <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7C7F88]/50">
                En chiffres
              </p>

              <div className="grid grid-cols-2 gap-8">
                {FIGURES.map((fig) => (
                  <div key={fig.label}>
                    <p className="font-serif text-3xl text-[#111A4A]">
                      {fig.value}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#7C7F88]">
                      {fig.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Three chapters ── */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          {CHAPTERS.map((chapter) => (
            <div
              key={chapter.title}
              className="group border border-[#111A4A]/[0.06] bg-white p-8"
            >
              {/* Tag */}
              <span className="mb-5 inline-block border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.02] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C7F88]/70">
                {chapter.tag}
              </span>

              <h3 className="mb-3 font-serif text-xl text-[#111A4A] transition-transform duration-500 group-hover:translate-x-1">
                {chapter.title}
              </h3>

              <p className="text-sm leading-7 text-[#7C7F88]">
                {chapter.text}
              </p>
            </div>
          ))}
        </div>

        {/* ── Heritage banner ── */}
        <div
          className="mt-5 border border-[#111A4A]/[0.06] bg-white"
        >
          <div className="flex flex-col items-start gap-6 px-8 py-7 md:flex-row md:items-center md:justify-between md:px-10">
            <div className="flex items-center gap-4">
              <div className="h-10 w-1 bg-primary" />
              <p className="text-sm text-[#7C7F88]">
                Héritage PwC · Méthodologie internationale · Ancrage local.{" "}
                <span className="font-medium text-[#111A4A]/70">
                  C&apos;est cette combinaison qui fait notre force depuis 1970.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

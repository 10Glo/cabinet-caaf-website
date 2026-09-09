// src/components/ui/proof-banner.tsx
export function ProofBanner() {
  return (
    <div className="border-y border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-6 py-3 font-sans text-xs tracking-[0.14em] text-slate-400 sm:gap-6">
        <span>Membre CNCC</span>
        <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden />
        <span>500+ missions</span>
        <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden />
        <span>30 ans</span>
        <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden />
        <span>2 hubs · Kinshasa & Lubumbashi</span>
      </div>
    </div>
  )
}

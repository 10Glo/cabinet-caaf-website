// src/components/ui/article-reader.tsx — Medium-inspired, CAAF context — level up
"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, Bookmark, Share2 } from "lucide-react"

interface Article {
  title: string
  slug: string
  image: string
  excerpt: string
  category: string
  categorySlug: string
  date: string
  readTime: string
  author: { name: string; role: string }
  tags: string[]
}
interface Props {
  article: Article
  relatedArticles: Article[]
  content: string[]
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })
}
function parseImageMarkdown(text: string) {
  const m = text.match(/^!\[(.*?)\]\((.*?)\)$/)
  return m ? { caption: m[1], src: m[2] } : null
}

export function ArticleReader({ article, relatedArticles, content }: Props) {
  const [progress, setProgress] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const headings = content.map((s, i) => ({ text: s, index: i })).filter((s) => s.text.startsWith("## "))

  useEffect(() => {
    const onScroll = () => {
      if (!contentRef.current) return
      const el = contentRef.current
      const total = el.scrollHeight - window.innerHeight
      const pct = Math.min(Math.max(-el.getBoundingClientRect().top / total, 0), 1)
      setProgress(pct)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 h-[2px] bg-slate-100">
        <div className="h-full bg-slate-900 transition-all duration-150" style={{ width: `${progress * 100}%` }} />
      </div>

      {/* Hero — cover image as background */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img src={article.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/40 to-slate-900/10" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(900px 400px at 50% 0%, rgba(255,255,255,0.10) 0%, transparent 70%), radial-gradient(600px 320px at 85% 30%, rgba(56,189,248,0.08) 0%, transparent 65%)" }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 sm:px-10 pt-32 pb-16 md:px-12 md:pt-44 md:pb-20 lg:px-14">
          <Link href="/actualites" className="mb-8 inline-flex items-center gap-2 font-sans text-sm text-white/60 hover:text-white">
            <ArrowLeft size={14} /> Retour aux actualités
          </Link>
          <div className="mb-6 flex items-center gap-3">
            <span className="border border-white/20 bg-white/10 px-2.5 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-white">{article.category}</span>
            <span className="font-sans text-xs text-white/60">{formatDate(article.date)} · {article.readTime}</span>
          </div>
          <h1 className="font-serif text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[44px]">{article.title}</h1>
          <p className="mt-6 max-w-2xl font-serif text-lg leading-8 text-white/70">{article.excerpt}</p>
          <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-serif text-sm font-bold text-slate-900">
                {article.author.name.split(" ").map((n) => n[0]).join("").slice(0,2)}
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-white">{article.author.name}</p>
                <p className="mt-1 font-sans text-xs text-white/60">{article.author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex h-9 w-9 items-center justify-center border border-white/20 bg-white/10 text-white/70 hover:bg-white hover:text-slate-900" aria-label="Partager"><Share2 size={14} /></button>
              <button className="inline-flex h-9 w-9 items-center justify-center border border-white/20 bg-white/10 text-white/70 hover:bg-white hover:text-slate-900" aria-label="Sauvegarder"><Bookmark size={14} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Body — article takes substantial space */}
      <section className="bg-white py-12 md:py-14" ref={contentRef}>
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 sm:px-8 lg:grid-cols-[1fr_300px] lg:gap-10">
          <article className="mx-auto w-full max-w-[740px] lg:mx-0 lg:max-w-none">
            <div className="space-y-7">
              {content.map((section, index) => {
                const isFirstParagraph = index === content.findIndex((s) => !s.startsWith("## ") && !s.startsWith("### ") && !s.startsWith("> ") && !s.startsWith("![") && !s.startsWith("- ") && s.trim().length > 0)
                if (section.startsWith("## ")) {
                  return <h2 key={index} id={`section-${headings.findIndex((h) => h.index === index)}`} className="mt-10 flex items-center gap-4 font-serif text-2xl font-bold leading-tight text-slate-900 md:text-[28px]"><span className="font-mono text-sm font-normal tracking-widest text-slate-300">{String(headings.findIndex((h) => h.index === index) + 1).padStart(2, "0")}</span>{section.replace("## ", "")}</h2>
                }
                if (section.startsWith("### ")) {
                  return <h3 key={index} className="mt-8 font-serif text-xl font-semibold text-slate-900">{section.replace("### ", "")}</h3>
                }
                if (section.startsWith("> ")) {
                  return <blockquote key={index} className="relative my-10 border-l-2 border-slate-900 bg-slate-50 px-8 py-6"><span className="absolute -top-3 left-6 bg-white px-2 font-serif text-2xl text-slate-300">“</span><p className="font-serif text-[18px] italic leading-8 text-slate-700">{section.replace("> ", "")}</p></blockquote>
                }
                if (section.startsWith("![")) {
                  const parsed = parseImageMarkdown(section)
                  if (parsed) {
                    return (
                      <figure key={index} className="my-10">
                        <img src={parsed.src} alt={parsed.caption} className="w-full border border-slate-200" loading="lazy" />
                        {parsed.caption && <figcaption className="mt-3 text-center font-sans text-xs uppercase tracking-wide text-slate-400">{parsed.caption}</figcaption>}
                      </figure>
                    )
                  }
                }
                if (section.startsWith("- ")) {
                  const items = section.split("\n").filter((l) => l.startsWith("- "))
                  return <ul key={index} className="my-6 divide-y divide-slate-100 border-y border-slate-200">{items.map((item, i) => <li key={i} className="flex gap-3 py-3 font-serif text-[16px] leading-7 text-slate-700"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-slate-900" />{item.replace("- ", "")}</li>)}</ul>
                }
                return <p key={index} className={`font-serif text-[17px] leading-8 text-slate-700 ${isFirstParagraph ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-[48px] first-letter:font-bold first-letter:leading-none first-letter:text-slate-900" : ""}`}>{section}</p>
              })}
            </div>

            <div className="mt-12 flex flex-wrap gap-2 border-y border-slate-200 py-6">
              {article.tags.map((tag) => (
                <span key={tag} className="border border-slate-200 bg-slate-50 px-3 py-1.5 font-sans text-xs text-slate-600">{tag}</span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4 border border-slate-200 bg-slate-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-serif text-sm font-bold text-white">{article.author.name.split(" ").map((n) => n[0]).join("").slice(0,2)}</div>
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.14em] text-slate-400">Rédigé par</p>
                <p className="font-sans text-sm font-semibold text-slate-900">{article.author.name} — <span className="font-normal text-slate-500">{article.author.role}</span></p>
              </div>
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div className="border border-slate-200 bg-white p-6">
                <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Dans cet article</p>
                <nav className="space-y-2">
                  {headings.map((h, i) => (
                    <a key={i} href={`#section-${i}`} className="block font-sans text-sm leading-6 text-slate-500 hover:text-slate-900"><span className="mr-2 font-mono text-xs text-slate-300">{String(i+1).padStart(2,"0")}</span>{h.text.replace("## ", "")}</a>
                  ))}
                </nav>
              </div>
              <div className="border border-slate-200 bg-white p-6">
                <p className="mb-3 flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400"><Clock size={12} /> Lecture</p>
                <p className="font-sans text-sm text-slate-600">{article.readTime} · {formatDate(article.date)}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related — grid 3 */}
      <section className="border-t border-slate-200 bg-[#f8fafc] px-6 sm:px-10 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-serif text-2xl text-slate-900 md:text-3xl">À lire également</h2>
            <Link href="/actualites" className="hidden font-sans text-sm font-medium text-slate-500 hover:text-slate-900 md:inline-flex">Tous les articles →</Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.slice(0,3).map((related) => (
              <Link key={related.slug} href={`/actualites/${related.slug}`} className="group flex h-full flex-col border border-slate-200 bg-white transition-colors hover:border-slate-300">
                <div className="h-[200px] overflow-hidden border-b border-slate-200">
                  <img src={related.image} alt={related.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-sans text-xs text-slate-400">{related.category} · {related.readTime}</p>
                  <h3 className="mt-2 font-serif text-lg leading-snug text-slate-900 line-clamp-2 group-hover:text-slate-700">{related.title}</h3>
                  <p className="mt-2 line-clamp-2 font-sans text-sm leading-6 text-slate-500">{related.excerpt}</p>
                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <p className="font-sans text-xs font-medium text-slate-900">{related.author.name}</p>
                    <p className="font-sans text-xs text-slate-400">{related.author.role}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

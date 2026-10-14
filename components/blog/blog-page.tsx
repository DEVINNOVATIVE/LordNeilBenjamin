'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { SiteHeader } from '@/components/shared/site-header'
import { getAllBlogEntries } from '@/lib/blog-data'

const entriesPerPage = 9

function getPageNumbers(current: number, total: number): (number | string)[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const pages: (number | string)[] = [1]
  if (current > 3) pages.push('…')
  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)
  for (let i = start; i <= end; i++) pages.push(i)
  if (current < total - 2) pages.push('…')
  pages.push(total)
  return pages
}

export function BlogPage() {
  const [page, setPage] = useState(1)
  const allEntries = getAllBlogEntries()
  const pageCount = Math.ceil(allEntries.length / entriesPerPage)
  const visibleEntries = allEntries.slice((page - 1) * entriesPerPage, page * entriesPerPage)
  const pageNumbers = getPageNumbers(page, pageCount)

  const scrollToTop = () => {
    if (typeof window !== 'undefined') document.getElementById('entries')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="relative isolate min-h-[420px] overflow-hidden bg-[#0c1a15] text-white">
        <SiteHeader active="blog" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,#0c1a15_0%,rgba(12,26,21,.88)_42%,rgba(12,26,21,.4)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_72%_35%,rgba(211,177,107,.18),transparent_48%)]" />
        <div className="mx-auto flex min-h-[420px] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pt-36">
          <p className="eyebrow text-[var(--gold)]">The blog</p>
          <h1 className="mt-6 max-w-5xl font-serif text-[clamp(3rem,7vw,6rem)] leading-[.85] tracking-[-.06em] text-white">
            Words in <em className="text-[var(--gold)]">motion.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-white/70">
            {allEntries.length} essays on enterprise, philanthropy, markets, sport, and the long view — from West Africa to Las Vegas, Belize to Lesotho.
          </p>
        </div>
      </header>

      <main id="entries" className="bg-[var(--paper)] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleEntries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/blog/${entry.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-[var(--gold-deep)]/40 hover:shadow-[0_20px_50px_rgba(18,33,28,.08)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--sand)]">
                  <img src={entry.image} alt={entry.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-[var(--ink)]/85 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.16em] text-white backdrop-blur-sm">{entry.category}</span>
                  <span className="absolute bottom-4 right-4 font-serif text-3xl text-white/90 drop-shadow-lg">{entry.number}</span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[10px] uppercase tracking-[.16em] text-[var(--muted-ink)]">{entry.date}</p>
                  <h3 className="mt-3 font-serif text-xl leading-[1.15] tracking-tight text-[var(--ink)] transition group-hover:text-[var(--gold-deep)]">{entry.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted-ink)] line-clamp-3">{entry.excerpt}</p>
                  <div className="mt-5 flex items-center gap-2 border-t border-black/5 pt-4 text-[11px] font-semibold uppercase tracking-[.16em] text-[var(--ink)] transition group-hover:text-[var(--gold-deep)]">
                    Read article
                    <span className="transition group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {pageCount > 1 && (
            <nav aria-label="Blog pagination" className="mt-16 flex items-center justify-center gap-2 border-t border-black/10 pt-8">
              <button
                type="button"
                onClick={() => { setPage((c) => Math.max(1, c - 1)); scrollToTop() }}
                disabled={page === 1}
                className="rounded-full border border-black/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-[.16em] text-[var(--ink)] transition hover:border-[var(--gold-deep)] disabled:cursor-not-allowed disabled:opacity-35"
              >
                ←
              </button>
              {pageNumbers.map((item, index) =>
                typeof item === 'number' ? (
                  <button
                    key={index}
                    type="button"
                    aria-current={page === item ? 'page' : undefined}
                    onClick={() => { setPage(item); scrollToTop() }}
                    className={`grid size-10 place-items-center rounded-full text-xs font-semibold transition ${page === item ? 'bg-[var(--ink)] text-white' : 'text-[var(--muted-ink)] hover:bg-black/5'}`}
                  >
                    {item}
                  </button>
                ) : (
                  <span key={index} className="px-1 text-xs text-[var(--muted-ink)]">{item}</span>
                )
              )}
              <button
                type="button"
                onClick={() => { setPage((c) => Math.min(pageCount, c + 1)); scrollToTop() }}
                disabled={page === pageCount}
                className="rounded-full border border-black/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-[.16em] text-[var(--ink)] transition hover:border-[var(--gold-deep)] disabled:cursor-not-allowed disabled:opacity-35"
              >
                →
              </button>
            </nav>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

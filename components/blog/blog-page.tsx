'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { PageHero } from '@/components/shared/page-hero'
import { blogEntries } from '@/lib/blog-data'

const entriesPerPage = 6

export function BlogPage() {
  const [page, setPage] = useState(1)
  const pageCount = Math.ceil(blogEntries.length / entriesPerPage)
  const visibleEntries = blogEntries.slice((page - 1) * entriesPerPage, page * entriesPerPage)

  return (
    <>
      <PageHero
        active="blog"
        eyebrow="The blog"
        title={<>Words in<br /><em className="text-[var(--gold)]">motion.</em></>}
        identity="Notes on enterprise · philanthropy · place"
        subtitle="The patient work of building a useful future."
        primaryAction={{ href: '#entries', label: 'Browse the blog ↓' }}
        secondaryAction={{ href: '/about', label: 'Read the story' }}
        sideLabel="Field notes"
        sideValue="Ideas · Action · Legacy"
      />
      <main id="entries" className="bg-[var(--paper)] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-5 border-b border-black/10 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-[var(--gold-deep)]">Stories and perspective</p>
              <h2 className="mt-4 font-serif text-5xl tracking-[-.05em] text-[var(--ink)] sm:text-6xl">All articles</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[var(--muted-ink)]">{blogEntries.length} essays on public service, enterprise, markets, and the long view.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleEntries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/blog/${entry.slug}`}
                className="group flex flex-col rounded-2xl border border-black/10 bg-white p-8 transition duration-300 hover:-translate-y-1.5 hover:border-[var(--gold-deep)]/40 hover:shadow-[0_20px_50px_rgba(18,33,28,.08)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl text-[var(--gold-deep)]">{entry.number}</span>
                  <span className="rounded-full bg-[var(--sand)] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.16em] text-[var(--ink)]">{entry.category}</span>
                </div>

                <div className="mt-6 flex-1">
                  <p className="text-[10px] uppercase tracking-[.16em] text-[var(--muted-ink)]">{entry.date}</p>
                  <h3 className="mt-3 font-serif text-2xl leading-[1.1] tracking-tight text-[var(--ink)] transition group-hover:text-[var(--gold-deep)]">{entry.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted-ink)]">{entry.excerpt}</p>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-black/5 pt-5 text-[11px] font-semibold uppercase tracking-[.16em] text-[var(--ink)] transition group-hover:text-[var(--gold-deep)]">
                  Read article
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>

          <nav aria-label="Blog pagination" className="mt-16 flex items-center justify-between border-t border-black/10 pt-8">
            <button
              type="button"
              onClick={() => { setPage((c) => Math.max(1, c - 1)); if (typeof window !== 'undefined') document.getElementById('entries')?.scrollIntoView({ behavior: 'smooth' }) }}
              disabled={page === 1}
              className="rounded-full border border-black/15 px-6 py-3 text-xs font-semibold uppercase tracking-[.16em] text-[var(--ink)] transition hover:border-[var(--gold-deep)] disabled:cursor-not-allowed disabled:opacity-35"
            >
              ← Previous
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  aria-label={`Go to page ${pageNumber}`}
                  aria-current={page === pageNumber ? 'page' : undefined}
                  onClick={() => { setPage(pageNumber); if (typeof window !== 'undefined') document.getElementById('entries')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className={`grid size-11 place-items-center rounded-full text-xs font-semibold transition ${page === pageNumber ? 'bg-[var(--ink)] text-white' : 'text-[var(--muted-ink)] hover:bg-black/5'}`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => { setPage((c) => Math.min(pageCount, c + 1)); if (typeof window !== 'undefined') document.getElementById('entries')?.scrollIntoView({ behavior: 'smooth' }) }}
              disabled={page === pageCount}
              className="rounded-full border border-black/15 px-6 py-3 text-xs font-semibold uppercase tracking-[.16em] text-[var(--ink)] transition hover:border-[var(--gold-deep)] disabled:cursor-not-allowed disabled:opacity-35"
            >
              Next →
            </button>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}

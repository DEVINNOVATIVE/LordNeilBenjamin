'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { PageHero } from '@/components/shared/page-hero'
import { blogEntries } from '@/lib/blog-data'

const entriesPerPage = 4

export function BlogPage() {
  const [page, setPage] = useState(1)
  const pageCount = Math.ceil(blogEntries.length / entriesPerPage)
  const visibleEntries = blogEntries.slice((page - 1) * entriesPerPage, page * entriesPerPage)

  return (
    <>
      <PageHero
        active="journal"
        eyebrow="The journal"
        title={<>Thoughts in<br /><em className="text-[var(--gold)]">motion.</em></>}
        identity="Notes on enterprise · philanthropy · place"
        subtitle="The patient work of building a useful future."
        primaryAction={{ href: '#entries', label: 'Browse the journal ↓' }}
        secondaryAction={{ href: '/about', label: 'Read the story' }}
        sideLabel="Field notes"
        sideValue="Ideas · Action · Legacy"
      />
      <main id="entries" className="bg-[var(--paper)] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-5 border-b border-black/10 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-[var(--gold-deep)]">Stories and perspective</p>
              <h2 className="mt-4 font-serif text-5xl tracking-[-.05em] text-[var(--ink)] sm:text-6xl">The latest journal</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[var(--muted-ink)]">Ten essays on public service, enterprise, markets, and the long view.</p>
          </div>
          <div className="space-y-0">
            {visibleEntries.map((entry) => (
              <article key={entry.slug} className="grid gap-8 border-t border-black/15 py-10 md:grid-cols-[.12fr_.9fr_1.2fr] md:items-center md:gap-10 md:py-14">
                <div>
                  <p className="font-serif text-4xl text-[var(--gold-deep)]">{entry.number}</p>
                  <p className="mt-3 text-[10px] uppercase tracking-[.18em] text-[var(--muted-ink)]">{entry.category}</p>
                </div>
                <Link href={`/blog/${entry.slug}`} className="group block overflow-hidden rounded-2xl bg-[var(--ink)]">
                  <img src={entry.image} alt="" className="aspect-[1.5] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-85" />
                </Link>
                <div>
                  <p className="text-xs uppercase tracking-[.16em] text-[var(--muted-ink)]">{entry.date}</p>
                  <h3 className="mt-4 max-w-xl font-serif text-4xl leading-[.98] tracking-tight text-[var(--ink)] sm:text-5xl">{entry.title}</h3>
                  <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted-ink)]">{entry.excerpt}</p>
                  <Link href={`/blog/${entry.slug}`} className="mt-7 inline-flex rounded-full border border-[var(--ink)] px-5 py-3 text-xs font-semibold uppercase tracking-[.16em] text-[var(--ink)] transition hover:-translate-y-1 hover:bg-[var(--ink)] hover:text-white">Read article ↗</Link>
                </div>
              </article>
            ))}
          </div>
          <nav aria-label="Journal pagination" className="mt-10 flex items-center justify-between border-t border-black/10 pt-7">
            <button type="button" onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page === 1} className="rounded-full border border-black/15 px-5 py-3 text-xs font-semibold uppercase tracking-[.16em] text-[var(--ink)] transition hover:border-[var(--gold-deep)] disabled:cursor-not-allowed disabled:opacity-35">← Previous</button>
            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => <button key={pageNumber} type="button" aria-label={`Go to page ${pageNumber}`} aria-current={page === pageNumber ? 'page' : undefined} onClick={() => setPage(pageNumber)} className={`grid size-10 place-items-center rounded-full text-xs font-semibold transition ${page === pageNumber ? 'bg-[var(--ink)] text-white' : 'text-[var(--muted-ink)] hover:bg-black/5'}`}>{pageNumber}</button>)}
            </div>
            <button type="button" onClick={() => setPage((current) => Math.min(pageCount, current + 1))} disabled={page === pageCount} className="rounded-full border border-black/15 px-5 py-3 text-xs font-semibold uppercase tracking-[.16em] text-[var(--ink)] transition hover:border-[var(--gold-deep)] disabled:cursor-not-allowed disabled:opacity-35">Next →</button>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}

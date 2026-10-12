import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { PageHero } from '@/components/shared/page-hero'
import type { BlogEntry } from '@/lib/blog-data'

export function BlogDetailPage({ entry }: { entry: BlogEntry }) {
  return (
    <>
      <PageHero
        active="journal"
        eyebrow={`${entry.category} · ${entry.date}`}
        title={<>{entry.title}</>}
        identity="The journal"
        subtitle={entry.excerpt}
        primaryAction={{ href: '#article', label: 'Read the article ↓' }}
        secondaryAction={{ href: '/blog', label: 'Back to journal' }}
        slides={[entry.image, '/assets/slider1.jpg', '/assets/slider3.jpg']}
        sideLabel="Journal entry"
        sideValue={`${entry.number} · Long view`}
        locations="Perspective · Practice · Progress"
      />
      <main id="article" className="bg-[var(--paper)] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <article className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-7">
            <p className="eyebrow text-[var(--gold-deep)]">{entry.category}</p>
            <p className="text-xs uppercase tracking-[.16em] text-[var(--muted-ink)]">{entry.date}</p>
          </div>
          <div className="mt-12 space-y-7 text-[17px] leading-9 text-[var(--muted-ink)]">
            {entry.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-black/10 pt-8">
            <Link href="/blog" className="rounded-full border border-[var(--ink)] px-6 py-3 text-xs font-semibold uppercase tracking-[.16em] text-[var(--ink)] transition hover:bg-[var(--ink)] hover:text-white">← Back to journal</Link>
            <p className="text-xs uppercase tracking-[.16em] text-[var(--muted-ink)]">Lord Neil Benjamin Gibson · Journal</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

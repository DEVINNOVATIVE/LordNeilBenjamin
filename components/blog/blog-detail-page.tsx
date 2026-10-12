import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { PageHero } from '@/components/shared/page-hero'
import { blogEntries, getBlogEntry, type BlogEntry } from '@/lib/blog-data'

export function BlogDetailPage({ entry }: { entry: BlogEntry }) {
  const currentIndex = blogEntries.findIndex((e) => e.slug === entry.slug)
  const prevEntry = currentIndex > 0 ? blogEntries[currentIndex - 1] : null
  const nextEntry = currentIndex < blogEntries.length - 1 ? blogEntries[currentIndex + 1] : null

  return (
    <>
      <PageHero
        active="blog"
        eyebrow={`${entry.category} · ${entry.date}`}
        title={<>{entry.title}</>}
        identity="The blog"
        subtitle={entry.excerpt}
        primaryAction={{ href: '#article', label: 'Read the article ↓' }}
        secondaryAction={{ href: '/blog', label: 'Back to blog' }}
        sideLabel="Blog entry"
        sideValue={`${entry.number} · Long view`}
        locations="Perspective · Practice · Progress"
      />
      <main id="article" className="bg-[var(--paper)] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <article className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-7">
            <span className="rounded-full bg-[var(--sand)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[.16em] text-[var(--ink)]">{entry.category}</span>
            <p className="text-xs uppercase tracking-[.16em] text-[var(--muted-ink)]">{entry.date}</p>
          </div>

          <div className="mt-3 select-none">
            <span className="font-serif text-[8rem] leading-none text-[var(--gold-deep)]/15">{entry.number}</span>
          </div>

          <div className="-mt-8 space-y-8 text-[18px] leading-9 text-[var(--muted-ink)]">
            {entry.paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? 'font-serif text-[22px] leading-9 text-[var(--ink)]' : ''}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 border-t border-black/10 pt-8">
            <p className="eyebrow text-[var(--gold-deep)]">Author</p>
            <p className="mt-3 font-serif text-2xl text-[var(--ink)]">Lord Neil Benjamin Gibson</p>
          </div>

          <div className="mt-12 grid gap-4 border-t border-black/10 pt-8 sm:grid-cols-2">
            {prevEntry ? (
              <Link href={`/blog/${prevEntry.slug}`} className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[var(--gold-deep)]/40 hover:shadow-lg">
                <p className="text-[10px] uppercase tracking-[.16em] text-[var(--muted-ink)]">← Previous</p>
                <p className="mt-2 font-serif text-lg leading-tight text-[var(--ink)] transition group-hover:text-[var(--gold-deep)]">{prevEntry.title}</p>
              </Link>
            ) : <div className="hidden sm:block" />}
            {nextEntry ? (
              <Link href={`/blog/${nextEntry.slug}`} className="group rounded-2xl border border-black/10 bg-white p-6 text-right transition hover:-translate-y-1 hover:border-[var(--gold-deep)]/40 hover:shadow-lg">
                <p className="text-[10px] uppercase tracking-[.16em] text-[var(--muted-ink)]">Next →</p>
                <p className="mt-2 font-serif text-lg leading-tight text-[var(--ink)] transition group-hover:text-[var(--gold-deep)]">{nextEntry.title}</p>
              </Link>
            ) : <div className="hidden sm:block" />}
          </div>

          <div className="mt-10 text-center">
            <Link href="/blog" className="inline-flex rounded-full bg-[var(--ink)] px-7 py-3.5 text-xs font-semibold uppercase tracking-[.16em] text-white transition hover:-translate-y-1 hover:shadow-lg">Back to all articles</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export { getBlogEntry }

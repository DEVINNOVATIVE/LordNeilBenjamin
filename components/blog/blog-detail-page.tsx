import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { MotionReveal, MotionTag } from '@/components/shared/motion-reveal'
import { PageHero } from '@/components/shared/page-hero'
import { blogPlaceholderImage, getAllBlogEntries, getBlogEntry, type BlogEntry } from '@/lib/blog-data'

export function BlogDetailPage({ entry }: { entry: BlogEntry }) {
  const allEntries = getAllBlogEntries()
  const currentIndex = allEntries.findIndex((e) => e.slug === entry.slug)
  const prevEntry = currentIndex > 0 ? allEntries[currentIndex - 1] : null
  const nextEntry = currentIndex < allEntries.length - 1 ? allEntries[currentIndex + 1] : null
  const image = entry.image ?? blogPlaceholderImage

  return (
    <>
      <PageHero
        active="blog"
        eyebrow={`${entry.category} · ${entry.date}`}
        title={<>{entry.title}</>}
        identity={`Dispatch ${entry.number} · The journal`}
        subtitle={entry.excerpt}
        primaryAction={{ href: '#article', label: 'Read the article ↓' }}
        secondaryAction={{ href: '/blog', label: 'Back to journal' }}
        slides={[image, '/assets/journal-blockchain-team.jpg', '/assets/about-partnership.png']}
        sideLabel="The journal"
        sideValue="Context · Perspective · Motion"
        locations="The Bahamas · West Africa · Beyond"
      />

      <main id="article" className="bg-[var(--paper)] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <MotionReveal className="mx-auto max-w-3xl">
          {image && (
            <div className="overflow-hidden rounded-2xl">
              <img
                src={image}
                alt={entry.title}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          )}

          <div className="mt-10 space-y-8 text-[18px] leading-9 text-[var(--muted-ink)]">
            {entry.paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? 'font-serif text-[22px] leading-9 text-[var(--ink)]' : ''}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-14 border-t border-black/10 pt-8">
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
        </MotionReveal>
      </main>
      <Footer />
    </>
  )
}

export { getBlogEntry }

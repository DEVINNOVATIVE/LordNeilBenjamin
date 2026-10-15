import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { SiteHeader } from '@/components/shared/site-header'
import { MotionReveal, MotionTag } from '@/components/shared/motion-reveal'
import { blogPlaceholderImage, getAllBlogEntries, getBlogEntry, type BlogEntry } from '@/lib/blog-data'

export function BlogDetailPage({ entry }: { entry: BlogEntry }) {
  const allEntries = getAllBlogEntries()
  const currentIndex = allEntries.findIndex((e) => e.slug === entry.slug)
  const prevEntry = currentIndex > 0 ? allEntries[currentIndex - 1] : null
  const nextEntry = currentIndex < allEntries.length - 1 ? allEntries[currentIndex + 1] : null
  const image = entry.image ?? blogPlaceholderImage

  return (
    <>
      <header className="relative isolate overflow-hidden bg-[#0c1a15] text-white">
        <SiteHeader active="blog" />
        {image && (
          <div className="absolute inset-0 -z-10">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover opacity-30"
            />
          </div>
        )}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#0c1a15_30%,rgba(12,26,21,.95)_85%)]" />
        <div className="mx-auto max-w-4xl px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
          <Link href="/blog" className="text-[11px] font-semibold uppercase tracking-[.18em] text-[var(--gold)] transition hover:text-white">← Back to blog</Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MotionTag className="rounded-full bg-[var(--gold)] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em] text-[var(--ink)]">{entry.category}</MotionTag>
            <span className="text-[11px] uppercase tracking-[.16em] text-white/50">{entry.date}</span>
            <span className="font-serif text-2xl text-white/40">{entry.number}</span>
          </div>
          <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-.04em] text-white">
            {entry.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">{entry.excerpt}</p>
        </div>
      </header>

      <main className="bg-[var(--paper)] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
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

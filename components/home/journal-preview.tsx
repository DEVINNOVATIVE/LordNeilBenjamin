import Link from 'next/link'

const posts = [
  {
    num: '01',
    title: 'The quiet power of a long view',
    date: 'May 2026',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bahamas-jjLXXo7pomxRIWXqqWOewqlMBDZih2.jpg',
    excerpt: 'The most meaningful work rarely announces itself. It gathers strength through patience and attention.',
  },
  {
    num: '02',
    title: 'Building bridges across borders',
    date: 'April 2026',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-20191021-wa0015%20%281%29-7vj5mSHble7tL9auwwio5hJ1swTZZy.jpg',
    excerpt: 'When people and places connect with intention, geography stops being a limit.',
  },
  {
    num: '03',
    title: 'What does progress really mean?',
    date: 'Feb 2026',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lord-Neil-Gibson-and-Erwin-Contreras%20%281%29-5aV1UIGgH3a1YEvlBwRqe9jWHIk7zu.png',
    excerpt: 'Growth matters, but the better question is what that growth makes possible for those who follow.',
  },
]

export function JournalPreview() {
  return (
    <section className="bg-[var(--paper)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Header row */}
        <div className="flex flex-col gap-4 border-b border-black/8 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-[var(--gold-deep)]">From the journal</p>
            <h2 className="mt-4 font-serif text-5xl leading-[.92] tracking-[-.045em] text-[var(--ink)] sm:text-6xl">
              Notes for the road ahead.
            </h2>
          </div>
          <Link
            href="/blog"
            className="shrink-0 rounded-full border border-black/12 px-5 py-2.5 text-[11px] uppercase tracking-[.18em] text-[var(--ink)] transition hover:-translate-y-1 hover:bg-[var(--ink)] hover:text-white"
          >
            View all ↗
          </Link>
        </div>

        {/* Article list — horizontal editorial rows on desktop */}
        <div className="mt-8 space-y-0">
          {posts.map((post, i) => (
            <Link
              key={post.num}
              href="/blog"
              className="group flex flex-col gap-5 border-b border-black/8 py-8 transition hover:bg-[var(--sand)]/40 sm:flex-row sm:items-center sm:gap-8 sm:px-4"
            >
              {/* Image */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-square sm:w-28 sm:shrink-0 md:w-36">
                <img
                  src={post.image}
                  alt=""
                  className="h-full w-full object-cover grayscale-[.1] transition duration-700 group-hover:scale-105"
                />
              </div>
              {/* Text */}
              <div className="flex-1">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[.2em] text-[var(--gold-deep)]">
                  <span>{post.num}</span>
                  <span className="h-px w-6 bg-[var(--gold-deep)]" />
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-3 max-w-md font-serif text-2xl leading-snug text-[var(--ink)] transition-colors group-hover:text-[var(--gold-deep)] sm:text-3xl">
                  {post.title}
                </h3>
                <p className="mt-2 max-w-sm text-[14px] leading-6 text-[var(--muted-ink)]">{post.excerpt}</p>
              </div>
              <span className="hidden shrink-0 text-xl text-[var(--gold-deep)] transition-transform group-hover:translate-x-1 sm:block">↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

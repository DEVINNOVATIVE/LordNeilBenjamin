import Link from 'next/link'

const storyImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/neil-uae-central-C5ilzOgM0oeviCf2oVqkMD8DIM72GQ.jpeg'

export function StorySection() {
  return (
    <section id="story" className="bg-[var(--paper)] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">

        {/* Image column */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(18,33,28,.16)]">
            <img
              src={storyImage}
              alt="Lord Neil Benjamin in Nassau"
              className="aspect-[3/4] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--ink)]/75 to-transparent p-6">
              <p className="text-[10px] uppercase tracking-[.22em] text-[var(--gold)]">Nassau / London / Accra</p>
            </div>
          </div>
          {/* Decorative accent block */}
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-[var(--gold)] opacity-80" style={{ zIndex: -1 }} />
          <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full border-2 border-[var(--gold)]/40" />
        </div>

        {/* Text column */}
        <div>
          <p className="eyebrow text-[var(--gold-deep)]">The story</p>
          <h2 className="mt-4 max-w-xl font-serif text-5xl leading-[.92] tracking-[-.045em] text-[var(--ink)] sm:text-6xl">
            A life measured by what it makes possible.
          </h2>
          <div className="mt-6 h-px w-16 bg-[var(--gold)]" />
          <p className="mt-8 max-w-lg text-[15px] leading-8 text-[var(--muted-ink)]">
            From the islands of The Bahamas to the wider world, Lord Neil Benjamin has spent his career connecting ambition with impact. His work spans enterprise, investment, and philanthropy — always with an eye toward what can be built for the next generation.
          </p>
          <p className="mt-5 max-w-lg text-[15px] leading-8 text-[var(--muted-ink)]">
            The result is a life defined not by a single title, but by a belief that meaningful progress happens when bold ideas meet thoughtful action.
          </p>
          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-7 py-3.5 text-xs font-semibold uppercase tracking-[.18em] text-white transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(18,33,28,.25)]"
          >
            Read the full story <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

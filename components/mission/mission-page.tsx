import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { MotionReveal, MotionTag } from '@/components/shared/motion-reveal'
import { PageHero } from '@/components/shared/page-hero'

const principles = [
  ['01', 'Opportunity', 'Turning resources into access, dignity, and lasting possibility.'],
  ['02', 'Connection', 'Building bridges between The Bahamas, West Africa, and the wider world.'],
  ['03', 'Legacy', 'Creating a blueprint for progress that outlives the moment.'],
]

export function MissionPage() {
  return (
    <>
      <PageHero
        active="mission"
        eyebrow="The wider view"
        title={<>Ideas travel.<br /><em className="text-[var(--gold)]">Impact stays.</em></>}
        identity="Enterprise with people at the centre"
        subtitle="The work is grounded in connection — people, places, and the possibilities between them."
        primaryAction={{ href: '#mission', label: 'Discover the approach ↓' }}
        secondaryAction={{ href: '/work', label: 'See the work' }}
        slides={['/assets/east-african-countries-2.png', '/assets/bahamas.jpg', '/assets/about-team.jpg']}
        sideLabel="The wider view"
        sideValue="People · Place · Possibility"
        locations="The Bahamas · West Africa · Beyond"
      />

      <main className="bg-[var(--sand)]">
        <section id="mission" className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-12 lg:py-36">
          <MotionReveal>
            <MotionTag className="eyebrow text-[var(--gold-deep)]">A connected mission</MotionTag>
            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[.9] tracking-[-.05em] text-[var(--ink)] sm:text-7xl">Progress becomes meaningful when it is shared.</h2>
            <div className="mt-8 h-px w-16 bg-[var(--gold)]" />
            <p className="mt-8 max-w-lg text-[15px] leading-8 text-[var(--muted-ink)]">From The Bahamas across West Africa and beyond, the work brings enterprise and philanthropy into the same conversation — creating practical paths toward a more connected future.</p>
          </MotionReveal>
          <MotionReveal delay={0.12} className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(18,33,28,.14)]">
            <img src="/assets/east-african-countries-2.png" alt="Map showing West African markets" className="h-full min-h-[280px] w-full object-cover" />
            <p className="border-t border-black/10 px-6 py-4 text-[10px] uppercase tracking-[.2em] text-[var(--muted-ink)]">West Africa · In focus</p>
          </MotionReveal>
        </section>

        <section className="bg-[var(--ink)] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
          <MotionReveal className="mx-auto max-w-7xl">
            <MotionTag className="eyebrow text-[var(--gold)]">Where it begins</MotionTag>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <h2 className="max-w-2xl font-serif text-5xl leading-[.9] tracking-[-.05em] sm:text-7xl">From the islands to the wider world.</h2>
              <div className="space-y-5 text-[15px] leading-8 text-white/65">
                <p>The Bahamas is more than a place of origin. It is a reminder that development should respect its setting, strengthen local opportunity, and make room for a better future.</p>
                <p>That perspective travels through partnerships in West Africa, international investment, and community-focused projects.</p>
              </div>
            </div>
          </MotionReveal>
        </section>

        <section className="bg-[var(--paper)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <MotionReveal className="mx-auto max-w-7xl">
            <MotionTag className="eyebrow text-[var(--gold-deep)]">Three ways to leave things better</MotionTag>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {principles.map(([number, title, copy]) => (
                <article key={number} className="border-t-2 border-[var(--gold)] bg-white p-8">
                  <span className="text-[11px] font-semibold tracking-[.22em] text-[var(--gold-deep)]">{number}</span>
                  <h3 className="mt-16 font-serif text-4xl text-[var(--ink)]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted-ink)]">{copy}</p>
                </article>
              ))}
            </div>
          </MotionReveal>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-32">
          <MotionReveal className="overflow-hidden rounded-[2rem]">
            <img src="/assets/about-partnership.png" alt="Lord Neil Benjamin with international partners" className="h-full min-h-[320px] w-full object-cover" />
          </MotionReveal>
          <MotionReveal delay={0.1} className="self-center">
            <MotionTag className="eyebrow text-[var(--gold-deep)]">A practical promise</MotionTag>
            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[.9] tracking-[-.05em] text-[var(--ink)] sm:text-6xl">Build bridges. Share opportunity. Leave a legacy.</h2>
            <p className="mt-7 max-w-xl text-[15px] leading-8 text-[var(--muted-ink)]">Mission is where enterprise becomes service: listening carefully, working across borders, and creating useful outcomes for the people connected to the work.</p>
          </MotionReveal>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-36">
          <MotionReveal>
            <MotionTag className="eyebrow text-[var(--gold-deep)]">Built for what’s next</MotionTag>
            <h2 className="mt-5 font-serif text-5xl leading-[.9] tracking-[-.05em] text-[var(--ink)] sm:text-7xl">A life measured by what it makes possible.</h2>
            <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-8 text-[var(--muted-ink)]">The long view is a commitment to thoughtful action: supporting communities, strengthening relationships, and creating a legacy that can be carried forward.</p>
            <Link href="/about" className="mt-9 inline-flex rounded-full bg-[var(--ink)] px-7 py-3.5 text-xs font-semibold uppercase tracking-[.18em] text-white transition hover:-translate-y-1">Read the full story ↗</Link>
          </MotionReveal>
        </section>
      </main>
      <Footer />
    </>
  )
}

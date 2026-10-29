import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { MotionReveal, MotionTag } from '@/components/shared/motion-reveal'
import { PageHero } from '@/components/shared/page-hero'

const principles = [
  ['01', 'Opportunity', 'Turning resources into access, dignity, and lasting possibility.'],
  ['02', 'Connection', 'Building bridges between The Bahamas, West Africa, and the wider world.'],
  ['03', 'Legacy', 'Creating a blueprint for progress that outlives the moment.'],
]

const commitments = [
  ['Listen locally', 'Every meaningful partnership begins with attention to the people who know a place best.'],
  ['Share access', 'Opportunity should open doors for communities, creators, and the next generation of leaders.'],
  ['Stay accountable', 'Long-term work requires clear commitments, honest learning, and progress that can be seen.'],
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
        <section id="mission" className="relative overflow-hidden bg-[#dfe9e1] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-white/35" />
          <MotionReveal className="relative mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 border-b border-[var(--ink)]/12 pb-8 sm:pb-10 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <MotionTag className="eyebrow text-[var(--gold-deep)]">A connected mission</MotionTag>
                <p className="mt-4 text-[10px] uppercase tracking-[.22em] text-[var(--muted-ink)]">People · Place · Possibility</p>
              </div>
              <p className="max-w-sm text-sm leading-7 text-[var(--muted-ink)] lg:mb-1">
                Enterprise and philanthropy belong in the same conversation when progress is meant to last.
              </p>
            </div>

            <div className="mt-10 grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-20">
              <div>
                <h2 className="max-w-2xl font-serif text-5xl leading-[.88] tracking-[-.055em] text-[var(--ink)] sm:text-7xl">
                  Progress becomes
                  <br />
                  <em className="font-normal text-[var(--gold-deep)]">meaningful</em> when it is shared.
                </h2>
                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-16 bg-[var(--gold)]" />
                  <span className="text-[10px] uppercase tracking-[.22em] text-[var(--muted-ink)]">A mission in motion</span>
                </div>
                <p className="mt-8 max-w-lg text-[15px] leading-8 text-[var(--muted-ink)]">
                  From The Bahamas across West Africa and beyond, the work brings enterprise and philanthropy into the same conversation — creating practical paths toward a more connected future.
                </p>
                <div className="mt-10 grid grid-cols-3 border-t border-[var(--ink)]/12 pt-5">
                  <div>
                    <p className="font-serif text-3xl text-[var(--ink)]">03</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[.16em] text-[var(--muted-ink)]">Regions connected</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-[var(--ink)]">01</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[.16em] text-[var(--muted-ink)]">Shared direction</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-[var(--ink)]">∞</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[.16em] text-[var(--muted-ink)]">Long view</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] border border-[var(--gold)]/35 sm:-inset-6" />
                <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--ink)]/10 bg-white p-2 shadow-[0_24px_70px_rgba(18,33,28,.16)] sm:p-3">
                  <div className="relative overflow-hidden rounded-[1rem] bg-[var(--sand)]">
                    <img
                      src="/assets/east-african-countries-2.png"
                      alt="Map showing West African markets"
                      className="aspect-[1.2] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--ink)]/20 via-transparent to-[var(--gold)]/20 mix-blend-multiply" />
                    <div className="absolute left-[22%] top-[39%] flex items-center gap-2">
                      <span className="relative flex size-3">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--gold)] opacity-75" />
                        <span className="relative inline-flex size-3 rounded-full border-2 border-white bg-[var(--gold)]" />
                      </span>
                      <span className="rounded-full bg-[var(--ink)]/85 px-3 py-1 text-[9px] font-semibold uppercase tracking-[.18em] text-white">West Africa</span>
                    </div>
                    <div className="absolute right-4 top-4 rounded-full border border-white/60 bg-white/80 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.18em] text-[var(--ink)] backdrop-blur-md">
                      In focus
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 px-2 pb-1 pt-4 sm:flex-row sm:items-center sm:justify-between sm:px-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-[var(--ink)]">The wider view</p>
                    <p className="text-[10px] uppercase tracking-[.18em] text-[var(--muted-ink)]">Connected by purpose ↗</p>
                  </div>
                </div>
              </div>
            </div>
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

        <section className="bg-[var(--sand)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <MotionReveal className="mx-auto max-w-7xl">
            <MotionTag className="eyebrow text-[var(--gold-deep)]">Putting values to work</MotionTag>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-end">
              <h2 className="max-w-3xl font-serif text-5xl leading-[.9] tracking-[-.05em] text-[var(--ink)] sm:text-7xl">A mission is measured in the choices made every day.</h2>
              <p className="max-w-md text-[15px] leading-8 text-[var(--muted-ink)]">
                The wider vision becomes practical through small, consistent decisions: who is invited in, what is built to last, and how success is shared.
              </p>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {commitments.map(([title, copy]) => (
                <article key={title} className="border-l-2 border-[var(--gold)] bg-white/70 p-7">
                  <h3 className="font-serif text-3xl text-[var(--ink)]">{title}</h3>
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

import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { MotionReveal, MotionTag } from '@/components/shared/motion-reveal'
import { PageHero } from '@/components/shared/page-hero'

const ventures = [
  {
    number: '01',
    eyebrow: 'Sport · Cyprus',
    title: 'A new chapter in football.',
    copy: 'The purchase of a Cyprus football team brings together leadership, community, and a long-term vision for the beautiful game.',
    image: '/assets/crypus_football/c1.jpeg',
  },
  {
    number: '02',
    eyebrow: 'Enterprise · Hong Kong',
    title: 'A presence in the East.',
    copy: 'The Hong Kong office extends the journey across borders, creating a new base for relationships, opportunity, and global collaboration.',
    image: '/assets/hong_kong/hk3.jpeg',
  },
  {
    number: '03',
    eyebrow: 'Technology · Dubai',
    title: 'Ideas with global reach.',
    copy: 'From the Future Blockchain Summit to emerging financial infrastructure, technology creates new corridors for connection and growth.',
    image: '/assets/journal-blockchain-team.jpg',
  },
]

export function WorkPage() {
  return (
    <>
      <PageHero
        active="work"
        eyebrow="The portfolio"
        title={<>Bold ideas.<br /><em className="text-[var(--gold)]">Meaningful motion.</em></>}
        identity="Enterprise, sport, and international collaboration"
        subtitle="A closer look at the ventures and relationships turning ambition into places, platforms, and possibility."
        primaryAction={{ href: '#ventures', label: 'Explore the portfolio ↓' }}
        secondaryAction={{ href: '/mission', label: 'See the wider mission' }}
        slides={['/assets/crypus_football/c1.jpeg', '/assets/hong_kong/hk3.jpeg', '/assets/journal-blockchain-team.jpg']}
        sideLabel="The approach"
        sideValue="Curious · Connected · Long-term"
        locations="Cyprus · Hong Kong · Dubai"
      />

      <main className="bg-[var(--paper)]">
        <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <MotionReveal>
            <MotionTag className="eyebrow text-[var(--gold-deep)]">The journey</MotionTag>
            <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <h2 className="max-w-3xl font-serif text-5xl leading-[.9] tracking-[-.05em] text-[var(--ink)] sm:text-7xl">
                Every address marks another intentional step.
              </h2>
              <p className="max-w-md text-base leading-8 text-[var(--muted-ink)]">
                The work moves across sectors and geographies, but the direction remains consistent: connect people, create opportunity, and build for the long view.
              </p>
            </div>
          </MotionReveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {ventures.map((venture) => (
              <MotionReveal key={venture.number} delay={Number(venture.number) * 0.08} className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={venture.image} alt={venture.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <p className="eyebrow text-[var(--gold-deep)]">{venture.eyebrow}</p>
                    <span className="font-serif text-2xl text-[var(--gold-deep)]">{venture.number}</span>
                  </div>
                  <h3 className="mt-5 font-serif text-3xl leading-tight text-[var(--ink)]">{venture.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted-ink)]">{venture.copy}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </section>

        <section className="border-y border-black/10 bg-[var(--sand)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <MotionReveal className="mx-auto max-w-7xl">
            <MotionTag className="eyebrow text-[var(--gold-deep)]">How the work connects</MotionTag>
            <div className="mt-8 grid gap-10 md:grid-cols-3">
              {[
                ['People', 'Relationships are the starting point for every lasting opportunity.'],
                ['Places', 'Local knowledge turns international ambition into practical progress.'],
                ['Possibility', 'The best work leaves room for others to grow, contribute, and lead.'],
              ].map(([title, copy]) => (
                <div key={title} className="border-l-2 border-[var(--gold)] pl-6">
                  <h3 className="font-serif text-3xl text-[var(--ink)]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted-ink)]">{copy}</p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </section>

        <section className="bg-[var(--ink)] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
          <MotionReveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <MotionTag className="eyebrow text-[var(--gold)]">The long view</MotionTag>
              <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[.9] tracking-[-.05em] sm:text-7xl">A portfolio is a promise to keep moving.</h2>
            </div>
            <div className="space-y-5 text-[15px] leading-8 text-white/65">
              <p>Enterprise is not only about the transaction. It is about the people, places, and capabilities that become possible when relationships are built with care.</p>
              <p>That same principle connects sport, technology, international offices, and investment: each venture is a platform for shared momentum.</p>
              <Link href="/mission" className="inline-flex rounded-full bg-[var(--gold)] px-7 py-3.5 text-xs font-semibold uppercase tracking-[.18em] text-[var(--ink)] transition hover:bg-white">Explore mission ↗</Link>
            </div>
          </MotionReveal>
        </section>
      </main>
      <Footer />
    </>
  )
}

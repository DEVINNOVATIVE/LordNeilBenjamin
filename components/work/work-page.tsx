'use client'

import { useState } from 'react'
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
    detail: 'The club is a platform for building local relationships, supporting the surrounding community, and creating a stronger future for the sport beyond match day.',
    focus: 'Club leadership · Community',
    outlook: 'A team with a lasting local role',
    image: '/assets/crypus_football/c1.jpeg',
    gallery: ['/assets/crypus_football/c2.jpeg', '/assets/crypus_football/c4.jpeg', '/assets/crypus_football/c5.jpeg'],
  },
  {
    number: '02',
    eyebrow: 'Enterprise · Hong Kong',
    title: 'A presence in the East.',
    copy: 'The Hong Kong office extends the journey across borders, creating a new base for relationships, opportunity, and global collaboration.',
    detail: 'A local base makes international work more personal: it creates room for in-person partnerships, regional knowledge, and new conversations across Asia.',
    focus: 'Regional office · Partnerships',
    outlook: 'A bridge for global collaboration',
    image: '/assets/hong_kong/hk3.jpeg',
    gallery: ['/assets/hong_kong/hk1.jpeg', '/assets/hong_kong/hk2.jpeg', '/assets/hong_kong/hk4.jpeg'],
  },
  {
    number: '03',
    eyebrow: 'Technology · Dubai',
    title: 'Ideas with global reach.',
    copy: 'From the Future Blockchain Summit to emerging financial infrastructure, technology creates new corridors for connection and growth.',
    detail: 'Time spent in Dubai connects emerging technology with practical opportunities in finance, property, and digital infrastructure across rapidly changing markets.',
    focus: 'Blockchain · Digital infrastructure',
    outlook: 'Technology that opens new corridors',
    image: '/assets/journal-blockchain-team.jpg',
    gallery: ['/assets/journal-blockchain-portrait.jpeg', '/assets/blog-blockchain.jpeg', '/assets/journal-blockchain-belize.png'],
  },
]

const waysOfWorking = [
  ['01', 'Start with context', 'Listen to the people and understand the local conditions before deciding what should be built.'],
  ['02', 'Connect the right voices', 'Bring operators, partners, investors, and communities into the same conversation early.'],
  ['03', 'Build for movement', 'Create platforms that can adapt as markets, technology, and people change around them.'],
  ['04', 'Measure the long view', 'Judge progress by the opportunity and capability a venture leaves behind, not only its first result.'],
]

function VentureCard({ venture, index }: { venture: (typeof ventures)[number]; index: number }) {
  const images = [venture.image, ...venture.gallery]
  const [activeImage, setActiveImage] = useState(venture.image)

  return (
    <MotionReveal delay={index * 0.08} className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-[0_14px_40px_rgba(18,33,28,.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(18,33,28,.2)]">
      <div className="overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden">
          <img src={activeImage} alt={venture.title} className="h-full w-full object-cover transition duration-500" />
        </div>
        <div className="flex gap-2 px-4 pt-4">
          {images.map((image, imageIndex) => (
            <button
              key={image}
              type="button"
              aria-label={`Show ${venture.title} image ${imageIndex + 1}`}
              onClick={() => setActiveImage(image)}
              onMouseEnter={() => setActiveImage(image)}
              className={`aspect-[4/3] flex-1 overflow-hidden rounded-lg transition ${activeImage === image ? 'ring-2 ring-[var(--gold)] ring-offset-2' : 'opacity-65 hover:opacity-100'}`}
            >
              <img src={image} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
      <div className="p-7">
        <div className="flex items-center justify-between">
          <p className="eyebrow text-[var(--gold-deep)]">{venture.eyebrow}</p>
          <span className="font-serif text-2xl text-[var(--gold-deep)]">{venture.number}</span>
        </div>
        <h3 className="mt-5 font-serif text-3xl leading-tight text-[var(--ink)]">{venture.title}</h3>
        <p className="mt-4 text-sm leading-7 text-[var(--muted-ink)]">{venture.copy}</p>
        <div className="mt-6 border-t border-black/10 pt-5">
          <p className="eyebrow text-[var(--gold-deep)]">Project detail</p>
          <p className="mt-3 text-sm leading-7 text-[var(--muted-ink)]">{venture.detail}</p>
          <dl className="mt-6 grid gap-3 text-xs">
            <div className="flex items-start justify-between gap-4 border-t border-black/10 pt-3">
              <dt className="font-semibold uppercase tracking-[.14em] text-[var(--muted-ink)]">Focus</dt>
              <dd className="text-right text-[var(--ink)]">{venture.focus}</dd>
            </div>
            <div className="flex items-start justify-between gap-4 border-t border-black/10 pt-3">
              <dt className="font-semibold uppercase tracking-[.14em] text-[var(--muted-ink)]">Long view</dt>
              <dd className="text-right text-[var(--ink)]">{venture.outlook}</dd>
            </div>
          </dl>
        </div>
      </div>
    </MotionReveal>
  )
}

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
            {ventures.map((venture, index) => <VentureCard key={venture.number} venture={venture} index={index} />)}
          </div>
        </section>

        <section className="bg-[var(--paper)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <MotionReveal className="mx-auto max-w-7xl">
            <MotionTag className="eyebrow text-[var(--gold-deep)]">A deliberate way of working</MotionTag>
            <div className="mt-8 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <h2 className="max-w-xl font-serif text-5xl leading-[.9] tracking-[-.05em] text-[var(--ink)] sm:text-7xl">Momentum is stronger when it has a method.</h2>
              <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
                {waysOfWorking.map(([number, title, copy]) => (
                  <article key={number} className="border-t border-black/15 pt-5">
                    <span className="text-[11px] font-semibold tracking-[.22em] text-[var(--gold-deep)]">{number}</span>
                    <h3 className="mt-5 font-serif text-3xl text-[var(--ink)]">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted-ink)]">{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </MotionReveal>
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

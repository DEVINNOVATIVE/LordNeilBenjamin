'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const images = [
  { src: '/assets/bahamas_(1).jpg', alt: 'Modular coastal residences in The Bahamas' },
  { src: '/assets/50ff0a71-afec-4de6-b2c8-5df2ef3afb37-1024x748.jpeg', alt: 'Modern modular home with rooftop greenery' },
  { src: '/assets/bahamas.jpg', alt: 'Bahamas coastline and development setting' },
]

const details = [
  {
    number: '01',
    title: 'Modular by design',
    copy: 'Each home is based on a standard 40 ft high-cube shipping container, creating an adaptable 8-by-40 ft living unit. Units can be combined horizontally or vertically to create different living arrangements, with double-height ceilings available as a premium option.',
  },
  {
    number: '02',
    title: 'Independent living',
    copy: 'Homes are designed to be off-grid capable through rooftop solar panels or wind turbines and an independent water source. A virtual marketplace would help owners find space, exchange locations, and move entire homes using existing rail and freight infrastructure where available.',
  },
  {
    number: '03',
    title: 'Built to move',
    copy: 'Specialized equipment would simplify the last-mile transport and placement of each home on a compatible foundation. Units are designed for removal and siting within two days in the same locale, with longer moves determined by the transport itinerary.',
  },
  {
    number: '04',
    title: 'A connected city',
    copy: 'The community vision includes self-driving electric cars, guided routes to schools, supermarkets, and hospitals, plus a smartphone safety network that shares location and speed information to improve road awareness and traffic flow.',
  },
  {
    number: '05',
    title: 'Care close to home',
    copy: 'Mobile medical and dental units, a computer lab, tutoring services, an outdoor cinema, resident gyms, restaurants, organic supermarkets, parks, and sports facilities are planned as part of a complete community experience.',
  },
  {
    number: '06',
    title: 'Designed for everyone',
    copy: 'Rooftop community areas would bring gathering spaces and commerce to multi-level residences. A wearable, human-powered exoskeleton is also envisioned to help elderly and disabled residents with demanding physical tasks, available through a rental model.',
  },
]

export function ParadiseProject() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="overflow-hidden bg-[var(--sand)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Intro row */}
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_.72fr]">
          <div>
            <p className="eyebrow text-[var(--gold-deep)]">SNH Inc. Bahamas</p>
            <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[.9] tracking-[-.05em] text-[var(--ink)] sm:text-7xl">
              Are you ready<br />for <em className="text-[var(--gold-deep)]">paradise?</em>
            </h2>
            <div className="mt-7 h-px w-20 bg-[var(--gold)]" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-[var(--gold-deep)]">Who we are</p>
            <p className="mt-4 text-[15px] leading-8 text-[var(--muted-ink)]">
              Through our management teams, we straddle several synergistic business sectors that enable superior financial results while improving the economic and natural environments, safety, and security of our communities.
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-14 grid gap-4 md:grid-cols-[1.35fr_.65fr]">
          <div className="group relative overflow-hidden rounded-3xl bg-[var(--ink)]">
            <img src={images[0].src} alt={images[0].alt} className="aspect-[16/9] h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--ink)]/80 to-transparent px-6 pb-6 pt-20">
              <p className="eyebrow text-[var(--gold)]">Bahamas development</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            {images.slice(1).map((image) => (
              <div key={image.src} className="group overflow-hidden rounded-3xl bg-white">
                <img src={image.src} alt={image.alt} className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105 md:aspect-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Summary + toggle */}
        <div className="mt-12 grid gap-8 border-t border-black/10 pt-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <p className="eyebrow text-[var(--gold-deep)]">Introduction</p>
            <p className="mt-4 max-w-4xl text-[15px] leading-8 text-[var(--muted-ink)]">
              Our vision is to build a city composed of modular units that can be readily added to or removed from a framework to meet rising demand, accommodate owners who wish to upgrade their living spaces, and simplify the moving process. Homes would combine flexible design, renewable energy, smart mobility, and a full range of community services in one connected environment.
            </p>
          </div>
          <button
            type="button"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="group inline-flex h-fit items-center justify-center gap-4 rounded-full bg-[var(--ink)] px-6 py-3.5 text-xs font-semibold uppercase tracking-[.16em] text-white transition hover:-translate-y-1 hover:bg-[var(--gold-deep)] lg:mt-5"
          >
            {isOpen ? 'Hide project details' : 'Show project details'}
            <span className={`text-[var(--gold)] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
          </button>
        </div>

        {/* Expandable project details */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="grid gap-x-8 gap-y-10 border-t border-black/10 pt-12 md:grid-cols-2 lg:grid-cols-3">
                {details.map((detail) => (
                  <article key={detail.number} className="border-t-2 border-[var(--gold)]/60 pt-5">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl text-[var(--gold-deep)]">{detail.number}</span>
                      <span className="size-2 rounded-full bg-[var(--gold)]" />
                    </div>
                    <h3 className="mt-7 font-serif text-2xl text-[var(--ink)]">{detail.title}</h3>
                    <p className="mt-3 text-[14px] leading-7 text-[var(--muted-ink)]">{detail.copy}</p>
                  </article>
                ))}
              </div>
              <div className="mt-12 rounded-3xl bg-[var(--ink)] px-6 py-8 text-white sm:px-10 sm:py-10">
                <p className="eyebrow text-[var(--gold)]">The opportunity</p>
                <p className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-white sm:text-4xl">A flexible home, a safer journey, and a stronger sense of community.</p>
                <p className="mt-5 max-w-2xl text-[14px] leading-7 text-white/60">The concept brings architecture, renewable energy, transportation, education, healthcare, and recreation together as one long-term vision for island living.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

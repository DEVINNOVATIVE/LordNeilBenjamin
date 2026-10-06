'use client'

import { motion } from 'motion/react'

const items = [
  { num: '01', title: 'Enterprise', copy: 'Backing people and ventures that move economies forward.', icon: '◆' },
  { num: '02', title: 'Philanthropy', copy: 'Turning resources into opportunity, dignity, and lasting change.', icon: '◆' },
  { num: '03', title: 'Legacy', copy: 'Creating a blueprint for progress that outlives the moment.', icon: '◆' },
]

export function FocusSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--ink)] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">

        {/* Heading row */}
        <div className="flex flex-col gap-6 border-b border-white/12 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-[var(--gold)]">The focus</p>
            <h2 className="mt-4 max-w-lg font-serif text-5xl leading-[.9] tracking-[-.055em] sm:text-7xl">
              Three ways to leave things better.
            </h2>
          </div>
          <p className="max-w-xs text-[14px] leading-7 text-white/55 lg:mb-2">
            A framework for turning ideas into momentum — and momentum into meaning.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map(({ num, title, copy }) => (
            <motion.article
              key={num}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 280 }}
              className="group relative min-h-[310px] overflow-hidden border border-white/15 bg-white/[.035] p-8 transition hover:border-[var(--gold)]/60 hover:bg-[var(--gold)]/[.07]"
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] font-semibold tracking-[.22em] text-[var(--gold)]/70">{num}</span>
                <span className="text-[var(--gold)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
              <h3 className="mt-24 font-serif text-[2.5rem] leading-tight tracking-tight">{title}</h3>
              <p className="mt-4 text-[14px] leading-7 text-white/55">{copy}</p>
              {/* Subtle bottom accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--gold)] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

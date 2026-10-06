'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'

const slides = [
  '/assets/slider1.jpg',
  '/assets/slider2.jpg',
  '/assets/slider3.jpg',
]

export function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = window.setInterval(() => setActive((c) => (c + 1) % slides.length), 5800)
    return () => window.clearInterval(t)
  }, [])

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#0c1a15]">
      {/* Full-bleed background — subtle, darkened */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slides[active]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url('${slides[active]}')` }}
        />
      </AnimatePresence>
      {/* Dark overlay — strong left, lighter right */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,#0c1a15_0%,rgba(12,26,21,.88)_42%,rgba(12,26,21,.4)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_72%_35%,rgba(211,177,107,.22),transparent_48%)]" />
      <div className="absolute right-8 top-1/2 -z-10 hidden -translate-y-1/2 text-right lg:block">
        <p className="eyebrow text-white/35">Independent perspective</p>
        <p className="mt-3 font-serif text-2xl italic text-white/60">Est. 1980s · The Bahamas</p>
      </div>

      {/* Content */}
      <div className="mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pt-28 pb-12 sm:px-8 lg:px-12 lg:pt-32">

        {/* LEFT: Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            className="eyebrow text-[var(--gold)]"
          >
            A personal perspective on progress
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.85 }}
            className="mt-7 max-w-5xl font-serif text-[clamp(3.8rem,8.5vw,8.5rem)] leading-[.8] tracking-[-.07em] text-white"
          >
            Think <em className="text-[var(--gold)]">bigger.</em>
            <br />
            <span className="ml-[0.12em]">Build</span>{' '}
            <em className="text-[var(--gold)]">better.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42 }}
            className="mt-9 text-[clamp(.9rem,1.5vw,1.35rem)] font-semibold uppercase tracking-[.2em] text-white"
          >
            Entrepreneur <span className="mx-2 text-[var(--gold)]">·</span> Philanthropist
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-4 h-px w-full max-w-[520px] origin-left bg-[var(--gold)]"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.58 }}
            className="mt-4 text-[clamp(.95rem,1.8vw,1.5rem)] font-semibold uppercase tracking-[.16em] text-white/90"
          >
            Lord Neil Benjamin Gibson
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="#story"
              className="rounded-full bg-[var(--gold)] px-7 py-3.5 text-xs font-semibold uppercase tracking-[.16em] text-[var(--ink)] transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(211,177,107,.3)]"
            >
              Explore the story ↗
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-white/30 px-7 py-3.5 text-xs uppercase tracking-[.16em] text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Read the journal
            </Link>
          </motion.div>

          {/* Slide dots */}
          <div className="mt-14 flex items-center gap-4">
            <p className="eyebrow text-white/40">Nassau · London · Accra</p>
            <div className="ml-4 flex gap-2" aria-label="Image navigation">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Image ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-[3px] rounded-full transition-all duration-500 ${i === active ? 'w-10 bg-[var(--gold)]' : 'w-3 bg-white/35 hover:bg-white/60'}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-8 hidden sm:block">
        <Link
          href="#story"
          aria-label="Scroll to story"
          className="group flex items-center gap-3 text-[10px] uppercase tracking-[.2em] text-[var(--gold)]"
        >
          Scroll
          <span className="grid size-8 place-items-center rounded-full border border-[var(--gold)]/50 transition group-hover:translate-y-1">↓</span>
        </Link>
      </div>
    </section>
  )
}

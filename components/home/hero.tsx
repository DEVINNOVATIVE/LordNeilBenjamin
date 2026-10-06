'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'

const slides = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-20191021-wa0000%20%281%29-QDk948FnwjoJ9k7AOKGBfD5UiP2UUc.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/neil-uae-central-C5ilzOgM0oeviCf2oVqkMD8DIM72GQ.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slider3-D6NjUkPxKpdl3ixAmvGWxUMnqkesKU.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bahamas-jjLXXo7pomxRIWXqqWOewqlMBDZih2.jpg',
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_40%,rgba(211,177,107,.18),transparent_55%)]" />

      {/* Content */}
      <div className="mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-12 px-5 pt-28 pb-12 sm:px-8 lg:grid-cols-2 lg:px-12 lg:pt-32">

        {/* LEFT: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            className="flex items-center gap-3"
          >
            <span className="size-2 rounded-full bg-[var(--gold)] shadow-[0_0_18px_6px_rgba(211,177,107,.3)]" />
            <p className="eyebrow text-[var(--gold)]">A personal perspective on progress</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.85 }}
            className="mt-8 font-serif text-[clamp(3.6rem,8.5vw,8.5rem)] leading-[.82] tracking-[-.06em] text-white"
          >
            Think <em className="text-[var(--gold)]">bigger.</em>
            <br />
            <span className="ml-[0.15em]">Build</span>{' '}
            <em className="text-[var(--gold)]">better.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.48 }}
            className="mt-8 max-w-xs text-[15px] leading-7 text-white/70"
          >
            Entrepreneur. Philanthropist. Builder of bridges between ambition and lasting impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-9 flex flex-wrap gap-3"
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

        {/* RIGHT: Framed image panel */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="relative hidden lg:flex lg:justify-end"
        >
          {/* Outer decorative ring */}
          <div className="absolute -inset-6 rounded-[2.5rem] border border-[var(--gold)]/20" />
          <div className="absolute -inset-12 rounded-[3rem] border border-white/8" />

          {/* Main image box */}
          <div className="relative w-[340px] overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-2 shadow-[0_32px_80px_rgba(0,0,0,.55)] backdrop-blur-sm xl:w-[390px]">
            <div className="relative overflow-hidden rounded-2xl">
              <AnimatePresence mode="sync">
                <motion.img
                  key={slides[active]}
                  src={slides[active]}
                  alt="Lord Neil Benjamin"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1 }}
                  className="aspect-[3/4] w-full object-cover"
                />
              </AnimatePresence>

              {/* Inner overlay label */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0c1a15]/90 to-transparent p-5">
                <p className="eyebrow text-[var(--gold)]">Lord Neil Benjamin Gibson</p>
                <p className="mt-1 font-serif text-xl text-white leading-snug">Entrepreneur · Philanthropist</p>
              </div>
            </div>

            {/* Corner badge */}
            <div className="absolute -right-3 -top-3 flex size-16 items-center justify-center rounded-full border border-[var(--gold)]/50 bg-[#0c1a15] text-center text-[8px] uppercase leading-[1.5] tracking-[.14em] text-[var(--gold)]">
              2026<br />NB
            </div>
          </div>

          {/* Bottom floating stat */}
          <div className="absolute -bottom-5 left-0 flex items-center gap-3 rounded-full border border-white/15 bg-[rgba(12,26,21,.8)] px-4 py-3 backdrop-blur-md">
            <span className="font-serif text-2xl text-[var(--gold)]">10</span>
            <span className="text-[10px] uppercase tracking-[.16em] text-white/60">Markets<br />in view</span>
          </div>
        </motion.div>
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

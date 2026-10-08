'use client'

import { useEffect, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { SiteHeader } from './site-header'

type PageHeroProps = {
  active: 'home' | 'about' | 'journal'
  eyebrow: string
  title: ReactNode
  subtitle: string
  identity: string
  primaryAction?: { href: string; label: string }
  secondaryAction?: { href: string; label: string }
  slides?: string[]
  sideLabel?: string
  sideValue?: string
  locations?: string
}

const defaultSlides = ['/assets/slider1.jpg', '/assets/slider2.jpg', '/assets/slider3.jpg']

export function PageHero({
  active,
  eyebrow,
  title,
  subtitle,
  identity,
  primaryAction,
  secondaryAction,
  slides = defaultSlides,
  sideLabel = 'Independent perspective',
  sideValue = 'Est. 1980s · The Bahamas',
  locations = 'Nassau · London · Accra',
}: PageHeroProps) {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 5800)
    return () => window.clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative isolate min-h-[min(760px,100svh)] overflow-hidden bg-[#0c1a15] text-white">
      <SiteHeader active={active} />
      <AnimatePresence mode="sync">
        <motion.div
          key={slides[activeSlide]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url('${slides[activeSlide]}')` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,#0c1a15_0%,rgba(12,26,21,.88)_42%,rgba(12,26,21,.4)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_72%_35%,rgba(211,177,107,.22),transparent_48%)]" />
      <div className="absolute right-8 top-1/2 -z-10 hidden -translate-y-1/2 text-right lg:block">
        <p className="eyebrow text-white/35">{sideLabel}</p>
        <p className="mt-3 font-serif text-2xl italic text-white/60">{sideValue}</p>
      </div>
      <div className="mx-auto flex min-h-[min(760px,100svh)] max-w-7xl items-center px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pt-36">
        <div>
          <motion.p initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} className="eyebrow text-[var(--gold)]">
            {eyebrow}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.85 }} className="mt-7 max-w-5xl font-serif text-[clamp(3.8rem,8.5vw,8.5rem)] leading-[.8] tracking-[-.07em] text-white">
            {title}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.42 }} className="mt-9 max-w-3xl text-[clamp(.9rem,1.5vw,1.35rem)] font-semibold uppercase tracking-[.2em] text-white">
            {identity}
          </motion.p>
          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.5, duration: 0.7 }} className="mt-4 h-px w-full max-w-[520px] origin-left bg-[var(--gold)]" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.58 }} className="mt-4 max-w-xl text-[15px] leading-7 text-white/75">
            {subtitle}
          </motion.p>
          {(primaryAction || secondaryAction) && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-8 flex flex-wrap gap-3">
              {primaryAction && <Link href={primaryAction.href} className="rounded-full bg-[var(--gold)] px-7 py-3.5 text-xs font-semibold uppercase tracking-[.16em] text-[var(--ink)] transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(211,177,107,.3)]">{primaryAction.label}</Link>}
              {secondaryAction && <Link href={secondaryAction.href} className="rounded-full border border-white/30 px-7 py-3.5 text-xs uppercase tracking-[.16em] text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)]">{secondaryAction.label}</Link>}
            </motion.div>
          )}
          <div className="mt-12 flex items-center gap-4 sm:mt-14">
            <p className="eyebrow text-white/40">{locations}</p>
            <div className="ml-1 flex gap-2" aria-label="Image navigation">
              {slides.map((slide, index) => (
                <button key={slide} type="button" aria-label={`Image ${index + 1}`} onClick={() => setActiveSlide(index)} className={`h-[3px] rounded-full transition-all duration-500 ${index === activeSlide ? 'w-10 bg-[var(--gold)]' : 'w-3 bg-white/35 hover:bg-white/60'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 right-8 hidden sm:block">
        <span className="group flex items-center gap-3 text-[10px] uppercase tracking-[.2em] text-[var(--gold)]">Scroll <span className="grid size-8 place-items-center rounded-full border border-[var(--gold)]/50">↓</span></span>
      </div>
    </section>
  )
}

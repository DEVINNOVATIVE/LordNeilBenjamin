'use client'

import { useEffect, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { SiteHeader } from './site-header'

type PageHeroProps = {
  active: 'home' | 'about' | 'work' | 'mission' | 'paradise' | 'blog'
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
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 6200)
    return () => window.clearInterval(timer)
  }, [slides.length])

  const nextSlide = slides[(activeSlide + 1) % slides.length]

  return (
    <section className="hero-shell relative isolate min-h-[min(820px,100svh)] overflow-hidden bg-[var(--ink)] text-white">
      <SiteHeader active={active} />
      <div className="absolute inset-0 -z-20 bg-[var(--ink)]" />
      <div className="hero-giant-word absolute -bottom-8 left-4 -z-10 select-none font-serif text-[clamp(7rem,21vw,21rem)] leading-none tracking-[-.1em] text-white/[.035]">impact</div>
      <div className="absolute -right-20 top-24 -z-10 h-72 w-72 rounded-full border border-[var(--gold)]/20 sm:h-96 sm:w-96" />

      <div className="mx-auto grid min-h-[min(820px,100svh)] max-w-[1440px] grid-cols-1 gap-10 px-5 pb-7 pt-28 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-14 lg:px-14 lg:pb-10 lg:pt-36">
        <div className="relative z-10 flex flex-col justify-center pb-6 lg:pb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }} className="flex items-center gap-4">
            <span className="h-px w-12 bg-[var(--gold)]" />
            <p className="eyebrow text-[var(--gold)]">{eyebrow}</p>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .85 }} className="mt-7 max-w-3xl font-serif text-[clamp(4.1rem,8.5vw,8.6rem)] leading-[.82] tracking-[-.085em] text-[#f8f5ee]">
            {title}
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .38 }} className="mt-9 max-w-xl border-l border-[var(--gold)]/70 pl-5">
            <p className="text-sm leading-6 text-white/70">{subtitle}</p>
            <p className="mt-4 text-[10px] font-semibold uppercase leading-5 tracking-[.18em] text-[var(--gold)]">{identity}</p>
          </motion.div>
          {(primaryAction || secondaryAction) && (
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }} className="mt-9 flex flex-wrap gap-3">
              {primaryAction && <Link href={primaryAction.href} className="rounded-full bg-[var(--gold)] px-7 py-3.5 text-xs font-semibold uppercase tracking-[.16em] text-[var(--ink)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--hero-highlight)]">{primaryAction.label}</Link>}
              {secondaryAction && <Link href={secondaryAction.href} className="rounded-full border border-white/30 px-7 py-3.5 text-xs uppercase tracking-[.16em] text-white transition duration-300 hover:-translate-y-1 hover:border-[var(--gold)] hover:text-[var(--gold)]">{secondaryAction.label}</Link>}
            </motion.div>
          )}
        </div>

        <div className="relative flex min-h-[390px] items-center justify-center lg:min-h-0">
          <div className="hero-image-frame relative h-[min(68svh,600px)] w-[min(84vw,510px)] overflow-hidden rounded-[1.6rem] sm:rounded-[2rem] lg:ml-auto lg:w-[min(42vw,560px)]">
            <AnimatePresence mode="sync">
              <motion.img key={slides[activeSlide]} src={slides[activeSlide]} alt="A visual chapter from Lord Neil Benjamin's story" initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.03 }} transition={{ duration: 1.2, ease: 'easeOut' }} className="h-full w-full object-cover" />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 via-transparent to-[var(--ink)]/10" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between border-t border-white/30 pt-4 sm:bottom-7 sm:left-7 sm:right-7">
              <p className="eyebrow text-white/65">{locations}</p>
              <span className="text-[10px] tracking-[.2em] text-white/60">0{activeSlide + 1} / 0{slides.length}</span>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7 }} className="hero-note absolute -bottom-3 left-0 z-10 hidden max-w-[190px] rounded-xl border border-white/15 bg-[#1d2d27]/90 p-4 shadow-2xl backdrop-blur-md sm:block lg:-left-8 lg:bottom-12">
            <p className="eyebrow text-[var(--gold)]">{sideLabel}</p>
            <p className="mt-2 text-xs leading-5 text-white/65">{sideValue}</p>
          </motion.div>
          <div className="absolute -right-2 top-8 z-10 hidden h-16 w-16 rounded-full border border-[var(--gold)]/50 sm:block" />
        </div>

        <div className="relative z-10 col-span-full flex items-end justify-between gap-6 border-t border-white/15 pt-5">
          <p className="eyebrow text-white/45">Scroll to explore</p>
          <div className="flex items-center gap-3" aria-label="Image navigation">
            <div className="hidden h-11 w-16 overflow-hidden rounded-md border border-white/30 sm:block"><img src={nextSlide} alt="Next visual chapter" className="h-full w-full object-cover" /></div>
            <div className="flex gap-1.5">{slides.map((slide, index) => <button key={slide} type="button" aria-label={`Image ${index + 1}`} onClick={() => setActiveSlide(index)} className={`h-1 rounded-full transition-all duration-500 ${index === activeSlide ? 'w-9 bg-[var(--gold)]' : 'w-3 bg-white/40 hover:bg-white/70'}`} />)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

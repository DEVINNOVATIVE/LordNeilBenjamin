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
    <section className="hero-shell relative isolate min-h-[min(780px,100svh)] overflow-hidden bg-[var(--ink)] text-white selection:bg-[var(--gold)] selection:text-[var(--ink)]">
      <SiteHeader active={active} />
      <div className="absolute inset-0 -z-20 bg-[var(--ink)]" />
      <AnimatePresence mode="sync">
        <motion.div
          key={slides[activeSlide]}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.25, ease: 'easeOut' }}
          className="absolute inset-y-0 right-0 -z-10 w-full bg-cover bg-center lg:w-[61%]"
          style={{ backgroundImage: `url('${slides[activeSlide]}')` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--ink)_0%,rgba(16,27,24,.97)_31%,rgba(16,27,24,.55)_58%,rgba(16,27,24,.18)_100%)] lg:bg-[linear-gradient(90deg,var(--ink)_0%,var(--ink)_30%,rgba(16,27,24,.72)_55%,rgba(16,27,24,.08)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(16,27,24,.65),transparent_40%,rgba(16,27,24,.25))]" />
      <div className="absolute right-[7%] top-[22%] -z-10 hidden h-64 w-64 rounded-full border border-[var(--gold)]/30 lg:block" />

      <div className="mx-auto flex min-h-[min(780px,100svh)] max-w-[1440px] flex-col justify-between px-5 pb-8 pt-28 sm:px-8 lg:px-14 lg:pb-10 lg:pt-36">
        <div className="relative z-10 flex flex-1 items-center">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }} className="flex items-center gap-4">
              <span className="h-px w-12 bg-[var(--gold)]" />
              <p className="eyebrow text-[var(--gold)]">{eyebrow}</p>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .85 }} className="mt-8 max-w-4xl font-serif text-[clamp(4.25rem,10vw,9.5rem)] leading-[.78] tracking-[-.08em] text-[#f8f5ee]">
              {title}
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .38 }} className="mt-9 flex max-w-xl items-start gap-5 border-l border-[var(--gold)]/70 pl-5">
              <p className="max-w-md text-sm leading-6 text-white/70">{subtitle}</p>
              <p className="hidden text-right text-[10px] font-semibold uppercase leading-5 tracking-[.18em] text-[var(--gold)] sm:block">{identity}</p>
            </motion.div>
            {(primaryAction || secondaryAction) && (
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }} className="mt-9 flex flex-wrap gap-3">
                {primaryAction && <Link href={primaryAction.href} className="rounded-full bg-[var(--gold)] px-7 py-3.5 text-xs font-semibold uppercase tracking-[.16em] text-[var(--ink)] transition duration-300 hover:-translate-y-1 hover:bg-[#e6c57d]">{primaryAction.label}</Link>}
                {secondaryAction && <Link href={secondaryAction.href} className="rounded-full border border-white/35 bg-white/5 px-7 py-3.5 text-xs uppercase tracking-[.16em] text-white backdrop-blur-sm transition duration-300 hover:border-[var(--gold)] hover:text-[var(--gold)]">{secondaryAction.label}</Link>}
              </motion.div>
            )}
          </div>
        </div>

        <div className="relative z-10 flex items-end justify-between gap-6 border-t border-white/20 pt-5">
          <div className="flex items-center gap-5">
            <p className="eyebrow text-white/45">{locations}</p>
            <div className="hidden h-4 w-px bg-white/20 sm:block" />
            <p className="hidden text-xs text-white/45 sm:block">{sideLabel} <span className="text-white/75">· {sideValue}</span></p>
          </div>
          <div className="flex items-center gap-3" aria-label="Image navigation">
            <div className="hidden h-11 w-16 overflow-hidden rounded-md border border-white/30 sm:block">
              <img src={nextSlide} alt="Next visual chapter" className="h-full w-full object-cover" />
            </div>
            <div className="flex gap-1.5">
              {slides.map((slide, index) => (
                <button key={slide} type="button" aria-label={`Image ${index + 1}`} onClick={() => setActiveSlide(index)} className={`h-1 rounded-full transition-all duration-500 ${index === activeSlide ? 'w-9 bg-[var(--gold)]' : 'w-3 bg-white/40 hover:bg-white/70'}`} />
              ))}
            </div>
            <span className="hidden text-[10px] uppercase tracking-[.2em] text-white/45 sm:block">0{activeSlide + 1} / 0{slides.length}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

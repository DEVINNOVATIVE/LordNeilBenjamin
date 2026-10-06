'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'

const slides = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-20191021-wa0000%20%281%29-QDk948FnwjoJ9k7AOKGBfD5UiP2UUc.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slider3-D6NjUkPxKpdl3ixAmvGWxUMnqkesKU.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slider1-iKVXDrjHCnjeekxu0HslnYNG66E5nn.jpg',
]

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 5600)
    return () => window.clearInterval(timer)
  }, [])
  const activeImage = slides[activeSlide]

  return <section className="relative isolate min-h-[760px] overflow-hidden bg-[var(--ink)] px-5 pb-8 pt-32 text-white sm:px-8 lg:min-h-[860px] lg:px-12 lg:pt-40">
    <motion.div key={activeImage} initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1.02 }} transition={{ duration: 1.3 }} className="absolute inset-0 -z-20 bg-cover bg-[center_20%]" style={{ backgroundImage: `url('${activeImage}')` }} />
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(9,21,17,.98)_0%,rgba(9,21,17,.87)_35%,rgba(9,21,17,.22)_75%,rgba(9,21,17,.7)_100%)]" />
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(204,169,93,.32),transparent_28%)]" />
    <div className="mx-auto flex min-h-[675px] max-w-7xl flex-col justify-between">
      <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3"><span className="size-2 rounded-full bg-[var(--gold)] shadow-[0_0_22px_8px_rgba(204,169,93,.25)]" /><p className="eyebrow text-[var(--gold)]">A personal perspective on progress</p></motion.div>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12, duration: .85 }} className="mt-8 max-w-5xl font-serif text-[clamp(4.4rem,10.5vw,10rem)] leading-[.8] tracking-[-.075em]">Think <em className="text-[var(--gold)]">bigger.</em><br /><span className="ml-[8vw]">Build</span> <em className="text-[var(--gold)]">better.</em></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }} className="mt-10 max-w-sm text-sm leading-7 text-white/72">Entrepreneur. Philanthropist. Builder of bridges between ambition and lasting impact.</motion.p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="#story" className="rounded-full bg-[var(--gold)] px-6 py-3 text-xs font-semibold uppercase tracking-[.16em] text-[var(--ink)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(204,169,93,.25)]">Explore the story ↗</Link><Link href="/blog" className="rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[.16em] text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)]">Read the journal</Link></div>
        </div>
        <motion.div initial={{ opacity: 0, rotate: 7, y: 30 }} animate={{ opacity: 1, rotate: 4, y: 0 }} transition={{ delay: .35, duration: .8 }} whileHover={{ rotate: 0, y: -8 }} className="hero-card relative mx-auto hidden w-72 rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur-xl lg:block"><div className="aspect-[4/5] overflow-hidden rounded-xl"><img src={activeImage} alt="Lord Neil Benjamin at work" className="h-full w-full object-cover saturate-50" /></div><div className="flex items-end justify-between pt-4"><div><p className="eyebrow text-[var(--gold)]">The long view</p><p className="mt-1 font-serif text-xl">Built for impact.</p></div><span className="grid size-9 place-items-center rounded-full border border-white/25 text-[var(--gold)]">↗</span></div></motion.div>
      </div>
      <div className="flex items-end justify-between border-t border-white/25 pt-5"><p className="eyebrow text-white/45">Nassau · London · Accra</p><Link href="#story" aria-label="Scroll to story" className="group flex items-center gap-3 text-xs uppercase tracking-[.2em] text-[var(--gold)]">Scroll to explore <span className="grid size-8 place-items-center rounded-full border border-[var(--gold)]/50 transition group-hover:translate-y-1">↓</span></Link></div>
    </div>
  </section>
}

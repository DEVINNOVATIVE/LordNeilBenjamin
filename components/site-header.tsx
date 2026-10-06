'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'

export const imageUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-20191021-wa0000%20%281%29-QDk948FnwjoJ9k7AOKGBfD5UiP2UUc.jpg'
const heroImage = `url('${imageUrl}')`
const storyImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/neil-uae-central-C5ilzOgM0oeviCf2oVqkMD8DIM72GQ.jpeg'
const mapImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/east-african-countries-2-xMLjbVd3mBnJYVxbq5csycRiAEif2T.png'
const teamImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-20191021-wa0015%20%281%29-7vj5mSHble7tL9auwwio5hJ1swTZZy.jpg'
const historyImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lord-Neil-Gibson-and-Erwin-Contreras%20%281%29-5aV1UIGgH3a1YEvlBwRqe9jWHIk7zu.png'
const beachImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bahamas-jjLXXo7pomxRIWXqqWOewqlMBDZih2.jpg'
const heroSlides = [
  imageUrl,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slider3-D6NjUkPxKpdl3ixAmvGWxUMnqkesKU.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slider1-iKVXDrjHCnjeekxu0HslnYNG66E5nn.jpg',
  beachImage,
  teamImage,
  historyImage,
]

export function SiteHeader() {
  return (
    <motion.header initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-5 text-primary-foreground sm:px-8 lg:px-12">
      <Link href="/" className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em]"><span className="grid size-7 place-items-center rounded-full border border-primary-foreground/50 text-[9px]">NB</span><span className="hidden sm:inline">Lord Neil Benjamin</span></Link>
      <nav aria-label="Primary navigation" className="flex items-center gap-1 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 p-1 text-[10px] uppercase tracking-[0.18em] backdrop-blur-md"><Link href="/" className="rounded-full bg-primary-foreground px-4 py-2 text-primary">Home</Link><Link href="/about" className="rounded-full px-4 py-2 text-primary-foreground/70 transition hover:text-primary-foreground">About</Link><Link href="/blog" className="rounded-full px-4 py-2 text-primary-foreground/70 transition hover:text-primary-foreground">Journal</Link></nav>
    </motion.header>
  )
}

export function Footer() {
  return <footer className="bg-primary px-5 py-12 text-primary-foreground sm:px-8 lg:px-12"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.7fr_1fr_1fr] md:gap-8"><div><p className="font-serif text-3xl">The long view.</p><p className="mt-4 max-w-xs text-sm leading-6 text-primary-foreground/55">Enterprise, philanthropy, and ideas for a more connected world.</p></div><div><p className="eyebrow text-accent">Explore</p><div className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/65"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/blog">Journal</Link></div></div><div><p className="eyebrow text-accent">Connect</p><p className="mt-4 text-sm leading-7 text-primary-foreground/65">London · Nassau · West Africa<br />hello@lordneilbenjamin.com</p></div></div><div className="mx-auto mt-12 flex max-w-7xl justify-between border-t border-primary-foreground/15 pt-5 text-[10px] uppercase tracking-[.18em] text-primary-foreground/40"><span>© 2026 Lord Neil Benjamin</span><span>Built for what&apos;s next</span></div></footer>
}

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 5200)
    return () => window.clearInterval(timer)
  }, [])

  const activeImage = heroSlides[activeSlide]

  return <section className="hero-scene relative isolate min-h-[760px] overflow-hidden bg-[#101a16] px-5 pb-10 pt-32 text-primary-foreground sm:px-8 lg:min-h-[880px] lg:px-12 lg:pt-40">
    <motion.div key={activeImage} initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1.04 }} transition={{ duration: 1.2 }} className="hero-image absolute inset-0 -z-20 bg-cover bg-[center_25%]" style={{ backgroundImage: `url('${activeImage}')` }} />
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(10,24,19,.98)_0%,rgba(10,24,19,.82)_32%,rgba(10,24,19,.2)_74%,rgba(10,24,19,.7)_100%)]" />
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_25%,rgba(207,174,103,.3),transparent_28%)]" />
    <div className="mx-auto flex min-h-[650px] max-w-7xl flex-col justify-between">
      <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }} className="flex items-center gap-3"><span className="size-2 rounded-full bg-accent shadow-[0_0_22px_8px_rgba(207,174,103,.3)]" /><p className="eyebrow text-accent">A personal perspective on progress</p></motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .9 }} className="mt-8 max-w-5xl font-serif text-[clamp(4.8rem,11vw,10.7rem)] leading-[.78] tracking-[-.075em]">Think <em className="text-accent">bigger.</em><br /><span className="ml-[8vw]">Build</span> <em className="text-accent">better.</em></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }} className="mt-10 max-w-sm text-sm leading-7 text-primary-foreground/70">Entrepreneur. Philanthropist. Builder of bridges between ambition and lasting impact.</motion.p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="#story" className="rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[.16em] text-primary transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(207,174,103,.25)]">Explore the story ↗</Link><Link href="/blog" className="rounded-full border border-primary-foreground/30 px-6 py-3 text-xs uppercase tracking-[.16em] text-primary-foreground transition hover:border-accent hover:text-accent">Read the journal</Link></div>
        </div>
        <div className="hidden justify-end pt-20 lg:flex"><motion.div initial={{ opacity: 0, rotate: 7, y: 30 }} animate={{ opacity: 1, rotate: 7, y: 0 }} transition={{ delay: .45, duration: .8 }} whileHover={{ rotate: 1, y: -10 }} className="hero-card relative w-72 rounded-2xl border border-white/25 bg-white/10 p-4 shadow-2xl backdrop-blur-xl"><div className="aspect-[4/5] overflow-hidden rounded-xl"><div className="h-full w-full bg-cover bg-center saturate-50" style={{ backgroundImage: `url('${activeImage}')` }} /></div><div className="flex items-end justify-between pt-4"><div><p className="eyebrow text-accent">The long view</p><p className="mt-1 font-serif text-xl">Built for impact.</p></div><span className="grid size-9 place-items-center rounded-full border border-white/25 text-accent">↗</span></div></motion.div></div>
      </div>
      <div className="flex items-end justify-between border-t border-primary-foreground/25 pt-5"><p className="eyebrow text-primary-foreground/45">Nassau · London · Accra</p><Link href="#story" aria-label="Scroll to story" className="group flex items-center gap-3 text-xs uppercase tracking-[.2em] text-accent">Scroll to explore <span className="grid size-8 place-items-center rounded-full border border-accent/50 transition group-hover:translate-y-1">↓</span></Link></div>
    </div>
  </section>
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) { return <div className="mb-10"><p className="eyebrow text-accent-foreground">{eyebrow}</p><h2 className="mt-3 max-w-3xl font-serif text-5xl leading-[.9] tracking-[-.04em] sm:text-7xl">{title}</h2></div> }

export function StorySection() { return <section id="story" className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-36"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div className="relative lg:pr-12"><div className="aspect-[4/5] bg-cover bg-center grayscale-[.2]" style={{ backgroundImage: `url('${storyImage}')` }} /><div className="absolute -bottom-8 -right-1 hidden w-2/3 border-t border-accent-foreground/40 pt-3 text-[10px] uppercase tracking-[.2em] text-muted-foreground sm:block">Nassau / London / Accra</div></div><div><SectionHeading eyebrow="The story" title="A life measured by what it makes possible." /><p className="max-w-xl text-base leading-8 text-muted-foreground">From the islands of The Bahamas to the wider world, Lord Neil Benjamin has spent his career connecting ambition with impact. His work spans enterprise, investment, and philanthropy — always with an eye toward what can be built for the next generation.</p><p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">The result is a life defined not by a single title, but by a belief that meaningful progress happens when bold ideas meet thoughtful action.</p><Link href="/about" className="mt-9 inline-flex rounded-full border border-foreground px-5 py-3 text-xs font-semibold uppercase tracking-[.18em] transition hover:bg-foreground hover:text-background">Read the full story <span className="ml-5">↗</span></Link></div></div></section> }

export function FocusSection() { const items = [['01','Enterprise','Backing people and ventures that move economies forward.'],['02','Philanthropy','Turning resources into opportunity, dignity, and lasting change.'],['03','Legacy','Creating a blueprint for progress that outlives the moment.']]; return <section className="bg-secondary px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><SectionHeading eyebrow="The focus" title="Three ways to leave things better." /><p className="max-w-xs text-sm leading-6 text-muted-foreground lg:pb-10">A framework for turning ideas into momentum — and momentum into meaning.</p></div><div className="grid gap-3 md:grid-cols-3">{items.map(([num, title, copy]) => <motion.article whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 260 }} key={num} className="group rounded-2xl border border-border bg-card p-7 shadow-sm"><div className="flex items-center justify-between"><span className="text-sm text-accent-foreground">{num}</span><span className="text-xl text-accent-foreground transition-transform group-hover:translate-x-1">↗</span></div><h3 className="mt-20 font-serif text-4xl tracking-tight">{title}</h3><p className="mt-5 text-sm leading-7 text-muted-foreground">{copy}</p></motion.article>)}</div></div></section> }

export function JournalSection() { const posts = [['The quiet power of a long view', beachImage], ['Building bridges across borders', teamImage], ['What does progress really mean?', historyImage]]; return <section className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-7xl"><div className="flex items-end justify-between"><SectionHeading eyebrow="From the journal" title="Notes for the road ahead." /><Link href="/blog" className="mb-10 hidden rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[.18em] transition hover:bg-secondary md:block">View all ↗</Link></div><div className="grid gap-4 md:grid-cols-3">{posts.map(([title, image], i) => <Link href="/blog" key={title} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl"><div className="aspect-[1.35] bg-cover bg-center grayscale-[.15] transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${image}')` }} /><div className="p-6"><div className="flex justify-between text-[10px] uppercase tracking-[.18em] text-accent-foreground"><span>0{i + 1} · Journal</span><span>2026</span></div><h3 className="mt-10 max-w-xs font-serif text-3xl leading-tight transition-colors group-hover:text-accent-foreground">{title}</h3><p className="mt-7 text-xs uppercase tracking-[.18em] text-muted-foreground">Read story →</p></div></Link>)}</div></div></section> }

export function ImpactSection() { return <section className="overflow-hidden bg-secondary px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.9fr]"><div><p className="eyebrow text-accent-foreground">The wider view</p><h2 className="mt-4 max-w-xl font-serif text-5xl leading-[.9] tracking-[-.04em] sm:text-7xl">Ideas travel. Impact stays.</h2><p className="mt-7 max-w-md text-base leading-8 text-muted-foreground">From the Bahamas across West Africa and beyond, the work is grounded in connection — people, places, and the possibilities between them.</p><div className="mt-10 grid max-w-md grid-cols-2 gap-3"><div className="rounded-2xl border border-border bg-card p-5"><p className="font-serif text-4xl">10</p><p className="eyebrow mt-2 text-muted-foreground">Markets in view</p></div><div className="rounded-2xl border border-border bg-card p-5"><p className="font-serif text-4xl">01</p><p className="eyebrow mt-2 text-muted-foreground">Shared direction</p></div></div></div><div className="relative rotate-2 overflow-hidden rounded-3xl border-8 border-card bg-card shadow-2xl"><div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/15 to-transparent" /><img src={mapImage} alt="Map highlighting West African countries" className="h-auto w-full mix-blend-multiply" /></div></div></section> }

export function HomePage() { return <><div className="relative"><SiteHeader /><Hero /></div><StorySection /><ImpactSection /><FocusSection /><JournalSection /><Footer /></> }

export function InteriorPage({ type }: { type: 'about' | 'blog' }) { const isAbout = type === 'about'; return <><div className="relative bg-primary text-primary-foreground"><SiteHeader /><section className="mx-auto max-w-7xl px-5 pb-24 pt-44 sm:px-8 lg:px-12"><p className="eyebrow text-accent">{isAbout ? 'The story' : 'The journal'}</p><h1 className="mt-6 max-w-5xl font-serif text-[clamp(4rem,10vw,9rem)] leading-[.82] tracking-[-.06em]">{isAbout ? 'Built with purpose.' : 'Thoughts in motion.'}</h1></section></div>{isAbout ? <StorySection /> : <JournalSection />}<Footer /></> }

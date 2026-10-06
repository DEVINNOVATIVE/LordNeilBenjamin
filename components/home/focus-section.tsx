'use client'

import { motion } from 'motion/react'
import { SectionHeading } from '@/components/shared/section-heading'

const items = [['01', 'Enterprise', 'Backing people and ventures that move economies forward.'], ['02', 'Philanthropy', 'Turning resources into opportunity, dignity, and lasting change.'], ['03', 'Legacy', 'Creating a blueprint for progress that outlives the moment.']]

export function FocusSection() {
  return <section className="bg-[var(--sand)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><SectionHeading eyebrow="The focus" title="Three ways to leave things better." /><p className="max-w-xs text-sm leading-6 text-[var(--muted-ink)] lg:pb-10">A framework for turning ideas into momentum — and momentum into meaning.</p></div><div className="grid gap-3 md:grid-cols-3">{items.map(([num, title, copy]) => <motion.article whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 260 }} key={num} className="group rounded-2xl border border-black/10 bg-white/65 p-7 shadow-sm"><div className="flex items-center justify-between"><span className="text-sm text-[var(--gold-deep)]">{num}</span><span className="text-xl text-[var(--gold-deep)] transition-transform group-hover:translate-x-1">↗</span></div><h3 className="mt-20 font-serif text-4xl tracking-tight text-[var(--ink)]">{title}</h3><p className="mt-5 text-sm leading-7 text-[var(--muted-ink)]">{copy}</p></motion.article>)}</div></div></section>
}

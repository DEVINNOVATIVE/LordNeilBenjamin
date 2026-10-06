'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

type SiteHeaderProps = { active?: 'home' | 'about' | 'journal' }

const links = [
  { href: '/', label: 'Home', key: 'home' as const },
  { href: '/about', label: 'About', key: 'about' as const },
  { href: '/blog', label: 'Journal', key: 'journal' as const },
]

export function SiteHeader({ active = 'home' }: SiteHeaderProps) {
  return (
    <motion.header initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} className="absolute inset-x-0 top-0 z-30 px-4 py-4 sm:px-8 lg:px-12">
      <div className="header-shell mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-[rgba(8,22,17,.36)] px-3 py-3 shadow-[0_16px_50px_rgba(0,0,0,.18)] backdrop-blur-xl sm:px-5">
        <Link href="/" className="group flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white sm:text-[11px]">
          <span className="header-mark grid size-9 place-items-center rounded-full border border-white/45 bg-white/5 text-[9px] transition group-hover:border-[var(--gold)] group-hover:text-[var(--gold)]">NB</span>
          <span className="hidden sm:inline">Lord Neil Benjamin</span>
        </Link>
        <div className="hidden items-center gap-2 text-[9px] uppercase tracking-[.18em] text-white/45 lg:flex"><span className="size-1.5 rounded-full bg-[var(--gold)] shadow-[0_0_12px_var(--gold)]" /> Purpose in motion</div>
        <nav aria-label="Primary navigation" className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1 text-[10px] uppercase tracking-[0.16em]">
          {links.map((link) => <Link key={link.key} href={link.href} className={`rounded-full px-3 py-2 transition sm:px-4 ${active === link.key ? 'bg-white text-[var(--ink)] shadow-[0_5px_18px_rgba(255,255,255,.16)]' : 'text-white/70 hover:text-white'}`}>{link.label}</Link>)}
        </nav>
      </div>
    </motion.header>
  )
}

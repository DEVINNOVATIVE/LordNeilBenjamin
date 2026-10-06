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
    <motion.header initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} className="absolute inset-x-0 top-0 z-30 px-5 py-5 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="group flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
          <span className="grid size-8 place-items-center rounded-full border border-white/45 text-[9px] transition group-hover:border-[var(--gold)] group-hover:text-[var(--gold)]">NB</span>
          <span className="hidden sm:inline">Lord Neil Benjamin</span>
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-1 rounded-full border border-white/20 bg-black/15 p-1 text-[10px] uppercase tracking-[0.16em] backdrop-blur-md">
          {links.map((link) => (
            <Link key={link.key} href={link.href} className={`rounded-full px-3 py-2 transition sm:px-4 ${active === link.key ? 'bg-white text-[var(--ink)]' : 'text-white/70 hover:text-white'}`}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}

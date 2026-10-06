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
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="absolute inset-x-0 top-0 z-30 px-4 py-4 sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-black/25 px-4 py-2.5 shadow-[0_8px_40px_rgba(0,0,0,.22)] backdrop-blur-2xl sm:px-6">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
          <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/40 bg-white/8 text-[9px] transition group-hover:border-[var(--gold)] group-hover:text-[var(--gold)]">NB</span>
          <span className="hidden sm:inline">Lord Neil Benjamin</span>
        </Link>

        {/* Center nav */}
        <nav aria-label="Primary navigation" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full border border-white/12 bg-white/8 p-1 text-[10px] uppercase tracking-[0.16em]">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`rounded-full px-4 py-2 transition ${
                active === link.key
                  ? 'bg-white text-[var(--ink)] shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right — subtle tagline */}
        <div className="hidden items-center gap-2 text-[9px] uppercase tracking-[.2em] text-white/40 lg:flex">
          <span className="size-1.5 rounded-full bg-[var(--gold)]" />
          Purpose in motion
        </div>
      </div>
    </motion.header>
  )
}

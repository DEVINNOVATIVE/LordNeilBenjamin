'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'

type SiteHeaderProps = { active?: 'home' | 'about' | 'work' | 'mission' | 'paradise' | 'blog' }

const links = [
  { href: '/', label: 'Home', key: 'home' as const },
  { href: '/about', label: 'About', key: 'about' as const },
  { href: '/work', label: 'Work', key: 'work' as const },
  { href: '/mission', label: 'Mission', key: 'mission' as const },
  { href: '/blog', label: 'Blog', key: 'blog' as const },
]

export function SiteHeader({ active = 'home' }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="absolute inset-x-0 top-0 z-50 px-4 py-4 sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/25 bg-[#101b18]/75 px-3 py-2 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-4">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3 text-white">

          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)] transition sm:text-[11px] sm:tracking-[0.22em]">Lord Neil Benjamin</span>
        </Link>

        {/* Center nav */}
        <nav aria-label="Primary navigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-[10px] uppercase tracking-[0.2em] lg:flex">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`relative rounded-full px-3 py-2 transition ${
                active === link.key
                  ? 'bg-white/10 text-white after:absolute after:inset-x-3 after:bottom-0.5 after:h-px after:bg-[var(--gold)]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="#story" className="hidden rounded-full bg-[var(--gold)] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[.16em] text-[var(--ink)] transition hover:bg-white sm:inline-flex">
            Explore the story
          </Link>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-10 place-items-center rounded-full border border-white/25 bg-white/5 text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)] lg:hidden"
          >
            <span className="text-lg leading-none">{menuOpen ? '×' : '≡'}</span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="mx-auto mt-3 max-w-7xl border border-white/15 bg-[var(--ink)]/90 p-2 backdrop-blur-xl lg:hidden">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 text-[11px] uppercase tracking-[.18em] transition ${active === link.key ? 'text-[var(--gold)]' : 'text-white/70 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </motion.header>
  )
}

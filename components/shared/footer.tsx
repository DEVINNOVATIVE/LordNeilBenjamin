import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] px-5 py-14 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.7fr_1fr_1fr] md:gap-8">
        <div>
          <p className="font-serif text-4xl tracking-tight">The long view.</p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/55">Enterprise, philanthropy, and ideas for a more connected world.</p>
        </div>
        <div>
          <p className="eyebrow text-[var(--gold)]">Explore</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/65"><Link href="/" className="transition hover:text-white">Home</Link><Link href="/about" className="transition hover:text-white">About</Link><Link href="/blog" className="transition hover:text-white">Journal</Link></div>
        </div>
        <div>
          <p className="eyebrow text-[var(--gold)]">Connect</p>
          <p className="mt-5 text-sm leading-7 text-white/65">London · Nassau · West Africa<br />hello@lordneilbenjamin.com</p>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-5 text-[10px] uppercase tracking-[.18em] text-white/40 sm:flex-row sm:justify-between"><span>© 2026 Lord Neil Benjamin</span><span>Built for what&apos;s next</span></div>
    </footer>
  )
}

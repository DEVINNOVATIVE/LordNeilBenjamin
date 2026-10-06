import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] px-5 pt-24 pb-10 text-white sm:px-8 lg:px-12 lg:pt-36">
      <div className="mx-auto max-w-7xl">

        {/* Top — large serif tagline */}
        <div className="flex flex-col gap-10 border-b border-white/15 pb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-[var(--gold)]">Lord Neil Benjamin Gibson</p>
            <h2 className="mt-5 max-w-md font-serif text-6xl leading-[.86] tracking-[-.05em] sm:text-8xl">
              The long<br /><em className="text-[var(--gold)]">view.</em>
            </h2>
            <p className="mt-6 max-w-sm text-[14px] leading-7 text-white/50">
              Enterprise, philanthropy, and ideas for a more connected world.
            </p>
          </div>

          {/* Newsletter / CTA hint */}
          <div className="max-w-xs border-l border-[var(--gold)]/50 pl-5">
            <p className="text-[11px] uppercase tracking-[.2em] text-white/40">Stay in touch</p>
            <p className="mt-3 text-[14px] leading-6 text-white/55">
              Reach out directly:<br />
              <a href="mailto:hello@lordneilbenjamin.com" className="text-[var(--gold)] transition hover:text-white">
                hello@lordneilbenjamin.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom grid */}
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          <div>
            <p className="eyebrow text-[var(--gold)]">Explore</p>
            <div className="mt-5 flex flex-col gap-3 text-[14px] text-white/55">
              <Link href="/" className="transition hover:text-white">Home</Link>
              <Link href="/about" className="transition hover:text-white">About</Link>
              <Link href="/blog" className="transition hover:text-white">Journal</Link>
            </div>
          </div>
          <div>
            <p className="eyebrow text-[var(--gold)]">Locations</p>
            <div className="mt-5 flex flex-col gap-2 text-[14px] text-white/55">
              <span>London, United Kingdom</span>
              <span>Nassau, The Bahamas</span>
              <span>West Africa</span>
            </div>
          </div>
          <div>
            <p className="eyebrow text-[var(--gold)]">Mission</p>
            <p className="mt-5 text-[14px] leading-7 text-white/55">
              Building bridges between ambition and lasting impact — across enterprise, philanthropy, and legacy.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[.18em] text-white/30 sm:flex-row sm:justify-between">
          <span>© 2026 Lord Neil Benjamin Gibson. All rights reserved.</span>
          <span>Built for what's next</span>
        </div>
      </div>
    </footer>
  )
}

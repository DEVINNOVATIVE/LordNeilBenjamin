import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

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
              <a href="mailto:support@lordneilbenjamingibson.com" className="text-[var(--gold)] transition hover:text-white">
                support@lordneilbenjamingibson.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom grid */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow text-[var(--gold)]">Explore</p>
            <div className="mt-5 flex flex-col gap-3 text-[14px] text-white/55">
              <Link href="/" className="transition hover:text-white">Home</Link>
              <Link href="/about" className="transition hover:text-white">About</Link>
              <Link href="/work" className="transition hover:text-white">Work</Link>
              <Link href="/mission" className="transition hover:text-white">Mission</Link>
              <Link href="/paradise" className="transition hover:text-white">Paradise</Link>
              <Link href="/blog" className="transition hover:text-white">Blog</Link>
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
            <p className="eyebrow text-[var(--gold)]">Contact Info</p>
            <div className="mt-5 flex flex-col gap-4 text-[14px] leading-6 text-white/70">
              <a
                href="tel:+18185750663"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Phone aria-hidden="true" className="mt-1 size-4 shrink-0 text-[var(--gold)]" />
                <span>+1 818 575 0663</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-[var(--gold)]" />
                <address className="not-italic">
                  Jessups, Jessups Estate, P.O. Box 590,
                  <br />
                  Nevis St Kitts.
                </address>
              </div>
              <a
                href="mailto:support@lordneilbenjamingibson.com"
                className="flex items-start gap-3 break-words transition hover:text-white"
              >
                <Mail aria-hidden="true" className="mt-1 size-4 shrink-0 text-[var(--gold)]" />
                <span>support@lordneilbenjamingibson.com</span>
              </a>
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

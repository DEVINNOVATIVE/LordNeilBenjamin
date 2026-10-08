import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { SiteHeader } from '@/components/shared/site-header'
import { ParadiseProject } from './paradise-project'

export function ParadiseDetailPage() {
  return (
    <>
      <header className="relative overflow-hidden bg-[var(--ink)] text-white">
        <SiteHeader active="about" />
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-40 sm:px-8 lg:px-12 lg:pb-24">
          <Link href="/about" className="eyebrow text-white/50 transition hover:text-[var(--gold)]">← Back to About</Link>
          <p className="eyebrow mt-14 text-[var(--gold)]">SNH Inc. Bahamas · Project detail</p>
          <h1 className="mt-6 max-w-5xl font-serif text-[clamp(3.8rem,9vw,8rem)] leading-[.84] tracking-[-.06em]">A city built<br /><em className="text-[var(--gold)]">to move.</em></h1>
          <p className="mt-9 max-w-2xl text-base leading-8 text-white/65">A complete vision for modular homes, renewable energy, smart mobility, and community life in The Bahamas.</p>
        </div>
      </header>
      <main className="bg-[var(--paper)]">
        <ParadiseProject initiallyOpen />
      </main>
      <Footer />
    </>
  )
}

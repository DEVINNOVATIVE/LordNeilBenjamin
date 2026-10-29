import { ArrowUpRight, Globe2, MapPin } from 'lucide-react'
import { MotionReveal, MotionTag } from '@/components/shared/motion-reveal'

const mapImage = '/assets/east-african-countries-2.png'

const stats = [
  { value: '10', label: 'Markets in view' },
  { value: '3', label: 'Continents' },
  { value: '01', label: 'Shared direction' },
  { value: '5+', label: 'Years of impact' },
]

export function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--ink)] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="pointer-events-none absolute -left-40 top-1/4 size-[34rem] rounded-full bg-[var(--gold)]/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[30rem] rounded-full bg-emerald-300/10 blur-[120px]" />

      <MotionReveal className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 border-b border-white/15 pb-8 sm:pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <MotionTag className="eyebrow text-[var(--gold)]">The wider view</MotionTag>
            <p className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[.2em] text-white/45">
              <Globe2 className="size-3.5 text-[var(--gold)]" />
              Ideas with a global point of view
            </p>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/55 lg:mb-1">
            From The Bahamas across West Africa and beyond, the work is grounded in connection — people, places, and the possibilities between them.
          </p>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <h2 className="max-w-xl font-serif text-5xl leading-[.88] tracking-[-.055em] sm:text-7xl lg:text-[6.5rem]">
              Ideas travel.
              <br />
              <em className="font-normal text-[var(--gold)]">Impact stays.</em>
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-16 bg-[var(--gold)]" />
              <span className="text-[10px] uppercase tracking-[.22em] text-white/40">Connected by purpose</span>
            </div>

            <div className="mt-12 grid grid-cols-2 border-t border-white/15 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border-b border-white/15 px-3 py-5 first:pl-0 sm:border-b-0 sm:border-r sm:px-4 sm:first:pl-0 sm:last:border-r-0 lg:border-b lg:px-3 lg:first:pl-0 xl:border-b-0">
                  <p className="font-serif text-4xl text-[var(--gold)] sm:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-[10px] font-medium uppercase leading-4 tracking-[.16em] text-white/45">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-[var(--gold)]/20 sm:-inset-6" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-white p-2 shadow-[0_30px_90px_rgba(0,0,0,.3)] sm:p-3">
              <div className="relative overflow-hidden rounded-[1rem] bg-[var(--sand)]">
                <img
                  src={mapImage}
                  alt="Map showing West African markets"
                  className="aspect-[1.15] w-full object-cover grayscale-[.15] contrast-[.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--ink)]/25 via-transparent to-[var(--gold)]/20 mix-blend-multiply" />
                <div className="absolute left-[27%] top-[35%] flex items-center gap-2">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--gold)] opacity-75" />
                    <span className="relative inline-flex size-3 rounded-full border-2 border-white bg-[var(--gold)]" />
                  </span>
                  <span className="rounded-full bg-[var(--ink)]/85 px-3 py-1 text-[9px] font-semibold uppercase tracking-[.18em] text-white backdrop-blur-md">West Africa</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-2 pb-1 pt-4 sm:flex-row sm:items-center sm:justify-between sm:px-3">
                <div className="flex items-center gap-2">
                  <MapPin className="size-3.5 text-[var(--gold-deep)]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-[var(--ink)]">West Africa · In focus</p>
                </div>
                <span className="text-[10px] uppercase tracking-[.18em] text-[var(--muted-ink)]">A wider view ↗</span>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-white/15 bg-[var(--gold)] px-5 py-4 text-[var(--ink)] shadow-xl sm:block lg:-right-8">
              <p className="text-[9px] font-semibold uppercase tracking-[.2em]">The next horizon</p>
              <p className="mt-1 font-serif text-xl">Beyond borders.</p>
              <ArrowUpRight className="absolute right-3 top-3 size-3.5" />
            </div>
          </div>
        </div>
      </MotionReveal>
    </section>
  )
}

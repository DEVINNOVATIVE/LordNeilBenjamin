const mapImage = './assets/east-african-countries-2.png'

const stats = [
  { value: '10', label: 'Markets in view' },
  { value: '3', label: 'Continents' },
  { value: '01', label: 'Shared direction' },
  { value: '5+', label: 'Years of impact' },
]

export function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--sand)] px-5 py-24 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">

        {/* Top label */}
        <p className="eyebrow text-[var(--gold-deep)]">The wider view</p>

        {/* Two-col layout */}
        <div className="mt-8 grid items-start gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">

          {/* Left */}
          <div>
            <h2 className="max-w-xl font-serif text-5xl leading-[.9] tracking-[-.055em] text-[var(--ink)] sm:text-7xl">
              Ideas travel.<br />Impact stays.
            </h2>
            <div className="mt-6 h-px w-16 bg-[var(--gold)]" />
            <p className="mt-8 max-w-md text-[15px] leading-8 text-[var(--muted-ink)]">
              From The Bahamas across West Africa and beyond, the work is grounded in connection — people, places, and the possibilities between them.
            </p>

            {/* Stat grid */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="border-t border-black/15 py-5">
                  <p className="font-serif text-4xl text-[var(--ink)]">{s.value}</p>
                  <p className="eyebrow mt-2 text-[var(--muted-ink)]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — map */}
          <div className="relative">
            <div className="overflow-hidden border border-black/10 bg-white shadow-[0_24px_70px_rgba(18,33,28,.14)]">
              <img
                src={mapImage}
                alt="Map showing West African markets"
                className="h-auto w-full"
              />
              <div className="border-t border-black/8 px-5 py-4">
                <p className="text-[10px] uppercase tracking-[.2em] text-[var(--muted-ink)]">
                  West Africa · In focus
                </p>
              </div>
            </div>
            {/* Accent block */}
            <div className="absolute -right-4 -top-4 size-16 rounded-full border border-[var(--gold)] bg-[var(--sand)]" />
          </div>
        </div>
      </div>
    </section>
  )
}

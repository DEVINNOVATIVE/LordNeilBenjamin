import { MotionReveal, MotionTag } from './motion-reveal'

export function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <MotionReveal className="mb-10">
      <MotionTag className={`eyebrow ${light ? 'text-[var(--gold)]' : 'text-[var(--gold-deep)]'}`}>{eyebrow}</MotionTag>
      <h2 className={`mt-4 max-w-3xl font-serif text-5xl leading-[.92] tracking-[-.045em] sm:text-7xl ${light ? 'text-white' : 'text-[var(--ink)]'}`}>{title}</h2>
    </MotionReveal>
  )
}

import Link from 'next/link'
import { SectionHeading } from '@/components/shared/section-heading'

const posts = [
  { title: 'The quiet power of a long view', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bahamas-jjLXXo7pomxRIWXqqWOewqlMBDZih2.jpg' },
  { title: 'Building bridges across borders', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-20191021-wa0015%20%281%29-7vj5mSHble7tL9auwwio5hJ1swTZZy.jpg' },
  { title: 'What does progress really mean?', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lord-Neil-Gibson-and-Erwin-Contreras%20%281%29-5aV1UIGgH3a1YEvlBwRqe9jWHIk7zu.png' },
]

export function JournalPreview() {
  return <section className="bg-[var(--paper)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
    <div className="mx-auto max-w-7xl"><div className="flex items-end justify-between"><SectionHeading eyebrow="From the journal" title="Notes for the road ahead." />
  <Link href="/blog" className="mb-10 hidden rounded-full border border-black/10 px-4 py-2 text-xs uppercase tracking-[.18em] transition hover:bg-[var(--sand)] md:block">View all ↗</Link></div><div className="grid gap-4 md:grid-cols-3">{posts.map((post, index) => <Link href="/blog" key={post.title} className="group overflow-hidden rounded-2xl border border-black/10 bg-white/60 transition hover:-translate-y-1 hover:shadow-xl"><div className="aspect-[1.35] overflow-hidden"><img src={post.image} alt="" className="h-full w-full object-cover grayscale-[.12] transition duration-700 group-hover:scale-105" /></div><div className="p-6"><div className="flex justify-between text-[10px] uppercase tracking-[.18em] text-[var(--gold-deep)]"><span>0{index + 1} · Journal</span><span>2026</span></div><h3 className="mt-10 max-w-xs font-serif text-3xl leading-tight text-[var(--ink)] transition-colors group-hover:text-[var(--gold-deep)]">{post.title}</h3><p className="mt-7 text-xs uppercase tracking-[.18em] text-[var(--muted-ink)]">Read story →</p></div></Link>)}</div></div></section>
}

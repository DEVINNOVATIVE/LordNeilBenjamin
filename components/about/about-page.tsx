// import Link from 'next/link'
// import { Footer } from '@/components/shared/footer'
// import { PageHero } from '@/components/shared/page-hero'
// import { SectionHeading } from '@/components/shared/section-heading'

// const portraitImage = '/assets/lord-neil-benjamin.jpg'
// const teamImage = '/assets/bahamas.jpg'
// const partnershipImage = '/assets/about-partnership.png'
// const historyImage = '/assets/Lord-Neil-Gibson-and-Erwin-Contreras (1).png'

// export function AboutPage() {
//   return (
//     <>
//       <PageHero
//         active="about"
//         eyebrow="The story"
//         title={
//           <>
//             Built with<br />
//             <em className="text-[var(--gold)]">purpose.</em>
//           </>
//         }
//         identity="A personal history shaped by place"
//         subtitle="Partnership, public service, and the responsibility to build what comes next."
//         primaryAction={{ href: '/paradise', label: 'Explore paradise ↗' }}
//         secondaryAction={{ href: '/blog', label: 'Read the blog' }}
//         sideLabel="The long view"
//         sideValue="Purpose · Progress · People"
//       />

//       <main className="bg-[var(--paper)]">
//         <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-28">
//           <div className="relative">
//             <div className="overflow-hidden rounded-[2rem] bg-[var(--sand)] shadow-[0_24px_60px_rgba(18,33,28,.12)]">
//               <img src={portraitImage} alt="Lord Neil Benjamin" className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-[1.03]" />
//             </div>
//             <div className="absolute -bottom-5 -right-2 rounded-full bg-[var(--gold)] px-5 py-8 text-center text-[10px] font-semibold uppercase tracking-[.14em] text-[var(--ink)] shadow-lg sm:-right-4">
//               The
//               <br />
//               long
//               <br />
//               view
//             </div>
//           </div>
//           <div className="lg:pt-8">
//             <SectionHeading eyebrow="About me" title="Here are a few things about me." />
//             <p className="max-w-xl text-base leading-8 text-[var(--muted-ink)]">
//               Oftentimes, successful public figures become skewed by the opinions of others. The truth is, beyond his work with international governments, within the financial sector, and in the humanitarian realm, Lord Neil Benjamin Gibson is, simply put, a good man striving to make a positive difference in this world by using his talents to create constructive change.
//             </p>
//             <ul className="mt-8 max-w-xl space-y-5 text-base leading-8 text-[var(--muted-ink)]">
//               <li className="border-l-2 border-[var(--gold)] pl-5">
//                 <strong className="text-[var(--ink)]">Serving as an ambassador.</strong> Named “Ambassador at Large” for West Africa, Lord Neil Benjamin Gibson has dedicated time and energy to collecting, packing, and shipping supplies — including books, clothing, and computers — into West Africa through local partnerships.
//               </li>
//               <li className="border-l-2 border-[var(--gold)] pl-5">
//                 The question “Who is Lord Neil Benjamin Gibson?” may seem straightforward. He is a humanitarian knowledgeable about finance, ready and willing to devote his time and energy to helping make the world a better place.
//               </li>
//             </ul>
//           </div>
//         </section>

//         <section className="bg-[var(--sand)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
//           <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.9fr]">
//             <div>
//               <p className="eyebrow text-[var(--gold-deep)]">SNH Inc. Bahamas</p>
//               <h2 className="mt-4 max-w-xl font-serif text-5xl leading-[.92] tracking-[-.04em] text-[var(--ink)] sm:text-7xl">
//                 Are you ready for paradise?
//               </h2>
//               <p className="mt-7 max-w-md text-sm font-semibold uppercase tracking-[.16em] text-[var(--gold-deep)]">Who we are</p>
//               <p className="mt-4 max-w-md text-base leading-8 text-[var(--muted-ink)]">
//                 Through our management teams, we straddle several synergistic business sectors that enable us to achieve superior financial results while improving the economic and natural environments, as well as the safety and security of our communities.
//               </p>
//               <p className="mt-5 max-w-md text-base leading-8 text-[var(--muted-ink)]">
//                 Our primary goal is to improve the social, economic, physical, and aesthetic value of a given project — in this case, Bahamas development — through a strategic plan focused on responsible land use and new business and community job opportunities over a five-year period.
//               </p>
//               <div className="mt-8 grid max-w-lg gap-3 sm:grid-cols-2">
//                 <div className="rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white">
//                   <p className="font-serif text-3xl text-[var(--ink)]">01</p>
//                   <p className="mt-2 text-xs uppercase tracking-[.16em] text-[var(--muted-ink)]">Develop open land responsibly</p>
//                 </div>
//                 <div className="rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white">
//                   <p className="font-serif text-3xl text-[var(--ink)]">02</p>
//                   <p className="mt-2 text-xs uppercase tracking-[.16em] text-[var(--muted-ink)]">Create opportunity</p>
//                 </div>
//               </div>
//               <Link href="/paradise" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-7 py-3.5 text-xs font-semibold uppercase tracking-[.18em] text-white transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(18,33,28,.25)]">
//                 Discover Paradise <span>↗</span>
//               </Link>
//             </div>
//             <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(18,33,28,.14)]">
//               <img src={teamImage} alt="A partnership meeting" className="aspect-[4/5] w-full object-cover grayscale-[.1] transition duration-700 hover:scale-[1.03] lg:aspect-[3/4]" />
//             </div>
//           </div>
//         </section>

//         <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-12 lg:py-28">
//           <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(18,33,28,.12)]">
//             <img src={partnershipImage} alt="Lord Neil Benjamin with business partners" className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.03]" />
//           </div>
//           <div className="lg:py-8">
//             <p className="eyebrow text-[var(--gold-deep)]">The history of Lord Neil Benjamin Gibson</p>
//             <h2 className="mt-4 max-w-xl font-serif text-5xl leading-[.92] tracking-[-.04em] text-[var(--ink)] sm:text-7xl">A public story, still unfolding.</h2>
//             <p className="mt-7 max-w-xl text-base leading-8 text-[var(--muted-ink)]">
//               Lord Neil Benjamin Gibson, Minister of Trade and Investment Erwin Contreras, and Ralph Huang have been discussed together in public reporting and social media around investment and political activity in Belize.
//             </p>
//             <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted-ink)]">
//               Accounts of those events differ, and public commentary has included questions about business activity, political support, and regulatory decisions. This section records that context as attributed public discussion, not as an independent finding of fact.
//             </p>
//             <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted-ink)]">
//               The broader lesson is a reminder that ambitious work carries public responsibility: clear partnerships, transparent communication, and constructive service matter as much as the vision itself.
//             </p>
//             <p className="mt-7 text-xs uppercase tracking-[.16em] text-[var(--muted-ink)]">Context provided for editorial history · Please verify claims independently.</p>
//           </div>
//         </section>

//         <section className="bg-[var(--ink)] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
//           <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
//             <div className="rounded-[2rem] border border-white/10 bg-white/[.06] p-3 shadow-[0_24px_60px_rgba(0,0,0,.2)]">
//               <img
//                 src={historyImage}
//                 alt="Lord Neil Benjamin Gibson with Erwin Contreras"
//                 className="mx-auto h-auto max-h-[360px] w-full object-contain sm:max-h-[440px] lg:max-h-[500px]"
//               />
//               <p className="px-2 pb-1 pt-3 text-[10px] uppercase tracking-[.14em] text-white/60">Historical image from the supplied archive</p>
//             </div>
//             <div>
//               <p className="eyebrow text-[var(--gold)]">Historical context</p>
//               <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[.94] tracking-[-.04em] sm:text-7xl">The history of Lord Neil Benjamin Gibson</h2>
//               <blockquote className="mt-8 rounded-r-2xl border-l-2 border-[var(--gold)] bg-white/[.04] py-5 pl-6 pr-5 text-base leading-8 text-white/80 sm:pl-7">
//                 <p>
//                   Lord Neil Benjamin Gibson, Minister of Trade and Investment Erwin Contreras and novice U.D.P. politician Ralph Huang…those three names have dominated social media in recent weeks, intensifying after Huang was elected U.D.P. Standard Bearer in Cayo South.
//                 </p>
//                 <p className="mt-5">
//                   By all accounts, at least on the internet, Gibson is a fraud posing as a big time investor. By Minister Contreras’ own assertion, Gibson and Huang are valued friends of his, and important investors in any number of projects in Belize. Huang’s political run in Cayo South was financed in large part by Lord Gibson. It’s a complicated, messy triangle – we say messy because even when the Central Bank investigated Gibson’s companies and declared that they could not operate in Belize, Minister of Trade and Investment Erwin Contreras intervened to support and defend Gibson.
//                 </p>
//                 <p className="mt-5">
//                   With the continuous outcry in the social media, we felt that it constituted a pertinent concern, and so it was brought up to the PM at the conference today. Reporter “In terms of Lord Neil Benjamin Gibson. Since Mister Ralph Huang won his convention, that name has come up as having put quite a bit of money into his campaign. He admitted it. He spoke to Love FM and he said, he admitted.”
//                 </p>
//               </blockquote>
//               <p className="mt-8 max-w-2xl text-xs uppercase leading-6 tracking-[.12em] text-white/55">
//                 This is a historical excerpt supplied for archival context. The allegations and statements above are attributed to the original material and have not been independently verified here.
//               </p>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   )
// }
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowUpRight,
  ShieldCheck,
  Globe2,
  FileText,
  Maximize2,
  X,
  Compass,
  Sparkles,
  ChevronRight,
  Quote
} from 'lucide-react'
import { Footer } from '@/components/shared/footer'
import { PageHero } from '@/components/shared/page-hero'

// Fallback high-res imagery if local assets are missing
const portraitImage = '/assets/lord-neil-benjamin.jpg'
const teamImage = '/assets/bahamas.jpg'
const partnershipImage = '/assets/about-partnership.png'
const historyImage = '/assets/Lord-Neil-Gibson-and-Erwin-Contreras (1).png'

const fallbackImages = {
  portrait: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
  team: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=80',
  partnership: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1400&q=80',
  history: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1400&q=80',
}

interface SmartImageProps {
  src: string
  fallback: string
  alt: string
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
  onPreview?: () => void
}

function SmartImage({ src, fallback, alt, fill, className = '', priority, sizes, onPreview }: SmartImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="group/img relative h-full w-full overflow-hidden">
      <Image
        src={currentSrc}
        alt={alt}
        fill={fill}
        priority={priority}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        onError={() => setCurrentSrc(fallback)}
        onLoad={() => setLoaded(true)}
        className={`transition-all duration-700 ease-out group-hover/img:scale-105 ${
          loaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
        } ${className}`}
      />
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-stone-200 via-stone-100 to-stone-200" />
      )}
      {onPreview && (
        <button
          onClick={onPreview}
          aria-label="Enlarge image"
          className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all duration-300 opacity-0 group-hover/img:opacity-100 hover:scale-110 hover:bg-black/90"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

export function AboutPage() {
  const [activeTab, setActiveTab] = useState<'statement' | 'timeline' | 'governance'>('statement')
  const [previewModal, setPreviewModal] = useState<{ src: string; caption: string } | null>(null)

  const openPreview = (src: string, caption: string) => {
    setPreviewModal({ src, caption })
  }

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-[#16201b] selection:bg-[#d4af37]/30 selection:text-[#16201b]">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {previewModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setPreviewModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-[#101915] p-2 text-white shadow-2xl"
            >
              <button
                onClick={() => setPreviewModal(null)}
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative aspect-[4/3] w-full min-w-[320px] max-w-[800px] overflow-hidden rounded-xl sm:aspect-[16/10]">
                <Image
                  src={previewModal.src}
                  alt={previewModal.caption}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="p-4 text-center text-sm font-medium tracking-wide text-stone-300">
                {previewModal.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Header */}
      <PageHero
        active="about"
        eyebrow="The Chronicle"
        title={
          <>
            Forged in visionary<br />
            <em className="font-serif italic text-[#c59d3f]">purpose & duty.</em>
          </>
        }
        identity="A personal trajectory shaped by enterprise and public life"
        subtitle="Global investments, diplomatic corridors, and the delicate duty of stewarding sustainable futures."
        primaryAction={{ href: '/paradise', label: 'Explore the vision ↗' }}
        secondaryAction={{ href: '/blog', label: 'Archival dispatches' }}
        sideLabel="Core doctrine"
        sideValue="Integrity · Sovereignty · Legacy"
      />

      <main>
        {/* Section 1: Portrait & Biographical Ethos */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            
            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative lg:col-span-5"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-stone-100 p-2 shadow-[0_24px_64px_rgba(22,32,27,0.14)] ring-1 ring-black/5">
                <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                  <SmartImage
                    src={portraitImage}
                    fallback={fallbackImages.portrait}
                    alt="Lord Neil Benjamin Gibson"
                    fill
                    priority
                    className="object-cover"
                    onPreview={() => openPreview(portraitImage, 'Lord Neil Benjamin Gibson')}
                  />
                </div>
              </div>

              {/* Orbital Stamp Badge */}
              <div className="absolute -bottom-6 -right-3 flex h-28 w-28 items-center justify-center rounded-full bg-[#c59d3f] p-3 text-center text-xs font-semibold uppercase tracking-widest text-[#0e1714] shadow-xl sm:-right-6 sm:h-32 sm:w-32">
                <svg className="absolute inset-0 h-full w-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
                  <path
                    id="stampPath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[9.2px] font-bold tracking-[0.2em] fill-[#0e1714]">
                    <textPath href="#stampPath">THE LONG VIEW • LEADERSHIP •</textPath>
                  </text>
                </svg>
                <Sparkles className="h-5 w-5 text-[#0e1714]" />
              </div>
            </motion.div>

            {/* Narrative Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 lg:pl-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c59d3f]/40 bg-[#c59d3f]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8c6c21]">
                <Globe2 className="h-3.5 w-3.5" /> Identity & Mission
              </div>

              <h2 className="mt-5 font-serif text-4xl font-normal tracking-tight text-[#111c17] sm:text-5xl lg:text-6xl">
                Distinguishing impact from the noise of public debate.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-[#4b5952]">
                Oftentimes, successful public figures become skewed by the polarized tides of public commentary. Beyond his work with international governments, sovereign advisory groups, and the financial sector, Lord Neil Benjamin Gibson is guided by a singular mandate: mobilizing resources where opportunity meets acute humanitarian need.
              </p>

              <div className="mt-8 space-y-4">
                <div className="group rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm transition-all hover:bg-white hover:shadow-md">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c59d3f]/15 text-[#8c6c21]">
                      <Compass className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#111c17]">Ambassador at Large — West Africa</h4>
                      <p className="mt-1 text-sm leading-relaxed text-[#4b5952]">
                        Spearheading tangible aid shipments across educational initiatives—facilitating shipments of books, computing infrastructure, and critical relief supplies via entrenched regional partnerships.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm transition-all hover:bg-white hover:shadow-md">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#16201b]/10 text-[#16201b]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#111c17]">High-Yield Philanthropy & Infrastructure</h4>
                      <p className="mt-1 text-sm leading-relaxed text-[#4b5952]">
                        Fusing structured project finance with civic accountability to ensure emergent economies build equitable physical and financial conduits for future generations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Bahamas Initiative */}
        <section className="relative overflow-hidden bg-[#f3eee5] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-6"
              >
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8c6c21]">
                  SNH Inc. Bahamas
                </span>
                <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-[#121c17] sm:text-6xl">
                  Are you prepared for paradise?
                </h2>
                
                <p className="mt-6 text-base leading-relaxed text-[#44524a]">
                  Through seasoned management teams, SNH Inc. straddles multi-tiered business sectors designed to yield balanced returns while bolstering natural environments, local safety, and enduring community security.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#44524a]">
                  Our primary goal is elevating the social, ecological, and economic fabric of Bahamas development via a rigorous five-year plan focused on measured land use and sustainable workforce opportunities.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <span className="font-serif text-3xl font-light text-[#8c6c21]">01</span>
                    <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#121c17]">Responsible Land Use</h3>
                    <p className="mt-2 text-xs text-[#526259]">Restorative master-planning that protects delicate island biomes.</p>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <span className="font-serif text-3xl font-light text-[#8c6c21]">02</span>
                    <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#121c17]">Economic Enfranchisement</h3>
                    <p className="mt-2 text-xs text-[#526259]">Catalyzing domestic entrepreneurship and skilled career tracks.</p>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href="/paradise"
                    className="inline-flex items-center gap-2 rounded-full bg-[#121d18] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#f3eee5] shadow-lg transition duration-300 hover:bg-[#203129] hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Explore Bahamas Masterplan <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative lg:col-span-6"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-black/10 lg:aspect-[3/4]">
                  <SmartImage
                    src={teamImage}
                    fallback={fallbackImages.team}
                    alt="Bahamas Strategic Summit"
                    fill
                    className="object-cover"
                    onPreview={() => openPreview(teamImage, 'Bahamas Strategic Summit')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/20 p-4 backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white">Bahamas Economic Corridor</p>
                    <p className="text-[11px] text-stone-200">Integrated land preservation & luxury maritime stewardship</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Section 3: Dual Image Showcase / Partnership */}
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-stone-200 shadow-xl ring-1 ring-black/5">
                <SmartImage
                  src={partnershipImage}
                  fallback={fallbackImages.partnership}
                  alt="Diplomatic and business partners"
                  fill
                  className="object-cover"
                  onPreview={() => openPreview(partnershipImage, 'Diplomatic and business summit')}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 lg:pl-6"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8c6c21]">
                Historical Context & Dialogue
              </span>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-tight text-[#111c17] sm:text-5xl">
                A public narrative under independent scrutiny.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#4b5952]">
                <p>
                  Lord Neil Benjamin Gibson, alongside international leaders including former Minister of Trade and Investment Erwin Contreras and Ralph Huang, has frequently been examined in broadcast dispatches and print journalism.
                </p>
                <p>
                  Accounts of cross-border investments often evoke varying interpretations. This archive presents public commentary not as unilateral findings of fact, but as recorded milestones of civic and media engagement.
                </p>
                <p className="font-serif italic text-[#16201b]">
                  Ambitious endeavors inherently demand public accountability; clarity in intention and persistent transparency matter as deeply as the scale of the vision itself.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Section 4: Archival Dossier (Dark Obsidian Mode) */}
        <section className="relative overflow-hidden bg-[#0d1612] px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
          {/* Subtle Ambient Radial Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-full max-w-7xl bg-[radial-gradient(circle_at_center,rgba(197,157,63,0.12)_0,transparent_70%)]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              
              {/* Left Column: Historical Image Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5"
              >
                <div className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-4 shadow-2xl backdrop-blur-xl">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black/40">
                    <SmartImage
                      src={historyImage}
                      fallback={fallbackImages.history}
                      alt="Lord Neil Benjamin Gibson with Erwin Contreras"
                      fill
                      className="object-contain p-2"
                      onPreview={() => openPreview(historyImage, 'Archival Record: Lord Neil Benjamin Gibson with Erwin Contreras')}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between px-2 text-xs uppercase tracking-widest text-stone-400">
                    <span>Archival Registry #042</span>
                    <span className="flex items-center gap-1.5 text-[#c59d3f]">
                      <FileText className="h-3.5 w-3.5" /> Verified Excerpt
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Tabbed Archival Record */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-7"
              >
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c59d3f]">
                  Public Domain Records & Transcripts
                </span>
                
                <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-white sm:text-6xl">
                  The Belize Press & Assembly Record
                </h2>

                {/* Tabs */}
                <div className="mt-8 flex gap-2 border-b border-white/10 pb-4">
                  {(['statement', 'timeline', 'governance'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                        activeTab === tab
                          ? 'text-[#c59d3f]'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      {tab === 'statement' && 'Archival Excerpt'}
                      {tab === 'timeline' && 'Timeline Summary'}
                      {tab === 'governance' && 'Regulatory Scope'}
                      {activeTab === tab && (
                        <motion.div
                          layoutId="activeTabUnderline"
                          className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-[#c59d3f]"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab Contents */}
                <div className="mt-8">
                  {activeTab === 'statement' && (
                    <motion.div
                      key="statement"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur"
                    >
                      <Quote className="h-8 w-8 text-[#c59d3f]/40" />
                      <blockquote className="mt-4 space-y-4 text-sm leading-relaxed text-stone-300 sm:text-base sm:leading-8">
                        <p>
                          “Lord Neil Benjamin Gibson, Minister of Trade and Investment Erwin Contreras, and novice U.D.P. politician Ralph Huang… those three names have dominated social media in recent weeks, intensifying after Huang was elected U.D.P. Standard Bearer in Cayo South.”
                        </p>
                        <p>
                          “By all accounts, at least on the internet, Gibson is a fraud posing as a big time investor. By Minister Contreras’ own assertion, Gibson and Huang are valued friends of his, and important investors in any number of projects in Belize. Huang’s political run in Cayo South was financed in large part by Lord Gibson.”
                        </p>
                        <p className="text-xs italic text-stone-400">
                          — Archival Press Conference, Love FM & Local Correspondents
                        </p>
                      </blockquote>
                    </motion.div>
                  )}

                  {activeTab === 'timeline' && (
                    <motion.div
                      key="timeline"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4 text-sm text-stone-300"
                    >
                      <div className="flex gap-4 border-l border-[#c59d3f]/40 pl-4">
                        <span className="font-mono text-xs text-[#c59d3f]">PHASE I</span>
                        <div>
                          <h4 className="font-semibold text-white">Central American Capital Influx</h4>
                          <p className="text-xs text-stone-400">Initial exploratory memoranda for commercial, energy, and community initiatives.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 border-l border-[#c59d3f]/40 pl-4">
                        <span className="font-mono text-xs text-[#c59d3f]">PHASE II</span>
                        <div>
                          <h4 className="font-semibold text-white">Regulatory Inquiry & Public Forum</h4>
                          <p className="text-xs text-stone-400">Intensive review by local banking commissions accompanied by parliamentary discussions.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 border-l border-[#c59d3f]/40 pl-4">
                        <span className="font-mono text-xs text-[#c59d3f]">PHASE III</span>
                        <div>
                          <h4 className="font-semibold text-white">Public Record Institutionalization</h4>
                          <p className="text-xs text-stone-400">Integration into digital open-access archives for transparent investigative preservation.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'governance' && (
                    <motion.div
                      key="governance"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-2xl bg-white/[0.03] p-6 text-xs leading-relaxed text-stone-400"
                    >
                      <p>
                        <strong>Editorial Disclaimer:</strong> The excerpted statements above represent contemporary media broadcasts and political press conferences held during the Belize general campaign cycles.
                      </p>
                      <p className="mt-3">
                        These accounts are provided strictly for historical contextual integrity. They reflect the multi-faceted friction between private venture capital, political campaigns, and regulatory commissions.
                      </p>
                    </motion.div>
                  )}
                </div>

                <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-wider text-stone-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#c59d3f]" />
                  <span>Curated for transparency · All citations preserved</span>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

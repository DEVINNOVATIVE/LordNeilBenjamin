// // import Link from 'next/link'

// // const journeys = [
// //   {
// //     number: '01',
// //     eyebrow: 'Sport · Cyprus',
// //     title: 'A new chapter in football.',
// //     copy: 'The purchase of a Cyprus football team brings together leadership, community, and a long-term vision for the beautiful game.',
// //     feature: '/assets/crypus_football/c1.jpeg',
// //     gallery: ['/assets/crypus_football/c2.jpeg', '/assets/crypus_football/c4.jpeg', '/assets/crypus_football/c5.jpeg'],
// //     label: 'Cyprus football team',
// //   },
// //   {
// //     number: '02',
// //     eyebrow: 'Enterprise · Hong Kong',
// //     title: 'A presence in the East.',
// //     copy: 'The Hong Kong office extends the journey across borders, creating a new base for relationships, opportunity, and global collaboration.',
// //     feature: '/assets/hong_kong/hk3.jpeg',
// //     gallery: ['/assets/hong_kong/hk1.jpeg', '/assets/hong_kong/hk2.jpeg', '/assets/hong_kong/hk4.jpeg'],
// //     label: 'Hong Kong office',
// //   },
// // ]

// // const posts = [
// //   {
// //     title: 'Lord Gibson Attends Future Blockchain Summit.',
// //     copy: "The largest gathering of Blockchain enthusiasts in the world gathered in Dubai’s World Trade Centre.",
// //     images: [
// //       'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-20191021-wa0015%20%281%29-7vj5mSHble7tL9auwwio5hJ1swTZZy.jpg',
// //       'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/neil-uae-central-C5ilzOgM0oeviCf2oVqkMD8DIM72GQ.jpeg',
// //       'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lord-Neil-Gibson-and-Erwin-Contreras%20%281%29-5aV1UIGgH3a1YEvlBwRqe9jWHIk7zu.png',
// //     ],
// //   },
// //   {
// //     title: 'Building bridges across borders.',
// //     copy: 'When people and places connect with intention, geography stops being a limit and becomes a source of possibility.',
// //     images: [
// //       'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bahamas-jjLXXo7pomxRIWXqqWOewqlMBDZih2.jpg',
// //       '/assets/img-20191021-wa0000 (1).jpg',
// //       '/assets/slider2.jpg',
// //     ],
// //   },
// // ]

// // export function JournalPreview() {
// //   return (
// //     <section className="relative overflow-hidden bg-[var(--paper)] px-5 py-24 sm:px-8 lg:px-12 lg:py-40">
// //       <div className="mx-auto max-w-7xl">
// //         <div className="border-b border-black/10 pb-10">
// //           <p className="eyebrow text-[var(--gold-deep)]">The journey</p>
// //           <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[.88] tracking-[-.055em] text-[var(--ink)] sm:text-7xl">
// //             From bold ideas<br />to places that matter.
// //           </h2>
// //           <p className="mt-6 max-w-md text-[14px] leading-7 text-[var(--muted-ink)]">
// //             Every new address marks more than growth. It is another opportunity to connect people, purpose, and possibility.
// //           </p>
// //         </div>

// //         <div className="mt-12 grid gap-8 lg:grid-cols-2">
// //           {journeys.map((journey) => (
// //             <article key={journey.number} className="group border border-black/10 bg-white p-2.5 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(18,33,28,.12)] sm:p-3">
// //               <div className="grid h-[230px] grid-cols-[1.25fr_.75fr] gap-2.5 sm:h-[270px] sm:gap-3">
// //                 <div className="group/image relative overflow-hidden">
// //                   <img src={journey.feature} alt={journey.label} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover/image:scale-105" />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/90 via-[var(--ink)]/10 to-transparent" />
// //                   <div className="absolute inset-0 flex translate-y-3 flex-col justify-end p-5 opacity-0 transition duration-500 group-hover/image:translate-y-0 group-hover/image:opacity-100">
// //                     <p className="eyebrow text-[var(--gold)]">{journey.eyebrow}</p>
// //                     <h3 className="mt-2 font-serif text-2xl leading-[.95] text-white sm:text-3xl">{journey.title}</h3>
// //                     <p className="mt-3 max-w-sm text-xs leading-5 text-white/75">{journey.copy}</p>
// //                   </div>
// //                   <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[.2em] text-white/75 transition-opacity group-hover/image:opacity-0">{journey.label}</p>
// //                 </div>
// //                 <div className="grid grid-rows-3 gap-3">
// //                   {journey.gallery.map((image) => (
// //                     <div key={image} className="group/thumb relative overflow-hidden">
// //                       <img src={image} alt="" className="h-full w-full object-cover transition duration-700 group-hover/thumb:scale-105" />
// //                       <div className="absolute inset-0 bg-[var(--ink)]/15 opacity-0 transition group-hover/thumb:opacity-100" />
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //               <div className="flex items-center justify-between px-2 pb-2 pt-5 sm:px-4 sm:pb-1">
// //                 <div className="flex items-center justify-between">
// //                   <p className="eyebrow text-[var(--gold-deep)]">{journey.eyebrow}</p>
// //                 </div>
// //                 <span className="font-serif text-2xl text-[var(--gold-deep)]">{journey.number}</span>
// //               </div>
// //             </article>
// //           ))}
// //         </div>

// //         <div className="mt-36 border-t border-black/10 pt-16">
// //           <div className="text-center">
// //             <p className="eyebrow text-[var(--gold-deep)]">From the journal</p>
// //             <h2 className="mt-4 font-sans text-4xl font-semibold uppercase tracking-[.08em] text-[var(--ink)] sm:text-6xl">
// //               Latest posts of Lord
// //             </h2>
// //             <div className="mx-auto mt-7 h-px w-52 bg-[var(--gold)]" />
// //             <p className="mx-auto mt-7 max-w-3xl text-[15px] leading-7 text-[var(--muted-ink)]">
// //               Reflections, milestones, and moments from a life in motion — across enterprise, philanthropy, and the world beyond.
// //             </p>
// //           </div>

// //           <div className="mt-12 space-y-16">
// //             {posts.map((post) => (
// //               <article key={post.title}>
// //                 <div className="mb-7 text-center">
// //                   <h3 className="font-serif text-3xl text-[var(--ink)] sm:text-4xl">{post.title}</h3>
// //                   <p className="mx-auto mt-3 max-w-3xl text-[14px] leading-7 text-[var(--muted-ink)]">{post.copy}</p>
// //                 </div>
// //                 <div className="grid h-[280px] grid-cols-3 gap-1 overflow-hidden sm:h-[390px] lg:h-[470px]">
// //                   {post.images.map((image) => (
// //                     <Link key={image} href="/blog" className="group relative overflow-hidden">
// //                       <img src={image} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
// //                       <span className="absolute bottom-5 right-5 grid size-10 place-items-center rounded-full bg-white/90 text-[var(--ink)] opacity-0 transition group-hover:opacity-100">↗</span>
// //                     </Link>
// //                   ))}
// //                 </div>
// //               </article>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }
// import Link from 'next/link'

// const journeys = [
//   {
//     number: '01',
//     eyebrow: 'Sport · Cyprus',
//     title: 'A new chapter in football.',
//     copy: 'The purchase of a Cyprus football team brings together leadership, community, and a long-term vision for the beautiful game.',
//     feature: '/assets/crypus_football/c1.jpeg',
//     gallery: [
//       '/assets/crypus_football/c2.jpeg',
//       '/assets/crypus_football/c4.jpeg',
//       '/assets/crypus_football/c5.jpeg',
//     ],
//     label: 'Cyprus football team',
//   },
//   {
//     number: '02',
//     eyebrow: 'Enterprise · Hong Kong',
//     title: 'A presence in the East.',
//     copy: 'The Hong Kong office extends the journey across borders, creating a new base for relationships, opportunity, and global collaboration.',
//     feature: '/assets/hong_kong/hk3.jpeg',
//     gallery: [
//       '/assets/hong_kong/hk1.jpeg',
//       '/assets/hong_kong/hk2.jpeg',
//       '/assets/hong_kong/hk4.jpeg',
//     ],
//     label: 'Hong Kong office',
//   },
// ]

// const posts = [
//   {
//     title: 'Lord Gibson Attends Future Blockchain Summit.',
//     copy: "The largest gathering of Blockchain enthusiasts in the world gathered in Dubai’s World Trade Centre.",
//     images: [
//       'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-20191021-wa0015%20%281%29-7vj5mSHble7tL9auwwio5hJ1swTZZy.jpg',
//       'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/neil-uae-central-C5ilzOgM0oeviCf2oVqkMD8DIM72GQ.jpeg',
//       'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lord-Neil-Gibson-and-Erwin-Contreras%20%281%29-5aV1UIGgH3a1YEvlBwRqe9jWHIk7zu.png',
//     ],
//   },
// ]

// export function JournalPreview() {
//   return (
//     <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
//       <div className="mx-auto max-w-7xl">
//         {/* Section Header */}
//         <div className="border-b border-black/10 pb-10">
//           <p className="eyebrow text-[var(--gold-deep)]">The journey</p>
//           <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[.88] tracking-[-.055em] text-[var(--ink)] sm:text-7xl">
//             From bold ideas<br />to places that matter.
//           </h2>
//           <p className="mt-6 max-w-md text-[14px] leading-7 text-[var(--muted-ink)]">
//             Every new address marks more than growth. It is another opportunity to connect people, purpose, and possibility.
//           </p>
//         </div>

//         {/* Journeys (Cyprus Football & Hong Kong) */}
//         <div className="mt-12 grid gap-8 lg:grid-cols-2">
//           {journeys.map((journey) => (
//             <article 
//               key={journey.number} 
//               className="group border border-black/10 bg-white p-2.5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-3"
//             >
//               {/* Tightened gap between main image and side gallery */}
//               <div className="grid h-[240px] grid-cols-[1.35fr_0.65fr] gap-1.5 sm:h-[290px] sm:gap-2">
                
//                 {/* 1. Main Feature Image */}
//                 <div className="group/image relative h-full w-full overflow-hidden bg-stone-100">
//                   <img 
//                     src={journey.feature} 
//                     alt={journey.label} 
//                     className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover/image:scale-105" 
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/90 via-[var(--ink)]/10 to-transparent" />
//                   <div className="absolute inset-0 flex translate-y-3 flex-col justify-end p-5 opacity-0 transition duration-500 group-hover/image:translate-y-0 group-hover/image:opacity-100">
//                     <p className="eyebrow text-[var(--gold)]">{journey.eyebrow}</p>
//                     <h3 className="mt-2 font-serif text-2xl leading-[.95] text-white sm:text-3xl">{journey.title}</h3>
//                     <p className="mt-3 max-w-sm text-xs leading-5 text-white/75">{journey.copy}</p>
//                   </div>
//                   <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[.2em] text-white/75 transition-opacity group-hover/image:opacity-0">
//                     {journey.label}
//                   </p>
//                 </div>

//                 {/* 2. All 3 Gallery Thumbnails */}
//                 <div className="grid h-full grid-rows-3 gap-1.5 sm:gap-2">
//                   {journey.gallery.map((image, i) => (
//                     <div key={image} className="group/thumb relative h-full w-full overflow-hidden bg-stone-100">
//                       <img 
//                         src={image} 
//                         alt={`${journey.label} ${i + 1}`} 
//                         className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover/thumb:scale-105" 
//                       />
//                       <div className="absolute inset-0 bg-[var(--ink)]/15 opacity-0 transition group-hover/thumb:opacity-100" />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Bottom Info Bar */}
//               <div className="flex items-center justify-between px-2 pb-2 pt-5 sm:px-4 sm:pb-1">
//                 <div>
//                   <p className="eyebrow text-[var(--gold-deep)]">{journey.eyebrow}</p>
//                 </div>
//                 <span className="font-serif text-2xl text-[var(--gold-deep)]">{journey.number}</span>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Latest Posts (Blockchain Summit Only) */}
//         <div className="mt-28 border-t border-black/10 pt-16">
//           <div className="text-center">
//             <p className="eyebrow text-[var(--gold-deep)]">From the journal</p>
//             <h2 className="mt-4 font-sans text-4xl font-semibold uppercase tracking-[.08em] text-[var(--ink)] sm:text-6xl">
//               Latest posts of Lord
//             </h2>
//             <div className="mx-auto mt-6 h-px w-48 bg-[var(--gold)]" />
//             <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-7 text-[var(--muted-ink)]">
//               Reflections, milestones, and moments from a life in motion — across enterprise, philanthropy, and the world beyond.
//             </p>
//           </div>

//           <div className="mt-12">
//             {posts.map((post) => (
//               <article key={post.title}>
//                 <div className="mb-7 text-center">
//                   <h3 className="font-serif text-3xl text-[var(--ink)] sm:text-4xl">{post.title}</h3>
//                   <p className="mx-auto mt-3 max-w-3xl text-[14px] leading-7 text-[var(--muted-ink)]">{post.copy}</p>
//                 </div>
//                 <div className="grid h-[280px] grid-cols-3 gap-2 overflow-hidden sm:h-[380px] lg:h-[440px]">
//                   {post.images.map((image) => (
//                     <Link key={image} href="/blog" className="group relative overflow-hidden bg-stone-100">
//                       <img 
//                         src={image} 
//                         alt={post.title} 
//                         className="h-full w-full object-cover transition duration-700 group-hover:scale-105" 
//                       />
//                       <span className="absolute bottom-5 right-5 grid size-10 place-items-center rounded-full bg-white/90 text-[var(--ink)] opacity-0 transition group-hover:opacity-100 shadow-md">
//                         ↗
//                       </span>
//                     </Link>
//                   ))}
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import { useState } from 'react'
import Link from 'next/link'

const journeys = [
  {
    number: '01',
    eyebrow: 'Sport · Cyprus',
    title: 'A new chapter in football.',
    copy: 'The purchase of a Cyprus football team brings together leadership, community, and a long-term vision for the beautiful game.',
    feature: '/assets/crypus_football/c1.jpeg',
    gallery: [
      '/assets/crypus_football/c2.jpeg',
      '/assets/crypus_football/c4.jpeg',
      '/assets/crypus_football/c5.jpeg',
    ],
    label: 'Cyprus football team',
  },
  {
    number: '02',
    eyebrow: 'Enterprise · Hong Kong',
    title: 'A presence in the East.',
    copy: 'The Hong Kong office extends the journey across borders, creating a new base for relationships, opportunity, and global collaboration.',
    feature: '/assets/hong_kong/hk3.jpeg',
    gallery: [
      '/assets/hong_kong/hk1.jpeg',
      '/assets/hong_kong/hk2.jpeg',
      '/assets/hong_kong/hk4.jpeg',
    ],
    label: 'Hong Kong office',
  },
]

const post = {
  title: 'Lord Gibson Attends Future Blockchain Summit',
  copy: 'The largest gathering of Blockchain enthusiasts in the world gathered in Dubai’s World Trade Centre.',
  images: [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-20191021-wa0015%20%281%29-7vj5mSHble7tL9auwwio5hJ1swTZZy.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/neil-uae-central-C5ilzOgM0oeviCf2oVqkMD8DIM72GQ.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lord-Neil-Gibson-and-Erwin-Contreras%20%281%29-5aV1UIGgH3a1YEvlBwRqe9jWHIk7zu.png',
  ],
}

function JourneyCard({ journey }: { journey: typeof journeys[0] }) {
  const [activeImage, setActiveImage] = useState(journey.feature)
  const allImages = [journey.feature, ...journey.gallery]

  return (
    <article className="flex flex-col justify-between rounded-xl border border-black/10 bg-white p-3 shadow-sm sm:p-4">
      <div className="space-y-2">
        {/* 1. Main Display Image (Top) */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-stone-100">
          <img
            src={activeImage}
            alt={journey.label}
            className="h-full w-full object-cover transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <span className="absolute bottom-2.5 left-3 text-[10px] font-semibold uppercase tracking-widest text-white/95">
            {journey.label}
          </span>
        </div>

        {/* 2. Thumbnails Row (Below) - Hover changes top image */}
        <div className="grid grid-cols-4 gap-2">
          {allImages.map((img, idx) => {
            const isSelected = activeImage === img
            return (
              <button
                key={img}
                type="button"
                onMouseEnter={() => setActiveImage(img)}
                onClick={() => setActiveImage(img)}
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-md bg-stone-100 transition-all ${
                  isSelected
                    ? 'ring-2 ring-[var(--gold-deep)] opacity-100'
                    : 'opacity-65 hover:opacity-100'
                }`}
                aria-label={`Show image ${idx + 1}`}
              >
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            )
          })}
        </div>
      </div>

      {/* Meta Content */}
      <div className="mt-4 border-t border-black/10 pt-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--gold-deep)]">
            {journey.eyebrow}
          </span>
          <span className="font-serif text-xl font-light text-[var(--gold-deep)]">
            {journey.number}
          </span>
        </div>
        <h3 className="mt-1 font-serif text-xl text-[var(--ink)] sm:text-2xl">
          {journey.title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-[var(--muted-ink)] sm:text-sm">
          {journey.copy}
        </p>
      </div>
    </article>
  )
}

export function JournalPreview() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-6xl">
        
        {/* Compact Header */}
        <div className="flex flex-col justify-between border-b border-black/10 pb-6 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gold-deep)]">
              The Journey
            </span>
            <h2 className="mt-2 font-serif text-3xl tracking-tight text-[var(--ink)] sm:text-5xl">
              From bold ideas <span className="italic font-light">to places that matter.</span>
            </h2>
          </div>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-[var(--muted-ink)] sm:text-sm md:mt-0">
            Every address marks another intentional step toward connecting leadership, purpose, and community.
          </p>
        </div>

        {/* Journeys (Cyprus Football & Hong Kong) */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {journeys.map((journey) => (
            <JourneyCard key={journey.number} journey={journey} />
          ))}
        </div>

        {/* Latest Dispatches Section */}
        <div className="mt-14 border-t border-black/10 pt-10">
          <div className="mx-auto max-w-xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gold-deep)]">
              From the Journal
            </span>
            <h3 className="mt-2 font-serif text-2xl tracking-tight text-[var(--ink)] sm:text-3xl">
              {post.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted-ink)] sm:text-sm">
              {post.copy}
            </p>
          </div>

          {/* Clean 3-Column Image Row (No zoom animation) */}
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {post.images.map((src, idx) => (
              <Link
                key={src}
                href="/blog"
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-stone-100 shadow-sm transition hover:shadow-md"
              >
                <img
                  src={src}
                  alt={`${post.title} photo ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                
                <div className="absolute bottom-2.5 right-2.5 flex size-7 items-center justify-center rounded-full bg-white/95 text-[var(--ink)] shadow opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
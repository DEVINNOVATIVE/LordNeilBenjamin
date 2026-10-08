import { Footer } from '@/components/shared/footer'
import { PageHero } from '@/components/shared/page-hero'

const gallery = ['p1.jpeg', 'p2.jpeg', 'p3.jpeg', 'p4.jpeg', 'p5.jpeg', 'p6.jpeg', 'p7.jpeg', 'p8.jpeg', 'p9.jpeg', 'p10.jpeg', 'p11.jpeg', 'p12.jpeg', 'p13.jpeg', 'p14.jpeg', 'p15.jpeg']

export function ParadisePage() {
  return (
    <>
      <PageHero active="about" eyebrow="SNH Inc. Bahamas · Project detail" title={<>Are you ready for<br /><em className="text-[var(--gold)]">paradise?</em></>} identity="A modular, connected community" subtitle="Designed for sustainable living, mobility, and opportunity in The Bahamas." primaryAction={{ href: '#introduction', label: 'Explore the vision ↓' }} secondaryAction={{ href: '/about', label: 'Back to about' }} slides={['/assets/paradise/p1.jpeg', '/assets/paradise/p4.jpeg', '/assets/paradise/p10.jpeg']} sideLabel="The vision" sideValue="Modular · Connected · Human" locations="Homes · Mobility · Community" />

      <main className="bg-[var(--paper)]">
        <section id="introduction" className="mx-auto max-w-4xl px-5 py-24 sm:px-8 lg:py-36">
          <p className="eyebrow text-[var(--gold-deep)]">SNH Inc. Bahamas · Introduction</p>
          <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[.9] tracking-[-.05em] text-[var(--ink)] sm:text-7xl">A city that can grow with its people.</h2>
          <div className="mt-10 space-y-6 text-base leading-8 text-[var(--muted-ink)]">
            <p>Our vision is to build a city composed of modular units that can be readily added to or removed from a framework to meet rising demand, accommodate the social mobility of owners who wish to upgrade their living spaces, and simplify the moving process.</p>
            <p>Each single modular unit is based on a standard 40 ft high cube shipping container which offers 8 ft 10 in of interior height and spans 8-by-40 ft. Units can be combined in a cohesive manner as desired both horizontally and vertically on a piece of land with some constraints to provide the desired living space arrangement for each owner. Double height ceilings could be offered at a premium on a limited basis.</p>
            <p>All units will be off-grid capable through the use of rooftop solar panels or wind turbines and provisioning of their own independent water source.</p>
            <p>For tract home models, a virtual marketplace enables owners to either seek or advertise available space in a particular locale and make arrangements for the moving of entire living spaces. The involved parties could be connected locally or on opposite sides of the country, whereby preexisting infrastructure such as railway or freight transport can be used in these cases.</p>
            <p>The only fixtures that would remain on such a property would be any exterior landscaping and city infrastructure such as supply sources for gas, electric, water, and other utilities, which could be disconnected from and connected to a modular unit by a service specialist with reusable and specially-designed equipment.</p>
            <p>The hassle and cost of open houses would be a thing of the past for homeowners, as prospective movers would visit their destination locale without the need to disrupt the current owner since movers would be retaining their homes and simply executing a change of their surrounding environment.</p>
            <p>We will develop the equipment needed to (1) simplify the “last mile” home transportation process, akin to how the modern forklift has greatly simplified and sped up the process of moving pallets of material within a warehouse, and (2) site these homes to compatible foundational frameworks.</p>
            <p>Units will be designed with both simplicity and robustness in mind to enable their removal and siting within 2 days if within the same locale, the only difference in duration for further distances due to the transport itinerary. Due to the prefabricated nature of its construction, we project that up to 1000 modular units can be installed within one week.</p>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white/60 px-5 py-10 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
            {[['40 ft', 'standard home module'], ['2 days', 'local relocation target'], ['1000', 'units projected per week']].map(([value, label]) => (
              <div key={value} className="flex items-center gap-4 border-l-2 border-[var(--gold)] pl-5">
                <p className="font-serif text-4xl tracking-[-.04em] text-[var(--ink)]">{value}</p>
                <p className="max-w-[130px] text-[10px] font-semibold uppercase leading-5 tracking-[.16em] text-[var(--muted-ink)]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[var(--sand)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow text-[var(--gold-deep)]">Connected living</p>
            <div className="mt-5 grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <h2 className="font-serif text-5xl leading-[.9] tracking-[-.05em] text-[var(--ink)] sm:text-7xl">Mobility, care, and community built in.</h2>
              <div className="space-y-6 text-base leading-8 text-[var(--muted-ink)]">
                <p>Included with each unit is a specialized electric car designed for automated self-driving between pre-marked routes to local hotspots such as schools, supermarkets, and hospitals. Each car is capable of automatically parking itself in its assigned space within a certain vicinity at home and docking itself to be charged overnight.</p>
                <p>The self-navigation of these cars will be supported by the combination of a moderate guidance-electronics infrastructure built into both the city roads and the cars themselves, and coordinated location and speed tracking methods to achieve collision avoidance.</p>
                <p>A free smartphone app will also be developed to enable regular cars to join the safety net afforded by this infrastructure. The app will self-report location and speed to other user-drivers in the vicinity and also provide traffic analysis and suggestions based on the information it has collected on its network to provide greater situational awareness to all drivers on the road and give early warning before collisions occur.</p>
                <p>A means to beneficially shape traffic flow can be exploited by broadcasting a recommended speed limit, based on tested algorithms, from the back of the car to optimize traffic flow and prevent certain traffic jams from occurring.</p>
                <p>To alleviate the need to build an abundance of specialized, likely costly public charging stations for these vehicles to support long distance travel, the power management and charging system for each of these cars would be designed in such a way as to permit smartphone app transactions between vehicle owners to occur whereby money is offered to initiate an equitable transfer of a portion of the charge from one car to the next.</p>
                <p>Off-grid solar-powered super capacitor stations can be designed and developed to provide a means for harvesting electrical energy and rapidly supplying charge to or receiving charge from vehicles.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-12 lg:py-36">
          <div>
            <p className="eyebrow text-[var(--gold-deep)]">A community of possibility</p>
            <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-[.9] tracking-[-.05em] text-[var(--ink)] sm:text-7xl">Services that meet residents where they are.</h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-[var(--muted-ink)]">
              <p>Integrated into this transportation system are mobile medical and dental care provider units catered to the individual needs of a patient in the event of an emergency.</p>
              <p>Additionally, a computer lab and tutoring services will be offered on a mobile bus facility for children to engage in dynamic learning experiences throughout their local community.</p>
              <p>Some of the services we hope to include in each city community include an outdoor movie theater, gyms restricted to residents, an eclectic mix of restaurants and organic supermarkets, children and pet-friendly parks, and facilities for sports such as basketball and soccer.</p>
              <p>For multi-level residential complexes, shopping centers and community gathering areas will be located on the rooftop for best views of the cityscape and ocean.</p>
              <p>A wearable human-powered exoskeleton will be developed to enable the elderly and the handicapped to perform difficult physical tasks such as moving furniture or other large objects. This equipment would be offered to residents on a rental.</p>
            </div>
          </div>
          <img src="/assets/paradise/p10.jpeg" alt="Outdoor community space in Paradise" className="aspect-[4/5] w-full object-cover" />
        </section>

        <section className="bg-[var(--ink)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow text-[var(--gold)]">The vision in pictures</p>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
              {gallery.map((image, index) => (
                <img key={image} src={`/assets/paradise/${image}`} alt={`Paradise modular home concept ${index + 1}`} className="aspect-square w-full object-cover transition hover:opacity-80" />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

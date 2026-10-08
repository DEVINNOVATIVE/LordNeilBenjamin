import { PageHero } from '@/components/shared/page-hero'

export function Hero() {
  return (
    <PageHero
      active="home"
      eyebrow="A personal perspective on progress"
      title={<>Think <em className="text-[var(--gold)]">bigger.</em><br /><span className="ml-[0.12em]">Build</span>{' '}<em className="text-[var(--gold)]">better.</em></>}
      identity="Entrepreneur · Philanthropist"
      subtitle="Lord Neil Benjamin Gibson"
      primaryAction={{ href: '#story', label: 'Explore the story ↗' }}
      secondaryAction={{ href: '/blog', label: 'Read the journal' }}
    />
  )
}

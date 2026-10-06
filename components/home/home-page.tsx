import { Footer } from '@/components/shared/footer'
import { SiteHeader } from '@/components/shared/site-header'
import { FocusSection } from './focus-section'
import { Hero } from './hero'
import { ImpactSection } from './impact-section'
import { JournalPreview } from './journal-preview'
import { StorySection } from './story-section'

export function HomePage() {
  return <><div className="relative"><SiteHeader /><Hero /></div><StorySection /><ImpactSection /><FocusSection /><JournalPreview /><Footer /></>
}

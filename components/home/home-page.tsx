import { Footer } from '@/components/shared/footer'
import { FocusSection } from './focus-section'
import { Hero } from './hero'
import { ImpactSection } from './impact-section'
import { JournalPreview } from './journal-preview'
import { StorySection } from './story-section'

export function HomePage() {
  return (
    <>
      <Hero />
      <StorySection />
      <ImpactSection />
      <FocusSection />
      <JournalPreview />
      <Footer />
    </>
  )
}

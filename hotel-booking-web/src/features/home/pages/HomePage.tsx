import { AppFooter } from '../components/AppFooter'
import { AppHeader } from '../components/AppHeader'
import { BenefitsSection } from '../components/BenefitsSection'
import { DestinationsSection } from '../components/DestinationsSection'
import { FeaturedHotelsSection } from '../components/FeaturedHotelsSection'
import { HeroSection } from '../components/HeroSection'
import { NatureGetawaysSection } from '../components/NatureGetawaysSection'
import { PromoSection } from '../components/PromoSection'
import { StorySection } from '../components/StorySection'

export function HomePage() {
  return (
    <>
      <AppHeader />
      <main>
        <HeroSection />
        <PromoSection />
        <DestinationsSection />
        <NatureGetawaysSection />
        <FeaturedHotelsSection />
        <BenefitsSection />
        <StorySection />
      </main>
      <AppFooter />
    </>
  )
}

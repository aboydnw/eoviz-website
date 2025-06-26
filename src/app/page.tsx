import { ErrorBoundary } from '@/components/shared/ErrorBoundary'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { StakesSection } from '@/components/sections/StakesSection'
import { GuideSection } from '@/components/sections/GuideSection'
import { NasaCreditSection } from '@/components/sections/NasaCreditSection'
import { ProductSuiteSection } from '@/components/sections/ProductSuiteSection'
import { ValuePropositionSection } from '@/components/sections/ValuePropositionSection'
import { CallToActionSection } from '@/components/sections/CallToActionSection'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <ErrorBoundary fallback={<div className="p-4 text-center">Navigation temporarily unavailable</div>}>
        <Navigation />
      </ErrorBoundary>
      
      <main>
        <ErrorBoundary fallback={<div className="p-8 text-center">Hero section loading...</div>}>
          <HeroSection />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-8 text-center">Content temporarily unavailable</div>}>
          <StakesSection />
          <GuideSection />
          <NasaCreditSection />
          <ProductSuiteSection />
          <ValuePropositionSection />
          <CallToActionSection />
        </ErrorBoundary>
      </main>
      
      <ErrorBoundary fallback={<div className="p-4 text-center">Footer temporarily unavailable</div>}>
        <Footer />
      </ErrorBoundary>
    </div>
  )
}

import { CTABar } from '../components/sections/CTABar'
import { FastDeployment } from '../components/sections/FastDeployment'
import { FourPillars } from '../components/sections/FourPillars'
import { HomeHero } from '../components/sections/Hero'
import { LogoMarquee } from '../components/sections/LogoMarquee'
import { Newsletter } from '../components/sections/Newsletter'
import { PartnerEcosystem } from '../components/sections/PartnerEcosystem'
import { PlatformOverview } from '../components/sections/PlatformOverview'
import { ProductSuite } from '../components/sections/ProductSuite'
import { Resources } from '../components/sections/Resources'
import { SolutionTabs } from '../components/sections/SolutionTabs'
import { Stats } from '../components/sections/Stats'

export function HomePage() {
  return (
    <>
      <HomeHero />
      <LogoMarquee />
      <PlatformOverview />
      <FourPillars />
      <SolutionTabs />
      <ProductSuite />
      <Stats />
      <PartnerEcosystem />
      <FastDeployment />
      <Resources />
      <CTABar />
      <Newsletter />
    </>
  )
}

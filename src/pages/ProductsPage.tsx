import { CTABar } from '../components/sections/CTABar'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'
import { ProductSuite } from '../components/sections/ProductSuite'
import { Resources } from '../components/sections/Resources'

export function ProductsPage() {
  return (
    <>
      <Hero
        compact
        title="One platform. Every part of your campus."
        subtitle="LMS, CMS, AI Livechat, AI Telephony, I-ROMS, analytics, and more — designed to work together."
        primaryCta={{ label: 'Request a demo', href: 'mailto:info@aitrixlabs.com' }}
        secondaryCta={{ label: 'Talk to sales', href: 'mailto:info@aitrixlabs.com' }}
      />
      <ProductSuite />
      <Resources />
      <CTABar />
      <Newsletter />
    </>
  )
}

import { CTABar } from '../components/sections/CTABar'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'
import { Resources } from '../components/sections/Resources'

export function ResourcesPage() {
  return (
    <>
      <Hero
        compact
        title="Insights, guides, and stories from the field"
        subtitle="Practical content for educators, IT leaders, and administrators making the most of AI-powered education."
        primaryCta={{ label: 'Browse insights', to: '/insights' }}
        secondaryCta={{ label: 'Talk to support', href: 'mailto:info@aitrixlabs.com' }}
      />
      <Resources />
      <CTABar
        title="Want to be featured?"
        body="If your institution has a story worth telling, we'd love to share it. Get in touch."
      />
      <Newsletter />
    </>
  )
}

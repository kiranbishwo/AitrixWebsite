import { BriefcaseIcon, GraphIcon, StarIcon } from '../components/icons/Icons'
import { CTABar } from '../components/sections/CTABar'
import { FeatureGrid, type Feature } from '../components/sections/FeatureGrid'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'
import { Stats } from '../components/sections/Stats'

const VALUES: Feature[] = [
  {
    Icon: StarIcon,
    title: 'Built for Nepal',
    description:
      'We build for the realities of Nepali institutions first — language, infrastructure, and culture.',
  },
  {
    Icon: GraphIcon,
    title: 'Outcome over output',
    description:
      'We measure success in learner outcomes and operational clarity, not feature counts.',
    accent: '#60EBD1',
  },
  {
    Icon: BriefcaseIcon,
    title: 'Long-term partner',
    description:
      'We stay with our partners after launch — through every academic calendar and every change.',
    accent: '#F5A082',
  },
]

export function CompanyPage() {
  return (
    <>
      <Hero
        compact
        pill="Company"
        title="The team behind Aitrix Labs"
        subtitle="An independent Nepali AI company building the products our institutions deserve."
        primaryCta={{ label: 'Explore careers', href: 'mailto:info@aitrixlabs.com' }}
        secondaryCta={{ label: 'Read mission', to: '/company' }}
      />
      <FeatureGrid
        eyebrow="What we believe"
        title="Our values"
        features={VALUES}
        columns={3}
      />
      <Stats />
      <CTABar
        title="Want to join us?"
        body="We're hiring engineers, researchers, and educators who want to ship the future of Nepali AI."
        primaryCta={{ label: 'See open roles', href: 'mailto:info@aitrixlabs.com' }}
        secondaryCta={{ label: 'Press & media', href: 'mailto:info@aitrixlabs.com' }}
      />
      <Newsletter />
    </>
  )
}

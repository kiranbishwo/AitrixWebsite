import { BookIcon, GraphIcon, StarIcon } from '../components/icons/Icons'
import { CTABar } from '../components/sections/CTABar'
import { FeatureGrid, type Feature } from '../components/sections/FeatureGrid'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'

const WHY: Feature[] = [
  {
    Icon: StarIcon,
    title: 'Ship products that matter',
    description:
      'Work on LMS, AI communication, telephony, and research used by schools and enterprises across Nepal.',
  },
  {
    Icon: GraphIcon,
    title: 'Grow with experts',
    description:
      'Collaborate with engineers, designers, and researchers who care about craft and local context.',
    accent: '#5366AE',
  },
  {
    Icon: BookIcon,
    title: 'Flexible paths',
    description:
      'Full-time roles in Kathmandu and remote-friendly arrangements for the right candidates.',
    accent: '#60EBD1',
  },
]

export function CareersPage() {
  return (
    <>
      <Hero
        compact
        title="Careers at Aitrix Labs"
        subtitle="Build AI products for Nepali institutions — from adaptive learning to voice systems and Nepali NLP."
        primaryCta={{ label: 'Email your CV', href: 'mailto:info@aitrixlabs.com?subject=Career inquiry' }}
        secondaryCta={{ label: 'About us', to: '/about' }}
      />
      <FeatureGrid
        eyebrow="Why Aitrix"
        title="What you can expect"
        features={WHY}
        columns={3}
      />
      <CTABar
        title="Don't see a listing?"
        body="We are always interested in strong engineers, ML researchers, and product-minded educators. Send a short note and your portfolio or CV."
        primaryCta={{ label: 'Get in touch', to: '/contact' }}
        secondaryCta={{ label: 'News & updates', to: '/news' }}
      />
      <Newsletter />
    </>
  )
}

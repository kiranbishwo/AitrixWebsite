import {
  GlobeIcon,
  GraphIcon,
  GridIcon,
  PartnerIcon,
  ShieldIcon,
  StarSparkIcon,
} from '../components/icons/Icons'
import { CTABar } from '../components/sections/CTABar'
import { FeatureGrid, type Feature } from '../components/sections/FeatureGrid'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'
import { Stats } from '../components/sections/Stats'

const VALUES: Feature[] = [
  {
    Icon: GlobeIcon,
    title: 'Built for Nepal',
    description:
      'We build for the realities of Nepali institutions, enterprises, and communities first — rooted in local language, infrastructure, and culture across every vertical we serve.',
    accent: '#5366AE',
  },
  {
    Icon: GraphIcon,
    title: 'Outcome over Output',
    description:
      "Whether it's a student mastering a concept, a hospital streamlining patient flow, or a government service reaching a rural citizen — we measure success in real impact, not feature counts.",
    accent: '#60EBD1',
  },
  {
    Icon: PartnerIcon,
    title: 'Long-term Partner',
    description:
      'We stay with our partners through every academic calendar, every product update, and every growth phase — across EdTech, Telephony, Healthcare, FinTech, and beyond.',
    accent: '#F5A082',
  },
  {
    Icon: StarSparkIcon,
    title: 'Research-Driven Innovation',
    description:
      'Every product we ship is backed by our AI Research division — from Nepali NLP models to responsible AI frameworks built for South Asian contexts.',
    accent: '#A78BFA',
  },
  {
    Icon: GridIcon,
    title: 'One Platform, Many Verticals',
    description:
      'From classrooms to clinics, from banks to boardrooms — Aitrix Labs brings a unified AI intelligence layer across 10 industries so your teams never work in silos.',
    accent: '#5366AE',
  },
  {
    Icon: ShieldIcon,
    title: 'Responsible by Design',
    description:
      'We build AI that is transparent, ethical, and accountable — because trust is the foundation of every institution we serve in Nepal.',
    accent: '#60EBD1',
  },
]

export function AboutPage() {
  return (
    <>
      <Hero
        compact
        title="The team behind Aitrix Labs"
        subtitle="An independent Nepali AI company building the products our institutions deserve."
        primaryCta={{ label: 'Explore careers', to: '/careers' }}
        secondaryCta={{ label: 'Latest news', to: '/news' }}
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
        primaryCta={{ label: 'See open roles', to: '/careers' }}
        secondaryCta={{ label: 'Press & media', href: 'mailto:info@aitrixlabs.com' }}
      />
      <Newsletter />
    </>
  )
}

import platformBanner from '../assets/banners/platform.svg'
import {
  GridIcon,
  ListIcon,
  PartnerIcon,
  PlayIcon,
  ShieldIcon,
  DocIcon,
} from '../components/icons/Icons'
import { CTABar } from '../components/sections/CTABar'
import { FeatureGrid, type Feature } from '../components/sections/FeatureGrid'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'
import { PartnerEcosystem } from '../components/sections/PartnerEcosystem'

const CAPABILITIES: Feature[] = [
  {
    Icon: DocIcon,
    title: 'Overview',
    description: 'A unified data and AI plane connecting every Aitrix product.',
  },
  {
    Icon: ShieldIcon,
    title: 'Security',
    description: 'Encryption, role-based access, and audit trails by default.',
    accent: '#60EBD1',
  },
  {
    Icon: PlayIcon,
    title: 'Deployment',
    description: 'Cloud, hybrid, or on-prem — pick what fits your institution.',
    accent: '#A78BFA',
  },
  {
    Icon: GridIcon,
    title: 'APIs',
    description: 'A clean, documented REST and webhook surface for integrations.',
    accent: '#F5A082',
  },
  {
    Icon: ListIcon,
    title: 'Roadmap',
    description: 'Public release notes and a roadmap shaped by partner feedback.',
    accent: '#FFD814',
  },
  {
    Icon: PartnerIcon,
    title: 'Become a partner',
    description: 'Build, integrate, or resell — the partner program is open.',
    accent: '#EC4899',
  },
]

export function PlatformPage() {
  return (
    <>
      <Hero
        compact
        title="A platform built for Nepal's most ambitious teams"
        subtitle="Open, extensible, and secure. The backbone behind every Aitrix product and every institution we serve."
        primaryCta={{ label: 'Read the docs', href: 'https://aitrixlabs.com' }}
        secondaryCta={{ label: 'Become a partner', href: 'mailto:info@aitrixlabs.com' }}
        bgImage={platformBanner}
      />
      <FeatureGrid
        eyebrow="Capabilities"
        title="Everything you need under one roof"
        features={CAPABILITIES}
        columns={3}
      />
      <PartnerEcosystem />
      <CTABar
        title="Ready to integrate?"
        body="Connect Aitrix with your SIS, identity, and telephony stack. Our team will guide you through it."
      />
      <Newsletter />
    </>
  )
}

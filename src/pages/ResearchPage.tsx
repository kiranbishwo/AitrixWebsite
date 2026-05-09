import { BookIcon, ShieldIcon, StarSparkIcon } from '../components/icons/Icons'
import { CTABar } from '../components/sections/CTABar'
import { FeatureGrid, type Feature } from '../components/sections/FeatureGrid'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'

const RESEARCH_AREAS: Feature[] = [
  {
    Icon: BookIcon,
    title: 'Nepali NLP',
    description:
      'Tokenization, language models, and benchmarks built specifically for Devanagari and Nepali context.',
    accent: '#6B57FF',
  },
  {
    Icon: ShieldIcon,
    title: 'Responsible AI',
    description:
      'Frameworks for safety, fairness, and transparency aligned with Nepal&apos;s educational and cultural context.',
    accent: '#60EBD1',
  },
  {
    Icon: StarSparkIcon,
    title: 'Publications',
    description:
      'Open research, white papers, and collaborations with Nepali and global universities.',
    accent: '#F5A082',
  },
]

export function ResearchPage() {
  return (
    <>
      <Hero
        compact
        pill="Research"
        title={<>Advancing Nepal&apos;s AI frontier</>}
        subtitle="Our research division builds the foundations behind every Aitrix product — and the broader Nepali AI ecosystem."
        primaryCta={{ label: 'Read papers', href: 'https://aitrixlabs.com' }}
        secondaryCta={{ label: 'Collaborate', href: 'mailto:info@aitrixlabs.com' }}
      />
      <FeatureGrid
        eyebrow="Areas"
        title="What we work on"
        features={RESEARCH_AREAS}
        columns={3}
      />
      <CTABar
        title="Building something with us?"
        body="From joint papers to applied research projects, we love working with academic and industry partners."
        primaryCta={{ label: 'Contact research', href: 'mailto:info@aitrixlabs.com' }}
        secondaryCta={{ label: 'Read mission', to: '/company' }}
      />
      <Newsletter />
    </>
  )
}

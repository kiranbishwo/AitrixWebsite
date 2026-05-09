import educationBanner from '../assets/banners/education.svg'
import { CTABar } from '../components/sections/CTABar'
import { FeatureGrid, type Feature } from '../components/sections/FeatureGrid'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'
import { SolutionTabs } from '../components/sections/SolutionTabs'
import {
  GraphIcon,
  StackIcon,
  StarIcon,
  SwapIcon,
} from '../components/icons/Icons'

const SOLUTION_FEATURES: Feature[] = [
  {
    Icon: GraphIcon,
    title: 'Unified EdTech operations',
    description:
      'Bring academics, administration, and communications onto one AI-ready platform — and stop juggling tools.',
    accent: '#6B57FF',
  },
  {
    Icon: SwapIcon,
    title: 'Personalized teaching at scale',
    description:
      'Adaptive learning paths and analytics so every learner moves at their own pace, with guidance that fits.',
    accent: '#60EBD1',
  },
  {
    Icon: StackIcon,
    title: 'Smarter campus efficiency',
    description:
      'Digitize routine work — scheduling, records, attendance — and free your team to focus on students.',
    accent: '#A78BFA',
  },
  {
    Icon: StarIcon,
    title: 'Trustworthy AI for education',
    description:
      'Deploy assistants and automation with clear oversight so institutions stay compliant and in control.',
    accent: '#F5A082',
  },
]

export function SolutionsPage() {
  return (
    <>
      <Hero
        compact
        title={<>Solutions built for Nepal&apos;s institutions</>}
        subtitle="From K–12 to higher education and enterprise, our AI products bring clarity to operations and outcomes."
        primaryCta={{ label: 'Talk to Aitrix', href: 'mailto:info@aitrixlabs.com' }}
        secondaryCta={{ label: 'Browse Products', to: '/products' }}
        bgImage={educationBanner}
      />
      <FeatureGrid
        eyebrow="By need"
        title="Pick the outcome you care about most"
        body="Each solution maps to one or more of our core products and is tuned to the realities of Nepali campuses."
        features={SOLUTION_FEATURES}
        columns={4}
      />
      <SolutionTabs />
      <CTABar />
      <Newsletter />
    </>
  )
}

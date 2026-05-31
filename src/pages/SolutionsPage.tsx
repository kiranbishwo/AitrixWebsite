import { Link } from 'react-router-dom'
import educationBanner from '../assets/banners/education.svg'
import {
  ArrowRightIcon,
  BookIcon,
  GraphIcon,
  PhoneIcon,
  StackIcon,
  StarIcon,
  SwapIcon,
} from '../components/icons/Icons'
import { CTABar } from '../components/sections/CTABar'
import { FeatureGrid, type Feature } from '../components/sections/FeatureGrid'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'
import { SolutionTabs } from '../components/sections/SolutionTabs'
import { Section } from '../components/ui/Container'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Reveal } from '../components/ui/Reveal'

const PILLAR_LINKS = [
  { to: '/solutions/edtech', label: 'EdTech', hint: 'LMS, CMS, analytics', Icon: BookIcon },
  { to: '/solutions/communication', label: 'Pameru', hint: 'Omnichannel admissions inbox', Icon: SwapIcon },
  { to: '/solutions/telephony', label: 'Telephony', hint: 'PBX, IVR, call analytics', Icon: PhoneIcon },
  { to: '/solutions/ai-research', label: 'AI research tools', hint: 'NLP & responsible AI', Icon: StarIcon },
] as const

const SOLUTION_FEATURES: Feature[] = [
  {
    Icon: GraphIcon,
    title: 'Unified EdTech operations',
    description:
      'Bring academics, administration, and communications onto one AI-ready platform — and stop juggling tools.',
    accent: '#5366AE',
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
      <Section className="border-t border-ink-900 bg-black">
        <Reveal>
          <Eyebrow className="text-ink-400">By solution</Eyebrow>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PILLAR_LINKS.map(({ to, label, hint, Icon }) => (
              <Link
                key={to}
                to={to}
                className="group flex items-center gap-3 rounded-xl border border-ink-900 bg-ink-950/50 p-4 transition-colors hover:border-ink-800 hover:bg-ink-950"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink-800 bg-black text-primary">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-white">{label}</div>
                  <div className="text-[11px] text-ink-500">{hint}</div>
                </div>
                <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 text-ink-600 transition-colors group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </Reveal>
      </Section>
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

import { Navigate, useParams, Link } from 'react-router-dom'
import educationBanner from '../assets/banners/education.svg'
import omniBanner from '../assets/banners/omnibanner.svg'
import researchBanner from '../assets/banners/research.svg'
import servicesBanner from '../assets/banners/services.svg'
import {
  ArrowRightIcon,
  BookIcon,
  DocIcon,
  GraphIcon,
  GridIcon,
  ListIcon,
  MailBoxIcon,
  NetworkIcon,
  PhoneIcon,
  StackIcon,
  StarIcon,
  StarSparkIcon,
  SwapIcon,
} from '../components/icons/Icons'
import { CTABar } from '../components/sections/CTABar'
import { FeatureGrid, type Feature } from '../components/sections/FeatureGrid'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'
import { Section } from '../components/ui/Container'
import { Eyebrow, SectionHeading } from '../components/ui/Eyebrow'
import { Reveal } from '../components/ui/Reveal'
const SLUGS = ['edtech', 'communication', 'telephony', 'ai-research'] as const
type SolutionSlug = (typeof SLUGS)[number]

function isSolutionSlug(value: string | undefined): value is SolutionSlug {
  return value !== undefined && (SLUGS as readonly string[]).includes(value)
}

interface PillarConfig {
  heroTitle: string
  heroSubtitle: string
  bgImage: string
  eyebrow: string
  gridTitle: string
  gridBody: string
  features: Feature[]
  ctaTitle: string
  ctaBody: string
  primaryCta: { label: string; to?: string; href?: string }
  secondaryCta: { label: string; to?: string; href?: string }
}

const PILLAR_CONFIG: Record<SolutionSlug, PillarConfig> = {
  edtech: {
    heroTitle: 'EdTech for Nepal’s institutions',
    heroSubtitle:
      'AI-powered LMS, CMS, and learning analytics for schools and universities — adaptive paths, faculty visibility, and outcomes you can measure.',
    bgImage: educationBanner,
    eyebrow: 'By solution',
    gridTitle: 'Learning products that work together',
    gridBody:
      'From course delivery to institutional sites and assessments, Aitrix EdTech is designed for Nepali language, calendars, and campus realities.',
    features: [
      {
        Icon: BookIcon,
        title: 'Adaptive LMS',
        description:
          'Blended and online programs with paths that adjust to each learner while teachers keep full oversight.',
        accent: '#5366AE',
      },
      {
        Icon: DocIcon,
        title: 'Smart CMS & portals',
        description:
          'Publish announcements, policies, and program pages with workflows built for schools and colleges.',
        accent: '#5E6FAE',
      },
      {
        Icon: GraphIcon,
        title: 'Assessments & analytics',
        description:
          'Exams, automation-friendly grading, and dashboards that highlight progress without extra busywork.',
        accent: '#60EBD1',
      },
    ],
    ctaTitle: 'See how EdTech fits your campus',
    ctaBody:
      'Walk through LMS, CMS, and analytics with our team — scoped to your programs and stakeholders.',
    primaryCta: { label: 'Browse products', to: '/products' },
    secondaryCta: { label: 'Request a demo', href: 'mailto:info@aitrixlabs.com?subject=EdTech demo' },
  },
  communication: {
    heroTitle: 'AI communication for every stakeholder',
    heroSubtitle:
      'AI Livechat and notification systems that connect students, parents, and staff in Nepali and English — fast, consistent, and institution-aligned.',
    bgImage: servicesBanner,
    eyebrow: 'By solution',
    gridTitle: 'Stay in sync without the noise',
    gridBody:
      'Give families clarity, reduce repetitive queries for staff, and keep messaging in one trusted layer.',
    features: [
      {
        Icon: SwapIcon,
        title: 'Bilingual AI Livechat',
        description:
          'Instant answers and handoff to humans when it matters — tuned for education vocabulary in Nepali and English.',
        accent: '#60EBD1',
      },
      {
        Icon: MailBoxIcon,
        title: 'Parent & community updates',
        description:
          'Transparent channels for schedules, fees, and school news so trust stays high and confusion stays low.',
        accent: '#2DD4BF',
      },
      {
        Icon: ListIcon,
        title: 'Unified notifications',
        description:
          'SMS, email, and in-app messaging orchestrated so the right people get the right nudge at the right time.',
        accent: '#5EEAD4',
      },
    ],
    ctaTitle: 'Roll out smarter conversations',
    ctaBody:
      'We help you design routing, policies, and integrations so AI chat and notifications match how your institution already works.',
    primaryCta: { label: 'Talk to us', href: 'mailto:info@aitrixlabs.com?subject=Communication solutions' },
    secondaryCta: { label: 'View product suite', to: '/products' },
  },
  telephony: {
    heroTitle: 'Voice AI & telephony for campuses',
    heroSubtitle:
      'Cloud PBX, AI IVR, and call analytics built for institutions and enterprises — fewer dropped threads, clearer reporting, less manual load.',
    bgImage: omniBanner,
    eyebrow: 'By solution',
    gridTitle: 'Reliable voice infrastructure',
    gridBody:
      'Route calls intelligently, capture structured outcomes, and understand demand patterns across sites.',
    features: [
      {
        Icon: PhoneIcon,
        title: 'AI Voice IVR',
        description:
          'Natural-language friendly routing for admissions, support, and front-desk workloads at scale.',
        accent: '#A78BFA',
      },
      {
        Icon: NetworkIcon,
        title: 'Cloud PBX',
        description:
          'Managed extensions, queues, and policies so IT can standardize voice without running legacy boxes.',
        accent: '#8B5CF6',
      },
      {
        Icon: GraphIcon,
        title: 'Call analytics',
        description:
          'Logs, sentiment, and resolution signals that help leaders improve service and staffing over time.',
        accent: '#C4B5FD',
      },
    ],
    ctaTitle: 'Modernize your institution’s voice stack',
    ctaBody:
      'Whether you are centralizing campuses or layering AI on top of existing numbers, we plan migrations with minimal disruption.',
    primaryCta: { label: 'Schedule a call', href: 'mailto:info@aitrixlabs.com?subject=Telephony consultation' },
    secondaryCta: { label: 'Platform & APIs', to: '/platform' },
  },
  'ai-research': {
    heroTitle: 'AI research tools for teams who ship',
    heroSubtitle:
      'Nepali NLP, custom models, and responsible AI frameworks for academic and enterprise teams — built with Nepal’s linguistic and regulatory context in mind.',
    bgImage: researchBanner,
    eyebrow: 'By solution',
    gridTitle: 'From lab to production',
    gridBody:
      'Collaborate with Aitrix researchers on Devanagari-aware models, evaluation, and governance patterns that institutions can adopt with confidence.',
    features: [
      {
        Icon: StarSparkIcon,
        title: 'Nepali NLP & datasets',
        description:
          'Language technology that respects morphology, mixed scripts, and real-world Nepali usage in products and papers.',
        accent: '#F5A082',
      },
      {
        Icon: StackIcon,
        title: 'Custom model development',
        description:
          'Targeted fine-tuning and deployment paths when off-the-shelf models are not enough for your domain.',
        accent: '#FB923C',
      },
      {
        Icon: StarIcon,
        title: 'Responsible AI frameworks',
        description:
          'Guidelines, review workflows, and safeguards aligned to how schools and enterprises actually operate.',
        accent: '#FDBA74',
      },
    ],
    ctaTitle: 'Partner on the next research milestone',
    ctaBody:
      'Joint projects, publications, and product transfers — connect with our research group to scope what is possible.',
    primaryCta: { label: 'Research overview', to: '/research' },
    secondaryCta: { label: 'Email research', href: 'mailto:info@aitrixlabs.com?subject=Research collaboration' },
  },
}

function ExploreStrip() {
  return (
    <Section className="border-t border-ink-900 bg-ink-950">
      <Reveal>
        <Eyebrow className="text-ink-400">Explore</Eyebrow>
        <SectionHeading as="h2" className="!mb-8 max-w-[520px]">
          Products & platform
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            to="/products"
            className="group flex flex-col rounded-2xl border border-ink-900 bg-black p-6 transition-colors hover:border-ink-800"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-ink-800 bg-ink-950 text-primary">
              <GridIcon className="h-5 w-5" />
            </div>
            <div className="mb-1 text-lg font-bold text-white">Products</div>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-400">
              Browse the full Aitrix product suite — LMS, CMS, chat, telephony, and more.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-primary-hover">
              Open products
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </span>
          </Link>
          <Link
            to="/platform"
            className="group flex flex-col rounded-2xl border border-ink-900 bg-black p-6 transition-colors hover:border-ink-800"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-ink-800 bg-ink-950 text-primary">
              <StackIcon className="h-5 w-5" />
            </div>
            <div className="mb-1 text-lg font-bold text-white">Platform</div>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-400">
              APIs, security, deployment, and how our stack fits your IT roadmap.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-primary-hover">
              Open platform
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </Reveal>
    </Section>
  )
}

export function SolutionDetailPage() {
  const { slug } = useParams()
  if (!isSolutionSlug(slug)) {
    return <Navigate to="/solutions" replace />
  }
  const c = PILLAR_CONFIG[slug]

  return (
    <>
      <Hero
        compact
        title={c.heroTitle}
        subtitle={c.heroSubtitle}
        primaryCta={c.primaryCta}
        secondaryCta={c.secondaryCta}
        bgImage={c.bgImage}
      />
      <FeatureGrid
        eyebrow={c.eyebrow}
        title={c.gridTitle}
        body={c.gridBody}
        features={c.features}
        columns={3}
      />
      <ExploreStrip />
      <CTABar title={c.ctaTitle} body={c.ctaBody} />
      <Newsletter />
    </>
  )
}

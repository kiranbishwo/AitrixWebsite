import { Navigate, useParams, Link } from 'react-router-dom'
import educationBanner from '../assets/banners/education.svg'
import omniBanner from '../assets/banners/omnibanner.svg'
import researchBanner from '../assets/banners/research.svg'
import pameruLogo from '../assets/pameru_logo.svg'
import {
  ArrowRightIcon,
  BookIcon,
  DocIcon,
  GraphIcon,
  GridIcon,
  MailBoxIcon,
  NetworkIcon,
  PhoneIcon,
  ShieldIcon,
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
  bgImage?: string | null
  eyebrow: string
  heroEyebrow?: string
  productLogo?: string
  productLogoAlt?: string
  theme?: 'default' | 'pameru'
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
    heroTitle: "Best Omnichannel Platform for Colleges, Universities & Institutes",
    heroSubtitle:
      'Built by Aitrix Labs, Pameru is the omnichannel customer conversation platform designed for colleges, universities, and educational institutes. Prospective students reach out on WhatsApp, Instagram, email, web chat, and phone — often switching channels mid-conversation. Pameru unifies every touchpoint in a single AI-powered team inbox so your admissions, registrar, and student services teams never lose context.',
    bgImage: null,
    productLogo: pameruLogo,
    productLogoAlt: 'Pameru',
    heroEyebrow: 'Built by Aitrix Labs',
    theme: 'pameru',
    eyebrow: 'Pameru',
    gridTitle: 'Key features for colleges and universities',
    gridBody:
      'From first inquiry to enrollment, Pameru helps institutions capture leads, convert applicants, and retain students across every channel. AI Agents handle routine questions about programs, tuition, deadlines, and campus visits around the clock, while your staff focus on high-value conversations with qualified candidates.',
    features: [
      {
        Icon: SwapIcon,
        title: 'Unified admissions inbox',
        description:
          'WhatsApp, Messenger, Instagram, email, and VoIP in one thread — no matter where the conversation starts.',
        accent: '#8B5CF6',
      },
      {
        Icon: StarSparkIcon,
        title: 'AI-powered lead qualification',
        description:
          'Automatically answer FAQs and route serious applicants to counselors when human expertise matters most.',
        accent: '#A78BFA',
      },
      {
        Icon: NetworkIcon,
        title: 'Multi-campus routing',
        description:
          'Smart assignment for departments, campuses, and language preferences across your institution.',
        accent: '#06B6D4',
      },
      {
        Icon: MailBoxIcon,
        title: 'Enrollment broadcasts',
        description:
          'Deadline reminders, orientation invites, and fee notifications at scale during peak admission seasons.',
        accent: '#22D3EE',
      },
      {
        Icon: GraphIcon,
        title: 'CRM integration',
        description:
          'Full student context synced with your existing systems so every team member sees the full picture.',
        accent: '#7C3AED',
      },
      {
        Icon: ShieldIcon,
        title: '99.999% uptime SLA',
        description:
          'Enterprise reliability built for peak admission seasons when every conversation counts.',
        accent: '#0891B2',
      },
    ],
    ctaTitle: 'Start your free trial on Pameru',
    ctaBody:
      'Join thousands of brands that trust Pameru for AI-powered customer conversations. Roll out omnichannel admissions and student services with the platform built by Aitrix Labs.',
    primaryCta: { label: 'Start free trial', href: 'https://app.pameru.com' },
    secondaryCta: { label: 'Visit pameru.com', href: 'https://pameru.com' },
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

function PameruProductStrip() {
  return (
    <Section className="border-t border-ink-200 bg-white">
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-ink-200 bg-ink-50 p-8 sm:p-10">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[640px]">
              <img src={pameruLogo} alt="Pameru" className="mb-5 h-12 w-auto sm:h-14" />
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.5px] text-ink-900 sm:text-[28px]">
                Omnichannel communication built for education
              </h2>
              <p className="text-[15px] leading-[1.7] text-ink-600">
                Pameru is Aitrix Labs&apos; dedicated product for colleges and universities — unifying
                WhatsApp, social, email, web chat, and voice in one AI-powered inbox built for admissions
                and student services teams.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href="https://app.pameru.com"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] px-6 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Start free trial
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://pameru.com"
                className="inline-flex items-center gap-2 rounded-md border border-ink-300 bg-white px-6 py-3 text-[15px] font-semibold text-ink-800 transition-colors hover:border-ink-400 hover:bg-ink-50"
              >
                pameru.com
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

function ExploreStrip({ light = false }: { light?: boolean }) {
  const sectionClass = light
    ? 'border-t border-ink-200 bg-ink-50'
    : 'border-t border-ink-900 bg-ink-950'
  const cardClass = light
    ? 'group flex flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-colors hover:border-ink-300 hover:shadow-sm'
    : 'group flex flex-col rounded-2xl border border-ink-900 bg-black p-6 transition-colors hover:border-ink-800'
  const iconWrapClass = light
    ? 'mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-ink-200 bg-ink-50 text-primary'
    : 'mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-ink-800 bg-ink-950 text-primary'
  const titleClass = light ? 'mb-1 text-lg font-bold text-ink-900' : 'mb-1 text-lg font-bold text-white'
  const bodyClass = light
    ? 'mb-4 flex-1 text-sm leading-relaxed text-ink-600'
    : 'mb-4 flex-1 text-sm leading-relaxed text-ink-400'
  const eyebrowClass = light ? 'text-ink-500' : 'text-ink-400'
  const headingClass = light ? '!mb-8 max-w-[520px] !text-ink-900' : '!mb-8 max-w-[520px]'

  return (
    <Section className={sectionClass}>
      <Reveal>
        <Eyebrow className={eyebrowClass}>Explore</Eyebrow>
        <SectionHeading as="h2" className={headingClass}>
          Products & platform
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link to="/products" className={cardClass}>
            <div className={iconWrapClass}>
              <GridIcon className="h-5 w-5" />
            </div>
            <div className={titleClass}>Products</div>
            <p className={bodyClass}>
              Browse the full Aitrix product suite — LMS, CMS, chat, telephony, and more.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-primary-hover">
              Open products
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </span>
          </Link>
          <Link to="/platform" className={cardClass}>
            <div className={iconWrapClass}>
              <StackIcon className="h-5 w-5" />
            </div>
            <div className={titleClass}>Platform</div>
            <p className={bodyClass}>
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
        productLogo={c.productLogo}
        productLogoAlt={c.productLogoAlt}
        eyebrow={c.heroEyebrow ?? c.eyebrow}
        theme={c.theme}
      />
      <FeatureGrid
        eyebrow={c.eyebrow}
        title={c.gridTitle}
        body={c.gridBody}
        features={c.features}
        columns={c.features.length > 3 ? 3 : 3}
        variant={slug === 'communication' ? 'light' : 'dark'}
      />
      {slug === 'communication' && <PameruProductStrip />}
      <ExploreStrip light={slug === 'communication'} />
      <CTABar
        title={c.ctaTitle}
        body={c.ctaBody}
        primaryCta={c.primaryCta}
        secondaryCta={c.secondaryCta}
        variant={slug === 'communication' ? 'light' : 'dark'}
        primaryClassName={
          slug === 'communication'
            ? '!bg-gradient-to-r !from-[#8B5CF6] !to-[#06B6D4] !border-0 hover:!from-[#7C3AED] hover:!to-[#0891B2]'
            : ''
        }
      />
      <Newsletter />
    </>
  )
}

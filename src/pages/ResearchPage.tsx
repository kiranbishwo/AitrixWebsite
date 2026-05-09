import { Link } from 'react-router-dom'
import researchBanner from '../assets/banners/research.svg'
import { PhoneIcon, StarSparkIcon } from '../components/icons/Icons'
import { CTABar } from '../components/sections/CTABar'
import { FeatureGrid, type Feature } from '../components/sections/FeatureGrid'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'
import { Section } from '../components/ui/Container'
import { Eyebrow, SectionHeading } from '../components/ui/Eyebrow'
import { Reveal } from '../components/ui/Reveal'
import {
  RESEARCH_PUBLIC_ARTICLES_BY_TOPIC,
  type ResearchPublicArticleRef,
} from '../data/content'

const RESEARCH_STREAMS: Feature[] = [
  {
    anchorId: 'telephony',
    Icon: PhoneIcon,
    title: 'Telephony',
    description:
      'Voice AI, cloud PBX, IVR, and call analytics research that ships in production for campuses and enterprises.',
    accent: '#A78BFA',
  },
  {
    anchorId: 'omniai',
    Icon: StarSparkIcon,
    title: 'OmniAI',
    description:
      'Unified multimodal intelligence — language, communication, and orchestration layers that power the full Aitrix stack.',
    accent: '#F5A082',
  },
]

function ArticleRefRow({ article }: { article: ResearchPublicArticleRef }) {
  const lines = (
    <>
      <span className="font-semibold text-white">{article.title}</span>
      <span className="mt-1 block text-[13px] leading-relaxed text-ink-500">{article.reference}</span>
    </>
  )

  if (!article.href) {
    return (
      <li className="border-t border-ink-900 py-5 first:border-t-0 first:pt-0">
        {lines}
      </li>
    )
  }

  const cls =
    'block rounded-lg py-1 text-left transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

  if (article.href.startsWith('/')) {
    return (
      <li className="border-t border-ink-900 py-5 first:border-t-0 first:pt-0">
        <Link to={article.href} className={cls}>
          {lines}
        </Link>
      </li>
    )
  }

  return (
    <li className="border-t border-ink-900 py-5 first:border-t-0 first:pt-0">
      <a href={article.href} className={cls} target="_blank" rel="noreferrer">
        {lines}
      </a>
    </li>
  )
}

export function ResearchPage() {
  return (
    <>
      <Hero
        compact
        title={<>Advancing Nepal&apos;s AI frontier</>}
        subtitle="Our research division builds the foundations behind every Aitrix product — and the broader Nepali AI ecosystem."
        primaryCta={{ label: 'Read papers', href: 'https://aitrixlabs.com' }}
        secondaryCta={{ label: 'Collaborate', href: 'mailto:info@aitrixlabs.com' }}
        bgImage={researchBanner}
      />
      <FeatureGrid
        eyebrow="Streams"
        title="Telephony & OmniAI"
        body="Two focused research programs — voice systems on one side, unified multimodal AI on the other — with public articles and references listed below."
        features={RESEARCH_STREAMS}
        columns={2}
      />
      <Section id="public-articles" className="scroll-mt-28 border-t border-ink-900 bg-ink-950">
        <Reveal className="mx-auto mb-14 max-w-[760px] text-center">
          <Eyebrow centered className="text-ink-400">
            Library
          </Eyebrow>
          <SectionHeading>Public articles & references</SectionHeading>
          <p className="mx-auto max-w-[640px] text-[15px] leading-[1.7] text-ink-400">
            Field notes, technical summaries, and news posts mapped to each stream. Entries without a link are
            citation-style references; add URLs in content when published externally.
          </p>
        </Reveal>
        <Reveal className="mx-auto max-w-[720px]">
          <div className="mb-12">
            <h3 className="mb-4 text-lg font-bold text-white">Telephony</h3>
            <ul className="m-0 list-none p-0">
              {RESEARCH_PUBLIC_ARTICLES_BY_TOPIC.telephony.map((article) => (
                <ArticleRefRow key={article.title} article={article} />
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">OmniAI</h3>
            <ul className="m-0 list-none p-0">
              {RESEARCH_PUBLIC_ARTICLES_BY_TOPIC.omniai.map((article) => (
                <ArticleRefRow key={article.title} article={article} />
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>
      <CTABar
        title="Building something with us?"
        body="From joint papers to applied research projects, we love working with academic and industry partners."
        primaryCta={{ label: 'Contact research', href: 'mailto:info@aitrixlabs.com' }}
        secondaryCta={{ label: 'Read mission', to: '/about' }}
      />
      <Newsletter />
    </>
  )
}

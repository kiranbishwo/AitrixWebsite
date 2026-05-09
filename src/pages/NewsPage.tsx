import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../components/icons/Icons'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'
import { Section } from '../components/ui/Container'
import { Eyebrow, SectionHeading } from '../components/ui/Eyebrow'
import { Reveal } from '../components/ui/Reveal'

const STORIES = [
  {
    id: 'omniai-bilingual-ai-communication',
    date: 'March 2026',
    title: 'Aitrix Labs expands AI communication for K–12 partners',
    excerpt:
      'Schools across Nepal are adopting bilingual AI Livechat and unified notifications to keep parents and staff aligned.',
  },
  {
    id: 'omniai-nepali-nlp-at-scale',
    date: 'February 2026',
    title: 'Research spotlight: Nepali NLP at scale',
    excerpt:
      'Our team shared progress on Devanagari-aware models and responsible AI guidelines built for local institutions.',
  },
  {
    id: 'telephony-cloud-pbx-ai-ivr',
    date: 'January 2026',
    title: 'Cloud PBX and AI IVR for campuses',
    excerpt:
      'New telephony deployments help institutions route calls intelligently and understand conversation quality with analytics.',
  },
] as const

export function NewsPage() {
  return (
    <>
      <Hero
        compact
        title="News & updates"
        subtitle="Product launches, research notes, and stories from the team building AI for Nepal."
        primaryCta={{ label: 'Contact press', href: 'mailto:info@aitrixlabs.com?subject=Press inquiry' }}
        secondaryCta={{ label: 'About Aitrix', to: '/about' }}
      />
      <Section className="border-t border-ink-900 bg-black">
        <Reveal>
          <Eyebrow className="text-primary">Latest</Eyebrow>
          <SectionHeading as="h2" className="!mb-10 max-w-[640px]">
            From the lab and the field
          </SectionHeading>
        </Reveal>
        <ul className="m-0 flex list-none flex-col gap-0 p-0">
          {STORIES.map((story) => (
            <li key={story.title} className="border-t border-ink-900 first:border-t-0">
              <Reveal>
                <article id={story.id} className="scroll-mt-28 grid gap-4 py-10 md:grid-cols-[140px_1fr] md:gap-10 md:py-12">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                    {story.date}
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">{story.title}</h3>
                    <p className="mb-6 max-w-[720px] text-base leading-relaxed text-ink-400">{story.excerpt}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                    >
                      Talk to our team
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>
      <Newsletter />
    </>
  )
}

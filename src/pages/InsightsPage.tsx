import { Link } from 'react-router-dom'
import { CTABar } from '../components/sections/CTABar'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'
import { Section } from '../components/ui/Container'
import { Eyebrow, SectionHeading } from '../components/ui/Eyebrow'
import { Reveal } from '../components/ui/Reveal'

export function InsightsPage() {
  return (
    <>
      <Hero
        compact
        title="Insights & blog"
        subtitle="Long-form stories, product deep dives, and practical guides for teams deploying AI across schools and enterprises in Nepal."
        primaryCta={{ label: 'All resources', to: '/resources' }}
        secondaryCta={{ label: 'Subscribe', href: 'mailto:info@aitrixlabs.com?subject=Newsletter' }}
      />
      <Section className="border-t border-ink-900 bg-black">
        <Reveal className="mb-10">
          <Eyebrow className="text-ink-400">Insights</Eyebrow>
          <SectionHeading className="mb-4">
            Field notes from institutions we work with
          </SectionHeading>
          <p className="max-w-[640px] text-sm leading-[1.75] text-ink-400">
            We publish case studies, implementation lessons, and research-backed perspectives on
            EdTech, communication, and voice AI. New articles land here first — browse the archive on
            the main{' '}
            <Link to="/resources" className="text-primary hover:underline">
              resources hub
            </Link>
            .
          </p>
        </Reveal>
        <Reveal>
          <p className="rounded-lg border border-ink-900 bg-ink-950 px-5 py-6 text-sm text-ink-500">
            Editorial calendar and RSS are coming soon. For now, reach out if you would like to
            contribute or be featured.
          </p>
        </Reveal>
      </Section>
      <CTABar
        title="Pitch a story"
        body="If your school or university is doing something worth sharing, we would love to help tell it."
        primaryCta={{ label: 'Email editorial', href: 'mailto:info@aitrixlabs.com?subject=Insights pitch' }}
        secondaryCta={{ label: 'View company', to: '/company' }}
      />
      <Newsletter />
    </>
  )
}

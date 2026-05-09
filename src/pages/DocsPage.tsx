import { Link } from 'react-router-dom'
import { CTABar } from '../components/sections/CTABar'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'
import { Section } from '../components/ui/Container'
import { Eyebrow, SectionHeading } from '../components/ui/Eyebrow'
import { Reveal } from '../components/ui/Reveal'

export function DocsPage() {
  return (
    <>
      <Hero
        compact
        title="Documentation"
        subtitle="API references, integration guides, and deployment notes for administrators and developers building on Aitrix products."
        primaryCta={{ label: 'Platform overview', to: '/platform' }}
        secondaryCta={{ label: 'Talk to solutions', href: 'mailto:info@aitrixlabs.com?subject=Docs help' }}
      />
      <Section className="border-t border-ink-900 bg-black">
        <Reveal className="mb-10">
          <Eyebrow className="text-ink-400">Docs</Eyebrow>
          <SectionHeading className="mb-4">Technical library</SectionHeading>
          <p className="max-w-[640px] text-sm leading-[1.75] text-ink-400">
            Full public documentation is expanding alongside our product surface. For architecture,
            security posture, and SLAs, start with the{' '}
            <Link to="/platform" className="text-primary hover:underline">
              platform
            </Link>{' '}
            section; this docs hub will link out to versioned guides as they ship.
          </p>
        </Reveal>
        <Reveal>
          <ul className="space-y-3 rounded-lg border border-ink-900 bg-ink-950 px-5 py-6 text-sm text-ink-400">
            <li className="flex gap-2">
              <span className="text-ink-600">—</span>
              Authentication and tenant setup (draft)
            </li>
            <li className="flex gap-2">
              <span className="text-ink-600">—</span>
              Webhooks and LMS integrations (draft)
            </li>
            <li className="flex gap-2">
              <span className="text-ink-600">—</span>
              Voice and telephony configuration (draft)
            </li>
          </ul>
        </Reveal>
      </Section>
      <CTABar
        title="Need an integration partner?"
        body="Our team helps you wire Aitrix into existing SIS, HR, and telecom stacks."
        primaryCta={{ label: 'Email solutions', href: 'mailto:info@aitrixlabs.com?subject=Integration' }}
        secondaryCta={{ label: 'Services', to: '/services' }}
      />
      <Newsletter />
    </>
  )
}

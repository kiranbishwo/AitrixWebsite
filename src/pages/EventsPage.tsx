import { CTABar } from '../components/sections/CTABar'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'
import { Section } from '../components/ui/Container'
import { Eyebrow, SectionHeading } from '../components/ui/Eyebrow'
import { Reveal } from '../components/ui/Reveal'

export function EventsPage() {
  return (
    <>
      <Hero
        compact
        title="Events"
        subtitle="Webinars, campus visits, and community meetups where we share product updates, research, and implementation playbooks."
        primaryCta={{ label: 'Request an invite', href: 'mailto:info@aitrixlabs.com?subject=Events' }}
        secondaryCta={{ label: 'Resources hub', to: '/resources' }}
      />
      <Section className="border-t border-ink-900 bg-black">
        <Reveal className="mb-10">
          <Eyebrow className="text-ink-400">Calendar</Eyebrow>
          <SectionHeading className="mb-4">Upcoming and recent</SectionHeading>
          <p className="max-w-[640px] text-sm leading-[1.75] text-ink-400">
            We host sessions for IT leaders, faculty, and partners across Nepal. Check back for
            confirmed dates and registration links, or email us to propose a workshop at your
            institution.
          </p>
        </Reveal>
        <Reveal>
          <p className="rounded-lg border border-ink-900 bg-ink-950 px-5 py-6 text-sm text-ink-500">
            No public events are listed yet. Join the newsletter on the homepage footer to hear when
            registrations open.
          </p>
        </Reveal>
      </Section>
      <CTABar
        title="Host Aitrix at your campus"
        body="We run tailored deep dives on LMS rollouts, AI communication, and telephony modernization."
        primaryCta={{ label: 'Plan a session', href: 'mailto:info@aitrixlabs.com?subject=Campus event' }}
        secondaryCta={{ label: 'Contact', to: '/contact' }}
      />
      <Newsletter />
    </>
  )
}

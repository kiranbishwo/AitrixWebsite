import { CTABar } from '../components/sections/CTABar'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'
import { Section } from '../components/ui/Container'
import { Eyebrow, SectionHeading } from '../components/ui/Eyebrow'
import { Reveal } from '../components/ui/Reveal'

export function TrainingPage() {
  return (
    <>
      <Hero
        compact
        title="Training"
        subtitle="Enablement for faculty, IT staff, and administrators — from LMS workflows to responsible use of AI assistants in the classroom."
        primaryCta={{ label: 'Request a program', href: 'mailto:info@aitrixlabs.com?subject=Training' }}
        secondaryCta={{ label: 'Explore services', to: '/services' }}
      />
      <Section className="border-t border-ink-900 bg-black">
        <Reveal className="mb-10">
          <Eyebrow className="text-ink-400">Programs</Eyebrow>
          <SectionHeading className="mb-4">Workshops and certification paths</SectionHeading>
          <p className="max-w-[640px] text-sm leading-[1.75] text-ink-400">
            We combine live sessions with async materials so teams can adopt new tools without
            disrupting the academic calendar. Topics include LMS administration, AI Livechat
            governance, and telephony operations.
          </p>
        </Reveal>
        <Reveal>
          <p className="rounded-lg border border-ink-900 bg-ink-950 px-5 py-6 text-sm text-ink-500">
            Catalog and self-serve modules are in progress. Contact us for a tailored onboarding plan
            for your institution.
          </p>
        </Reveal>
      </Section>
      <CTABar
        title="Train your whole campus"
        body="Bundle training with deployment so teachers and support staff hit the ground running."
        primaryCta={{ label: 'Book training', href: 'mailto:info@aitrixlabs.com?subject=Campus training' }}
        secondaryCta={{ label: 'Products', to: '/products' }}
      />
      <Newsletter />
    </>
  )
}

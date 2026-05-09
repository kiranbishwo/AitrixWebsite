import { AitrixGlyph } from '../icons/Icons'
import { LinkButton } from '../ui/Button'
import { Section } from '../ui/Container'
import { Eyebrow, SectionBody, SectionHeading } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

export function PlatformOverview() {
  return (
    <Section className="bg-black">
      <Reveal>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <Eyebrow icon={<AitrixGlyph className="h-[18px] w-[18px]" />} className="text-primary">
              Platform overview
            </Eyebrow>
            <SectionHeading>
              One AI company. Four pillars that change everything.
            </SectionHeading>
            <SectionBody>
              Aitrix Labs is Nepal&apos;s leading AI-powered technology company, operating at the
              intersection of education, communication, telephony, and research. We don&apos;t just
              build software — we build intelligent systems that help institutions teach better,
              communicate faster, connect reliably, and discover what&apos;s next.
              <br />
              <br />
              From schools in Kathmandu to enterprises across Nepal, our products are designed with
              local expertise and global AI standards.
            </SectionBody>
            <div className="flex flex-wrap items-center gap-3">
              <LinkButton variant="outline" to="/solutions">
                Learn More
              </LinkButton>
              <LinkButton variant="primary" href="mailto:info@aitrixlabs.com">
                Request a Demo
              </LinkButton>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/lms_interface_ui_1768753626398.png"
              alt="Aitrix LMS interface"
              className="w-full max-w-[560px] rounded-lg border border-ink-900"
            />
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

import { AitrixGlyph } from '../icons/Icons'
import { ArrowLink, LinkButton } from '../ui/Button'
import { Section } from '../ui/Container'
import { Eyebrow, SectionBody, SectionHeading } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

export function FastDeployment() {
  return (
    <Section className="border-t border-ink-900 bg-black">
      <Reveal>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="order-1 flex items-center justify-center lg:order-2">
            <img
              src="/images/cms_dashboard_ui_1768753670312.png"
              alt="Aitrix CMS dashboard"
              className="w-full max-w-[560px] rounded-lg border border-ink-900"
            />
          </div>
          <div className="order-2 lg:order-1">
            <Eyebrow icon={<AitrixGlyph className="h-[18px] w-[18px]" />} className="text-primary">
              Fast deployment
            </Eyebrow>
            <SectionHeading>Go live with confidence</SectionHeading>
            <SectionBody>
              Our team guides you from discovery to full rollout — covering LMS, AI Livechat,
              Telephony, and Research integrations. Every implementation includes training, data
              migration support, and a roadmap tailored to your institution&apos;s pace and scale.
            </SectionBody>
            <div className="flex flex-wrap items-center gap-3">
              <LinkButton variant="outline" to="/platform">
                Implementation Overview
              </LinkButton>
              <ArrowLink href="mailto:info@aitrixlabs.com">Talk to Us</ArrowLink>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

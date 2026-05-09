import { BookIcon, ClockIcon, GridIcon, ShieldIcon } from '../components/icons/Icons'
import { CTABar } from '../components/sections/CTABar'
import { FastDeployment } from '../components/sections/FastDeployment'
import { FeatureGrid, type Feature } from '../components/sections/FeatureGrid'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'

const SERVICES: Feature[] = [
  {
    Icon: BookIcon,
    title: 'Onboarding & training',
    description:
      'Hands-on enablement for educators, administrators, and IT — designed around your academic calendar.',
  },
  {
    Icon: GridIcon,
    title: 'Implementation & rollout',
    description:
      'From data migration to integrations with SIS, SSO, and telephony, we ship working systems, not slides.',
    accent: '#60EBD1',
  },
  {
    Icon: ShieldIcon,
    title: 'Security & compliance',
    description:
      'Hardening, access reviews, and data residency guidance for institutions handling student data.',
    accent: '#A78BFA',
  },
  {
    Icon: ClockIcon,
    title: 'Managed operations',
    description:
      '24/7 monitoring, incident response, and continuous improvement so your team stays focused on learners.',
    accent: '#F5A082',
  },
]

export function ServicesPage() {
  return (
    <>
      <Hero
        compact
        pill="Services"
        title="A team that ships with you"
        subtitle="Aitrix services go beyond software — we bring deployment, training, and ongoing operations expertise."
        primaryCta={{ label: 'Plan a rollout', href: 'mailto:info@aitrixlabs.com' }}
        secondaryCta={{ label: 'Read playbook', to: '/resources' }}
      />
      <FeatureGrid
        eyebrow="What we do"
        title="Services that move you from intent to impact"
        features={SERVICES}
        columns={4}
      />
      <FastDeployment />
      <CTABar
        title="Need a tailored engagement?"
        body="Tell us about your institution and timeline. We'll come back with a phased plan in days, not weeks."
      />
      <Newsletter />
    </>
  )
}

import {
  LegalDocPage,
  LegalHeading,
  LegalList,
  LegalParagraph,
} from '../components/sections/LegalDocPage'
import { Newsletter } from '../components/sections/Newsletter'

export function SecurityPage() {
  return (
    <>
    <LegalDocPage
      title="Security"
      subtitle="How we approach protecting institutional data and the availability of Aitrix Labs products."
    >
      <LegalParagraph>
        Security is central to how we design and operate EdTech, communication, and telephony
        workloads for schools and enterprises. This page summarizes our posture at a high level;
        contractual commitments may include additional detail for your deployment.
      </LegalParagraph>

      <LegalHeading>Architecture & hosting</LegalHeading>
      <LegalParagraph>
        We build on modern cloud patterns with separation of environments where appropriate, least-
        privilege access for operational roles, and monitoring aligned to the sensitivity of the
        workloads we run.
      </LegalParagraph>

      <LegalHeading>Encryption & access</LegalHeading>
      <LegalParagraph>
        Data in transit is protected using industry-standard TLS where applicable. Access to
        production systems and customer environments is limited to authorized personnel and tied to
        business need.
      </LegalParagraph>

      <LegalHeading>Incident response</LegalHeading>
      <LegalParagraph>
        We maintain processes to detect, contain, and recover from security events. Where we are
        contractually required to notify customers of incidents affecting their data, we follow the
        timelines and channels agreed in your agreement.
      </LegalParagraph>

      <LegalHeading>Your responsibilities</LegalHeading>
      <LegalParagraph>
        Institutions play a critical role in security: strong passwords, timely offboarding,
        correct configuration of SSO and integrations, and training staff on phishing and data
        handling all reduce risk alongside vendor controls.
      </LegalParagraph>
      <LegalList
        items={[
          'Keep administrator credentials and API keys confidential',
          'Review access roles when staff change roles or leave',
          'Report suspected misuse or compromise to your IT team and to us',
        ]}
      />

      <LegalHeading>Report a vulnerability</LegalHeading>
      <LegalParagraph>
        If you believe you have found a security issue in an Aitrix Labs property, please email us
        with a clear description and steps to reproduce. We appreciate responsible disclosure and will
        work with you to investigate.
      </LegalParagraph>
      <LegalParagraph>
        <a href="mailto:info@aitrixlabs.com?subject=Security disclosure" className="text-primary hover:text-white">
          info@aitrixlabs.com
        </a>{' '}
        (subject: Security disclosure)
      </LegalParagraph>

      <LegalParagraph className="!mb-0 text-xs text-ink-500">
        Last updated: May 2026. Specific controls may vary by product and deployment model.
      </LegalParagraph>
    </LegalDocPage>
    <Newsletter />
    </>
  )
}

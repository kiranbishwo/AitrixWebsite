import {
  LegalDocPage,
  LegalHeading,
  LegalList,
  LegalParagraph,
} from '../components/sections/LegalDocPage'
import { Newsletter } from '../components/sections/Newsletter'

export function PrivacyPage() {
  return (
    <>
      <LegalDocPage
        title="Privacy policy"
        subtitle="How Aitrix Labs collects, uses, and protects information when you use our websites and services."
      >
      <LegalParagraph>
        This policy describes our practices in plain language. If you use our sites or services,
        you agree to this policy alongside any agreement you sign with us.
      </LegalParagraph>

      <LegalHeading>Information we collect</LegalHeading>
      <LegalParagraph>
        We may collect information you provide directly (such as name, institution, email, and
        messages you send us), technical data from your device and browser (such as IP address and
        approximate region), and usage data about how you interact with our products and marketing.
      </LegalParagraph>
      <LegalList
        items={[
          'Account and contact details you submit on forms or demos',
          'Communications with our sales, support, or research teams',
          'Cookies and similar technologies where enabled (see your browser settings)',
        ]}
      />

      <LegalHeading>How we use information</LegalHeading>
      <LegalParagraph>
        We use data to operate and improve our products, respond to inquiries, secure our systems,
        comply with law, and — where permitted — share relevant updates about Aitrix Labs.
      </LegalParagraph>

      <LegalHeading>Sharing</LegalHeading>
      <LegalParagraph>
        We may share information with subprocessors that help us host, analyze, or deliver services
        (for example cloud or email providers), subject to contracts that require appropriate
        safeguards. We may disclose information if required by law or to protect rights and safety.
      </LegalParagraph>

      <LegalHeading>Retention</LegalHeading>
      <LegalParagraph>
        We keep information only as long as needed for the purposes above, unless a longer period is
        required by law or legitimate business needs such as dispute resolution.
      </LegalParagraph>

      <LegalHeading>Your choices</LegalHeading>
      <LegalParagraph>
        Depending on where you live, you may have rights to access, correct, delete, or restrict
        certain processing. Contact us using the details below and we will respond within a
        reasonable timeframe.
      </LegalParagraph>

      <LegalHeading>Contact</LegalHeading>
      <LegalParagraph>
        Questions about privacy:{' '}
        <a href="mailto:info@aitrixlabs.com" className="text-primary hover:text-white">
          info@aitrixlabs.com
        </a>
        <br />
        Aitrix Labs · Kathmandu, Nepal
      </LegalParagraph>
      <LegalParagraph className="!mb-0 text-xs text-ink-500">
        Last updated: May 2026. We may update this page from time to time; the revised date will be
        posted here.
      </LegalParagraph>
      </LegalDocPage>
      <Newsletter />
    </>
  )
}

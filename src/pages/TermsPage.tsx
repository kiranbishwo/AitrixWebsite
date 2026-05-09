import {
  LegalDocPage,
  LegalHeading,
  LegalList,
  LegalParagraph,
} from '../components/sections/LegalDocPage'
import { Newsletter } from '../components/sections/Newsletter'

export function TermsPage() {
  return (
    <>
    <LegalDocPage
      title="Terms of use"
      subtitle="Rules that apply when you access our websites, marketing materials, and related online properties."
    >
      <LegalParagraph>
        By accessing or using Aitrix Labs websites and online resources, you agree to these terms. If
        you purchase or deploy our products, additional agreements (such as an order form or data
        processing addendum) may also apply.
      </LegalParagraph>

      <LegalHeading>Services and changes</LegalHeading>
      <LegalParagraph>
        We may update features, content, or availability of our sites at any time. We do not
        guarantee uninterrupted access. Where we provide documentation or sample materials, they
        are for general guidance unless expressly incorporated into a contract.
      </LegalParagraph>

      <LegalHeading>Acceptable use</LegalHeading>
      <LegalParagraph>You agree not to:</LegalParagraph>
      <LegalList
        items={[
          'Probe, scan, or test vulnerabilities without written authorization',
          'Attempt to gain unauthorized access to our systems, data, or other customers',
          'Use our sites to distribute malware, spam, or unlawful content',
          'Misrepresent your affiliation with an institution or with Aitrix Labs',
        ]}
      />

      <LegalHeading>Intellectual property</LegalHeading>
      <LegalParagraph>
        Our trademarks, logos, software, documentation, and site content are owned by Aitrix Labs or
        our licensors. Except where we grant a license in writing, you may not copy, modify, or
        redistribute them.
      </LegalParagraph>

      <LegalHeading>Disclaimer</LegalHeading>
      <LegalParagraph>
        Our sites and marketing content are provided &quot;as is&quot; without warranties of any
        kind, to the fullest extent permitted by law. Nothing on these pages replaces professional or
        legal advice specific to your institution.
      </LegalParagraph>

      <LegalHeading>Limitation of liability</LegalHeading>
      <LegalParagraph>
        To the extent permitted by applicable law, Aitrix Labs is not liable for indirect,
        incidental, special, consequential, or punitive damages arising from your use of the sites,
        or for any loss of profits, data, or goodwill, except where liability cannot be excluded by
        law.
      </LegalParagraph>

      <LegalHeading>Governing law</LegalHeading>
      <LegalParagraph>
        These terms are governed by the laws of Nepal, without regard to conflict-of-law rules,
        unless a signed agreement with you specifies otherwise.
      </LegalParagraph>

      <LegalHeading>Contact</LegalHeading>
      <LegalParagraph>
        Legal inquiries:{' '}
        <a href="mailto:info@aitrixlabs.com" className="text-primary hover:text-white">
          info@aitrixlabs.com
        </a>
        <br />
        Aitrix Labs · Kathmandu, Nepal
      </LegalParagraph>
      <LegalParagraph className="!mb-0 text-xs text-ink-500">
        Last updated: May 2026.
      </LegalParagraph>
    </LegalDocPage>
    <Newsletter />
    </>
  )
}

import { PARTNERS } from '../../data/content'
import { ArrowLink } from '../ui/Button'
import { PartnerTile } from '../ui/PartnerTile'
import { Section } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

export function PartnerEcosystem() {
  return (
    <Section className="border-t border-ink-900 bg-ink-950">
      <Reveal>
        <div className="mb-12 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-ink-900 bg-ink-900 sm:grid-cols-4 lg:grid-cols-8">
          {PARTNERS.map((p) => (
            <PartnerTile key={p.alt} src={p.src} alt={p.alt} />
          ))}
        </div>
      </Reveal>

      <Reveal className="max-w-[720px]">
        <Eyebrow className="text-ink-400">Partner ecosystem</Eyebrow>
        <h2 className="mb-3 text-4xl font-bold tracking-[-1px] text-white">
          Built for real classrooms and real IT stacks
        </h2>
        <p className="mb-6 max-w-[560px] text-[15px] leading-[1.7] text-ink-400">
          Aitrix products integrate with the cloud, identity, communication, and data platforms
          your teams already use — so procurement, IT, and academic leaders stay aligned from day
          one.
        </p>
        <div className="flex flex-wrap gap-5">
          <ArrowLink href="https://aitrixlabs.com">Our approach</ArrowLink>
          <ArrowLink href="mailto:info@aitrixlabs.com">Integration questions</ArrowLink>
        </div>
      </Reveal>
    </Section>
  )
}

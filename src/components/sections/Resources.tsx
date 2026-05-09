import { RESOURCES_HIGHLIGHTS } from '../../data/content'
import { ResourceCard } from '../ui/ResourceCard'
import { Section } from '../ui/Container'
import { Eyebrow, SectionHeading } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

export function Resources() {
  const [primary, ...rest] = RESOURCES_HIGHLIGHTS
  return (
    <Section className="border-t border-ink-900 bg-ink-950">
      <Reveal className="mb-8">
        <Eyebrow className="text-ink-400">Resources</Eyebrow>
        <SectionHeading className="mb-0">
          Insights for education and technology leaders
        </SectionHeading>
      </Reveal>
      <Reveal>
        <div className="grid items-start gap-5 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <ResourceCard {...primary} primary />
          {rest.map((r) => (
            <ResourceCard key={r.title} {...r} />
          ))}
        </div>
      </Reveal>
    </Section>
  )
}

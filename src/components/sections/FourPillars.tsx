import { PILLARS } from '../../data/content'
import { PillarCard } from '../ui/PillarCard'
import { Section } from '../ui/Container'
import { Eyebrow, SectionHeading } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

export function FourPillars() {
  return (
    <Section className="border-t border-ink-900 bg-ink-950">
      <Reveal className="mx-auto mb-10 max-w-[760px] text-center">
        <Eyebrow centered className="text-ink-400">
          Four core pillars
        </Eyebrow>
        <SectionHeading>What Aitrix Labs does</SectionHeading>
      </Reveal>
      <Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {PILLARS.map((pillar) => (
            <PillarCard
              key={pillar.title}
              label={pillar.label}
              title={pillar.title}
              description={pillar.description}
              cta={pillar.cta}
              to={pillar.to}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  )
}

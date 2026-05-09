import { STATS } from '../../data/content'
import { StatBox } from '../ui/StatBox'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

export function Stats() {
  return (
    <section className="border-t border-ink-900 bg-ink-950 px-6 py-16">
      <Container>
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-lg border border-ink-900 bg-ink-900 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <StatBox key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

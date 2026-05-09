import { PRODUCT_SUITE } from '../../data/content'
import { Section } from '../ui/Container'
import { Eyebrow, SectionHeading } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

export function ProductSuite() {
  return (
    <Section className="border-t border-ink-900 bg-black">
      <Reveal className="mx-auto mb-10 max-w-[800px] text-center">
        <Eyebrow centered className="text-ink-400">
          Product suite
        </Eyebrow>
        <SectionHeading>The full Aitrix Labs product suite</SectionHeading>
      </Reveal>
      <Reveal>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_SUITE.map((col) => (
            <div key={col.title}>
              <h4
                className="mb-3.5 text-xs font-bold uppercase tracking-[1px]"
                style={{ color: col.color }}
              >
                {col.title}
              </h4>
              <ul className="m-0 list-none p-0">
                {col.items.map((item) => (
                  <li
                    key={item.name}
                    className="relative mb-2.5 pl-3.5 text-[13px] leading-[1.55] text-ink-400 before:absolute before:left-0 before:top-[7px] before:h-[5px] before:w-[5px] before:rounded-full before:bg-primary/70 before:content-['']"
                  >
                    <strong className="text-ink-200">{item.name}</strong> — {item.desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}

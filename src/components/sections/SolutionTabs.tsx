import { useState } from 'react'
import { SOLUTION_TABS, type SolutionTabId } from '../../data/content'
import { ArrowRightIcon } from '../icons/Icons'
import { LinkButton } from '../ui/Button'
import { Section } from '../ui/Container'
import { Eyebrow, SectionHeading } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

export function SolutionTabs() {
  const [active, setActive] = useState<SolutionTabId>('accelerate')
  const activeTab = SOLUTION_TABS.find((t) => t.id === active) ?? SOLUTION_TABS[0]

  return (
    <Section className="border-t border-ink-900 bg-ink-950">
      <Reveal className="mb-10">
        <Eyebrow className="text-ink-400">Why Aitrix</Eyebrow>
        <SectionHeading>
          What changes when your institution goes truly AI-powered?
        </SectionHeading>
        <p className="max-w-[640px] text-[15px] leading-[1.7] text-ink-400">
          From adaptive learning to intelligent telephony and research-backed AI, Aitrix helps
          institutions move faster without sacrificing quality, compliance, or the human touch.
        </p>
      </Reveal>

      <div className="mb-12 flex border-b border-ink-900">
        {SOLUTION_TABS.map((tab) => {
          const isActive = tab.id === active
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`-mb-px border-b-2 px-6 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'border-primary text-white'
                  : 'border-transparent text-ink-500 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div
        key={activeTab.id}
        className="grid animate-fade-up items-center gap-16 lg:grid-cols-2"
      >
        <div>
          <h3 className="mb-3.5 text-[26px] font-bold text-white">
            {activeTab.title}
          </h3>
          <p className="mb-6 text-sm leading-[1.7] text-ink-400">{activeTab.body}</p>
          <LinkButton variant="outline" href="https://aitrixlabs.com">
            {activeTab.cta}
            <ArrowRightIcon className="ml-1 h-3 w-3" />
          </LinkButton>
        </div>
        <div>
          <img src={activeTab.image} alt="" className="w-full rounded-lg" />
        </div>
      </div>
    </Section>
  )
}

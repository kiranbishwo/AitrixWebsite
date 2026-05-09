import type { ComponentType, CSSProperties, SVGProps } from 'react'
import { PRODUCT_SUITE, type ProductSuiteItemIcon, type SuitePillarId } from '../../data/content'
import {
  SuiteIconAssessment,
  SuiteIconCallAnalytics,
  SuiteIconCms,
  SuiteIconCustomAi,
  SuiteIconIvr,
  SuiteIconLivechat,
  SuiteIconLms,
  SuiteIconNlp,
  SuiteIconNotify,
  SuiteIconPbx,
  SuiteIconPortal,
  SuiteIconPublications,
  SuiteIconResponsible,
  SuiteIconTutor,
  SuitePillarCommIcon,
  SuitePillarEdTechIcon,
  SuitePillarResearchIcon,
  SuitePillarTelephonyIcon,
} from '../icons/ProductSuiteIcons'
import { Section } from '../ui/Container'
import { Eyebrow, SectionHeading } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

type IconComp = ComponentType<SVGProps<SVGSVGElement>>

const PILLAR_ICONS: Record<SuitePillarId, IconComp> = {
  edtech: SuitePillarEdTechIcon,
  communication: SuitePillarCommIcon,
  telephony: SuitePillarTelephonyIcon,
  research: SuitePillarResearchIcon,
}

const ITEM_ICONS: Record<ProductSuiteItemIcon, IconComp> = {
  lms: SuiteIconLms,
  cms: SuiteIconCms,
  assessment: SuiteIconAssessment,
  tutor: SuiteIconTutor,
  livechat: SuiteIconLivechat,
  portal: SuiteIconPortal,
  notify: SuiteIconNotify,
  ivr: SuiteIconIvr,
  callAnalytics: SuiteIconCallAnalytics,
  pbx: SuiteIconPbx,
  nlp: SuiteIconNlp,
  responsible: SuiteIconResponsible,
  publications: SuiteIconPublications,
  customAi: SuiteIconCustomAi,
}

export function ProductSuite() {
  return (
    <Section className="relative overflow-hidden border-t border-ink-900 bg-black">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(83,102,174,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_60%,rgba(96,235,209,0.06),transparent_45%)]"
        aria-hidden
      />

      <Reveal className="relative mx-auto mb-12 max-w-[800px] text-center">
        <Eyebrow centered className="text-ink-400">
          Product suite
        </Eyebrow>
        <SectionHeading className="!mb-0">The full Aitrix Labs product suite</SectionHeading>
      </Reveal>

      <Reveal>
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {PRODUCT_SUITE.map((col) => {
            const PillarIcon = PILLAR_ICONS[col.id]
            return (
              <article
                key={col.id}
                className="group relative flex flex-col rounded-2xl border border-ink-900 bg-gradient-to-b from-ink-950/80 to-black p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-ink-800 hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.65)]"
                style={{ ['--suite-accent' as string]: col.color } as CSSProperties}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(120% 80% at 50% 0%, ${col.color}14, transparent 62%)`,
                  }}
                  aria-hidden
                />

                <header className="relative mb-5 flex items-start gap-3.5">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_8px_24px_-8px_var(--suite-accent)]"
                    style={{ color: col.color }}
                  >
                    <PillarIcon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-300">
                      {col.title}
                    </h3>
                    <div
                      className="mt-2 h-px w-12 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${col.color}, transparent)`,
                      }}
                    />
                  </div>
                </header>

                <ul className="relative m-0 flex flex-1 list-none flex-col gap-0.5 p-0">
                  {col.items.map((item) => {
                    const ItemIcon = ITEM_ICONS[item.icon]
                    return (
                      <li key={item.name} className="rounded-xl py-2.5 pl-0 pr-0 transition-colors hover:bg-white/[0.02]">
                        <div className="flex gap-3">
                          <div
                            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.06]"
                            style={{
                              color: col.color,
                              backgroundColor: `${col.color}12`,
                            }}
                          >
                            <ItemIcon className="h-[18px] w-[18px]" />
                          </div>
                          <div className="min-w-0 text-[13px] leading-[1.55]">
                            <strong className="font-semibold text-ink-100">{item.name}</strong>
                            <span className="text-ink-500"> — </span>
                            <span className="text-ink-400">{item.desc}</span>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </article>
            )
          })}
        </div>
      </Reveal>
    </Section>
  )
}

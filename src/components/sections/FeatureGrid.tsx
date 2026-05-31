import type { ReactNode } from 'react'
import { Section } from '../ui/Container'
import { Eyebrow, SectionHeading } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

export interface Feature {
  title: string
  description: string
  Icon?: (props: { className?: string }) => ReactNode
  accent?: string
  /** Scroll target for in-page / hash navigation */
  anchorId?: string
}

interface FeatureGridProps {
  eyebrow?: string
  title?: string
  body?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  className?: string
  variant?: 'dark' | 'light'
}

const colsClass: Record<2 | 3 | 4, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
}

export function FeatureGrid({
  eyebrow,
  title,
  body,
  features,
  columns = 3,
  className,
  variant = 'dark',
}: FeatureGridProps) {
  const isLight = variant === 'light'
  const sectionClass =
    className ??
    (isLight ? 'border-t border-ink-200 bg-white' : 'border-t border-ink-900 bg-ink-950')

  return (
    <Section className={sectionClass}>
      {(eyebrow || title || body) && (
        <Reveal className="mx-auto mb-12 max-w-[760px] text-center">
          {eyebrow && (
            <Eyebrow
              centered
              className={isLight ? 'text-[#8B5CF6]' : 'text-ink-400'}
            >
              {eyebrow}
            </Eyebrow>
          )}
          {title && (
            <SectionHeading className={isLight ? '!text-ink-900' : undefined}>
              {title}
            </SectionHeading>
          )}
          {body && (
            <p
              className={`mx-auto max-w-[640px] text-[15px] leading-[1.7] ${
                isLight ? 'text-ink-600' : 'text-ink-400'
              }`}
            >
              {body}
            </p>
          )}
        </Reveal>
      )}
      <Reveal>
        <div className={`grid grid-cols-1 gap-5 ${colsClass[columns]}`}>
          {features.map((f) => (
            <div
              key={f.title}
              id={f.anchorId}
              className={`flex flex-col gap-3 rounded-[10px] p-7${
                isLight
                  ? ' border border-ink-200 bg-ink-50'
                  : ' border border-ink-900 bg-ink-900/60'
              }${f.anchorId ? ' scroll-mt-28' : ''}`}
            >
              {f.Icon && (
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg border ${
                    isLight ? 'border-ink-200 bg-white' : 'border-ink-800'
                  }`}
                  style={{ color: f.accent ?? '#5366AE' }}
                >
                  <f.Icon className="h-5 w-5" />
                </div>
              )}
              <h3 className={`text-lg font-bold ${isLight ? 'text-ink-900' : 'text-white'}`}>
                {f.title}
              </h3>
              <p
                className={`text-sm leading-[1.65] ${isLight ? 'text-ink-600' : 'text-ink-400'}`}
              >
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}

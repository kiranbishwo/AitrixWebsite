import type { ReactNode } from 'react'
import { Hero } from './Hero'
import { Section } from '../ui/Container'

export function LegalHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-12 scroll-mt-24 font-bold text-white first:mt-0 md:text-xl">{children}</h2>
  )
}

export function LegalParagraph({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p className={`mb-4 text-[15px] leading-[1.75] text-ink-400 last:mb-0 ${className}`}>
      {children}
    </p>
  )
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="mb-4 ml-5 list-disc space-y-2 text-[15px] leading-[1.65] text-ink-400 marker:text-primary">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

interface LegalDocPageProps {
  title: string
  subtitle: string
  children: ReactNode
}

export function LegalDocPage({ title, subtitle, children }: LegalDocPageProps) {
  return (
    <>
      <Hero compact title={title} subtitle={subtitle} />
      <Section className="border-t border-ink-900 bg-black py-14 md:py-20">
        <article className="mx-auto max-w-[720px]">{children}</article>
      </Section>
    </>
  )
}

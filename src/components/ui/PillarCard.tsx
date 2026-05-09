import { ArrowLink } from './Button'

export interface PillarCardProps {
  label: string
  title: string
  description: string
  cta: string
  href?: string
  to?: string
}

export function PillarCard({ label, title, description, cta, href, to }: PillarCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-[10px] border border-ink-900 bg-ink-900/60 p-7">
      <div className="text-sm font-semibold text-primary">{label}</div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="flex-1 text-sm leading-[1.65] text-ink-400">{description}</p>
      <ArrowLink to={to} href={href}>
        {cta}
      </ArrowLink>
    </div>
  )
}

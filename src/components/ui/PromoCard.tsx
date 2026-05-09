import { AitrixGlyph } from '../icons/Icons'

export interface PromoCardProps {
  title: string
  description: string
  ctaLabel: string
  ctaHref?: string
}

export function PromoCard({ title, description, ctaLabel, ctaHref = '#' }: PromoCardProps) {
  return (
    <div className="rounded-[10px] border border-primary/35 bg-promo-card p-5">
      <div className="mb-2.5 flex items-center gap-2">
        <AitrixGlyph className="h-[18px] w-[18px]" />
        <span className="text-sm font-bold text-white">{title}</span>
      </div>
      <p className="mb-4 text-xs leading-[1.55] text-white/65">{description}</p>
      <a
        href={ctaHref}
        className="inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-hover"
      >
        {ctaLabel} →
      </a>
    </div>
  )
}

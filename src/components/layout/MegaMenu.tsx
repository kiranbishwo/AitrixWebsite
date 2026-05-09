import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  COMPANY_ITEMS,
  PLATFORM_ITEMS,
  PRODUCTS_OPERATIONS,
  PRODUCTS_TEACHING,
  RESEARCH_ITEMS,
  RESOURCES_PRIMARY,
  RESOURCES_SECONDARY,
  SOLUTIONS_ITEMS,
  type MegaItem,
  type MegaSubItem,
  type MenuKey,
} from '../../data/nav'
import { PromoCard } from '../ui/PromoCard'

interface MegaShellProps {
  open: boolean
  children: ReactNode
  width?: 'narrow' | 'medium' | 'wide'
}

function MegaShell({ open, children, width = 'wide' }: MegaShellProps) {
  if (!open) return null
  const widthClass =
    width === 'narrow'
      ? 'max-w-[300px]'
      : width === 'medium'
        ? 'max-w-[640px]'
        : ''
  return (
    <div className="fixed inset-x-0 top-16 z-[200] px-6">
      <div className="mx-auto w-full max-w-container">
        <div
          className={`animate-mega-in rounded-b-xl border border-t-0 border-ink-200 bg-white p-7 shadow-mega ${widthClass}`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function MegaItemRow({ item }: { item: MegaItem }) {
  const Icon = item.Icon
  const inner = (
    <>
      <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg border border-ink-200 bg-ink-100">
        <Icon className="h-[15px] w-[15px] text-ink-600" />
      </div>
      <div>
        <div className="mb-0.5 text-[13.5px] font-semibold text-ink-800">
          {item.title}
        </div>
        <div className="text-[11.5px] leading-[1.5] text-ink-500">
          {item.description}
        </div>
      </div>
    </>
  )
  const cls =
    'flex items-start gap-3 rounded-lg p-3 text-left transition-colors hover:bg-ink-50'
  if (item.to) {
    return (
      <Link to={item.to} className={cls}>
        {inner}
      </Link>
    )
  }
  return (
    <a href={item.href ?? '#'} className={cls}>
      {inner}
    </a>
  )
}

function MegaSubRow({
  item,
  highlightColor,
}: {
  item: MegaSubItem
  highlightColor?: string
}) {
  const inner = (
    <>
      <span
        className="inline-block h-3 w-3 shrink-0 rounded-sm"
        style={{ backgroundColor: item.swatch ?? '#9CA3AF' }}
      />
      <span
        className={`flex items-center gap-2 ${
          item.highlight ? 'font-semibold' : ''
        }`}
        style={item.highlight ? { color: highlightColor ?? '#7948FF' } : undefined}
      >
        {item.label}
        {item.hint && (
          <span className="text-[11px] font-normal text-ink-400">— {item.hint}</span>
        )}
      </span>
    </>
  )
  const cls =
    'flex items-center gap-2 rounded-md px-3 py-2 text-[13px] text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-800'
  if (item.to) {
    return (
      <Link to={item.to} className={cls}>
        {inner}
      </Link>
    )
  }
  return (
    <a href={item.href ?? '#'} className={cls}>
      {inner}
    </a>
  )
}

function SimpleListItem({
  Icon,
  label,
  to,
  href,
}: {
  Icon: MegaItem['Icon']
  label: string
  to?: string
  href?: string
}) {
  const cls =
    'flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-800'
  const inner = (
    <>
      <Icon className="h-3.5 w-3.5 shrink-0" />
      {label}
    </>
  )
  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    )
  }
  return (
    <a href={href ?? '#'} className={cls}>
      {inner}
    </a>
  )
}

function PlainLinkItem({
  label,
  to,
  href,
}: {
  label: string
  to?: string
  href?: string
}) {
  const cls =
    'block rounded-md px-3 py-2 text-[13px] text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-800'
  if (to) {
    return (
      <Link to={to} className={cls}>
        {label}
      </Link>
    )
  }
  return (
    <a href={href ?? '#'} className={cls}>
      {label}
    </a>
  )
}

interface MegaMenusProps {
  active: MenuKey | null
}

export function MegaMenus({ active }: MegaMenusProps) {
  return (
    <>
      <MegaShell open={active === 'solutions'}>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_300px]">
          <div className="flex flex-col gap-1">
            {SOLUTIONS_ITEMS.map((item) => (
              <MegaItemRow key={item.title} item={item} />
            ))}
          </div>
          <PromoCard
            title="Aitrix Labs"
            description="Explore EdTech, AI communication, telephony, and research products built for Nepali institutions"
            ctaLabel="View products"
            ctaHref="/products"
          />
        </div>
      </MegaShell>

      <MegaShell open={active === 'products'}>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_1fr_270px]">
          <div>
            <div
              className="px-3 pb-1.5 pt-1 text-[10.5px] font-bold uppercase tracking-[1.5px]"
              style={{ color: '#7948FF' }}
            >
              Teaching & learning
            </div>
            <div className="flex flex-col gap-0.5">
              {PRODUCTS_TEACHING.map((item) => (
                <MegaSubRow key={item.label} item={item} highlightColor="#7948FF" />
              ))}
            </div>
          </div>
          <div>
            <div
              className="px-3 pb-1.5 pt-1 text-[10.5px] font-bold uppercase tracking-[1.5px]"
              style={{ color: '#FF6423' }}
            >
              Operations & insight
            </div>
            <div className="flex flex-col gap-0.5">
              {PRODUCTS_OPERATIONS.map((item) => (
                <MegaSubRow key={item.label} item={item} />
              ))}
            </div>
          </div>
          <PromoCard
            title="Talk to Aitrix"
            description="Book a walkthrough of LMS, CMS, I-ROMS, Livechat, telephony, and research for your campus"
            ctaLabel="Contact sales"
            ctaHref="mailto:info@aitrixlabs.com"
          />
        </div>
      </MegaShell>

      <MegaShell open={active === 'developers'} width="narrow">
        <div className="flex flex-col gap-0.5">
          {PLATFORM_ITEMS.map((item) => (
            <SimpleListItem key={item.label} {...item} />
          ))}
        </div>
      </MegaShell>

      <MegaShell open={active === 'resources'}>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          <div className="flex flex-col gap-0.5">
            {RESOURCES_PRIMARY.map((item) => (
              <SimpleListItem key={item.label} {...item} />
            ))}
          </div>
          <div className="flex flex-col gap-0.5">
            {RESOURCES_SECONDARY.map((item) => (
              <SimpleListItem key={item.label} {...item} />
            ))}
          </div>
        </div>
      </MegaShell>

      <MegaShell open={active === 'research'} width="narrow">
        <div className="flex flex-col gap-0.5">
          {RESEARCH_ITEMS.map((item) => (
            <PlainLinkItem key={item.label} {...item} />
          ))}
        </div>
      </MegaShell>

      <MegaShell open={active === 'company'} width="narrow">
        <div className="flex flex-col gap-0.5">
          {COMPANY_ITEMS.map((item) => (
            <PlainLinkItem key={item.label} {...item} />
          ))}
        </div>
      </MegaShell>
    </>
  )
}

import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  COMPANY_ITEMS,
  RESEARCH_ITEMS,
  RESOURCES_ITEMS,
  SOLUTIONS_EXPLORE,
  SOLUTIONS_ITEMS,
  type MegaItem,
  type MenuKey,
  type SimpleLink,
} from '../../data/nav'
import { PromoCard } from '../ui/PromoCard'

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

function ExploreRow({ label, hint, to }: { label: string; hint: string; to: string }) {
  return (
    <Link
      to={to}
      className="flex items-baseline justify-between gap-3 rounded-md px-3 py-2 text-[13px] text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-800"
    >
      <span className="font-semibold">{label}</span>
      <span className="text-[11px] font-normal text-ink-400">{hint}</span>
    </Link>
  )
}

function SimpleLinkRow({ link }: { link: SimpleLink }) {
  const cls =
    'block rounded-md px-3 py-2 text-[13px] font-medium text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-800'
  if (link.to) {
    return (
      <Link to={link.to} className={cls}>
        {link.label}
      </Link>
    )
  }
  return (
    <a href={link.href ?? '#'} className={cls}>
      {link.label}
    </a>
  )
}

function MenuSectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="px-3 pb-2 pt-1 text-[10.5px] font-bold uppercase tracking-[1.5px] text-ink-400">
      {children}
    </div>
  )
}

function dropdownShell(narrow: boolean, children: ReactNode) {
  return (
    <div
      className={`animate-mega-in rounded-b-xl border border-ink-200 bg-white p-7 shadow-mega ${
        narrow
          ? 'min-w-[240px] w-max max-w-[320px]'
          : 'w-[min(calc(100vw-3rem),56rem)] max-w-none'
      }`}
    >
      {children}
    </div>
  )
}

/** Renders the dropdown panel only — parent supplies `relative` + `absolute left-0 top-full` positioning. */
export function NavDropdownPanel({ menu }: { menu: MenuKey }) {
  switch (menu) {
    case 'solutions':
      return dropdownShell(
        false,
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.4fr_1fr_280px]">
          <div>
            <MenuSectionLabel>By solution</MenuSectionLabel>
            <div className="flex flex-col gap-1">
              {SOLUTIONS_ITEMS.map((item) => (
                <MegaItemRow key={item.title} item={item} />
              ))}
            </div>
          </div>
          <div>
            <MenuSectionLabel>Explore</MenuSectionLabel>
            <div className="flex flex-col gap-0.5">
              {SOLUTIONS_EXPLORE.map((item) => (
                <ExploreRow key={item.label} {...item} />
              ))}
            </div>
          </div>
          <PromoCard
            title="Aitrix Labs"
            description="EdTech, communication, telephony, and research products built for Nepali institutions."
            ctaLabel="Talk to us"
            ctaHref="/contact"
          />
        </div>,
      )
    case 'research':
      return dropdownShell(
        true,
        <div className="flex flex-col gap-0.5">
          {RESEARCH_ITEMS.map((item) => (
            <SimpleLinkRow key={item.label} link={item} />
          ))}
        </div>,
      )
    case 'resources':
      return dropdownShell(
        true,
        <div className="flex flex-col gap-0.5">
          {RESOURCES_ITEMS.map((item) => (
            <SimpleLinkRow key={item.label} link={item} />
          ))}
        </div>,
      )
    case 'company':
      return dropdownShell(
        true,
        <div className="flex flex-col gap-0.5">
          {COMPANY_ITEMS.map((item) => (
            <SimpleLinkRow key={item.label} link={item} />
          ))}
        </div>,
      )
    default:
      return null
  }
}

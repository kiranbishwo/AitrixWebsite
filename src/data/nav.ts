import type { ReactNode } from 'react'
import {
  BookIcon,
  PhoneIcon,
  StarIcon,
  SwapIcon,
} from '../components/icons/Icons'

export type MenuKey = 'solutions' | 'research' | 'resources' | 'company'

export interface NavLink {
  label: string
  to?: string
  href?: string
  menu?: MenuKey
}

/**
 * Top-level nav items. When `menu` is set, the desktop renders a dropdown;
 * `to` is still used as the destination on mobile (and as a fallback link
 * target if the dropdown is bypassed).
 */
export const PRIMARY_NAV: NavLink[] = [
  { label: 'Solutions', menu: 'solutions', to: '/solutions' },
  { label: 'Services', to: '/services' },
  { label: 'Research', menu: 'research', to: '/research' },
  { label: 'Resources', menu: 'resources', to: '/resources' },
  { label: 'Company', menu: 'company', to: '/company' },
]

export interface MegaItem {
  Icon: (props: { className?: string }) => ReactNode
  title: string
  description: string
  to?: string
  href?: string
}

export const SOLUTIONS_ITEMS: MegaItem[] = [
  {
    Icon: BookIcon,
    title: 'EdTech',
    description:
      'AI-powered LMS, CMS, and learning analytics for schools and universities across Nepal.',
    to: '/solutions',
  },
  {
    Icon: SwapIcon,
    title: 'Communication',
    description:
      'AI Livechat and notification systems that connect students, parents, and staff in Nepali and English.',
    to: '/solutions',
  },
  {
    Icon: PhoneIcon,
    title: 'Telephony',
    description:
      'Cloud PBX, AI IVR, and call analytics built for institutions and enterprises.',
    to: '/solutions',
  },
  {
    Icon: StarIcon,
    title: 'AI Research Tools',
    description:
      'Nepali NLP, custom models, and responsible AI frameworks for academic and enterprise teams.',
    to: '/research',
  },
]

export interface ExploreLink {
  label: string
  hint: string
  to: string
}

export const SOLUTIONS_EXPLORE: ExploreLink[] = [
  {
    label: 'Products',
    hint: 'Browse the full Aitrix product suite',
    to: '/products',
  },
  {
    label: 'Platform',
    hint: 'APIs, security, and deployment',
    to: '/platform',
  },
]

export interface SimpleLink {
  label: string
  to?: string
  href?: string
}

export const RESEARCH_ITEMS: SimpleLink[] = [
  { label: 'Nepali NLP', to: '/research' },
  { label: 'Responsible AI', to: '/research' },
  { label: 'Publications', to: '/research' },
  { label: 'Collaborate', href: 'mailto:info@aitrixlabs.com' },
]

export const RESOURCES_ITEMS: SimpleLink[] = [
  { label: 'Insights / Blog', to: '/resources' },
  { label: 'Events', to: '/resources' },
  { label: 'Docs', to: '/platform' },
  { label: 'Training', to: '/resources' },
]

export const COMPANY_ITEMS: SimpleLink[] = [
  { label: 'About', to: '/company' },
  { label: 'Careers', to: '/company' },
  { label: 'News', to: '/company' },
  { label: 'Contact', to: '/contact' },
]

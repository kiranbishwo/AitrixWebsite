import type { ReactNode } from 'react'
import {
  GraphIcon,
  SwapIcon,
  StackIcon,
  StarIcon,
  DocIcon,
  ShieldIcon,
  PlayIcon,
  GridIcon,
  ListIcon,
  PartnerIcon,
  BookIcon,
  StarSparkIcon,
  MailBoxIcon,
  FileIcon,
  BriefcaseIcon,
  NetworkIcon,
  LockIcon,
  ClockIcon,
  HelpIcon,
} from '../components/icons/Icons'

export type MenuKey =
  | 'solutions'
  | 'products'
  | 'developers'
  | 'resources'
  | 'research'
  | 'company'

export interface NavLink {
  label: string
  to?: string
  href?: string
  menu?: MenuKey
  external?: boolean
}

export const PRIMARY_NAV: NavLink[] = [
  { label: 'Solutions', menu: 'solutions' },
  { label: 'Products', menu: 'products' },
  { label: 'Services', to: '/services' },
  { label: 'Platform', menu: 'developers' },
  { label: 'Resources', menu: 'resources' },
  { label: 'Research', menu: 'research' },
  { label: 'Company', menu: 'company' },
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
    Icon: GraphIcon,
    title: 'Unified EdTech operations',
    description:
      'Bring academics, administration, and communications together on one AI-ready platform for schools and universities',
    to: '/solutions',
  },
  {
    Icon: SwapIcon,
    title: 'Personalized teaching at scale',
    description:
      'Use adaptive learning, analytics, and automation so every learner progresses with guidance that fits their pace',
    to: '/solutions',
  },
  {
    Icon: StackIcon,
    title: 'Smarter campus efficiency',
    description:
      'Digitize routine work—from scheduling to records—so teams spend less time on paperwork and more on students',
    to: '/solutions',
  },
  {
    Icon: StarIcon,
    title: 'Trustworthy AI for education',
    description:
      'Deploy assistants and automation with clear oversight so institutions stay compliant and in control',
    to: '/solutions',
  },
]

export interface MegaSubItem {
  label: string
  hint?: string
  swatch?: string
  to?: string
  href?: string
  highlight?: boolean
}

export const PRODUCTS_TEACHING: MegaSubItem[] = [
  {
    label: 'Advanced LMS',
    hint: 'Personalized courses, assessments, and learner analytics',
    swatch: '#7948FF',
    highlight: true,
    to: '/products',
  },
  {
    label: 'Smart CMS',
    hint: 'Publish and manage institutional content with ease',
    swatch: '#00A4E4',
    to: '/products',
  },
  {
    label: 'AI Livechat',
    hint: '24/7 assistance for students, parents, and staff',
    swatch: '#60EBD1',
    to: '/products',
  },
  {
    label: 'AI Telephony',
    hint: 'IVR, call analytics, and cloud PBX for campuses',
    swatch: '#A78BFA',
    to: '/products',
  },
]

export const PRODUCTS_OPERATIONS: MegaSubItem[] = [
  {
    label: 'I-ROMS',
    hint: 'Integrated records and manpower for institutions',
    swatch: '#FFD814',
    to: '/products',
  },
  {
    label: 'Analytics & reporting',
    hint: 'Dashboards for outcomes and operations',
    swatch: '#EC4899',
    to: '/products',
  },
  {
    label: 'Implementation support',
    hint: 'Onboarding tailored to your institution',
    swatch: '#FFD814',
    to: '/products',
  },
  {
    label: 'Secure cloud delivery',
    hint: 'Reliable hosting options for education workloads',
    swatch: '#F5A082',
    to: '/products',
  },
]

export const PLATFORM_ITEMS: { label: string; Icon: MegaItem['Icon']; to: string }[] = [
  { label: 'Overview', Icon: DocIcon, to: '/platform' },
  { label: 'Security', Icon: ShieldIcon, to: '/platform' },
  { label: 'Deployment', Icon: PlayIcon, to: '/platform' },
  { label: 'APIs', Icon: GridIcon, to: '/platform' },
  { label: 'Roadmap', Icon: ListIcon, to: '/platform' },
  { label: 'Become a partner', Icon: PartnerIcon, to: '/platform' },
]

export const RESOURCES_PRIMARY: { label: string; Icon: MegaItem['Icon']; to: string }[] = [
  { label: 'Educator training', Icon: BookIcon, to: '/resources' },
  { label: 'Resource library', Icon: StarSparkIcon, to: '/resources' },
  { label: 'Insights & updates', Icon: MailBoxIcon, to: '/resources' },
  { label: 'Institution stories', Icon: BookIcon, to: '/resources' },
  { label: 'EdTech guides', Icon: FileIcon, to: '/resources' },
  { label: 'Partner resources', Icon: BriefcaseIcon, to: '/resources' },
]

export const RESOURCES_SECONDARY: { label: string; Icon: MegaItem['Icon']; to?: string; href?: string }[] = [
  { label: 'Technology partners', Icon: NetworkIcon, to: '/resources' },
  { label: 'Schools & universities', Icon: LockIcon, to: '/resources' },
  { label: 'Leadership briefings', Icon: StarSparkIcon, to: '/resources' },
  { label: 'Implementation & success', Icon: ClockIcon, to: '/resources' },
  { label: 'Help center', Icon: HelpIcon, href: 'mailto:info@aitrixlabs.com' },
]

export const RESEARCH_ITEMS: { label: string; to?: string; href?: string }[] = [
  { label: 'Overview', to: '/research' },
  { label: 'Nepali NLP', to: '/research' },
  { label: 'Responsible AI', to: '/research' },
  { label: 'Publications', to: '/research' },
  { label: 'Collaborate with us', href: 'mailto:info@aitrixlabs.com' },
]

export const COMPANY_ITEMS: { label: string; to?: string; href?: string }[] = [
  { label: 'About Aitrix Labs', to: '/company' },
  { label: 'Our mission', to: '/company' },
  { label: 'Careers', to: '/company' },
  { label: 'Events & webinars', to: '/company' },
  { label: 'Research & innovation', to: '/research' },
  { label: 'Contact', href: 'mailto:info@aitrixlabs.com' },
  { label: 'Partner with us', to: '/company' },
]

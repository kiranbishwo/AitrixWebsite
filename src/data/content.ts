export const PARTNERS = [
  { src: 'https://www.datocms-assets.com/2885/1657810100-aws-logo.svg', alt: 'AWS' },
  { src: 'https://www.datocms-assets.com/2885/1677006505-docker-color.svg', alt: 'Docker' },
  { src: 'https://www.datocms-assets.com/2885/1696960587-oracle-color-24-1.svg', alt: 'Oracle' },
  { src: 'https://www.datocms-assets.com/2885/1696960783-gcp-color.svg', alt: 'GCP' },
  { src: 'https://www.datocms-assets.com/2885/1696963005-kubernetes-color.svg', alt: 'Kubernetes' },
  { src: 'https://www.datocms-assets.com/2885/1696963238-snowflake-color.svg', alt: 'Snowflake' },
  { src: 'https://www.datocms-assets.com/2885/1696964034-microsoft-color.svg', alt: 'Microsoft' },
  { src: 'https://www.datocms-assets.com/2885/1677809100-okta-color.svg', alt: 'Okta' },
  { src: 'https://www.datocms-assets.com/2885/1696964342-f5-color.svg', alt: 'F5' },
  { src: 'https://www.datocms-assets.com/2885/1677808958-datadog-color.svg', alt: 'Datadog' },
  { src: 'https://www.datocms-assets.com/2885/1677005502-aws-lambda-color.svg', alt: 'Lambda' },
  { src: 'https://www.datocms-assets.com/2885/1646322258-cisco-logo.svg', alt: 'Cisco' },
  { src: 'https://www.datocms-assets.com/2885/1696964227-mongodb-color.svg', alt: 'MongoDB' },
  { src: 'https://www.datocms-assets.com/2885/1697649997-pwc.svg', alt: 'PwC' },
  { src: 'https://www.datocms-assets.com/2885/1696963974-alibaba-color.svg', alt: 'Alibaba' },
  { src: 'https://www.datocms-assets.com/2885/1696963667-green-logo-color.svg', alt: 'Partner' },
]

export interface MarqueeItem {
  type: 'image' | 'text'
  value: string
  alt?: string
}

export const MARQUEE: MarqueeItem[] = [
  { type: 'image', value: '/logo.png', alt: 'Partner school' },
  { type: 'text', value: 'Enterprise' },
  { type: 'image', value: '/logo.png', alt: 'Partner institution' },
  { type: 'text', value: 'Telecom' },
  { type: 'image', value: '/logo.png', alt: 'Partner university' },
  { type: 'text', value: 'K–12' },
  { type: 'image', value: '/logo.png', alt: 'Partner campus' },
  { type: 'text', value: 'Higher Ed' },
  { type: 'image', value: '/logo.png', alt: 'Partner network' },
  { type: 'text', value: 'Enterprise IT' },
  { type: 'image', value: '/logo.png', alt: 'Partner school' },
  { type: 'text', value: 'Telecom' },
  { type: 'image', value: '/logo.png', alt: 'Partner institution' },
]

export const PILLARS = [
  {
    label: 'Pillar 1 — AI-Powered EdTech',
    title: 'Transform how Nepal learns',
    description:
      'Our LMS, Smart CMS, assessments, and AI tutoring tools help schools and universities deliver personalized, outcome-driven education at scale. From adaptive learning paths to real-time analytics, we give educators the tools to reach every learner.',
    cta: 'Explore EdTech',
    to: '/products',
  },
  {
    label: 'Pillar 2 — AI Communication',
    title: 'Smarter conversations, everywhere',
    description:
      'Our AI Livechat and communication suite handles student queries, parent communications, and staff coordination in both Nepali and English — 24/7, without losing the human touch. Intelligent routing, instant answers, and full institutional alignment.',
    cta: 'Explore Communication',
    to: '/products',
  },
  {
    label: 'Pillar 3 — AI Telephony',
    title: 'Voice intelligence for modern institutions',
    description:
      'AI-powered voice systems, call management, IVR automation, and telephony infrastructure built for schools, colleges, and enterprises. Reduce call loads, route smartly, and capture every conversation with intelligence.',
    cta: 'Explore Telephony',
    to: '/products',
  },
  {
    label: 'Pillar 4 — AI Research',
    title: "Advancing Nepal's AI frontier",
    description:
      "Our research division works on NLP for Nepali language, machine learning models, and responsible AI frameworks. We publish findings, collaborate with academic institutions, and build the foundations that power our own products — and the broader Nepali AI ecosystem.",
    cta: 'Explore Research',
    to: '/research',
  },
] as const

export interface ProductSuiteColumn {
  title: string
  color: string
  items: { name: string; desc: string }[]
}

export const PRODUCT_SUITE: ProductSuiteColumn[] = [
  {
    title: 'Learning & EdTech',
    color: '#7948FF',
    items: [
      { name: 'Advanced LMS', desc: 'Adaptive learning, blended courses, faculty dashboards' },
      { name: 'Smart CMS', desc: 'Institutional content publishing, portals, announcements' },
      {
        name: 'Assessments & Analytics',
        desc: 'Exams, grading automation, learner insights',
      },
      { name: 'AI Tutor', desc: 'Personalized support for students, anytime' },
    ],
  },
  {
    title: 'Communication',
    color: '#60EBD1',
    items: [
      {
        name: 'AI Livechat',
        desc: 'Bilingual (Nepali + English) support for students, parents, staff',
      },
      {
        name: 'Parent Portal',
        desc: 'Real-time updates, transparent school communications',
      },
      {
        name: 'Notification Engine',
        desc: 'SMS, email, and in-app messaging unified',
      },
    ],
  },
  {
    title: 'Telephony',
    color: '#A78BFA',
    items: [
      {
        name: 'AI Voice IVR',
        desc: 'Intelligent call routing for institutions and enterprises',
      },
      {
        name: 'Call Analytics',
        desc: 'Conversation logs, sentiment analysis, resolution tracking',
      },
      {
        name: 'Cloud PBX',
        desc: 'Scalable, managed voice infrastructure for campuses',
      },
    ],
  },
  {
    title: 'AI Research',
    color: '#F5A082',
    items: [
      {
        name: 'Nepali NLP Models',
        desc: 'Language processing built for Devanagari and Nepali context',
      },
      {
        name: 'Responsible AI Framework',
        desc: 'Ethical AI guidelines for Nepali institutions',
      },
      {
        name: 'Research Publications',
        desc: 'Open collaboration with universities and global partners',
      },
      {
        name: 'Custom AI Development',
        desc: 'Bespoke models for enterprise and academic use cases',
      },
    ],
  },
]

export const STATS = [
  { value: '500+', label: 'Institutions served' },
  { value: '50,000+', label: 'Learners & users' },
  { value: '4', label: 'Core AI pillars' },
  { value: '99%', label: 'Client satisfaction goal' },
]

export const RESOURCES_HIGHLIGHTS = [
  {
    image: '/images/lms_interface_ui_1768753626398.png',
    title: 'Personalized learning at national scale',
    description:
      'How Nepali institutions use Aitrix LMS to blend instructor-led and adaptive digital learning.',
  },
  {
    image: '/images/iroms_dashboard_ui_1768753609690.png',
    title: 'Digitize records without disrupting staff',
    description: 'I-ROMS brings HR, attendance, and compliance into one intelligent dashboard.',
  },
  {
    image: '/images/livechat_ai_ui_1768753641553.png',
    title: 'AI telephony for campuses',
    description: 'How voice AI reduces call loads and improves response times for schools.',
  },
  {
    image: '/images/cms_dashboard_ui_1768753670312.png',
    title: 'Research spotlight: Nepali NLP',
    description: 'How Aitrix Labs is building language models that truly understand Nepal.',
  },
]

export const SOLUTION_TABS = [
  {
    id: 'accelerate',
    label: 'Accelerate',
    title: 'Accelerate',
    body: 'Launch adaptive courses, automate assessments, and give teachers real-time learner visibility. AI Livechat and telephony keep every stakeholder connected without delays.',
    cta: 'Explore solutions',
    image: '/images/lms_interface_ui_1768753626398.png',
  },
  {
    id: 'optimize',
    label: 'Optimize',
    title: 'Optimize',
    body: 'Unify HR, records, communications, and voice systems in one intelligent platform. Less fragmentation, more clarity.',
    cta: 'Explore platform',
    image: '/images/iroms_dashboard_ui_1768753609690.png',
  },
  {
    id: 'strengthen',
    label: 'Strengthen',
    title: 'Strengthen',
    body: "Research-backed AI, responsible data practices, and systems built for Nepal's infrastructure — so you grow without compromise.",
    cta: 'Explore research & trust',
    image: '/images/livechat_ai_ui_1768753641553.png',
  },
] as const

export type SolutionTabId = (typeof SOLUTION_TABS)[number]['id']

export const FOOTER_COLUMNS = [
  {
    heading: 'Products',
    links: [
      { label: 'Advanced LMS', to: '/products' },
      { label: 'Smart CMS', to: '/products' },
      { label: 'I-ROMS', to: '/products' },
      { label: 'AI Livechat', to: '/products' },
      { label: 'AI Telephony', to: '/products' },
      { label: 'Analytics', to: '/products' },
      { label: 'Integrations', to: '/platform' },
    ],
  },
  {
    heading: 'Research',
    links: [
      { label: 'Overview', to: '/research' },
      { label: 'Nepali NLP', to: '/research' },
      { label: 'Responsible AI', to: '/research' },
      { label: 'Publications', to: '/research' },
      { label: 'Collaborate with us', href: 'mailto:info@aitrixlabs.com' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Insights', to: '/resources' },
      { label: 'Events', to: '/resources' },
      { label: 'Training', to: '/resources' },
      { label: 'Support', href: 'mailto:info@aitrixlabs.com' },
      { label: 'Case studies', to: '/resources' },
      { label: 'Documentation', to: '/platform' },
    ],
  },
  {
    heading: 'Platform',
    links: [
      { label: 'Overview', to: '/platform' },
      { label: 'Security', to: '/platform' },
      { label: 'Deployment', to: '/platform' },
      { label: 'APIs', to: '/platform' },
      { label: 'Roadmap', to: '/platform' },
      { label: 'Become a partner', to: '/platform' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/company' },
      { label: 'Mission', to: '/company' },
      { label: 'Careers', to: '/company' },
      { label: 'News', to: '/company' },
      { label: 'Research', to: '/research' },
      { label: 'Contact', href: 'mailto:info@aitrixlabs.com' },
    ],
  },
]

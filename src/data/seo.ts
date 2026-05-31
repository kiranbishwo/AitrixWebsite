export const SITE = {
  name: 'Aitrix Labs',
  url: 'https://aitrixlabs.com',
  locale: 'en_US',
  twitter: '@aitrixlabs',
  email: 'info@aitrixlabs.com',
  defaultTitle: 'Aitrix Labs — AI for Education, Communication & Research',
  defaultDescription:
    'Aitrix Labs builds AI for education, communication, and research in Nepal — EdTech LMS, Pameru omnichannel inbox, telephony, and frontier AI tools.',
  defaultKeywords:
    'Aitrix Labs, AI Nepal, EdTech, education technology, LMS, Pameru, omnichannel communication, AI telephony, AI research, Nepali NLP, smart CMS',
  ogImage: '/images/lms_interface_ui_1768753626398.png',
  ogImageAlt: 'Aitrix Labs LMS interface — AI-powered learning platform',
} as const

export interface PageSeo {
  title: string
  description: string
  keywords?: string
  path: string
  ogImage?: string
  ogImageAlt?: string
  noindex?: boolean
}

const PAGE_SEO: Record<string, PageSeo> = {
  '/': {
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    keywords: SITE.defaultKeywords,
    path: '/',
  },
  '/solutions': {
    title: 'AI Solutions — EdTech, Pameru, Telephony & Research | Aitrix Labs',
    description:
      'Explore Aitrix Labs solutions for Nepali institutions: AI-powered EdTech, Pameru omnichannel admissions, intelligent telephony, and research tools.',
    keywords: 'AI solutions Nepal, EdTech solutions, Pameru, omnichannel platform, AI telephony, institutional AI',
    path: '/solutions',
  },
  '/solutions/edtech': {
    title: 'EdTech for Nepal — LMS, CMS & Learning Analytics | Aitrix Labs',
    description:
      'AI-powered LMS, smart CMS, assessments, and learning analytics for schools and universities across Nepal.',
    path: '/solutions/edtech',
  },
  '/solutions/communication': {
    title: 'Pameru — Omnichannel Admissions Inbox for Colleges | Aitrix Labs',
    description:
      'Pameru by Aitrix Labs unifies WhatsApp, Instagram, email, web chat, and phone in one AI-powered team inbox for admissions and student services.',
    path: '/solutions/communication',
    ogImage: '/images/livechat_ai_ui_1768753641553.png',
    ogImageAlt: 'Pameru AI live chat interface for omnichannel admissions',
  },
  '/solutions/telephony': {
    title: 'AI Telephony — Cloud PBX, IVR & Voice Analytics | Aitrix Labs',
    description:
      'Cloud PBX, AI IVR, call routing, and voice analytics built for Nepali schools, colleges, and enterprises.',
    path: '/solutions/telephony',
  },
  '/solutions/ai-research': {
    title: 'AI Research Tools — Nepali NLP & Responsible AI | Aitrix Labs',
    description:
      'Custom models, Nepali NLP, and responsible AI frameworks for academic and enterprise research teams in Nepal.',
    path: '/solutions/ai-research',
  },
  '/products': {
    title: 'Products — LMS, CMS, I-ROMS, Livechat & Telephony | Aitrix Labs',
    description:
      'Browse the full Aitrix Labs product suite: adaptive LMS, smart CMS, I-ROMS, AI livechat, telephony, and analytics.',
    path: '/products',
  },
  '/services': {
    title: 'Professional Services — Implementation & Support | Aitrix Labs',
    description:
      'Deployment, integration, training, and ongoing support for Aitrix Labs AI platforms across education and enterprise.',
    path: '/services',
  },
  '/platform': {
    title: 'Platform — Security, APIs & Deployment | Aitrix Labs',
    description:
      'Secure APIs, deployment options, integrations, and enterprise-grade infrastructure for Aitrix Labs AI products.',
    path: '/platform',
  },
  '/resources': {
    title: 'Resources — Case Studies & Guides | Aitrix Labs',
    description:
      'Case studies, guides, and resources on AI in education, communication, and research from Aitrix Labs.',
    path: '/resources',
  },
  '/insights': {
    title: 'Insights & Blog — AI in Education & Enterprise | Aitrix Labs',
    description:
      'Articles and insights on EdTech, omnichannel communication, telephony, and AI research from the Aitrix Labs team.',
    path: '/insights',
  },
  '/events': {
    title: 'Events — Webinars & Workshops | Aitrix Labs',
    description:
      'Upcoming webinars, workshops, and community events from Aitrix Labs on AI for education and institutions.',
    path: '/events',
  },
  '/docs': {
    title: 'Documentation — Aitrix Labs Platform',
    description:
      'Technical documentation, API references, and setup guides for Aitrix Labs products and platform.',
    path: '/docs',
  },
  '/training': {
    title: 'Training — Enable Your Team on Aitrix Labs',
    description:
      'Instructor-led and self-paced training for administrators, faculty, and IT teams adopting Aitrix Labs AI tools.',
    path: '/training',
  },
  '/research': {
    title: 'AI Research — Nepali NLP & Responsible AI | Aitrix Labs',
    description:
      'Aitrix Labs research on Nepali NLP, telephony intelligence, OmniAI, and responsible AI for Nepal and beyond.',
    path: '/research',
  },
  '/about': {
    title: 'About Aitrix Labs — Nepal\'s Comprehensive AI Company',
    description:
      'Learn about Aitrix Labs — building AI for education, communication, telephony, and research from Kathmandu, Nepal.',
    path: '/about',
  },
  '/careers': {
    title: 'Careers — Join Aitrix Labs',
    description:
      'Open roles in engineering, research, product, and customer success at Aitrix Labs in Kathmandu, Nepal.',
    path: '/careers',
  },
  '/news': {
    title: 'News & Updates | Aitrix Labs',
    description:
      'Product launches, research highlights, and company news from Aitrix Labs.',
    path: '/news',
  },
  '/contact': {
    title: 'Contact Aitrix Labs — Book a Demo',
    description:
      'Reach the Aitrix Labs team in Kathmandu for demos, partnerships, and support at info@aitrixlabs.com.',
    path: '/contact',
  },
  '/privacy': {
    title: 'Privacy Policy | Aitrix Labs',
    description: 'How Aitrix Labs collects, uses, and protects personal data across our products and services.',
    path: '/privacy',
  },
  '/terms': {
    title: 'Terms of Service | Aitrix Labs',
    description: 'Terms and conditions for using Aitrix Labs products, platform, and website.',
    path: '/terms',
  },
  '/security': {
    title: 'Security | Aitrix Labs',
    description:
      'Security practices, compliance, and data protection standards for Aitrix Labs platform and products.',
    path: '/security',
  },
}

export function resolvePageSeo(pathname: string): PageSeo {
  const normalized =
    pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname

  if (PAGE_SEO[normalized]) {
    return PAGE_SEO[normalized]
  }

  return {
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    keywords: SITE.defaultKeywords,
    path: normalized || '/',
    noindex: true,
  }
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE.url}${normalized}`
}

export function absoluteAsset(path: string): string {
  return absoluteUrl(path.startsWith('/') ? path : `/${path}`)
}

export const SITEMAP_PATHS = Object.values(PAGE_SEO).map((page) => page.path)

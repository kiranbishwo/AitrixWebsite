import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function iconBase(props: IconProps) {
  const { className, ...rest } = props
  return {
    className: className,
    viewBox: '0 0 24 24',
    fill: 'none' as const,
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true as const,
    ...rest,
  }
}

/** Pillar / column header icons (larger visual) */
export function SuitePillarEdTechIcon(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <path
        d="M4 6.5a2 2 0 012-2h12a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2v-11z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path d="M8 10h8M8 13.5h5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
      <path
        d="M17 5.5h2.5V8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={9} cy={7} r={1} fill="currentColor" />
    </svg>
  )
}

export function SuitePillarCommIcon(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <path
        d="M5 8.5a2.5 2.5 0 012.5-2.5h7A2.5 2.5 0 0117 8.5v5a2.5 2.5 0 01-2.5 2.5h-4l-3 2.5v-2.5H7.5A2.5 2.5 0 015 13.5v-5z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path d="M9 10.5h4M9 13h3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}

export function SuitePillarTelephonyIcon(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <path
        d="M8.5 4.5c-1.5 3-1.5 11.5 0 15M12 3c-2 4-2 14 0 18M15.5 4.5c1.5 3 1.5 11.5 0 15"
        stroke="currentColor"
        strokeWidth={1.35}
        strokeLinecap="round"
        opacity={0.45}
      />
      <rect x={7} y={8} width={10} height={14} rx={2.5} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={12} cy={18} r={1.2} fill="currentColor" />
    </svg>
  )
}

export function SuitePillarResearchIcon(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <circle cx={12} cy={12} r={2.5} stroke="currentColor" strokeWidth={1.5} />
      <path
        d="M12 5.5v3M12 15.5v3M5.5 12h3M15.5 12h3M7.3 7.3l2.1 2.1M14.6 14.6l2.1 2.1M7.3 16.7l2.1-2.1M14.6 9.4l2.1-2.1"
        stroke="currentColor"
        strokeWidth={1.35}
        strokeLinecap="round"
      />
      <path
        d="M18.5 5.5l-2 2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Row icons — product line items */
export function SuiteIconLms(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <rect x={3} y={4} width={18} height={13} rx={2} stroke="currentColor" strokeWidth={1.5} />
      <path d="M3 9h18" stroke="currentColor" strokeWidth={1.5} />
      <path d="M7 14h4M14 14h3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}

export function SuiteIconCms(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <rect x={3} y={3} width={8} height={8} rx={1.5} stroke="currentColor" strokeWidth={1.5} />
      <rect x={13} y={3} width={8} height={5} rx={1.5} stroke="currentColor" strokeWidth={1.5} />
      <rect x={13} y={10} width={8} height={11} rx={1.5} stroke="currentColor" strokeWidth={1.5} />
      <rect x={3} y={13} width={8} height={8} rx={1.5} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  )
}

export function SuiteIconAssessment(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <path d="M5 20V4h10l3 3v13H5z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M13 4v4h3M8 12h8M8 15h6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M8 9l2 2 4-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SuiteIconTutor(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <circle cx={9} cy={9} r={3.5} stroke="currentColor" strokeWidth={1.5} />
      <path d="M5 20v-1a4 4 0 014-4h0a4 4 0 014 4v1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
      <path
        d="M17 6l1.2 2.5L21 10l-2.8.5L17 13l-1.2-2.5L13 10l2.8-.5L17 6z"
        stroke="currentColor"
        strokeWidth={1.35}
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SuiteIconLivechat(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <path
        d="M6 5h12a2 2 0 012 2v6a2 2 0 01-2 2h-4l-4 3.5V15H6a2 2 0 01-2-2V7a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <circle cx={9} cy={10} r={1} fill="currentColor" />
      <circle cx={12} cy={10} r={1} fill="currentColor" />
      <circle cx={15} cy={10} r={1} fill="currentColor" />
    </svg>
  )
}

export function SuiteIconPortal(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <path d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1v-9.5z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M9 21v-6h6v6" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M12 11v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}

export function SuiteIconNotify(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <path
        d="M12 3a5 5 0 00-5 5v3.5L5 17h14l-2-5.5V8a5 5 0 00-5-5z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path d="M10 20a2 2 0 004 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M18 6h2M19 5v2" stroke="currentColor" strokeWidth={1.35} strokeLinecap="round" />
    </svg>
  )
}

export function SuiteIconIvr(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <path
        d="M8 3C5.5 7 5.5 17 8 21M12 2c-3 5.5-3 16.5 0 22M16 3c2.5 4 2.5 17 16 21"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        opacity={0.4}
      />
      <path
        d="M10.5 14.5c1.2 1.2 3.3 1.2 4.5 0M9 11.5h.01M15 11.5h.01"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <rect x={7} y={6} width={10} height={12} rx={2} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  )
}

export function SuiteIconCallAnalytics(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <path d="M4 18V6M8 18v-5M12 18V9M16 18v-8M20 18V4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M3 18.5h18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.35} />
    </svg>
  )
}

export function SuiteIconPbx(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <path
        d="M6 18a4 4 0 014-4h4a4 4 0 014 4M8 14V8a4 4 0 018 0v6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M5 8a4 4 0 018-1 4 4 0 018 1"
        stroke="currentColor"
        strokeWidth={1.35}
        strokeLinecap="round"
        opacity={0.45}
      />
      <circle cx={12} cy={5} r={1.5} fill="currentColor" />
    </svg>
  )
}

export function SuiteIconNlp(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <path d="M5 7h6M5 12h14M5 17h10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
      <path
        d="M16 5l3 3-3 3M19 8h-4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x={14} y={14} width={6} height={6} rx={1} stroke="currentColor" strokeWidth={1.35} opacity={0.6} />
    </svg>
  )
}

export function SuiteIconResponsible(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <path d="M12 3l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V7l7-4z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SuiteIconPublications(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <path d="M6 4h8a2 2 0 012 2v14a2 2 0 00-2-2H6V4z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M6 4H5a2 2 0 00-2 2v14a2 2 0 012-2h1" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M9 8h5M9 11h5M9 14h3" stroke="currentColor" strokeWidth={1.35} strokeLinecap="round" />
    </svg>
  )
}

export function SuiteIconCustomAi(props: IconProps) {
  const p = iconBase(props)
  return (
    <svg {...p}>
      <rect x={5} y={5} width={14} height={14} rx={2} stroke="currentColor" strokeWidth={1.5} />
      <path d="M9 9h6M9 12h6M9 15h4" stroke="currentColor" strokeWidth={1.35} strokeLinecap="round" opacity={0.45} />
      <path d="M4 9l2-2M4 15l2 2M20 9l-2-2M20 15l-2 2" stroke="currentColor" strokeWidth={1.35} strokeLinecap="round" />
    </svg>
  )
}

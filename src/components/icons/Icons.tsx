import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M2 4l4 4 4-4" />
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

export function ArrowRightShortIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M6 4l4 4-4 4" />
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx={8} cy={5.5} r={2.5} />
      <path d="M3 14c0-2.76 2.24-5 5-5s5 2.24 5 5" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x={2} y={4} width={12} height={9} rx={1.5} />
      <path d="M2 5.5l6 4.5 6-4.5" />
    </svg>
  )
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M2 8a6 6 0 0112 0 6 6 0 01-12 0z" />
    </svg>
  )
}

export function PlayCircleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M2 8a6 6 0 1012 0A6 6 0 002 8z" />
      <path d="M6 8h4M8 6v4" />
    </svg>
  )
}

export function ScrollIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M8 3v10M4 9l4 4 4-4" />
    </svg>
  )
}

export function AitrixGlyph(props: IconProps) {
  return (
    <svg viewBox="0 0 18 18" fill="none" {...props}>
      <rect x={6} y={1} width={6} height={9} rx={1} fill="#6B57FF" />
      <rect x={1} y={7} width={6} height={9} rx={1} fill="#9c8fff" />
      <rect x={11} y={7} width={6} height={9} rx={1} fill="#9c8fff" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  )
}

/* Mega-menu / solution icons */

export function GraphIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M1 10a5 5 0 0010 0M4 14a5 5 0 0010 0" />
      <path d="M6 10V6M10 10V6" />
    </svg>
  )
}

export function SwapIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M13 6H3l4-4M3 10h10l-4 4" />
    </svg>
  )
}

export function StackIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x={2} y={10} width={12} height={2} rx={0.5} />
      <rect x={2} y={7} width={12} height={2} rx={0.5} />
      <rect x={2} y={4} width={12} height={2} rx={0.5} />
    </svg>
  )
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M8 1.5l1 3h3L9.5 6.5l1 3L8 8l-2.5 1.5 1-3L4 4.5h3z" />
    </svg>
  )
}

export function DocIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x={2} y={2} width={10} height={10} rx={1} />
      <path d="M4 5h6M4 7.5h4" />
    </svg>
  )
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx={7} cy={6} r={3.5} />
      <path d="M4.5 11l1-2M9.5 11l-1-2" />
    </svg>
  )
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x={2} y={3} width={10} height={8} rx={1} />
      <path d="M5 6l3 2-3 2" />
    </svg>
  )
}

export function GridIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x={2} y={2} width={4} height={4} rx={0.5} />
      <rect x={8} y={2} width={4} height={4} rx={0.5} />
      <rect x={2} y={8} width={4} height={4} rx={0.5} />
      <rect x={8} y={8} width={4} height={4} rx={0.5} />
    </svg>
  )
}

export function ListIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x={2} y={2} width={10} height={10} rx={1} />
      <path d="M4 5h6M4 7.5h4M4 10h3" />
    </svg>
  )
}

export function PartnerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx={4.5} cy={7} r={2.5} />
      <circle cx={10} cy={4} r={2.5} />
      <circle cx={10} cy={10} r={2.5} />
    </svg>
  )
}

export function BookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x={2} y={1} width={10} height={12} rx={1} />
      <path d="M4 5h6M4 7.5h6M4 10h4" />
    </svg>
  )
}

export function StarSparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M7 1l1.5 4h4L9.5 7.5l1.5 4L7 9l-4 2.5 1.5-4L2 5h4z" />
    </svg>
  )
}

export function MailBoxIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x={2} y={2} width={10} height={8} rx={1} />
      <path d="M2 4l5 4 5-4" />
    </svg>
  )
}

export function FileIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M8 1H3v12h8V5L8 1zm0 0v4h3" />
    </svg>
  )
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x={2} y={4} width={10} height={7} rx={1} />
      <path d="M5 4V2h4v2" />
    </svg>
  )
}

export function NetworkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M10 7l2 1-2 1M4 7L2 8l2 1M7.5 5.5l-1 3" />
    </svg>
  )
}

export function LockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x={2} y={5} width={10} height={7} rx={1} />
      <path d="M5 5V3a2 2 0 014 0v2" />
    </svg>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx={7} cy={7} r={5} />
      <path d="M7 5v3l2 2" />
    </svg>
  )
}

export function HelpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx={7} cy={7} r={5} />
      <path d="M7 4v4M7 9.5v.5" />
    </svg>
  )
}

/* Social icons */

export function WebsiteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  )
}

export function MailFillIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  )
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

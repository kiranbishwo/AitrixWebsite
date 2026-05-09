import type { HTMLAttributes, ReactNode } from 'react'

interface EyebrowProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode
  centered?: boolean
}

export function Eyebrow({
  icon,
  centered = false,
  className = '',
  children,
  ...rest
}: EyebrowProps) {
  return (
    <div
      className={`flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[2px] mb-4 ${
        centered ? 'justify-center' : ''
      } ${className}`}
      {...rest}
    >
      {icon}
      <span>{children}</span>
    </div>
  )
}

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
  as: Tag = 'h2',
  className = '',
  children,
  ...rest
}: SectionHeadingProps) {
  return (
    <Tag
      className={`text-[44px] font-bold leading-[1.08] tracking-[-1px] text-white mb-5 max-md:text-[28px] ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionBody({
  className = '',
  children,
  ...rest
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={`text-base text-ink-400 leading-[1.72] mb-8 ${className}`}
      {...rest}
    >
      {children}
    </p>
  )
}

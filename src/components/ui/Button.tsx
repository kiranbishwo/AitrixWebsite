import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../icons/Icons'

type Variant = 'primary' | 'outline' | 'light' | 'ghost-light'

const baseVariant: Record<Variant, string> = {
  primary:
    'bg-primary text-white font-semibold hover:bg-primary-hover transition-colors',
  outline:
    'border border-ink-700/80 text-white hover:border-white transition-colors bg-transparent',
  light:
    'bg-white text-ink-900 hover:bg-ink-100 transition-all hover:-translate-y-0.5 shadow-hero hover:shadow-hero-hover',
  'ghost-light':
    'bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all',
}

type CommonProps = {
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

const sizeMap = {
  sm: 'px-4 py-2 text-sm rounded',
  md: 'px-5 py-2.5 text-sm rounded',
  lg: 'px-8 py-4 text-base rounded-md',
}

function classes(variant: Variant, size: NonNullable<CommonProps['size']>, extra = '') {
  return `inline-flex items-center gap-2 font-medium ${sizeMap[size]} ${baseVariant[variant]} ${extra}`
}

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
    to?: string
    href?: string
  }

export function LinkButton({
  variant = 'outline',
  size = 'md',
  className = '',
  children,
  to,
  href,
  ...rest
}: LinkButtonProps) {
  const cls = classes(variant, size, className)
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  )
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  )
}

interface ArrowLinkProps {
  to?: string
  href?: string
  children: ReactNode
  className?: string
}

export function ArrowLink({ to, href, children, className = '' }: ArrowLinkProps) {
  const cls = `group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-[gap] hover:gap-2 ${className}`
  const content = (
    <>
      {children}
      <ArrowRightIcon className="h-3 w-3" />
    </>
  )
  if (to) {
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    )
  }
  return (
    <a href={href} className={cls}>
      {content}
    </a>
  )
}

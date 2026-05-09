import type { HTMLAttributes } from 'react'

type ContainerProps = HTMLAttributes<HTMLDivElement>

export function Container({ className = '', children, ...rest }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-container ${className}`} {...rest}>
      {children}
    </div>
  )
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  innerClassName?: string
}

export function Section({
  className = '',
  innerClassName = '',
  children,
  ...rest
}: SectionProps) {
  return (
    <section className={`px-6 py-24 ${className}`} {...rest}>
      <Container className={innerClassName}>{children}</Container>
    </section>
  )
}

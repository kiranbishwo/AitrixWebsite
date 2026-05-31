import { ArrowRightIcon } from '../icons/Icons'
import { LinkButton } from '../ui/Button'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

interface CTABarProps {
  title?: string
  body?: string
  primaryCta?: { label: string; to?: string; href?: string }
  secondaryCta?: { label: string; to?: string; href?: string }
  primaryClassName?: string
  variant?: 'dark' | 'light'
}

export function CTABar({
  title = 'Ready to build a smarter institution?',
  body = 'Whether your goal is better learning outcomes, AI communication, intelligent telephony, or cutting-edge research collaboration — Aitrix Labs has a product and a team ready to help.',
  primaryCta = { label: 'Book a Strategy Call', href: 'mailto:info@aitrixlabs.com' },
  secondaryCta = { label: 'Browse Products', to: '/products' },
  primaryClassName = '',
  variant = 'dark',
}: CTABarProps) {
  const isLight = variant === 'light'

  return (
    <div
      className={`border-t px-6 py-[72px] ${
        isLight ? 'border-ink-200 bg-white' : 'border-ink-900 bg-ink-950'
      }`}
    >
      <Container>
        <Reveal className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <h2
              className={`mb-3 text-[34px] font-bold tracking-[-1px] ${
                isLight ? 'text-ink-900' : 'text-white'
              }`}
            >
              {title}
            </h2>
            <p
              className={`max-w-[560px] text-[15px] leading-[1.7] ${
                isLight ? 'text-ink-600' : 'text-ink-400'
              }`}
            >
              {body}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <LinkButton
              variant="primary"
              size="lg"
              to={primaryCta.to}
              href={primaryCta.href}
              className={`!px-6 !py-3 !text-[15px] ${primaryClassName}`}
            >
              {primaryCta.label}
            </LinkButton>
            <LinkButton
              variant="outline"
              size="lg"
              to={secondaryCta.to}
              href={secondaryCta.href}
              className={`!px-6 !py-3 !text-[15px] ${
                isLight ? '!border-ink-300 !text-ink-800 hover:!border-ink-400 hover:!bg-ink-50' : ''
              }`}
            >
              {secondaryCta.label}
              <ArrowRightIcon className="ml-1 h-3 w-3" />
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}

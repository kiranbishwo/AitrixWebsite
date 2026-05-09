import type { ReactNode } from 'react'
import { ArrowRightIcon, PlayCircleIcon, ScrollIcon } from '../icons/Icons'
import { LinkButton } from '../ui/Button'
import landingBanner from '../../assets/banners/landing.svg'

interface HeroProps {
  title: ReactNode
  subtitle: string
  primaryCta?: { label: string; to?: string; href?: string }
  secondaryCta?: { label: string; to?: string; href?: string }
  showScrollIndicator?: boolean
  compact?: boolean
  /** Optional banner image rendered behind the hero content. When supplied, the
   * animated gradient/clouds/orbs are hidden and only a dark overlay is kept on top. */
  bgImage?: string
  bgImageAlt?: string
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  showScrollIndicator = false,
  compact = false,
  bgImage = landingBanner,
  bgImageAlt = '',
}: HeroProps) {
  const useImage = Boolean(bgImage)
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden bg-black ${
        compact ? 'min-h-[60vh]' : 'min-h-[92vh]'
      }`}
    >
      {useImage ? (
        <>
          <img
            src={bgImage}
            alt={bgImageAlt}
            aria-hidden={bgImageAlt ? undefined : true}
            className="absolute inset-0 h-full w-full select-none object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/85" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 scale-[1.04] bg-hero-sky" />
          <div className="absolute -inset-[10%] animate-cloud-a bg-cloud-a blur-[8px]" />
          <div className="absolute -inset-[10%] animate-cloud-b bg-cloud-b blur-[18px]" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="pointer-events-none absolute left-1/2 top-[38%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 animate-orb-pulse rounded-full bg-orb-purple blur-[2px]" />
          <div className="pointer-events-none absolute left-[68%] top-[25%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-orb-pulse-2 rounded-full bg-orb-blue blur-[4px]" />
        </>
      )}

      <div
        className={`relative z-10 mx-auto max-w-[820px] animate-hero-in px-6 text-center ${
          compact ? 'py-16' : 'pb-[72px] pt-[90px]'
        }`}
      >
        <h1
          className={`mb-6 font-bold leading-none tracking-[-3px] text-white drop-shadow-[0_2px_40px_rgba(0,0,0,0.5)] ${
            compact ? 'text-[56px] max-md:text-[40px]' : 'text-[84px] max-lg:text-[52px] max-sm:text-[38px]'
          }`}
        >
          {title}
        </h1>

        <p className="mx-auto mb-12 max-w-[720px] text-lg leading-[1.65] text-white/75 drop-shadow-[0_1px_12px_rgba(0,0,0,0.4)]">
          {subtitle}
        </p>

        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap justify-center gap-3.5">
            {primaryCta && (
              <LinkButton
                variant="light"
                size="lg"
                to={primaryCta.to}
                href={primaryCta.href}
              >
                {primaryCta.label}
                <ArrowRightIcon className="h-4 w-4" />
              </LinkButton>
            )}
            {secondaryCta && (
              <LinkButton
                variant="ghost-light"
                size="lg"
                to={secondaryCta.to}
                href={secondaryCta.href}
              >
                {secondaryCta.label}
                <PlayCircleIcon className="h-4 w-4" />
              </LinkButton>
            )}
          </div>
        )}
      </div>

      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce-y flex-col items-center gap-1.5 text-[11px] uppercase tracking-[1.5px] text-white/40">
          <span>scroll</span>
          <ScrollIcon className="h-3.5 w-3.5" />
        </div>
      )}
    </section>
  )
}

export function HomeHero() {
  return (
    <Hero
      title={
        <>
          <span className="bg-gradient-to-br from-white to-[#b8c4e8] bg-clip-text text-transparent">
            Nepal&apos;s
          </span>{' '}
          Most Comprehensive AI Company
        </>
      }
      subtitle="Powering the future through AI-driven EdTech, intelligent communication, next-gen telephony, and frontier AI research — built for Nepal, ready for the world."
      primaryCta={{ label: 'Explore Products', to: '/products' }}
      secondaryCta={{ label: 'Book a Demo', href: 'mailto:info@aitrixlabs.com' }}
      bgImage={landingBanner}
      bgImageAlt=""
      showScrollIndicator
    />
  )
}

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
  bgImage?: string | null
  bgImageAlt?: string
  productLogo?: string
  productLogoAlt?: string
  eyebrow?: string
  theme?: 'default' | 'pameru'
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
  productLogo,
  productLogoAlt = '',
  eyebrow,
  theme = 'default',
}: HeroProps) {
  const useImage = Boolean(bgImage)
  const isPameru = theme === 'pameru'
  const pameruPrimaryCta =
    '![background:linear-gradient(90deg,#8B5CF6_0%,#06B6D4_100%)] !border-0 !text-white hover:![background:linear-gradient(90deg,#7C3AED_0%,#0891B2_100%)]'
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden bg-black ${
        compact ? 'min-h-[60vh]' : 'min-h-[92vh]'
      }`}
    >
      {useImage ? (
        <>
          <img
            src={bgImage as string}
            alt={bgImageAlt}
            aria-hidden={bgImageAlt ? undefined : true}
            className="absolute inset-0 h-full w-full select-none object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/85" />
        </>
      ) : isPameru ? (
        <>
          <div
            className="absolute inset-0 scale-[1.04]"
            style={{
              background: [
                'radial-gradient(ellipse 130% 90% at 10% 20%, rgba(6,182,212,.14) 0%, transparent 50%)',
                'radial-gradient(ellipse 90% 70% at 85% 15%, rgba(139,92,246,.22) 0%, transparent 48%)',
                'radial-gradient(ellipse 110% 80% at 50% 90%, rgba(6,182,212,.12) 0%, transparent 55%)',
                'linear-gradient(155deg,#04060f 0%,#120828 22%,#061018 45%,#080619 70%,#050510 100%)',
              ].join(','),
            }}
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div
            className="pointer-events-none absolute left-1/2 top-[38%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 animate-orb-pulse rounded-full blur-[2px]"
            style={{
              background:
                'radial-gradient(circle, rgba(139,92,246,.32) 0%, rgba(139,92,246,.14) 30%, rgba(6,182,212,.08) 60%, transparent 75%)',
            }}
          />
          <div
            className="pointer-events-none absolute left-[68%] top-[25%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-orb-pulse-2 rounded-full blur-[4px]"
            style={{
              background:
                'radial-gradient(circle, rgba(6,182,212,.22) 0%, rgba(6,182,212,.08) 50%, transparent 75%)',
            }}
          />
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
        {productLogo && (
          <img
            src={productLogo}
            alt={productLogoAlt}
            className="mx-auto mb-6 h-16 w-auto max-w-[220px] drop-shadow-[0_4px_24px_rgba(139,92,246,0.35)] sm:h-20"
          />
        )}

        {eyebrow && (
          <p
            className={`mb-4 text-xs font-semibold uppercase tracking-[2px] ${
              isPameru
                ? 'bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent'
                : 'text-white/50'
            }`}
          >
            {eyebrow}
          </p>
        )}

        <h1
          className={`mb-6 font-bold leading-[1.05] text-white drop-shadow-[0_2px_40px_rgba(0,0,0,0.5)] ${
            isPameru
              ? 'text-[40px] tracking-[-1.5px] max-md:text-[32px] max-sm:text-[28px]'
              : compact
                ? 'text-[56px] leading-none tracking-[-3px] max-md:text-[40px]'
                : 'text-[84px] leading-none tracking-[-3px] max-lg:text-[52px] max-sm:text-[38px]'
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
                className={isPameru ? pameruPrimaryCta : undefined}
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
      bgImageAlt="Aitrix Labs hero banner — AI for education, communication, and research in Nepal"
      showScrollIndicator
    />
  )
}

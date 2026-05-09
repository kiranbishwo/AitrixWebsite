import { AitrixGlyph } from '../icons/Icons'
import { LinkButton } from '../ui/Button'
import { Section } from '../ui/Container'
import { Eyebrow, SectionBody, SectionHeading } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

export function PlatformOverview() {
  return (
    <Section className="bg-black">
      <Reveal>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <Eyebrow icon={<AitrixGlyph className="h-[18px] w-[18px]" />} className="text-primary">
              Platform overview
            </Eyebrow>
            <SectionHeading>
              One AI company. Four pillars that change everything.
            </SectionHeading>
            <SectionBody>
              Aitrix Labs is Nepal&apos;s leading AI-powered technology company, operating at the
              intersection of education, communication, telephony, and research. We don&apos;t just
              build software — we build intelligent systems that help institutions teach better,
              communicate faster, connect reliably, and discover what&apos;s next.
              <br />
              <br />
              From schools in Kathmandu to enterprises across Nepal, our products are designed with
              local expertise and global AI standards.
            </SectionBody>
            <div className="flex flex-wrap items-center gap-3">
              <LinkButton variant="outline" to="/solutions">
                Learn More
              </LinkButton>
              <LinkButton variant="primary" href="mailto:info@aitrixlabs.com">
                Request a Demo
              </LinkButton>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <FourPillarsGraphic />
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

function FourPillarsGraphic() {
  return (
    <div className="relative flex aspect-square w-full max-w-[480px] items-center justify-center overflow-hidden rounded-2xl border border-ink-900 bg-gradient-to-br from-[#0F0A1F] via-black to-[#0A0716]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_45%_42%,rgba(83,102,174,0.32),transparent_58%)]" />
      <div className="pointer-events-none absolute -left-12 bottom-0 h-48 w-48 rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 top-8 h-44 w-44 rounded-full bg-[#7A88C4]/30 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,transparent_35%,rgba(0,0,0,0.5)_100%)]" />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-[62%] w-auto drop-shadow-[0_16px_48px_rgba(83,102,174,0.35)]"
        aria-hidden="true"
      >
        <rect width="100" height="100" fill="url(#pillars_bg)" rx="8" />
        <path
          d="M22 50V78H50M50 22H78V50"
          stroke="url(#pillars_stroke_outer)"
          strokeWidth={8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 50L30 30H50M50 70H70V50"
          stroke="url(#pillars_stroke_inner)"
          strokeWidth={8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x={34}
          y={66}
          width={16}
          height={16}
          transform="rotate(-90 34 66)"
          fill="url(#pillars_square_bl)"
        />
        <rect
          x={50}
          y={50.0001}
          width={16}
          height={16}
          transform="rotate(-90 50 50.0001)"
          fill="url(#pillars_square_tr)"
        />
        <defs>
          <linearGradient id="pillars_bg" x1={0} y1={0} x2={100} y2={100} gradientUnits="userSpaceOnUse">
            <stop stopColor="#14082F" />
            <stop offset={1} stopColor="#080510" />
          </linearGradient>
          <linearGradient id="pillars_stroke_outer" x1={20} y1={50} x2={80} y2={50} gradientUnits="userSpaceOnUse">
            <stop stopColor="#F4F6FB" />
            <stop offset={1} stopColor="#5366AE" stopOpacity={0.45} />
          </linearGradient>
          <linearGradient id="pillars_stroke_inner" x1={29.9} y1={50.1} x2={69.9} y2={50.1} gradientUnits="userSpaceOnUse">
            <stop stopColor="#B8C4E8" />
            <stop offset={1} stopColor="#7A88C4" stopOpacity={0.35} />
          </linearGradient>
          <linearGradient id="pillars_square_bl" x1={41.47} y1={67.33} x2={40.53} y2={83.87} gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset={1} stopColor="#5366AE" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="pillars_square_tr" x1={57.47} y1={51.33} x2={56.53} y2={67.87} gradientUnits="userSpaceOnUse">
            <stop stopColor="#E8ECF8" />
            <stop offset={1} stopColor="#3E4D7E" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

import { useState, type ReactNode } from 'react'
import { SOLUTION_TABS, type SolutionTabId } from '../../data/content'
import { ArrowRightIcon } from '../icons/Icons'
import { LinkButton } from '../ui/Button'
import { Section } from '../ui/Container'
import { Eyebrow, SectionHeading } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

const TAB_GRAPHICS: Record<SolutionTabId, ReactNode> = {
  accelerate: <AccelerateGraphic />,
  optimize: <OptimizeGraphic />,
  strengthen: <StrengthenGraphic />,
}

export function SolutionTabs() {
  const [active, setActive] = useState<SolutionTabId>('accelerate')
  const activeTab = SOLUTION_TABS.find((t) => t.id === active) ?? SOLUTION_TABS[0]

  return (
    <Section className="border-t border-ink-900 bg-ink-950">
      <Reveal className="mb-10">
        <Eyebrow className="text-ink-400">Why Aitrix</Eyebrow>
        <SectionHeading>
          What changes when your institution goes truly AI-powered?
        </SectionHeading>
        <p className="max-w-[640px] text-[15px] leading-[1.7] text-ink-400">
          From adaptive learning to intelligent telephony and research-backed AI, Aitrix helps
          institutions move faster without sacrificing quality, compliance, or the human touch.
        </p>
      </Reveal>

      <div className="mb-12 flex border-b border-ink-900">
        {SOLUTION_TABS.map((tab) => {
          const isActive = tab.id === active
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`-mb-px border-b-2 px-6 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'border-primary text-white'
                  : 'border-transparent text-ink-500 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div
        key={activeTab.id}
        className="grid animate-fade-up items-center gap-16 lg:grid-cols-2"
      >
        <div>
          <h3 className="mb-3.5 text-[26px] font-bold text-white">
            {activeTab.title}
          </h3>
          <p className="mb-6 text-sm leading-[1.7] text-ink-400">{activeTab.body}</p>
          <LinkButton variant="outline" href="https://aitrixlabs.com">
            {activeTab.cta}
            <ArrowRightIcon className="ml-1 h-3 w-3" />
          </LinkButton>
        </div>
        <div className="flex items-center justify-center">
          {TAB_GRAPHICS[activeTab.id]}
        </div>
      </div>
    </Section>
  )
}

function GraphicCard({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex aspect-square w-full max-w-[460px] items-center justify-center overflow-hidden rounded-2xl border border-ink-900 bg-gradient-to-br from-[#0F0A1F] via-black to-[#0A0716]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(83,102,174,0.30),transparent_60%)]" />
      <div className="pointer-events-none absolute -left-12 top-10 h-44 w-44 rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-6 h-44 w-44 rounded-full bg-[#7A88C4]/25 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,transparent_30%,rgba(0,0,0,0.5)_100%)]" />
      {children}
    </div>
  )
}

function AccelerateGraphic() {
  const circles = [
    { cx: 58.7066, cy: 44.4368, r: 27.8, gy1: 16.4368, gy2: 72.4368 },
    { cx: 55.1147, cy: 47.1011, r: 25.8, gy1: 21.1011, gy2: 73.1011 },
    { cx: 51.5227, cy: 49.7654, r: 23.8, gy1: 25.7654, gy2: 73.7654 },
    { cx: 47.9308, cy: 52.4294, r: 21.8, gy1: 30.4294, gy2: 74.4294 },
    { cx: 44.3389, cy: 55.0937, r: 19.8, gy1: 35.0937, gy2: 75.0937 },
    { cx: 40.747, cy: 57.758, r: 17.8, gy1: 39.758, gy2: 75.758 },
    { cx: 37.155, cy: 60.4221, r: 15.8, gy1: 44.4221, gy2: 76.4221 },
    { cx: 33.5631, cy: 63.0864, r: 13.8, gy1: 49.0864, gy2: 77.0864 },
    { cx: 28.9864, cy: 65.9243, r: 11.8, gy1: 53.9243, gy2: 77.9243 },
    { cx: 25.3944, cy: 68.5883, r: 9.8, gy1: 58.5883, gy2: 78.5883 },
    { cx: 20.8176, cy: 71.4262, r: 7.8, gy1: 63.4262, gy2: 79.4262 },
    { cx: 17.2257, cy: 74.0905, r: 5.8, gy1: 68.0905, gy2: 80.0905 },
    { cx: 13.6338, cy: 76.7546, r: 3.8, gy1: 72.7546, gy2: 80.7546 },
  ]
  return (
    <GraphicCard>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-[78%] w-auto drop-shadow-[0_18px_60px_rgba(83,102,174,0.45)]"
        aria-hidden="true"
      >
        {circles.map((c, i) => (
          <g key={i}>
            <circle
              cx={c.cx}
              cy={c.cy}
              r={c.r}
              transform={`rotate(-10 ${c.cx} ${c.cy})`}
              stroke={`url(#accel_${i})`}
              strokeWidth={0.6}
            />
          </g>
        ))}
        <defs>
          {circles.map((c, i) => (
            <linearGradient
              key={i}
              id={`accel_${i}`}
              x1={c.cx}
              y1={c.gy1}
              x2={c.cx}
              y2={c.gy2}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C4B8FF" stopOpacity={0.18} />
              <stop offset={1} stopColor="#5366AE" />
            </linearGradient>
          ))}
        </defs>
      </svg>
    </GraphicCard>
  )
}

function OptimizeGraphic() {
  return (
    <GraphicCard>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-[60%] w-auto drop-shadow-[0_18px_60px_rgba(83,102,174,0.5)]"
        aria-hidden="true"
      >
        <path d="M30.7368 13.4737V0H33.2632V13.4737H30.7368Z" fill="url(#opt_grad)" />
        <path d="M28.9505 30.7368L20.3886 22.1749L22.1749 20.3885L30.7368 28.9504V16.8421H33.2632V28.9504L41.8251 20.3885L43.6114 22.1749L35.0495 30.7368H47.1579V33.2632H35.0496L43.6114 41.825L41.8251 43.6114L33.2632 35.0495V47.1579H30.7368V35.0495L22.1749 43.6114L20.3886 41.825L28.9504 33.2632H16.8421V30.7368H28.9505Z" fill="url(#opt_grad)" />
        <path d="M0 30.7368H13.4737V33.2632H0V30.7368Z" fill="url(#opt_grad)" />
        <path d="M50.5263 30.7368H64V33.2632H50.5263V30.7368Z" fill="url(#opt_grad)" />
        <path d="M30.7368 50.5263V64H33.2632V50.5263H30.7368Z" fill="url(#opt_grad)" />
        <path d="M18.0067 44.2068L8.47939 53.7342L10.2658 55.5205L19.7931 45.9932L18.0067 44.2068Z" fill="url(#opt_grad)" />
        <path d="M44.2069 18.0067L53.7342 8.47934L55.5206 10.2657L45.9933 19.793L44.2069 18.0067Z" fill="url(#opt_grad)" />
        <path d="M45.9933 44.2068L55.5206 53.7342L53.7342 55.5205L44.2069 45.9932L45.9933 44.2068Z" fill="url(#opt_grad)" />
        <path d="M19.7931 18.0067L10.2658 8.47934L8.4794 10.2657L18.0067 19.793L19.7931 18.0067Z" fill="url(#opt_grad)" />
        <defs>
          <linearGradient
            id="opt_grad"
            x1={11.3684}
            y1={5.89474}
            x2={45.4737}
            y2={64.4211}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFFFFF" />
            <stop offset={0.55} stopColor="#C4B8FF" />
            <stop offset={1} stopColor="#5366AE" stopOpacity={0.15} />
          </linearGradient>
        </defs>
      </svg>
    </GraphicCard>
  )
}

function StrengthenGraphic() {
  return (
    <GraphicCard>
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-[72%] w-auto animate-spin-slow drop-shadow-[0_18px_60px_rgba(83,102,174,0.55)]"
        aria-hidden="true"
      >
        <path
          d="M40 0L40.9156 26.03L45.221 0.342205L42.7313 26.269L50.3528 1.36297L44.5002 26.743L55.3073 3.04482L46.192 27.4438L60 5.35898L47.778 28.3594L64.3505 8.26587L49.2308 29.4742L68.2843 11.7157L50.5258 30.7692L71.7341 15.6495L51.6406 32.222L74.641 20L52.5562 33.808L76.9552 24.6927L53.257 35.4998L78.637 29.6472L53.731 37.2687L79.6578 34.779L53.97 39.0844L80 40L53.97 40.9156L79.6578 45.221L53.731 42.7313L78.637 50.3528L53.257 44.5002L76.9552 55.3073L52.5562 46.192L74.641 60L51.6406 47.778L71.7341 64.3505L50.5258 49.2308L68.2843 68.2843L49.2308 50.5258L64.3505 71.7341L47.778 51.6406L60 74.641L46.192 52.5562L55.3073 76.9552L44.5002 53.257L50.3528 78.637L42.7313 53.731L45.221 79.6578L40.9156 53.97L40 80L39.0844 53.97L34.779 79.6578L37.2687 53.731L29.6472 78.637L35.4998 53.257L24.6927 76.9552L33.808 52.5562L20 74.641L32.222 51.6406L15.6495 71.7341L30.7692 50.5258L11.7157 68.2843L29.4742 49.2308L8.26587 64.3505L28.3594 47.778L5.35898 60L27.4438 46.192L3.04482 55.3073L26.743 44.5002L1.36297 50.3528L26.269 42.7313L0.342205 45.221L26.03 40.9156L0 40L26.03 39.0844L0.342205 34.779L26.269 37.2687L1.36297 29.6472L26.743 35.4998L3.04482 24.6927L27.4438 33.808L5.35898 20L28.3594 32.222L8.26587 15.6495L29.4742 30.7692L11.7157 11.7157L30.7692 29.4742L15.6495 8.26587L32.222 28.3594L20 5.35898L33.808 27.4438L24.6927 3.04482L35.4998 26.743L29.6472 1.36297L37.2687 26.269L34.779 0.342205L39.0844 26.03L40 0Z"
          fill="url(#str_radial)"
        />
        <defs>
          <radialGradient
            id="str_radial"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(40 38.5) rotate(81.3843) scale(50.065)"
          >
            <stop stopColor="#FFFFFF" />
            <stop offset={0.55} stopColor="#C4B8FF" />
            <stop offset={1} stopColor="#5366AE" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </GraphicCard>
  )
}

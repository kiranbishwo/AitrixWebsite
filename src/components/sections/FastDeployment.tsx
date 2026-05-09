import { AitrixGlyph } from '../icons/Icons'
import { ArrowLink, LinkButton } from '../ui/Button'
import { Section } from '../ui/Container'
import { Eyebrow, SectionBody, SectionHeading } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

export function FastDeployment() {
  return (
    <Section className="border-t border-ink-900 bg-black">
      <Reveal>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="order-1 flex items-center justify-center lg:order-2">
            <DeploymentCubeArt />
          </div>
          <div className="order-2 lg:order-1">
            <Eyebrow icon={<AitrixGlyph className="h-[18px] w-[18px]" />} className="text-primary">
              Fast deployment
            </Eyebrow>
            <SectionHeading>Go live with confidence</SectionHeading>
            <SectionBody>
              Our team guides you from discovery to full rollout — covering LMS, AI Livechat,
              Telephony, and Research integrations. Every implementation includes training, data
              migration support, and a roadmap tailored to your institution&apos;s pace and scale.
            </SectionBody>
            <div className="flex flex-wrap items-center gap-3">
              <LinkButton variant="outline" to="/platform">
                Implementation Overview
              </LinkButton>
              <ArrowLink href="mailto:info@aitrixlabs.com">Talk to Us</ArrowLink>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

function DeploymentCubeArt() {
  return (
    <div className="relative flex aspect-square w-full max-w-[480px] items-center justify-center overflow-hidden rounded-2xl border border-ink-900 bg-gradient-to-br from-[#0F0A1F] via-black to-[#0A0716]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(83,102,174,0.28),transparent_60%)]" />
      <div className="pointer-events-none absolute -left-16 top-1/3 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-[#7A88C4]/25 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.45)_100%)]" />

      <svg
        viewBox="0 0 74 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-[58%] w-auto drop-shadow-[0_20px_60px_rgba(83,102,174,0.45)]"
        aria-hidden="true"
      >
        <path
          d="M0 61.6667L37 40.2456L37 -9.53674e-06L-8.86631e-07 21.421L0 61.6667Z"
          fill="url(#cube_face_a)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37 36.3509L37 37.6491L-5.7202e-08 59.0702L-8.5803e-08 57.7719L37 36.3509ZM37 35.0526L-1.14404e-07 56.4737L-1.43005e-07 55.1754L37 33.7544L37 35.0526ZM-2.00207e-07 52.5789L-1.71606e-07 53.8772L37 32.4561L37 31.1579L-2.00207e-07 52.5789ZM-2.28808e-07 51.2807L-2.57409e-07 49.9824L37 28.5614L37 29.8596L-2.28808e-07 51.2807ZM-3.14611e-07 47.386L-2.8601e-07 48.6842L37 27.2631L37 25.9649L-3.14611e-07 47.386ZM-3.43212e-07 46.0877L-3.71813e-07 44.7895L37 23.3684L37 24.6667L-3.43212e-07 46.0877ZM-4.29015e-07 42.193L-4.00414e-07 43.4912L37 22.0702L37 20.7719L-4.29015e-07 42.193ZM-4.57616e-07 40.8947L-4.86217e-07 39.5965L37 18.1754L37 19.4737L-4.57616e-07 40.8947ZM-5.43419e-07 37L-5.14818e-07 38.2982L37 16.8772L37 15.5789L-5.43419e-07 37ZM-5.7202e-07 35.7017L-6.00621e-07 34.4035L37 12.9824L37 14.2807L-5.7202e-07 35.7017ZM-6.57823e-07 31.807L-6.29222e-07 33.1053L37 11.6842L37 10.386L-6.57823e-07 31.807ZM-6.86424e-07 30.5088L-7.15025e-07 29.2105L37 7.78946L37 9.08771L-6.86424e-07 30.5088ZM-7.72227e-07 26.614L-7.43626e-07 27.9123L37 6.49122L37 5.19297L-7.72227e-07 26.614ZM-8.00828e-07 25.3158L-8.29429e-07 24.0175L37 2.59648L37 3.89473L-8.00828e-07 25.3158ZM-8.86631e-07 21.421L-8.5803e-07 22.7193L37 1.29823L37 -9.53674e-06L-8.86631e-07 21.421ZM37 40.2456L37 38.9474L-2.8601e-08 60.3684L0 61.6667L37 40.2456Z"
          fill="url(#cube_lines_a)"
        />
        <path
          d="M37 40.2457L74 61.6667L74 21.4211L37 6.48499e-05L37 40.2457Z"
          fill="url(#cube_face_b)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M74 57.772L74 59.0702L37 37.6492L37 36.3509L74 57.772ZM74 56.4737L37 35.0527L37 33.7544L74 55.1755L74 56.4737ZM37 31.158L37 32.4562L74 53.8772L74 52.579L37 31.158ZM37 29.8597L37 28.5615L74 49.9825L74 51.2807L37 29.8597ZM37 25.965L37 27.2632L74 48.6843L74 47.386L37 25.965ZM37 24.6667L37 23.3685L74 44.7895L74 46.0878L37 24.6667ZM37 20.772L37 22.0702L74 43.4913L74 42.193L37 20.772ZM37 19.4737L37 18.1755L74 39.5965L74 40.8948L37 19.4737ZM37 15.579L37 16.8773L74 38.2983L74 37L37 15.579ZM37 14.2808L37 12.9825L74 34.4036L74 35.7018L37 14.2808ZM37 10.386L37 11.6843L74 33.1053L74 31.8071L37 10.386ZM37 9.08778L37 7.78954L74 29.2106L74 30.5088L37 9.08778ZM37 5.19305L37 6.49129L74 27.9123L74 26.6141L37 5.19305ZM37 3.8948L37 2.59655L74 24.0176L74 25.3158L37 3.8948ZM37 6.48664e-05L37 1.29831L74 22.7193L74 21.4211L37 6.48664e-05ZM74 61.6667L74 60.3685L37 38.9474L37 40.2457L74 61.6667Z"
          fill="url(#cube_lines_b)"
        />
        <path
          d="M0 21.421L37 42.842L37 83.0876L-8.86631e-07 61.6666L0 21.421Z"
          fill="url(#cube_face_c)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37 46.7367L37 45.4385L-5.7202e-08 24.0175L-8.5803e-08 25.3157L37 46.7367ZM37 48.035L-1.14404e-07 26.6139L-1.43005e-07 27.9122L37 49.3332L37 48.035ZM-2.00207e-07 30.5087L-1.71606e-07 29.2104L37 50.6315L37 51.9297L-2.00207e-07 30.5087ZM-2.28808e-07 31.8069L-2.57409e-07 33.1052L37 54.5262L37 53.228L-2.28808e-07 31.8069ZM-3.14611e-07 35.7017L-2.8601e-07 34.4034L37 55.8245L37 57.1227L-3.14611e-07 35.7017ZM-3.43212e-07 36.9999L-3.71813e-07 38.2982L37 59.7192L37 58.421L-3.43212e-07 36.9999ZM-4.29015e-07 40.8946L-4.00414e-07 39.5964L37 61.0175L37 62.3157L-4.29015e-07 40.8946ZM-4.57616e-07 42.1929L-4.86217e-07 43.4911L37 64.9122L37 63.6139L-4.57616e-07 42.1929ZM-5.43419e-07 46.0876L-5.14818e-07 44.7894L37 66.2104L37 67.5087L-5.43419e-07 46.0876ZM-5.7202e-07 47.3859L-6.00621e-07 48.6841L37 70.1052L37 68.8069L-5.7202e-07 47.3859ZM-6.57823e-07 51.2806L-6.29222e-07 49.9824L37 71.4034L37 72.7017L-6.57823e-07 51.2806ZM-6.86424e-07 52.5789L-7.15025e-07 53.8771L37 75.2982L37 73.9999L-6.86424e-07 52.5789ZM-7.72227e-07 56.4736L-7.43626e-07 55.1753L37 76.5964L37 77.8946L-7.72227e-07 56.4736ZM-8.00828e-07 57.7718L-8.29429e-07 59.0701L37 80.4911L37 79.1929L-8.00828e-07 57.7718ZM-8.86631e-07 61.6666L-8.5803e-07 60.3683L37 81.7894L37 83.0876L-8.86631e-07 61.6666ZM37 42.842L37 44.1403L-2.8601e-08 22.7192L0 21.421L37 42.842Z"
          fill="url(#cube_lines_c)"
        />
        <path
          d="M37 42.8419L74 21.4209L74 61.6665L37 83.0875L37 42.8419Z"
          fill="url(#cube_face_d)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M74 25.3156L74 24.0174L37 45.4384L37 46.7366L74 25.3156ZM74 26.6139L37 48.0349L37 49.3331L74 27.9121L74 26.6139ZM37 51.9296L37 50.6314L74 29.2104L74 30.5086L37 51.9296ZM37 53.2279L37 54.5261L74 33.1051L74 31.8068L37 53.2279ZM37 57.1226L37 55.8244L74 34.4033L74 35.7016L37 57.1226ZM37 58.4209L37 59.7191L74 38.2981L74 36.9998L37 58.4209ZM37 62.3156L37 61.0173L74 39.5963L74 40.8946L37 62.3156ZM37 63.6138L37 64.9121L74 43.4911L74 42.1928L37 63.6138ZM37 67.5086L37 66.2103L74 44.7893L74 46.0875L37 67.5086ZM37 68.8068L37 70.1051L74 48.684L74 47.3858L37 68.8068ZM37 72.7016L37 71.4033L74 49.9823L74 51.2805L37 72.7016ZM37 73.9998L37 75.298L74 53.877L74 52.5788L37 73.9998ZM37 77.8945L37 76.5963L74 55.1753L74 56.4735L37 77.8945ZM37 79.1928L37 80.491L74 59.07L74 57.7718L37 79.1928ZM37 83.0875L37 81.7893L74 60.3682L74 61.6665L37 83.0875ZM74 21.4209L74 22.7191L37 44.1402L37 42.8419L74 21.4209Z"
          fill="url(#cube_lines_d)"
        />
        <defs>
          <linearGradient id="cube_face_a" x1="18.5" y1="50.99" x2="1.05" y2="20.76" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2D1B69" />
            <stop offset="1" stopColor="#C4B8FF" />
          </linearGradient>
          <linearGradient id="cube_lines_a" x1="30.83" y1="49.66" x2="-2.89" y2="16.55" gradientUnits="userSpaceOnUse">
            <stop stopColor="#100726" />
            <stop offset="1" stopColor="#100726" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cube_face_b" x1="40.25" y1="42.19" x2="60.41" y2="16.83" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4F3DC9" />
            <stop offset="1" stopColor="#E8E1FF" />
          </linearGradient>
          <linearGradient id="cube_lines_b" x1="37.65" y1="43.17" x2="70.25" y2="18.18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#100726" />
            <stop offset="1" stopColor="#100726" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cube_face_c" x1="8.5" y1="25.5" x2="-4.02" y2="75.77" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#5366AE" />
          </linearGradient>
          <linearGradient id="cube_lines_c" x1="9" y1="27.5" x2="-3.32" y2="65.29" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1B0F3F" />
            <stop offset="1" stopColor="#100726" />
          </linearGradient>
          <linearGradient id="cube_face_d" x1="43" y1="42" x2="73.27" y2="48.53" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C4B8FF" />
            <stop offset="1" stopColor="#3E4D7E" />
          </linearGradient>
          <linearGradient id="cube_lines_d" x1="41" y1="43.5" x2="81.72" y2="46.49" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1B0F3F" />
            <stop offset="1" stopColor="#100726" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

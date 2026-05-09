import { MARQUEE } from '../../data/content'

export function LogoMarquee() {
  const doubled = [...MARQUEE, ...MARQUEE]

  return (
    <div className="overflow-hidden border-y border-ink-900 bg-black py-7">
      <div className="mb-4 text-center text-[11px] uppercase tracking-[2px] text-ink-500">
        We are experts in
      </div>
      <div
        className="overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right,transparent,black 7%,black 93%,transparent)',
          WebkitMaskImage:
            'linear-gradient(to right,transparent,black 7%,black 93%,transparent)',
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-14 hover:[animation-play-state:paused]">
          {doubled.map((item, i) =>
            item.type === 'image' ? (
              <div
                key={`${item.value}-${i}`}
                className="flex shrink-0 items-center opacity-55 brightness-[3] grayscale transition hover:opacity-100 hover:brightness-100 hover:grayscale-0"
              >
                <img
                  src={item.value}
                  alt={item.alt ?? ''}
                  className="block h-[22px] max-w-[130px] object-contain"
                />
              </div>
            ) : (
              <div
                key={`${item.value}-${i}`}
                className="flex max-w-[200px] shrink-0 items-center px-2 text-center text-[13px] font-bold tracking-[0.5px] text-ink-500 opacity-55 transition hover:opacity-100"
              >
                {item.value}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

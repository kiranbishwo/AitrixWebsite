export interface ResourceCardProps {
  image: string
  title: string
  description: string
  href?: string
  primary?: boolean
}

export function ResourceCard({
  image,
  title,
  description,
  href = '#',
  primary = false,
}: ResourceCardProps) {
  return (
    <a
      href={href}
      className="group block overflow-hidden rounded-lg border border-ink-900 bg-ink-900/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-700/80"
    >
      <div className={`overflow-hidden bg-[#0d0d0d] ${primary ? 'h-[200px]' : 'h-[130px]'}`}>
        <img src={image} alt="" className="block h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <div
          className={`mb-1.5 font-semibold leading-snug text-white ${
            primary ? 'text-base' : 'text-sm'
          }`}
        >
          {title}
        </div>
        <div className="text-xs leading-[1.5] text-ink-500">{description}</div>
      </div>
    </a>
  )
}

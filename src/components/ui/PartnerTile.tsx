export interface PartnerTileProps {
  src: string
  alt: string
}

export function PartnerTile({ src, alt }: PartnerTileProps) {
  return (
    <div className="flex min-h-[68px] items-center justify-center bg-[#060606] p-4 transition-colors hover:bg-[#0d0d0d]">
      <img
        src={src}
        alt={alt}
        className="max-h-[26px] max-w-[78px] object-contain opacity-50 brightness-[3] grayscale transition-all duration-200 hover:opacity-90 hover:grayscale-[20%] hover:brightness-150"
      />
    </div>
  )
}

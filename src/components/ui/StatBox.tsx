export interface StatBoxProps {
  value: string
  label: string
}

export function StatBox({ value, label }: StatBoxProps) {
  return (
    <div className="bg-[#050505] py-9 px-7 text-center">
      <div className="text-[50px] font-bold leading-none tracking-[-2px] text-white">
        {value}
      </div>
      <div className="mt-1.5 text-sm text-ink-500">{label}</div>
    </div>
  )
}

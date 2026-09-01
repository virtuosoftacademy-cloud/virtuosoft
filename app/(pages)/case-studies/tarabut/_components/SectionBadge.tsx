import Image from "next/image"
import BadgeIcon from "@/public/assets/Images/casestudies/badge-sparkle.svg"

function SectionBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-[180px] border border-[#0051e4] px-[17px] py-[9px]">
      <Image src={BadgeIcon} alt="" className="size-3.5" />
      <span className="text-xs font-bold leading-4 text-[#0051e4]">
        {label}
      </span>
    </span>
  )
}

export default SectionBadge

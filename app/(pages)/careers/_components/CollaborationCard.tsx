import Image from "next/image"
import type { CollabCardItem } from "@/app/_constant"

interface CollaborationCardProps {
    collabData: CollabCardItem;
}

export default function CollaborationCard({ collabData }: CollaborationCardProps) {
   const {icon,label,description,translate_y,max_w} = collabData
    return (
        <>
            <div
                className={`
                group relative max-w-[188] rounded-xl text-left bg-white p-4
            shadow-[0_10px_25px_rgba(0,0,0,0.05)]
            ${translate_y}
            overflow-hidden`}                        >
                {/* Gradient border – modern, reliable method */}
                <div
                    className="
            pointer-events-none absolute inset-0 rounded-[15px]
            bg-linear-to-b from-primary to-white p-0.5 -z-10
          "
                >
                    <div className="h-full w-full rounded-[13px] bg-white" />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-1 sm:space-y-2">
                    {/* Icon / Image */}
                    <div className="relative max-w-[80]">
                        <Image
                            src={icon}
                            alt="Transparency Icon"
                            width={160}
                            height={160}
                            className="h-auto w-full object-contain"
                        />
                    </div>

                    {/* Heading */}
                    <h3 className={`font-bold text-xl ${max_w}`}>
                        {label}
                    </h3>

                    {/* Paragraph */}
                    <h2 className="text-sm text-gray-500">
                    {description}
                    </h2>
                </div>
            </div>
        </>
    )
}

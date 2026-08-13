// components/DifferentCard.tsx
import Image from "next/image";
import type { DifferentCardItem } from "@/app/_constant";

interface DifferentCardProps {
    differentData: DifferentCardItem;
}

export default function DifferentCard({ differentData }: DifferentCardProps) {
    const { icon, label, description } = differentData;

    return (
        <div
            className={`
        group relative 
        w-full max-w-[267] h-[244] 
        bg-white rounded-[15px] 
        shadow-[0_5px_15px_rgba(0,0,0,0.05)] 
        translate-0 
        overflow-visible
        pt-[50] px-5 pb-4
        flex flex-col items-start justify-start
        text-left
      `}
        >
            {/* Gradient border (modern Tailwind approach) */}
            <div
                className={`
          pointer-events-none absolute inset-0 rounded-[15px] 
          bg-linear-to-b from-primary to-white p-[2] -z-10
        `}
            >
                <div className="w-full h-full rounded-[13px] bg-white" />
            </div>

            {/* Floating icon – positioned above the card */}
            <div className="absolute left-1/2 top-[-60] -translate-x-1/2 z-10">
                <Image
                    src={icon}
                    alt={`${label} icon`}
                    width={160}
                    height={130}  
                    className={`
            h-auto w-[160] object-contain 
            transition-all duration-400 ease-out
            group-hover:-translate-y-[10] group-hover:scale-105
          `}
                    priority={false} 
                />
            </div>

            {/* Content */}
            <div className="relative z-10 mt-[60] space-y-1.5 w-full">
                <h3
                    className={`
            font-['Host_Grotesk'] font-bold 
            text-[22.43px] leading-tight 
            text-[#222]
          `}
                >
                    {label}
                </h3>

                <p
                    className={`
            font-['Host_Grotesk'] font-normal 
            text-[15.86px] leading-[1.3] 
            text-[#555]
          `}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
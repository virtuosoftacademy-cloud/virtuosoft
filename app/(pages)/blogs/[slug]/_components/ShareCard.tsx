import Image from "next/image"
import CardSwirl from "@/public/assets/Images/blog/card-swirl.svg"
import ShareLinks from "./ShareLinks"

interface ShareCardProps {
    title: string;
}

// Figma node 1971:23747 — small white card sitting under the author card.
function ShareCard({ title }: ShareCardProps) {
    return (
        <div className="relative overflow-hidden rounded-[21px] border border-[#E8EBF2] bg-white p-5 shadow-[0_15px_32px_-8.6px_rgba(26,38,89,0.08)]">
            <Image
                src={CardSwirl}
                alt=""
                className="pointer-events-none absolute -right-10 -top-16 w-[70%] select-none opacity-20"
            />

            <div className="relative flex flex-col gap-2.5">
                <p className="text-base font-semibold text-[#050F21]">
                    Share with your community!
                </p>
                <ShareLinks title={title} variant="blue" />
            </div>
        </div>
    )
}

export default ShareCard

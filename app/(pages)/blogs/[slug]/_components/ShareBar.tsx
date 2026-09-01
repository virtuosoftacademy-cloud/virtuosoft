import Image from "next/image"
import CardSwirl from "@/public/assets/Images/blog/card-swirl.svg"
import ShareLinks from "./ShareLinks"

interface ShareBarProps {
    title: string;
}

// Figma node 1971:23770 — full-width blue bar closing out the article body.
function ShareBar({ title }: ShareBarProps) {
    return (
        <div className="relative overflow-hidden rounded-xl bg-primary px-5 py-5">
            <Image
                src={CardSwirl}
                alt=""
                className="pointer-events-none absolute -left-6 -top-24 w-[45%] select-none opacity-20"
            />

            <div className="relative flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-base font-bold leading-6 text-white">
                    Like what you see? Share with a friend.
                </p>
                <ShareLinks title={title} variant="white" />
            </div>
        </div>
    )
}

export default ShareBar

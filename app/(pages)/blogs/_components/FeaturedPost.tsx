import Image from "next/image"
import Link from "next/link"
import BadgeIcon from "@/public/assets/Images/blog/badge-sparkle.svg"
import type { BlogPost } from "./index"

interface FeaturedPostProps {
    post: BlogPost;
}

// Figma node 1971:24478 — full-bleed hero card with a blurred caption bar
// pinned to the bottom edge.
function FeaturedPost({ post }: FeaturedPostProps) {
    const { title, Src, category, date, readTime, slug } = post

    return (
        <Link
            href={`/blogs/${slug}`}
            className="group relative block h-[320px] overflow-hidden rounded-[20px] bg-[#1b1b1f] md:h-[442px]"
        >
            <Image
                src={Src}
                alt={title}
                fill
                sizes="(max-width: 1280px) 100vw, 1248px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-x-0 bottom-0 bg-black/10 px-5 py-6 backdrop-blur-[17.5px]">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary bg-[#F8FAFF] px-4 py-2">
                    <Image src={BadgeIcon} alt="" className="size-3.5" />
                    <span className="font-helvetica-now-display text-xs font-bold leading-4 text-primary">
                        {category}
                    </span>
                </span>

                <h3 className="font-helvetica-now-display mt-2.5 text-xl font-bold leading-7 text-white md:text-[32px] md:leading-10">
                    {title}
                </h3>

                <div className="font-helvetica-now-display mt-2.5 flex items-center gap-5 text-sm leading-6 text-white">
                    <span>{date}</span>
                    <span className="flex items-center gap-2">
                        <span aria-hidden="true" className="size-1 rounded-full bg-white" />
                        {readTime}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default FeaturedPost

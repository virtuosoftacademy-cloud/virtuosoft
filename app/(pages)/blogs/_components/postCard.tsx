import Image from "next/image"
import Link from "next/link"
import ArrowUpRight from "@/public/assets/Images/blog/arrow-up-right.svg"
import { isOptimizableImageSrc } from "@/app/api/lib/r2"
import type { BlogPost } from "./index"

interface PostCardProps {
    post: BlogPost;
}

// Figma node 1971:24039 — 400x428 glass card: 240px media block with a
// translucent category badge, then a white content block.
function PostCard({ post }: PostCardProps) {
    const { title, Src, category, date, excerpt, slug } = post

    return (
        <Link
            href={`/blogs/${slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-white/95 shadow-[0_0_14.5px_0_rgba(52,67,122,0.09)]"
            style={{
                backgroundImage:
                    "linear-gradient(141.25deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.62) 71.43%)",
            }}
        >
            <div className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-t-[20px] bg-[#1B2334]">
                <Image
                    src={Src}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized={!isOptimizableImageSrc(Src)}
                />
                <span className="absolute left-5 top-5 inline-flex items-center justify-center rounded-2xl bg-white/20 px-2.5 py-0.5 text-sm font-medium leading-5 text-white backdrop-blur-sm">
                    {category}
                </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 rounded-b-[20px] border-x border-b border-primary/20 bg-white p-5">
                <p className="text-base font-bold leading-6 text-primary">
                    {date}
                </p>

                <div className="flex items-start gap-4">
                    <h3 className="line-clamp-2 flex-1 text-xl font-medium leading-7 text-[#1a1a1a]">
                        {title}
                    </h3>
                    <span className="shrink-0 pt-1">
                        <Image
                            src={ArrowUpRight}
                            alt=""
                            className="size-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </span>
                </div>

                <p className="line-clamp-2 text-base leading-[22px] text-[#667085]">
                    {excerpt}
                </p>
            </div>
        </Link>
    )
}

export default PostCard

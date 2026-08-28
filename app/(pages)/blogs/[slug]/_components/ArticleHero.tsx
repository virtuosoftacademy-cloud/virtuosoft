import Image from "next/image"
import type { BlogPost } from "../../_components"

interface ArticleHeroProps {
    post: BlogPost;
}

// Figma node 1971:23709 — 824x442 rounded card: the article image with a
// 182px blurred scrim across the bottom carrying the badge, title and meta.
function ArticleHero({ post }: ArticleHeroProps) {
    const { title, Src, category, date, readTime } = post

    return (
        <div className="relative aspect-[824/442] w-full overflow-hidden rounded-xl bg-[#1B1B1F]">
            <Image
                src={Src}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 824px"
                className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2.5 bg-black/10 p-5 backdrop-blur-[17.5px]">
                {category && (
                    <span className="inline-flex w-fit items-center gap-2 rounded-[20px] bg-[#F1ECFF] px-2 py-[5px]">
                        <span className="size-4 shrink-0 rounded-full bg-primary" />
                        <span className="font-helvetica-now-display text-sm font-bold leading-5 text-primary">
                            {category}
                        </span>
                    </span>
                )}

                <h1 className="font-helvetica-now-display text-xl font-bold leading-tight text-white md:text-[32px] md:leading-10">
                    {title}
                </h1>

                <div className="flex flex-wrap items-center gap-2.5 text-sm text-white">
                    <time dateTime={date}>{date}</time>
                    {readTime && (
                        <>
                            <span className="size-1 shrink-0 rounded-full bg-white" />
                            <span>{readTime}</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ArticleHero

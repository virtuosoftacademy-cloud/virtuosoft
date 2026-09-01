import Image from "next/image"
import type { ArticleSection } from "./articleContent"

interface ArticleTocProps {
    sections: ArticleSection[];
    thumbnail: string;
    thumbnailAlt: string;
}

// Figma node 1971:23699 — "In this article", a stack of #F7F9FB rows pairing
// the section heading with a 125x71 thumbnail.
function ArticleToc({ sections, thumbnail, thumbnailAlt }: ArticleTocProps) {
    if (sections.length === 0) {
        return null
    }

    return (
        <nav aria-label="In this article" className="flex flex-col gap-[19px]">
            <p className="text-2xl font-bold leading-8 text-[#050F21]">
                In this article
            </p>

            <ol className="flex flex-col gap-2.5">
                {sections.map((section) => (
                    <li key={section.id}>
                        <a
                            href={`#${section.id}`}
                            className="group flex min-h-[97px] items-center justify-between gap-4 rounded-lg bg-[#F7F9FB] p-[12.8px] transition-colors hover:bg-[#EFF3F8]"
                        >
                            <span className="line-clamp-3 flex-1 text-base font-bold leading-6 text-[#050F21]">
                                {section.title}
                            </span>

                            <span className="relative h-[71px] w-[125px] shrink-0 overflow-hidden rounded-lg">
                                <Image
                                    src={thumbnail}
                                    alt={thumbnailAlt}
                                    fill
                                    sizes="125px"
                                    className="object-cover"
                                />
                                <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
                            </span>
                        </a>
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default ArticleToc

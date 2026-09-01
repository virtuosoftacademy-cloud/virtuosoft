import Image from "next/image"
import CardSwirl from "@/public/assets/Images/blog/card-swirl.svg"
import CardSwirlSoft from "@/public/assets/Images/blog/card-swirl-2.svg"
import LinkedInMark from "@/public/assets/Images/blog/author-linkedin.svg"
import type { BlogPost } from "../../_components"

interface AuthorCardProps {
    post: BlogPost;
}

function initialsOf(name: string): string {
    return name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part.charAt(0).toUpperCase())
        .join("")
}

// Figma node 1971:23724 — white card with the two soft background swirls,
// a 100px avatar, the LinkedIn mark, name/role, a rule, then the bio.
function AuthorCard({ post }: AuthorCardProps) {
    const { author, authorRole, authorBio, authorImage, authorLinkedIn } = post

    if (!author) {
        return null
    }

    return (
        <div className="relative overflow-hidden rounded-[21px] border border-[#E8EBF2] bg-white p-5 shadow-[0_15px_32px_-8.6px_rgba(26,38,89,0.08)]">
            <Image
                src={CardSwirl}
                alt=""
                className="pointer-events-none absolute -left-px -top-px w-[89%] select-none opacity-10"
            />
            <Image
                src={CardSwirlSoft}
                alt=""
                className="pointer-events-none absolute -right-8 bottom-0 w-[89%] select-none opacity-10 mix-blend-soft-light"
            />

            <div className="relative">
                <div className="flex items-center gap-5">
                    <div className="relative size-[100px] shrink-0 overflow-hidden rounded-[10px] border border-white/50 bg-[#F7F9FB]">
                        {authorImage ? (
                            <Image
                                src={authorImage}
                                alt={author}
                                fill
                                sizes="100px"
                                className="object-cover"
                            />
                        ) : (
                            <span className="flex size-full items-center justify-center text-2xl font-bold text-primary">
                                {initialsOf(author)}
                            </span>
                        )}
                    </div>

                    {authorLinkedIn && (
                        <a
                            href={authorLinkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${author} on LinkedIn`}
                            className="mt-8 block size-[30px] self-start"
                        >
                            <Image src={LinkedInMark} alt="" className="size-[30px]" />
                        </a>
                    )}
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                    <p className="text-xl font-semibold text-[#050F21]">{author}</p>
                    {authorRole && (
                        <p className="max-w-[301px] text-base text-[#050F21]">{authorRole}</p>
                    )}
                    <hr className="mt-1 max-w-[301px] border-t border-[#E8EBF2]" />
                </div>

                {authorBio && (
                    <p className="mt-5 text-sm leading-[18px] text-[#050F21]">{authorBio}</p>
                )}
            </div>
        </div>
    )
}

export default AuthorCard

import Image from "next/image"
import Link from "next/link"

export type CaseStudyCardProps = {
    id: string
    image: string
    imageAlt: string
    category: string
    title: string
    summary: string
    serviceAreas: string[]
    href: string
}

/**
 * Generic case-study card driven entirely by CMS data — no per-client art or
 * copy baked in, unlike the Figma-exact cards on the listing page. Used
 * wherever case studies need to render dynamically (e.g. "More Case
 * Studies" on a detail page).
 */
export function CaseStudyCard({
    image,
    imageAlt,
    category,
    title,
    summary,
    serviceAreas,
    href,
}: CaseStudyCardProps) {
    return (
        <Link
            href={href}
            className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-white/95 p-3 shadow-[0px_0px_29px_0px_rgba(52,67,122,0.09)] transition-shadow hover:shadow-[0px_4px_29px_0px_rgba(52,67,122,0.18)]"
            style={{
                backgroundImage:
                    "linear-gradient(146.26deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.62) 71.43%)",
            }}
        >
            <div className="relative aspect-[588/298] w-full overflow-hidden rounded-[18px] bg-[#1b2334]">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 45vw, 92vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                    aria-hidden
                    className="absolute inset-0 block"
                    style={{
                        backgroundImage:
                            "linear-gradient(to bottom, rgba(0,0,0,0.08) 40.87%, rgba(0,0,0,0.4) 101.3%)",
                    }}
                />
                {category && (
                    <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                        {category}
                    </span>
                )}
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-[2px] transition-colors group-hover:bg-white/20">
                    View Project
                    <span aria-hidden className="text-base">
                        &#8594;
                    </span>
                </span>
            </div>

            <div className="px-2 pb-1 pt-5">
                <h3 className="text-xl font-bold leading-7 text-[#050f21]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#474747] line-clamp-2">{summary}</p>

                {serviceAreas.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {serviceAreas.slice(0, 3).map((area) => (
                            <span
                                key={area}
                                className="rounded-full border border-[#e0e3e9] px-2.5 py-1 text-[11px] font-semibold text-[#474747]"
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    )
}

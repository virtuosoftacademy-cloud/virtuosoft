'use client'

import { useEffect, useState } from "react"
import Image, { type StaticImageData } from "next/image"
import FacebookBlue from "@/public/assets/Images/blog/social-facebook.svg"
import XBlue from "@/public/assets/Images/blog/social-x.svg"
import LinkedInBlue from "@/public/assets/Images/blog/social-linkedin.svg"
import FacebookWhite from "@/public/assets/Images/blog/social-facebook-white.svg"
import XWhite from "@/public/assets/Images/blog/social-x-white.svg"
import LinkedInWhite from "@/public/assets/Images/blog/social-linkedin-white.svg"

interface ShareLinksProps {
    title: string;
    /** "blue" is the card variant (node 1971:23756); "white" sits on the blue bar (node 1971:23779). */
    variant?: "blue" | "white";
}

interface ShareTarget {
    label: string;
    icon: StaticImageData;
    href: (url: string, title: string) => string;
}

const TARGETS: Record<"blue" | "white", ShareTarget[]> = {
    blue: [
        {
            label: "Facebook",
            icon: FacebookBlue,
            href: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        },
        {
            label: "X",
            icon: XBlue,
            href: (url, title) =>
                `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        },
        {
            label: "LinkedIn",
            icon: LinkedInBlue,
            href: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        },
    ],
    white: [
        {
            label: "Facebook",
            icon: FacebookWhite,
            href: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        },
        {
            label: "X",
            icon: XWhite,
            href: (url, title) =>
                `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        },
        {
            label: "LinkedIn",
            icon: LinkedInWhite,
            href: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        },
    ],
}

/**
 * The share intents need the article's canonical URL, which is only known in the
 * browser, so the icons render inert until the location is available instead of
 * shipping links that would resolve to an empty share target.
 */
function ShareLinks({ title, variant = "blue" }: ShareLinksProps) {
    const [url, setUrl] = useState<string>("")

    useEffect(() => {
        setUrl(window.location.href)
    }, [])

    return (
        <div className="flex items-center gap-5">
            {TARGETS[variant].map((target) => {
                const icon = (
                    <Image
                        src={target.icon}
                        alt=""
                        className="size-[30px] transition-transform duration-200 group-hover:-translate-y-0.5"
                    />
                )

                if (!url) {
                    return (
                        <span key={target.label} className="block size-[30px]">
                            {icon}
                        </span>
                    )
                }

                return (
                    <a
                        key={target.label}
                        href={target.href(url, title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Share on ${target.label}`}
                        className="group block size-[30px]"
                    >
                        {icon}
                    </a>
                )
            })}
        </div>
    )
}

export default ShareLinks

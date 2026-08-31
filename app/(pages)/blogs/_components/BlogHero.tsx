import Image from "next/image"
import BadgeIcon from "@/public/assets/Images/blog/badge-sparkle.svg"
import HeroBg from "@/public/assets/Images/blog/hero-bg.svg"

// Figma node 1971:24687 — the hero art is a single exported gradient/dot SVG.
// `-mt-20 pt-20` mirrors the home hero so the artwork runs behind the sticky nav.
function BlogHero() {
    return (
        <section className="relative -mt-20 flex min-h-[441px] items-center overflow-hidden pt-20">
            <div className="absolute inset-0">
                <Image
                    src={HeroBg}
                    alt=""
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <div className="relative mx-auto w-full max-w-7xl px-6 py-14 md:px-10 lg:px-0 md:py-16">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary bg-[#F8FAFF] px-4 py-2">
                    <Image src={BadgeIcon} alt="" className="size-3.5" />
                    <span className="font-helvetica-now-display text-xs font-bold leading-4 text-primary">
                        Insights &amp; Ideas
                    </span>
                </span>

                <h1 className="font-helvetica-now-display mt-5 max-w-[725px] text-3xl leading-[1.2] text-white md:text-[48px] md:leading-[56px]">
                    Insights, Ideas &amp;{" "}
                    <span className="font-bold">Industry Trends</span>
                </h1>

                <p className="font-helvetica-now-display mt-3 max-w-[725px] text-base leading-[22px] text-white/85">
                    Stay informed with expert perspectives, practical insights, and the
                    latest trends shaping technology, business, and digital
                    transformation.
                </p>
            </div>
        </section>
    )
}

export default BlogHero

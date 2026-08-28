import Image from "next/image"
import Link from "next/link"
import { whitePaper_Translations } from "@/app/_constant"
import BadgeSparkle from "@/public/assets/Images/whitepaper/badge-sparkle-paper.svg"
import DownloadIcon from "@/public/assets/Images/whitepaper/icon-download.svg"
import ArrowRight from "@/public/assets/Images/whitepaper/icon-arrow-right.svg"

function Translations() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16 lg:px-6">
        {/* Left: section header */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-[180px] border border-[#0051e4] bg-[#f8faff] px-[17px] py-[9px]">
            <span className="relative block size-[14px] shrink-0">
              <Image src={BadgeSparkle} alt="" fill className="size-full" />
            </span>
            <span className="font-helvetica-now-display text-[12px] font-bold leading-[16px] text-[#0051e4]">
              Original Paper
            </span>
          </span>

          <h2 className="font-helvetica-now-display mt-2 text-4xl font-normal leading-[1.2] text-[#050f21] md:text-[40px] md:leading-[56px]">
            Choose your preferred{" "}
            <span className="font-bold text-[#0051e4]">translation to read</span>
          </h2>

          <p className="font-helvetica-now-display mt-3 text-[16px] leading-[22px] text-[#474747]">
            Explore the original paper and its available translations, making
            valuable research and insights accessible to a wider audience.
          </p>
        </div>

        {/* Right: one card per available translation */}
        <div className="grid gap-6">
          {whitePaper_Translations.map((paper) => (
            <div
              key={paper.language}
              className="flex flex-col items-center rounded-[16px] border border-[#f3f4f6] bg-white px-8 pt-8 pb-7 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
            >
              <span className="flex size-[56px] items-center justify-center rounded-full bg-[#0051e4]/6">
                <span className="relative block size-[24px]">
                  <Image src={DownloadIcon} alt="" fill className="size-full" />
                </span>
              </span>

              <p className="font-helvetica-now-display mt-8 text-center text-[24px] font-bold leading-[32px] text-black">
                {paper.language}
              </p>

              <Link
                href={paper.href}
                className="mt-8 inline-flex items-center gap-2 text-[16px] font-medium leading-[24px] text-[#0051e4] hover:underline"
              >
                {paper.linkLabel}
                <span className="relative block size-[16px] shrink-0">
                  <Image src={ArrowRight} alt="" fill className="size-full" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Translations

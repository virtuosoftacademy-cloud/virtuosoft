import Image from "next/image"
import Link from "next/link"
import { Eyebrow, SectionBody, SHELL, PRIMARY_BTN } from "./Ui"

export default function Demo() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className={SHELL}>
        <Eyebrow>See It Work</Eyebrow>

        <div className="mt-2 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-start">
          <div className="lg:max-w-[943px]">
            <h2 className="font-helvetica-now-display text-4xl leading-[1.2] md:text-[40px]">
              <span className="font-normal text-[#050f21]">From Document to ERP in 60 Seconds,</span>
              <br />
              <span className="font-bold text-[#0051e4]">Watch the Full Process</span>
            </h2>
            <SectionBody className="mt-3 max-w-[890px]">
              This 3-minute walkthrough shows a real invoice moving through the pipeline: captured
              from the source folder, cleaned, identified, extracted, validated across three AI
              layers, and posted into the ERP. No editing. No narration tricks. Just the system
              running.
            </SectionBody>
          </div>

          <Link href="/contact" className={`${PRIMARY_BTN} shrink-0`}>
            Book a Working Session
          </Link>
        </div>

        {/* Video placard */}
        <div className="relative mt-8 aspect-[1248/484] w-full overflow-hidden rounded-[18px] border-4 border-[#0a162c] bg-black">
          <Image
            src="/assets/Images/products/certus/page/m-video-poster.png"
            alt="Certus running on a desktop workstation"
            fill
            className="object-cover opacity-60"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 pt-8">
            <Image
              src="/assets/Images/products/certus/page/m-certus-wordmark.png"
              alt="Certus — certain, assured and reliable"
              width={564}
              height={134}
              className="h-auto w-full max-w-[564px]"
            />
            <span className="flex size-[64px] items-center justify-center rounded-[13px] bg-[#0051e4] shadow-[0px_28px_56px_-13px_rgba(0,0,0,0.25)] md:size-20">
              <Image
                src="/assets/Images/products/certus/page/m-play.svg"
                alt=""
                width={22}
                height={28}
              />
            </span>
          </div>

          <div className="absolute bottom-3 left-3 rounded-[5px] border border-white/20 bg-[rgba(15,26,46,0.8)] px-4 py-2 backdrop-blur-sm md:bottom-4 md:left-4">
            <p className="font-helvetica-now-display text-[12px] font-bold leading-4 text-[#b0c9f7]">
              Ready to See It Against Your Own Documents?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

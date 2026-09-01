import Image from "next/image"
import { Eyebrow, SHELL, SectionBody, SectionTitle } from "./Ui"

/**
 * "One Platform. Every Document. Complete Visibility" — intro block, a pill tab
 * strip and the "Every Document, Sorted by Company" split: copy on the left,
 * the Certus processed-files dashboard on the right.
 * Figma: Frame 1618874637 (2017:5557), 1248x584.
 */

const TABS = ["Live System", "Daily Report", "When Some Thing Needs a Human"]

export default function SectionB3() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className={`${SHELL} flex flex-col gap-10`}>
        <div className="flex w-full max-w-[930px] flex-col gap-2">
          <div>
            <Eyebrow>Smart Document Processing</Eyebrow>
          </div>

          <div className="flex flex-col gap-3">
            <SectionTitle
              lead={
                <>
                  One Platform. Every Document.{" "}
                  <span className="font-bold text-[#0051e4]">Complete Visibility</span>
                </>
              }
            />
            <SectionBody className="max-w-[818px]">
              Track every invoice and purchase order, organize documents automatically,
              receive daily reports and ensure nothing slips through the cracks.
            </SectionBody>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex flex-wrap items-center gap-3">
            {TABS.map((tab, index) => (
              <span
                key={tab}
                className={`inline-flex h-10 items-center justify-center rounded-[50px] px-4 text-center text-xs font-bold leading-4 ${
                  index === 0
                    ? "w-[100px] bg-[#0051e4] text-white"
                    : "border border-[#0051e4] text-[#0051e4]"
                } ${index === 1 ? "w-[100px]" : ""}`}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-[62px]">
            <div className="flex w-full flex-col gap-3 lg:w-[362px] lg:shrink-0">
              <h3 className="text-[28px] font-bold leading-[36px] text-[#050f21] md:text-[32px] md:leading-10">
                Every Document, Sorted{" "}
                <span className="text-[#0051e4]">by Company</span>
              </h3>
              <p className="text-sm leading-6 text-[#474747]">
                Certus keeps every document organized by company, automatically. No
                folders to manage, no manual sorting. Open any company and see every
                invoice or purchase order it has processed, and whether it went through
                clean.
              </p>
            </div>

            <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[#e6eefc] shadow-[0px_4px_35px_0px_rgba(0,81,228,0.15)] sm:h-[300px] lg:h-[330px] lg:w-[824px] lg:shrink-0">
              <Image
                src="/assets/Images/products/certus/page/b-all-process-files.png"
                alt="Certus dashboard listing processed invoice files grouped by company"
                fill
                sizes="(max-width: 1024px) 100vw, 824px"
                className="object-cover object-top"
              />
              <span className="absolute left-[13px] top-[11px] block h-[22.45px] w-[92.44px] overflow-hidden">
                <Image
                  src="/assets/Images/products/certus/page/b-certus-logo.png"
                  alt="Certus"
                  width={114}
                  height={63}
                  className="absolute left-[-10.64px] top-[-22.75px] h-[63.22px] w-[114.04px] max-w-none"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

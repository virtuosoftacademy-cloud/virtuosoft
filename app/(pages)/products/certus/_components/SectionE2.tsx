import Image from "next/image"
import { Eyebrow, SectionTitle, SHELL } from "./Ui"

const IMG = "/assets/Images/products/certus/page"

const CARDS = [
  {
    title: "Retail and FMCG Distribution",
    body: "High-volume invoice processing from dozens of supplier formats including informal channels like WhatsApp POs. Reduce month-end close time by eliminating the manual entry backlog.",
  },
  {
    title: "Trading and Commodity Houses",
    body: "Multi-entity operations across GCC and Pakistan, each with different ERPs. One system reads every document and posts to the right destination per entity.",
  },
  {
    title: "Manufacturing and Procurement",
    body: "Complex multi-page POs with line-item-level extraction — SKUs, barcodes, quantities, unit prices. Three-layer validation catches calculation discrepancies before they reach your books.",
  },
  {
    title: "Shared Services and BPOs",
    body: "Centralised document processing for multiple clients. Configurable per-client intake paths, vendor routing and ERP destinations all visible on one dashboard.",
  },
]

export default function SectionE2() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-20 lg:py-[68px]"
      style={{
        backgroundImage:
          "linear-gradient(126.27deg, #f5faff 0.13%, #f6fbff 101.17%)",
      }}
    >
      {/* Decorative art — masked to the section by overflow-hidden */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[144px] right-[74px] hidden translate-x-1/2 -translate-y-1/2 rotate-[-28.36deg] lg:block"
      >
        <Image
          src={`${IMG}/e-cap-glow.svg`}
          alt=""
          width={1748}
          height={1345}
          className="h-[1344.92px] w-[1748.4px] max-w-none"
        />
      </div>
      <Image
        aria-hidden
        src={`${IMG}/e-cap-dots-top.svg`}
        alt=""
        width={505}
        height={94}
        className="pointer-events-none absolute top-[-9px] right-[-104px] hidden h-[93.8px] w-[505.05px] max-w-none lg:block"
      />
      <Image
        aria-hidden
        src={`${IMG}/e-cap-dots-bottom.svg`}
        alt=""
        width={505}
        height={53}
        className="pointer-events-none absolute bottom-[-6px] left-[-9px] hidden h-[52.9px] w-[504.72px] max-w-none rotate-180 lg:block"
      />

      <div className={`${SHELL} relative`}>
        {/* Heading block — 2017:4788 */}
        <div className="flex flex-col items-start gap-2">
          <Eyebrow>Capabilities</Eyebrow>
          <SectionTitle
            className="max-w-[612px]"
            lead={
              <>
                Built for Finance Teams Processing{" "}
                <span className="font-bold text-[#0051e4]">Documents at Scale</span>
              </>
            }
          />
        </div>

        {/* Capability cards — 2017:4641 */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[68px] lg:grid-cols-4">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex w-full flex-col items-start gap-8 rounded-[22.4px] border-[0.964px] border-white/95 p-[33.6px] drop-shadow-[0px_0px_14.454px_rgba(52,67,122,0.09)] lg:h-[357px] lg:gap-[59.572px]"
              style={{
                backgroundImage:
                  "linear-gradient(137.68deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.62) 71.43%)",
              }}
            >
              <h3 className="font-helvetica-now-display w-full text-[23.66px] leading-[31.545px] font-bold text-[#0051e4]">
                {card.title}
              </h3>
              <p className="font-helvetica-now-display w-full text-[15.89px] leading-[21.843px] text-[#474747]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

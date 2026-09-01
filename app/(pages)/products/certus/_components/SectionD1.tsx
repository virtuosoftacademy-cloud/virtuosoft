import Image from "next/image"
import { Eyebrow, SectionTitle, SHELL } from "./Ui"

const ASSETS = "/assets/Images/products/certus/page"

type Industry = {
  title: string
  body: string
  icon: string
  /**
   * A couple of the exported assets bake the 38px blue tile (and its drop
   * shadow) into the SVG itself at 56x56 — those render without our own tile.
   */
  iconIncludesTile?: boolean
}

const INDUSTRIES: Industry[] = [
  {
    title: "Banking & Fintech",
    body: "Secure digital banking and financial innovation at scale.",
    icon: `${ASSETS}/d-ind-banking.svg`,
  },
  {
    title: "Government",
    body: "Modern digital services for connected public institutions.",
    icon: `${ASSETS}/d-ind-government.svg`,
    iconIncludesTile: true,
  },
  {
    title: "Healthcare",
    body: "Technology that improves patient care and clinical outcomes.",
    icon: `${ASSETS}/d-ind-healthcare.svg`,
  },
  {
    title: "Insurance",
    body: "Smarter insurance platforms with seamless customer experiences.",
    icon: `${ASSETS}/d-ind-insurance.svg`,
  },
  {
    title: "Retail",
    body: "Driving growth through connected commerce and retail innovation.",
    icon: `${ASSETS}/d-ind-retail.svg`,
  },
  {
    title: "Manufacturing",
    body: "Intelligent manufacturing powered by automation and analytics.",
    icon: `${ASSETS}/d-ind-manufacturing.svg`,
  },
  {
    title: "Oil, Gas and Energy",
    body: "Digital solutions for efficient and sustainable energy operations.",
    icon: `${ASSETS}/d-ind-energy.svg`,
  },
  {
    title: "Logistics",
    body: "Connected logistics with smarter supply chain management.",
    icon: `${ASSETS}/d-ind-logistics.svg`,
  },
  {
    title: "Telecommunication",
    body: "Reliable network solutions for the connected world.",
    icon: `${ASSETS}/d-ind-telecom.svg`,
  },
  {
    title: "Education",
    body: "Empowering modern education through digital learning experiences.",
    icon: `${ASSETS}/d-ind-education.svg`,
  },
]

function IndustryIcon({ industry }: { industry: Industry }) {
  if (industry.iconIncludesTile) {
    return (
      <span className="relative block size-[38px] shrink-0">
        <Image
          src={industry.icon}
          alt=""
          width={56}
          height={56}
          className="pointer-events-none absolute -left-[9px] -top-[4px] max-w-none"
        />
      </span>
    )
  }

  return (
    <span className="flex size-[38px] shrink-0 items-center justify-center rounded-[11px] bg-[#2563eb] shadow-[0px_5px_12px_-3px_rgba(37,99,235,0.34)]">
      <Image
        src={industry.icon}
        alt=""
        width={20}
        height={20}
        className="size-5"
      />
    </span>
  )
}

export default function SectionD1() {
  return (
    <section className="w-full py-14 md:py-20">
      <div className={SHELL}>
        <div className="flex flex-col items-start gap-2">
          <Eyebrow>Industry Solutions</Eyebrow>
          <SectionTitle
            lead={
              <>
                Built for Document-heavy{" "}
                <span className="font-bold text-[#0051e4]">Industries</span>
              </>
            }
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {INDUSTRIES.map((industry) => (
            <article
              key={industry.title}
              className="flex min-h-[149px] flex-col rounded-[22px] border border-[#eef1f7] bg-gradient-to-br from-white to-[#fbfcfe] p-[18px] shadow-[0px_0px_29px_0px_rgba(52,67,122,0.09)]"
            >
              <IndustryIcon industry={industry} />
              <h3 className="mt-[14px] text-sm font-bold leading-5 text-[#13161b]">
                {industry.title}
              </h3>
              <p className="mt-[6px] text-xs leading-4 text-[#4a5261]">
                {industry.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

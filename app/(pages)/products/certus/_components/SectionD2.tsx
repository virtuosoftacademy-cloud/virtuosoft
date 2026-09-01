import Image from "next/image"
import { Eyebrow, SectionBody, SectionTitle, SHELL } from "./Ui"

const ASSETS = "/assets/Images/products/certus/page"

type Logo = {
  alt: string
  src: string
  /** Intrinsic box from Figma — the logo is centred inside a 230x140 tile. */
  w: number
  h: number
  /** Optional caption rendered under the mark (only the Webhooks tile uses it). */
  label?: string
}

type LogoGroup = {
  heading: string
  logos: Logo[]
}

const LOGO_GROUPS: LogoGroup[] = [
  {
    heading: "Education",
    logos: [
      { alt: "SAP", src: `${ASSETS}/d-erp-sap.png`, w: 120, h: 123 },
      { alt: "Oracle Cloud ERP", src: `${ASSETS}/d-erp-oracle.png`, w: 120, h: 120 },
      {
        alt: "Microsoft Dynamics 365",
        src: `${ASSETS}/d-erp-dynamics365.png`,
        w: 120,
        h: 130,
      },
      { alt: "Workday", src: `${ASSETS}/d-erp-workday.png`, w: 120, h: 105 },
      { alt: "Odoo", src: `${ASSETS}/d-erp-odoo.png`, w: 120, h: 90 },
    ],
  },
  {
    heading: "Accounting",
    logos: [
      { alt: "Sage", src: `${ASSETS}/d-acc-sage.png`, w: 100, h: 58 },
      { alt: "QuickBooks", src: `${ASSETS}/d-acc-quickbooks.png`, w: 72, h: 72 },
      { alt: "Xero", src: `${ASSETS}/d-acc-xero.png`, w: 72, h: 72 },
    ],
  },
  {
    heading: "Analytics & Connectivity",
    logos: [
      { alt: "Power BI", src: `${ASSETS}/d-ana-powerbi.png`, w: 140, h: 102 },
      { alt: "Tableau", src: `${ASSETS}/d-ana-tableau.png`, w: 140, h: 73 },
      { alt: "REST API", src: `${ASSETS}/d-ana-rest-api.png`, w: 100, h: 106 },
      {
        alt: "Webhooks",
        src: `${ASSETS}/d-ana-webhooks.svg`,
        w: 74,
        h: 66,
        label: "Webhooks",
      },
    ],
  },
]

function LogoTile({ logo }: { logo: Logo }) {
  return (
    <div className="flex h-[140px] items-center justify-center rounded-[12px] bg-[#fbfdff] p-2">
      <div className="flex flex-col items-center justify-center">
        <span
          className="relative block max-h-[124px] max-w-full"
          style={{ width: logo.w, height: logo.h }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            sizes="230px"
            className="object-contain"
          />
        </span>
        {logo.label && (
          <span className="text-xl font-bold leading-7 text-[#91c044]">
            {logo.label}
          </span>
        )}
      </div>
    </div>
  )
}

export default function SectionD2() {
  return (
    <section className="w-full py-14 md:py-20">
      <div className={SHELL}>
        <div className="flex flex-col items-start gap-2">
          <Eyebrow>Works With Your Stack</Eyebrow>
          <div className="flex flex-col gap-3">
            <SectionTitle
              lead={
                <>
                  Posts to the ERP or Accounting Software{" "}
                  <span className="font-bold text-[#0051e4]">
                    You Already Run
                  </span>
                </>
              }
            />
            <SectionBody className="max-w-[1002px]">
              Certus maps validated data to your existing system SAP, Oracle,
              Microsoft Dynamics, or a regional accounting platform. The
              production deployment posted to SAP; additional ERP destinations
              are supported by the platform architecture and scoped per client
              environment. You do not need to change your stack. The system
              adapts to yours.
            </SectionBody>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-10">
          {LOGO_GROUPS.map((group) => (
            <div key={group.heading} className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold leading-8 text-[#050f21]">
                {group.heading}
              </h3>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {group.logos.map((logo) => (
                  <LogoTile key={logo.alt} logo={logo} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

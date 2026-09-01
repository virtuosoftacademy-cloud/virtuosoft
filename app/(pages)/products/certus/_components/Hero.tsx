import Image from "next/image"
import Link from "next/link"
import { Eyebrow, PRIMARY_BTN, SECONDARY_BTN, SHELL } from "./Ui"

/** Glass KPI chips that float over the product screenshot. */
const heroKpis = [
  { label: "Automation Rate", value: "99.2%", trend: "↑", pos: "right-2 top-2 md:right-6 md:-top-10" },
  { label: "Total Saving", value: "$45,230", trend: null, pos: "left-0 bottom-8 md:-left-6 md:bottom-16" },
]

/** Bottom stat row — Figma specs Inter here, so no Helvetica Now class. */
const heroStats = [
  { icon: "/assets/Images/products/certus/page/stat-bank.svg", value: "16+ Years", suffix: null, caption: "Industry Experience", tinted: false },
  { icon: "/assets/Images/products/certus/page/stat-user.svg", value: "50+", suffix: "Enterprises", caption: "Global Clients", tinted: true },
  { icon: "/assets/Images/products/certus/page/stat-user.svg", value: "50,000+ Users", suffix: null, caption: "Active Daily", tinted: true },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050f21] -mt-20">
      {/* Futuristic gradient backdrop, exported from the design */}
      <Image
        src="/assets/Images/products/certus/page/hero-bg.svg"
        alt=""
        fill
        priority
        className="pointer-events-none select-none object-cover"
      />

      <div className={`${SHELL} relative pt-28 md:pt-42`}>
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-10">
          {/* Copy */}
          <div className="w-full lg:max-w-[612px]">
            <Eyebrow variant="dark">Agentic Information Management System</Eyebrow>

            <h1 className="mt-4 text-[34px] leading-[1.16] tracking-[-1px] text-white md:text-[52px] md:leading-[64px]">
              <span className="font-normal">Transforming Enterprises</span>{" "}
              <span className="font-bold text-primary">Into AI Organizations</span>
            </h1>

            <p className="mt-3 max-w-[600px] text-base leading-[22px] text-white/85">
              Every organization runs on Information, but the information inside them is often
              scattered across emails, files, folders and business systems. Certus brings that
              information together and turns it into structured, actionable business intelligence.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link href="/contact" className={PRIMARY_BTN}>
                Book a Working Session
              </Link>
              <Link href="#demo" className={SECONDARY_BTN}>
                Watch 3 Min Demo
              </Link>
            </div>
          </div>

          {/* Product screenshot with floating KPI chips */}
          <div className="relative w-full lg:flex-1">
            <Image
              src="/assets/Images/products/certus/page/hero-dashboard-v2.png"
              alt="Certus document processing workspace showing a purchase order alongside its extracted JSON"
              width={1536}
              height={1024}
              priority
              className="w-300"
            />
            {heroKpis.map((kpi) => (
              <div
                key={kpi.label}
                className={`absolute ${kpi.pos} rounded-lg border border-white bg-white/30 p-3 backdrop-blur-sm md:p-4`}
              >
                <p className="text-[11px] font-bold uppercase leading-[15px] tracking-[0.885px] text-white">
                  {kpi.label}
                </p>
                <p className="mt-0.5 text-[22px] font-bold leading-[30px] text-white">
                  {kpi.value}
                  {kpi.trend && <span className="ml-1 text-[13px] font-semibold">{kpi.trend}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating stat row */}
        <div className="z-10 relative top-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {heroStats.map((stat) => (
            <div
              key={stat.caption}
              className="flex h-[90px] items-center gap-4 overflow-hidden rounded-[13px] border border-[#ebedf2]/60 bg-white/10 px-6 backdrop-blur-lg"
            >
              <span
                className={`flex size-[38px] shrink-0 items-center justify-center rounded-[10px] ${
                  stat.tinted ? "bg-primary shadow-[0px_6px_12px_0px_rgba(0,81,228,0.35)]" : ""
                }`}
              >
                <Image src={stat.icon} alt="" width={stat.tinted ? 17 : 38} height={stat.tinted ? 21 : 38} />
              </span>
              <span className="min-w-0">
                <span className="block text-[20px] font-bold leading-normal text-white">
                  {stat.value}
                  {stat.suffix && <span className="font-normal"> {stat.suffix}</span>}
                </span>
                <span className="block text-[13px] leading-4 text-white/80">{stat.caption}</span>
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

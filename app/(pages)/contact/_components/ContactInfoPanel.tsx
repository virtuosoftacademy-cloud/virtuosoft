'use client'

import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import IconCareer from "@/public/assets/Images/contact/icon-career.svg"
import IconQuestion from "@/public/assets/Images/contact/icon-question.svg"
import SalesRep1 from "@/public/assets/Images/contact/sales-rep-1.png"
import SalesRep2 from "@/public/assets/Images/contact/sales-rep-2.png"
import SupportRep1 from "@/public/assets/Images/contact/support-rep-1.png"
import VideoThumb from "@/public/assets/Images/contact/video-thumb.png"

function ArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="font-helvetica-now-display inline-flex items-center gap-2 text-sm font-bold leading-5 text-[#0051e4] hover:underline"
    >
      {label}
      <span aria-hidden="true">&rarr;</span>
    </Link>
  )
}

function ContactInfoPanel() {
  return (
    <div className="rounded-[41px] rounded-bl-[25px] border border-[#f3f4f6] bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05)] md:p-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <Image src={IconCareer} alt="" className="size-6" />
          <h3 className="font-helvetica-now-display text-lg font-medium leading-7 text-[#050f21]">
            Looking for career?
          </h3>
          <ArrowLink href="/careers" label="Apply for a job" />
        </div>

        <div className="flex flex-col gap-3">
          <Image src={IconQuestion} alt="" className="size-6" />
          <h3 className="font-helvetica-now-display text-lg font-medium leading-7 text-[#050f21]">
            Have a general question?
          </h3>
          <ArrowLink href="/#faq" label="See our FAQs" />
        </div>
      </div>

      <div className="my-8 h-px bg-[#e5e7eb]" />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h3 className="font-helvetica-now-display text-lg font-medium leading-7 text-[#050f21]">
            Sales Inquiries
          </h3>
          <a
            href="tel:+923001324657"
            className="font-helvetica-now-display text-base leading-[22px] text-[#474747] hover:text-primary"
          >
            +92 (300) 1324657
          </a>
          <div className="flex items-center">
            {[SalesRep1, SalesRep2].map((src, i) => (
              <div
                key={i}
                className={`relative size-10 overflow-hidden rounded-full border-2 border-white ${
                  i > 0 ? "-ml-2" : ""
                }`}
              >
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
          <ArrowLink href="/contact" label="Schedule a meeting" />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-helvetica-now-display text-lg font-medium leading-7 text-[#050f21]">
            Customer Support
          </h3>
          <a
            href="mailto:support@virtuosoft.com"
            className="font-helvetica-now-display text-base leading-[22px] text-[#474747] hover:text-primary"
          >
            support@virtuosoft.com
          </a>
          <div className="flex items-center">
            <div className="relative size-10 overflow-hidden rounded-full border-2 border-white">
              <Image src={SupportRep1} alt="" fill className="object-cover" />
            </div>
          </div>
          <ArrowLink href="/contact" label="Schedule a meeting" />
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-helvetica-now-display text-lg font-medium leading-7 text-[#050f21]">
          So what happens next?
        </h3>
        <div className="relative mt-4 aspect-[698/380] w-full overflow-hidden rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
          <Image src={VideoThumb} alt="" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <span className="flex size-16 items-center justify-center rounded-full bg-[#0051e4]/35 backdrop-blur-[2px]">
              <span className="flex size-12 items-center justify-center rounded-full bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
                <Play className="ml-0.5 size-4 fill-[#0051e4] text-[#0051e4]" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfoPanel

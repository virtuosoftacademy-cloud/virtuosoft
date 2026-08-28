'use client'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Avatar1 from '@/public/assets/Images/home/uk/cta-avatar-1.png'
import Avatar2 from '@/public/assets/Images/home/uk/cta-avatar-2.png'
import Avatar3 from '@/public/assets/Images/home/uk/cta-avatar-3.png'
import DotPattern from '@/public/assets/Images/home/uk/cta-dot-pattern.svg'

const stats = [
  { value: "16+", label: "Years in Production" },
  { value: "50+", label: "Enterprises Scaled" },
  { value: "50K+", label: "Users Impacted" },
]

function Cta() {
  return (
    <div className="px-10 lg:px-0 xl:px-0 my-30 flex justify-center">
      <div
        className="relative w-full lg:w-[85%] overflow-hidden rounded-3xl py-10 px-8 md:px-14"
        style={{
          backgroundImage:
            "linear-gradient(83deg, rgb(6,11,25) 0%, rgb(4,28,92) 45%, rgb(10,48,140) 100%)",
        }}
      >
        <div className="absolute -left-24 -top-32 size-[420px] rounded-full bg-[#0a1e6b]/40 blur-3xl" />
        <div className="absolute -right-24 -top-40 size-[500px] rounded-full bg-[#0a1e6b]/40 blur-3xl" />
        <Image
          src={DotPattern}
          alt=""
          className="pointer-events-none select-none absolute left-0 top-0 w-[45%] max-w-[400px] opacity-80"
        />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5">
              <span className="size-1.5 rounded-full bg-white" />
              <span className="font-helvetica-now-display text-white text-xs font-bold">Get In Touch</span>
            </div>
            <h4 className="font-helvetica-now-display text-white text-3xl md:text-4xl font-bold mt-4">Talk To An Expert</h4>
            <p className="font-helvetica-now-display text-white/70 text-sm mt-3 leading-relaxed">
              Get professional insights to take your business to the next level. Connect with our experts and start your journey toward growth today.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Button variant="secondary" className="rounded-full font-helvetica-now-display">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Link href="/contact" className="flex items-center gap-1.5 text-white text-sm font-semibold">
                Book a Call <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center -space-x-3">
              {[Avatar1, Avatar2, Avatar3].map((avatar, i) => (
                <div key={i} className="relative size-16 rounded-full border-2 border-[#2353cc] overflow-hidden bg-white/20">
                  <Image src={avatar} alt="" fill className="object-cover" />
                </div>
              ))}
              <span className="ml-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 pl-3.5 pr-4 py-2">
                <span className="size-1.5 rounded-full bg-white" />
                <span className="text-white text-xs font-semibold whitespace-nowrap">50+ Enterprises Advised</span>
              </span>
            </div>

            <div className="flex items-center divide-x divide-white/15">
              {stats.map((stat) => (
                <div key={stat.label} className="px-6 first:pl-0 text-center">
                  <p className="font-helvetica-now-display text-white text-3xl font-bold">{stat.value}</p>
                  <p className="font-helvetica-now-display text-white/65 text-xs mt-1 whitespace-nowrap">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta

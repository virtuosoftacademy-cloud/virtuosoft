import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Avatar1 from "@/public/assets/Images/home/ksa/cta-avatar-1.png"
import Avatar2 from "@/public/assets/Images/home/ksa/cta-avatar-2.png"
import Avatar3 from "@/public/assets/Images/home/ksa/cta-avatar-3.png"

const avatars = [Avatar1, Avatar2, Avatar3]

const stats = [
  { value: "16+", label: "Years in Production" },
  { value: "50+", label: "Enterprises Scaled" },
  { value: "50K+", label: "Users Impacted" },
]

function CtaKSA() {
  return (
    <div className="px-6 lg:px-10 my-16 lg:my-24 flex justify-center">
      <div
        className="relative w-full max-w-7xl overflow-hidden rounded-[28px] px-8 py-10 md:px-14 md:py-14"
        style={{
          backgroundImage:
            "linear-gradient(83deg, rgb(6,11,25) 0%, rgb(4,28,92) 50%, rgb(10,48,140) 100%)",
        }}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-md">
            <span className="font-helvetica-now-display inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white">
              <span className="size-1.5 rounded-full bg-white" />
              Get In Touch
            </span>
            <h3 className="font-helvetica-now-display mt-5 text-3xl md:text-4xl font-bold text-white">
              Talk To An Expert
            </h3>
            <p className="font-helvetica-now-display mt-3 text-sm text-white/70">
              Get professional insights to take your business to the next level. Connect with our experts and start your journey toward growth today.
            </p>
            <div className="mt-6 flex items-center gap-6">
              <Button variant="secondary" size="lg" className="rounded-full font-helvetica-now-display" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Link href="/contact" className="font-helvetica-now-display text-sm font-semibold text-white hover:underline">
                Book a Call →
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 md:gap-12">
                <div className="text-center">
                  <p className="font-helvetica-now-display text-3xl font-bold text-white">{stat.value}</p>
                  <p className="font-helvetica-now-display mt-1 text-xs text-white/65 whitespace-nowrap">{stat.label}</p>
                </div>
                {i < stats.length - 1 && <div className="h-14 w-px bg-white/15" />}
              </div>
            ))}
          </div>

          <div className="hidden md:flex -space-x-3">
            {avatars.map((avatar, i) => (
              <div
                key={i}
                className="relative size-16 overflow-hidden rounded-full border-2 border-[#2353cc] bg-white/20"
              >
                <Image src={avatar} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaKSA

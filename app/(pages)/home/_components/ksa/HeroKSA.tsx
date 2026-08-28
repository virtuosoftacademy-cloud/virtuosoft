import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroBg from "@/public/assets/Images/home/ksa/hero-bg.png"

function HeroKSA() {
  return (
    <section className="relative min-h-full md:min-h-screen pt-20 -mt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={HeroBg}
          alt="Riyadh skyline"
          className="h-full w-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
      </div>

      <div className="flex flex-col justify-center min-h-[calc(100vh-5rem)] px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-2xl rounded-3xl bg-white/5 backdrop-blur-md p-8 md:p-12">
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] text-white">
            Enterprise Systems That Run In Production
          </h1>
          <p className="mt-6 text-base md:text-lg font-light text-white/85 max-w-xl">
            Sixteen years shipping software that Saudi and Gulf enterprises depend on every day — core banking integrations, clinical AI, and document intelligence running under real load.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="default" size="lg" className="rounded-full font-sans" asChild>
              <Link href="/contact">Start a conversation</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full font-sans bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
              asChild
            >
              <Link href="/services">
                See the work <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroKSA

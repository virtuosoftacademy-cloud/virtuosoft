import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ComingSoonProps {
  title: string
  description?: string
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <span className="inline-flex items-center rounded-full border border-primary bg-[#F8FAFF] px-4 py-2 text-xs font-bold text-primary">
        Coming Soon
      </span>

      <h1 className="mt-6 text-4xl leading-[1.2] text-[#050f21] md:text-[40px]">
        {title}
      </h1>

      <p className="mt-4 max-w-xl text-base leading-[1.5] text-[#474747]">
        {description ??
          "We're putting the finishing touches on this page. Get in touch and our team will walk you through what's coming."}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild size="lg" className="rounded-full">
          <Link href="/contact">Talk to us</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full">
          <Link href="/products/certus">Explore Certus</Link>
        </Button>
      </div>
    </section>
  )
}

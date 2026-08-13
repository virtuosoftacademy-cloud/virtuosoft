'use client'

import Image from "next/image"
import { Button } from "../ui/button"
import CTAMain from '@/public/ctamain.svg'
import CTA from '@/public/cta.svg'
import Link from "next/link"
import type { JSX } from "react"

function Cta(): JSX.Element {
    return (
       <div className="px-10 lg:px-0 xl:px-0 text-secondary my-30 flex justify-center">
  <div className="w-full lg:w-[60%] bg-linear-to-r to-[#00328c] from-primary py-8 md:py-10 px-8 relative text-center lg:text-left rounded-2xl">
    <div className="flex items-center flex-col lg:flex-row xl:justify-between">
      <div className="flex flex-col items-center lg:items-start gap-2 xl:pl-10">
        <h4 className="text-4xl lg:text-5xl xl:text-5xl capitalize">
          Talk to an <strong><em>Expert</em></strong>
        </h4>
        <div className="md:-space-y-1.5 mt-4 md:mt-0 text-accent/80">
          <p className="text-sm lg:text-lg">
            Get professional insights to take your business to the next level.
          </p>
          <p className="text-sm lg:text-lg">
            Connect with our experts and start your journey toward growth today.
          </p>
        </div>
        <div className="mt-4">
          <Button variant="secondary" size="xl" className="rounded-2xl">
            <Link href={'/contact'}>Get Started</Link>
          </Button>
        </div>
      </div>
      <div className="md:-mr-6">
        <Image
          className="max-w-lg md:w-lg xl:max-w-xs hidden sm:hidden xl:block"
          src={CTAMain}
          alt="CTA"
        />
        <div className="flex justify-center items-center pt-10 xl:pt-0">
          <Image
            className="max-w-xs md:w-3xs lg:hidden"
            src={CTA}
            alt="CTA"
          />
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Cta

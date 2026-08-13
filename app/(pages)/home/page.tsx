'use client'

import Hero from "./_components/Hero"
import InnovativeSolutions from "./_components/InnovativeSolutions"
import LogoCloud from "./_components/LogoCloud"
import { ReactLenis } from 'lenis/react'
import Technology from "./_components/Technology"
import Cta from "@/components/common/Cta"
import Faq from "@/components/common/Faq"
import { Faq_Home } from "@/app/_constant"
function Home() {
  return (
    <>
      <ReactLenis root>
        <div className="mx-auto">
          <Hero />
          <div className="py-10">
          <LogoCloud />
          </div>
          <InnovativeSolutions />
          <Technology />
          <div>
          <Faq items={Faq_Home}/>
          </div>
          <Cta />
        </div>
      </ReactLenis>
    </>
  )
}

export default Home

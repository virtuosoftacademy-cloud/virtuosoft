'use client'

import { ReactLenis } from 'lenis/react'
import Hero from "../global/Hero"
import LogoCloud from "../LogoCloud"
import Solutions from "../global/Solutions"
import Industries from "../global/Industries"
import WhyChooseUs from "../global/WhyChooseUs"
import CaseStudies from "../global/CaseStudies"
import Testimonials from "../global/Testimonials"
import GlobalCta from "../global/Cta"
import Faq from "@/components/common/Faq"
import { Faq_AIAgent } from "@/app/_constant"

function HomeGlobal() {
  return (
    <ReactLenis root>
      <div className="mx-auto">
        <Hero />
        <div className="py-6">
          <LogoCloud />
        </div>
        <Solutions />
        <Industries />
        <WhyChooseUs />
        <CaseStudies />
        <Testimonials />
        <Faq items={Faq_AIAgent} />
        <GlobalCta />
      </div>
    </ReactLenis>
  )
}

export default HomeGlobal

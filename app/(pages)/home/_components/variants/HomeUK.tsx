'use client'

import { ReactLenis } from 'lenis/react'
import Hero from "../uk/Hero"
import LogoCloud from "../LogoCloud"
import InnovativeSolutions from "../uk/InnovativeSolutions"
import PurposeBuilt from "../uk/PurposeBuilt"
import WhyChooseUs from "../uk/WhyChooseUs"
import CaseStudies from "../uk/CaseStudies"
import Testimonials from "../uk/Testimonials"
import Faq from "@/components/common/Faq"
import Cta from "../uk/Cta"
import { Faq_AIAgent } from "@/app/_constant"

function HomeUK() {
  return (
    <ReactLenis root>
      <div className="mx-auto">
        <Hero />
        <div className="py-10">
          <LogoCloud />
        </div>
        <InnovativeSolutions />
        <PurposeBuilt />
        <WhyChooseUs />
        <CaseStudies />
        <Testimonials />
        <div>
          <Faq items={Faq_AIAgent} />
        </div>
        <Cta />
      </div>
    </ReactLenis>
  )
}

export default HomeUK

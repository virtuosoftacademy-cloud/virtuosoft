'use client'

import { ReactLenis } from 'lenis/react'
import HeroKSA from "../ksa/HeroKSA"
import LogoCloud from "../LogoCloud"
import SolutionsKSA from "../ksa/SolutionsKSA"
import PurposeBuiltKSA from "../ksa/PurposeBuiltKSA"
import WhyChooseUsKSA from "../ksa/WhyChooseUsKSA"
import TrackRecordKSA from "../ksa/TrackRecordKSA"
import TestimonialsKSA from "../ksa/TestimonialsKSA"
import Faq from "@/components/common/Faq"
import { Faq_AIAgent } from "@/app/_constant"
import CtaKSA from "../ksa/CtaKSA"

function HomeKSA() {
  return (
    <ReactLenis root>
      <div className="mx-auto">
        <HeroKSA />
        <div className="py-10">
          <LogoCloud />
        </div>
        <SolutionsKSA />
        <PurposeBuiltKSA />
        <WhyChooseUsKSA />
        <TrackRecordKSA />
        <TestimonialsKSA />
        <div>
          <Faq items={Faq_AIAgent} />
        </div>
        <CtaKSA />
      </div>
    </ReactLenis>
  )
}

export default HomeKSA

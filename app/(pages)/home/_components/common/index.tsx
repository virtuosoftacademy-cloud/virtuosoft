
import React from 'react'
import Solutions from "../Solutions"
import Industries from "../Industries"
import WhyChooseUs from "../WhyChooseUs"
import Hero from "../Hero"
import type { HeroRegion } from "../Hero"
import CaseStudies from "../CaseStudies"
import Testimonials from "../Testimonials"
import GlobalCta from "../../../../../components/common/Cta"
import Faq from "@/components/common/Faq"
import { Faq_AIAgent } from "@/app/_constant"

interface CommonComponentsProps {
    // Only the hero differs between the regional home pages; every section
    // below it is shared, so the region stops here.
    region?: HeroRegion
}

function CommonComponents({ region = "global" }: CommonComponentsProps) {
    return (
        <>
            {/* LogoCloud is rendered inside Hero, overlaid on the dark band */}
            <Hero region={region} />
            <Industries />
            <Solutions />
            <WhyChooseUs />
            <CaseStudies />
            <Testimonials />
            <Faq items={Faq_AIAgent} />
            <GlobalCta />

        </>
    )
}

export default CommonComponents

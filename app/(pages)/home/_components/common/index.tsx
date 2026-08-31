
import React from 'react'
import Solutions from "../Solutions"
import Industries from "../Industries"
import WhyChooseUs from "../WhyChooseUs"
import Hero from "../Hero"
import CaseStudies from "../CaseStudies"
import Testimonials from "../Testimonials"
import GlobalCta from "../../../../../components/common/Cta"
import Faq from "@/components/common/Faq"
import { Faq_AIAgent } from "@/app/_constant"

function CommonComponents() {
    return (
        <>
            {/* LogoCloud is rendered inside Hero, overlaid on the dark band */}
            <Hero />
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
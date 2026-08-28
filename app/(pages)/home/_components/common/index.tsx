
import React from 'react'
import LogoCloud from "../LogoCloud"
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
            <Hero />
            <div className="-mt-20">
                <LogoCloud />
            </div>
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
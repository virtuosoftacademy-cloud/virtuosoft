

import Cta from '@/components/common/Cta'
import React from 'react'
import Hero from './_components/Hero'
import ServicesSection from './_components/ServicesSection'
import { ReactLenis } from 'lenis/react'
import Different from './_components/Different'

export default function Services() {
    return (
        <div className='mx-auto'>
            <ReactLenis root>
                <Hero />
                <ServicesSection />
                <Different />
                <Cta />
            </ReactLenis>
        </div>
    )
}

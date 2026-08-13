'use client'

import ContactForm from "./_components/ContactForm"
import Hero from "./_components/Hero"
import { ReactLenis } from 'lenis/react'

function Contact() {
    return (
        <div className="mx-auto max-w-7xl">
            <ReactLenis root>
                <Hero />
                <ContactForm />
            </ReactLenis>
        </div>
    )
}

export default Contact


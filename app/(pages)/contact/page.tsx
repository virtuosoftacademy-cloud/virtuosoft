'use client'

import { Suspense } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { ReactLenis } from 'lenis/react'
import ContactForm from "./_components/ContactForm"
import EnquiryForm from "./_components/EnquiryForm"
import ContactInfoPanel from "./_components/ContactInfoPanel"
import Hero from "./_components/Hero"
import Cta from "@/components/common/Cta"
import HeroBg from "@/public/assets/Images/contact/hero-bg.svg"

function ContactBody() {
  const searchParams = useSearchParams()
  // Careers links here as /contact?role=<role> to start a job application, so
  // that flow keeps its dedicated application form.
  const role = searchParams.get("role")

  if (role) {
    return (
      <div className="mx-auto max-w-7xl">
        <Hero />
        <ContactForm />
      </div>
    )
  }

  return (
    <div className="relative -mt-20">
      {/* Dark hero band behind the top of the page */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[700px] md:h-[600px] overflow-hidden bg-[#060B19]">
        <Image src={HeroBg} alt="" fill className="object-cover" priority />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 lg:pt-42">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,564px)_minmax(0,1fr)] lg:gap-14">
          <EnquiryForm />
          <div className="lg:pt-6">
            <ContactInfoPanel />
          </div>
        </div>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <ReactLenis root>
      <Suspense fallback={null}>
        <ContactBody />
      </Suspense>
      <Cta />
    </ReactLenis>
  )
}

export default Contact

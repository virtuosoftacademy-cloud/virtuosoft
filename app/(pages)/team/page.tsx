'use client'

import Cta from "@/components/common/Cta"
import Hero from "./_components/Hero"
import { ReactLenis } from 'lenis/react'
import OurTeam from "./_components/OurTeam"

function Team() {
  return (
    <>
      <ReactLenis root>
        <div className="mx-auto">
          <Hero />
          <OurTeam />
          <Cta/>
        </div>
      </ReactLenis>
    </>
  )
}

export default Team

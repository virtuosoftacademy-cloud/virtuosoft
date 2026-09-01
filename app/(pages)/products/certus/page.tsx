'use client'

import { ReactLenis } from 'lenis/react'

import Hero from './_components/Hero'
import AuditProcess from './_components/AuditProcess'
import Evidence from './_components/Evidence'
import Problem from './_components/Problem'
import ProcessingByHand from './_components/ProcessingByHand'
import Demo from './_components/Demo'
import SectionA1 from './_components/SectionA1'
import SectionA2 from './_components/SectionA2'
import SectionB1 from './_components/SectionB1'
import SectionB2 from './_components/SectionB2'
import SectionB3 from './_components/SectionB3'
import SectionC1 from './_components/SectionC1'
import SectionC2 from './_components/SectionC2'
import SectionD1 from './_components/SectionD1'
import SectionD2 from './_components/SectionD2'
import SectionE1 from './_components/SectionE1'
import SectionE2 from './_components/SectionE2'
import SectionF1 from './_components/SectionF1'
import SectionF2 from './_components/SectionF2'
import SectionF3 from './_components/SectionF3'
import Cta from '@/components/common/Cta'

// Sections are ordered to match the vertical order of the Figma frame.
// Nav, Footer and BackToTop come from app/(pages)/layout.tsx.
export default function TarabutCaseStudyPage() {
  return (
    <ReactLenis root>
      <Hero />
      <AuditProcess />
      <Evidence />
      <Problem />
      <ProcessingByHand />
      <Demo />
      <SectionA1 />
      <SectionA2 />
      <SectionB1 />
      <SectionB2 />
      <SectionB3 />
      <SectionC1 />
      <SectionC2 />
      <SectionD1 />
      <SectionD2 />
      <SectionE1 />
      <SectionE2 />
      <SectionF1 />
      <SectionF2 />
      <SectionF3 />
      <Cta />
    </ReactLenis>
  )
}

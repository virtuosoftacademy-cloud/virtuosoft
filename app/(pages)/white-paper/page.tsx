'use client'

import { ReactLenis } from 'lenis/react'
import Cta from '@/components/common/Cta'
import Hero from './_components/Hero'
import Translations from './_components/Translations'

export default function WhitePaperPage() {
  return (
    <ReactLenis root>
      <Hero />
      <Translations />
      <Cta />
    </ReactLenis>
  )
}

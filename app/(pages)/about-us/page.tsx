'use client'

import { ReactLenis } from 'lenis/react'
import Hero from './_components/Hero';
import dynamic from 'next/dynamic';

const DynamicComponents = dynamic(() => import('./_components/DynamicComponents'), {
  ssr: false,
});
function AboutUs() {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <DynamicComponents />
      </ReactLenis>
    </>
  )
}
export default AboutUs;
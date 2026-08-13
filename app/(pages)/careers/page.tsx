'use client'
import React from 'react'
import { ReactLenis } from 'lenis/react'
import Hero from './_components/Hero'
import Collaboration from './_components/Collaboration'
import JobList from './_components/JobList' // New import
import Cta from '@/components/common/Cta'

function Careers(): React.JSX.Element {
  return (
    <main className='mx-auto bg-white'>
      <ReactLenis root>
        <Hero />
        <Collaboration />
        <JobList /> {/* This handles all titles and job cards */}
        <div className='pt-10'>
          <Cta />
        </div>
      </ReactLenis>
    </main>
  )
}

export default Careers
import React from 'react'
import Hero from './_components/Hero'
import ProblemSolution from './_components/ProblemSolution'
import Impact from './_components/Impact'
import MoreCaseStudies from './_components/MoreCaseStudies'
import Cta from '@/app/(pages)/home/_components/global/Cta'

export default function CaseStudiesPage(): React.JSX.Element {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Impact />
      <MoreCaseStudies />
      <Cta />
    </>
  )
}

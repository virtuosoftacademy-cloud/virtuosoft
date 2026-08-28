import React from "react"
import Hero from "./_components/Hero"
import CaseGrid from "./_components/CaseGrid"
import Cta from "@/app/(pages)/home/_components/global/Cta"

export default function CaseStudyDetailPage(): React.JSX.Element {
  return (
    <>
      <Hero />
      <CaseGrid />
      <Cta />
    </>
  )
}

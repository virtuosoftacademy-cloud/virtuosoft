import React from "react"
import Hero from "./_components/Hero"
import CaseGrid from "./_components/CaseGrid"
import Cta from "@/components/common/Cta"

export default function CaseStudyDetailPage(): React.JSX.Element {
  return (
    <>
      <Hero />
      <CaseGrid />
      <Cta />
    </>
  )
}

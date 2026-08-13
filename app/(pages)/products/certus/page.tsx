'use client'

import { ReactLenis } from 'lenis/react'
import Faq from './_components/Faq'
import { Faq_Products_Certus } from '@/app/_constant'
import Hero from './_components/Hero'
import Capabilities from './_components/Capabilities'
import ManualVsAutomated from './_components/ManualVsAutomated'
import VideoShowcase from './_components/VideoShowcase'
import ThreeChecks from './_components/ThreeChecks'
import PlatformCapabilities from './_components/PlatformCapabilities'
import LiveStats from './_components/LiveStats'
import DocumentChannels from './_components/DocumentChannels'
import VisibilityTable from './_components/VisibilityTable'
import ImpactStats from './_components/ImpactStats'
import ComparisonTable from './_components/ComparisonTable'
import Industries from './_components/Industries'
import Integrations from './_components/Integrations'
import CustomerSegments from './_components/CustomerSegments'
import TrackRecord from './_components/TrackRecord'
import FinalCta from './_components/FinalCta'
import LogoCloud from '@/components/LogoLoop'
import TrustedStats from './_components/TrustedStats'

export default function CertusPage() {
  return (
    <ReactLenis root>
      <Hero />
      <div className="py-10 opacity-60 bg-accent">
        <LogoCloud />
      </div>
      <TrustedStats />
      <Capabilities />
      <ManualVsAutomated />
      <VideoShowcase />
      <ThreeChecks />
      <PlatformCapabilities />
      <LiveStats />
      <DocumentChannels />
      <VisibilityTable />
      <ImpactStats />
      <ComparisonTable />
      <Industries />
      <Integrations />
      <CustomerSegments />
      <Faq items={Faq_Products_Certus} />
      <TrackRecord />
      <FinalCta />
    </ReactLenis>
  )
}

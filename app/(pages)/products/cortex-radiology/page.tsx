import type { Metadata } from "next"
import ComingSoon from "@/components/common/ComingSoon"

export const metadata: Metadata = {
  title: "Virtuosoft | Cortex Radiology",
  description: "Cortex Radiology — coming soon from Virtuosoft.",
}

export default function CortexRadiologyPage() {
  return (
    <ComingSoon
      title="Cortex Radiology"
      description="Cortex Radiology is on its way. Get in touch and our team will walk you through what's coming."
    />
  )
}

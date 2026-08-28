import type { Metadata } from "next"
import ComingSoon from "@/components/common/ComingSoon"

export const metadata: Metadata = {
  title: "Virtuosoft | Catalyst.ai",
  description: "Catalyst.ai — coming soon from Virtuosoft.",
}

export default function CatalystAiPage() {
  return (
    <ComingSoon
      title="Catalyst.ai"
      description="Catalyst.ai is on its way. Get in touch and our team will walk you through what's coming."
    />
  )
}

'use client'

import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'

// See HomeGlobal.tsx for why this takes children instead of importing
// CommonComponents directly.
function HomeKSA({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root>
      <div className="mx-auto">{children}</div>
    </ReactLenis>
  )
}

export default HomeKSA

'use client'

import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'

// Children rather than an internal <CommonComponents /> import: this stays a
// Client Component only for ReactLenis, and CommonComponents now fetches
// testimonials from the database, so it must be rendered by a Server
// Component (the page) and passed down — importing it here would pull
// Prisma into the client bundle.
function HomeGlobal({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root>
      <div className="mx-auto">{children}</div>
    </ReactLenis>
  )
}

export default HomeGlobal

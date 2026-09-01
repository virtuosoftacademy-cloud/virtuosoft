'use client'

import { ReactLenis } from 'lenis/react'
import CommonComponents from '../common'

function HomeGlobal() {
  return (
    <ReactLenis root>
      <div className="mx-auto">
        <CommonComponents region="global" />
      </div>
    </ReactLenis>
  )
}

export default HomeGlobal

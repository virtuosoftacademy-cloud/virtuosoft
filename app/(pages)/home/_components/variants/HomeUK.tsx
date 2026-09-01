'use client'

import { ReactLenis } from 'lenis/react'
import CommonComponents from '../common'

function HomeUK() {
  return (
    <ReactLenis root>
      <div className="mx-auto">
        <CommonComponents region="uk" />
      </div>
    </ReactLenis>
  )
}

export default HomeUK

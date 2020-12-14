import React, { useState } from 'react'
import theme from '../../styles/theme'

export default function useDeviceDetect() {
  const [isMobile, setMobile] = useState(true)
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', e => {
      const { a } = theme.breakpoints
      if (window.innerWidth <= a) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    })
  }

  return { isMobile }
}

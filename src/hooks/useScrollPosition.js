import { useEffect, useState } from 'react'

/** Throttled-to-a-frame scroll position, shared by the nav and the to-top button. */
export function useScrollPosition() {
  const [state, setState] = useState({ y: 0, direction: 'up' })

  useEffect(() => {
    let last = window.pageYOffset
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.pageYOffset
        setState({ y, direction: y > last + 4 ? 'down' : 'up' })
        last = y
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return state
}

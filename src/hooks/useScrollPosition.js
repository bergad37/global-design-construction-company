import { useEffect, useState } from 'react'

/** How far the page must move before it counts as a change of direction. */
const STEP = 8
/** How long the page must sit still before the nav is handed back. */
const SETTLE = 150

/** Throttled-to-a-frame scroll position, shared by the nav and the to-top button. */
export function useScrollPosition() {
  const [state, setState] = useState({ y: 0, direction: 'up' })

  useEffect(() => {
    let last = window.pageYOffset
    let ticking = false
    let idle

    // Stopping counts as going back up, so the bar is never left parked
    // halfway through its slide — whenever the page is still, it is whole.
    const settle = () =>
      setState((prev) => (prev.direction === 'up' ? prev : { ...prev, direction: 'up' }))

    const onScroll = () => {
      clearTimeout(idle)
      idle = setTimeout(settle, SETTLE)

      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        const y = Math.max(0, window.pageYOffset)
        const dy = y - last

        setState((prev) => {
          // Only a deliberate move re-decides the direction. Anything smaller
          // is left alone and allowed to accumulate: reading every small delta
          // as 'up' made the nav flap between hidden and shown mid-scroll.
          const direction =
            Math.abs(dy) < STEP ? prev.direction : dy > 0 ? 'down' : 'up'

          return prev.y === y && prev.direction === direction
            ? prev
            : { y, direction }
        })

        if (Math.abs(dy) >= STEP) last = y
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      clearTimeout(idle)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return state
}

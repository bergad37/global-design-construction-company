import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Route changes start at the top of the new page. A `/#services`-style link
 * lands on the home page and then scrolls to that section once it has
 * rendered — which is how the nav reaches the home sections from a subpage.
 */
export default function RouteScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    // wait a frame so the target section exists before scrolling to it
    const id = requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => cancelAnimationFrame(id)
  }, [pathname, hash])

  return null
}

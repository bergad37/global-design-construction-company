import Icon from './Icon.jsx'
import { useScrollPosition } from '../hooks/useScrollPosition.js'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js'

export default function ToTop() {
  const { y } = useScrollPosition()
  const reduced = usePrefersReducedMotion()

  return (
    <button
      className={`totop ${y > 700 ? 'is-on' : ''}`}
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })}
    >
      <Icon name="arrowUp" strokeWidth={2.6} />
    </button>
  )
}

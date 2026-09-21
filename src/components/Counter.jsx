import { useInView } from '../hooks/useInView.js'
import { useCountUp } from '../hooks/useCountUp.js'

/** A statistic that counts up the first time it is scrolled into view. */
export default function Counter({ value, suffix, label, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.6, rootMargin: '0px' })
  const shown = useCountUp(value, inView)

  return (
    <div ref={ref} className={className}>
      <div className="num">
        <span>{shown}</span>
        {suffix ? <i>{suffix}</i> : null}
      </div>
      <div className="lbl">{label}</div>
    </div>
  )
}

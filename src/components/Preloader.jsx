import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js'

/** Eased fake progress, then it hands the page over to the hero. */
export default function Preloader({ onDone }) {
  const reduced = usePrefersReducedMotion()
  const [pct, setPct] = useState(0)
  const [done, setDone] = useState(false)
  const finished = useRef(false)

  useEffect(() => {
    const finish = () => {
      if (finished.current) return
      finished.current = true
      setDone(true)
      onDone()
    }

    if (reduced) { finish(); return }

    const tick = setInterval(() => {
      setPct((p) => {
        const next = p + Math.random() * 16 + 6
        if (next >= 100) {
          clearInterval(tick)
          setTimeout(finish, 380)
          return 100
        }
        return next
      })
    }, 130)

    // Never let a slow asset trap the visitor behind the loader.
    const bail = setTimeout(() => { clearInterval(tick); setPct(100); finish() }, 3200)

    return () => { clearInterval(tick); clearTimeout(bail) }
  }, [reduced, onDone])

  if (reduced) return null

  return (
    <div id="preloader" className={done ? 'is-done' : ''} role="status" aria-label="Loading">
      <div className="pre__inner">
        <img className="pre__mark" src="/favicon.svg" alt="" aria-hidden="true" />
        <div className="pre__bar"><i style={{ width: `${pct}%` }} /></div>
        <div className="pre__word">Plan · Design · Build · Grow</div>
      </div>
    </div>
  )
}

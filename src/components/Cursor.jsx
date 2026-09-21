import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js'

/** The trailing ring cursor, pointer devices and wide screens only. */
export default function Cursor() {
  const reduced = usePrefersReducedMotion()
  const ref = useRef(null)

  useEffect(() => {
    if (reduced) return
    if (!window.matchMedia('(hover:hover) and (min-width:901px)').matches) return

    const dot = ref.current
    if (!dot) return

    let x = 0, y = 0, cx = 0, cy = 0, raf = 0

    const onMove = (e) => { x = e.clientX; y = e.clientY; dot.classList.add('is-on') }
    const onOver = (e) => {
      const hit = e.target.closest('a,button,.proj,.svc,input,textarea,select')
      dot.classList.toggle('is-hover', !!hit)
    }
    const onLeave = () => dot.classList.remove('is-on')

    const loop = () => {
      cx += (x - cx) * 0.18
      cy += (y - cy) * 0.18
      dot.style.transform = `translate(${cx}px,${cy}px)`
      raf = requestAnimationFrame(loop)
    }
    loop()

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [reduced])

  if (reduced) return null
  return <div className="cursor" ref={ref} aria-hidden="true" />
}

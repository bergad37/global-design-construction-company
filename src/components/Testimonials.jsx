import { useState } from 'react'
import { useInterval } from '../hooks/useInterval.js'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js'
import { testimonials } from '../data/site.js'

export default function Testimonials() {
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useInterval(
    () => setIndex((i) => (i + 1) % testimonials.length),
    reduced || paused ? null : 6500,
  )

  // Pause on hover only for a pointer that hovers. A touch fires a
  // compatibility mouseenter with no matching mouseleave, which would park the
  // rotation for good on phones.
  const onPointerEnter = (e) => { if (e.pointerType !== 'touch') setPaused(true) }
  const onPointerLeave = (e) => { if (e.pointerType !== 'touch') setPaused(false) }

  return (
    <section className="section section--navy">
      <div className="container">
        <div
          className="quotes"
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
        >
          <div className="quotes__mark" aria-hidden="true">&ldquo;</div>

          {testimonials.map((t, i) => (
            <blockquote key={t.id} className={`quote ${i === index ? 'is-active' : ''}`}>
              <p>{t.quote}</p>
              <cite>
                <b>{t.name}</b>
                <small>{t.role}</small>
              </cite>
            </blockquote>
          ))}

          <div className="quotes__nav" role="tablist" aria-label="Testimonials">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                className={i === index ? 'is-active' : ''}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

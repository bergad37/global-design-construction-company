import { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon.jsx'
import HeroHeadline from './HeroHeadline.jsx'
import { useInterval } from '../../hooks/useInterval.js'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'
import { featuredProjects } from '../../data/projects.js'
import { site } from '../../data/site.js'
import './hero.css'

/** How long each project holds the stage, in ms. Also drives the progress bar. */
const DWELL = 6000
/** Horizontal travel needed before a drag counts as a slide change. */
const SWIPE = 60

export default function HeroSlider({ ready }) {
  const slides = featuredProjects
  const count = slides.length
  const reduced = usePrefersReducedMotion()

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const dragStart = useRef(null)

  const goTo = useCallback(
    (next) => setIndex(((next % count) + count) % count),
    [count],
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  // Autoplay. Reduced motion or a paused slider passes `null`, which stops it.
  useInterval(next, reduced || paused ? null : DWELL)

  // The slideshow runs itself. Arrow keys and the thumbnails are there for
  // anyone who wants to steer it; hovering pauses so a badge can be read.
  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next() }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
  }

  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    // let the links and controls sitting over the stage do their own job
    if (e.target.closest('a,button')) return
    dragStart.current = e.clientX
  }

  const onPointerUp = (e) => {
    const start = dragStart.current
    dragStart.current = null
    if (start === null) return
    const dx = e.clientX - start
    if (Math.abs(dx) < SWIPE) return
    if (dx < 0) next()
    else prev()
  }

  const active = slides[index]

  return (
    <section
      className="hero"
      id="top"
      aria-label="Featured projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => { dragStart.current = null }}
    >
      {/* ---------- the stage: one full-bleed frame per project ---------- */}
      <div className="hero__stage" aria-hidden="true">
        {slides.map((project, i) => (
          <figure key={project.id} className={`hero__frame ${i === index ? 'is-active' : ''}`}>
            <img
              src={project.hero}
              srcSet={`${project.heroSmall} 1280w, ${project.hero} 2400w`}
              sizes="100vw"
              alt={project.alt}
              draggable={false}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'low'}
              decoding="async"
            />
          </figure>
        ))}

        <div className="hero__scrim" />
        <div className="hero__blueprint" />
      </div>

      {/* ---------- headline and copy, deliberately kept short ---------- */}
      <div className="container hero__inner">
        <div className="hero__text">
          <HeroHeadline ready={ready} />

          <p className="hero__copy">{site.heroIntro}</p>
        </div>
      </div>

      {/* ---------- project rail ---------- */}
      <div className="hero__rail">
        <div className="container hero__rail-inner">

          {/* the name badge for whichever project is on the stage */}
          <Link className="hero__badge" to={`/projects/${active.id}`} key={active.id}>
            <span className="hero__badge-bar" aria-hidden="true" />
            <span className="hero__badge-text">
              <b>{active.title}</b>
              <small>{active.categoryLabel} · {active.location}</small>
            </span>
            <Icon name="arrowUpRight" strokeWidth={2.6} />
          </Link>

          <div className="hero__nav">
            <span className="hero__count">
              <b>{String(index + 1).padStart(2, '0')}</b>
              <i />
              {String(count).padStart(2, '0')}
            </span>

            <ul className="hero__thumbs">
              {slides.map((project, i) => (
                <li key={project.id}>
                  <button
                    type="button"
                    className={`hero__thumb ${i === index ? 'is-active' : ''}`}
                    onClick={() => goTo(i)}
                    aria-label={`Show ${project.title}`}
                    aria-current={i === index}
                  >
                    <img src={project.image} alt="" decoding="async" />
                    {i === index && (
                      <span
                        className="hero__thumb-progress"
                        key={index}
                        style={{
                          animationDuration: `${DWELL}ms`,
                          animationPlayState: paused || reduced ? 'paused' : 'running',
                        }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

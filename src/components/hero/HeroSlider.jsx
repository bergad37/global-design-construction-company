import { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon.jsx'
import HeroHeadline from './HeroHeadline.jsx'
import { useInterval } from '../../hooks/useInterval.js'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'
import { featuredProjects } from '../../data/projects.js'
import './hero.css'

/** How long each project holds the stage, in ms. Also drives the progress bar. */
const DWELL = 6000
/**
 * The opening slide holds longer than the rest, because it is the one carrying
 * the wording. At a readable typing pace the headline and the line of copy take
 * a little under seven seconds to write themselves; this leaves a couple of
 * seconds to actually read them before the stage moves on.
 */
const FIRST_DWELL = 12000
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
  const dwell = index === 0 ? FIRST_DWELL : DWELL
  useInterval(next, reduced || paused ? null : dwell)

  // Hovering pauses the slideshow so the badge and thumbnails can be read —
  // but only over the rail that holds them, not the whole hero. On the section
  // it also fired as the page scrolled the hero under a stationary cursor,
  // which stopped the slideshow the moment anyone scrolled.
  //
  // The pointerType guard stays: a touch fires a compatibility mouseenter with
  // no matching mouseleave, which would park autoplay for good on a phone.
  const onPointerEnter = (e) => { if (e.pointerType !== 'touch') setPaused(true) }
  const onPointerLeave = (e) => { if (e.pointerType !== 'touch') setPaused(false) }

  // The slideshow runs itself. Arrow keys and the thumbnails are there for
  // anyone who wants to steer it.
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
      style={{ '--dwell': `${dwell}ms` }}
      id="top"
      aria-label="Featured projects"
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
          {/* The wording belongs to the opening slide: it types itself out as
              soon as the preloader hands the page over, and clears again while
              the other projects hold the stage, so their photographs are seen
              without a claim written across them. Coming back round to the
              first slide types it again. */}
          <HeroHeadline ready={ready} show={ready && index === 0} />
        </div>
      </div>

      {/* ---------- project rail ---------- */}
      <div
        className="hero__rail"
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      >
        <div className="container hero__rail-inner">

          {/* The name badge for whichever project is on the stage. The name and
              nothing else: category, location and the rest belong on the
              project's own page, and a second line here only made the badge
              tall enough to eat into the photograph behind it. */}
          <Link className="hero__badge" to={`/projects/${active.id}`} key={active.id}>
            <span className="hero__badge-bar" aria-hidden="true" />
            <b className="hero__badge-name">{active.title}</b>
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
                          animationDuration: `${dwell}ms`,
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

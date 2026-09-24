import { useEffect, useState } from 'react'
import { useInterval } from '../../hooks/useInterval.js'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'
import { site } from '../../data/site.js'

/**
 * The headline, split where the colour changes. Typed in two passes so the
 * accent can be an <em> without typing character-by-character across a tag.
 */
const LEAD = "We don't just build structures — we "
const ACCENT = 'engineer confidence.'
const HEADLINE = LEAD + ACCENT

/** Milliseconds per character — a typewriter's pace, not a ticker's. */
const SPEED = 80
/** The copy runs quicker than the headline; there is a lot more of it. */
const COPY_SPEED = 34
/** A beat between the headline finishing and the copy starting. */
const GAP = 750

/** Types `text` out once `active` turns true; returns what has been typed. */
function useTyped(text, active, speed = SPEED) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!active) {
      setN(0)
      return
    }
    if (n >= text.length) return
    const id = setTimeout(() => setN((c) => c + 1), speed)
    return () => clearTimeout(id)
  }, [active, n, text, speed])

  return [text.slice(0, n), n >= text.length]
}

const Caret = () => <i className="hero__caret" aria-hidden="true" />

/**
 * The hero wording.
 *
 * It stays out of sight until `show` turns true — the slider raises that once
 * every project has had its turn on the stage, so the work is seen before the
 * claim about it is made. The headline then types itself out, and the line of
 * copy follows.
 *
 * Two things are deliberate. The h1 is in the document from the first render,
 * clipped rather than unmounted, so search engines and screen readers get it
 * immediately whatever the animation is doing. And the typed text is
 * aria-hidden with the finished sentence beside it, so a screen reader is
 * never fed a stream of half-words.
 */
export default function HeroHeadline({ ready, show }) {
  const reduced = usePrefersReducedMotion()

  // Nothing advances under reduced motion, so `show` would never arrive.
  // Those visitors get the finished wording straight away instead.
  const visible = show || reduced
  const typing = visible && !reduced
  // The chips are not part of the typed block: they belong to the hero itself
  // and stay up for every project, so they key off the page being handed over
  // rather than off which slide is on the stage.
  const up = ready || reduced

  const [lead, leadDone] = useTyped(LEAD, typing)
  const [accent, accentDone] = useTyped(ACCENT, typing && leadDone)

  const [copyArmed, setCopyArmed] = useState(false)
  useEffect(() => {
    if (!accentDone) {
      setCopyArmed(false)
      return
    }
    const id = setTimeout(() => setCopyArmed(true), GAP)
    return () => clearTimeout(id)
  }, [accentDone])

  const [copy, copyDone] = useTyped(site.heroIntro, typing && copyArmed, COPY_SPEED)

  const [lit, setLit] = useState(0)
  useInterval(
    () => setLit((i) => (i + 1) % site.tagline.length),
    reduced || !up ? null : 1400,
  )

  return (
    <>
      <div className={`hero__tagline ${up ? 'is-on' : ''}`} aria-hidden="true">
        {site.tagline.map((word, i) => (
          <span key={word} className={i === lit ? 'is-lit' : ''}>{word}</span>
        ))}
      </div>

      <div className={`hero__wording ${visible ? 'is-on' : ''}`}>
        <h1 className="hero__title">
          <span className="sr-only">{HEADLINE}</span>
          <span aria-hidden="true">
            {reduced ? LEAD : lead}
            <em className={reduced || accentDone ? 'is-done' : ''}>
              {reduced ? ACCENT : accent}
            </em>
            {typing && !accentDone && <Caret />}
          </span>
        </h1>

        <p className="hero__copy">
          <span className="sr-only">{site.heroIntro}</span>
          <span aria-hidden="true">
            {reduced ? site.heroIntro : copy}
            {typing && copyArmed && !copyDone && <Caret />}
          </span>
        </p>
      </div>
    </>
  )
}

import { useState } from 'react'
import { useInterval } from '../../hooks/useInterval.js'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'
import { heroRotator, site } from '../../data/site.js'

const LINES = ["We don't just", 'build structures —', 'we ']

/**
 * The headline block: PLAN · DESIGN · BUILD · GROW chips lighting up in turn,
 * the masked line reveal, and the verb that rotates underneath it.
 */
export default function HeroHeadline({ ready }) {
  const reduced = usePrefersReducedMotion()
  const [lit, setLit] = useState(0)
  const [word, setWord] = useState(0)

  useInterval(
    () => setLit((i) => (i + 1) % site.tagline.length),
    reduced || !ready ? null : 1400,
  )

  useInterval(
    () => setWord((i) => (i + 1) % heroRotator.length),
    reduced || !ready ? null : 2600,
  )

  return (
    <>
      <div className="hero__tagline" aria-hidden="true">
        {site.tagline.map((word_, i) => (
          <span key={word_} className={i === lit ? 'is-lit' : ''}>{word_}</span>
        ))}
      </div>

      <h1 className="hero__title">
        {LINES.map((line, i) => (
          <span className="reveal-line" key={line}>
            <span style={{ '--d': `${0.15 + i * 0.13}s` }}>
              {i === 2 ? (<>{line}<em>engineer</em></>) : line}
            </span>
          </span>
        ))}

        <span className="reveal-line">
          <span style={{ '--d': '0.54s' }}>
            <span className="hero__rotator" aria-hidden="true">
              {heroRotator.map((w, i) => (
                <b
                  key={w}
                  className={
                    i === word ? 'is-in'
                      : i === (word - 1 + heroRotator.length) % heroRotator.length ? 'is-out'
                        : ''
                  }
                >
                  {w}
                </b>
              ))}
            </span>
            <span className="sr-only">{heroRotator[0]}</span>
          </span>
        </span>
      </h1>
    </>
  )
}

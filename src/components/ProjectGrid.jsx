import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'

/**
 * The cards are laid out as a bento rather than a uniform grid, so the section
 * reads as a composition instead of a spreadsheet.
 *
 * The bed is six columns wide and each band fills it exactly:
 *
 *   band of 2 → [4, 2] columns, 4 rows tall — a wide feature beside a portrait
 *   band of 3 → [2, 2, 2] columns, 3 rows tall — a run of squares
 *
 * Bands alternate between the two, and a short trailing band is widened to fill
 * its row. That means any number of cards tiles without leaving a hole, which
 * matters because the filters change the count on every click.
 */
const COLUMNS = 6

export function bands(count) {
  const cells = []
  let placed = 0
  let feature = true

  while (placed < count) {
    const size = Math.min(feature ? 2 : 3, count - placed)
    const rows = feature ? 4 : 3

    let cols
    if (size === 1) cols = [COLUMNS]
    else if (size === 2) cols = feature ? [4, 2] : [3, 3]
    else cols = [2, 2, 2]

    cols.forEach((c) => cells.push({ cols: c, rows }))
    placed += size
    feature = !feature
  }

  return cells
}

/**
 * `replayKey` is mixed into each card's React key so changing a filter remounts
 * the cards and replays their reveal, the way the home section always did.
 *
 * `variant` picks the layout. 'bento' is the mixed-size composition used on the
 * home page to catch the eye; 'uniform' is a plain grid of square cards, which
 * is what a full listing wants — there the job is scanning, not being arrested.
 */
export default function ProjectGrid({ items, replayKey = '', variant = 'bento' }) {
  const bento = variant === 'bento'
  const cells = bento ? bands(items.length) : null

  if (!items.length) {
    return (
      <p className="proj__empty">
        Nothing under that filter yet — try <strong>All</strong>.
      </p>
    )
  }

  return (
    <div className={`proj__grid ${bento ? '' : 'proj__grid--uniform'}`.trim()}>
      {items.map((project, i) => (
        <Reveal
          as="article"
          key={`${replayKey}-${project.id}`}
          className={bento ? `proj proj--w${cells[i].cols} proj--r${cells[i].rows}` : 'proj'}
          variant="zoom"
          delay={Math.min(i, 5) * 0.08}
        >
          <Link className="proj__link" to={`/projects/${project.id}`}>
            <span className="sr-only">{project.title}</span>
          </Link>
          <div className="proj__thumb">
            <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
          </div>
          <div className="proj__veil" />

          <div className="proj__metric">
            <b>{project.metric.value}</b>
            <small>{project.metric.label}</small>
          </div>

          <div className="proj__arrow">
            <Icon name="arrowUpRight" strokeWidth={2.6} />
          </div>

          <div className="proj__body">
            <span className="proj__tag">{project.categoryLabel}</span>
            <h3>{project.title}</h3>
            <p className="proj__meta">
              {project.summary}
              <span className="proj__scope">{project.scope} · {project.location}</span>
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

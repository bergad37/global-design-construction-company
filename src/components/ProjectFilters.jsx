import Reveal from './Reveal.jsx'
import { FILTERS, projectCounts } from '../data/projects.js'

/**
 * The category chip row, shared by the home section and the projects page.
 *
 * Only the chip you are on carries its count, as an inline badge. Showing every
 * count at once turns the row into a table of numbers, and the count only
 * really answers a question once you have asked it.
 */
export default function ProjectFilters({ value, onChange }) {
  return (
    <Reveal className="filters" role="group" aria-label="Filter projects">
      {FILTERS.map((f) => {
        const active = value === f.id

        return (
          <button
            key={f.id}
            className={`filter ${active ? 'is-active' : ''}`}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(f.id)}
          >
            {f.label}
            {active && (
              <span className="filter__count">
                {projectCounts[f.id]}
                <span className="sr-only"> projects</span>
              </span>
            )}
          </button>
        )
      })}
    </Reveal>
  )
}

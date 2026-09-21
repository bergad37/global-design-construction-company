import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'
import ProjectGrid from './ProjectGrid.jsx'
import ProjectFilters from './ProjectFilters.jsx'
import { projects } from '../data/projects.js'

/** The home section is a teaser — the full list lives on /projects. */
const PREVIEW = 6

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const matching = projects.filter((p) => filter === 'all' || p.category === filter)
  const visible = matching.slice(0, PREVIEW)
  const hidden = projects.length - visible.length

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className="head head--center">
          <span className="eyebrow">Selected work</span>
          <h2>Projects that had to work on day one.</h2>
        </Reveal>

        <ProjectFilters value={filter} onChange={setFilter} />

        <ProjectGrid items={visible} replayKey={filter} />

        <Reveal className="proj__more">
          <Link className="btn btn--primary" to="/projects">
            View all projects
            <Icon name="arrowUpRight" strokeWidth={2.6} />
          </Link>
          {hidden > 0 && (
            <span className="proj__more-note">
              {hidden} more {hidden === 1 ? 'project' : 'projects'} in the full list
            </span>
          )}
        </Reveal>
      </div>
    </section>
  )
}

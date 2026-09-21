import { useState } from 'react'
import ProjectGrid from '../components/ProjectGrid.jsx'
import ProjectFilters from '../components/ProjectFilters.jsx'
import CTA from '../components/CTA.jsx'
import { projects } from '../data/projects.js'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')

  const visible = projects.filter((p) => filter === 'all' || p.category === filter)

  return (
    <>
      {/* ---------- page banner ---------- */}
      <header className="pagehead">
        <img
          className="pagehead__bg"
          src="/media/cta/aerial-plot.jpg"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
        <div className="pagehead__scrim" />
        <div className="container pagehead__inner">
          <span className="eyebrow">Our work</span>
          <h1>Every project, start to handover.</h1>
          <p>
            Buildings, yes — but also the design work behind them and the services that
            make them usable. Filter by what you need, not just by what it looks like.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <ProjectFilters value={filter} onChange={setFilter} />

          <ProjectGrid items={visible} replayKey={filter} variant="uniform" />
        </div>
      </section>

      <CTA />
    </>
  )
}

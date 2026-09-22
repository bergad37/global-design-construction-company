import { Link, Navigate, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import CTA from '../components/CTA.jsx'
import { useInView } from '../hooks/useInView.js'
import { getNextProject, getProject } from '../data/projects.js'

function MaskedImage({ src, alt }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`mask gallery__frame ${inView ? 'is-in' : ''}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  )
}

export default function ProjectPage() {
  const { id } = useParams()
  const project = getProject(id)

  if (!project) return <Navigate to="/404" replace />

  const next = getNextProject(id)
  // only the featured projects have a wide hero frame of their own
  const banner = project.hero ?? project.detail

  // Any number of frames, however many the project actually has. Projects
  // written before `gallery` existed fall back to the two they always had.
  const gallery = project.gallery?.length
    ? project.gallery
    : [
        { src: project.image, alt: project.alt },
        { src: project.detail, alt: `${project.title} — detail view` },
      ]

  // An odd count opens on a full-width lead frame, which is what keeps the
  // last row of a two-column grid from sitting half empty.
  const lead = gallery.length % 2 === 1

  return (
    <>
      {/* ---------- banner ---------- */}
      <header className="pagehead pagehead--project">
        <img
          className="pagehead__bg"
          src={banner}
          {...(project.heroSmall ? { srcSet: `${project.heroSmall} 1280w, ${banner} 2400w`, sizes: '100vw' } : {})}
          alt={project.alt}
          fetchPriority="high"
          decoding="async"
        />
        <div className="pagehead__scrim" />

        <div className="container pagehead__inner">
          <Link className="pagehead__back" to="/#projects">
            <Icon name="chevronLeft" strokeWidth={2.4} />
            All projects
          </Link>

          <span className="eyebrow">{project.categoryLabel}</span>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>

        {/* the headline facts, sitting on the banner's bottom edge */}
        <div className="container">
          <dl className="projmeta">
            <div>
              <dt>Category</dt>
              <dd>{project.categoryLabel}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{project.location}</dd>
            </div>
            <div>
              <dt>Time on site</dt>
              <dd>{project.duration}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ---------- write-up + spec ---------- */}
      <section className="section project__grid-wrap">
        <div className="container project__grid">
          <Reveal className="project__body">
            <span className="eyebrow">The project</span>
            {project.body.map((para, i) => (
              <p key={i} className={i === 0 ? 'lead' : undefined}>{para}</p>
            ))}
          </Reveal>

          <Reveal variant="right" className="project__spec">
            <h2 className="project__spec-title">At a glance</h2>
            <dl>
              {project.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
              <div>
                <dt>Client</dt>
                <dd>{project.client}</dd>
              </div>
              <div>
                <dt>Our scope</dt>
                <dd>{project.scope}</dd>
              </div>
            </dl>

            <div className="project__spec-metric">
              <b>{project.metric.value}</b>
              <small>{project.metric.label}</small>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- gallery ---------- */}
      <section className="section section--tight">
        <div className="container">
          <Reveal className="head">
            <span className="eyebrow">On site</span>
            <h2>How it came together.</h2>
          </Reveal>

          <div className={`gallery ${lead ? 'gallery--lead' : ''}`.trim()}>
            {gallery.map((frame) => (
              <MaskedImage key={frame.src} src={frame.src} alt={frame.alt} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- next project ---------- */}
      <Link className="nextproj" to={`/projects/${next.id}`}>
        <img src={next.image} alt="" loading="lazy" decoding="async" />
        <div className="nextproj__scrim" />
        <div className="container nextproj__inner">
          <span>Next project</span>
          <h2>{next.title}</h2>
          <em>
            {next.categoryLabel} · {next.location}
            <Icon name="arrowUpRight" strokeWidth={2.6} />
          </em>
        </div>
      </Link>

      <CTA />
    </>
  )
}

import Reveal from './Reveal.jsx'
import { leadership, team } from '../data/site.js'

/** "Kwitonda Jean De Dieu" → "KJ", the stand-in until a portrait exists. */
const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

function Portrait({ person, className = '' }) {
  return (
    <div className={`person__frame ${className}`.trim()}>
      {person.photo ? (
        <img src={person.photo} alt={person.name} loading="lazy" decoding="async" />
      ) : (
        <span className="person__initials" aria-hidden="true">{initials(person.name)}</span>
      )}
    </div>
  )
}

/**
 * The founder's story, and beneath it the wider team.
 *
 * The team grid renders only when there is somebody in `team` — it is empty
 * for now, so nothing on this page is a placeholder name. Adding entries to
 * that array is all it takes to bring the grid back.
 */
export default function Leadership() {
  return (
    <section className="section" id="leadership">
      <div className="container">

        <div className="founder">
          <Reveal variant="left" className="founder__media">
            <Portrait person={leadership} />
          </Reveal>

          <Reveal variant="right" className="founder__body">
            <span className="eyebrow">Leadership</span>
            <h2>Our story.</h2>

            {leadership.story.map((para, i) => (
              <p key={i} className={i === 0 ? 'lead' : undefined}>{para}</p>
            ))}

            <p className="founder__sign">
              <b>{leadership.name}</b>
              <small>{leadership.role}</small>
            </p>
          </Reveal>
        </div>

        {team.length > 0 && (
          <div className="team">
            <Reveal className="head head--center team__head">
              <span className="eyebrow">The team</span>
              <h2>The people who carry the work.</h2>
            </Reveal>

            <div className="team__grid">
              {team.map((person, i) => (
                <Reveal
                  as="article"
                  key={person.id}
                  className="person"
                  delay={Math.min(i, 5) * 0.06}
                >
                  <Portrait person={person} />
                  <h3>{person.name}</h3>
                  <span className="person__role">{person.role}</span>
                  {person.bio && <p>{person.bio}</p>}
                </Reveal>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

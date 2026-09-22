import Reveal from './Reveal.jsx'
import { team } from '../data/site.js'

/** "Name Surname" → "NS", the stand-in until a headshot exists. */
const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

function Person({ person, delay }) {
  return (
    <Reveal as="article" className="person" delay={delay}>
      <div className="person__frame">
        {person.photo ? (
          <img src={person.photo} alt={person.name} loading="lazy" decoding="async" />
        ) : (
          <span className="person__initials" aria-hidden="true">{initials(person.name)}</span>
        )}
      </div>
      <h3>{person.name}</h3>
      <span className="person__role">{person.role}</span>
      {person.bio && <p>{person.bio}</p>}
    </Reveal>
  )
}

/**
 * Leadership first, then everyone else. Both rows read from `team` in
 * src/data/site.js — a person moves between them by flipping `lead`.
 */
export default function Team() {
  const leads = team.filter((p) => p.lead)
  const rest = team.filter((p) => !p.lead)

  return (
    <section className="section" id="team">
      <div className="container">
        <Reveal className="head head--center">
          <span className="eyebrow">Leadership &amp; team</span>
          <h2>The people who carry the work.</h2>
          <p className="lead">
            Consultancy and contracting sit in one practice, so the person who drew it
            and the person who builds it answer to the same table.
          </p>
        </Reveal>

        {leads.length > 0 && (
          <div className="team__grid team__grid--lead">
            {leads.map((person, i) => (
              <Person key={person.id} person={person} delay={Math.min(i, 5) * 0.08} />
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <div className="team__grid">
            {rest.map((person, i) => (
              <Person key={person.id} person={person} delay={Math.min(i, 5) * 0.06} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'
import { services } from '../data/site.js'

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <Reveal className="head head--center">
          <span className="eyebrow">What we do</span>
          <h2>Four disciplines. One contract. No finger-pointing.</h2>
          <p className="lead" style={{ marginInline: 'auto' }}>
            Engage us for a single stage or hand us the whole programme — the team and the
            standards stay the same either way.
          </p>
        </Reveal>

        <div className="svc__grid">
          {services.map((service, i) => (
            <Reveal as="article" key={service.id} className="svc" delay={i * 0.1}>
              {/* the photograph sits behind the card and surfaces on hover */}
              <img className="svc__photo" src={service.image} alt="" loading="lazy" decoding="async" />
              <span className="svc__edge" aria-hidden="true" />

              <header className="svc__top">
                <span className="svc__num">{service.num}</span>
                <span className="svc__rule" aria-hidden="true" />
                <span className="svc__icon"><Icon name={service.icon} strokeWidth={1.7} /></span>
              </header>

              <h3>{service.title}</h3>
              <p>{service.body}</p>

              <footer className="svc__more">
                Explore
                <span className="svc__arrow" aria-hidden="true">
                  <Icon name="arrowRight" size={14} strokeWidth={2.6} />
                </span>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

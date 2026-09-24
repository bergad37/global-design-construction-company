import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import Counters from '../components/Counters.jsx'
import Process from '../components/Process.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CTA from '../components/CTA.jsx'
import { useInView } from '../hooks/useInView.js'
import { pillars, services, site } from '../data/site.js'

function MaskedImage({ src, alt, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`mask ${className} ${inView ? 'is-in' : ''}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="aboutpage">
      {/* ---------- page banner ---------- */}
      <header className="pagehead pagehead--about">
        <img
          className="pagehead__bg"
          src="/media/about/site-activity.jpg"
          alt="A concrete pump reaching over the deck during a pour on site"
          fetchPriority="high"
          decoding="async"
        />
        <div className="pagehead__scrim" />
        <div className="container pagehead__inner">
          <span className="eyebrow">About us</span>
          <h1>Consultancy and contracting, under one roof.</h1>
          <p>
            We design buildings and we build them. Keeping both sides in the same team is
            what lets us stand behind a programme and a number.
          </p>
        </div>
      </header>

      {/* ---------- the practice ---------- */}
      <section className="section">
        <div className="container about__grid">
          <Reveal variant="left" className="about__media">
            <MaskedImage
              className="about__frame"
              src="/media/about/site-crew.jpg"
              alt="Our site crew at work on the Rebero Villa structure"
            />
            <MaskedImage
              className="about__inset"
              src="/media/about/completed-building.jpg"
              alt="Kimironko Apartment finished and lit after handover"
            />
          </Reveal>

          <Reveal variant="right">
            <span className="eyebrow">How we started</span>
            <h2>One team, one programme, one budget.</h2>
            <p className="lead">
              {site.name} was set up to close the gap between the people who draw a
              building and the people who put it up. Too many projects lose their
              schedule at that hand-off — a detail that cannot be built, a spec nobody
              priced, a variation nobody saw coming.
            </p>
            <p>
              Our architects, engineers and site teams work from the same drawings, the
              same programme and the same budget. When something on site does not match
              the design, the person who drew it is in the same building as the person
              who has to build it, and it gets resolved that week rather than that
              quarter.
            </p>
            <p>
              We work across commercial, residential, public and industrial projects, at
              every scale from an eleven-week fit-out to a nine-hectare logistics park.
            </p>

            <Link className="about__more" to="/story">
              Read how the practice started
              <Icon name="arrowUpRight" strokeWidth={2.4} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- what we hold ourselves to ---------- */}
      <section className="section section--tight services">
        <div className="container">
          <Reveal className="head head--center">
            <span className="eyebrow">What we hold to</span>
            <h2>Three things we do not negotiate.</h2>
          </Reveal>

          <div className="about__pillars about__pillars--wide">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.id} className="pillar" delay={i * 0.12}>
                <i><Icon name={pillar.icon} /></i>
                <div>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Counters />

      {/* ---------- disciplines ---------- */}
      <section className="section section--tight">
        <div className="container">
          <Reveal className="head head--center">
            <span className="eyebrow">Disciplines</span>
            <h2>What we can take on.</h2>
          </Reveal>

          <ul className="disciplines">
            {services.map((service, i) => (
              <Reveal as="li" key={service.id} className="discipline" delay={i * 0.08}>
                <span className="discipline__num">{service.num}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </div>
                <Link className="discipline__go" to="/#services" aria-label={`${service.title} on the home page`}>
                  <Icon name="arrowUpRight" strokeWidth={2.4} />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Process />
      <Testimonials />
      <CTA />
    </div>
  )
}

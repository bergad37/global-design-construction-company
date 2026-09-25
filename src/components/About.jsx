import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'
import { useInView } from '../hooks/useInView.js'
import { useCountUp } from '../hooks/useCountUp.js'
import { pillars } from '../data/site.js'

function MaskedImage({ src, alt, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`mask ${className} ${inView ? 'is-in' : ''}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  )
}

function FloatingStat() {
  const [ref, inView] = useInView({ threshold: 0.6, rootMargin: '0px' })
  const value = useCountUp(8, inView)
  return (
    <div ref={ref} className="about__stat">
      <b>{value}+</b>
      <small>Specialists on call</small>
    </div>
  )
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about__grid">

        <Reveal variant="left" className="about__media">
          <MaskedImage
            className="about__frame"
            src="/media/about/team.jpg"
            alt="The team around a floor plan, marking up the next stage of a job"
          />
          <MaskedImage
            className="about__inset"
            src="/media/about/r05.jpg"
            alt="Aerial render of a residential block with a rooftop pool and planted balconies"
          />
          {/* <FloatingStat /> */}
        </Reveal>

        <Reveal variant="right">
          <span className="eyebrow">Who we are</span>
          <h2>One accountable team, from the first sketch to the final handover.</h2>
          <p className="lead">
            Global Design Consultancy and Construction Company Ltd brings consultancy and
            contracting under one roof. Our architects, engineers and site teams work from the
            same drawings, the same programme and the same budget — which removes the
            hand-off gaps where most projects lose their schedule.
          </p>

          <div className="about__pillars">
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
        </Reveal>

      </div>
    </section>
  )
}

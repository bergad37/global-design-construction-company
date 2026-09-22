import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'

export default function CTA() {
  return (
    <section className="section section--tight cta">
      <img className="cta__bg" src="/media/cta/aerial-plot.jpg" alt="" loading="lazy" decoding="async" />
      <div className="cta__scrim" />
      <div className="container">
        <Reveal as="h2">Have a site, a budget, or just an idea?</Reveal>
        <Reveal as="p" delay={0.1}>
          Send us the brief. We will come back with a realistic scope, a programme and an honest number.
        </Reveal>
        <Reveal delay={0.2}>
          <Link className="btn btn--light" to="/contact">
            Book a consultation
            <Icon name="arrowUpRight" strokeWidth={2.4} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

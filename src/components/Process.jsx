import Reveal from './Reveal.jsx'
import { useInView } from '../hooks/useInView.js'
import { processSteps } from '../data/site.js'

export default function Process() {
  const [ref, inView] = useInView({ threshold: 0.35, rootMargin: '0px' })

  return (
    <section className="section process" id="process">
      <div className="container">
        <Reveal className="head head--center">
          <span className="eyebrow">How we work</span>
          <h2>Plan. Design. Build. Grow.</h2>
          <p className="lead" style={{ marginInline: 'auto' }}>
            Four stages, each with a deliverable you sign off before the next one starts.
          </p>
        </Reveal>

        <div className="steps" ref={ref}>
          <div className="steps__fill" style={{ width: inView ? '88%' : 0 }} aria-hidden="true" />
          {processSteps.map((step) => (
            <div className={`step ${inView ? 'is-in' : ''}`} key={step.num}>
              <b>{step.num}</b>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

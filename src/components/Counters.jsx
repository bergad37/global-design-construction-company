import Counter from './Counter.jsx'
import { stats } from '../data/site.js'

export default function Counters() {
  return (
    <section className="section section--tight">
      <div className="container counts">
        {stats.map((stat) => (
          <Counter key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}

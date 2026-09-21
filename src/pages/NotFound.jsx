import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

/**
 * Uses the same dark banner as the other subpages. That is not only for looks:
 * the nav is transparent until you scroll, and its white lockup needs a dark
 * surface behind it at the top of every route.
 */
export default function NotFound() {
  return (
    <header className="pagehead pagehead--missing">
      <img className="pagehead__bg" src="/media/cta/aerial-plot.jpg" alt="" decoding="async" />
      <div className="pagehead__scrim" />
      <div className="container pagehead__inner">
        <span className="eyebrow">404</span>
        <h1>We can&rsquo;t find that page.</h1>
        <p>
          The link may be out of date. Everything we&rsquo;ve built is on the projects page.
        </p>
        <div className="pagehead__actions">
          <Link className="btn btn--primary" to="/">
            Back to home
            <Icon name="arrowUpRight" strokeWidth={2.4} />
          </Link>
          <Link className="btn btn--light" to="/#projects">View projects</Link>
        </div>
      </div>
    </header>
  )
}

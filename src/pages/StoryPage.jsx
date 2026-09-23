import Leadership from '../components/Leadership.jsx'
import Counters from '../components/Counters.jsx'
import CTA from '../components/CTA.jsx'

export default function StoryPage() {
  return (
    <>
      <header className="pagehead pagehead--short">
        <img
          className="pagehead__bg"
          src="/media/about/team.jpg"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
        <div className="pagehead__scrim" />
        <div className="container pagehead__inner">
          <span className="eyebrow">Our story</span>
          <h1>How the practice started.</h1>
          <p>
            One architect, a decade of other people&rsquo;s sites, and a decision to keep
            the drawing and the building in the same hands.
          </p>
        </div>
      </header>

      <Leadership />
      <Counters />
      <CTA />
    </>
  )
}

import Contact from '../components/Contact.jsx'

/**
 * Contact on its own page: the banner, then the same section the home page
 * carries — details, enquiry form and the office map. Nothing else, so a
 * visitor who came here to get in touch has one thing in front of them.
 */
export default function ContactPage() {
  return (
    <>
      <header className="pagehead pagehead--short">
        <img
          className="pagehead__bg"
          src="/media/cta/aerial-plot.jpg"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
        <div className="pagehead__scrim" />
        <div className="container pagehead__inner">
          <span className="eyebrow">Contact us</span>
          <h1>Tell us what you are building.</h1>
          <p>
            Send the brief, or just the site and the idea. We come back with a realistic
            scope, a programme and an honest number.
          </p>
        </div>
      </header>

      <Contact />
    </>
  )
}

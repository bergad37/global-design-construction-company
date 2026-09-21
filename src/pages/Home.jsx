import HeroSlider from '../components/hero/HeroSlider.jsx'
import Ribbon from '../components/Ribbon.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Projects from '../components/Projects.jsx'
import Process from '../components/Process.jsx'
import Counters from '../components/Counters.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CTA from '../components/CTA.jsx'
import Contact from '../components/Contact.jsx'

export default function Home({ ready }) {
  return (
    <>
      <HeroSlider ready={ready} />
      <Ribbon />
      <About />
      <Services />
      <Projects />
      <Process />
      <Counters />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  )
}

import { useCallback, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Preloader from './components/Preloader.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ToTop from './components/ToTop.jsx'
import Cursor from './components/Cursor.jsx'
import RouteScroll from './components/RouteScroll.jsx'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import StoryPage from './pages/StoryPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const [ready, setReady] = useState(false)

  // The preloader hands the page over: `is-ready` on <html> starts the
  // headline reveal, and `ready` starts the hero's timers.
  const onLoaded = useCallback(() => {
    document.documentElement.classList.add('is-ready')
    setReady(true)
  }, [])

  return (
    <>
      <Preloader onDone={onLoaded} />
      <Cursor />
      <RouteScroll />

      <a className="skip" href="#main">Skip to content</a>

      <Navbar />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home ready={ready} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <ToTop />
    </>
  )
}

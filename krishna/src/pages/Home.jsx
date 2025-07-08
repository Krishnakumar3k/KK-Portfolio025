import { useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import RemoteTeam from '../components/RemoteTeam'
import Github from '../components/Github'
import Contact from '../components/Contact'

const Home = () => {
  useEffect(() => {
    // Ensure page starts from top
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="mobile-container">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <RemoteTeam />
      <Github />
      <Contact />
    </div>
  )
}

export default Home
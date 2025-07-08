import { useEffect } from 'react'
import About from '../components/About'

const AboutPage = () => {
  useEffect(() => {
    // Ensure page starts from top
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-4 mobile-container">
      <About />
    </div>
  )
}

export default AboutPage
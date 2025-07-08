import { useEffect } from 'react'
import Projects from '../components/Projects'

const ProjectsPage = () => {
  useEffect(() => {
    // Ensure page starts from top
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-4 mobile-container">
      <Projects />
    </div>
  )
}

export default ProjectsPage
import { useEffect } from 'react'
import Contact from '../components/Contact'

const ContactPage = () => {
  useEffect(() => {
    // Ensure page starts from top
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-4 mobile-container">
      <Contact />
    </div>
  )
}

export default ContactPage
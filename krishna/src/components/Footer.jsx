import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: "https://github.com/Krishnakumar3k", label: "GitHub" },
    { icon: <FiLinkedin size={20} />, url: "https://www.linkedin.com/in/krishna-kumar-789505202/", label: "LinkedIn" },
    { icon: <FiMail size={20} />, url: "mailto:krishnakumar3kgt@gmail.com", label: "Email" }
  ]
  
  const quickLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" }
  ]

  return (
    <footer className="bg-gray-900 text-white pt-16">
      <div className="container-custom px-4">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 text-center sm:text-left">

          {/* Brand + Social */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-accent-500">&lt;</span>
              Krishna Kumar
              <span className="text-accent-500">/&gt;</span>
            </h2>

            <p className="text-gray-400 mb-6 max-w-md mx-auto sm:mx-0">
              A passionate Full Stack Developer focused on creating innovative and user-friendly applications using modern technologies.
            </p>

            <div className="flex justify-center sm:justify-start space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -3, color: '#3a86ff' }}
                  className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center 
                             text-gray-400 hover:text-white transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative pb-2 
             block w-fit mx-auto sm:mx-0
             after:content-[''] after:absolute after:bottom-0 
             after:left-0 after:w-16 after:h-0.5 after:bg-primary-500">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.to}`} 
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative pb-2 
             block w-fit mx-auto sm:mx-0
             after:content-[''] after:absolute after:bottom-0 
             after:left-0 after:w-16 after:h-0.5 after:bg-primary-500">
              Contact Info
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Noida, U.P, India</li>
              <li>
                <a 
                  href="mailto:krishnakumar3kgt@gmail.com"
                  className="hover:text-primary-500 transition-colors"
                >
                  krishnakumar3kgt@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919000000000"
                  className="hover:text-primary-500 transition-colors"
                >
                  +91 90000 00000
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
          <p>© {currentYear} Krishna Kumar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

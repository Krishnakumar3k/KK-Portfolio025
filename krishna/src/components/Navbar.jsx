import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Experience', to: '/experience' },
    { name: 'Skills', to: '/skills' },
    { name: 'Projects', to: '/projects' },
    { name: 'Remote Team', to: '/remote-team' },
    { name: 'Github', to: '/github' },
    { name: 'Contact', to: '/contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md shadow-lg py-1' : 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm py-1.5'
      }`}
      style={{ height: scrolled ? '48px' : '52px' }}
    >
      <div className="container-custom flex justify-between items-center h-full px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            to="/"
            className="text-sm sm:text-base md:text-lg font-bold text-primary-500"
          >
            <span className="text-accent-500">{'<'}</span>
            Krishna
            <span className="text-accent-500">{'/>'}</span>
          </Link>
        </motion.div>

        <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
          <ul className="flex space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <motion.li key={link.name} whileHover={{ y: -1 }}>
                <Link
                  to={link.to}
                  className={`font-medium hover:text-primary-500 transition-colors text-xs relative ${
                    isActive(link.to) ? 'text-primary-500 font-semibold' : 'text-dark-700 dark:text-gray-300'
                  }`}
                  style={{ padding: '4px 8px' }}
                >
                  {link.name}
                  {isActive(link.to) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 rounded-full bg-gray-100/80 dark:bg-dark-700/80 hover:bg-gray-200/80 dark:hover:bg-dark-600/80 transition-colors backdrop-blur-sm border border-gray-200/50 dark:border-dark-600/50"
          >
            {theme === 'dark' ? (
              <FiSun className="text-yellow-400" size={14} />
            ) : (
              <FiMoon className="text-primary-500" size={14} />
            )}
          </motion.button>
        </div>

        <div className="lg:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 mr-2 rounded-full bg-gray-100/80 dark:bg-dark-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-dark-600/50"
          >
            {theme === 'dark' ? (
              <FiSun className="text-yellow-400" size={14} />
            ) : (
              <FiMoon className="text-primary-500" size={14} />
            )}
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-primary-500/90 text-white backdrop-blur-sm shadow-lg"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <FiX size={16} /> : <FiMenu size={16} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white/95 dark:bg-dark-800/95 backdrop-blur-md shadow-lg"
        >
          <div className="container-custom py-3 px-3 sm:px-4">
            <ul className="flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    className={`block py-2 px-2 font-medium hover:text-primary-500 transition-colors text-sm rounded-lg ${
                      isActive(link.to) ? 'text-primary-500 font-semibold' : 'text-dark-700 dark:text-gray-300'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
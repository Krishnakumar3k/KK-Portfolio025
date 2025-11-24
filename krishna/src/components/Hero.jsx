import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation'
import NavbarParticles from './NavbarParticles'
import img from '../components/images/krs11.png'

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section id="hero" className="font-sans relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 mobile-hero-padding">
      {/* Navbar Particles Background - Now used as home page animation */}
      {isMounted && <NavbarParticles />}
      
      {/* Additional Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full blur-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-secondary-500/20 to-accent-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-primary-500/30 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-10 w-12 h-12 border-2 border-secondary-500/30 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center px-2 sm:px-0">
          
          {/* Mobile Profile Image - Shows only on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:hidden order-first flex justify-center mb-6 sm:mb-8"
          >
            <motion.div 
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Mobile Animated Background Rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border-2 border-dashed border-primary-500/30" />
              </motion.div>
              
              <motion.div
                className="absolute inset-2 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border border-dotted border-secondary-500/40" />
              </motion.div>
              
              {/* Mobile Floating Elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-lg"
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full shadow-lg"
                animate={{
                  y: [0, 8, 0],
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Mobile Main Profile Container */}
              <motion.div 
                className="relative glass-card p-3 rounded-full aspect-square flex items-center justify-center"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(58, 134, 255, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Mobile Gradient Border Animation */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 p-0.5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-dark-800" />
                </motion.div>
                
                {/* Mobile Profile Image Container */}
                <motion.div
                  className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Mobile Image Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 via-transparent to-secondary-500/20 z-10" />
                  
                  {/* Mobile Profile Image */}
                  <img 
                    src={img}
                    alt="Krishna Kumar" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  
                  {/* Mobile Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                {/* Mobile Pulsing Ring Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary-500/50"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              {/* Mobile Status Indicator */}
              <motion.div
                className="absolute bottom-4 right-4 flex items-center gap-1 px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 500 }}
              >
                <motion.div
                  className="w-1.5 h-1.5 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                Available
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left px-2 sm:px-0"
          >
            <motion.span 
              className="inline-block px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full bg-primary-500/10 text-primary-500 font-medium mb-3 sm:mb-4 text-xs sm:text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Software Engineer.
            </motion.span>
            
            <motion.h1 
              className="mb-3 sm:mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Hi, I'm <span className="text-primary-500">Krishna Kumar</span>
            </motion.h1>
            
            <motion.div
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 text-dark-500 dark:text-gray-300 h-10 sm:h-12 md:h-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  'Building modern web applications',
                  1000,
                  'React.js Developer',
                  1000,
                  'Node.js Developer',
                  1000,
                  'Tech Research and Development ',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary w-full sm:w-auto text-xs sm:text-sm md:text-base"
                >
                  Get In Touch
                </motion.button>
              </Link>
              
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline w-full sm:w-auto text-xs sm:text-sm md:text-base"
                >
                  View Projects
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div
              className="flex mt-4 sm:mt-6 md:mt-8 justify-center lg:justify-start space-x-3 sm:space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <motion.a 
                href="https://github.com/Krishnakumar3k" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#171515' }}
                className="text-dark-400 dark:text-gray-400 hover:text-dark-700 dark:hover:text-white transition-colors"
              >
                <FiGithub size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/krishna-kumar-789505202/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#0077B5' }}
                className="text-dark-400 dark:text-gray-400 hover:text-dark-700 dark:hover:text-white transition-colors"
              >
                <FiLinkedin size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Desktop Profile Image - Shows only on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <motion.div 
              className="relative w-full h-full max-w-sm xl:max-w-md mx-auto"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Desktop Animated Background Rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border-4 border-dashed border-primary-500/30" />
              </motion.div>
              
              <motion.div
                className="absolute inset-4 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border-2 border-dotted border-secondary-500/40" />
              </motion.div>
              
              {/* Desktop Floating Elements Around Profile */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full shadow-lg"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              <motion.div
                className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-r from-secondary-500 to-accent-500 rotate-45 shadow-lg"
                animate={{
                  rotate: [45, 225, 45],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              
              {/* Desktop Main Profile Container */}
              <motion.div 
                className="relative glass-card p-6 xl:p-8 rounded-full aspect-square flex items-center justify-center"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(58, 134, 255, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Desktop Gradient Border Animation */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 p-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-dark-800" />
                </motion.div>
                
                {/* Desktop Profile Image Container */}
                <motion.div
                  className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Desktop Image Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 via-transparent to-secondary-500/20 z-10" />
                  
                  {/* Desktop Profile Image */}
                  <img 
                    src={img}
                    alt="Krishna Kumar" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  
                  {/* Desktop Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                {/* Desktop Pulsing Ring Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-primary-500/50"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              {/* Desktop Status Indicator */}
              <motion.div
                className="absolute bottom-8 right-8 flex items-center gap-2 px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 500 }}
              >
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                Available
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <Link to="/about" className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-xs sm:text-sm mb-1 sm:mb-2 text-dark-400 dark:text-gray-400">Scroll Down</span>
            <FiArrowDown size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-500" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero
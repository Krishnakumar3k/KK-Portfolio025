import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiDownload, FiCode, FiDatabase, FiServer, FiSmartphone } from 'react-icons/fi'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const factItems = [
    { icon: <FiCode />, title: '5+', subtitle: 'Projects Completed' },
    { icon: <FiDatabase />, title: '2+', subtitle: 'Years Experience' },
    { icon: <FiServer />, title: '5+', subtitle: 'Technologies' },
    { icon: <FiSmartphone />, title: '7+', subtitle: 'Happy Clients' }
  ]

  return (
    <section id="about" className="font-sans section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Image Container with Advanced Animations */}
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Animated Background Elements */}
              <motion.div
                className="absolute -inset-8 rounded-3xl"
                animate={{ 
                  background: [
                    "linear-gradient(45deg, rgba(58, 134, 255, 0.1), rgba(131, 56, 236, 0.1))",
                    "linear-gradient(135deg, rgba(131, 56, 236, 0.1), rgba(255, 0, 110, 0.1))",
                    "linear-gradient(225deg, rgba(255, 0, 110, 0.1), rgba(58, 134, 255, 0.1))",
                    "linear-gradient(315deg, rgba(58, 134, 255, 0.1), rgba(131, 56, 236, 0.1))"
                  ]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />

              {/* Floating Geometric Shapes */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-lg"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-accent-500 to-primary-500 rotate-45 shadow-lg"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 0.8, 1],
                  rotate: [45, 225, 405]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              <motion.div
                className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full shadow-lg"
                animate={{
                  x: [0, -10, 0],
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />

              <motion.div
                className="absolute top-1/4 -right-8 w-5 h-5 border-2 border-primary-500 rotate-45 shadow-lg"
                animate={{
                  rotate: [45, 405, 45],
                  scale: [1, 1.1, 1],
                  borderColor: [
                    "rgb(58, 134, 255)",
                    "rgb(131, 56, 236)",
                    "rgb(255, 0, 110)",
                    "rgb(58, 134, 255)"
                  ]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Animated Border Rings */}
              <motion.div
                className="absolute -inset-4 rounded-2xl border-2 border-dashed border-primary-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute -inset-6 rounded-2xl border border-dotted border-secondary-500/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Main Image with Enhanced Effects */}
              <motion.div 
                className="relative overflow-hidden rounded-2xl shadow-2xl"
                whileHover={{ 
                  boxShadow: "0 25px 50px rgba(58, 134, 255, 0.3)",
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient Overlay Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary-500/20 via-transparent to-secondary-500/20 z-10"
                  animate={{
                    background: [
                      "linear-gradient(to top, rgba(58, 134, 255, 0.2), transparent, rgba(131, 56, 236, 0.2))",
                      "linear-gradient(to top, rgba(131, 56, 236, 0.2), transparent, rgba(255, 0, 110, 0.2))",
                      "linear-gradient(to top, rgba(255, 0, 110, 0.2), transparent, rgba(58, 134, 255, 0.2))"
                    ]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 z-20"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut"
                  }}
                />

                {/* Particle Effect Overlay */}
                <motion.div className="absolute inset-0 z-10">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>

                {/* Main Image */}
                <motion.img 
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="About Me" 
                  className="w-full h-auto object-cover relative z-0 transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ filter: "brightness(1.1) contrast(1.1)" }}
                />

                {/* Corner Decorations */}
                <motion.div
                  className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/50 z-30"
                  animate={{
                    borderColor: [
                      "rgba(255, 255, 255, 0.5)",
                      "rgba(58, 134, 255, 0.8)",
                      "rgba(255, 255, 255, 0.5)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/50 z-30"
                  animate={{
                    borderColor: [
                      "rgba(255, 255, 255, 0.5)",
                      "rgba(131, 56, 236, 0.8)",
                      "rgba(255, 255, 255, 0.5)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                />

                {/* Pulsing Ring Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-primary-500/50 z-30"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Status Badge with Animation */}
              <motion.div
                className="absolute -bottom-4 -right-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium rounded-full shadow-lg z-40"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 500 }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 25px rgba(34, 197, 94, 0.4)"
                }}
              >
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                Available for Work
              </motion.div>

              {/* Floating Code Symbols */}
              <motion.div
                className="absolute -top-8 left-1/4 text-primary-500 text-2xl font-bold opacity-20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {'</>'}
              </motion.div>

              <motion.div
                className="absolute -bottom-8 right-1/4 text-secondary-500 text-xl font-bold opacity-20"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -10, 0],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                {'{}'}
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-4">I'm a <span className="text-primary-500">Full Stack Developer</span> with a passion for creating innovative solutions</h3>
            
            <div className="space-y-4 text-dark-600 dark:text-gray-300 mb-6">
              <p>
               I am a dedicated and passionate Full-Stack Developer with IT industries experience in software development. Originating from Bihar, India, I specialize in building dynamic and scalable web applications using the <span style={{ color: "#0E5BBE" }}>MERN Stack (MongoDB, Express.js, React.js, and Node.js).</span> I hold a Bachelor’s degree in Engineering (B.Tech.) with a specialization in Information Technology from RRIMT Lucknow, affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU).
                My academic background laid a strong foundation in programming and problem-solving, which I have since honed through real-world projects.
               
              </p>
              <p>
                 Fueled by a passion for software development, I strive to continuously improve my coding skills and deliver high-quality, user-centric web solutions. Currently, I am working as a Software Developer, where I leverage my expertise to build innovative applications and enhance my technical proficiency. My commitment to learning and growth drives me to excel in every aspect of my career.
              </p>
            </div>
            
            <motion.a
              href="https://drive.google.com/file/d/10njiu3lZ8poLxYnajHc-iCSSRncHqbQh/view?usp=sharing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary inline-flex items-center gap-2 mb-8"
            >
              <FiDownload /> Download Resume
            </motion.a>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {factItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-4 rounded-lg bg-white dark:bg-dark-700 shadow-md flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-500/10 text-primary-500 mb-3">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-primary-500">{item.title}</h4>
                  <p className="text-dark-500 dark:text-gray-400">{item.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
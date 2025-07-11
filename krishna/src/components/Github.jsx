import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiStar, FiGitBranch, FiCodepen, FiTrendingUp, FiUsers, FiCode } from 'react-icons/fi'

const Github = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  
  // For a real implementation, you would fetch this data from GitHub API
  const [githubStats, setGithubStats] = useState({
    repos: 45,
    stars: 32,
    contributions: 82
  })
  
  const [repositories, setRepositories] = useState([
    {
      id: 1,
      name: "e-commerce-platform",
      description: "A feature-rich e-commerce solution built with React, Node.js, and MongoDB",
      language: "MERN Stack",
      
      url: "https://github.com/Krishnakumar3k?page=1&tab=repositories"
    },
    {
      id: 2,
      name: "Blog WebApp",
      description: "A responsive blog web application with all functionlity of user and blog creater",
      language: "MERN Stack",    
      url: "https://github.com/Krishnakumar3k/Blog-App-Full-Stack-MERN"
    },
   
  ])
  
  // This would be a real GitHub contributions chart in a production environment
  // We're simulating a simple one here
  const [contributions, setContributions] = useState([])
  
  useEffect(() => {
    // Simulate generating contributions data
    const generateContributions = () => {
      const days = 52 * 7; // One year of days
      const data = [];
      
      for (let i = 0; i < days; i++) {
        // Random number of contributions (0-9)
        const value = Math.floor(Math.random() * 10);
        let intensity;
        
        if (value === 0) intensity = 0;
        else if (value < 3) intensity = 1;
        else if (value < 5) intensity = 2;
        else if (value < 7) intensity = 3;
        else intensity = 4;
        
        data.push({ value, intensity });
      }
      
      setContributions(data);
    };
    
    generateContributions();
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const statsCardVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      rotateY: -90
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: { 
        duration: 0.6,
        ease: "backOut"
      }
    }
  }

  const numberCountVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        delay: 0.3
      }
    }
  }

  const repoCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const colorClasses = [
    'bg-gray-100 dark:bg-dark-700',
    'bg-primary-200 dark:bg-primary-900',
    'bg-primary-300 dark:bg-primary-800',
    'bg-primary-400 dark:bg-primary-700',
    'bg-primary-500 dark:bg-primary-600'
  ];

  return (
    <section id="github" className=" font-sans section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Code Symbols */}
        <motion.div
          className="absolute top-20 left-10 text-6xl font-bold text-primary-500/5 dark:text-white/5"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'</>'}
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 text-5xl font-bold text-secondary-500/5 dark:text-white/5"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -15, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          {'{}'}
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-1/4 text-4xl font-bold text-accent-500/5 dark:text-white/5"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 20, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          {'[]'}
        </motion.div>
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-primary-500/10 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-10 w-12 h-12 border-2 border-secondary-500/10 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-10 w-8 h-8 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-lg"
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                boxShadow: "0 10px 30px rgba(58, 134, 255, 0.4)"
              }}
              transition={{ duration: 0.6 }}
            >
              <FiGithub size={24} />
            </motion.div>
            <h2 className="section-title !mb-0 !after:hidden">GitHub Activity</h2>
          </motion.div>
          
          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full mx-auto"
          />
          
          <motion.p
            className="text-lg text-dark-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Explore my coding journey through GitHub statistics and contributions
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
         className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center mx-auto max-w-6xl"


        >
          {[
            { 
              icon: <FiGithub size={24} />, 
              value: githubStats.repos, 
              label: "Repositories",
              color: "primary",
              gradient: "from-primary-500 to-blue-600"
            },
            { 
              icon: <FiStar size={24} />, 
              value: githubStats.stars, 
              label: "Stars",
              color: "secondary",
              gradient: "from-secondary-500 to-purple-600"
            },
         
            { 
              icon: <FiTrendingUp size={24} />, 
              value: githubStats.contributions, 
              label: "Contributions",
              color: "primary",
              gradient: "from-green-500 to-emerald-600"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statsCardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Animated Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                initial={false}
              />
              
              {/* Floating Ring Effect */}
              <motion.div
                className={`absolute inset-0 rounded-xl border-2 border-${stat.color}-500/30 opacity-0 group-hover:opacity-100`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="card flex flex-col items-center p-6 relative z-10">
                <motion.div 
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                
                <motion.span 
                  variants={numberCountVariants}
                  className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </motion.span>
                
                <span className="text-dark-500 dark:text-gray-400 font-medium">{stat.label}</span>
                
                {/* Pulse Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${stat.gradient} opacity-0`}
                  animate={{
                    opacity: [0, 0.1, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <motion.div 
            className="card p-6 relative overflow-hidden"
            whileHover={{ 
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              y: -2
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="relative z-10">
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                >
                  <FiCode size={16} />
                </motion.div>
                <h3 className="text-xl font-bold">Contribution Activity</h3>
              </motion.div>
              
              <div className="overflow-x-auto">
                <div className="min-w-max">
                  <motion.div 
                    className="flex h-28"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    {Array.from({ length: 52 }).map((_, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col space-y-1">
                        {Array.from({ length: 7 }).map((_, dayIndex) => {
                          const cellIndex = weekIndex * 7 + dayIndex;
                          const { intensity } = contributions[cellIndex] || { intensity: 0 };
                          
                          return (
                            <motion.div
                              key={dayIndex}
                              className={`w-3 h-3 rounded-sm ${colorClasses[intensity]} mx-0.5 transition-all duration-300 cursor-pointer`}
                              title={`${contributions[cellIndex]?.value || 0} contributions`}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ 
                                scale: 1, 
                                opacity: 1,
                              }}
                              transition={{ 
                                delay: (weekIndex * 7 + dayIndex) * 0.001,
                                duration: 0.3
                              }}
                              whileHover={{ 
                                scale: 1.3,
                                zIndex: 10,
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                              }}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center mt-4 text-sm text-dark-500 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <span className="mr-2">Less</span>
                    {colorClasses.map((cls, idx) => (
                      <motion.div 
                        key={idx} 
                        className={`w-3 h-3 rounded-sm mx-0.5 ${cls}`}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                    <span className="ml-2">More</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <motion.h3 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 1.0 }}
            className="text-2xl font-bold md:col-span-2"
          >
            <motion.div className="flex items-center gap-3">
              <motion.div
                className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white"
                whileHover={{ scale: 1.2, rotate: 180 }}
              >
                <FiGithub size={16} />
              </motion.div>
              Top Repositories
            </motion.div>
          </motion.h3>
          
          {repositories.map(repo => (
            <motion.div
              key={repo.id}
              variants={repoCardVariants}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
              className="card p-6 relative overflow-hidden group"
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              
              {/* Floating Corner Decoration */}
              <motion.div
                className="absolute top-2 right-2 w-4 h-4 border-2 border-primary-500/30 rotate-45 opacity-0 group-hover:opacity-100"
                animate={{
                  rotate: [45, 225, 45],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="relative z-10">
                <motion.a 
                href={repo.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-lg font-semibold text-primary-500 mb-2 hover:underline group/link"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <FiGithub size={18} />
                </motion.div>
                <motion.span
                  className="group-hover/link:text-secondary-500 transition-colors"
                >
                  {repo.name}
                </motion.span>
              </motion.a>
              
              <p className="text-dark-600 dark:text-gray-300 mb-4">
                {repo.description}
              </p>
              
              <motion.div 
                className="flex flex-wrap items-center gap-4 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.span 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="w-3 h-3 rounded-full bg-primary-500 mr-2"></span>
                  {repo.language}
                </motion.span>
                
                <motion.span 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    className="mr-1"
                  >
                    <FiStar />
                  </motion.div>
                  {repo.stars}
                </motion.span>
                
                <motion.span 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    className="mr-1"
                  >
                    <FiGitBranch />
                  </motion.div>
                  {repo.forks}
                </motion.span>
                
                <span className="text-dark-400 dark:text-gray-500 ml-auto">
                  Updated {repo.lastUpdated}
                </span>
              </motion.div>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.5 }}
            className="md:col-span-2 text-center mt-6"
          >
            <motion.a 
              href="https://github.com/Krishnakumar3k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline inline-flex items-center gap-2 group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(58, 134, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FiGithub />
              </motion.div>
              View All Repositories
              <motion.div
                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Github
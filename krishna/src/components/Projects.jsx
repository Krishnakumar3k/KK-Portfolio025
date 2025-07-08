import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub, FiTag } from 'react-icons/fi'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  
  const [filter, setFilter] = useState('all')
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'react', label: 'React' },
    { id: 'node', label: 'Node.js' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ui', label: 'UI/UX' }
  ]
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, user authentication, cart functionality, and payment processing.",
      image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["react", "node", "mongodb", "fullstack"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      features: ["User authentication", "Product catalog", "Shopping cart", "Payment gateway integration", "Order history"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality, task categorization, and real-time updates.",
      image: "https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["react", "firebase", "ui"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      features: ["Task creation and management", "Drag-and-drop interface", "Task categorization", "Due date reminders", "Search functionality"]
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for social media analytics, showing engagement metrics, follower growth, and post performance.",
      image: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["react", "node", "mongodb", "fullstack"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      features: ["Analytics visualization", "Data filtering", "Trend analysis", "Exportable reports", "User insights"]
    },
    {
      id: 4,
      title: "Real Estate Listing",
      description: "A property listing platform with advanced search filters, interactive maps, and virtual tours of properties.",
      image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["react", "node", "postgresql", "fullstack"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      features: ["Property search", "Interactive map", "Virtual tours", "Contact forms", "User favorites"]
    },
    {
      id: 5,
      title: "Recipe App",
      description: "A recipe sharing platform where users can discover, share, and rate recipes with an elegant and user-friendly interface.",
      image: "https://images.pexels.com/photos/4144234/pexels-photo-4144234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["react", "ui"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      features: ["Recipe browsing", "User profiles", "Recipe ratings", "Ingredient search", "Cooking timers"]
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "A fitness tracking application that helps users monitor workouts, track progress, and set fitness goals.",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["node", "react", "mongodb", "fullstack"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      features: ["Workout logging", "Progress charts", "Goal setting", "Calorie tracking", "Exercise library"]
    }
  ]
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter))
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Code Symbols */}
        <motion.div
          className="absolute top-20 left-12 text-8xl font-bold text-primary-500/3 dark:text-white/3"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 20, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'</>'}
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 text-7xl font-bold text-secondary-500/3 dark:text-white/3"
          animate={{
            y: [0, 25, 0],
            rotate: [0, -25, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          {'{}'}
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-1/4 text-6xl font-bold text-accent-500/3 dark:text-white/3"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 35, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
        >
          {'[]'}
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-12 text-5xl font-bold text-primary-500/3 dark:text-white/3"
          animate={{
            y: [0, 22, 0],
            rotate: [0, -20, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          {'()'}
        </motion.div>
        
        <motion.div
          className="absolute bottom-48 right-1/3 text-7xl font-bold text-secondary-500/3 dark:text-white/3"
          animate={{
            y: [0, -28, 0],
            rotate: [0, 40, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        >
          {'<>'}
        </motion.div>
        
        <motion.div
          className="absolute top-24 left-1/3 text-4xl font-bold text-accent-500/3 dark:text-white/3"
          animate={{
            y: [0, 16, 0],
            rotate: [0, -30, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          {'//'}
        </motion.div>
        
        <motion.div
          className="absolute top-2/3 left-8 text-5xl font-bold text-primary-500/3 dark:text-white/3"
          animate={{
            y: [0, -18, 0],
            rotate: [0, 25, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        >
          {'&&'}
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-8 text-6xl font-bold text-secondary-500/3 dark:text-white/3"
          animate={{
            y: [0, 24, 0],
            rotate: [0, -35, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7
          }}
        >
          {'||'}
        </motion.div>
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-16 w-24 h-24 border-2 border-primary-500/4 rotate-45"
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.4, 1],
            opacity: [0.04, 0.1, 0.04]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-16 w-20 h-20 border-2 border-secondary-500/4 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.04, 0.12, 0.04],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-accent-500/4 to-primary-500/4 rounded-full"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-secondary-500/4 to-accent-500/4 rotate-45"
          animate={{
            rotate: [45, 495, 45],
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.1, 0.04]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 4
          }}
        />
        
        {/* Floating Tech Symbols */}
        <motion.div
          className="absolute bottom-24 left-12 text-5xl font-bold text-primary-500/4 dark:text-white/4"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 360, 0],
            opacity: [0.04, 0.1, 0.04]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        >
          {'⚛️'}
        </motion.div>
        
        <motion.div
          className="absolute top-48 right-1/4 text-4xl font-bold text-secondary-500/4 dark:text-white/4"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -360, 0],
            opacity: [0.04, 0.1, 0.04]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 9
          }}
        >
          {'⚡'}
        </motion.div>
        
        <motion.div
          className="absolute top-1/4 left-1/2 text-3xl font-bold text-accent-500/4 dark:text-white/4"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 180, 0],
            opacity: [0.04, 0.1, 0.04]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          {'🔥'}
        </motion.div>
      </div>
      
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 my-8"
        >
          {filters.map(filterItem => (
            <motion.button
              key={filterItem.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(filterItem.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === filterItem.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 dark:bg-dark-700 dark:hover:bg-dark-600 text-dark-700 dark:text-gray-300'
              }`}
            >
              {filterItem.label}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="card overflow-hidden group"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary-500 transition-colors"
                    >
                      <FiExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary-500 transition-colors"
                    >
                      <FiGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="flex items-center text-xs font-medium px-2 py-1 rounded-full bg-primary-500/10 text-primary-500"
                    >
                      <FiTag className="mr-1" size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-dark-500 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-dark-600 dark:text-gray-300">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-dark-500 dark:text-gray-400 flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
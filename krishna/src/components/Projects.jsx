import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub, FiTag } from 'react-icons/fi'
import img from "../components/images/pmayu.png"
import img1 from "../components/images/pss.png"
import img2 from "../components/images/regeneron.png"
import img3 from "../components/images/blog.jpg"
import img4 from "../components/images/imgdrive.png"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  
  const [filter, setFilter] = useState('all')
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'react js', label: 'React' },
    { id: 'node js', label: 'Node js' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ui', label: 'UI/UX' }
  ]
  
  const projects = [
    {
      id: 1,
      title: "PMAY U Dashboard",
      description: "A full-featured PMAY U (Prdhan Mantri Awas Yojna Urban) platform for manage beneficary and applicant data, user authentication, Ai functionality, and data processing.",
      image: img,
      tags: ["react js", "node js", "mysql", "fullstack"],
      liveLink: "https://pmay-urban.gov.in/",
      features: ["User authentication", "Beneficary catalog", "Ai Integration", "All State data API management",]
    },
    {
      id: 2,
      title: "HR Management Software PSS",
      description: "A fullstack HR management software developed for companies to handel the employee and company data.",
      image: img1,
      tags: ["MERN Stack", "React js", " Node js", "mongoDB"],
      liveLink: "https://panoramasoftwares.com/",
      features: ["Task creation and management", "Auto letter creation", "Epmloyee Payroll", "System Allocation", "Search functionality"]
    },
    {
      id: 3,
      title: "Regeneron pharmaceuticals",
      description: "Regeneron is a biotechnology company that invents, develops and commercializes life-transforming medicines for people with serious diseases. Founded and led by physician-scientists.",
      image: img2,
      tags: ["react js", "node js", "mysql", "fullstack"],
     
      liveLink: "https://www.regeneron.com/",
      features: ["Research module development", "Data filtering", "Data API optimization", "Exportable reports", "User insights"]
    },
    {
      id: 4,
      title: "Blog WebApp",
      description: "This is a fully functional blog application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The application provides a platform for users to create, edit, delete, and view blog posts. It also includes features such as user authentication, real-time updates, and an intuitive UI, offering a seamless blogging experience.",
      image: img3,
      tags: ["react js", "node js", "mongoDB", "fullstack"],
      githubLink: "https://github.com/Krishnakumar3k/Blog-App-Full-Stack-MERN",
      features: ["Bolg content search", "Interactive UI", "Social connect", "User favorites"]
    },
    {
      id: 5,
      title: "Image Drive",
      description: "Develop the image drive app to upload and secure images privately",
      image: img4,
      tags: ["react", "ui"],
      githubLink: "https://github.com/Krishnakumar3k/Image-Drive?tab=readme-ov-file",
      liveLink: "https://imagedrive.netlify.app/",
      features: ["User Intractive UI", "User profiles", "Uder sign Up and Sign In"]
    },
   
  ]
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter))
  
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
    <section id="projects" ref={ref} className="font-sans section-padding">
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
          className="flex flex-wrap justify-center gap-3 my-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
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
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary-500 transition-colors"
                      >
                        <FiGithub size={18} />
                      </a>
                    )}
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
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-800">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
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

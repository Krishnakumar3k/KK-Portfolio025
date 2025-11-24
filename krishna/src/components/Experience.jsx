import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  FiBriefcase, 
  FiCalendar, 
  FiMapPin, 
  FiArrowRight,
  FiUsers,
  FiTrendingUp,
  FiAward,
  FiCode,
  FiClock
} from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const { theme } = useTheme()
  const [activeCard, setActiveCard] = useState(0)

 const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "SPRAC Services Private Limited.",
      location: "Lucknow, Noida,  Uttar Pardesh INDIA",
      period: "Jan 2025 - Present",
      duration: "",
      type: "Full-time",
      description: "Working as software engineer for PMAY U project with cutting-edge SaaS platforms based software to developed for the (Govt. Of India).",
      achievements: [
        "Working with the team size of 10+ developers to built a SaaS platform",
        "Built the APIs and Dynamic UIs for PMAY-U and RERA government projects.",
        "Optimized database queries improving performance by 40%",
        "Conducted code reviews with developers"
      ],
      technologies: ["React", "Node.js", "MySQL", "MERN Stack"],
      icon: <FiCode />,
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      companyLogo: "https://media.licdn.com/dms/image/v2/D560BAQEERbQ4pKikzA/company-logo_200_200/company-logo_200_200/0/1736329183357?e=2147483647&v=beta&t=YKlcct51TM133it2z0eMdaRWnGUwcF0vo9n2cKEkaDo",
      stats: {
        projects: 2,
        teamSize: 10,
        impact: "70%"
      }
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Panorama Software Solutions Private Limited.",
      location: "Noida Uttar Prdesh",
      period: " July 2024 - Janury 2025",
      duration: "",
      type: "Full-time",
      description: "Developed and maintained multiple client projects while collaborating with cross-functional teams to deliver high-quality solutions.",
      achievements: [
        "Developed and maintained multiple client projects",
        "Created RESTful APIs for seamless integration",
        "Implemented responsive designs and animations",
        "Collaborated with UX/UI designers for pixel-perfect designs"
      ],
      technologies: [ "MERN Stack", "React", "Node js and Express", "MongoDB", "JavaScript", "CSS3"],
      icon: <FiBriefcase />,
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      companyLogo: "https://media.licdn.com/dms/image/v2/C560BAQF3f4UWnAOK2w/company-logo_200_200/company-logo_200_200/0/1630660232736/panorama_software_solutions_logo?e=2147483647&v=beta&t=zyjB5Gbx3r50fMl4DdAHFJT0_i_nzlZtYk2ljV1bR7I",
      stats: {
        projects: 2,
        teamSize: 5,
        impact: "40%"
      }
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "Softpro India Computer Technologies Private Limited.",
      location: "Lucknow UP",
      period: "July 2023 - June 2024",
      duration: "1 years",
      type: "Full-time",
      description: "Built  high performnce API and responsive websites for diverse clients while focusing on performance optimization and user experience enhancement.",
      achievements: [
        "Built API and  responsive websites for clients across various industries",
        "Implemented front-end features using modern JavaScript",
        "Build the API for LMS software.",
        "Collaborated with designers for high-quality user experiences"
      ],
      technologies: ["JavaScript","Node js", "React js", "HTML5", "CSS3", "Bootstrap"],
      icon: <FiTrendingUp />,
      gradient: "from-pink-500 to-red-600",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
      companyLogo: "https://lh5.googleusercontent.com/proxy/jKvMDLGEleUpuSA0UIvkExiAFXXOy4CvkBW3k00kAZspaA_0VLbSivyOYANyyQ-A1TPvWF0",
      stats: {
        projects: 3,
        teamSize: 8,
        impact: "80%"
      }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const statsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "backOut"
      }
    }
  }

  const circleVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "backOut"
      }
    }
  }

  return (
    <section id="experience" className="font-sans section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-6 mb-4">
            <h2 className="section-title !mb-0 !after:hidden">Professional Journey</h2>
            
            {/* Total Experience Circle Button */}
            <motion.div
              variants={circleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                scale: 1.1,
                rotate: 360,
                transition: { duration: 0.6 }
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
            >
              {/* Outer Ring Animation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-dark-800" />
              </motion.div>
              
              {/* Main Circle */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex flex-col items-center justify-center text-white shadow-2xl group-hover:shadow-primary-500/50 transition-all duration-300">
                {/* Background Pattern */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-lg md:text-xl font-bold"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    2.6+
                  </motion.div>
                  <div className="text-xs md:text-sm font-medium opacity-90">
                    Years
                  </div>
                </div>
                
                {/* Clock Icon */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent-500 flex items-center justify-center text-white shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiClock size={12} className="md:w-4 md:h-4" />
                </motion.div>
                
                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary-500/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                whileHover={{ opacity: 1, y: -5, scale: 1 }}
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-dark-800 dark:bg-white text-white dark:text-dark-800 text-xs rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
              >
                Total Experience
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-dark-800 dark:bg-white rotate-45" />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Section Title Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "4rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-4"
          />
          
          <p className="text-lg text-dark-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Explore my career progression and the impact I've made at each step of my professional journey.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setActiveCard(index)}
              className={`relative overflow-hidden rounded-2xl ${exp.bgColor} ${exp.borderColor} border-2 transition-all duration-500 hover:shadow-2xl group`}
            >
              {/* Background Gradient Animation */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                initial={false}
                animate={{ 
                  background: activeCard === index 
                    ? `linear-gradient(45deg, ${exp.gradient})` 
                    : 'transparent'
                }}
              />

              <div className="relative z-10 p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Company Logo & Icon */}
                  <div className="lg:col-span-2 flex flex-col items-center space-y-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      <img 
                        src={exp.companyLogo} 
                        alt={`${exp.company} logo`}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover shadow-lg border-2 border-white dark:border-dark-600"
                      />
                      <motion.div
                        className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r ${exp.gradient} flex items-center justify-center text-white shadow-lg`}
                        whileHover={{ scale: 1.2 }}
                      >
                        {exp.icon}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Main Content */}
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <motion.h3 
                        className="text-xl md:text-2xl font-bold mb-2"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {exp.title}
                      </motion.h3>
                      <h4 className={`text-lg font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                        {exp.company}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-dark-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <FiMapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiCalendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiUsers size={14} />
                        <span>{exp.type}</span>
                      </div>
                    </div>

                    <p className="text-dark-600 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-dark-700 text-dark-700 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-dark-600"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="lg:col-span-3">
                    <motion.div
                      variants={statsVariants}
                      className="grid grid-cols-3 lg:grid-cols-1 gap-4"
                    >
                      <motion.div 
                        className="text-center p-3 rounded-lg bg-white/50 dark:bg-dark-700/50 backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`text-2xl font-bold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                          {exp.stats.projects}
                        </div>
                        <div className="text-xs text-dark-500 dark:text-gray-400">Projects</div>
                      </motion.div>
                      
                      <motion.div 
                        className="text-center p-3 rounded-lg bg-white/50 dark:bg-dark-700/50 backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`text-2xl font-bold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                          {exp.stats.teamSize}
                        </div>
                        <div className="text-xs text-dark-500 dark:text-gray-400">Team Size</div>
                      </motion.div>
                      
                      <motion.div 
                        className="text-center p-3 rounded-lg bg-white/50 dark:bg-dark-700/50 backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`text-2xl font-bold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                          {exp.stats.impact}
                        </div>
                        <div className="text-xs text-dark-500 dark:text-gray-400">Impact</div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Achievements Expandable Section */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeCard === index ? 'auto' : 0,
                    opacity: activeCard === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-6"
                >
                  <div className="pt-6 border-t border-gray-200 dark:border-dark-600">
                    <h5 className="font-semibold mb-3 flex items-center gap-2">
                      <FiAward className="text-primary-500" />
                      Key Achievements
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-white/70 dark:bg-dark-700/70 backdrop-blur-sm"
                        >
                          <FiArrowRight className="text-primary-500 mt-1 flex-shrink-0" size={14} />
                          <span className="text-sm text-dark-600 dark:text-gray-300">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Hover Effect Border */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                style={{ 
                  background: `linear-gradient(45deg, transparent, transparent)`,
                  border: `2px solid transparent`,
                  backgroundClip: 'padding-box'
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Career Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg">
            <FiTrendingUp />
            <span className="font-semibold">2+ Years of Professional Experience</span>
            <FiAward />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
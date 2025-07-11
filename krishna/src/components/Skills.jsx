import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiLayout, 
  FiTool, 
  FiCloud 
} from 'react-icons/fi'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

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

   const skillCategories = [
    {
      title: "Frontend",
      icon: <FiLayout size={24} />,
      skills: [
        { name: "React.js", level: 92, color: "#61DAFB" },
        { name: "JavaScript", level: 90, color: "#F7DF1E" },
        { name: "HTML", level: 80, color: "#4FC08D" },
        { name: "CSS", level: 85, color: "#000000" },
        { name: "Bootstrap", level: 88, color: "#3178C6" },
        { name: "Tailwind CSS", level: 88, color: "#38B2AC" }
      ],
      iconBg: "#61DAFB"
    },
    {
      title: "Backend",
      icon: <FiServer size={24} />,
      skills: [
        { name: "Node.js", level: 90, color: "#339933" },
        { name: "Express.js", level: 80, color: "#000000" },
        
        { name: "REST APIs", level: 90, color: "#FF6C37" }
      ],
      iconBg: "#339933"
    },
    {
      title: "Database",
      icon: <FiDatabase size={24} />,
      skills: [
        { name: "MongoDB", level: 65, color: "#47A248" },
        { name: "MySQL", level: 55, color: "#4479A1" },
       
      ],
      iconBg: "#47A248"
    },
    {
      title: "Programming",
      icon: <FiCode size={24} />,
      skills: [
        { name: "JavaScript", level: 90, color: "#F7DF1E" },
        { name: "C++", level: 55, color: "#3178C6" },
        { name: "Python", level: 40, color: "#3776AB" },
     
      ],
      iconBg: "#F7DF1E"
    },
 
    {
      title: "Tools",
      icon: <FiTool size={24} />,
      skills: [
        { name: "Git", level: 70, color: "#F05032" },
        { name: "Jira", level: 40, color: "#8DD6F9" }
      ],
      iconBg: "#F05032"
    }
  ]

  const getChartData = (skills) => ({
    labels: skills.map(skill => skill.name),
    datasets: [
      {
        data: skills.map(skill => skill.level),
        backgroundColor: skills.map(skill => `${skill.color}40`),
        borderColor: skills.map(skill => skill.color),
        borderWidth: 2,
        hoverBackgroundColor: skills.map(skill => skill.color),
        hoverBorderWidth: 0,
        borderRadius: 4,
      }
    ]
  })

  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 12,
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 10,
            weight: 'bold'
          },
          boxWidth: 8,
          boxHeight: 8
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 8,
        titleFont: {
          size: 12,
          weight: 'bold'
        },
        bodyFont: {
          size: 11
        },
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 1500,
      easing: 'easeInOutQuart'
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10
      }
    }
  }

  return (
    <section id="skills" ref={ref} className=" font-sans section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Code Symbols */}
        <motion.div
          className="absolute top-16 left-8 text-7xl font-bold text-primary-500/4 dark:text-white/4"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, 0],
            opacity: [0.04, 0.1, 0.04]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'</>'}
        </motion.div>
        
        <motion.div
          className="absolute top-32 right-16 text-6xl font-bold text-secondary-500/4 dark:text-white/4"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -20, 0],
            opacity: [0.04, 0.1, 0.04]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          {'{}'}
        </motion.div>
        
        <motion.div
          className="absolute bottom-24 left-1/3 text-5xl font-bold text-accent-500/4 dark:text-white/4"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 25, 0],
            opacity: [0.04, 0.1, 0.04]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        >
          {'[]'}
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 right-8 text-4xl font-bold text-primary-500/4 dark:text-white/4"
          animate={{
            y: [0, 18, 0],
            rotate: [0, -15, 0],
            opacity: [0.04, 0.1, 0.04]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          {'()'}
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 right-1/4 text-6xl font-bold text-secondary-500/4 dark:text-white/4"
          animate={{
            y: [0, -22, 0],
            rotate: [0, 30, 0],
            opacity: [0.04, 0.1, 0.04]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          {'<>'}
        </motion.div>
        
        <motion.div
          className="absolute top-20 left-1/2 text-3xl font-bold text-accent-500/4 dark:text-white/4"
          animate={{
            y: [0, 12, 0],
            rotate: [0, -25, 0],
            opacity: [0.04, 0.1, 0.04]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          {'//'}
        </motion.div>
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-12 w-20 h-20 border-2 border-primary-500/5 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-12 w-16 h-16 border-2 border-secondary-500/5 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-2/3 left-16 w-12 h-12 bg-gradient-to-r from-accent-500/5 to-primary-500/5 rounded-full"
          animate={{
            y: [0, -40, 0],
            x: [0, 25, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/3 w-8 h-8 bg-gradient-to-r from-secondary-500/5 to-accent-500/5 rotate-45"
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 3
          }}
        />
        
        {/* Floating Tech Symbols */}
        <motion.div
          className="absolute bottom-16 left-8 text-4xl font-bold text-primary-500/5 dark:text-white/5"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360, 0],
            opacity: [0.05, 0.12, 0.05]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        >
          {'⚛️'}
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-1/3 text-3xl font-bold text-secondary-500/5 dark:text-white/5"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -180, 0],
            opacity: [0.05, 0.12, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7
          }}
        >
          {'⚡'}
        </motion.div>
      </div>
      
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="card p-4 backdrop-blur-sm bg-white/50 dark:bg-dark-800/50"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-3 text-white shadow-lg"
                  style={{ 
                    backgroundColor: category.iconBg,
                    boxShadow: `0 4px 15px ${category.iconBg}40`
                  }}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6, ease: "easeInOut" }
                  }}
                >
                  {category.icon}
                </motion.div>
                <motion.h3 
                  className="text-lg font-bold bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: `linear-gradient(135deg, ${category.iconBg}, ${category.iconBg}88)`
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {category.title}
                </motion.h3>
              </div>
              
              <div className="h-[250px] relative">
                <Pie 
                  data={getChartData(category.skills)} 
                  options={chartOptions}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
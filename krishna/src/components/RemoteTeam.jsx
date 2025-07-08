import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiUsers, FiClock, FiGlobe, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const RemoteTeam = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const teamMembers = [
    {
      name: "Aman Kushwaha",
      role: "Software Engineer",
      experience: "2+ years",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGC9-f4ec2lYw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696397349014?e=1757548800&v=beta&t=_mKuX4GVuXWpwFjYWJJoC3ojMA1lbWtnqRxMGjhORNM",
      skills: ["React", "Angular", "JavaScript", "TypeScript" ],
      social: {
        linkedin: "https://www.linkedin.com/in/aman-kushwaha-21a267224/",
        github: "https://github.com",
       
      },
      description: "Specialized in building scalable web applications with modern JavaScript frameworks."
    },
    {
      name: "Krishna Kumar",
      role: "Software Engineer",
      experience: "2+ years",
      image: "https://media.licdn.com/dms/image/v2/D5635AQEmR08nCkn31A/profile-framedphoto-shrink_400_400/B56ZbyHzCGHUAc-/0/1747818853258?e=1752609600&v=beta&t=6hzk94jNocUAVABWQS0B1T-um32BkN_XHpifRBQXA28",
      skills: [ "JavaScript", "Node.js", "React js", "MongoDB", "MySql"],
      social: {
        linkedin: "https://www.linkedin.com/in/krishna-kumar-789505202/",
        github: "https://github.com/Krishnakumar3k",
       
      },
      description: "Expert in full-stack development with a focus on futuristic scope."
    },
    {
      name: "Retesh Sharma",
      role: "Software Engineer",
      experience: "2+ years",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGC7cFG6yAJ5w/profile-displayphoto-shrink_400_400/B56ZaCBYJCHgAg-/0/1745938122069?e=1757548800&v=beta&t=QI_LR8XJU-cLd8ouS62qULfuq1hKxeB7Byu0M1MBDAo",
      skills: ["JavaScript", "React js","Node js", "Tailwind CSS", "Sopify"],
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com"
      },
      description: "Passionate about creating beautiful and intuitive user interfaces ans web application."
    },
    {
      name: "Ansar Mansoorie",
      role: "Full Stack Developer",
      experience: "2+ years",
      image: "https://media.licdn.com/dms/image/v2/D4D35AQGj5Vz2EUNVrA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1664766346275?e=1752609600&v=beta&t=SEsJP-qG1E_2tYqwsG9v7yjLWblr5NTCjqAIscIZdKo",
      skills: ["MERN Stack", "JavaScript", "React js", "Node js"],
      social: {
        linkedin: "https://www.linkedin.com/in/mo-ansar-mansoorie-1574321b9/",
        github: "https://github.com/MoAnsarMansoorie",
        twitter: "https://twitter.com"
      },
      description: "Specializes in building robust and scalable frontend and backend web application."
    }
  ]

  const benefits = [
    {
      title: "Experienced Teams",
      description: "Access to pre-vetted senior developers with 5+ years of experience",
      icon: <FiUsers size={32} />,
      color: "#3a86ff"
    },
    {
      title: "Flexible Hiring",
      description: "Scale your team up or down based on project requirements",
      icon: <FiClock size={32} />,
      color: "#8338ec"
    },
    {
      title: "Global Talent",
      description: "Access to top developers from around the world",
      icon: <FiGlobe size={32} />,
      color: "#ff006e"
    }
  ]

  return (
    <section id="remote-team" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900" ref={ref}>
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Hire Remote Team
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xl text-dark-600 dark:text-gray-300">
            Build your dream team with our pool of expert developers. We provide pre-vetted, 
            experienced professionals ready to join your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 text-center"
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: `${benefit.color}20` }}
              >
                <span style={{ color: benefit.color }}>{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-dark-500 dark:text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Meet Our Expert Team</h3>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="pb-12"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="card overflow-hidden">
                  <div className="relative h-48 overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-700 dark:to-dark-600">
                    {/* Circular Profile Image Container */}
                    <motion.div
                      className="relative w-32 h-32 group"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Animated Background Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 p-1"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="w-full h-full rounded-full bg-white dark:bg-dark-800" />
                      </motion.div>
                      
                      {/* Profile Image */}
                      <motion.div
                        className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-xl border-2 border-white dark:border-dark-600"
                        whileHover={{ 
                          boxShadow: "0 15px 30px rgba(58, 134, 255, 0.3)",
                          scale: 1.05
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                        
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        {/* Shine Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-20"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 4,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                      
                      {/* Pulsing Ring Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary-500/50"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Floating Dots */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg"
                        animate={{
                          y: [0, -5, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      <motion.div
                        className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-lg"
                        animate={{
                          y: [0, 5, 0],
                          scale: [1, 0.8, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      />
                    </motion.div>
                    
                    {/* Social Links Overlay */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <div className="flex space-x-3">
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary-500 transition-colors"
                        >
                          <FiLinkedin size={16} />
                        </a>
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary-500 transition-colors"
                        >
                          <FiGithub size={16} />
                        </a>
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary-500 transition-colors"
                        >
                          <FiTwitter size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                    <p className="text-primary-500 font-medium mb-2">{member.role}</p>
                    <p className="text-dark-500 dark:text-gray-400 text-sm mb-4">
                      {member.description}
                    </p>
                    <div className="flex items-center mb-4">
                      <FiClock className="text-primary-500 mr-2" />
                      <span className="text-sm font-medium">{member.experience}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-500"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default RemoteTeam
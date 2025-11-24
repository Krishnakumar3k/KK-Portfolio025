import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend,
  FiCheck,
  FiAlertCircle
} from 'react-icons/fi'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: ''
    })
    
    // In a real app, you would send the data to your backend or a service like EmailJS
    setTimeout(() => {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: 'Your message has been sent! I will get back to you soon.'
      })
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSubmitted: false, message: '' }))
      }, 5000)
    }, 1500)
  }
  
  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      value: 'krishnakumar3kgt@gmail.com',
      link: 'mailto:krishnakumar3kgt@gmail.com'
    },

    {
      icon: <FiMapPin size={24} />,
      title: 'Location',
      value: 'Noida, UP'
    }
  ]
  
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
   <section id="contact" className="font-sans section-padding" ref={ref}>
  <div className="container-custom">
    <motion.h2 
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      Get In Touch
    </motion.h2>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="lg:col-span-3 space-y-6 flex flex-col items-center"
      >
        {/* Contact Information Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <p className="text-dark-600 dark:text-gray-300 mb-8 px-4 sm:px-0">
            Feel free to reach out to me for any questions, collaboration opportunities,
            or if you just want to say hello. I'll get back to you as soon as possible.
          </p>
        </motion.div> 
        
        {/* Responsive Contact Details */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mt-4 w-full"
        >
          <div className="
            flex flex-col sm:flex-row 
            sm:flex-wrap sm:justify-center 
            gap-6 sm:gap-10 
            w-full 
            text-center sm:text-left
          ">
            
            {/* Email */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500">
                <FiMail size={18} />
              </div>
              <a 
                href="mailto:krishnakumar3kgt@gmail.com" 
                className="text-primary-500 hover:underline break-all"
              >
                krishnakumar3kgt@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500">
                <FiMapPin size={18} />
              </div>
              <span className="text-dark-500 dark:text-gray-400">
                Noida, U.P, India
              </span>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href="https://www.linkedin.com/in/krishna-kumar-789505202"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-500 hover:underline"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-700 flex items-center justify-center">
                  <svg className="w-4 h-4 text-current" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span>LinkedIn</span>
              </a>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

  )
}

export default Contact
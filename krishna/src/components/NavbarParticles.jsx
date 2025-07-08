import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const NavbarParticles = () => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    
    // Set canvas size to full screen for home page
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Enhanced floating particle class for full screen
    class FloatingParticle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 1.5
        this.vy = (Math.random() - 0.5) * 1.5
        this.radius = Math.random() * 3 + 1
        this.opacity = Math.random() * 0.4 + 0.2
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulsePhase = Math.random() * Math.PI * 2
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.pulsePhase += this.pulseSpeed

        // Wrap around edges
        if (this.x < -20) this.x = canvas.width + 20
        if (this.x > canvas.width + 20) this.x = -20
        if (this.y < -20) this.y = canvas.height + 20
        if (this.y > canvas.height + 20) this.y = -20
      }

      draw() {
        const pulseFactor = Math.sin(this.pulsePhase) * 0.4 + 0.8
        const currentRadius = this.radius * pulseFactor
        const currentOpacity = this.opacity * pulseFactor

        ctx.beginPath()
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2)
        
        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, currentRadius * 3
        )
        
        if (theme === 'dark') {
          gradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity})`)
          gradient.addColorStop(0.5, `rgba(255, 255, 255, ${currentOpacity * 0.5})`)
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        } else {
          gradient.addColorStop(0, `rgba(58, 134, 255, ${currentOpacity})`)
          gradient.addColorStop(0.5, `rgba(58, 134, 255, ${currentOpacity * 0.5})`)
          gradient.addColorStop(1, 'rgba(58, 134, 255, 0)')
        }
        
        ctx.fillStyle = gradient
        ctx.fill()
      }
    }

    // Enhanced geometric shape class
    class GeometricShape {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.8
        this.vy = (Math.random() - 0.5) * 0.8
        this.size = Math.random() * 15 + 8
        this.rotation = 0
        this.rotationSpeed = (Math.random() - 0.5) * 0.03
        this.opacity = Math.random() * 0.3 + 0.1
        this.shape = Math.floor(Math.random() * 4) // 0: triangle, 1: square, 2: hexagon, 3: circle
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.rotation += this.rotationSpeed

        // Wrap around edges
        if (this.x < -30) this.x = canvas.width + 30
        if (this.x > canvas.width + 30) this.x = -30
        if (this.y < -30) this.y = canvas.height + 30
        if (this.y > canvas.height + 30) this.y = -30
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        
        ctx.strokeStyle = theme === 'dark' 
          ? `rgba(255, 255, 255, ${this.opacity})` 
          : `rgba(58, 134, 255, ${this.opacity})`
        ctx.lineWidth = 1.5
        ctx.beginPath()

        switch (this.shape) {
          case 0: // Triangle
            ctx.moveTo(0, -this.size)
            ctx.lineTo(-this.size * 0.866, this.size * 0.5)
            ctx.lineTo(this.size * 0.866, this.size * 0.5)
            ctx.closePath()
            break
          case 1: // Square
            ctx.rect(-this.size/2, -this.size/2, this.size, this.size)
            break
          case 2: // Hexagon
            for (let i = 0; i < 6; i++) {
              const angle = (i * Math.PI) / 3
              const x = Math.cos(angle) * this.size
              const y = Math.sin(angle) * this.size
              if (i === 0) ctx.moveTo(x, y)
              else ctx.lineTo(x, y)
            }
            ctx.closePath()
            break
          case 3: // Circle
            ctx.arc(0, 0, this.size, 0, Math.PI * 2)
            break
        }
        
        ctx.stroke()
        ctx.restore()
      }
    }

    // Initialize particles for full screen
    const initParticles = () => {
      particlesRef.current = []
      
      // Add more floating particles for full screen
      for (let i = 0; i < 60; i++) {
        particlesRef.current.push(new FloatingParticle())
      }
      
      // Add more geometric shapes
      for (let i = 0; i < 25; i++) {
        particlesRef.current.push(new GeometricShape())
      }
    }

    // Enhanced connections for full screen
    const drawConnections = () => {
      const particles = particlesRef.current.filter(p => p instanceof FloatingParticle)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.15
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = theme === 'dark' 
              ? `rgba(255, 255, 255, ${opacity})` 
              : `rgba(58, 134, 255, ${opacity})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw connections first (behind particles)
      drawConnections()
      
      // Update and draw all particles
      particlesRef.current.forEach(particle => {
        particle.update()
        particle.draw()
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }

    // Enhanced mouse interaction for full screen
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      
      particlesRef.current.forEach(particle => {
        if (particle instanceof FloatingParticle) {
          const dx = mouseX - particle.x
          const dy = mouseY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            const force = (100 - distance) / 100
            particle.vx += dx * force * 0.008
            particle.vy += dy * force * 0.008
          }
        }
      })
    }

    // Initialize and start animation
    initParticles()
    animate()
    
    canvas.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}

export default NavbarParticles
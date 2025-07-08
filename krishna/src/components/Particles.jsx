import { useCallback, useEffect, useState } from 'react'
import { loadSlim } from '@tsparticles/slim'
import { useTheme } from '../context/ThemeContext'
import Particles from '@tsparticles/react'

const ParticlesComponent = () => {
  const { theme } = useTheme()
  const [particlesReady, setParticlesReady] = useState(false)
  
  const particlesInit = useCallback(async (engine) => {
    console.log('Initializing particles engine...')
    try {
      await loadSlim(engine)
      console.log('Particles engine loaded successfully')
      setParticlesReady(true)
    } catch (error) {
      console.error('Error loading particles:', error)
    }
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    console.log('Particles container loaded:', container)
  }, [])

  useEffect(() => {
    console.log('Particles component mounted, theme:', theme)
  }, [theme])

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: theme === 'dark' ? "#ffffff" : "#3a86ff",
      },
      links: {
        color: theme === 'dark' ? "#ffffff" : "#3a86ff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.5,
        random: false,
        animation: {
          enable: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 3,
        random: true,
        animation: {
          enable: false,
        },
      },
    },
    detectRetina: true,
  }

  return (
    <div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}

export default ParticlesComponent
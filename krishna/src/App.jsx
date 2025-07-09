// src/App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import RemoteTeam from './pages/RemoteTeam'
import Github from './pages/Github'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { useTheme } from './context/ThemeContext'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange'
import { useEffect } from 'react'

function App() {
  const { theme } = useTheme()

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  return (
    <BrowserRouter>
      <div className="App min-h-screen">
        <ScrollToTopOnRouteChange />
        <Navbar />
        <main className="pt-12 md:pt-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/remote-team" element={<RemoteTeam />} />
            <Route path="/github" element={<Github />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  )
}

export default App

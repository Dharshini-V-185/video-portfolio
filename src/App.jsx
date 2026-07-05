import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Expertise from './components/Expertise'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Leadership from './components/Leadership'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Expertise />
      <Skills />
      <Experience />
      <Leadership />
      <Achievements />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App

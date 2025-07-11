import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import ExperienceSection from './components/ExperienceSection'
import AboutMeSection from './components/AboutMeSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Skills />
      <ExperienceSection />
      <AboutMeSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
      <Toaster  position="top-right"  reverseOrder={false}/>
    </div>
  )
}

export default App

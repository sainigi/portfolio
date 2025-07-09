import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import ExperienceSection from './components/ExperienceSection'
import AboutMeSection from './components/AboutMeSection'

function App() {


  return (
    <div className='mx-30'>
      <Header />
      <HeroSection />
      <Skills />
      <ExperienceSection />
      <AboutMeSection />
    </div>
  )
}

export default App

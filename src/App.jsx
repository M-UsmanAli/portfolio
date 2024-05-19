import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutSection from './components/AboutSection/AboutSection'
import Services from './components/Services/Services'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <Services/>
    </div>
  )
}

export default App
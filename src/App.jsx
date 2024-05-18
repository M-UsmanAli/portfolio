import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutSection from './components/AboutSection/AboutSection'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutSection/>
    </div>
  )
}

export default App
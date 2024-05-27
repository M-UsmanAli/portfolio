import React from 'react'
import AboutSection from './components/AboutSection/AboutSection'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import MyWork from './components/MyWork/MyWork'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutSection from './components/AboutSection/AboutSection'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


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
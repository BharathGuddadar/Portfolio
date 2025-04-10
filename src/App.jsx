import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SkillSpheres from './components/SkillSphere'
import AnimatedBackground from './ThreeD/Background'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import ContactForm from './components/ContactForm'


const App = () => {
  return (
    <div>
      <AnimatedBackground/>
      <div className="home">
        <Navbar/>
        <Home/>
        <About/>
        <SkillSpheres/>
        <WorkExperience/>
        <ContactForm/>
      </div>
      
    </div>
  )
}

export default App

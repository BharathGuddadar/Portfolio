import React from 'react'
import '../styles/About.css'
import AboutCard from './AboutCard'
const About = () => {
  return (
    <div className='about-container' id='about'>
        <div className="about">
        <h3 className='head-about'>Overview.</h3>
        <p> <a href="./BHARATH-GP-Resume.pdf" download class="button btn" style={{textDecoration:"none", fontSize:"25px", color:"deepskyblue"}}>Download Resume⬇️</a></p>
        </div>
      
      <p className='about-p' >Driven by curiosity and a passion for technology, I love turning ideas into reality through code. With a strong foundation in frontend and backend development, I aim to create impactful, user-friendly experiences. My journey has been a blend of exploration, problem-solving, and continuous learning.
Take a look around to see my projects, learn more about my skills, and discover what fuels my creativity and dedication in the tech world.</p>
      <div className="about-card">
      {/* <ThreeDCard cardText="JavaScript" color="#c282f9ee" textColor="#323330" />
      <ThreeDCard cardText="App Development" color="#61447aee" textColor="#323330" /> */}
      <AboutCard/>
      
        <div className="card"></div>
        
      </div>
    </div>
  )
}

export default About

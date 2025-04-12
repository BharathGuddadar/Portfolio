import React from 'react'
import '../styles/SkillSpheres.css'
import BallCanvas from './Ball'

const SkillSphere = () => {
  return (

    <div className="skill-container">
      <h4 className='skill-head'>Skills.</h4>
      <p className='skill-p'>A Lifelong Learner and a Passionate Developer My journey in tech has been a blend of formal education, hands-on projects, and invaluable guidance from mentors, teammates, and my own curiosity. I've explored multiple domains - from frontend and backend web development to  data structures, algorithms, AI/ML, and app development.</p>
      <div className='skills'>
        
        <div className="shperes"><BallCanvas icon={'./js.png'} /></div>
        <div className="shperes"><BallCanvas icon={'./java1.png'} /></div>
        <div className="shperes"><BallCanvas icon={'./python.png'} /></div>
        <div className="shperes"><BallCanvas icon={'./react.png'} /></div>
        <div className="shperes"><BallCanvas icon={'./node.png'} /></div>

        <div className="shperes"><BallCanvas icon={'./canva.jpeg'} /></div>
        <div className="shperes"><BallCanvas icon={'./express.png'} /></div>

</div>
    </div>
    
  )
}

export default SkillSphere

import React from 'react'
import '../styles/Home.css'
import { Typewriter } from "react-simple-typewriter";
import ThreeDAvatar from './ThreeDAvatar';

const Home = () => {
  return (
    <div className="container" id='home'>
        <div className="greet">
          <h3 style={{color:"#928cff"}}>Hii</h3>
          <h3>I'm BHARATH</h3>
        <p style={{color:"#928cff", fontSize:"40px"}}>
        <Typewriter
          words={["Full stack dev", "App Developer", "Tech Explorer"]}
          loop={0} // Infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
        </div>
        <div className="avatar">
          <img src='./stickerGif.webp'></img>
        </div>
    </div>
    
  )
}

export default Home

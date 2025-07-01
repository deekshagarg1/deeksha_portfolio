import React from 'react'

export const About = ({click4, click1}) => {
  return (
    <>
    <div className="about-main">

 <div className="hero-container">
      <div className="hero-left">
        <h2>
          Hi <br />
          I'm <span className="highlight">Deeksha</span> <br />
          MEARN Stack Developer
        </h2>
        <p>
          A MERN stack developer is a professional who builds web applications using the MERN stack, 
          a collection of technologies that includes Frontend , Backend, MongoDB, Express, React, and Node.js. 
          MERN stack developers are responsible for the entire software development lifecycle.
        </p>

        <div className="hero-buttons">
          <button onClick={click4}>Contact</button>
          <button onClick={click1}>Projects</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="image-wrapper">
          {/* <img src="/src\assets\pic.png" alt="deeksha" /> */}
          <img src="/pic2.jpg" alt="" />
        </div>
      </div>
    </div>



{/* ----------------------------         */}
    </div>
    
    
    </>
  )
}

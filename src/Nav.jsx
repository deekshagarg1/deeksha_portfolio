import React, { useState } from 'react'

export const Nav = ({click}) => {
const[OpenMenu , setOpenMenu]=useState(false)
function openmenu(){
    setOpenMenu(!OpenMenu)
}

  return (
    <>
    <div className="nav-main">


     <div className="nav-left">   <p>DEEKSHA GARG</p></div>

<div className="nav-right1" onClick={openmenu}>{OpenMenu ? "X" : "☰"}</div>
{/* ⋮ */}
{/* https://www.piliapp.com/symbol/menu/ */}

        <div className={`nav-right ${OpenMenu ? "active" : ""}`}>
            <a href="">About Me</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="" onClick={click}>Experience</a>
            <a href="">Certificate</a>
            <a href="">Contact</a>
        </div>


    </div>
    
    </>
  )
}

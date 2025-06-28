
import { useRef, useState } from 'react'
import { About } from './About'
import './App.css'
import './App1.css'
import { Certificate } from './Certificate'
import { Contact } from './Contact'
import { Experience } from './Experience'
import { Nav } from './Nav'
import { Project } from './Project'
import { Skills } from './Skills'

function App() {

  const[OpenMenu , setOpenMenu]=useState(false)
  function openmenu(){
      setOpenMenu(!OpenMenu)
  }


// const[exp , setexp]=useState("")

// const u=useRef()

const e=useRef()
const a=useRef()
const p=useRef()
const s=useRef()
const c=useRef()

function click(){
  a.current.scrollIntoView({behaviour:"smooth"}) 
  // u.current.style.borderbottom="lightblue"
}

function click1(){
 p.current.scrollIntoView({behaviour:"smooth"})
}

function click2(){
    s.current.scrollIntoView({behaviour:"smooth"})
}

function click3(){
     e.current.scrollIntoView({behaviour:"smooth"})
}

function click4(){
   c.current.scrollIntoView({behaviour:"smooth"}) 
}

// function click1(){
  
// }
 




  return (
    <>
    
{/* <div className="nav1" > <Nav click={click}/></div> */}
  <div className="nav-main">


     <div className="nav-left" >   <p >DEEKSHA GARG</p></div>

<div className="nav-right1" onClick={openmenu}>{OpenMenu ? "X" : "☰"}</div>
{/* ⋮ */}
{/* https://www.piliapp.com/symbol/menu/ */}

        <div className={`nav-right ${OpenMenu ? "active" : ""}`}>

          <p onClick={click}>About Me</p>
          <p onClick={click2}>Skills</p>
          <p onClick={click1}>Projects</p>
          <p onClick={click3}>Experience</p>
          <p >Certificate</p>
          <p onClick={click4}>Contact</p>
            {/* <a href="">About Me</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="" onClick={click}>Experience</a>
            <a href="">Certificate</a>
            <a href="">Contact</a> */}
        </div>
    </div>

    {/* ---------------------------------------- */}

<div className="about1" ref={a}> <About click4={click4} click1={click1}/></div>
<div className="skills1" ref={s}>   <Skills/></div>
<div className="project1" ref={p}>    <Project p={p}/></div>
<div className="experience1 " ref={e}>   <Experience /></div>
{/* <div className="certificate1"> <Certificate/></div> */}
<div className="contact1" ref={c}>    <Contact c={c}/></div>

   
   
 



    
    
    </>
  )
}

export default App

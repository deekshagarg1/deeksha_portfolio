import React, { useState } from 'react'

export const Contact = ({c}) => {
const[name , setname]=useState("")
const[email, setemail]=useState("")
const[message, setmessage]=useState("")
const[file , setfile]=useState("")


// POST API------------------------

const send1 = async()=>{
  // alert(data)

const result = await fetch ("http://localhost:3000/information", {
  method:"post",
  body:JSON.stringify({name,email,message,file}),
  headers:{"content-type":"application/json"}
})
alert("send")

const data = await result.json()
console.log(data)

}



  return (
    <>
    
    <div className="contact-main" ref={c}>

{/* contact */}

<div className="contact-container">
      {/* Form Section */}
      <div className="form-section">
        <h2>Contact Me</h2>
        <br /><br />
        <form>
          <input type="text" placeholder="First Name" className="input-field" onChange={(e)=>setname(e.target.value)}/>
          <input type="email" placeholder="Email" className="input-field"onChange={(e)=>setemail(e.target.value)} />
          <textarea
            placeholder="Text your message here..."
            className="textarea-field" onChange={(e)=>setmessage(e.target.value)}
          ></textarea>
          <div className="form-footer">
            <label className="attach-label">📎 Attach documents : <input type="file" onChange={(e)=>setfile(e.target.value)}/></label>
            <button className="send-button" onClick={send1}>SEND</button>
          </div>
        </form>
      </div>

      {/* Map and Info Section */}
      <div className="info-section">
        <h2>Where to find me</h2>
        <br /><br />
        {/* <iframe
          title="map"
          className="map"
          src="https://maps.google.com/maps?q=Institute%20of%20Biology%20Sib%20RAN,%20Russia&t=&z=15&ie=UTF8&iwloc=&output=embed"
        ></iframe> */}
<iframe
  title="map"
  className="map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24313.1234567890!2d37.123456!3d55.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0JrQvtC80L_RgNC-!5e0!3m2!1sen!2sru!4v1587654321000!5m2!1sen!2sru"
  width="100%"
  height="180"
  style={{ border: "0" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60595253.09658815!2d69.87483544078651!3d22.032729744276146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1747980481128!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <div className="contact-info">
          <p>📍 Gwalior(474003) , MP , India , </p>
          <a href="mailto:officialdeekshagarg@gmail.com">✉️ officialdeekshagarg@gmail.com</a>
          {/* <p>✉️ officialdeekshagarg@gmail.com</p> */}
          <p>📞 +91 7440307053</p>

<div className="contact-logo"> 🔗 
<a href="https://www.linkedin.com/in/deeksha-garg-abab80284/">linkdin</a> | <a href="https://github.com/deekshagarg1">GitHub</a>
 {/* | <a href="">Twitter</a> */}
</div>

        </div>
      </div>
    </div>


    </div>
    <div className="last">© 2025. All rights are reserved | Deeksha Garg</div>
    
    </>
  )
}

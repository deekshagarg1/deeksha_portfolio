import React from 'react'

export const Project = ({p}) => {
  return (
    <>
    <div className="project-main" ref={p}>

<h1>MY PROJECTS</h1>

<section className='project-section'>

<div className='card-main'>
<br /><br />
<center>  <h2>STATIC WEBSITE</h2></center>
<br /><br /><br />
  <div class="card-container">
  

    {/* <!-- Housing --> */}
    <div class="card">
      <img src="/src\assets\housing.png" alt="Housing"/>
      <div class="card-content">
     A Housing web clone is a real estate platform that enables users to buy, sell, or rent properties. It includes features like property listings with images, map integration, price filters, and user authentication. Designed for seamless property discovery and comparison, it simplifies real estate transactions for both buyers and sellers.
      </div>
    </div>

    {/* <!-- Spoof --> */}
    <div class="card">
      <img src="/src\assets\spoofcard.jpg" alt="Spoof"/>
      <div class="card-content">
      A SpoofCard web clone allows users to make anonymous or disguised phone calls by changing caller ID. It features a simple interface, secure call routing, voice modulation, and real-time usage history. Ideal for privacy-focused users, prank calls, or testing phone responses without revealing personal identity.
      </div>
    </div>

    {/* <!-- Biba Clone --> */}
    <div class="card">
      <img src="/src\assets\biba1.jpg" alt="Biba Clone"/>
      <div class="card-content">
     A Biba web clone is an e-commerce platform for ethnic fashion, offering a wide range of women’s apparel like kurtis, sarees, and suits. It features category-wise browsing, size filters, product galleries, and secure checkout. Designed with a modern, elegant UI, it replicates the shopping experience of the original Biba brand.
      </div>
    </div>
  </div>

</div>


<div className="projects">
<br /><br />
<center>  <h2>DYNAMIC WEBSITE</h2></center>
<br /><br /><br /><br />

<div className="p1">
  {/* <iframe  src="/src\assets\rentproject.mp4" autoplay controls muted ></iframe> */}
  <video src="/src\assets\rentproject.mp4" autoplay controls muted ></video>
</div>
<div className="p2">
  <span>Rental Wesite</span>
  <p>Our rental website is a responsive, user-friendly platform where individuals can list and browse homes or flats for rent. Built with React.js for the frontend and Node.js/Express.js with MongoDB on the backend, it offers seamless navigation and smooth animations for an engaging experience. Users can easily sign up, log in, and upload property listings with images and details. The site includes a personalized dashboard for managing listings and ensures secure authentication. Optimized for all devices, it provides renters with an intuitive interface to explore listings, making property search and rental management simple and efficient for everyone involved.</p>
</div>
</div>



<div className="projects">

<div className="p21">
    <video src="/src\assets\ecommerce_project.mp4"  autoplay controls muted ></video>
  {/* <iframe  src="/src\assets\ecommerce_project.mp4" autoplay=""  ></iframe> */}
</div>
<div className="p2">
  <span>E-Commerce Wesite</span>
  <p>Our E-Commerce website is a responsive, user-friendly platform designed for seamless online shopping. The frontend is built with React.js, styled using Bootstrap, and manages state efficiently with Redux. Users can easily sign up, log in, and navigate through categories and products. The backend, developed with Node.js and Express.js, features a secure REST API and uses Multer for image uploading. Sellers can upload and manage their products, while buyers can add items to the cart, view pricing, and proceed to checkout. The platform offers smooth navigation, real-time updates, and a clean interface optimized for all devices, enhancing the shopping experience.</p>
</div>
</div>

<div className="projects">

<div className="p3">
   <video src="/src\assets\patient.mp4"  autoplay controls muted ></video>
  {/* <iframe  src="/src\assets\patient.mp4" autoplay=""  ></iframe> */}
</div>
<div className="p2">
  <span>Patient Wesite</span>
  <p>The ACME Patient website is a responsive, user-friendly platform designed to manage personal health information seamlessly. The frontend uses React.js with Bootstrap for styling and Redux for state management, offering smooth navigation and intuitive dashboards. Users can sign up, log in, and securely upload their health data, including weight and BMI. The backend, built with Node.js and Express.js, provides a robust REST API supporting features like online registration and shipping of health-related products. The dashboard tracks current weight and weight gain progress, while tools like the BMI calculator help users monitor their health effectively across all devices.</p>
</div>
</div>




</section>



    </div>
    
    
    
    </>
  )
}

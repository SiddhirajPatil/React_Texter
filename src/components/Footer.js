import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
<footer className="text-center text-lg-start bg-light text-muted" style={{marginTop:"40px"}}>

  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>
  
  <section className="">
    <div className="container text-center text-md-start mt-5">
      
      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>TEXTER
          </h6>
          <p>
            Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
       
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            
          </h6>
          <p>
            <a href="#!" className="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Js</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Tailwind</a>
          </p>
        </div>
       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
            
          </h6>
          <p>
            <Link to='/' className="text-reset">HOME</Link>
          </p>
          <p>
            <Link to='/about' className="text-reset">ABOUT</Link>
          </p>
          <p>
            <Link to='/contact' className="text-reset">CONTACT</Link>
          </p>
          <p>
            <Link to='/' className="text-reset">HELP</Link>
          </p>
        </div>
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> Pune,46</p>
          <p>
          <i class="fas fa-envelope me-3"></i>
           sidhiraj.patil@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i>+91 8999073891</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
      
      </div>
      
    </div>
  </section>
  


  <div className="text-center p-4" style={{backgroundColor:" rgba(0, 0, 0, 0.05)"}}>
   
    <a className="text-reset fw-bold" href="https://www.linkedin.com/in/siddhiraj-patil09/">Siddhiraj Patil</a>
  </div>

</footer>

  )
}

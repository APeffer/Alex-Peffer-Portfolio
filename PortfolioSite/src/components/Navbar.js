import React from "react"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand active"  aria-current="page" to="/" >Alex Peffer</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerMenu" aria-controls="navbarTogglerMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerMenu">
            <div className="navbar-nav me-auto">
              <Link className="nav-link" to="aboutme">About Me</Link>
              <Link className="nav-link" to="projects">Projects</Link>
              <Link className="nav-link" to="games">Games</Link>
              <a href="https://github.com/APeffer" target="_blank" className="nav-link">Github</a>
              <a href="https://www.linkedin.com/in/apeffer/" target="_blank" className="nav-link">LinkedIn</a>
            </div>
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="contact">Contact</Link> 
            </div>
          </div>
          
          
        </div>
            
        </nav>
  )
}

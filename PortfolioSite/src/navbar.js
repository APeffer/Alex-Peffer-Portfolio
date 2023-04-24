import React from 'react'
import './navbar.css'

function Navbar() {


  return (
    <div className="navbar">
      <nav>
        <a href="/" className="site-title">Alex Peffer</a>
        <ul>
          <li>
            <a href="/resume">Resume</a>
          </li>
          <li>
            <a href="/aboutMe">About Me</a>
          </li>
        </ul>    
      </nav>
    </div>
  )
}

export default Navbar
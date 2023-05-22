import React from 'react'
import './navbar.css'

function Navbar() {


  return (
    <>
      <button className='menu-button-mobile'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </button>
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
    </>
  )
}

export default Navbar
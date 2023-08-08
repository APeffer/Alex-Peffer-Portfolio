import React from "react"

function Navbar({onHome, onAboutMe, onResume, onProjects, onPokemonApp}) {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#" onClick={onHome}>Alex Peffer</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="myNavbar">
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <button className="nav-link" onClick={onAboutMe}>About Me</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link"  onClick={onResume}>Resume</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link"  onClick={onProjects}>Projects</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link"  onClick={onPokemonApp}>Pokemon App</button>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
      </>
  )
}

export default Navbar
import React from "react"

function Navbar({onHome, onAboutMe, onResume, onProjects, onPokemonApp}) {
  
  function clickHandler(e){
    switch (e.target.value){
      case 'home':
        console.log("home")
        onHome();
        break;
      case 'aboutme':
        console.log("aboutme")
        onAboutMe();
        break;
      case 'resume':
        console.log("resume")
        onResume();
        break;
      case 'projects':
        console.log("projects")
        onProjects();
        break;
      case 'pokemonapp':
        console.log("pokemonapp")
        onPokemonApp();
        break;
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <button style={{backgroundColor: 'transparent', border: 'none', padding: '0px', paddingTop: '0px', paddingBottom: '5px'}} className="navbar-brand" onClick={clickHandler} value={'home'}>Alex Peffer</button>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="myNavbar">
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <button className="nav-link" onClick={clickHandler} value={'aboutme'}>About Me</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={clickHandler} value={'resume'}>Resume</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={clickHandler} value={'projects'}>Projects</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={clickHandler} value={'pokemonapp'}>Pokemon App</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={clickHandler} value={'test'}>Test</button>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
      </>
  )
}

export default Navbar
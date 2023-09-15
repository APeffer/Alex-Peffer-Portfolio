import React from "react"

function Navbar({onHome, onAboutMe, onProjects, onGames, onContact}) {
  
  function clickHandler(e){
    switch (e.target.value){
      case 'home':
        console.log("home");
        document.body.style.backgroundColor = '#9c9184';
        onHome();
        break;
      case 'aboutme':
        console.log("aboutme");
        document.body.style.backgroundColor = '#FFFFFF';
        onAboutMe();
        break;
      case 'projects':
        console.log("projects");
        document.body.style.backgroundColor = '#FFFFFF';
        onProjects();
        break;
      case 'games':
        document.body.style.backgroundColor = '#111418';
        console.log("games");
        onGames();
        break;
      case 'contact':
        document.body.style.backgroundColor = '#FFFFFF';
        console.log('contact');
        onContact();
        break;
      default:
        document.body.style.backgroundColor = '#FFFFFF';
        console.log("default");
    }
  }

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <button style={
                {backgroundColor: 'transparent', 
                border: 'none', padding: '0px', 
                paddingTop: '0px', 
                paddingBottom: '5px'}} 
                className="navbar-brand" onClick={clickHandler} value={'home'} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Alex Peffer</button>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="myNavbar">
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <button className="nav-link" onClick={clickHandler} value={'aboutme'} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" >About Me</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={clickHandler} value={'projects'} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Projects</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={clickHandler} value={'games'} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Games</button>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <button className="nav-link" onClick={clickHandler} value={'contact'} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</button>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
      </>
  )
}

export default Navbar
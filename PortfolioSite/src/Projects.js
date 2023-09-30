import "./Projects.css"
import { Link } from "react-router-dom"

export default function MyGames() {

    return (
        <div id="project-container">
            
            <h1 className="project-container-title">Projects</h1>

            {/* Current Site */}
            <div className="project-flex-container" >
                <div className="project">
                    <div className="proj-img-container"> 
                        <img className="project-image" src="/images/projectthumbnails/portfolioprojectthumbnail.png" alt="Pokemon App Icon"/>
                        <div className="proj-container-overlay"> 
                            <h2 className="project-title">This Site!</h2>
                        </div>
                    </div>
                    <button className= "project-button-try"><Link className="nav-link" to="..">Try</Link></button>
                    <a href="https://github.com/apeffer" target="_blank" rel="noopener noreferrer">
                        <button className= "project-button-source">
                            <img src="/images/icons/github-mark-white.png" alt="github icon" />
                            Source
                        </button>
                    </a>
                </div>

                {/* Pokemon App */}
                <div className="project">
                    <div className="proj-img-container">
                        <img className="project-image" src="/images/projectthumbnails/PokemonThumbnail.png" alt="Pokemon App Icon"/>
                        <div className="proj-container-overlay">
                            <h2 className="project-title">Pokemon App</h2>
                        </div>
                    </div>
                    <button className= "project-button-try"><Link className="nav-link"  to="../pokemonapp">Try</Link></button>
                    <a href="https://github.com/APeffer/Pokemon-App" target="_blank" rel="noopener noreferrer">
                        <button className= "project-button-source">
                            <img src="/images/icons/github-mark-white.png" alt="github icon" />
                            Source
                        </button>
                    </a>
                </div>
            </div>          
        </div>
    )
}
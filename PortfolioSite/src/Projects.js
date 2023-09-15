import { useState, Children} from "react"
import PokemonApp from "./pokemonApp"
export default function MyGames() {
    const [projectFrame, setProjectFrame] = useState(<PokemonApp />)

    return (
        <div id="project-container text-center">
            

            <div className="text-center" id="projects-buttons">
            <button><img src="./images/projectthumbnails/pokemonthumbnail.png"/></button>
            </div>
            

            
        </div>
    )
}
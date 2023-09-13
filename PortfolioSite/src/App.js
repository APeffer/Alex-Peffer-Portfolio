import Navbar from './navbar';
import Body from './body';
import Home from './Home';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import PokemonApp from './pokemonApp';
import Contact from './Contact';
import { useState } from 'react';


function App() {
  const [bodyContent, setBodyContent] = useState(<Home/>)

    return (
      <div className="App">
        
        <Navbar
          onHome={() => setBodyContent(<Home/>)}
          onAboutMe={() => setBodyContent(<AboutMe/>)}
          onMyProjects={() => setBodyContent(<MyProjects/>)}
          onPokemonApp={() => setBodyContent(<PokemonApp/>)}
          onContact={() => setBodyContent(<Contact/>)}
          />
          <div className='' style={{height: '100%'}}>
            <Body>
              {bodyContent}
            </Body>
          </div>
      </div>
    );
}

export default App
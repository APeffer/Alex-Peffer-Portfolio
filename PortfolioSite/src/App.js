import Navbar from './navbar';
import Body from './body';
import Home from './Home';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Projects from './Projects';
import PokemonApp from './pokemonApp';
import { Children, useEffect, useState } from 'react';


function App() {
  const [bodyContent, setBodyContent] = useState(<Home/>)

    return (
      <div className="App">
        <Navbar 
          onHome={() => setBodyContent(<Home/>)}
          onAboutMe={() => setBodyContent(<AboutMe/>)}
          onResume={() => setBodyContent(<Resume/>)}
          onProjects={() => setBodyContent(<Projects/>)}
          onPokemonApp={() => setBodyContent(<PokemonApp/>)}
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
import Navbar from './navbar';
import Body from './body';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Games from './Games';
import Contact from './Contact';
import { useState } from 'react';



function App() {
  const [bodyContent, setBodyContent] = useState([<Home/>, <AboutMe/>, <Projects/>])

    return (
      <div className="App">
        
        <Navbar
          onHome={() => setBodyContent([<Home/>,<AboutMe />,<Projects />])}
          onAboutMe={() => setBodyContent(<AboutMe/>)}
          onProjects={() => setBodyContent(<Projects/>)}
          onGames={() => setBodyContent(<Games/>)}
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
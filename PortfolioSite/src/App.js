import React, {Component} from 'react'
import Navbar from './navbar';
import Body from './body';
import PokemonApp from './pokemonApp';

export class App extends Component {


  render() {
    return (
      <div className="App">
        <Navbar />
        <Body />
        <PokemonApp/>
      </div>
    )
  }
}

export default App
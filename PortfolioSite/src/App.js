import React, {Component} from 'react'
import Navbar from './navbar';
import PokemonApp from './pokemonApp';

export class App extends Component {


  render() {
    return (
      <div className="App">
        <Navbar />
        <PokemonApp />
      </div>
    )
  }
}

export default App
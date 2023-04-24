import React, {Component} from 'react';
import './pokemonApp.css';

const urlBase = 'https://pokeapi.co/api/v2/pokemon/';

class PokemonApp extends Component {

  // Constructor, initialize states
  constructor(props) {
    super(props)
    this.state = {
      textInputValue: '',
      typeValue: '',
      movesValue: '',
    }
  }

  capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  submitHandler = (event) => {
    // prevent page from reloading
    event.preventDefault();

    let pokemonName = event.target.elements[0].value;

    //create new url for API Fetch method
    let newURL = urlBase + pokemonName;
    
    // fetch data from pokeAPI
    fetch(newURL)
    .then(response => response.json())
    .then(data => {
        this.setState({
          // change data values and set state for the results
          textInputValue: `Name: ${this.capitalizeFirstLetter(data.name)}`, 
          typeValue: `Type: ${data.types.map(type => type.type.name).join(', ')}`, 
          movesValue: `Moves: ${data.moves.map(moves => moves.move.name).join(', ')}`
          
        });
      })
      .catch(error => {
        console.log(error)
        this.setState({
          textInputValue: 'That pokemon does not exist',
          typeValue: '', 
          movesValue: ''
        })
      });
  };

  render() {
    return(
      <>
        {/*pokemon logo*/}
        <img src="images/PokemonLogo.svg" alt="Pokemon Logo" width="500" />
        <h1>Enter a pokemon:</h1>

        {/*form and button*/}
        <div id="pokeForm">
          <form onSubmit={this.submitHandler}>
            <input type="text" name="pokeInput" placeholder="pokemon name/number"/>
            <button type='submit'>Submit</button>
          </form>
        </div>

        {/*Results area*/}
        <div id="pokeData">
          <h2>{this.state.textInputValue}</h2>
          <br/>
          <p>{this.state.typeValue}</p>
          <p>{this.state.movesValue}</p>
        </div>
      </>
    )
  }
}

export default PokemonApp;

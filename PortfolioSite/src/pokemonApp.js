import React, {Component} from 'react';
import './pokemonApp.css';

const urlBase = 'https://pokeapi.co/api/v2/pokemon/';

class PokemonApp extends Component {

  // Constructor, initialize states
  constructor(props) {
    super(props)
    this.state = {
      sprite: '',
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

    let pokemonName = this.capitalizeFirstLetter(event.target.elements[0].value);

    //create new url for API Fetch method
    let newURL = urlBase + pokemonName.toLowerCase();
    
    // fetch data from pokeAPI
    fetch(newURL)
    .then(response => response.json())
    .then(data => {
        this.setState({
          // change data values and set state for the results
          sprite: data.sprites.front_default,
          textInputValue: `Name: ${this.capitalizeFirstLetter(data.name)}`, 
          typeValue: `Type: ${data.types.map(type => type.type.name).join(', ')}`, 
          movesValue: `Moves: ${data.moves.map(moves => moves.move.name).join(', ')}`
          
        });
      })
      .catch(error => {
        console.log(error)
        this.setState({
          sprite: '',
          textInputValue: 'That pokemon does not exist',
          typeValue: '', 
          movesValue: ''
        })
      });
  };

  spriteDisplay() {
    let displayPicture = "display: none"
    if (this.state.sprite !== ''){
      displayPicture = "display: block"
  }
  return(displayPicture)
}

  render() {
    return(
      <div className="pokemonApp-Container">

        {/*pokemon logo*/}
        <img className="PokemonLogo" src="images/PokemonLogo.png" alt="Pokemon Logo" />
        <h1 id="inputText">Enter a pokemon:</h1>

        {/*form and button*/}
        <div id="pokeForm">
          <form onSubmit={this.submitHandler}>
            <input type="text" name="pokeInput" placeholder="Pikachu" maxLength="12"/>
            <button type='submit'>Submit</button>
          </form>
        </div>

        {/*Results area*/}
        <div id="pokeData" style={{textAlign: this.state.textInputValue === 'That pokemon does not exist' ? "center" : "left"}}>
          <img className="PokemonSprite" height="200px" width="200px" src={this.state.sprite} alt={this.state.textInputValue} style={{display: this.state.sprite !== '' ? "block" : "none"}} />
          <h2>{this.state.textInputValue}</h2>
          <br/>
          <p>{this.state.typeValue}</p>
          <p>{this.state.movesValue}</p>
        </div>

      </div>
    )
  }
}

export default PokemonApp;

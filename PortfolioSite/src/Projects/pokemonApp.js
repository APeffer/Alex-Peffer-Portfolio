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

        {/* tooltip menu*/}
        
        <div id="pokeTooltipDropdown">
          <img src='images\tooltip_icon.webp' width="60px" alt="tooltip icon" />
          <div id="pokeTooltipDropdown-content">
            <h5>About :</h5>
            <p>This Pokemon themed application was the first project I built to learn about APIs. 
                It uses the <a href='https://pokeapi.co/'>PokeApi</a> RESTful Pokemon API.
            </p>
            <br/>
            <p>
              To use, enter any Pokemon name or number 1-1010.
            </p>
          </div>
        </div>

        {/*pokemon logo*/}
        <img className="PokemonLogo" src="images/PokemonLogo.png" alt="Pokemon Logo" />
        <h1 className="user-select-none" id="inputText">Enter a Pokemon:</h1>

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

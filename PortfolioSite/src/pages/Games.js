import React from 'react'
import "../styles/Games.css"

export default function Games() {
  return (
    <div>
        <div className='games'>
            <h1>My Games</h1>
            <div className='games-container'>
              <iframe className="game" title="Grapple" frameborder="0" src="https://itch.io/embed/565881?linkback=true" width="552" height="167"><a href="https://ayypeff.itch.io/grapple">Grapple by AyyPeff</a></iframe>
              <br />
              <iframe className="game" title="Drifty Car" frameborder="0" src="https://itch.io/embed/2209574?linkback=true" width="552" height="167"><a href="https://ayypeff.itch.io/drifty-car">Drifty Car by AyyPeff</a></iframe>
            </div>
        </div>
    </div>
  )
}

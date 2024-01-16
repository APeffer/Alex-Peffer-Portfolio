import React from 'react'

export default function Games() {
  return (
    <div>
        <div className='p-md-5 text-center' id="games-buttons">
            <h1 className=''>My Games</h1>
            
            <iframe className='border border-dark m-3' title="Grapple" frameborder="0" src="https://itch.io/embed/565881?linkback=true" width="552" height="167"><a href="https://ayypeff.itch.io/grapple">Grapple by AyyPeff</a></iframe>
            
            <iframe className='border border-dark m-3' title="Drifty Car" frameborder="0" src="https://itch.io/embed/2209574?linkback=true" width="552" height="167"><a href="https://ayypeff.itch.io/drifty-car">Drifty Car by AyyPeff</a></iframe>
        </div>
    </div>
  )
}

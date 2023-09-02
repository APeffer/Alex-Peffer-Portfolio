import React from 'react'

export default function Contact() {
  return (
    <div>



      
      <div className='container'>

          <div className=''>
            <h1 className='mt-4 text-center'>Contact</h1>
            <form className="m-4">

              
              

              {/* EMAIL INPUT */}
              <label className="form-label" for="emailInput">Email: </label>
              <input className="form-control" type="email" placeholder='myname@email.com' id='emailInput'></input>

              {/* REASON FOR CONTACT*/}
              <label className='form-label' for="">Reason for Contact: </label>
              

            </form>
          </div>
  
      </div>
      


    </div>
  )
}

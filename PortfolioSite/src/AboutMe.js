import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div id='aboutme-container'>


        <div className="text-center">
            <div className="p-5 p-md-5 text-center">
                <h1>About Me</h1>
            </div>
            <div className="" id='aboutme-body'>
                <div className='p-3'>
                    <h2 className='' id='skills-header'><strong>Strong Skills:</strong></h2>
                    <div className='skill-dropdown'>
                        <img src='./images/icons/icons8-html-96.png' alt="HTML icon" />
                        <p>HTML</p>
                    </div>
                    <div className='skill-dropdown'>
                        <img src='./images/icons/icons8-css-96.png' alt="CSS icon" />
                        <p>CSS</p>
                    </div>                
                    <div className='skill-dropdown'>
                        <img src='./images/icons/icons8-sass-96.png' alt="Sass icon" />
                        <p>Sass</p>
                    </div>                   
                    <div className='skill-dropdown'>
                        <img src='./images/icons/icons8-bootstrap-96.png' alt="Bootstrap icon" />
                        <p>Bootstrap</p>
                    </div>                   
                    <div className='skill-dropdown'>
                        <img src='./images/icons/icons8-javascript-96.png' alt="JavaScript icon" />
                        <p>JavaScript</p>
                    </div>
                <div className='p-3'>
                    <h2 id='skills-header'><strong>Other Skills:</strong></h2>
                    <img src='./images/icons/icons8-react-native-96.png' alt="React icon" />
                    <img src='./images/icons/icons8-nodejs-96.png' alt="Node.js icon" />
                    <img src='./images/icons/icons8-mysql-96.png' alt="MySQL icon" />
                </div>
                    

                </div>
            </div>    
        </div>


    </div>
  )
}

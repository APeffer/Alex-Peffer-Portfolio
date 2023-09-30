import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div id='aboutme-container'>


        <div className="text-center">
            <div className="p-5 p-md-5 text-center" id='aboutme-header'>
                <h1>About Me</h1>
                <p>
                    I'm Alex, your friendly neighborhood web developer with a passion for exploring unknown knowledge, problem solving, and technology!
                </p>
                <h5>💻 Web Warrior</h5>
                <p>
                    I love to learn, especially when it comes to web development. 
                    My intensely curious mind and love for technology keeps me endlessly fueled to absorb new information and allows me to be highly adaptive to new situations.
                </p>
                <h5>🎮 Competitive Heart</h5>
                <p>
                    A day isn't complete without playing some kind of game! League of Legends, Overwatch, World of Warcraft, or Halo are my four horsemen that I grew up on.
                </p>
                <h5>🛹 On Board and Active </h5>
                <p>
                    When I'm not at the desk, you can find me at the gym, on my skateboard, paddleboarding in the river, or playing volleyball.
                </p>
                <h5>🍕 Pizza Maestro</h5>
                <p>
                    Healthy foods keep me strong and active, but occasionally, I can't help but cook up a homemade pie. From classic margheritas to pesto chicken, my pizza game is as strong as my code!
                </p>
                <p>
                    🤘 Stay Wicked,<br/>
                    - Alex
                </p>
            </div>
            

            <div className="" id='aboutme-body'>
                <div className='p-3' id = 'strong-skills'>
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

                <div className='p-3' id='other-skills'>
                    <h2 id='skills-header'><strong>Other Skills:</strong></h2>
                    <div className='skill-dropdown'>
                        <img src='./images/icons/icons8-react-native-96.png' alt="React icon" />
                        <p>React.js</p>
                    </div>
                    <div className='skill-dropdown'>
                        <img src='./images/icons/icons8-nodejs-96.png' alt="Node.js icon" />
                        <p>Node.js</p>
                    </div>
                    <div className='skill-dropdown'>
                        <img src='./images/icons/icons8-mysql-96.png' alt="MySQL icon" />
                        <p>MySQL</p>
                    </div>
                    
                    
                    
                </div>
                    

                </div>
            </div>    
        </div>


    </div>
  )
}

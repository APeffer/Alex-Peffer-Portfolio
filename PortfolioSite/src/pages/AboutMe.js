import React from 'react';
import '../styles/AboutMe.css';

export default function AboutMe() {
    const languageSkills = ['C++', 'Java', 'Javascript', 'Python', 'C#']
    const frontendSkills = ['React.js', 'Javascript', 'HTML', 'CSS', 'SASS', 'Bootstrap' ]
    const backendSkills = ['Node.js', 'Express.js', 'JWT (JSON Web Tokens)', 'BCrypt' ]
    const dataSkills = ['SQL', 'MySQL', 'MongoDB']

  return (
    <div className='aboutme-container'>


        <div className="text-center">
            <div className="p-5 p-md-5 text-center" id='aboutme-header'>
                <h1>About Me</h1>
                <p>
                    After 6 years in the U.S. Air Force as an electrician, I decided I wanted to pursue my education in a field I was passionate about. 
                    I'm currently a senior at Texas State University majoring in Computer Science with a minor in Mass Communications. 
                    I enjoy the challenges of learning new tools and solving problems with computers and software. 
                </p>             
                
            </div>
            

            <div className="" id='aboutme-body'>

            <h1 className='' id='skills-header'>Skills:</h1>
                <div className='p-3 skill-container'>
                    <ul>
                        <h3>Languages</h3>
                        {languageSkills.map((skill, index) => (
                            <li key={index} className='skill'>{skill}</li> 
                        ))}
                    </ul>
                    <ul>
                        <h3>Front End</h3>
                        {frontendSkills.map((skill, index) => (
                            <li key={index} className='skill'>{skill}</li> 
                        ))}
                    </ul>
                    <ul>
                        <h3>Back End</h3>
                        {backendSkills.map((skill, index) => (
                            <li key={index} className='skill'>{skill}</li> 
                        ))}
                    </ul>
                    <ul>
                        <h3>Databases</h3>
                        {dataSkills.map((skill, index) => (
                            <li key={index} className='skill'>{skill}</li> 
                        ))}
                    </ul>
                    
                </div>
            </div>    
        </div>


    </div>
  )
}

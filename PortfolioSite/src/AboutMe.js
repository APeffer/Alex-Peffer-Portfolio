import React from 'react'

export default function AboutMe() {
  return (
    <div>


        <div className="mb-5 text-center">
            <div className="p-2 text-center">
                <h1>About Me</h1>
                <h5 className=''>My name is Alex, but many people call me Peff.</h5>
            </div>
            <div className="p-5 text-center bg-body-tertiary">
                <div className='container py-4'>
                    <h4>How'd you get started?</h4>
                    <p>
                        I started my software development journey by being interested in programming and having 
                        a desire to make video games. As of now I have two completed published games through 
                        Unity Game Engine and Gamemaker Studo 2.
                    </p>
                    <p>
                        To play <strong>My Games</strong> in your web browser through <i>itch.io </i>
                        <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="https://ayypeff.itch.io/" target="_blank" rel='noreferrer'>click here</a> (best on mouse and keyboard)
                    </p>
                    
                </div>
                <div className='container py-4'>
                    <h4>Why Web?</h4>
                    <p>I've always loved programming and web was the quickest way that made sense for me to start 
                        being able to see the results of my code. After realizing that I don't think I'd be interested 
                        in making someone else's game ideas for them in an office, I decided web was a way that I could 
                        potentially still work in the video game industry around a familiar environment. Additionally, 
                        I thought that I might be able to make some fun webapps using APIs from games I enjoy to make 
                        cool stuff that my friends might find useful.
                    </p>
                </div>
            </div>    
        </div>


    </div>
  )
}

import '../styles/Home.css';
import AboutMe from './AboutMe';
import Projects from './Projects';

export default function Home() {
  return (
    <div>
        <div className="container-lg" id='home-container'>
            <div className="row">
                <div className="col-md-5 text-center" id='headshot-img'>
                    {/* image for full screen */}
                    <img className='d-none img-fluid shadow-lg h-90  my-5 d-md-block' src="images/myHeadshot.webp" alt="profile pic"></img>
                    {/* image for small screen */}
                    <img className='shadow-lg my-3 h-90 d-md-none' height="300px" src="images/myHeadshot.webp" alt="profile pic"></img>
                </div>
                <div className="col-md-7 my-auto text-center" id='splash-text'>
                    <h1>Alex L. Peffer</h1>
                    <h2>Software Developer</h2>
                    <h4>Air Force Veteran</h4>
                </div>
            </div>
        </div>
        <AboutMe/>
        <Projects/>
    </div>
  )
}

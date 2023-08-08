export default function Home() {
  return (
    <div>
        <div className="container-lg">
            <div className="row">
                <div className="col-md-5 text-center">
                    <img className='d-none img-fluid shadow-lg h-90  my-5 d-md-block' src="images/Profile Pic.png" alt="profile pic"></img>
                    <img className='shadow-lg my-3 h-90 d-md-none' height="300px" src="images/Profile Pic.png" alt="profile pic"></img>
                </div>
                <div className="col-md-7 my-auto text-center">
                    <h1 className="h1">Alex L. Peffer</h1>
                    <h2 className="h2">Software Developer</h2>
                    <p>React, Bootstrap, ASP.NET </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

import React from 'react'
import history from '../history'

function About() {
    return (
        <div className='container p-4'>
            <div className='shadow p-5 rounded-3'>
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img
                            src="https://st3.depositphotos.com/1025323/12863/i/600/depositphotos_128630768-stock-photo-beyond-communication-background.jpg"
                            className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"
                            width={500} height={400} loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="display-6 fw-bold lh-1 mb-4">About exhibition</h2>
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
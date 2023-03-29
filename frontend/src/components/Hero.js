import React from 'react'
import history from '../history'

function Hero() {
    return (
        <div className="container px-3 pb-5 mb-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img
                        src="https://st3.depositphotos.com/1025323/12863/i/600/depositphotos_128630768-stock-photo-beyond-communication-background.jpg"
                        className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"
                        width={500} height={400} loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h2 className="display-6 fw-bold lh-1 mb-4">ISA Arts Exhibition</h2>
                    <p className="lead mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button
                            type="button"
                            className="btn btn-warning btn-lg px-4 me-md-2"
                            onClick={() => history.push("/gallery")}>
                            Gallery
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
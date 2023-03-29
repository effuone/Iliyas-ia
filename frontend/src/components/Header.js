import React from 'react'
import { useHistory } from "react-router-dom";

function Header() {
    const history = useHistory()
    const loggedIn = localStorage.getItem("loggedIn")

    return (
        <header className='d-flex flex-column align-items-center justify-content-center p-4 shadow-sm mb-2'>
            <h1 className=''>
                Arts Exhibition
            </h1>
            <div className='d-flex mt-3 align-items-center'>
                <p className='lead me-4 ' style={{ cursor: 'pointer' }} onClick={() => history.push("/home")}>Home</p>
                <p className='lead me-4 ' style={{ cursor: 'pointer' }} onClick={() => history.push("/gallery")}>Gallery</p>
                <p className='lead me-4 ' style={{ cursor: 'pointer' }} onClick={() => history.push("/about")}>About</p>
                <p className='lead me-3' style={{ cursor: 'pointer' }} onClick={() => history.push("/contact")}>Contact</p>
                {loggedIn ?
                    <button
                        type="button"
                        className="btn btn-warning mb-3"
                        onClick={() => history.push("/admin")}>Admin</button>
                    :
                    <button
                        type="button"
                        className="btn btn-warning mb-3"
                        onClick={() => history.push("/auth")}>Auth</button>
                }
            </div>
        </header>
    )
}

export default Header
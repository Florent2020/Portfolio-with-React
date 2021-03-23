import React, { useState } from 'react'
import {
    NavLink
} from "react-router-dom";


function Nav() {

    const [status, setStatus] = useState("open");

    return (
        <>
            <div
                className="burgerIcon"
                role="button"
                onClick={() => setStatus (status === "open" ? "close" : "open")}
            >
                <div className={status} />
                <div className={status} />
                <div className={status} />
            </div>

            <ul className="nav-ul ml-auto">
                <li><NavLink exact to="/" className="nav-item">Home</NavLink></li>
                <li><NavLink to="/About" className="nav-item">About</NavLink></li>
                <li><NavLink to="/projects" className="nav-item">Projects</NavLink></li>
                <li><NavLink to="/contact" className="nav-item">Contact</NavLink></li>
            </ul>
        </>
    )
}

export default Nav

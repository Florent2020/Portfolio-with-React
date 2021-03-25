import React, { useState } from 'react'
import {
    NavLink
} from "react-router-dom";


 // const burger = document.querySelector(".burgerIcon");
//  const navUL = document.querySelector("#header ul");

 // burger.addEventListener("click", () => {
 //     navUL.classList.toggle("show");
 // })

 // if (burger) {
 //     navUL.classList.add("show");
 // };

  // if (status === "close") {
 //     navUL.classList.add("show");
 // } else if (status === "open") {
 //     navUL.classList.remove("show");
 // };

function Nav() {

    const [status, setStatus] = useState("show");
    const [open, setOpen] = useState("open");

    return (
        <>
            <div
                className="burgerIcon"
                role="button"
                onClick={() => setStatus (status === "open" ? "close" : "open") || setOpen(open === "hidden" ? "show" : "hidden")}
            >
                <div className={status} />
                <div className={status} />
                <div className={status} />
            </div>

            <ul className={open}>
                <li onClick={() => setOpen(false) || setStatus(false)}><NavLink exact to="/" className="nav-item">Home</NavLink></li>
                <li onClick={() => setOpen(false) || setStatus(false)}><NavLink to="/About" className="nav-item">About</NavLink></li>
                <li onClick={() => setOpen(false) || setStatus(false)}><NavLink to="/projects" className="nav-item">Projects</NavLink></li>
                <li onClick={() => setOpen(false) || setStatus(false)}><NavLink to="/contact" className="nav-item">Contact</NavLink></li>
            </ul>
        </>
    )
}

export default Nav

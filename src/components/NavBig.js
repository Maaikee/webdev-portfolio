import React from 'react'
import {Link} from 'react-router-dom'

function NavBig() {
    return (
        <nav className="nav-big" id="nav">
                <ul className="nav-list">
                    <li
                        className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li
                        className="nav-item">
                        <Link to="about">About me</Link>
                    </li>
                    <li
                        className="nav-item">
                        <Link to="projects" >Projects</Link>
                    </li>
                </ul>
            </nav>
    )
}

export default NavBig
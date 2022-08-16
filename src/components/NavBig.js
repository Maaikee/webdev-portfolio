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
                        <a href="/#skills">Skills</a>
                    </li>
                    <li
                        className="nav-item">
                        <a href="/#about">About me</a>
                    </li>
                    <li
                        className="nav-item">
                        <a href="/#projects">Projects</a>
                    </li>
                </ul>
            </nav>
    )
}

export default NavBig
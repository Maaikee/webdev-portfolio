import React, {useState} from 'react'
import {Link} from "react-router-dom";

function NavSmall() {
    const [menuOpen, setMenuOpen] = useState(false)

    function handleMenuToggle() {
        setMenuOpen(prevState => !prevState)
    }

    return (
        <>
            <button
                className="nav-toggle"
                aria-label="toggle navigation"
                id="hamburger-btn"
                onClick={handleMenuToggle}
            >
                <span className="hamburger"></span>
            </button>
            <nav className={`nav-small ${menuOpen ? "nav-open" : ""}`} id="nav">
                <ul className="nav-list">
                    <li
                        className="nav-item"
                        onClick={handleMenuToggle}>
                        <Link to="/">Home</Link>
                    </li>
                    <li
                        className="nav-item"
                        onClick={handleMenuToggle}>
                        <a href="/#skills">Skills</a>
                    </li>
                    <li
                        className="nav-item"
                        onClick={handleMenuToggle}>
                        <a href="/#about">About me</a>
                    </li>
                    <li
                        className="nav-item"
                        onClick={handleMenuToggle}>
                        <a href="/#projects">Projects</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavSmall
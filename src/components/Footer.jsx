import React from 'react'

function Footer() {
    return (
        <div className="footer-container footer">
            <div className="footer-location">
                <img src="./images/location-dot-solid.svg" alt="Location icon"/>
                <p>Utrecht, NL</p>
            </div>
            <a href="mailto:maaike.konijnendijk@hotmail.com"
               className="mail footer-link">maaike.konijnendijk@hotmail.com</a>
            <ul className="socials-list">
                <li className="social footer-link">
                    <a href="https://www.linkedin.com/in/mkonijnendijk/">
                        <img src="./images/linkedin-brands.svg" alt="LinkedIn Icon"/>
                    </a>
                </li>
                <li className="social footer-link">
                    <a href="https://github.com/Maaikee">
                        <img src="./images/square-github-brands.svg" alt="GitHub Icon"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer
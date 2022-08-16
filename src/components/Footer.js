import React from 'react'

function Footer() {
    return (
        <div className="footer-container footer">
            <a href="mailto:maaike.konijnendijk@hotmail.com"
               className="mail footer-link">maaike.konijnendijk@hotmail.com</a>
            <ul className="socials-list">
                <li className="social footer-link"><i className="fa-brands fa-linkedin"></i></li>
                <li className="social footer-link"><i className="fa-brands fa-github"></i></li>
            </ul>
        </div>
    )
}

export default Footer
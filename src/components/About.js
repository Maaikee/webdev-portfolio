import React from 'react'
import {about} from "../siteData";

function About() {
    const aboutJsx = about.map((par, index) => <p className="about-p" key={index}>{par}</p>)

    return (
        <section className="about" id="about">
            <div className="container about-container">
                <h2 className="about-header">About me</h2>
                <p className="subtitle about-subtitle">Front-end developer based in Utrecht</p>
                <img src="img/dev-jane-02.jpg" className="about-img" alt=""/>
                {aboutJsx}
            </div>
        </section>
    )
}

export default About
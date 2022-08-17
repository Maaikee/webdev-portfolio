import React from 'react'

function Intro(props) {
    return (
        <section className="intro" id="home">
            <div className="container intro-container">
                <h1>{props.data.titleSpan && <span className="h1-span">{props.data.titleSpan}</span>} {props.data.title}</h1>
                <p className="subtitle h1-subtitle">{props.data.subtitle}</p>
                <img src={props.data.baseImg.src} className="intro-img" alt={props.data.baseImg.alt}/>
            </div>
        </section>
    )
}

export default Intro
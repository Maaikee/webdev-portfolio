import React from 'react'

function Intro(props) {
    return (
        <section className="intro" id="home">
            <div className="container intro-container">
                <h1>{props.data.headerSpan && <span className="h1-span">{props.data.headerSpan}</span>} {props.data.headerBold}</h1>
                <p className="subtitle h1-subtitle">{props.data.subtitle}</p>
                <img src={props.data.img} className="intro-img" alt=""/>
            </div>
        </section>
    )
}

export default Intro
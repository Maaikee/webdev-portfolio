import React from 'react'

function Project(props) {
    return (
        <section className="project-body container">
            <p>{props.data.description}</p>
            <img src={props.data.extraImg.src} alt={props.data.extraImg.alt}/>
            <p>{}</p>
            {props.data.link && <a href={props.data.link}>View this project on GitHub</a>}
        </section>
    )
}

export default Project
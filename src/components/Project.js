import React from 'react'

function Project(props) {
    return (
        <section className="project-body container">
            <p>{props.data.intro}</p>
            <img src={props.data.img} alt={props.data.alt}/>
            <p>{props.data.body}</p>
            {props.data.link && <a href={props.data.link}>View this project on GitHub</a>}
        </section>
    )
}

export default Project
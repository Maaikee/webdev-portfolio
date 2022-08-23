import React from 'react'
import Intro from "./Intro";

function ProjectDetails(props) {
    React.useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    const descriptionJsx = props.data.description.map((line, index) => <p key={index} className="project-p">{line}</p>)

    return (
        <>
            <Intro data={props.data}/>
            <section className="project">
                <div className="container project-container">
                    {descriptionJsx[0]}
                    <img src={props.data.extraImg.src} alt={props.data.extraImg.alt} className="project-img"/>
                    {descriptionJsx.slice(1)}
                    {props.data.link && <a href={props.data.link}>View this project on GitHub</a>}
                </div>
            </section>
        </>
    )
}

export default ProjectDetails
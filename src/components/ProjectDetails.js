import React from 'react'
import Intro from "./Intro";

function ProjectDetails(props) {
    React.useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    const descriptionJsx = props.data.description.map((line, index) => <p key={index} className="text-p">{line}</p>)

    return (
        <>
            <Intro data={props.data} type="project" />
            <section className="project">
                <div className="container text-container">
                    {descriptionJsx[0]}
                    <img src={props.data.extraImg.src} alt={props.data.extraImg.alt} className="project-img"/>
                    {descriptionJsx.slice(1)}
                    {props.data.link && <a href={props.data.link.url} className="btn project-link-btn">View this project on {props.data.link.type}</a>}
                </div>
            </section>
        </>
    )
}

export default ProjectDetails
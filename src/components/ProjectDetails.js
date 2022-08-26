import React from 'react'
import Intro from "./Intro";

function ProjectDetails(props) {
    React.useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    const toolsJsx = props.data.tools.map((tool, index) => <p key={index} className="tool-p">{tool}</p>)
    const descriptionJsx = props.data.description.map((line, index) => <p key={index} className="text-p">{line}</p>)
    const iFrame = <div className="iframe-container">
                        <iframe src={props.data.video}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                        >
                        </iframe>
                    </div>

    return (
        <>
            <Intro data={props.data} type="project" />
            <section className="project">
                <div className="container text-container">
                    <div className="tools-container">
                        {toolsJsx}
                    </div>
                    {descriptionJsx[0]}
                    {props.data.extraImg && <img src={props.data.extraImg.src} alt={props.data.extraImg.alt} className="project-img"/>}
                    {props.data.video && iFrame}
                    {descriptionJsx.slice(1)}
                    {props.data.link && <a href={props.data.link.url} className="btn project-link-btn">View this project on {props.data.link.type}</a>}
                </div>
            </section>
        </>
    )
}

export default ProjectDetails
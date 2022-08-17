import React from 'react'
import {Link} from 'react-router-dom'
import {projects} from "../siteData"

function Projects() {
    const projectCards = projects.map(project => {
        return (
            <Link to={project.url} className="project-link" key={project.key} >
                <div className="project-card">
                    <img
                        className="project-img"
                        src={project.baseImg.src}
                        alt={project.baseImg.alt}
                    />
                    <h3 className="project-header">{project.title}</h3>
                </div>
            </Link>
        )
    })

    return (
        <section className="projects" id="projects">
            <div className="container projects-container">
                <h2 className="projects-header">My projects</h2>
                <div className="portfolio">
                    {projectCards}
                </div>
            </div>
        </section>
    )
}

export default Projects
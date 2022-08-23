import React from "react"
import Intro from "./components/Intro"
import ProjectsOverview from "./components/ProjectsOverview"
import {introProps, projectIntro} from "./siteData"

function ProjectsPage(props) {
    React.useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Intro data={introProps.projects}/>
            <section className="projects-intro">
                <div className="container text-container">
                    <p className="text-p">{projectIntro}</p>
                </div>
            </section>
            <ProjectsOverview/>
        </>
    )
}

export default ProjectsPage
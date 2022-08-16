import React from "react"
import Intro from "./components/Intro"
import Project from "./components/Project"

function ProjectPage(props) {
    return (
        <>
            <Intro data={props.data.intro}/>
            <Project data={props.data.project}/>
        </>
    )
}

export default ProjectPage
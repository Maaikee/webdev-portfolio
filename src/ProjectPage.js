import React from "react"
import Intro from "./components/Intro"
import Project from "./components/Project"

function ProjectPage(props) {
    return (
        <>
            <Intro data={props.data}/>
            <Project data={props.data}/>
        </>
    )
}

export default ProjectPage
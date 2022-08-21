import React from "react";
import Intro from './components/Intro.js'
import Skills from './components/Skills.js'
import AboutOverview from './components/AboutOverview.js'
import ProjectsOverview from './components/ProjectsOverview.js'

import {introProps} from "./siteData";

function Home() {
    return (
        <>
            <Intro data={introProps} />
            <Skills/>
            <AboutOverview/>
            <ProjectsOverview/>
        </>
    )
}

export default Home
import React from "react";
import Intro from './components/Intro.js'
import Skills from './components/Skills.js'
import AboutOverview from './components/AboutOverview.js'
import ProjectsOverview from './components/ProjectsOverview.js'

import {introProps} from "./siteData";

function Home() {
    React.useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Intro data={introProps.home} />
            <Skills/>
            <AboutOverview/>
            <ProjectsOverview/>
        </>
    )
}

export default Home
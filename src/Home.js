import React from "react";
import Intro from './components/Intro.js'
import Skills from './components/Skills.js'
import About from './components/About.js'
import Projects from './components/Projects.js'

import {introProps} from "./siteData";

function Home() {
    return (
        <>
            <Intro data={introProps} />
            <Skills/>
            <About/>
            <Projects/>
        </>
    )
}

export default Home
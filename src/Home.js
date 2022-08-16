import React from "react";
import Intro from './components/Intro.js'
import Skills from './components/Skills.js'
import About from './components/About.js'
import Projects from './components/Projects.js'

const introProps = {
    headerSpan: "Hi, I am",
    headerBold: "Maaike",
    subtitle: "front-end dev",
    img: ""
}

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
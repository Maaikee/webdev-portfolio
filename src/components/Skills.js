import React from 'react'
import {skills} from "../siteData";

function Skills() {
    const skillsJsx = skills.map(skill => {
        return (
            <div className="skill" key={skill.key}>
                <h3 className="skill-header">{skill.title}</h3>
                <p className="skill-p">{skill.content}</p>
            </div>
        )
    })

    return (
        <section className="skills" id="skills">
            <div className="container skills-container">
                <h2 className="skills-header">My skills</h2>
                {skillsJsx}
                <a href="#projects" className="btn see-projects-btn">see my projects</a>
            </div>
        </section>
    )
}

export default Skills
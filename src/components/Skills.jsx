import { skills } from "../siteData";
import { Link } from "react-router-dom";

function Skills() {
  const skillsJsx = skills.map((skill) => {
    return (
      <div className="skill" key={skill.key}>
        <h3 className="skill-header">{skill.title}</h3>
        <p className="skill-p">{skill.content}</p>
      </div>
    );
  });

  return (
    <section className="skills" id="skills">
      <div className="container skills-container">
        <h2 className="skills-header">My skills</h2>
        <div className="skills-grid">{skillsJsx}</div>
        <Link to="/projects" className="btn see-projects-btn">
          see my projects
        </Link>
      </div>
    </section>
  );
}

export default Skills;

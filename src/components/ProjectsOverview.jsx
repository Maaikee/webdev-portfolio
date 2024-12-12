import { Link } from "react-router-dom";
import { projectData } from "../siteData";

function ProjectsOverview() {
  const projectCards = projectData.map((project) => {
    return (
      <Link
        to={`/projects/${project.url}`}
        className="project-link"
        key={project.key}
      >
        <div className="project-card">
          <div className="img-wrapper">
            <img
              className="project-card-img"
              src={project.baseImg.src}
              alt={project.baseImg.alt}
            />
          </div>
          <h3 className="project-header">{project.title}</h3>
        </div>
      </Link>
    );
  });

  return (
    <section className="projects" id="projects">
      <div className="container projects-container">
        <h2 className="projects-header">My projects</h2>
        <p className="projects-note">
          I'm currently working on adding more projects to this website, so
          check back soon to see more!
        </p>
        <div className="portfolio">{projectCards}</div>
      </div>
    </section>
  );
}

export default ProjectsOverview;

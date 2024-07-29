import React from "react";
import Skills from "./components/Skills";
import Intro from "./components/Intro";
import { introProps, about } from "./siteData";

function ProjectsPage(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutJsx = about.description.map((par, index) => (
    <p className="text-p" key={index}>
      {par}
    </p>
  ));

  return (
    <>
      <Intro data={introProps.about} />
      <section className="about">
        <div className="container text-container">{aboutJsx}</div>
      </section>
      <Skills />
    </>
  );
}

export default ProjectsPage;

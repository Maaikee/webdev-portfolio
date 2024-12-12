import React from "react";
import Intro from "./Intro";

function ProjectDetails({ data }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toolsJsx = data.tools.map((tool, index) => (
    <p key={index} className="tool-p">
      {tool}
    </p>
  ));
  const descriptionJsx = data.description.map((line, index) => (
    <p key={index} className="text-p">
      {line}
    </p>
  ));
  const iFrame = (
    <div className="iframe-container">
      <iframe
        src={data.video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );

  return (
    <>
      <Intro data={data} type="project" />
      <section className="project">
        <div className="container text-container">
          <div className="tools-container">{toolsJsx}</div>
          {descriptionJsx[0]}
          {data.extraImg && (
            <img
              src={data.extraImg.src}
              alt={data.extraImg.alt}
              className="project-img"
            />
          )}
          {data.video && iFrame}
          {descriptionJsx.slice(1)}
          {data.link && (
            <a href={data.link.url} className="btn project-link-btn">
              View this project on {data.link.type}
            </a>
          )}
        </div>
      </section>
    </>
  );
}

export default ProjectDetails;

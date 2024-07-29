import React from "react";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import AboutOverview from "./components/AboutOverview";
import ProjectsOverview from "./components/ProjectsOverview";

import { introProps } from "./siteData.js";

function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Intro data={introProps.home} />
      <Skills />
      <AboutOverview />
      <ProjectsOverview />
    </>
  );
}

export default Home;

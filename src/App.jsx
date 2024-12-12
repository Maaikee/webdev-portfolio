import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import components to render
import Home from "./Home";
import { PageNotFound } from "./PageNotFound";
import { NavSmall } from "./components/NavSmall";
import NavBig from "./components/NavBig";
import Footer from "./components/Footer";

// import components for different pages
import { projectData } from "./siteData";
import ProjectDetails from "./components/ProjectDetails";
import ProjectsPage from "./ProjectsPage";
import AboutPage from "./AboutPage";

function App() {
  // ensure menu change on resize
  const [width, setWidth] = useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  window.addEventListener("resize", handleResize);

  // create project routes
  const routesJsx = projectData.map((project, index) => {
    return (
      <Route
        path={`projects/${project.url}`}
        element={<ProjectDetails data={project} />}
        key={index}
      />
    );
  });

  return (
    <div className="App">
      <BrowserRouter basename="/webdev-portfolio/">
        <header className="App-header">
          <Link to="/">
            <div className="logo">
              <img src="./images/code-solid-black.svg" alt="site logo" />
            </div>
          </Link>
          {width < 750 ? <NavSmall /> : <NavBig />}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            {routesJsx}
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer>
          <Footer />
        </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

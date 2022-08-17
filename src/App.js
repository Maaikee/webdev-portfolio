import './App.css'
import React, {useState} from 'react'
import {Routes, Route} from "react-router-dom"

import Home from "./Home";
import ProjectPage from "./ProjectPage";
import NavSmall from './components/NavSmall'
import NavBig from './components/NavBig'
import Footer from './components/Footer'

import {projects} from './siteData'

function App() {
    // ensure menu change on resize
    const [width, setWidth] = useState(window.innerWidth)

    function handleResize() {
        setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    // create project routes
    const routesJsx = projects.map((project, index) => {
        return (
            <Route
                path={project.url}
                element={ <ProjectPage data={project}/> }
                key={index}
            />
        )
    })


  return (
      <div className="App">
          <header className="App-header">
            <div className="logo">--</div>
              {width < 750 ? <NavSmall/> : <NavBig/>}
          </header>
          <Routes>
            <Route path="/" element={ <Home/> }/>
            {routesJsx}
          </Routes>
          <Footer>
              <Footer />
          </Footer>
      </div>

  );
}

export default App;

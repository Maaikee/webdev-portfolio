import './App.css'
import React, {useState} from 'react'
import {Routes, Route} from "react-router-dom"

import Home from "./Home";
import ProjectPage from "./ProjectPage";
import NavSmall from './components/NavSmall'
import NavBig from './components/NavBig'
import Footer from './components/Footer'

import {lifelogProps, snakeProps, notesProps} from './siteData'

function App() {
    const [width, setWidth] = useState(window.innerWidth)

    function handleResize() {
        setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

  return (
      <div className="App">
          <header className="App-header">
            <div className="logo">--</div>
              {width < 750 ? <NavSmall/> : <NavBig/>}
          </header>
          <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="lifelogbrowser" element={ <ProjectPage data={lifelogProps}/> } />
            <Route path="snake" element={ <ProjectPage data={snakeProps} /> } />
            <Route path="notes" element={ <ProjectPage data={notesProps} /> } />
          </Routes>
          <Footer>
              <Footer />
          </Footer>
      </div>

  );
}

export default App;

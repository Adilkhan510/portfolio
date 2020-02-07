import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';
import Nav from './Components/nav';
import Landing from './Components/Landing';
import Typewriter from './Components/Typewriter';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component= {Landing} /> 
        <Route exact path="/projects" component= {Projects} /> 
      </Switch>

      {/* <Typewriter /> */}
      {/* <Projects /> */}

    </div>
  );
}

export default App;

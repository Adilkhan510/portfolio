import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';
import Nav from './Components/nav';
import Hero from './Components/Hero';
import Content from './Content/projects'
import Projects from './Components/Project/Projects'
import About from './Components/About'
import Particles from 'react-particles-js';



function App() {

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component= {About} /> 
        <Route exact path="/projects" component={()=> <Projects projects = {Content} />} />
      </Switch>
    </div>
  );
}

export default App;

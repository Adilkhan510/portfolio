import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';
import Nav from './Components/nav';
import Hero from './Components/Hero';
import Content from './Content/projects'
import Projects from './Components/Project/Projects'


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component= {Hero} /> 
        <Route exact path="/projects" component={()=> <Projects projects = {Content} />} />
      </Switch>

      {/* <Typewriter /> */}
      {/* <Projects /> */}

    </div>
  );
}

export default App;
